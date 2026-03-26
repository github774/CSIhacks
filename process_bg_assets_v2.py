import os
from PIL import Image

moon_path = r"C:\Users\amark\.gemini\antigravity\brain\a4ab5de5-7239-4ff8-b341-d6f66ac475b3\pixel_moon_1774496451032.png"
clouds_path = r"C:\Users\amark\.gemini\antigravity\brain\a4ab5de5-7239-4ff8-b341-d6f66ac475b3\pixel_clouds_1774496467754.png"

def process_sprite(img_path, out_path, target_opacity_pct):
    try:
        img = Image.open(img_path).convert("RGBA")
        datas = img.getdata()
        
        new_data = []
        for r, g, b, a in datas:
            # Aggressive green screen removal targeting anti-aliased fringes
            if g > r + 15 and g > b + 15:
                # Remove background completely
                new_data.append((0, 0, 0, 0))
            elif a > 0:
                # Neutralize any remaining green tint bleeding into the sprite
                g_clamped = min(g, max(r, b) + 5)
                # Apply drastic opacity reduction to make it a faint atmospheric silhouette
                new_a = int(a * target_opacity_pct)
                new_data.append((r, g_clamped, b, new_a))
            else:
                new_data.append((r, g, b, a))
                
        img.putdata(new_data)
        
        # Crop the image to its bounding box
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(out_path, format="PNG")
        print(f"Processed {out_path} with {target_opacity_pct*100}% opacity.")
    except Exception as e:
        print(f"Failed processing {img_path}: {e}")

# The moon is extremely faint in the picture background
process_sprite(moon_path, "public/bg-moon.png", 0.08)

# The clouds are slightly visible framing the bottom
process_sprite(clouds_path, "public/bg-clouds.png", 0.15)
