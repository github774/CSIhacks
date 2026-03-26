import os
import glob
from PIL import Image

folder = r"C:\Users\amark\.gemini\antigravity\brain\a4ab5de5-7239-4ff8-b341-d6f66ac475b3"
files = glob.glob(os.path.join(folder, "media__*.png"))
if not files:
    print("No files found!")
    exit()

latest = max(files, key=os.path.getctime)
img = Image.open(latest).convert("RGB")
w, h = img.size

# Moon: right side, avoid Devfolio button
moon_box = (int(w * 0.75), int(h * 0.55), w, int(h * 0.9))
moon_img = img.crop(moon_box)

# Clouds: LEFT side only to avoid the character and the Devfolio button!
# This gives a clean seamless tileable cloud slice.
clouds_box = (0, int(h * 0.7), int(w * 0.3), int(h * 0.95))
clouds_img = img.crop(clouds_box)

def extract_luminescence(image):
    data = list(image.getdata())
    # Sample top-left pixel as the base sky color
    sky = data[0]
    new_data = []
    for r, g, b in data:
        # Subtract the base sky color to create a pure black background
        # This leaves only the bright moon/clouds, perfect for 'screen' blending
        nr = max(0, r - sky[0])
        ng = max(0, g - sky[1])
        nb = max(0, b - sky[2])
        new_data.append((nr, ng, nb))
    image.putdata(new_data)
    return image

moon_img = extract_luminescence(moon_img)
clouds_img = extract_luminescence(clouds_img)

moon_img.save("public/bg-moon.png")
clouds_img.save("public/bg-clouds.png")
print("Saved clean bg-moon.png and bg-clouds.png")
