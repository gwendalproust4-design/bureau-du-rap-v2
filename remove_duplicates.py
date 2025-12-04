
import re

file_path = r'c:\Users\CEFIM\Documents\GitHub\bureau-du-rap-v2\src\data.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to be careful not to break the file structure.
# The artists are inside `export const dataRappeurs = [ ... ];`
# We can try to identify the blocks.

# Strategy:
# 1. Find all `id: "..."` and their positions.
# 2. Identify duplicates.
# 3. If we find a duplicate, we need to remove the whole object `{ ... }`.
#    This is hard with regex because of nested braces (albums, tracks).

# Alternative Strategy:
# Since I just appended the new ones at the end, and they are formatted with indentation.
# I can iterate through the file line by line, tracking when I'm inside an object.

lines = content.split('\n')
new_lines = []
seen_ids = set()
inside_object = False
current_object_lines = []
current_id = None
skip_object = False

# We assume the file starts with `export const dataRappeurs = [`
# and objects start with `    {` and end with `    },` or `    }`

for line in lines:
    # Detect start of an object (heuristic based on indentation)
    if line.strip() == '{':
        inside_object = True
        current_object_lines = [line]
        current_id = None
        skip_object = False
        continue
    
    if inside_object:
        current_object_lines.append(line)
        
        # Check for ID
        id_match = re.search(r'id:\s*["\'](.*?)["\']', line)
        if id_match:
            current_id = id_match.group(1)
            if current_id in seen_ids:
                skip_object = True # It's a duplicate
                print(f"Removing duplicate: {current_id}")
            else:
                seen_ids.add(current_id)
        
        # Detect end of object
        if line.strip() == '},' or line.strip() == '}':
            if not skip_object:
                new_lines.extend(current_object_lines)
            inside_object = False
            current_object_lines = []
            current_id = None
            skip_object = False
    else:
        new_lines.append(line)

# Reconstruct content
new_content = '\n'.join(new_lines)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Finished removing duplicates.")
