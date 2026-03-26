import random

# Generate pixel moon
radius = 22
svg_moon = ['<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" shape-rendering="crispEdges">']
svg_moon.append('<g transform="translate(400, 400) scale(16)">')
for y in range(-radius, radius+1):
    for x in range(-radius, radius+1):
        if x*x + y*y <= radius*radius:
            # Craters
            if (x-6)**2 + (y-6)**2 < 12 or (x+10)**2 + (y-3)**2 < 6 or (x-3)**2 + (y+12)**2 < 8:
                color = 'rgba(255,255,255,0.015)' # darker craters
            elif x*x + y*y > (radius-2)**(radius-2):
                color = 'rgba(255,255,255,0.02)' # softer edge
            else:
                color = 'rgba(255,255,255,0.04)' # lighter moon surface
            svg_moon.append(f'<rect x="{x}" y="{y}" width="1.05" height="1.05" fill="{color}"/>')
svg_moon.append('</g></svg>')

with open('public/bg-moon.svg', 'w') as f:
    f.write('\n'.join(svg_moon))

# Generate clouds (pixelated layers)
svg_clouds = ['<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" fill="none" shape-rendering="crispEdges">']
# Stack up layers of horizontal bars forming pixel cloud hills
cloud_layers = [
    (550, 50, 0.05),
    (500, 100, 0.04),
    (450, 150, 0.03),
    (400, 200, 0.02),
    (350, 250, 0.015)
]
random.seed(123)
for y_start, h, op in cloud_layers:
    for i in range(15):
        w = random.randint(200, 500)
        x = random.randint(-100, 1100)
        # Pixel blocky width
        w = (w // 20) * 20
        x = (x // 20) * 20
        svg_clouds.append(f'<rect x="{x}" y="{y_start}" width="{w}" height="{h}" fill="rgba(255,255,255,{op})"/>')
svg_clouds.append('</svg>')

with open('public/bg-clouds.svg', 'w') as f:
    f.write('\n'.join(svg_clouds))

# Generate simple dot/cross stars
svg_stars = ['<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" fill="none" shape-rendering="crispEdges">']
random.seed(42)
for _ in range(150):
    x = random.randint(0, 1000)
    y = random.randint(0, 1000)
    size = random.choice([2, 2, 3]) # Mostly 2x2 dots
    op = random.uniform(0.1, 0.7)
    color = f'rgba(255,255,255,{op})'
    # To make them slightly cyan/blue occasionally
    if random.random() < 0.2:
        color = f'rgba(180,220,255,{op})'
    svg_stars.append(f'<rect x="{x}" y="{y}" width="{size}" height="{size}" fill="{color}"/>')

# Add 4-point crosses
for _ in range(25):
    x = random.randint(0, 1000)
    y = random.randint(0, 1000)
    op = random.uniform(0.3, 0.8)
    color = f'rgba(255,255,255,{op})'
    svg_stars.append(f'<rect x="{x+2}" y="{y}" width="2" height="6" fill="{color}"/>')
    svg_stars.append(f'<rect x="{x}" y="{y+2}" width="6" height="2" fill="{color}"/>')
svg_stars.append('</svg>')

with open('public/bg-stars.svg', 'w') as f:
    f.write('\n'.join(svg_stars))

print("Created moon, clouds, and scatter dot SVGs.")
