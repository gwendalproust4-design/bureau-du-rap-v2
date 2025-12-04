
import re
import unicodedata

file_path = r'c:\Users\CEFIM\Documents\GitHub\bureau-du-rap-v2\src\data.js'

def normalize_text(text):
    if not text:
        return ""
    return ''.join(c for c in unicodedata.normalize('NFD', text)
                   if unicodedata.category(c) != 'Mn').lower()

def categorize_final():
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    
    current_rapper_name = ""
    current_rapper_name_norm = ""
    
    # Album State
    in_album = False
    album_buffer = []
    album_has_category = False
    album_titre = ""
    album_tracks = []
    
    # Regex
    re_nom = re.compile(r'nom:\s*["\'](.*?)["\']')
    re_titre = re.compile(r'titre:\s*"(.*?)"')
    re_category = re.compile(r'category:\s*"(.*?)"')
    re_tracks_inline = re.compile(r'tracks:\s*\[(.*?)\]')
    
    # We assume albums start with { and contain titre.
    # And end with }, or }
    
    for line in lines:
        stripped = line.strip()
        
        # Rapper Context
        m_nom = re_nom.search(line)
        if m_nom:
            current_rapper_name = m_nom.group(1)
            current_rapper_name_norm = normalize_text(current_rapper_name)
        
        # Album Detection
        # We look for `titre:` to confirm it's an album object if we are inside `albums: [` block?
        # Or just look for `{` and `titre:`?
        # `data.js` structure: `albums: [` then objects `{ ... }`.
        
        # Heuristic: If line contains `titre:`, it's an album start or inside one.
        # If we are not in_album, and we see `titre:`, we assume we missed the `{` or it was on previous line.
        # But we need to buffer the WHOLE object to insert category if missing.
        
        # Let's try to detect `{` that starts an album.
        # Usually indented.
        
        if 'titre:' in line:
            # We are definitely in an album.
            if not in_album:
                # We might have started buffering at `{`?
                # Let's assume the previous line was `{` if we didn't catch it.
                # But simpler: Just process line-by-line and if we see `titre:` and NO `category:` later, we fix it?
                # No, we need to insert `category:` if it's missing.
                pass

        # Let's use a simpler logic:
        # If line has `titre:` AND `tracks:` (common case), check/fix immediately.
        # If line has `titre:` but NO `tracks:` (multi-line), we need to buffer.
        
        if 'titre:' in line and 'tracks:' in line:
            # Single line album (or compact)
            # Check category
            if 'category:' not in line:
                # Fix it
                m_titre = re_titre.search(line)
                m_tracks = re_tracks_inline.search(line)
                
                if m_titre and m_tracks:
                    titre = m_titre.group(1)
                    tracks_str = m_tracks.group(1)
                    tracks = re.findall(r'"(.*?)"', tracks_str)
                    nb_tracks = len(tracks)
                    
                    category = "project"
                    if nb_tracks == 1:
                        category = "single"
                        if current_rapper_name_norm:
                            t_norm = normalize_text(tracks[0])
                            if f"feat. {current_rapper_name_norm}" in t_norm or \
                               f"ft. {current_rapper_name_norm}" in t_norm or \
                               f"featuring {current_rapper_name_norm}" in t_norm:
                                category = "feat"
                    
                    # Insert
                    line = line.replace('tracks:', f'category: "{category}", tracks:')
                    print(f"Fixed (inline): {titre} -> {category}")
            
            new_lines.append(line)
            continue

        # Multi-line handling
        # If we see `titre:` but no `tracks:`, we are in a multi-line album.
        if 'titre:' in line and 'tracks:' not in line:
            in_album = True
            album_buffer = [line]
            album_has_category = 'category:' in line
            m_titre = re_titre.search(line)
            if m_titre:
                album_titre = m_titre.group(1)
            continue
            
        if in_album:
            album_buffer.append(line)
            if 'category:' in line:
                album_has_category = True
            
            if 'tracks:' in line:
                # Parse tracks
                # Assuming tracks are on this line or started here.
                # If `tracks: [` and `]` is on same line:
                m_tracks = re_tracks_inline.search(line)
                if m_tracks:
                    tracks_str = m_tracks.group(1)
                    tracks = re.findall(r'"(.*?)"', tracks_str)
                    album_tracks = tracks
                else:
                    # Tracks might be multi-line too? `tracks: [` ... `]`
                    # This gets complicated.
                    # But based on `grep` earlier, most are inline `tracks: [...]`.
                    pass
            
            # End of album? `},` or `}`
            if '}' in line:
                # Process buffer
                if not album_has_category:
                    # Determine category
                    nb_tracks = len(album_tracks)
                    category = "project"
                    if nb_tracks == 1:
                        category = "single"
                        if current_rapper_name_norm and album_tracks:
                            t_norm = normalize_text(album_tracks[0])
                            if f"feat. {current_rapper_name_norm}" in t_norm or \
                               f"ft. {current_rapper_name_norm}" in t_norm or \
                               f"featuring {current_rapper_name_norm}" in t_norm:
                                category = "feat"
                    
                    # Insert category
                    # We insert it in the first line (where titre is) or before tracks?
                    # Let's insert in the first line of buffer if possible, or before tracks line.
                    
                    # Find line with `titre:`
                    for idx, l in enumerate(album_buffer):
                        if 'titre:' in l:
                            # Insert at end of line? Or after titre?
                            # `titre: "...",` -> `titre: "...", category: "...",`
                            album_buffer[idx] = l.replace(f'titre: "{album_titre}",', f'titre: "{album_titre}", category: "{category}",')
                            print(f"Fixed (multiline): {album_titre} -> {category}")
                            break
                
                new_lines.extend(album_buffer)
                in_album = False
                album_buffer = []
                album_tracks = []
                album_has_category = False
                album_titre = ""
            continue

        new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print("Final categorization complete.")

if __name__ == "__main__":
    categorize_final()
