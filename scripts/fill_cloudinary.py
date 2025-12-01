import re
import os
import requests
import cloudinary
import cloudinary.uploader
import cloudinary.api
from duckduckgo_search import DDGS

# --- CONFIGURATION ---
# Load environment variables from .env file
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    print("python-dotenv not installed. Install it with: pip install python-dotenv")

CLOUDINARY_CLOUD_NAME = os.getenv("CLOUDINARY_CLOUD_NAME")
CLOUDINARY_API_KEY = os.getenv("CLOUDINARY_API_KEY")
CLOUDINARY_API_SECRET = os.getenv("CLOUDINARY_API_SECRET")

if not all([CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET]):
    print("Error: Cloudinary credentials not found in environment variables.")
    print("Please create a .env file with CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.")
    exit(1)

# Construct absolute path to data.js relative to this script
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(SCRIPT_DIR, "..", "src", "data.js")

def setup_cloudinary():
    # Credentials are now hardcoded or from env, so we just config
    cloudinary.config(
        cloud_name=CLOUDINARY_CLOUD_NAME,
        api_key=CLOUDINARY_API_KEY,
        api_secret=CLOUDINARY_API_SECRET
    )
    return True

def parse_data_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find rappers
    # This is a simplified parser and relies on the specific formatting of data.js
    rappers = []
    
    # Split by rapper objects roughly
    # We look for { id: ... } blocks
    # This is fragile but should work for the current file structure
    rapper_blocks = re.split(r'^\s*\{\s*$', content, flags=re.MULTILINE)
    
    for block in rapper_blocks:
        if 'id: "' not in block:
            continue
            
        rapper = {}
        
        # Extract Name
        name_match = re.search(r'nom:\s*"([^"]+)"', block)
        if name_match:
            rapper['name'] = name_match.group(1)
        
        # Extract Image URL
        image_match = re.search(r'image:\s*"([^"]+)"', block)
        if image_match:
            rapper['image_url'] = image_match.group(1)
            
        # Extract Albums
        albums = []
        album_matches = re.finditer(r'titre:\s*"([^"]+)",\s*annee:\s*"[^"]+",\s*cover:\s*"([^"]+)"', block)
        for match in album_matches:
            albums.append({
                'title': match.group(1),
                'cover_url': match.group(2)
            })
            
        if 'name' in rapper and 'image_url' in rapper:
            rapper['albums'] = albums
            rappers.append(rapper)
            
    return rappers

def get_public_id_and_format(url):
    # Example: https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/sch.webp
    # We want: bureau_du_rap/rappeurs/sch and format: webp
    
    try:
        # Remove version if present (v1234567890/)
        url_no_version = re.sub(r'/v\d+/', '/', url)
        
        # Find the part after 'upload/'
        path = url_no_version.split('/upload/')[-1]
        
        # Split extension
        base, ext = os.path.splitext(path)
        
        # Remove leading slash if any
        if base.startswith('/'):
            base = base[1:]
            
        return base, ext.replace('.', '')
    except Exception as e:
        print(f"Error parsing URL {url}: {e}")
        return None, None

def search_image(query):
    print(f"Searching for: {query}...")
    try:
        with DDGS() as ddgs:
            results = list(ddgs.images(query, max_results=1))
            if results:
                return results[0]['image']
    except Exception as e:
        print(f"Search error: {e}")
    return None

def image_exists(public_id):
    try:
        cloudinary.api.resource(public_id)
        return True
    except cloudinary.exceptions.NotFound:
        return False
    except Exception as e:
        # If there's an auth error or other issue, we might assume it doesn't exist or fail safe
        # But for now, let's print and assume false to try upload
        print(f"Check error for {public_id}: {e}")
        return False

def upload_image(image_source, public_id, fmt):
    print(f"Uploading to {public_id}.{fmt}...")
    try:
        cloudinary.uploader.upload(
            image_source,
            public_id=public_id,
            format=fmt,
            overwrite=True
        )
        print("Success!")
    except Exception as e:
        print(f"Upload error: {e}")

def main():
    if not setup_cloudinary():
        return

    rappers = parse_data_file(DATA_FILE)
    print(f"Found {len(rappers)} rappers.")
    
    for rapper in rappers:
        print(f"\nProcessing {rapper['name']}...")
        
        # Process Rapper Image
        if 'cloudinary.com' in rapper['image_url']:
            public_id, fmt = get_public_id_and_format(rapper['image_url'])
            if public_id:
                if image_exists(public_id):
                    print(f"Skipping {public_id} (already exists)")
                else:
                    # Search for rapper image
                    image_url = search_image(f"{rapper['name']} rapper")
                    if image_url:
                        upload_image(image_url, public_id, fmt)
                    else:
                        print("No image found.")
        
        # Process Albums
        for album in rapper['albums']:
            if 'cloudinary.com' in album['cover_url']:
                public_id, fmt = get_public_id_and_format(album['cover_url'])
                if public_id:
                    if image_exists(public_id):
                        print(f"Skipping {public_id} (already exists)")
                    else:
                        # Search for album cover
                        image_url = search_image(f"{rapper['name']} {album['title']} cover")
                        if image_url:
                            upload_image(image_url, public_id, fmt)
                        else:
                            print(f"No cover found for {album['title']}.")

if __name__ == "__main__":
    main()
