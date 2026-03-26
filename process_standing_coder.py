import os
from PIL import Image

# Path for the new standing coder
standing_trophy_path = r"C:\Users\amark\.gemini\antigravity\brain\a4ab5de5-7239-4ff8-b341-d6f66ac475b3\pixel_coder_standing_trophy_black_hair_1774498486119.png"

def process_character(img_path, out_path):
    try:
        img = Image.open(img_path).convert("RGBA")
        datas = img.getdata()
        
        new_data = []
        for r, g, b, a in datas:
            # Aggressive green removal
            if g > r + 15 and g > b + 15:
                new_data.append((0, 0, 0, 0))
            elif g > r + 8 and g > b + 8:
                new_data.append((0, 0, 0, 0))
            else:
                # Clamp green
                g_pixel = min(g, max(r, b) + 8)
                new_data.append((r, g_pixel, b, a))
                
        img.putdata(new_data)
        
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(out_path, format="PNG")
        print(f"Processed {out_path}")
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

process_character(standing_trophy_path, "public/pixel_coder_trophy.png")
# Note: Oversriting the old sitting trophy coder with the standing one.
