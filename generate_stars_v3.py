import sys

C = {
    'X': '#000000', # Black Outline
    'Y': '#FFE56C', # Yellow Core
    'B': '#92D5E6', # Pale Cyan Highlight
    'W': '#FFFFFF', # Pure White Highlight
    '.': None
}

# 13x11 Perfect, odd-width symmetrical star
star_5_point = [
    "......X......",
    ".....XWX.....",
    "....XBWYX....",
    "XXXXBBWYYXXXX",
    "XBBBBWYYYYYYX",
    ".XBBBWYYYYYX.",
    "..XBBWYYYYX..",
    "..XBBYXXYYX..",
    ".XBBX....XYYX",
    ".XBX......XYX",
    ".XX........XX"
]

# 7x7 Perfect 4-Pointed Star
star_4_point = [
    "...X...",
    "..XWX..",
    ".XBWYX.",
    "XBBWYYX",
    ".XBBYX.",
    "..XYX..",
    "...X..."
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

svg_out = ['<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="none" shape-rendering="crispEdges">']

def draw_sprite(grid, offset_x, offset_y, scale=2):
    out = []
    out.append(f'<g transform="translate({offset_x},{offset_y}) scale({scale})">')
    for y, row in enumerate(grid):
        for x, char in enumerate(row):
            color = C.get(char)
            if color:
                # To completely fix "broken in half" sub-pixel gaps:
                # Increase width/height to 1.05 to force pixel overlap
                out.append(f'<rect x="{x}" y="{y}" width="1.05" height="1.05" fill="{color}"/>')
    out.append('</g>')
    return '\n'.join(out)

# Scatter them across the background
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

print("Created pixel-stars.svg - v3 Symmetrical & Crisp!")
