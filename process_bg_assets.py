import os
from PIL import Image

moon_path = r"C:\Users\amark\.gemini\antigravity\brain\a4ab5de5-7239-4ff8-b341-d6f66ac475b3\pixel_moon_1774496451032.png"
clouds_path = r"C:\Users\amark\.gemini\antigravity\brain\a4ab5de5-7239-4ff8-b341-d6f66ac475b3\pixel_clouds_1774496467754.png"

def make_transparent(img_path, out_path):
    try:
        img = Image.open(img_path).convert("RGBA")
        datas = img.getdata()
        
        # We look for pixels where Green is dominant (it was a solid green background)
        new_data = []
        for item in datas:
            if item[1] > 180 and item[0] < 100 and item[2] < 100:
                # Target pure green backgrounds
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        
        # Crop the image to its bounding box
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(out_path)
        print(f"Processed {out_path}")
    except Exception as e:
        print(f"Failed processing {img_path}: {e}")

make_transparent(moon_path, "public/bg-moon.png")
make_transparent(clouds_path, "public/bg-clouds.png")
