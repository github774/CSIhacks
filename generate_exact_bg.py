import math
import random

svg = ['<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" style="background: linear-gradient(180deg, #181c3c 0%, #292850 60%, #3e3860 100%);" shape-rendering="crispEdges">']

# Huge transparent moon outline on the right
svg.append('<circle cx="1300" cy="500" r="300" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="4"/>')
# Inner faint ring
svg.append('<circle cx="1300" cy="500" r="280" fill="none" stroke="rgba(255,255,255,0.02)" stroke-width="8"/>')

random.seed(42)

# Scatter exact dot stars
for _ in range(400):
    x = random.randint(0, 1600)
    y = int(900 - (random.random()**1.2) * 800)
    op = random.uniform(0.1, 0.9)
    color = f'rgba(255,255,255,{op})'
    svg.append(f'<rect x="{x}" y="{y}" width="2" height="2" fill="{color}"/>')
    if random.random() < 0.05:
        # Subtle cross stars
        svg.append(f'<rect x="{x-4}" y="{y}" width="10" height="2" fill="{color}"/>')
        svg.append(f'<rect x="{x}" y="{y-4}" width="2" height="10" fill="{color}"/>')

# Wavy pixel clouds at the bottom
colors = ['#2c2b53', '#393663', '#494474', '#595085']
y_start = 650

def make_wave_path(y_base, amplitude, period, offset_x):
    path = f'M 0 900 L 0 {y_base}'
    # block size for the pixel effect
    step = 20
    curr_y = y_base
    for x in range(0, 1600+step, step):
        # Calculate pixelated sine wave
        target_y = y_base + int(math.sin((x + offset_x) / period) * amplitude / step) * step
        # Draw horizontal then vertical to next point to create blocky steps
        path += f' L {x} {curr_y} L {x} {target_y}'
        curr_y = target_y
    path += ' L 1600 900 Z'
    return path

for idx, c in enumerate(colors):
    y = y_start + idx * 40
    amp = 30 + idx * 10
    period = 150 + idx * 50
    offset = idx * 200
    svg.append(f'<path d="{make_wave_path(y, amp, period, offset)}" fill="{c}"/>')

svg.append('</svg>')

with open('public/bg-exact.svg', 'w') as f:
    f.write('\n'.join(svg))
print("Created public/bg-exact.svg")
