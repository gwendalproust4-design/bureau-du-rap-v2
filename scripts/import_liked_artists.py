import os
import re
import time
import json
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from dotenv import load_dotenv

# --- CONFIGURATION ---
try:
    load_dotenv(override=True)
    load_dotenv('clé.env', override=True)
except ImportError:
    print("python-dotenv not installed. Install it with: pip install python-dotenv")
    exit(1)

SPOTIFY_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID", "").strip()
SPOTIFY_CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET", "").strip()
REDIRECT_URI = "http://localhost:8888/callback"

if not SPOTIFY_CLIENT_ID or not SPOTIFY_CLIENT_SECRET:
    print("Error: Spotify credentials not found in environment variables.")
    exit(1)

# Initialize Spotify with OAuth
scope = "user-library-read"
try:
    sp = spotipy.Spotify(auth_manager=SpotifyOAuth(
        client_id=SPOTIFY_CLIENT_ID,
        client_secret=SPOTIFY_CLIENT_SECRET,
        redirect_uri=REDIRECT_URI,
        scope=scope
    ))
    print("Spotify authentication initialized.")
except Exception as e:
    print(f"Error initializing Spotify: {e}")
    exit(1)

# Paths
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(SCRIPT_DIR, "..", "src", "data.js")

def get_existing_rappers(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Simple regex to find IDs
        ids = set(re.findall(r'id:\s*["\'](.*?)["\']', content))
        # Also find names to be safe
        names = set(re.findall(r'nom:\s*["\'](.*?)["\']', content))
        
        return ids, names
    except Exception as e:
        print(f"Error reading data file: {e}")
        return set(), set()

def fetch_liked_artists(min_tracks=2):
    print("Fetching liked tracks...")
    artist_counts = {}
    
    offset = 0
    limit = 50
    
    while True:
        try:
            results = sp.current_user_saved_tracks(limit=limit, offset=offset)
            items = results['items']
            if not items:
                break
            
            for item in items:
                track = item['track']
                # Only count the main artist
                if track['artists']:
                    artist = track['artists'][0]
                    a_id = artist['id']
                    a_name = artist['name']
                    
                    if a_id not in artist_counts:
                        artist_counts[a_id] = {'name': a_name, 'count': 0}
                    artist_counts[a_id]['count'] += 1
            
            offset += limit
            if not results['next']:
                break
            print(f"  -> Processed {offset} tracks...")
            # time.sleep(0.1) 
        except Exception as e:
            print(f"Error fetching liked tracks: {e}")
            break
            
    # Filter
    qualifying_artists = []
    for a_id, data in artist_counts.items():
        if data['count'] >= min_tracks:
            qualifying_artists.append({'id': a_id, 'name': data['name']})
            
    print(f"Found {len(qualifying_artists)} artists with >= {min_tracks} liked tracks.")
    return qualifying_artists

def fetch_artist_details(artist_id):
    try:
        artist = sp.artist(artist_id)
        image = artist['images'][0]['url'] if artist['images'] else ""
        genres = artist['genres']
        # Simple style heuristic
        style = "Rap"
        if genres:
            style = genres[0].title()
            
        return {
            'image': image,
            'style': style,
            'popularity': artist['popularity']
        }
    except Exception as e:
        print(f"Error fetching artist details for {artist_id}: {e}")
        return None

def fetch_discography(artist_id, artist_name):
    # Reusing logic from robust script, simplified
    albums_data = []
    offset = 0
    limit = 50
    
    while True:
        try:
            results = sp.artist_albums(artist_id, album_type='album,single', limit=limit, offset=offset)
            items = results['items']
            if not items: break
            
            for item in items:
                cover_url = item['images'][0]['url'] if item['images'] else ""
                albums_data.append({
                    'id': item['id'],
                    'title': item['name'],
                    'year': item['release_date'][:4],
                    'cover': cover_url,
                    'release_date': item['release_date']
                })
            
            offset += limit
            if not results['next']: break
            time.sleep(0.2)
        except: break
        
    # Dedup
    albums_data.sort(key=lambda x: x['release_date'], reverse=True)
    seen = set()
    unique = []
    for a in albums_data:
        norm = re.sub(r'\s*\(.*?\)', '', a['title']).strip().lower()
        if norm not in seen:
            seen.add(norm)
            unique.append(a)
            
    # Fetch tracks for top 20 releases to save time/API calls for new imports
    # Or fetch all? User said "rajoute tout". Let's fetch all but be careful with rate limits.
    final_albums = []
    for alb in unique:
        tracks = []
        t_offset = 0
        while True:
            try:
                t_res = sp.album_tracks(alb['id'], limit=50, offset=t_offset)
                t_items = t_res['items']
                if not t_items: break
                for t in t_items:
                    t_name = t['name']
                    feats = [a['name'] for a in t['artists'] if a['name'].lower() != artist_name.lower()]
                    if feats:
                        if "feat" not in t_name.lower():
                            t_name += f" (feat. {', '.join(feats)})"
                    tracks.append(t_name)
                t_offset += 50
                if not t_res['next']: break
            except: break
            
        final_albums.append({
            'titre': alb['title'],
            'annee': alb['year'],
            'cover': alb['cover'],
            'tracks': tracks
        })
        time.sleep(0.1)
        
    return final_albums

def append_to_data_file(filepath, new_rappers):
    if not new_rappers: return
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Find the end of the array (last ']')
        last_bracket = content.rfind(']')
        if last_bracket == -1:
            print("Error: Could not find end of array in data.js")
            return

        # Prepare new entries
        new_entries_str = ""
        for r in new_rappers:
            # Create a safe ID from name
            safe_id = re.sub(r'[^a-zA-Z0-9]', '', r['name']).lower()
            
            entry = "    {\n"
            entry += f'        id: "{safe_id}",\n'
            entry += f'        nom: "{r["name"]}",\n'
            entry += f'        statut: "star",\n' # Default status
            entry += f'        style: "{r["style"]}",\n'
            entry += f'        image: "{r["image"]}",\n'
            entry += '        certifications: { or: false, platine: false, diamant: false },\n'
            entry += '        chiffres: "N/A",\n'
            entry += f'        bio: "Artiste importé depuis vos Likes Spotify.",\n'
            entry += f'        bioLongue: "Biographie à compléter pour {r["name"]}.",\n'
            entry += '        albums: [\n'
            
            for alb in r['albums']:
                safe_title = alb['titre'].replace('"', '\\"').replace("'", "\\'")
                entry += "            {\n"
                entry += f'                titre: "{safe_title}", annee: "{alb["annee"]}", cover: "{alb["cover"]}",\n'
                entry += "                tracks: ["
                t_strs = [f'"{t.replace("\"", "\\\"").replace("\'", "\\\'")}"' for t in alb['tracks']]
                entry += ", ".join(t_strs)
                entry += "]\n"
                entry += "            },\n"
                
            entry += "        ]\n"
            entry += "    },\n"
            new_entries_str += entry
            
        # Insert before the last bracket
        # Ensure there is a comma before if needed (usually is in JS arrays if formatted)
        # We'll just add a comma to be safe if the previous element didn't have one?
        # Actually, let's just insert.
        
        new_content = content[:last_bracket] + ",\n" + new_entries_str + content[last_bracket:]
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print(f"Successfully added {len(new_rappers)} new rappers to data.js")
        
    except Exception as e:
        print(f"Error updating file: {e}")

def main():
    existing_ids, existing_names = get_existing_rappers(DATA_FILE)
    print(f"Found {len(existing_ids)} existing rappers in DB.")
    
    liked_artists = fetch_liked_artists(min_tracks=2)
    
    new_rappers_to_add = []
    
    for artist in liked_artists:
        # Check if exists (fuzzy match on name or ID)
        # Simple check
        if artist['name'] in existing_names:
            print(f"Skipping {artist['name']} (already exists)")
            continue
            
        # Also check simplified ID
        simple_id = re.sub(r'[^a-zA-Z0-9]', '', artist['name']).lower()
        if simple_id in existing_ids:
            print(f"Skipping {artist['name']} (ID collision)")
            continue
            
        print(f"\nProcessing NEW rapper: {artist['name']}...")
        details = fetch_artist_details(artist['id'])
        if not details: continue
        
        albums = fetch_discography(artist['id'], artist['name'])
        
        new_rappers_to_add.append({
            'name': artist['name'],
            'style': details['style'],
            'image': details['image'],
            'albums': albums
        })
        
        # Batch update or all at once? All at once is safer for file integrity but risky if crash.
        # Let's do batches of 1 to be safe against crashes?
        # User said "ne crash pas".
        # Let's append one by one.
        append_to_data_file(DATA_FILE, [new_rappers_to_add[-1]])
        new_rappers_to_add = [] # Clear buffer
        
        time.sleep(1)

if __name__ == "__main__":
    main()
