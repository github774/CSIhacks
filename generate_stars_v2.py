import sys

# Exact color codes from the user's reference image
C = {
    'X': '#000000', # Black Outline
    'Y': '#FFE56C', # Retro Yellow Core
    'B': '#92D5E6', # Pale Cyan Highlight
    'W': '#FFFFFF', # Pure White Highlight
    '.': None
}

# 10x10 Exact 5-Pointed Mario-Style Star
star_5_point = [
    "....XX....",
    "...XBWX...",
    "..XBBWYX..",
    ".XXXXXXXX.",
    "XBWBYYYYYX",
    "XXBWYYYYXX",
    ".XBWYYYYX.",
    ".XBWXXYYX.",
    ".XBX..XYX.",
    ".XX....XX."
]

# 6x6 Exact 4-Pointed Star
star_4_point = [
    "..XX..",
    ".XBWX.",
    "XBBYYX",
    "XBYYYX",
    ".XYYX.",
    "..XX.."
]

# 3x3 Cross
cross = [
    ".X.",
    "XXX",
    ".X."
]

# 2x2 Dot
dot = [
    "XX",
    "XX"
]

# 2x2 Cyan Dot
dot_cyan = [
    "XX",
    "XB"
]

svg_out = ['<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="none">']

def draw_sprite(grid, offset_x, offset_y, scale=2):
    out = []
    # Calculate exact bounding box rendering for flawless SVGs
    out.append(f'<g transform="translate({offset_x},{offset_y}) scale({scale})">')
    for y, row in enumerate(grid):
        for x, char in enumerate(row):
            color = C.get(char)
            if color:
                out.append(f'<rect x="{x}" y="{y}" width="1" height="1" fill="{color}"/>')
    out.append('</g>')
    return '\n'.join(out)

# Scale = 2: Very crisp, small 8-bit aesthetic (stars are 20x20 actual pixels)
# Scatter them mimicking the photo layout exactly
svg_out.append(draw_sprite(star_5_point, 100, 80, 2))
svg_out.append(draw_sprite(star_5_point, 180, 160, 2))
svg_out.append(draw_sprite(star_4_point, 210, 60, 2))
svg_out.append(draw_sprite(star_4_point, 90, 180, 2))
svg_out.append(draw_sprite(cross, 60, 60, 2))
svg_out.append(draw_sprite(cross, 180, 70, 2))
svg_out.append(draw_sprite(cross, 60, 180, 2))
svg_out.append(draw_sprite(dot, 230, 200, 2))
svg_out.append(draw_sprite(dot, 90, 140, 2))
svg_out.append(draw_sprite(dot_cyan, 200, 120, 2))

svg_out.append('</svg>')

with open('public/pixel-stars.svg', 'w') as f:
    f.write('\n'.join(svg_out))

print("Created pixel-stars.svg - v2 Reference Accurate!")
