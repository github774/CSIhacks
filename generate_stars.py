import sys

# Color dictionary
C = {
    'X': '#1a1c2c', # Black outline
    'Y': '#fbf236', # Yellow core
    'y': '#f4f4a6', # Light yellow highlight
    'C': '#41a6f6', # Blue shadow
    'c': '#73eff7', # Cyan highlight
    'W': '#ffffff', # White highlight
    '.': None       # Transparent
}

# The large 5-pointed star grid
star_large = [
    ".......XX.......",
    "......XccX......",
    "......XccX......",
    "......XccX......",
    ".XXXXXXccXXXXXX.",
    "XccccccYYYYYYYyX",
    ".XccccYYYYYYYYX.",
    "..XccYYYYYYYYX..",
    "...XccYYYYYYX...",
    "...XccYYYYYYX...",
    "..XccXXYYYYXX...",
    ".XccX..XXYYX....",
    "XccX....XYYX....",
    "XXX......XXX...."
]

# A smaller 4-pointed star
star_small = [
    "...XX...",
    "..XccX..",
    ".XcYYyX.",
    "XXcYYyXX",
    "XccccccX",
    "XXcYYyXX",
    ".XcYYyX.",
    "..XccX..",
    "...XX..."
]

# 4-point diamond
diamond = [
    "..XX..",
    ".XccX.",
    "XccYYX",
    "XccYYX",
    ".XYYX.",
    "..XX.."
]

svg_out = ['<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill="none">']

def draw_sprite(grid, offset_x, offset_y, scale=3):
    out = []
    out.append(f'<g transform="translate({offset_x},{offset_y}) scale({scale})">')
    for y, row in enumerate(grid):
        for x, char in enumerate(row):
            color = C.get(char)
            if color:
                out.append(f'<rect x="{x}" y="{y}" width="1" height="1" fill="{color}"/>')
    out.append('</g>')
    return '\n'.join(out)

# Draw stars at different positions
svg_out.append(draw_sprite(star_large, 80, 50, 4))
svg_out.append(draw_sprite(star_large, 220, 180, 3))
svg_out.append(draw_sprite(star_small, 260, 40, 3))
svg_out.append(draw_sprite(diamond, 60, 240, 3))

# Draw some tiny pluses
tiny_plus = [
    ".X.",
    "XXX",
    ".X."
]
svg_out.append(draw_sprite(tiny_plus, 40, 120, 2))
svg_out.append(draw_sprite(tiny_plus, 180, 100, 2))
svg_out.append(draw_sprite(tiny_plus, 320, 280, 2))

# Tiny dots
dot = ["XX","XX"]
svg_out.append(draw_sprite(dot, 320, 160, 2))
svg_out.append(draw_sprite(dot, 40, 180, 2))
svg_out.append(draw_sprite(dot, 150, 280, 2))

svg_out.append('</svg>')

with open('public/pixel-stars.svg', 'w') as f:
    f.write('\n'.join(svg_out))

print("Created pixel-stars.svg")
