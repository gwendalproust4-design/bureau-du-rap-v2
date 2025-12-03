import os
import re
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from dotenv import load_dotenv
import datetime
import time

# --- CONFIGURATION ---
# Load environment variables
try:
    load_dotenv(override=True)
    load_dotenv('clé.env', override=True)
except ImportError:
    print("python-dotenv not installed. Install it with: pip install python-dotenv")
    exit(1)

SPOTIFY_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID", "").strip()
SPOTIFY_CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET", "").strip()

if not SPOTIFY_CLIENT_ID or not SPOTIFY_CLIENT_SECRET:
    print("Error: Spotify credentials not found in environment variables (clé.env).")
    exit(1)

# Initialize Spotify
try:
    auth_manager = SpotifyClientCredentials(client_id=SPOTIFY_CLIENT_ID, client_secret=SPOTIFY_CLIENT_SECRET)
    sp = spotipy.Spotify(auth_manager=auth_manager)
    print("Spotify authentication successful.")
except Exception as e:
    print(f"Error initializing Spotify: {e}")
    exit(1)

# Paths
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(SCRIPT_DIR, "..", "src", "data.js")

def get_rappers_from_data(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    rappers = []
    # Find all rapper IDs and Names to search on Spotify
    # We look for id: "..." and nom: "..."
    # This regex looks for the id and nom properties within the object
    matches = re.finditer(r'id:\s*["\'](.*?)["\'].*?nom:\s*["\'](.*?)["\']', content, re.DOTALL)
    
    for match in matches:
        rappers.append({
            'id': match.group(1),
            'name': match.group(2)
        })
    
    return rappers

def fetch_spotify_discography(artist_name):
    print(f"Fetching discography for: {artist_name}")
    
    # 1. Search for Artist
    results = sp.search(q=artist_name, type='artist', limit=1)
    items = results['artists']['items']
    if not items:
        print(f"  -> Artist not found on Spotify.")
        return []
    
    artist_id = items[0]['id']
    print(f"  -> Found Artist ID: {artist_id}")

    # 2. Fetch Albums (albums, singles, compilations)
    # We fetch all and then filter
    albums_data = []
    offset = 0
    limit = 50
    
    while True:
        results = sp.artist_albums(artist_id, album_type='album,single', limit=limit, offset=offset)
        items = results['items']
        if not items:
            break
        
        for item in items:
            # Filter out duplicates based on name (simple normalization)
            # Spotify often has "Album Name" and "Album Name (Deluxe)" or explicit/clean versions
            # For now, we take everything, but maybe we can deduplicate by exact name?
            # User said "liste non exhaustive" but "rajoute tout". Let's keep it broad.
            
            # Get high res cover
            cover_url = item['images'][0]['url'] if item['images'] else ""
            
            albums_data.append({
                'id': item['id'],
                'title': item['name'],
                'year': item['release_date'][:4],
                'cover': cover_url,
                'type': item['album_type'],
                'release_date': item['release_date'] # For sorting
            })
        
        offset += limit
        if not results['next']:
            break
        time.sleep(1) # Rate limiting

    # Sort by release date (newest first)
    albums_data.sort(key=lambda x: x['release_date'], reverse=True)
    
    # Deduplicate by title (keep first/newest) to avoid spamming "Single" vs "Album" versions
    seen_titles = set()
    unique_albums = []
    for alb in albums_data:
        # Normalize title for dedup: lowercase, remove text in parenthesis like (Deluxe)
        norm_title = re.sub(r'\s*\(.*?\)', '', alb['title']).strip().lower()
        if norm_title not in seen_titles:
            seen_titles.add(norm_title)
            unique_albums.append(alb)
    
    print(f"  -> Found {len(unique_albums)} unique releases.")

    # 3. Fetch Tracks for each album
    final_albums = []
    for alb in unique_albums:
        time.sleep(0.5) # Rate limiting between albums
        print(f"    -> Fetching tracks for: {alb['title']}")
        tracks = []
        
        # Handle pagination for tracks
        t_offset = 0
        while True:
            t_results = sp.album_tracks(alb['id'], limit=50, offset=t_offset)
            t_items = t_results['items']
            if not t_items:
                break
                
            for t in t_items:
                track_name = t['name']
                # Handle featurings
                artists = [a['name'] for a in t['artists']]
                # Remove main artist from list if present (usually is)
                # But sometimes main artist is not first? 
                # Let's just check if there are multiple artists
                feats = [a for a in artists if a.lower() != artist_name.lower()]
                
                if feats:
                    feat_str = ", ".join(feats)
                    # Check if "(feat." is already in title
                    if "(feat." not in track_name.lower():
                         track_name = f"{track_name} (feat. {feat_str})"
                
                tracks.append(track_name)
            
            t_offset += 50
            if not t_results['next']:
                break
            time.sleep(1) # Rate limiting
        
        final_albums.append({
            'titre': alb['title'],
            'annee': alb['year'],
            'cover': alb['cover'],
            'tracks': tracks
        })
        
    return final_albums

def update_data_file(filepath, rapper_id, new_albums):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Find the rapper block
    # We look for the id: "rapper_id"
    # Then we look for the "albums: [" following it
    
    # Regex to find the start of the albums array for this specific rapper
    # We match the rapper ID, then any content until "albums:", then "["
    pattern = re.compile(r'(id:\s*["\']' + re.escape(rapper_id) + r'["\'].*?albums:\s*)\[', re.DOTALL)
    match = pattern.search(content)
    
    if not match:
        print(f"  -> Could not find albums block for {rapper_id}")
        return False

    start_index = match.end() - 1 # Points to '['
    
    # 2. Find the matching closing bracket ']'
    # We need to parse nested brackets because tracks are arrays too
    balance = 0
    end_index = -1
    
    for i in range(start_index, len(content)):
        char = content[i]
        if char == '[':
            balance += 1
        elif char == ']':
            balance -= 1
            if balance == 0:
                end_index = i + 1 # Include the closing ']'
                break
    
    if end_index == -1:
        print("  -> Error parsing albums array (unbalanced brackets)")
        return False

    # 3. Generate new JS code for albums
    # We manually format to match the style
    js_albums = "[\n"
    for alb in new_albums:
        # Escape quotes in strings
        safe_title = alb['titre'].replace('"', '\\"')
        safe_cover = alb['cover']
        
        js_albums += "            {\n"
        js_albums += f'                titre: "{safe_title}", annee: "{alb["annee"]}", cover: "{safe_cover}",\n'
        
        js_albums += "                tracks: ["
        # Format tracks
        track_strs = []
        for t in alb['tracks']:
            safe_track = t.replace('"', '\\"')
            track_strs.append(f'"{safe_track}"')
        
        js_albums += ", ".join(track_strs)
        js_albums += "]\n"
        js_albums += "            },\n"
    
    js_albums += "        ]"

    # 4. Replace the old block with the new one
    new_content = content[:start_index] + js_albums + content[end_index:]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"  -> Updated data.js for {rapper_id}")
    return True

def main():
    rappers = get_rappers_from_data(DATA_FILE)
    print(f"Found {len(rappers)} rappers in data.js")
    
    start_from = "Favé" # Hardcoded for now based on user request, or could be arg
    found_start = False
    
    for rapper in rappers:
        if start_from and not found_start:
            if rapper['name'].lower() == start_from.lower():
                found_start = True
            else:
                # print(f"Skipping {rapper['name']} (before start_from)")
                continue
                
        print(f"\nProcessing {rapper['name']} ({rapper['id']})...")
        new_albums = fetch_spotify_discography(rapper['name'])
        
        if new_albums:
            update_data_file(DATA_FILE, rapper['id'], new_albums)
        else:
            print("  -> No albums found or error fetching.")

if __name__ == "__main__":
    main()
