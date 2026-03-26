import os
from PIL import Image

# Exact paths from brain folder
base_path = r"C:\Users\amark\.gemini\antigravity\brain\a4ab5de5-7239-4ff8-b341-d6f66ac475b3\pixel_coder_1774497304034.png"
cash_path = r"C:\Users\amark\.gemini\antigravity\brain\a4ab5de5-7239-4ff8-b341-d6f66ac475b3\pixel_coder_cash_1774497317264.png"
trophy_path = r"C:\Users\amark\.gemini\antigravity\brain\a4ab5de5-7239-4ff8-b341-d6f66ac475b3\pixel_coder_trophy_1774497531204.png"

def process_character(img_path, out_path):
    try:
        img = Image.open(img_path).convert("RGBA")
        datas = img.getdata()
        
        new_data = []
        for r, g, b, a in datas:
            # More aggressive green removal targeting fringes
            # If green is significantly higher than red and blue, it's part of the background/fringe
            if g > r + 20 and g > b + 20:
                new_data.append((0, 0, 0, 0))
            elif g > r + 10 and g > b + 10:
                # Semi-transparent border cleaning
                new_data.append((0, 0, 0, 0))
            else:
                # Clamping green to prevent tinting
                g_pixel = min(g, max(r, b) + 10)
                new_data.append((r, g_pixel, b, a))
                
        img.putdata(new_data)
        
        # Crop to content
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(out_path, format="PNG")
        print(f"Processed {out_path}")
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

process_character(base_path, "public/pixel_character.png")
process_character(cash_path, "public/pixel_character_cash.png")
process_character(trophy_path, "public/pixel_character_trophy.png")
