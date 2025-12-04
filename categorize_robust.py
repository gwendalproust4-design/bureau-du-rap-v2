
import re
import unicodedata

file_path = r'c:\Users\CEFIM\Documents\GitHub\bureau-du-rap-v2\src\data.js'

# Manual overrides: (rapper_id, album_title) -> category
MANUAL_OVERRIDES = {
    ("la_feve", "Yes 2 fois"): "feat",
    ("la_feve", "AVERTISSEMENT DE BAVARDAGE"): "feat",
}

def normalize_text(text):
    if not text:
        return ""
    return ''.join(c for c in unicodedata.normalize('NFD', text)
                   if unicodedata.category(c) != 'Mn').lower()

def categorize_robust():
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to identify the current rapper for context (feat detection).
    # This is hard with a global regex replace.
    # So we will split the file by rapper blocks first.
    
    # Rapper block regex:
    # {
    #    id: "...",
    #    ...
    #    albums: [ ... ]
    # }
    # This is hard to match with regex due to nesting.
    
    # Hybrid approach:
    # 1. Find all rapper IDs and Names with their positions.
    # 2. Iterate through the file content, keeping track of which rapper we are in.
    # 3. Find album objects and process them.
    
    # Let's use a tokenizer-like approach.
    
    # Find all rapper definitions to build a map of ranges?
    # No, just iterate regex matches for `id: "..."` and `nom: "..."`.
    
    # Actually, let's just fix the "missing category" issue first.
    # If we find an album without category, we default to "project" or "single" based on tracks.
    # Feat detection requires artist name.
    
    # Let's try to get artist name context.
    # We can search backwards from the album match to find the nearest `nom: "..."`.
    
    # Regex for album object:
    # We assume album objects are inside `albums: [...]`.
    # They look like `{ titre: "...", ... }`
    
    # We will use `re.sub` with a callback function.
    # The callback will check context? No, `re.sub` doesn't give global context easily.
    
    # Let's iterate manually.
    
    new_content = []
    last_pos = 0
    
    # Find all albums
    # Pattern: { ... titre: "..." ... }
    # We need to be careful not to match the rapper object itself (which doesn't have titre usually, but has nom).
    
    # Pattern for album:
    # \s*\{\s*titre:.*?\tracks:\[.*?\].*?\}
    # DOTALL
    
    album_pattern = re.compile(r'(\s*\{\s*titre:.*?tracks:\[.*?\].*?\})', re.DOTALL)
    
    # We also need to track Rapper Name.
    # We can find all `nom: "..."` positions.
    
    rapper_pattern = re.compile(r'nom:\s*["\'](.*?)["\']')
    rapper_matches = list(rapper_pattern.finditer(content))
    
    def get_current_rapper(pos):
        # Find the last rapper match before pos
        current = None
        for m in rapper_matches:
            if m.start() < pos:
                current = m.group(1)
            else:
                break
        return current

    # We will iterate through all album matches
    for match in album_pattern.finditer(content):
        # Append text before match
        new_content.append(content[last_pos:match.start()])
        
        album_str = match.group(1)
        start_pos = match.start()
        
        # Check if category exists
        if 'category:' not in album_str:
            # We need to add it.
            
            # 1. Get Context
            rapper_name = get_current_rapper(start_pos)
            rapper_name_norm = normalize_text(rapper_name)
            
            # 2. Parse info
            m_titre = re.search(r'titre:\s*"(.*?)"', album_str)
            m_tracks = re.search(r'tracks:\s*\[(.*?)\]', album_str, re.DOTALL)
            
            if m_titre and m_tracks:
                titre = m_titre.group(1)
                tracks_str = m_tracks.group(1)
                tracks = re.findall(r'"(.*?)"', tracks_str)
                nb_tracks = len(tracks)
                
                category = "project"
                if nb_tracks == 1:
                    category = "single"
                    # Check feat
                    if rapper_name_norm:
                        t_norm = normalize_text(tracks[0])
                        if f"feat. {rapper_name_norm}" in t_norm or \
                           f"ft. {rapper_name_norm}" in t_norm or \
                           f"featuring {rapper_name_norm}" in t_norm:
                            category = "feat"
                            
                # Check overrides (we need ID, but Name is close enough usually, or we can find ID too)
                # Let's skip ID check for overrides here or try to find ID.
                # ID is usually close to Name.
                
                # Insert category
                # We insert it before `tracks:`
                album_str = album_str.replace('tracks:', f'category: "{category}", tracks:')
                print(f"Fixed: {titre} -> {category}")
        
        new_content.append(album_str)
        last_pos = match.end()
        
    new_content.append(content[last_pos:])
    
    final_content = "".join(new_content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("Robust categorization complete.")

if __name__ == "__main__":
    categorize_robust()
