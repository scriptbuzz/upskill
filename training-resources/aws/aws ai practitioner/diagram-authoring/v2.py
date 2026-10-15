"""Compositions for the AI Practitioner rebuild (aif-v2). Each takes a spec dict from specs_v2.py.

The drawings are original. They show the concept a lesson teaches (a flow, a comparison,
a loop, a chart, or a worked example) in this course's own visual system."""
from canvas import *
from html import escape

LB = '#91b9df'  # light blue for secondary marks

def dot(x, y, c=B, r=5): return circle(x, y, r, c, 'none', 0)
def axes(x, y, w, h, c=G): return edge([(x, y), (x, y + h), (x + w, y + h)], c, False, False, 1.6)
def plot(x, y, w, h, pts, c=B, r=5): return ''.join(dot(x + px * w, y + h - py * h, c, r) for px, py in pts)
def line(x, y, w, h, pts, c=O, sw=2.8, dash=False):
    return edge([(round(x + px * w, 2), round(y + h - py * h, 2)) for px, py in pts], c, dash, False, sw)
def cross(cx, cy, c=O, s=7, sw=3):
    return path(f'M{cx-s} {cy-s}L{cx+s} {cy+s}M{cx+s} {cy-s}L{cx-s} {cy+s}', c, sw)
def vlabel(x, y, s, size=16, c=G):
    return f'<text transform="translate({x} {y}) rotate(-90)" font-size="{size}" fill="{c}" font-weight="700" text-anchor="middle">{escape(s)}</text>'
def pill(x, y, w, h, label, c=B, fill=P, size=17, bold=True):
    return rect(x, y, w, h, fill, c, h / 2 if h < 40 else 8, container=True) + block(x + w / 2, y + h / 2 + size * .36, label, w - 20, size, c if c != L else N, bold, 'middle', max_lines=1)
def lines_list(x, y, items, w, size=17, c=N, gap=None, bullet=B, max_lines=2):
    """A list with drawn markers; returns svg and the y after the list."""
    s = ''; gap = gap or size * 1.22
    for it in items:
        s += dot(x + 5, y - size * .33, bullet, 3.6)
        wrapped = []
        cur = ''
        for word in it.split():
            cand = (cur + ' ' + word).strip()
            if width(cand, size) > w - 18 and cur: wrapped.append(cur); cur = word
            else: cur = cand
        if cur: wrapped.append(cur)
        assert len(wrapped) <= max_lines, f'{it!r} needs {len(wrapped)} lines'
        s += block(x + 18, y, it, w - 18, size, c, max_lines=max_lines)
        y += gap * len(wrapped) + size * .55
    return s, y

# ------------------------------------------------------------------ generic flows

def chain(d):
    """Horizontal steps: (icon, label, detail). Optional heading, loop-back arrow, and note box."""
    steps = d['steps']; n = len(steps)
    s = heading(d['heading']) if d.get('heading') else ''
    default_top = 78 if d.get('loop') else (112 if d.get('note') else 132)
    if not d.get('heading') and not d.get('loop'): default_top -= 40
    top = d.get('top', default_top)
    size = d.get('icon', 70 if n <= 4 else 60 if n == 5 else 54)
    cw = 752 / n
    lsize = 18 if n <= 4 else 17 if n == 5 else 16
    for i, (key, label, detail) in enumerate(steps):
        cx = 24 + cw * (i + .5)
        color = O if i in d.get('accent', [0]) else N
        s += art(key, cx - size / 2, top, size, color)
        s += block(cx, top + size + 28, label, cw - 14, lsize, color, True, 'middle', True, max_lines=3)
        if detail:
            nlab = len(_wrap(label.upper(), cw - 14, lsize, True))
            s += block(cx, top + size + 30 + nlab * lsize * 1.22 + 4, detail, cw - 12, 16, G, False, 'middle', max_lines=4)
        if i < n - 1:
            s += edge([(cx + size / 2 + 8, top + size / 2), (cx + cw - size / 2 - 10, top + size / 2)], O if d.get('orange') else B)
    if d.get('loop'):
        ly = d.get('loop_y', 352)
        first = 24 + cw * .5; last = 24 + cw * (n - .5)
        a, b = d.get('loop_from', n - 1), d.get('loop_to', 0)
        xa = 24 + cw * (a + .5); xb = 24 + cw * (b + .5)
        s += edge([(xa, d.get('loop_start', ly - 30)), (xa, ly), (xb, ly), (xb, d.get('loop_end', ly - 30))], B, True)
        s += block((xa + xb) / 2, ly - 12, d['loop'], abs(xa - xb) - 40, 16, B, True, 'middle', max_lines=1)
    if d.get('note'):
        s += rect(24, 384, 752, 46, P, L, 6, container=True) + block(400, 413, d['note'], 724, 17, N, False, 'middle', max_lines=1)
    return s

def _wrap(s, w, size, bold=False):
    out = []
    for para in s.split('\n'):
        cur = ''
        for word in para.split():
            cand = (cur + ' ' + word).strip()
            if width(cand, size, bold) > w and cur: out.append(cur); cur = word
            else: cur = cand
        if cur: out.append(cur)
    return out

def cols(d):
    """Columns with an icon, a name, and a short list. Optional arrows between columns."""
    items = d['items']; n = len(items)
    s = heading(d['heading']) if d.get('heading') else ''
    top = 64 if d.get('heading') else 34
    gap = 28 if d.get('arrows') else 16
    cw = (752 - gap * (n - 1)) / n
    bodies = []; bottom = 0
    for i, it in enumerate(items):
        x = 24 + i * (cw + gap)
        key, name, lines = it[0], it[1], it[2]
        color = O if i in d.get('accent', []) else B
        b = art(key, x + cw / 2 - 30, top + 16, 60, O if i in d.get('accent', []) else N)
        b += block(x + cw / 2, top + 104, name, cw - 24, 18 if n > 2 else 20, color, True, 'middle', True, max_lines=2)
        nl = len(_wrap(name.upper(), cw - 24, 18 if n > 2 else 20, True))
        y = top + 104 + nl * 23 + 18
        ls, end = lines_list(x + 14, y, lines, cw - 28, d.get('size', 17), N, max_lines=d.get('max_lines', 3))
        bodies.append((x, b + ls)); bottom = max(bottom, end)
    limit = 380 if d.get('note') else 428
    h = min(limit, bottom + 14) - top
    for i, (x, b) in enumerate(bodies):
        s += rect(x, top, cw, h, 'white', O if i in d.get('accent', []) else L, 8) + b
        if d.get('arrows') and i < n - 1:
            s += edge([(x + cw + 3, top + 46), (x + cw + gap - 3, top + 46)], O)
    if d.get('note'):
        ny = min(390, top + h + 20)
        s += rect(24, ny, 752, 40, P, L, 6, container=True) + block(400, ny + 26, d['note'], 724, 17, N, False, 'middle', max_lines=1)
    return s

def tiles(d):
    """A grid of tiles: icon, title, two-line description."""
    items = d['items']; ncols = d.get('cols', 3)
    rows = (len(items) + ncols - 1) // ncols
    s = heading(d['heading']) if d.get('heading') else ''
    top = 58 if d.get('heading') else 26
    tw = (752 - 16 * (ncols - 1)) / ncols
    th = (420 - top - 16 * (rows - 1)) / rows
    for i, (key, title, lines) in enumerate(items):
        r, c = divmod(i, ncols)
        inrow = min(ncols, len(items) - r * ncols)
        offset = (752 - (inrow * tw + 16 * (inrow - 1))) / 2
        x = 24 + offset + c * (tw + 16); y = top + r * (th + 16)
        s += rect(x, y, tw, th, P if i % 2 == 0 else 'white', L, 8, container=True)
        s += art(key, x + 14, y + 14, 50, O if i in d.get('accent', []) else N)
        s += block(x + 76, y + 38, title, tw - 90, 19, B, True, caps=True, max_lines=2)
        ls, _ = lines_list(x + 16, y + 92, lines, tw - 32, 16, N, max_lines=2)
        s += ls
    return s

def hub(d):
    """A service in the centre with four capabilities linked to it."""
    s = heading(d['heading']) if d.get('heading') else ''
    cx, cy = 400, 238
    s += art(d['center_icon'], cx - 46, cy - 76, 92)
    s += block(cx, cy + 46, d['center'], 230, 20, N, True, 'middle', True, max_lines=2)
    pos = [(24, 70), (556, 70), (24, 270), (556, 270)]
    for (key, title, detail), (x, y) in zip(d['items'], pos):
        s += rect(x, y, 220, 140, 'white', B, 8, container=True)
        s += art(key, x + 12, y + 14, 44)
        s += block(x + 66, y + 34, title, 142, 18, B, True, caps=True, max_lines=2)
        s += block(x + 14, y + 88, detail, 192, 16, N, max_lines=2)
    s += edge([(cx - 60, cy - 50), (252, 140)], B, False, False, 2.2) + edge([(cx + 60, cy - 50), (548, 140)], B, False, False, 2.2)
    s += edge([(cx - 60, cy + 70), (252, 340)], B, False, False, 2.2) + edge([(cx + 60, cy + 70), (548, 340)], B, False, False, 2.2)
    return s

def lanes2(d):
    """Rows: icon, stage, tool, role."""
    rows = d['rows']
    s = heading(d.get('left', 'STAGE'), 104, 40, size=19) + heading(d.get('middle', 'AWS SERVICE'), 330, 40, B, 19) + heading(d.get('right', 'WHAT IT DOES'), 560, 40, size=19)
    rh = (400 - 60) / len(rows)
    for i, (key, stage, tool, role) in enumerate(rows):
        y = 62 + i * rh
        s += art(key, 32, y + 6, 56)
        s += block(104, y + 30, stage, 184, 18, N, True, max_lines=2)
        s += edge([(296, y + 34), (318, y + 34)])
        s += block(330, y + 30, tool, 210, 18, B, True, max_lines=2)
        s += edge([(536, y + 34), (552, y + 34)])
        s += block(560, y + 30, role, 216, 16, N, max_lines=3)
        if i < len(rows) - 1: s += edge([(32, y + rh - 6), (776, y + rh - 6)], L, False, False, 1.2)
    return s

def cycle(d):
    """Stages on a loop with arrows between neighbours and a centre label."""
    items = d['items']; n = len(items)
    import math
    cx, cy, rx, ry = (400, 235, 300, 150) if n > 4 else (400, 250, 280, 150)
    s = ''
    pts = []
    for i in range(n):
        a = -math.pi / 2 + 2 * math.pi * i / n
        pts.append((cx + rx * math.cos(a), cy + ry * math.sin(a)))
    for i, ((key, label), (x, y)) in enumerate(zip(items, pts)):
        s += art(key, x - 27, y - 46, 54, O if i == 0 else N)
        s += block(x, y + 30, label, 150, 17, O if i == 0 else N, True, 'middle', True, max_lines=2)
    for i in range(n):
        (x1, y1), (x2, y2) = pts[i], pts[(i + 1) % n]
        mx, my = (x1 + x2) / 2, (y1 + y2) / 2
        dx, dy = x2 - x1, y2 - y1; L_ = math.hypot(dx, dy); ux, uy = dx / L_, dy / L_
        # pull the arrow toward the centre so it clears the labels
        pull = .28 if n > 4 else 0
        half = 34 if n > 4 else 60
        px, py = (cx - mx) * pull, (cy - my) * pull
        a = (round(mx + px - ux * half, 1), round(my + py - uy * half, 1)); b = (round(mx + px + ux * half, 1), round(my + py + uy * half, 1))
        s += edge([a, b], B)
    s += rect(cx - 120, cy - 34, 240, 68, P, B, 8, container=True) + block(cx, cy - 4, d['center'], 216, 18, N, True, 'middle', True, max_lines=2)
    return s

def quad(d):
    """Four labelled panels in a 2x2 grid."""
    s = ''
    for i, (key, title, lines) in enumerate(d['items']):
        r, c = divmod(i, 2)
        x = 24 + c * 384; y = 24 + r * 208
        s += rect(x, y, 368, 194, P if (r + c) % 2 == 0 else 'white', B if i in d.get('accent', []) else L, 8, container=True)
        s += art(key, x + 16, y + 16, 56, O if i in d.get('accent', []) else N)
        s += block(x + 88, y + 50, title, 260, 21, B, True, caps=True, max_lines=1)
        ls, _ = lines_list(x + 20, y + 106, lines, 330, 17, N, max_lines=2)
        s += ls
    return s

def phases(d):
    """Boxed phases left to right with sub-steps and arrows."""
    items = d['items']; n = len(items)
    s = heading(d['heading']) if d.get('heading') else ''
    top = 62 if d.get('heading') else 30
    gap = 34; cw = (752 - gap * (n - 1)) / n
    bodies = []; bottom = 0
    for i, (key, name, lines) in enumerate(items):
        x = 24 + i * (cw + gap)
        b = art(key, x + 14, top + 14, 52, O if i == 0 and d.get('first_orange') else N)
        b += block(x + 78, top + 46, name, cw - 92, 19, B, True, caps=True, max_lines=2)
        ls, end = lines_list(x + 16, top + 106, lines, cw - 32, d.get('size', 17), N, max_lines=3)
        bodies.append((x, b + ls)); bottom = max(bottom, end)
    h = min(380 if d.get('note') else 428, bottom + 14) - top
    for i, (x, b) in enumerate(bodies):
        s += rect(x, top, cw, h, 'white', O if i == 0 and d.get('first_orange') else B, 8, container=True) + b
        if i < n - 1: s += edge([(x + cw + 4, top + h / 2), (x + cw + gap - 6, top + h / 2)], O)
    if d.get('note'):
        s += rect(24, 392, 752, 40, P, L, 6, container=True) + block(400, 418, d['note'], 724, 17, N, False, 'middle', max_lines=1)
    return s

def fanin(d):
    """Several sources feed a central step, which produces outputs."""
    src = d['sources']; outs = d['outputs']
    s = heading(d['heading']) if d.get('heading') else ''
    top = 64 if d.get('heading') else 30
    sh = (400 - top) / len(src)
    for i, (key, label) in enumerate(src):
        y = top + i * sh + sh / 2
        s += art(key, 30, y - 24, 48) + block(90, y + 6, label, 150, 17, N, True, max_lines=2)
        s += edge([(250, y), (296, 236)], B, False, True, 2.2)
    mx = 310
    s += rect(mx, 150, 200, 172, P, O, 8, container=True)
    s += art(d['center_icon'], mx + 70, 162, 60, O)
    s += block(mx + 100, 250, d['center'], 180, 19, O, True, 'middle', True, max_lines=2)
    if d.get('center_detail'): s += block(mx + 100, 288, d['center_detail'], 180, 16, N, False, 'middle', max_lines=2)
    oh = (400 - top) / len(outs)
    for i, (key, label, detail) in enumerate(outs):
        y = top + i * oh + oh / 2
        s += edge([(mx + 204, 236), (556, y)], O, False, True, 2.2)
        nl = len(_wrap(label, 146, 17, True))
        s += art(key, 566, y - 26, 52) + block(630, y - 4, label, 146, 17, N, True, max_lines=2)
        if detail: s += block(630, y + 18 + nl * 21, detail, 146, 16, G, max_lines=2)
    return s

def checklist(d):
    """Questions on the left, and what each answer means on the right."""
    s = heading(d['heading'])
    rows = d['rows']; rh = 340 / len(rows)
    s += text(24, 72, d.get('left', 'ASK'), 18, B, True, caps=True) + text(470, 72, d.get('right', 'IF SO'), 18, O, True, caps=True)
    for i, (key, q, a) in enumerate(rows):
        y = 84 + i * rh
        s += art(key, 24, y + 10, 50)
        s += block(88, y + 34, q, 340, 18, N, True, max_lines=2)
        s += edge([(434, y + 34), (462, y + 34)], O)
        s += block(470, y + 34, a, 306, 17, N, max_lines=3)
        if i < len(rows) - 1: s += edge([(24, y + rh - 4), (776, y + rh - 4)], L, False, False, 1.2)
    return s

def tree(d):
    """A two-level tree: question, two branches, four leaves with tiny plots."""
    s = pill(250, 24, 300, 46, d['root'], O, W, 18)
    s += edge([(400, 72), (400, 92), (196, 92), (196, 112)], B) + edge([(400, 92), (604, 92), (604, 112)], B)
    for bx, (name, sub) in zip([196, 604], d['branches']):
        s += rect(bx - 170, 114, 340, 68, P, B, 8, container=True)
        s += text(bx, 142, name, 20, B, True, 'middle', True) + text(bx, 167, sub, 16, N, False, 'middle')
    leaves = d['leaves']
    xs = [24, 212, 412, 600]
    for i, (name, out, kind) in enumerate(leaves):
        x = xs[i]; parent = 196 if i < 2 else 604
        s += edge([(parent, 184), (parent, 200), (x + 88, 200), (x + 88, 214)], B, False, True, 2.2)
        s += rect(x, 218, 176, 206, 'white', L, 8)
        s += text(x + 88, 244, name, 18, N, True, 'middle', True) + block(x + 88, 268, out, 156, 16, G, False, 'middle', max_lines=2)
        px, py, pw, ph = x + 28, 304, 120, 100
        s += axes(px, py, pw, ph)
        if kind == 'cls':
            s += plot(px, py, pw, ph, [(.15, .3), (.3, .2), (.22, .5), (.38, .35)], B) + plot(px, py, pw, ph, [(.65, .75), (.8, .6), (.7, .9), (.9, .8)], O)
            s += line(px, py, pw, ph, [(.2, .98), (.95, .1)], N, 1.8, True)
        if kind == 'reg':
            s += plot(px, py, pw, ph, [(.1, .2), (.3, .35), (.5, .5), (.7, .62), (.9, .82)], B) + line(px, py, pw, ph, [(.05, .15), (.97, .88)], O)
        if kind == 'clu':
            for ccx, ccy, c in [(.25, .3, B), (.72, .3, T), (.5, .78, O)]:
                s += plot(px, py, pw, ph, [(ccx + a, ccy + b) for a, b in [(0, 0), (.07, .05), (-.06, .06), (.04, -.08)]], c, 4.5)
        if kind == 'ano':
            s += plot(px, py, pw, ph, [(.15 + .1 * i, .35 + .1 * ((i * 5) % 3)) for i in range(7)], B, 4.5) + cross(px + pw * .85, py + ph * .15, O)
    return s

# ------------------------------------------------------------------ concept drawings

def nested(d):
    s = heading(d['heading'])
    rings = [(24, 58, 420, 368, 'ARTIFICIAL INTELLIGENCE', N, 'white'), (52, 112, 364, 300, 'MACHINE LEARNING', B, P),
             (80, 166, 308, 232, 'DEEP LEARNING', B, 'white'), (108, 220, 252, 164, 'GENERATIVE AI', O, W)]
    for x, y, w, h, name, c, f in rings:
        s += rect(x, y, w, h, f, c, 12, False, 2) + text(x + 18, y + 32, name, 19, c, True)
    s += block(234, 290, d['inner'], 220, 17, N, False, 'middle', max_lines=4)
    s += text(480, 92, d['right_title'], 20, B, True, caps=True)
    ls, _ = lines_list(480, 136, d['right'], 296, 18, N, max_lines=2)
    return s + ls

def forecast(d):
    x, y, w, h = 70, 60, 690, 300
    s = heading(d['heading']) + axes(x, y, w, h)
    hist = [(.00, .38), (.05, .52), (.10, .44), (.15, .58), (.20, .47), (.25, .62), (.30, .5), (.35, .66), (.40, .55), (.45, .7), (.50, .58), (.55, .72), (.60, .62)]
    s += line(x, y, w, h, hist, B, 3)
    up = [(.60, .62), (.70, .80), (.80, .90), (.90, .97)]
    lo = [(.60, .62), (.70, .55), (.80, .48), (.90, .40)]
    mid = [(.60, .62), (.70, .68), (.80, .70), (.90, .72)]
    poly = 'M' + 'L'.join(f'{x+px*w} {y+h-py*h}' for px, py in up + lo[::-1]) + 'Z'
    s += f'<path d="{poly}" fill="#fde7d4" stroke="none"/>'
    s += line(x, y, w, h, up, O, 2, True) + line(x, y, w, h, lo, O, 2, True) + line(x, y, w, h, mid, O, 3)
    s += edge([(x + .6 * w, y + 4), (x + .6 * w, y + h)], G, True, False, 1.6)
    s += text(x + .3 * w, y + h + 34, 'HISTORY: KNOWN VALUES', 18, B, True, 'middle')
    s += text(x + .78 * w, y + h + 34, 'FORECAST', 18, O, True, 'middle')
    s += text(x + .6 * w + 10, y + 26, 'Today', 16, G, True)
    s += block(x + .91 * w + 8, y + h - .97 * h - 4, 'Upper', 60, 16, O, True, max_lines=1)
    s += block(x + .91 * w + 8, y + h - .72 * h + 6, 'Expected', 90, 16, O, True, max_lines=1)
    s += block(x + .91 * w + 8, y + h - .40 * h + 6, 'Lower', 60, 16, O, True, max_lines=1)
    s += vlabel(44, y + h / 2, d['ylabel'])
    return s

def wave(d):
    import math
    x, y, w, h = 60, 70, 700, 260
    s = heading(d['heading']) + axes(x, y, w, h)
    pts = []
    for i in range(0, 141):
        t = i / 140
        v = .45 + .17 * math.sin(t * 2 * math.pi * 5)
        if .66 < t < .74: v += .32 * math.exp(-((t - .7) / .018) ** 2)
        pts.append((round(t, 4), round(v, 4)))
    s += f'<rect x="{x}" y="{y+h-.64*h}" width="{w}" height="{.38*h}" fill="{P}" stroke="none"/>'
    s += line(x, y, w, h, pts, B, 2.8)
    peak = max(pts, key=lambda p: p[1])
    s += circle(x + peak[0] * w, y + h - peak[1] * h, 24, 'none', O, 2.6)
    s += text(x + peak[0] * w + 34, y + h - peak[1] * h - 10, 'ANOMALY', 19, O, True)
    s += text(x + 14, y + h - .64 * h - 10, 'Normal range learned from history', 16, B, True)
    s += text(x + w / 2, y + h + 34, d['xlabel'], 17, G, True, 'middle')
    s += vlabel(36, y + h / 2, d['ylabel'])
    s += note(d['foot'], 432)
    return s

def chat(d):
    s = text(24, 40, d['left_name'], 20, B, True, caps=True) + text(776, 40, d['right_name'], 20, B, True, 'end', True)
    for (lt, rt, y, direction) in d['rows']:
        s += rect(24, y, 296, 104, P if direction == 'r' else 'white', B, 10, container=True) + block(40, y + 38, lt, 264, 18, N, False, max_lines=3)
        s += rect(480, y, 296, 104, 'white' if direction == 'r' else P, B, 10, container=True) + block(496, y + 38, rt, 264, 18, N, False, max_lines=3)
        s += art('translate', 368, y + 20, 64)
        if direction == 'r':
            s += edge([(324, y + 52), (360, y + 52)], O) + edge([(440, y + 52), (474, y + 52)], O)
        else:
            s += edge([(476, y + 52), (440, y + 52)], O) + edge([(360, y + 52), (326, y + 52)], O)
        s += text(400, y + 130, 'Amazon Translate', 16, G, True, 'middle')
    s += text(172, 376, d['left_lang'], 17, G, True, 'middle') + text(628, 376, d['right_lang'], 17, G, True, 'middle')
    return s

def slots(d):
    s = heading(d['heading'])
    s += rect(24, 64, 752, 64, W, O, 30, container=True) + art('person', 38, 72, 48)
    s += block(100, 104, d['utterance'], 660, 19, N, True, max_lines=1)
    s += text(100, 160, 'UTTERANCE: the words a person uses', 16, O, True)
    s += edge([(140, 172), (140, 214)], B) + edge([(400, 172), (400, 214)], B) + edge([(660, 172), (660, 214)], B)
    boxes = [('INTENT', [d['intent']]), ('SLOTS', d['slots']), ('FULFILLMENT', d['fulfil'])]
    for i, (name, rows) in enumerate(boxes):
        x = 24 + i * 260
        s += rect(x, 222, 232, 196, 'white', B, 8, container=True) + text(x + 16, 254, name, 19, B, True)
        for j, row in enumerate(rows):
            s += block(x + 16, 292 + j * 34, row, 202, 17, N, j == 0 and i == 0, max_lines=1)
    return s

def two_lane(d):
    s = ''
    for k, (title, steps, color) in enumerate(d['lanes']):
        y0 = 30 + k * 210
        s += text(24, y0 + 20, title, 21, color, True, caps=True)
        n = len(steps); cw = 600 / n
        for i, (key, label) in enumerate(steps):
            cx = 176 + cw * (i + .5)
            s += art(key, cx - 34, y0 + 46, 68, color if i == n - 1 else N)
            s += block(cx, y0 + 146, label, cw - 20, 18, N, True, 'middle', True, max_lines=2)
            if i < n - 1: s += edge([(cx + 44, y0 + 80), (cx + cw - 46, y0 + 80)], color)
        s += block(24, y0 + 60, d['lane_notes'][k], 130, 16, G, max_lines=5)
        if k == 0: s += edge([(24, 222), (776, 222)], L, False, False, 1.6)
    return s

def table_panel(d):
    s = heading(d['heading'])
    cols_, rows, widths = d['columns'], d['rows'], d['widths']
    s += table(24, 58, cols_, rows, widths, 36)
    ty = 58 + 36 * (len(rows) + 1) + 34
    s += text(24, ty, d['services_title'], 18, B, True, caps=True)
    n = len(d['services']); cw = 752 / n
    for i, (key, name, detail) in enumerate(d['services']):
        x = 24 + i * cw
        s += art(key, x, ty + 18, 54) + block(x + 66, ty + 42, name, cw - 74, 18, N, True, max_lines=2) + block(x + 66, ty + 88, detail, cw - 74, 16, G, max_lines=2)
    return s

def json_panel(d):
    s = heading(d['heading'])
    s += rect(24, 58, 400, 368, '#f8fafc', L, 8, container=True)
    y = 92
    for ln in d['code']:
        indent = len(ln) - len(ln.lstrip(' '))
        s += text(44 + indent * 9, y, ln.strip(), 18, B if ':' in ln else N, ':' in ln)
        y += 27
    s += text(456, 92, 'NOTICE', 18, O, True)
    ls, yy = lines_list(456, 130, d['notes'], 320, 17, N, max_lines=3)
    s += ls + text(456, 316, 'WHERE TO STORE IT', 18, B, True)
    for i, (key, name) in enumerate(d['services']):
        x = 456 + i * 110
        s += art(key, x + 22, 334, 50) + block(x + 47, 410, name, 104, 16, N, True, 'middle', max_lines=2)
    return s

def timeseries(d):
    s = heading(d['heading'])
    s += table(24, 58, ['TIME', 'CPU %', 'REQUESTS/S'], d['rows'], [120, 90, 120], 34)
    x, y, w, h = 400, 76, 370, 220
    s += axes(x, y, w, h)
    s += line(x, y, w, h, [(i / 23, .45 + .25 * __import__('math').sin(i / 23 * 6.28 * 2) + (.1 if i in (17, 18) else 0)) for i in range(24)], B, 2.6)
    s += text(x + w / 2, y + h + 30, 'Time', 16, G, True, 'middle') + vlabel(x - 14, y + h / 2, 'Requests per second')
    ls, _ = lines_list(24, 330, d['notes'], 752, 17, N, max_lines=1)
    return s + ls

def linefit(d):
    x, y, w, h = 90, 40, 420, 320
    s = axes(x, y, w, h)
    pts = [(.08, .14), (.16, .25), (.24, .22), (.3, .36), (.38, .37), (.46, .49), (.52, .47), (.6, .58), (.68, .66), (.74, .63), (.82, .76), (.9, .84)]
    s += plot(x, y, w, h, pts, B, 6) + line(x, y, w, h, [(.03, .08), (.97, .88)], O, 3)
    s += text(x + w / 2, y + h + 34, d['xlabel'], 17, G, True, 'middle') + vlabel(52, y + h / 2, d['ylabel'])
    s += rect(546, 52, 230, 118, W, O, 8, container=True) + text(661, 92, 'THE MODEL', 18, O, True, 'middle') + text(661, 136, d['formula'], 26, N, True, 'middle')
    s += text(546, 214, 'LEARNED PARAMETERS', 18, B, True)
    ls, _ = lines_list(546, 250, d['params'], 230, 17, N, max_lines=3)
    return s + ls

def labeled(d):
    s = text(24, 40, 'LABELED TRAINING EXAMPLES', 20, B, True)
    for i, (lab, ok) in enumerate(d['examples']):
        r, c = divmod(i, 3)
        x = 24 + c * 112; y = 58 + r * 150
        s += rect(x, y, 100, 140, 'white', L, 6)
        s += art('photo', x + 22, y + 10, 56, N)
        s += pill(x + 5, y + 84, 90, 40, lab, O if not ok else T, W if not ok else '#e6f4f2', 16)
    s += edge([(372, 196), (430, 196)], B) + art('chip', 440, 158, 76) + text(478, 266, 'TRAINED MODEL', 18, N, True, 'middle')
    s += edge([(526, 196), (588, 196)], O)
    s += rect(598, 88, 178, 200, P, B, 8, container=True) + art('photo', 652, 104, 70) + text(687, 214, 'NEW PHOTO', 17, N, True, 'middle')
    s += pill(612, 232, 150, 38, d['prediction'], O, W, 17)
    s += rect(24, 376, 752, 52, P, L, 6, container=True) + block(400, 408, d['note'], 724, 17, N, False, 'middle', max_lines=1)
    return s

def clusters2(d):
    s = ''
    raw = [(.12, .2), (.2, .3), (.15, .38), (.28, .22), (.62, .78), (.7, .7), (.75, .85), (.82, .76), (.4, .62), (.48, .55), (.35, .5), (.85, .25), (.78, .18), (.9, .35), (.72, .3), (.25, .12), (.58, .62), (.42, .7)]
    groups = [(B, [(.12, .2), (.2, .3), (.15, .38), (.28, .22), (.25, .12)]), (O, [(.62, .78), (.7, .7), (.75, .85), (.82, .76), (.58, .62)]), (T, [(.85, .25), (.78, .18), (.9, .35), (.72, .3)]), ('#6b4fbb', [(.4, .62), (.48, .55), (.35, .5), (.42, .7)])]
    for k, (x, title) in enumerate([(40, 'UNLABELED DATA'), (450, 'AFTER CLUSTERING')]):
        s += text(x + 155, 42, title, 20, B if k else N, True, 'middle')
        s += axes(x, 64, 310, 270)
        if k == 0: s += plot(x, 64, 310, 270, raw, G, 6)
        else:
            for c, pts in groups: s += plot(x, 64, 310, 270, pts, c, 6)
    s += edge([(370, 200), (430, 200)], O)
    for i, (lab, c) in enumerate(zip(d['names'], [B, O, T, '#6b4fbb'])):
        s += dot(456 + (i % 2) * 176, 382 + (i // 2) * 34, c, 7) + text(470 + (i % 2) * 176, 388 + (i // 2) * 34, lab, 17, N, True)
    s += block(40, 388, d['note'], 320, 16, G, max_lines=2)
    return s

def outliers(d):
    x, y, w, h = 80, 40, 470, 330
    s = axes(x, y, w, h)
    import math
    pts = [(.5 + .32 * math.cos(a) * r, .5 + .2 * math.sin(a) * r) for a in [i * .7 for i in range(40)] for r in [.4 + .6 * ((int(a * 10) % 7) / 7)]]
    s += f'<ellipse cx="{x+.5*w}" cy="{y+h-.5*h}" rx="{.36*w}" ry="{.25*h}" fill="{P}" stroke="{B}" stroke-width="1.8" stroke-dasharray="7 5"/>'
    s += plot(x, y, w, h, pts, B, 4.5)
    for px, py in [(.12, .9), (.9, .12), (.88, .86)]: s += cross(x + px * w, y + h - py * h, O, 8, 3.2)
    s += text(x + w / 2, y + h + 32, d['xlabel'], 17, G, True, 'middle') + vlabel(44, y + h / 2, d['ylabel'])
    s += text(590, 80, 'NORMAL REGION', 19, B, True) + block(590, 110, d['normal'], 186, 17, N, max_lines=3)
    s += cross(600, 200, O, 8, 3.2) + text(620, 206, 'OUTLIER', 19, O, True) + block(590, 240, d['outlier'], 186, 17, N, max_lines=4)
    return s

def rl(d):
    s = rect(40, 120, 210, 170, P, B, 10, container=True) + art('chip', 108, 136, 74) + text(145, 248, 'AGENT', 21, B, True, 'middle') + block(145, 274, d['agent'], 186, 16, N, False, 'middle', max_lines=1)
    s += rect(550, 120, 210, 170, W, O, 10, container=True) + art('globe', 618, 136, 74, O) + text(655, 248, 'ENVIRONMENT', 21, O, True, 'middle') + block(655, 274, d['env'], 186, 16, N, False, 'middle', max_lines=1)
    s += edge([(145, 112), (145, 70), (655, 70), (655, 112)], O) + text(400, 58, 'ACTION', 19, O, True, 'middle') + text(400, 98, d['action'], 16, N, False, 'middle')
    s += edge([(655, 298), (655, 344), (145, 344), (145, 298)], B) + text(400, 334, 'NEW STATE + REWARD', 19, B, True, 'middle') + text(400, 372, d['reward'], 16, N, False, 'middle')
    s += block(400, 190, d['center'], 250, 18, N, True, 'middle', max_lines=3)
    s += note(d['foot'], 426)
    return s

def fit3(d):
    s = ''
    pts = [(.08, .2), (.18, .42), (.28, .36), (.38, .58), (.48, .5), (.58, .7), (.68, .62), (.78, .8), (.88, .74)]
    titles = [('UNDERFIT', 'Too simple: misses the pattern', O), ('GOOD FIT', 'Captures the general trend', T), ('OVERFIT', 'Follows every point, even noise', O)]
    curves = [[(.03, .45), (.97, .58)], [(.03, .2), (.3, .4), (.6, .62), (.97, .82)], [(.03, .14)] + [(px, py) for px, py in pts] + [(.97, .66)]]
    for k, ((t, sub, c), cv) in enumerate(zip(titles, curves)):
        x = 24 + k * 256
        s += rect(x, 20, 240, 262, 'white', c, 8)
        s += text(x + 120, 50, t, 21, c, True, 'middle') + axes(x + 24, 68, 192, 150)
        s += plot(x + 24, 68, 192, 150, pts, B, 5) + line(x + 24, 68, 192, 150, cv, c, 2.8)
        s += block(x + 120, 254, sub, 216, 16, N, False, 'middle', max_lines=1)
    s += table(24, 298, ['RESULT ON', 'TRAINING DATA', 'NEW DATA'], [['Underfit', 'Poor', 'Poor'], ['Good fit', 'Good', 'Good'], ['Overfit', 'Excellent', 'Poor']], [180, 286, 286], 32)
    return s

def endpoint(d):
    s = art('client', 36, 150, 74) + text(73, 254, 'APPLICATION', 18, N, True, 'middle')
    s += edge([(122, 170), (236, 170)], O) + text(178, 158, 'Request', 16, O, True, 'middle')
    s += edge([(236, 214), (122, 214)], B) + text(178, 240, 'Prediction', 16, B, True, 'middle')
    s += zone(248, 70, 380, 250, 'PERSISTENT ENDPOINT', B, P)
    s += art('code', 302, 132, 62) + text(333, 226, 'INFERENCE CODE', 17, N, True, 'middle')
    s += edge([(374, 163), (476, 163)], B) + text(425, 152, 'loads', 16, G, False, 'middle')
    s += art('model', 488, 132, 62) + text(519, 226, 'MODEL ARTIFACTS', 17, N, True, 'middle')
    s += block(438, 270, 'Trained weights, definitions, and metadata', 340, 16, G, False, 'middle', max_lines=1)
    s += rect(648, 70, 128, 250, W, O, 8, container=True) + text(712, 100, 'ALWAYS ON', 17, O, True, 'middle')
    ls, _ = lines_list(660, 140, d['traits'], 112, 16, N, max_lines=2)
    s += ls + note(d['foot'], 410)
    return s

def fairness(d):
    s = text(24, 40, d['chart_title'], 20, B, True, caps=True)
    x, y, w, h = 70, 60, 330, 280
    s += axes(x, y, w, h)
    vals = d['values']
    for i, (lab, v) in enumerate(vals):
        bx = x + 26 + i * 100
        s += rect(bx, y + h - v * h, 64, v * h, O if v < .5 else B, 'none', 3) + text(bx + 32, y + h - v * h - 10, f'{int(v*100)}%', 18, N, True, 'middle')
        s += text(bx + 32, y + h + 26, lab, 16, G, True, 'middle')
    s += edge([(x, y + h - .62 * h), (x + w, y + h - .62 * h)], G, True, False, 1.6)
    s += vlabel(42, y + h / 2, 'Approval rate')
    s += text(440, 80, 'CHECK BEFORE RELEASE', 20, O, True)
    for i, (t, sub) in enumerate(d['checks']):
        yy = 112 + i * 100
        s += art('check', 440, yy, 46) + block(500, yy + 20, t, 276, 18, N, True, max_lines=1) + block(500, yy + 48, sub, 276, 16, G, max_lines=2)
    s += note(d['foot'], 426)
    return s

def neuralnet(d):
    s = ''
    layers = [(110, [.2, .5, .8], 'INPUT LAYER', O), (300, [.08, .36, .64, .92], 'HIDDEN LAYER', B), (490, [.08, .36, .64, .92], 'HIDDEN LAYER', B), (680, [.35, .65], 'OUTPUT LAYER', T)]
    y0, hh = 70, 250
    for (x1, ys1, _, _), (x2, ys2, _, _) in zip(layers, layers[1:]):
        for a in ys1:
            for b in ys2: s += f'<line x1="{x1}" y1="{y0+a*hh}" x2="{x2}" y2="{y0+b*hh}" stroke="#b6c9de" stroke-width="1.5"/>'
    for x, ys, name, c in layers:
        for v in ys: s += circle(x, y0 + v * hh, 15, 'white', c, 3)
        s += text(x, 44, name, 17, c, True, 'middle')
    s += block(110, 360, d['input'], 170, 16, N, False, 'middle', max_lines=2) + block(395, 360, d['hidden'], 300, 16, N, False, 'middle', max_lines=2) + block(680, 360, d['output'], 180, 16, N, False, 'middle', max_lines=2)
    s += note(d['foot'], 430)
    return s

def bike(x, y, s=1, c=N):
    return path(f'M{x} {y}m-22 0a22 22 0 1 0 44 0a22 22 0 1 0 -44 0M{x+70*s} {y}m-22 0a22 22 0 1 0 44 0a22 22 0 1 0 -44 0M{x} {y}L{x+28*s} {y-38*s}L{x+56*s} {y-38*s}L{x+70*s} {y}M{x+28*s} {y-38*s}L{x+38*s} {y}L{x} {y}M{x+52*s} {y-50*s}L{x+56*s} {y-38*s}M{x+22*s} {y-44*s}H{x+34*s}', c, 2.6)

def cvtasks(d):
    s = text(212, 40, 'IMAGE CLASSIFICATION', 20, B, True, 'middle') + text(588, 40, 'OBJECT DETECTION', 20, O, True, 'middle')
    s += rect(52, 60, 320, 230, P, L, 6) + bike(170, 210, 1.2, N)
    s += pill(112, 304, 200, 40, 'BICYCLE: 0.97', B, 'white', 18)
    s += rect(428, 60, 320, 230, P, L, 6)
    s += bike(470, 220, 1, N) + art('person', 640, 120, 70, N)
    s += f'<rect x="440" y="150" width="140" height="100" fill="none" stroke="{O}" stroke-width="3"/>' + f'<rect x="630" y="108" width="90" height="94" fill="none" stroke="{O}" stroke-width="3"/>'
    s += text(510, 140, 'Bicycle 0.95', 16, O, True, 'middle') + text(676, 98, 'Person 0.92', 16, O, True, 'middle')
    s += block(212, 376, d['left'], 320, 17, N, False, 'middle', max_lines=2) + block(588, 376, d['right'], 320, 17, N, False, 'middle', max_lines=2)
    return s

def agentloop(d):
    s = pill(24, 30, 250, 52, d['goal'], O, W, 17)
    pts = [('model', 'PLAN', 220, 150), ('tools', 'ACT WITH A TOOL', 400, 150), ('search', 'OBSERVE THE RESULT', 580, 150)]
    for key, lab, cx, cy in pts:
        s += art(key, cx - 32, cy - 32, 64) + block(cx, cy + 60, lab, 176, 17, N, True, 'middle', True, max_lines=2)
    s += edge([(150, 84), (150, 118), (178, 118)], O)
    s += edge([(258, 150), (362, 150)], B) + edge([(438, 150), (542, 150)], B)
    s += edge([(580, 222), (580, 268), (220, 268), (220, 222)], B, True) + text(400, 258, 'Adjust the plan and repeat', 16, B, True, 'middle')
    s += rect(24, 296, 360, 132, P, B, 8, container=True) + text(40, 326, 'GUARDRAILS', 18, B, True)
    ls, _ = lines_list(40, 354, d['controls'], 330, 16, N, max_lines=1, gap=18)
    s += ls
    s += rect(416, 296, 360, 132, W, O, 8, container=True) + text(432, 326, 'EXAMPLE', 18, O, True)
    s += block(432, 358, d['example'], 330, 16, N, max_lines=3)
    s += edge([(640, 150), (700, 150), (700, 84), (630, 84)], O) + text(714, 74, 'Done', 16, O, True)
    s += pill(470, 62, 158, 44, d['result'], O, 'white', 16)
    return s

def classify2(d):
    s = text(212, 40, 'BINARY', 21, B, True, 'middle') + text(588, 40, 'MULTICLASS', 21, O, True, 'middle')
    s += art('mail', 60, 80, 72) + edge([(144, 116), (190, 116)], B)
    s += text(200, 92, 'Probability of SPAM', 17, N, True)
    s += rect(200, 104, 170, 26, P, 'none', 3) + rect(200, 104, 170 * .91, 26, B, 'none', 3) + text(200, 156, '0.91 is above the 0.5 threshold', 16, G)
    s += pill(120, 186, 190, 40, 'Decision: SPAM', B, 'white', 17)
    s += edge([(400, 30), (400, 300)], L, False, False, 1.6)
    s += art('doc', 430, 80, 72) + edge([(514, 116), (556, 116)], O)
    for i, (lab, v) in enumerate(d['classes']):
        yy = 76 + i * 46
        s += text(566, yy + 18, lab, 17, N, True) + rect(660, yy, 116, 24, P, 'none', 3) + rect(660, yy, 116 * v, 24, O if i == 0 else LB, 'none', 3)
    s += pill(500, 230, 240, 40, 'Most likely: ' + d['classes'][0][0], O, 'white', 17)
    ls, _ = lines_list(24, 340, d['notes'], 752, 17, N, max_lines=1)
    return s + ls

def regress3(d):
    s = ''
    import math
    titles = [('SIMPLE LINEAR', 'One input'), ('MULTIPLE LINEAR', 'Several inputs'), ('LOGISTIC', 'Probability from 0 to 1')]
    for k, (t, sub) in enumerate(titles):
        x = 24 + k * 256
        s += rect(x, 24, 240, 300, 'white', O if k == 2 else B, 8)
        s += text(x + 120, 56, t, 20, O if k == 2 else B, True, 'middle') + text(x + 120, 82, sub, 16, G, False, 'middle')
        px, py, pw, ph = x + 30, 104, 180, 150
        if k == 0:
            s += axes(px, py, pw, ph) + plot(px, py, pw, ph, [(.1, .18), (.25, .3), (.4, .42), (.55, .5), (.7, .68), (.85, .78)], B) + line(px, py, pw, ph, [(.03, .1), (.97, .88)], O)
        elif k == 1:
            for i, lab in enumerate(['Floor area', 'Rooms', 'Location']):
                s += pill(x + 14, 108 + i * 48, 116, 40, lab, B, P, 16)
                s += edge([(x + 134, 128 + i * 48), (x + 156, 175)], B, False, i == 1, 2)
            s += edge([(x + 156, 175), (x + 168, 175)], B)
            s += rect(x + 172, 150, 56, 50, W, O, 6, container=True) + text(x + 200, 182, 'Price', 16, O, True, 'middle')
        else:
            s += axes(px, py, pw, ph) + line(px, py, pw, ph, [(i / 30, 1 / (1 + math.exp(-(i / 30 - .5) * 12)) * .9 + .05) for i in range(31)], O)
            s += plot(px, py, pw, ph, [(.1, .05), (.2, .05), (.3, .05), (.7, .95), (.8, .95), (.9, .95), (.45, .05), (.55, .95)], B, 4.5)
            s += text(px - 10, py + 10, '1', 16, G, True, 'end') + text(px - 10, py + ph, '0', 16, G, True, 'end')
        s += block(x + 120, 290, d['examples'][k], 210, 16, N, False, 'middle', max_lines=2)
    ls, _ = lines_list(24, 370, d['notes'], 752, 17, N, max_lines=1)
    return s + ls

def scenario(d):
    s = heading(d['heading'])
    cols_ = d['cols']; n = len(cols_); gap = 30; cw = (752 - gap * (n - 1)) / n
    for i, (title, items, color) in enumerate(cols_):
        x = 24 + i * (cw + gap)
        s += rect(x, 60, cw, 330, P if i % 2 == 0 else 'white', color, 8, container=True)
        s += block(x + cw / 2, 92, title, cw - 24, 18, color, True, 'middle', True, max_lines=2)
        ls, _ = lines_list(x + 14, 148, items, cw - 28, 16, N, max_lines=3)
        s += ls
        if i < n - 1: s += edge([(x + cw + 3, 225), (x + cw + gap - 4, 225)], O)
    s += rect(24, 400, 752, 32, W, 'none', 6) + block(400, 422, d['foot'], 724, 16, N, True, 'middle', max_lines=1)
    return s

def ladder(d):
    s = vlabel(30, 240, 'More effort, data, and control')
    s += edge([(48, 420), (48, 40)], G, False, True, 2)
    for i, (key, title, sub, ex) in enumerate(d['steps']):
        x = 80 + i * 236; y = 290 - i * 110
        s += rect(x, y, 220, 140 + i * 0, P if i != 2 else W, B if i != 2 else O, 8, container=True)
        s += art(key, x + 14, y + 14, 50, O if i == 2 else N)
        s += block(x + 76, y + 36, title, 136, 18, B if i != 2 else O, True, caps=True, max_lines=2)
        s += block(x + 14, y + 92, sub, 196, 16, N, max_lines=2)
        s += block(x + 110, y - 14, ex, 216, 16, G, True, 'middle', max_lines=1)
    return s

def groundtruth(d):
    s = art('db', 30, 160, 64) + text(62, 252, 'RAW DATA', 17, N, True, 'middle')
    s += edge([(104, 192), (170, 192)], B)
    s += rect(180, 130, 180, 126, P, B, 8, container=True) + art('chip', 246, 140, 48) + block(270, 212, 'ACTIVE LEARNING MODEL', 160, 16, B, True, 'middle', max_lines=2)
    s += edge([(364, 162), (450, 104)], T) + edge([(364, 222), (450, 280)], O)
    s += rect(460, 60, 160, 96, '#e6f4f2', T, 8, container=True) + block(540, 92, 'CONFIDENT ITEMS', 140, 17, T, True, 'middle', max_lines=1) + block(540, 120, 'Labeled automatically', 140, 16, N, False, 'middle', max_lines=1)
    s += rect(460, 232, 160, 110, W, O, 8, container=True) + block(540, 262, 'UNCERTAIN ITEMS', 140, 17, O, True, 'middle', max_lines=1) + block(540, 292, 'Sent to human labelers', 140, 16, N, False, 'middle', max_lines=2)
    s += edge([(624, 108), (690, 168)], T) + edge([(624, 286), (690, 216)], O)
    s += art('docs', 700, 160, 64) + block(732, 252, 'LABELED DATASET', 90, 16, N, True, 'middle', max_lines=2)
    s += edge([(540, 346), (540, 380), (270, 380), (270, 256)], B, True) + text(404, 372, 'Human labels retrain the model', 16, B, True, 'middle')
    s += note(d['foot'], 430)
    return s

def matrix(d):
    """2x2 confusion matrix: rows = prediction, columns = actual. Highlighted cells feed the formula."""
    tp, fp, fn, tn = d['counts']
    hl = set(d.get('highlight', []))
    gx, gy, cw, ch = 168, 92, 150, 116
    s = text(gx + cw, 40, 'ACTUAL', 18, B, True, 'middle')
    s += text(gx + cw / 2, 78, d['pos'], 17, N, True, 'middle') + text(gx + cw * 1.5, 78, d['neg'], 17, N, True, 'middle')
    s += vlabel(40, gy + ch, 'PREDICTION', 18, B)
    s += block(64, gy + ch / 2 + 6, d['pos'], 96, 17, N, True, max_lines=2) + block(64, gy + ch * 1.5 + 6, d['neg'], 96, 17, N, True, max_lines=2)
    cells = [('TP', 'True positive', tp, 0, 0), ('FP', 'False positive', fp, 1, 0), ('FN', 'False negative', fn, 0, 1), ('TN', 'True negative', tn, 1, 1)]
    for key, name, n, c, r in cells:
        x, y = gx + c * cw, gy + r * ch
        good = key in ('TP', 'TN')
        on = key in hl
        s += rect(x, y, cw - 6, ch - 6, (W if on else ('#e6f4f2' if good else '#fdeeee')) if on or not hl else '#f6f7f9', O if on else (T if good else R) if not hl else L, 6, container=True, sw=3 if on else 1.8)
        s += text(x + (cw - 6) / 2, y + 30, name, 16, N, True, 'middle')
        if n is not None: s += text(x + (cw - 6) / 2, y + 82, str(n), 36, O if on else N, True, 'middle')
    s += text(492, 96, d['metric'], 24, O, True, caps=True)
    s += block(492, 136, d['question'], 284, 17, N, max_lines=3)
    if d.get('formula'):
        s += rect(492, 222, 284, 64, P, B, 6, container=True) + block(634, 261, d['formula'], 260, 19, B, True, 'middle', max_lines=1)
    if d.get('calc'):
        s += block(634, 334, d['calc'], 284, 20, N, True, 'middle', max_lines=1)
    if d.get('value') is not None:
        v = d['value']; s += rect(492, 352, 284, 22, P, 'none', 3) + rect(492, 352, 284 * v, 22, O, 'none', 3)
    s += note(d['foot'], 430)
    return s

def roc(d):
    x, y, w, h = 90, 30, 360, 340
    s = axes(x, y, w, h)
    import math
    pts = [(t / 20, (1 - (1 - t / 20) ** 3.4)) for t in range(21)]
    poly = f'M{x} {y+h}' + ''.join(f'L{x+px*w} {y+h-py*h}' for px, py in pts) + f'L{x+w} {y+h}Z'
    s += f'<path d="{poly}" fill="#fde7d4" stroke="none"/>'
    s += line(x, y, w, h, pts, O, 3) + line(x, y, w, h, [(0, 0), (1, 1)], G, 1.8, True)
    s += text(x + w / 2, y + h + 32, 'False positive rate', 17, G, True, 'middle') + vlabel(50, y + h / 2, 'True positive rate (recall)')
    s += text(490, 72, 'READING THE CURVE', 19, B, True)
    ls, end = lines_list(490, 112, d['notes'], 286, 17, N, max_lines=3)
    s += ls
    s += path(f'M490 {end+18}H530', O, 3) + text(542, end + 24, 'ROC curve, AUC = 0.88', 18, O, True)
    s += path(f'M490 {end+54}H530', G, 1.8).replace('stroke-linejoin="round"', 'stroke-linejoin="round" stroke-dasharray="7 5"') + text(542, end + 60, 'Random guessing', 17, G, True)
    return s

def residuals(d):
    x, y, w, h = 70, 40, 400, 300
    s = axes(x, y, w, h)
    pts = [(.1, .3), (.25, .2), (.4, .52), (.55, .45), (.7, .74), (.85, .66)]
    fit = lambda px: .12 + .72 * px
    for px, py in pts:
        s += edge([(x + px * w, y + h - py * h), (x + px * w, y + h - fit(px) * h)], O, True, False, 2)
    s += line(x, y, w, h, [(0, .12), (1, .84)], B, 3) + plot(x, y, w, h, pts, N, 6)
    s += text(x + w / 2, y + h + 32, d['xlabel'], 17, G, True, 'middle') + vlabel(34, y + h / 2, d['ylabel'])
    s += path(f'M{x+16} {y+16}V{y+40}', O, 2) + text(x + 28, y + 34, 'Error: actual minus predicted', 16, O, True)
    for i, (name, form, note_) in enumerate(d['metrics']):
        yy = 50 + i * 112
        s += rect(500, yy, 276, 98, P if i != 1 else 'white', B, 8, container=True)
        s += text(516, yy + 30, name, 20, B, True) + block(516, yy + 58, form, 248, 16, N, True, max_lines=1) + block(516, yy + 82, note_, 248, 16, G, max_lines=1)
    s += note(d['foot'], 430)
    return s

KINDS = {name: fn for name, fn in globals().items() if callable(fn) and not name.startswith('_')}

# ------------------------------------------------------------------ Module 2 compositions

def rings(d):
    """Concentric circles: AI, machine learning, deep learning, generative AI."""
    s = ''
    cx, cy = 230, 238
    for r, name, c, f, dy in [(205, 'AI', N, 'white', -172), (160, 'MACHINE LEARNING', B, P, -122), (114, 'DEEP LEARNING', B, 'white', -76), (66, 'GENERATIVE AI', O, W, 6)]:
        s += circle(cx, cy, r, f, c, 2.2)
        s += text(cx, cy + dy, name, 17, c, True, 'middle')
    s += text(470, 72, d['right_title'], 20, B, True, caps=True)
    y = 112
    for title, lines in d['right']:
        s += text(470, y, title, 19, O if title == d['right'][-1][0] else N, True)
        s += block(470, y + 26, lines, 306, 17, G, max_lines=2)
        y += 92
    return s

def pretrain_adapt(d):
    """Varied data pretrains one model, which is adapted to many tasks."""
    s = text(24, 40, 'VARIED DATA', 19, B, True)
    keys = d['data']
    for i, (key, lab) in enumerate(keys):
        r, c = divmod(i, 2)
        x = 24 + c * 104; y = 64 + r * 116
        s += art(key, x + 22, y, 52) + block(x + 48, y + 76, lab, 98, 16, N, True, 'middle', max_lines=2)
    s += edge([(236, 230), (318, 230)], B) + text(277, 216, 'Pretrain', 17, B, True, 'middle')
    s += rect(330, 150, 150, 160, P, B, 10, container=True) + art('model', 370, 166, 70) + block(405, 266, 'FOUNDATION MODEL', 130, 17, N, True, 'middle', max_lines=2)
    s += edge([(486, 230), (556, 230)], O) + text(521, 216, 'Adapt', 17, O, True, 'middle')
    s += text(570, 40, 'MANY TASKS', 19, O, True)
    for i, t in enumerate(d['tasks']):
        y = 70 + i * 58
        s += rect(570, y, 206, 44, W if i % 2 == 0 else 'white', O, 6, container=True) + block(673, y + 28, t, 186, 17, N, True, 'middle', max_lines=1)
    return s

def tokens_vectors(d):
    s = text(24, 40, 'TOKENS', 20, B, True)
    x = 24
    for tok in d['tokens']:
        w = max(52, width(tok, 18, True) + 24)
        s += rect(x, 56, w, 44, P, B, 6, container=True) + text(x + w / 2, 85, tok, 18, N, True, 'middle')
        x += w + 8
    s += text(24, 140, 'EMBEDDINGS: NEARBY MEANS RELATED', 20, B, True)
    gx, gy, gw, gh = 50, 160, 420, 250
    s += axes(gx, gy, gw, gh)
    for lab, px, py, c in d['points']:
        X, Y = gx + px * gw, gy + gh - py * gh
        s += dot(X, Y, c, 7) + text(X + 12, Y - 8, lab, 17, c, True)
    s += text(500, 172, 'WHAT TO NOTICE', 19, O, True)
    ls, _ = lines_list(500, 212, d['notes'], 276, 17, N, max_lines=3)
    return s + ls

def prompt_parts(d):
    s = text(24, 40, 'PROMPT ELEMENT', 19, B, True) + text(250, 40, 'EXAMPLE', 19, O, True)
    for i, (name, ex) in enumerate(d['rows']):
        y = 58 + i * 92
        s += rect(24, y, 210, 80, P, B, 8, container=True) + block(129, y + 47, name, 186, 19, B, True, 'middle', True, max_lines=2)
        s += rect(250, y, 526, 80, 'white', L, 8, container=True) + block(266, y + 34, ex, 494, 17, N, max_lines=2)
    return s

def diffusion2(d):
    s = ''
    stages = [('NOISE', 1.0), ('PARTLY CLEARED', .5), ('NEW IMAGE', 0.0)]
    import random
    rnd = random.Random(7)
    for k, (name, noise) in enumerate(stages):
        x = 40 + k * 260
        s += rect(x, 60, 200, 170, 'white', L, 8)
        if noise < 1:
            op = 1 - noise
            s += f'<g opacity="{op}">' + bike(x + 62, 190, 1, N) + circle(x + 160, 96, 18, '#fde7d4', O, 2.2) + '</g>'
        for j in range(int(140 * noise) + (0 if noise == 0 else 10)):
            s += f'<rect x="{x+6+rnd.random()*184:.1f}" y="{66+rnd.random()*156:.1f}" width="6" height="6" fill="{rnd.choice([B, LB, G, O])}" opacity="{.35+.5*noise:.2f}"/>'
        s += text(x + 100, 262, name, 18, O if k == 2 else N, True, 'middle')
        if k < 2: s += edge([(x + 208, 145), (x + 252, 145)], O)
    s += edge([(620, 292), (620, 310), (140, 310), (140, 294)], B, True) + text(380, 300, 'Training: forward diffusion adds noise step by step', 16, B, True, 'middle')
    s += text(380, 342, 'Generation: reverse diffusion removes noise, guided by the prompt', 17, O, True, 'middle')
    s += rect(24, 370, 752, 56, P, L, 6, container=True) + block(400, 404, d['note'], 724, 17, N, False, 'middle', max_lines=1)
    return s

def tokens_cost(d):
    s = text(24, 40, 'ONE REQUEST, COUNTED IN TOKENS', 20, B, True)
    parts = d['parts']; total = sum(v for _, v, _ in parts)
    x = 24
    for lab, v, c in parts:
        w = 600 * v / total
        s += rect(x, 60, w - 4, 54, c, 'none', 4) + block(x + (w - 4) / 2, 93, f'{v:,}', w - 8, 17, 'white', True, 'middle', max_lines=1)
        x += w
    for i, (lab, v, c) in enumerate(parts):
        lx = 24 + i * 150
        s += dot(lx + 6, 146, c, 6) + text(lx + 18, 152, lab, 16, N, True)
    s += text(640, 80, 'INPUT', 18, B, True) + text(640, 104, f'{sum(v for l,v,c in parts[:-1]):,} tokens', 17, N)
    s += text(640, 142, 'OUTPUT', 18, O, True) + text(640, 166, f'{parts[-1][1]:,} tokens', 17, N)
    s += edge([(24, 196), (776, 196)], L, False, False, 1.6)
    s += rect(24, 216, 360, 150, P, B, 8, container=True) + text(40, 248, 'COST', 19, B, True)
    s += block(40, 280, d['cost'], 330, 17, N, max_lines=4)
    s += rect(416, 216, 360, 150, W, O, 8, container=True) + text(432, 248, 'SPEED', 19, O, True)
    s += block(432, 280, d['speed'], 330, 17, N, max_lines=4)
    s += note(d['foot'], 410)
    return s

def context_window(d):
    s = text(24, 40, 'CANDIDATE INFORMATION', 19, B, True)
    for i, (lab, keep) in enumerate(d['candidates']):
        y = 58 + i * 50
        s += rect(24, y, 250, 40, P if keep else '#f6f7f9', B if keep else L, 6, container=True) + block(149, y + 26, lab, 232, 16, N if keep else G, keep, 'middle', max_lines=1)
        if keep: s += edge([(280, y + 20), (330, y + 20 + (210 - y - 20) * .5)], O, False, True, 2)
    s += rect(340, 70, 210, 280, W, O, 10, container=True) + text(445, 102, 'CONTEXT WINDOW', 18, O, True, 'middle')
    ls, _ = lines_list(354, 140, d['window'], 186, 16, N, max_lines=2)
    s += ls
    s += edge([(556, 210), (600, 210)], O) + art('model', 610, 176, 68) + text(644, 270, 'MODEL', 18, N, True, 'middle')
    s += block(690, 330, d['note'], 170, 16, G, False, 'middle', max_lines=4)
    return s

def multiagent(d):
    s = text(24, 40, 'SUPERVISOR PATTERN', 19, B, True)
    s += rect(130, 60, 200, 70, P, B, 8, container=True) + text(230, 92, 'SUPERVISOR AGENT', 17, B, True, 'middle') + text(230, 116, 'Splits the task', 16, N, False, 'middle')
    for i, lab in enumerate(d['specialists']):
        x = 24 + i * 145
        s += edge([(230, 134), (x + 66, 196)], B, False, True, 2)
        s += rect(x, 204, 132, 64, 'white', B, 8, container=True) + block(x + 66, 232, lab, 116, 16, N, True, 'middle', max_lines=2)
    s += edge([(466, 30), (466, 420)], L, False, False, 1.6)
    s += text(490, 40, 'BUILDING BLOCKS', 19, O, True)
    for i, (key, t, sub) in enumerate(d['blocks']):
        y = 64 + i * 90
        s += art(key, 490, y, 46) + text(548, y + 20, t, 18, N, True) + block(548, y + 46, sub, 228, 16, G, max_lines=2)
    s += rect(24, 296, 420, 130, W, O, 8, container=True) + text(40, 326, 'SEQUENTIAL HANDOFF', 18, O, True)
    for i, lab in enumerate(d['sequence']):
        x = 40 + i * 136
        s += rect(x, 348, 112, 54, 'white', O, 6, container=True) + block(x + 56, 381, lab, 96, 16, N, True, 'middle', max_lines=1)
        if i < len(d['sequence']) - 1: s += edge([(x + 114, 375), (x + 134, 375)], O)
    return s

def mcp(d):
    s = rect(24, 120, 200, 190, P, B, 10, container=True) + art('tools', 94, 138, 60) + block(124, 236, 'AGENT WITH AN MCP CLIENT', 170, 17, B, True, 'middle', max_lines=2)
    for i, (key, lab) in enumerate(d['servers']):
        y = 40 + i * 132
        s += rect(560, y, 216, 108, 'white', O, 8, container=True) + art(key, 576, y + 16, 46) + block(632, y + 36, lab, 132, 17, N, True, max_lines=2) + text(576, y + 92, 'MCP server', 16, O, True)
        s += edge([(228, 215), (548, y + 54)], B, False, True, 2.2)
    s += rect(250, 24, 270, 50, 'white', L, 6, container=True) + block(385, 55, '1. Discover the tools and data offered', 250, 16, N, True, 'middle', max_lines=1)
    s += rect(250, 368, 270, 42, 'white', L, 6, container=True) + block(385, 395, '2. Call a tool and receive the result', 250, 16, N, True, 'middle', max_lines=1)
    s += note(d['foot'], 430)
    return s

def stack3(d):
    s = ''
    for i, (name, items, color) in enumerate(d['layers']):
        y = 24 + i * 128
        s += rect(24, y, 752, 112, P if i % 2 == 0 else 'white', color, 8, container=True)
        s += block(40, y + 50, name, 150, 19, color, True, caps=True, max_lines=2)
        n = len(items); cw = 570 / n
        for j, (key, lab) in enumerate(items):
            cx = 200 + cw * (j + .5)
            s += art(key, cx - 24, y + 14, 48) + block(cx, y + 86, lab, cw - 8, 16, N, True, 'middle', max_lines=2)
    s += edge([(790, 400), (790, 40)], G, False, True, 2)
    s += note(d['foot'], 432)
    return s

def service_groups(d):
    s = ''
    groups = d['groups']
    for r in range(0, len(groups), 3):
        row = groups[r:r + 3]
        weights = [max(len(items), 1.3) for _, items in row]
        avail = 752 - 16 * (len(row) - 1)
        x = 24
        for title, items in row:
          gw = avail * max(len(items), 1.3) / sum(weights)
          y = 24 + (r // 3) * 206
          s += rect(x, y, gw, 190, 'white', B, 8, container=True) + text(x + gw / 2, y + 30, title, 18, B, True, 'middle', True)
          n = len(items); cw = (gw - 20) / n
          for j, (key, lab) in enumerate(items):
            cx = x + 10 + cw * (j + .5)
            s += art(key, cx - 26, y + 52, 52) + block(cx, y + 132, lab, cw - 6, 16, N, True, 'middle', max_lines=3)
          x += gw + 16
    return s

def transfer(d):
    s = text(24, 30, 'FIRST: LEARN GENERAL PATTERNS', 17, B, True)
    s += rect(24, 50, 170, 76, P, B, 38, container=True) + block(109, 94, 'General dataset', 140, 18, B, True, 'middle', max_lines=1)
    s += edge([(198, 88), (252, 88)], B) + art('train', 264, 57, 62) + text(295, 146, 'TRAIN', 16, N, True, 'middle')
    s += edge([(338, 88), (392, 88)], B) + rect(402, 50, 210, 76, 'white', B, 38, container=True) + block(507, 94, 'Generalized model', 180, 18, N, True, 'middle', max_lines=1)
    s += edge([(507, 130), (507, 176), (318, 176), (318, 228)], O)
    s += text(24, 214, 'THEN: SPECIALIZE WITH LESS DATA', 17, O, True)
    s += rect(24, 236, 170, 76, W, O, 38, container=True) + block(109, 280, 'New, smaller dataset', 150, 17, O, True, 'middle', max_lines=1)
    s += edge([(198, 274), (252, 274)], O) + art('gear', 264, 243, 62, O) + text(295, 332, 'FINE-TUNE', 16, O, True, 'middle')
    s += edge([(338, 274), (392, 274)], O) + rect(402, 236, 210, 76, W, O, 38, container=True) + block(507, 280, 'Specialized model', 180, 18, O, True, 'middle', max_lines=1)
    s += rect(640, 50, 136, 262, P, L, 8, container=True) + text(708, 80, 'SAVES', 17, B, True, 'middle')
    ls, _ = lines_list(652, 116, ['Data', 'Time', 'Compute'], 112, 17, N, max_lines=1)
    s += ls
    s += rect(24, 352, 752, 74, P, L, 6, container=True) + block(400, 384, d['note'], 724, 17, N, False, 'middle', max_lines=2)
    return s

KINDS = {name: fn for name, fn in globals().items() if callable(fn) and not name.startswith('_')}

# ------------------------------------------------------------------ Module 3 compositions

def sliders(d):
    """Each sampling setting as a slider from low to high, with what each end does."""
    s = text(24, 36, 'RANDOMNESS AND DIVERSITY', 19, B, True)
    for i, (name, rng, low, lowtxt, high, hightxt, pos) in enumerate(d['sliders']):
        y = 62 + i * 82
        s += text(24, y + 24, name, 19, N, True) + text(24, y + 48, rng, 16, G)
        s += rect(190, y + 14, 380, 10, P, L, 5) + rect(190, y + 14, 380 * pos, 10, LB, 'none', 5) + circle(190 + 380 * pos, y + 19, 11, 'white', O, 3)
        s += text(190, y + 52, f'{low}: {lowtxt}', 16, B, True) + text(570, y + 52, f'{high}: {hightxt}', 16, O, True, 'end')
    s += edge([(24, 314), (776, 314)], L, False, False, 1.4)
    s += text(24, 344, 'LENGTH AND STOPPING', 19, B, True)
    for i, (name, desc) in enumerate(d['length']):
        x = 24 + i * 384
        s += rect(x, 358, 368, 68, P, B, 8, container=True) + text(x + 16, 386, name, 18, N, True) + block(x + 16, 410, desc, 336, 16, G, max_lines=1)
    s += text(776, 36, 'Example settings', 16, G, True, 'end')
    return s

def rag2(d):
    s = art('person', 30, 160, 64) + text(62, 252, 'USER', 17, N, True, 'middle')
    s += edge([(100, 192), (206, 192)], B) + text(153, 180, 'Question', 16, B, True, 'middle')
    s += rect(216, 146, 150, 100, P, B, 8, container=True) + art('app', 263, 156, 56) + text(291, 230, 'APPLICATION', 16, N, True, 'middle')
    s += edge([(291, 142), (291, 70), (470, 70)], B) + text(380, 58, '1. Search query', 16, B, True, 'middle')
    s += rect(480, 30, 296, 96, 'white', L, 8, container=True) + art('db', 498, 46, 52) + art('docs', 562, 46, 52) + block(626, 70, 'KNOWLEDGE SOURCES', 140, 17, N, True, max_lines=2)
    s += edge([(560, 132), (560, 162), (378, 162)], O) + text(470, 154, '2. Relevant passages', 16, O, True, 'middle')
    s += edge([(370, 222), (420, 222), (420, 300), (472, 300)], B) + text(432, 246, '3. Prompt + question + retrieved data', 16, B, True)
    s += rect(480, 262, 296, 92, W, O, 8, container=True) + art('model', 498, 278, 58) + block(580, 306, 'LARGE LANGUAGE MODEL', 180, 17, O, True, max_lines=2)
    s += edge([(476, 340), (62, 340), (62, 272)], O) + text(80, 374, '4. Answer grounded in the retrieved content', 16, O, True)
    s += note(d['foot'], 426)
    return s

def agents_arch(d):
    s = pill(24, 76, 132, 46, 'User query', B, P, 17) + pill(24, 330, 132, 46, 'Response', O, W, 17)
    s += zone(186, 40, 330, 370, 'BEDROCK AGENT', T, '#eef8f6')
    s += rect(206, 90, 140, 56, 'white', T, 6, container=True) + block(276, 124, 'Structured prompt', 120, 16, N, True, 'middle', max_lines=1)
    s += rect(360, 90, 140, 56, 'white', T, 6, container=True) + block(430, 124, 'Reasoning steps', 120, 16, N, True, 'middle', max_lines=1)
    s += rect(266, 210, 180, 56, P, B, 6, container=True) + block(356, 244, 'Foundation model', 160, 17, B, True, 'middle', max_lines=1)
    s += rect(266, 330, 180, 56, 'white', T, 6, container=True) + block(356, 364, 'Completion', 160, 17, N, True, 'middle', max_lines=1)
    s += edge([(160, 99), (200, 112)], B) + edge([(290, 150), (330, 204)], T) + edge([(400, 204), (430, 150)], T) + edge([(356, 270), (356, 324)], T) + edge([(262, 358), (162, 354)], O)
    s += rect(566, 70, 210, 140, 'white', B, 8, container=True) + text(671, 98, 'DATA SOURCES', 17, B, True, 'middle') + art('db', 590, 116, 48) + art('docs', 650, 116, 48) + art('table', 710, 116, 48)
    s += rect(566, 250, 210, 96, W, O, 8, container=True) + text(671, 280, 'EXTERNAL APIS', 17, O, True, 'middle') + block(671, 314, 'Bookings, orders, tickets', 186, 16, N, False, 'middle', max_lines=1)
    s += edge([(504, 118), (560, 140)], B) + edge([(504, 132), (560, 280)], O)
    s += note(d['foot'], 432)
    return s

def cost_ladder(d):
    s = text(24, 36, d['heading'], 19, B, True)
    s += text(776, 36, 'Relative setup cost and effort', 16, G, True, 'end')
    for i, (name, v, sub, c) in enumerate(d['rows']):
        y = 52 + i * 58
        s += text(24, y + 26, name, 18, N, True) + block(24, y + 48, sub, 250, 16, G, max_lines=1)
        s += rect(290, y + 10, 486, 32, P, 'none', 4) + rect(290, y + 10, 486 * v, 32, c, 'none', 4)
    s += note(d['foot'], 432)
    return s

def cot_tuning(d):
    s = text(24, 36, 'CHAIN-OF-THOUGHT PROMPTING', 19, B, True)
    s += rect(24, 52, 360, 70, P, B, 8, container=True) + block(40, 80, d['question'], 330, 16, N, True, max_lines=2)
    for i, step in enumerate(d['steps']):
        y = 146 + i * 62
        s += circle(46, y + 20, 16, 'white', B, 2.4) + text(46, y + 26, str(i + 1), 17, B, True, 'middle')
        s += block(76, y + 26, step, 300, 17, N, max_lines=2)
        if i < len(d['steps']) - 1: s += edge([(46, y + 40), (46, y + 58)], B, False, False, 2)
    s += pill(24, 374, 360, 48, d['answer'], O, W, 17)
    s += edge([(408, 30), (408, 420)], L, False, False, 1.6)
    s += text(432, 36, 'PROMPT TUNING', 19, O, True)
    s += rect(432, 60, 344, 64, W, O, 8, container=True) + block(604, 98, 'Learned soft-prompt vectors', 320, 17, O, True, 'middle', max_lines=1)
    for j in range(8): s += rect(452 + j * 40, 136, 30, 30, [O, '#f4a46b', '#fbd3b0'][j % 3], 'none', 4)
    s += edge([(604, 178), (604, 214)], O)
    s += rect(432, 222, 344, 96, P, B, 8, container=True) + art('lock', 452, 244, 48) + block(626, 262, 'Model weights stay frozen', 230, 17, B, True, 'middle', max_lines=1) + block(626, 290, 'Only the soft prompt is trained', 230, 16, N, False, 'middle', max_lines=1)
    s += block(604, 356, d['tuning_note'], 330, 16, G, False, 'middle', max_lines=3)
    return s

def prompt_versions(d):
    s = text(24, 36, 'ONE MANAGED PROMPT, MANY VERSIONS', 19, B, True)
    for i, (v, desc, state) in enumerate(d['versions']):
        x = 24 + i * 190
        col = O if state == 'approved' else (G if state == 'retired' else B)
        s += rect(x, 60, 172, 150, W if state == 'approved' else 'white', col, 8, container=True)
        s += text(x + 86, 92, v, 22, col, True, 'middle') + block(x + 86, 124, desc, 150, 16, N, False, 'middle', max_lines=3)
        s += text(x + 86, 194, state.upper(), 16, col, True, 'middle')
        if i < len(d['versions']) - 1: s += edge([(x + 176, 135), (x + 186, 135)], B, False, False, 2)
    s += text(24, 250, 'COMPARE VARIANTS ON THE SAME INPUTS', 19, B, True)
    s += table(24, 266, ['VARIANT', 'MODEL SETTINGS', 'SCORE ON 50 CASES'], d['rows'], [190, 300, 262], 34)
    s += note(d['foot'], 430)
    return s

def text_metrics(d):
    s = rect(24, 24, 752, 92, P, L, 8, container=True) + text(40, 54, 'REFERENCE', 17, B, True) + block(40, 84, d['reference'], 720, 17, N, max_lines=1)
    s += rect(24, 128, 752, 92, 'white', L, 8, container=True) + text(40, 158, 'GENERATED', 17, O, True) + block(40, 188, d['generated'], 720, 17, N, max_lines=1)
    for i, (name, what, best) in enumerate(d['metrics']):
        x = 24 + i * 256
        s += rect(x, 238, 240, 188, 'white', B, 8, container=True)
        s += text(x + 120, 270, name, 22, B, True, 'middle') + block(x + 120, 304, what, 212, 16, N, False, 'middle', max_lines=4)
        s += block(x + 120, 404, best, 212, 16, O, True, 'middle', max_lines=1)
    return s

KINDS = {name: fn for name, fn in globals().items() if callable(fn) and not name.startswith('_')}

# ------------------------------------------------------------------ Module 4 compositions

def _wrap_table(x, y, columns, rows, widths, size=16, pad=12, head=P):
    """A table whose cells wrap. Returns svg and the bottom y."""
    s = ''
    heights = []
    for row in [columns] + rows:
        n = max(len(_wrap(str(v), w - 2 * pad, size, row is columns)) for v, w in zip(row, widths))
        heights.append(round(n * size * 1.22 + 16, 2))
    total = round(sum(heights), 2); w = sum(widths)
    s += rect(x, y, w, total, 'white', L, 5) + rect(x, y, w, heights[0], head, 'none', 4)
    yy = y
    for i, (row, h) in enumerate(zip([columns] + rows, heights)):
        xx = x
        for j, (v, cw) in enumerate(zip(row, widths)):
            s += block(xx + pad, yy + 8 + size * .95, str(v), cw - 2 * pad, size, B if i == 0 or j == 0 else N, i == 0 or j == 0, caps=i == 0, max_lines=4)
            xx += cw
        if i: s += edge([(x, yy), (x + w, yy)], L, False, False, 1.2)
        yy = round(yy + h, 2)
    return s, yy

def targets(d):
    """Bias and variance as four targets: where the shots land and how widely they spread."""
    s = text(190, 44, 'LOW VARIANCE', 18, B, True, 'middle') + text(350, 44, 'HIGH VARIANCE', 18, O, True, 'middle')
    s += vlabel(40, 128, 'LOW BIAS', 18, B) + vlabel(40, 298, 'HIGH BIAS', 18, O)
    tight = [(0, 0), (6, -5), (-5, 6), (7, 6), (-6, -6), (2, 9)]
    wide = [(0, 0), (30, -18), (-28, 22), (22, 30), (-34, -16), (8, -36)]
    for r, cy in enumerate([128, 298]):
        for c, cx in enumerate([190, 350]):
            s += circle(cx, cy, 58, 'white', L, 2) + circle(cx, cy, 38, P, LB, 2) + circle(cx, cy, 16, W, O, 2)
            ox, oy = (24, -20) if r else (0, 0)
            for dx, dy in (wide if c else tight): s += dot(cx + ox + dx * .9, cy + oy + dy * .9, N, 4.5)
            s += text(cx, cy + 84, d['labels'][r][c], 17, N, True, 'middle')
    s += edge([(444, 30), (444, 420)], L, False, False, 1.4)
    s += text(470, 56, d['right_title'], 19, B, True, caps=True)
    ls, _ = lines_list(470, 96, d['effects'], 306, 17, N, max_lines=3)
    s += ls
    return s

def imbalance(d):
    """A dataset split between two groups, and the error rate each group sees."""
    import math
    s = text(200, 40, d['left_title'], 19, B, True, 'middle', True)
    cx, cy, r = 200, 200, 104
    big, small = d['split']
    circ = 2 * math.pi * r
    s += circle(cx, cy, r, 'none', B, 44)
    s += f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{O}" stroke-width="44" stroke-dasharray="{circ*small/100:.1f} {circ:.1f}" transform="rotate(-90 {cx} {cy})"/>'
    s += text(cx, cy + 10, f'{d["total"]}', 28, N, True, 'middle')
    s += text(cx, cy + 34, 'examples', 16, G, True, 'middle')
    s += dot(70, 362, B, 8) + text(86, 368, f'{d["groups"][0]}: {big}%', 17, N, True)
    s += dot(70, 396, O, 8) + text(86, 402, f'{d["groups"][1]}: {small}%', 17, N, True)
    s += edge([(400, 30), (400, 420)], L, False, False, 1.4)
    s += text(590, 40, d['right_title'], 19, B, True, 'middle', True)
    x, y, w, h = 470, 70, 280, 220
    s += axes(x, y, w, h)
    for i, (lab, v) in enumerate(d['errors']):
        bx = x + 40 + i * 120; bh = v / 25 * h
        s += rect(bx, y + h - bh, 80, bh, B if i == 0 else O, 'none', 3) + text(bx + 40, y + h - bh - 10, f'{v}%', 18, N, True, 'middle')
        s += text(bx + 40, y + h + 26, lab, 16, G, True, 'middle')
    s += block(610, 362, d['foot'], 320, 16, N, False, 'middle', max_lines=3)
    return s

def clarify_job(d):
    """Clarify reads inputs from S3, queries the model endpoint, and writes results back."""
    s = art('s3', 30, 160, 64) + text(62, 252, 'AMAZON S3', 16, N, True, 'middle')
    s += zone(236, 70, 210, 250, 'PROCESSING JOB', B, P)
    s += art('sagemaker', 306, 150, 70) + block(341, 254, 'CLARIFY CONTAINER', 180, 17, B, True, 'middle', max_lines=2)
    s += zone(566, 70, 210, 250, 'MODEL ENDPOINT', O, W)
    s += art('model', 636, 150, 70, O) + block(671, 254, 'MODEL CONTAINER', 180, 17, O, True, 'middle', max_lines=2)
    s += block(165, 128, d['inputs'], 120, 16, B, True, 'middle', max_lines=3)
    s += edge([(104, 180), (226, 180)], B)
    s += edge([(226, 222), (104, 222)], O) + block(165, 248, d['results'], 120, 16, O, True, 'middle', max_lines=2)
    s += text(506, 160, 'Requests', 16, B, True, 'middle')
    s += edge([(456, 180), (556, 180)], B)
    s += edge([(556, 222), (456, 222)], O) + text(506, 248, 'Predictions', 16, O, True, 'middle')
    s += rect(24, 352, 752, 74, P, L, 6, container=True)
    ls, _ = lines_list(40, 382, d['notes'], 720, 16, N, max_lines=1, gap=17)
    return s + ls

def metric_table(d):
    """A heading over a table whose cells wrap, with an optional note."""
    s = heading(d['heading'])
    t, bottom = _wrap_table(24, 56, d['columns'], d['rows'], d['widths'], 16)
    s += t
    if d.get('note'):
        ny = bottom + 20
        assert ny + 46 <= 432, f'table too tall: {bottom}'
        s += rect(24, ny, 752, 46, W, O, 6, container=True) + block(400, ny + 29, d['note'], 724, 17, N, False, 'middle', max_lines=1)
    else:
        assert bottom <= 432, f'table too tall: {bottom}'
    return s

def subgroup(d):
    """An overall score that hides a weak group, and the checks that reveal it."""
    s = rect(24, 24, 356, 76, P, B, 8, container=True)
    s += text(44, 58, 'OVERALL ACCURACY', 18, B, True) + text(360, 76, d['overall'], 34, B, True, 'end')
    s += text(24, 136, 'BY GROUP', 18, N, True)
    for i, (lab, v) in enumerate(d['groups']):
        y = 156 + i * 54
        weak = v < d.get('threshold', 85)
        s += text(24, y + 25, lab, 17, N, True)
        s += rect(130, y + 6, 200, 26, P, 'none', 3) + rect(130, y + 6, 200 * v / 100, 26, O if weak else B, 'none', 3)
        s += text(380, y + 26, f'{v}%', 17, O if weak else N, True, 'end')
    s += edge([(410, 30), (410, 396)], L, False, False, 1.4)
    s += text(436, 52, d['right_title'], 19, O, True, caps=True)
    for i, (key, t, sub) in enumerate(d['checks']):
        y = 76 + i * 88
        s += art(key, 436, y, 46) + block(496, y + 20, t, 280, 18, N, True, max_lines=1) + block(496, y + 46, sub, 280, 16, G, max_lines=2)
    s += note(d['foot'], 430)
    return s

def radial(d):
    """A central subject with five surrounding cards linked to it."""
    s = art(d['center_icon'], 358, 40, 84) + text(400, 152, d['center'], 19, N, True, 'middle', True)
    pos = [(24, 30), (556, 30), (24, 290), (290, 290), (556, 290)]
    ends = [((350, 86), (250, 86)), ((450, 86), (550, 86)), ((370, 172), (190, 284)), ((400, 172), (400, 284)), ((430, 172), (610, 284))]
    for (key, title, detail), (x, y), (a, b) in zip(d['items'], pos, ends):
        s += rect(x, y, 220, 136, W if key == d.get('accent') else 'white', B, 8, container=True)
        s += art(key, x + 12, y + 12, 44, O if key == d.get('accent') else N)
        s += block(x + 66, y + 40, title, 142, 18, B, True, caps=True, max_lines=2)
        s += block(x + 14, y + 86, detail, 192, 16, N, max_lines=2)
        s += edge([a, b], B, False, False, 2.2)
    return s

def guardrail_flow(d):
    """Prompts and responses both pass through configured guardrail policies."""
    s = art('person', 30, 150, 64) + text(62, 242, 'USER', 17, N, True, 'middle')
    s += zone(150, 40, 470, 316, 'AMAZON BEDROCK GUARDRAILS', B, P)
    s += rect(168, 86, 214, 186, 'white', L, 8, container=True) + text(184, 114, 'CONTENT FILTERS', 17, B, True)
    for i, (name, pos) in enumerate(d['filters']):
        y = 136 + i * 34
        s += text(184, y + 15, name, 16, N, True) + rect(266, y + 4, 100, 10, P, L, 5) + rect(266, y + 4, 100 * pos, 10, LB, 'none', 5) + circle(266 + 100 * pos, y + 9, 7, 'white', O, 2.4)
    s += rect(396, 86, 208, 186, 'white', L, 8, container=True) + text(412, 114, 'DENIED TOPICS', 17, B, True)
    ls, _ = lines_list(412, 146, d['topics'], 184, 16, N, max_lines=2)
    s += ls
    s += rect(168, 282, 436, 64, W, O, 6, container=True) + block(386, 308, d['more'], 410, 16, N, False, 'middle', max_lines=2)
    s += art('model', 690, 150, 64) + text(722, 242, 'MODEL', 17, N, True, 'middle')
    s += edge([(100, 172), (140, 172)], B) + edge([(630, 172), (680, 172)], B)
    s += edge([(680, 206), (630, 206)], O) + edge([(140, 206), (100, 206)], O)
    s += rect(24, 372, 300, 54, 'white', O, 8, container=True) + block(174, 395, d['blocked'], 280, 16, O, True, 'middle', max_lines=2)
    s += block(560, 404, d['foot'], 400, 16, G, False, 'middle', max_lines=2)
    return s

def eval_matrix(d):
    """Evaluation dimensions that apply to each task type, with what an evaluation job offers."""
    s = text(24, 40, 'EVALUATION JOBS', 19, B, True)
    ls, _ = lines_list(24, 80, d['aspects'], 224, 17, N, max_lines=3)
    s += ls
    gx, tw, cw, top = 270, 170, 67, 190
    dims = d['dims']
    for j, name in enumerate(dims):
        s += vlabel(gx + tw + cw * j + cw / 2 + 6, top - 78, name, 16, B)
    for i, (task, marks) in enumerate(d['tasks']):
        y = top + i * 52
        s += rect(gx, y, tw + cw * len(dims), 52, P if i % 2 == 0 else 'white', L, 0)
        nl = len(_wrap(task, tw - 20, 17, True))
        s += block(gx + 12, y + (32 if nl == 1 else 22), task, tw - 20, 17, N, True, max_lines=2)
        for j in range(len(dims)):
            cx = gx + tw + cw * j + cw / 2
            s += circle(cx, y + 26, 9, B, B, 2) if j in marks else circle(cx, y + 26, 3, L, L, 1)
    s += note(d['foot'], 430)
    return s

def spectrum(d):
    """From interpretable models to models that need outside explanation."""
    s = rect(24, 24, 360, 270, P, B, 8, container=True) + text(44, 58, 'INTERPRETABLE', 20, B, True)
    s += rect(416, 24, 360, 270, W, O, 8, container=True) + text(436, 58, 'EXPLAINED FROM OUTSIDE', 20, O, True)
    x, y, w, h = 52, 80, 150, 100
    s += axes(x, y, w, h) + plot(x, y, w, h, [(.15, .2), (.3, .35), (.5, .45), (.7, .7), (.85, .78)], B, 5) + line(x, y, w, h, [(.05, .12), (.95, .85)], O, 2.6)
    s += block(224, 110, d['left_example'], 146, 16, G, max_lines=3)
    ls, _ = lines_list(44, 222, d['left'], 324, 16, N, max_lines=1, gap=17)
    s += ls
    layers = [(452, [.15, .5, .85]), (510, [.05, .35, .65, .95]), (568, [.05, .35, .65, .95]), (626, [.5])]
    yy, hh = 84, 96
    for (x1, a1), (x2, a2) in zip(layers, layers[1:]):
        for a in a1:
            for b in a2: s += f'<line x1="{x1}" y1="{yy+a*hh}" x2="{x2}" y2="{yy+b*hh}" stroke="#b6c9de" stroke-width="1.2"/>'
    for x_, ys in layers:
        for v in ys: s += circle(x_, yy + v * hh, 7, 'white', O, 2.4)
    s += block(662, 110, d['right_example'], 104, 16, G, max_lines=3)
    ls, _ = lines_list(436, 222, d['right'], 324, 16, N, max_lines=1, gap=17)
    s += ls
    s += f'<defs><linearGradient id="tg" x1="0" x2="1"><stop offset="0" stop-color="{B}"/><stop offset="1" stop-color="{O}"/></linearGradient></defs>'
    s += f'<rect x="24" y="318" width="752" height="16" rx="8" fill="url(#tg)"/>'
    s += text(24, 362, 'More transparent', 17, B, True) + text(776, 362, 'Less transparent', 17, O, True, 'end')
    s += note(d['foot'], 410)
    return s

def tradeoff(d):
    """Common model types placed by accuracy and interpretability."""
    x, y, w, h = 90, 30, 420, 330
    s = axes(x, y, w, h)
    for i, (name, px, py) in enumerate(d['models']):
        c = B if py > .6 else O if py < .35 else N
        s += dot(x + px * w, y + h - py * h, c, 9) + text(x + px * w + 16, y + h - py * h + 6, name, 17, c, True)
    s += text(x + w / 2, y + h + 34, 'Accuracy on complex problems', 17, G, True, 'middle') + vlabel(52, y + h / 2, 'Interpretability')
    s += text(560, 60, 'CHOOSING', 19, B, True)
    ls, _ = lines_list(560, 100, d['notes'], 216, 17, N, max_lines=4)
    return s + ls

def shap(d):
    """Horizontal bars of feature attribution, with what the values mean."""
    s = text(24, 40, d['chart_title'], 19, B, True, caps=True)
    feats = d['features']; mx = max(v for _, v in feats)
    for i, (name, v) in enumerate(feats):
        y = 70 + i * 62
        s += block(150, y + 28, name, 126, 17, N, True, 'end', max_lines=1)
        s += rect(166, y + 8, 300 * v / mx, 32, O if i == 0 else B, 'none', 3) + text(176 + 300 * v / mx, y + 30, f'{v:.3f}', 16, G, True)
    s += axes(162, 64, 0, 62 * len(feats) + 4)
    s += text(316, 76 + 62 * len(feats) + 24, 'Mean absolute SHAP value', 16, G, True, 'middle')
    s += edge([(540, 30), (540, 420)], L, False, False, 1.4)
    s += text(560, 60, 'READING IT', 19, B, True)
    ls, _ = lines_list(560, 100, d['notes'], 216, 17, N, max_lines=4)
    return s + ls

def person_center(d):
    """A person at the centre between two panels of principles."""
    s = ''
    for k, (title, items, c) in enumerate(d['panels']):
        x = 24 if k == 0 else 516
        s += rect(x, 60, 260, 250, P if k == 0 else 'white', c, 8, container=True)
        s += block(x + 130, 96, title, 236, 19, c, True, 'middle', True, max_lines=2)
        ls, _ = lines_list(x + 16, 148, items, 228, 17, N, max_lines=3)
        s += ls
    s += art('person', 330, 90, 140, N)
    s += edge([(292, 185), (322, 185)], B, False, False, 2.2) + edge([(478, 185), (508, 185)], O, False, False, 2.2)
    s += block(400, 272, d['center'], 180, 17, N, True, 'middle', max_lines=3)
    s += note(d['foot'], 370)
    return s

def a2i_flow(d):
    """Predictions split by confidence; uncertain ones go to people, and reviews improve the model."""
    s = art('docs', 24, 154, 56) + text(52, 240, 'INPUT', 16, N, True, 'middle')
    s += edge([(86, 182), (114, 182)], B)
    s += art('model', 120, 150, 64) + text(152, 240, 'MODEL', 16, N, True, 'middle')
    s += edge([(190, 182), (234, 182)], B)
    s += art('a2i', 240, 150, 64) + text(272, 240, 'AMAZON A2I', 16, B, True, 'middle')
    s += edge([(272, 146), (272, 132), (666, 132)], T) + text(470, 120, d['high'], 17, T, True, 'middle')
    s += art('client', 676, 100, 64) + text(708, 188, 'CLIENT APP', 16, N, True, 'middle')
    s += edge([(310, 182), (340, 182), (340, 300), (392, 300)], O) + text(352, 254, d['low'], 17, O, True)
    s += art('people', 400, 272, 56) + text(428, 352, 'REVIEWERS', 16, O, True, 'middle')
    s += edge([(462, 300), (522, 300)], O)
    s += art('s3', 530, 272, 56) + text(558, 352, 'REVIEWS IN S3', 16, O, True, 'middle')
    s += edge([(592, 300), (708, 300), (708, 210)], O)
    s += edge([(558, 364), (558, 384), (152, 384), (152, 254)], B, True)
    s += block(355, 410, d['loop'], 400, 16, B, True, 'middle', max_lines=1)
    return s

def rlhf(d):
    """Two stages: people rank responses to train a reward model, then the reward tunes the model."""
    s = text(24, 34, '1. LEARN WHAT PEOPLE PREFER', 19, B, True)
    s += art('doc', 30, 56, 56) + text(58, 140, 'PROMPT', 16, N, True, 'middle')
    s += edge([(94, 84), (136, 84)], B)
    s += art('model', 144, 56, 56) + text(172, 140, 'INITIAL LLM', 16, N, True, 'middle')
    s += edge([(208, 84), (250, 84)], B)
    s += art('doc', 258, 50, 44) + art('doc', 286, 68, 44) + text(296, 140, 'RESPONSES', 16, N, True, 'middle')
    s += edge([(340, 84), (380, 84)], B)
    s += art('person', 388, 56, 56) + text(416, 140, 'PEOPLE RANK', 16, N, True, 'middle')
    s += edge([(452, 84), (486, 84)], O)
    s += pill(494, 44, 130, 36, '1  Response B', O, W, 16) + pill(494, 88, 130, 36, '2  Response A', B, P, 16)
    s += edge([(632, 84), (664, 84)], O)
    s += art('model', 672, 56, 56, O) + text(700, 140, 'REWARD MODEL', 16, O, True, 'middle')
    s += edge([(700, 152), (700, 246)], O)
    s += text(24, 214, '2. TUNE THE MODEL WITH THE REWARD', 19, B, True)
    s += art('doc', 30, 254, 56) + text(58, 338, 'PROMPT', 16, N, True, 'middle')
    s += edge([(94, 282), (164, 282)], B)
    s += art('model', 172, 254, 56) + text(200, 338, 'MODEL BEING TUNED', 16, N, True, 'middle')
    s += edge([(236, 282), (322, 282)], B)
    s += art('doc', 330, 254, 56) + text(358, 338, 'RESPONSE', 16, N, True, 'middle')
    s += edge([(394, 282), (662, 282)], B) + text(528, 270, 'Scored by the reward model', 16, B, True, 'middle')
    s += art('model', 672, 254, 56, O) + text(700, 338, 'SCORE', 16, O, True, 'middle')
    s += edge([(700, 350), (700, 372), (200, 372), (200, 350)], O, True)
    s += text(450, 396, d['loop'], 16, O, True, 'middle')
    s += note(d['foot'], 430)
    return s

def ranking(d):
    """Workers rank several responses to one prompt; the rankings become training data."""
    s = rect(24, 24, 496, 52, P, B, 8, container=True) + block(40, 56, d['prompt'], 464, 17, N, True, max_lines=1)
    for i, (name, resp, pick) in enumerate(d['responses']):
        y = 90 + i * 96
        s += rect(24, y, 496, 84, 'white', O if pick == 0 else L, 8, container=True)
        s += text(40, y + 30, name, 17, B, True) + block(40, y + 58, resp, 246, 16, N, max_lines=1)
        for j, lab in enumerate(['Most', 'Somewhat', 'Least']):
            cx = 330 + j * 74
            s += circle(cx, y + 28, 9, O if j == pick else 'white', O if j == pick else G, 2)
            s += text(cx, y + 64, lab, 16, O if j == pick else G, True, 'middle')
    s += edge([(530, 234), (574, 234)], O)
    s += art('docs', 584, 204, 60) + block(614, 296, 'RANKING DATA', 100, 16, N, True, 'middle', max_lines=2)
    s += edge([(652, 234), (692, 234)], B)
    s += art('train', 700, 204, 60) + block(730, 296, 'TRAINING', 90, 16, N, True, 'middle', max_lines=2)
    s += block(672, 150, d['right_title'], 200, 18, B, True, 'middle', True, max_lines=2)
    s += note(d['foot'], 430)
    return s


# ------------------------------------------------------------------ Module 5 compositions

def shared_resp(d):
    """Customer and AWS responsibilities as stacked layers."""
    s = rect(24, 24, 160, 196, W, O, 8, container=True) + block(104, 104, 'CUSTOMER', 140, 20, O, True, 'middle', max_lines=1) + block(104, 136, 'Security in the cloud', 140, 16, N, False, 'middle', max_lines=2)
    s += rect(24, 236, 160, 132, P, B, 8, container=True) + block(104, 290, 'AWS', 140, 20, B, True, 'middle', max_lines=1) + block(104, 322, 'Security of the cloud', 140, 16, N, False, 'middle', max_lines=2)
    def row(y, h, cells, fill, stroke):
        out = ''; n = len(cells); gap = 6; cw = (576 - gap * (n - 1)) / n
        for i, c in enumerate(cells):
            x = 200 + i * (cw + gap)
            nl = len(_wrap(c, cw - 20, 16))
            out += rect(round(x, 2), y, round(cw, 2), h, fill, stroke, 5, container=True) + block(round(x + cw / 2, 2), y + h / 2 + 6 - (nl - 1) * 10, c, cw - 20, 16, N, False, 'middle', max_lines=2)
        return out
    y = 24
    for cells, h in d['customer']:
        s += row(y, h, cells, W, O); y += h + 6
    y = 236
    for cells, h in d['aws']:
        s += row(y, h, cells, P, B); y += h + 6
    s += note(d['foot'], 410)
    return s

def idtree(d):
    """A definition and best practice beside a small identity tree."""
    s = text(24, 52, 'DEFINITION', 18, B, True) + block(24, 86, d['definition'], 350, 18, N, max_lines=6)
    s += rect(24, 262, 356, 140, W, O, 8, container=True) + text(40, 292, 'BEST PRACTICE', 17, O, True) + block(40, 324, d['practice'], 324, 17, N, max_lines=4)
    rk, rl = d['root']
    s += art(rk, 566, 34, 64, O) + block(598, 124, rl, 200, 17, O, True, 'middle', True, max_lines=1)
    kids = d['children']; n = len(kids)
    lo, hi = {1: (598, 598), 2: (500, 696)}.get(n, (470, 726))
    xs = [598] if n == 1 else [round(lo + i * (hi - lo) / (n - 1), 2) for i in range(n)]
    lw = 200 if n == 1 else min(150, xs[1] - xs[0] - 8, 2 * (780 - xs[-1]))
    s += edge([(598, 136), (598, 172)], B, False, n == 1, 2.2)
    if n > 1:
        s += edge([(xs[0], 172), (xs[-1], 172)], B, False, False, 2.2)
        for x in xs: s += edge([(x, 172), (x, 204)], B, False, True, 2.2)
    for x, (key, lab) in zip(xs, kids):
        s += art(key, x - 28, 214, 56) + block(x, 296, lab, lw, 16, N, True, 'middle', max_lines=3)
    if d.get('note'): s += block(598, 380, d['note'], 360, 16, G, False, 'middle', max_lines=2)
    return s

def policy_doc(d):
    """A JSON policy beside a reading guide for its elements."""
    s = rect(24, 24, 420, 402, '#f8fafc', L, 8, container=True)
    y = 56
    for ln in d['code']:
        indent = len(ln) - len(ln.lstrip(' '))
        key = ln.strip().startswith('"') and '":' in ln
        s += text(42 + indent * 8, y, ln.strip(), 16, B if key else N, key)
        y += 25
    assert y <= 430, 'policy too long'
    s += text(468, 52, 'READ IT AS', 18, B, True)
    for i, (name, meaning) in enumerate(d['parts']):
        yy = 86 + i * 62
        s += text(468, yy, name, 17, O, True) + block(468, yy + 24, meaning, 308, 16, N, max_lines=2)
    s += rect(468, 352, 308, 74, W, O, 8, container=True) + block(482, 380, d['practice'], 280, 16, N, True, max_lines=2)
    return s

def block_public(d):
    """Requests from the internet stop at buckets protected by Block Public Access."""
    s = art('internet', 40, 166, 64) + block(72, 260, 'PUBLIC INTERNET', 130, 16, N, True, 'middle', max_lines=2)
    s += zone(300, 40, 476, 340, 'AWS ACCOUNT', B, P)
    s += pill(316, 82, 300, 42, 'Block Public Access: ON', O, W, 16)
    for i, lab in enumerate(d['buckets']):
        y = 150 + i * 120
        s += art('s3', 328, y, 56) + block(396, y + 34, lab, 120, 16, N, True, max_lines=2)
    s += edge([(112, 190), (318, 178)], G, True, False, 2) + edge([(112, 214), (318, 298)], G, True, False, 2)
    s += cross(214, 184, O, 10, 3.4) + cross(214, 256, O, 10, 3.4)
    ls, _ = lines_list(540, 168, d['facts'], 222, 16, N, max_lines=3)
    s += ls + note(d['foot'], 414)
    return s

def transit(d):
    """TLS between clients and AWS; optional encryption between training instances."""
    s = text(24, 36, 'BETWEEN YOUR APPLICATION AND AWS', 18, B, True)
    s += art('client', 60, 58, 64) + text(92, 148, 'APPLICATION', 16, N, True, 'middle')
    s += edge([(136, 90), (316, 90)], B) + pill(324, 72, 152, 36, 'TLS encrypted', B, P, 16) + edge([(484, 90), (656, 90)], B)
    s += art('sagemaker', 664, 58, 64) + text(696, 148, 'SAGEMAKER API', 16, N, True, 'middle')
    s += edge([(24, 178), (776, 178)], L, False, False, 1.4)
    s += text(24, 214, 'INSIDE A DISTRIBUTED TRAINING JOB', 18, B, True)
    for i, x in enumerate([120, 360, 600]):
        s += art('server', x, 244, 60) + text(x + 30, 332, f'Instance {i + 1}', 16, N, True, 'middle')
    for mid in [270, 510]:
        s += edge([(mid - 86, 274), (mid - 30, 274)], O, False, False, 2.2) + art('lock', mid - 24, 250, 48, O) + edge([(mid + 30, 274), (mid + 86, 274)], O, False, False, 2.2)
    s += text(400, 368, 'Optional inter-node encryption', 17, O, True, 'middle')
    s += block(400, 404, d['foot'], 740, 16, G, False, 'middle', max_lines=2)
    return s

def vpc_net(d):
    """A VPC-only Studio domain: the managed notebook reaches your private subnet through a network interface."""
    s = zone(24, 24, 480, 400, 'YOUR AWS ACCOUNT', B, 'white')
    s += zone(44, 70, 440, 340, 'VPC', B, P)
    s += zone(64, 140, 400, 250, 'PRIVATE SUBNET', T, 'white')
    s += art('internet', 386, 82, 44, G) + cross(408, 104, O, 14, 3.4) + text(380, 132, 'No direct internet', 16, O, True, 'end')
    s += art('router', 236, 230, 56) + block(264, 316, 'ELASTIC NETWORK INTERFACE', 180, 16, N, True, 'middle', max_lines=2)
    s += zone(556, 24, 220, 400, 'SAGEMAKER', O, W)
    s += art('sagemaker', 638, 80, 56) + block(666, 160, 'STUDIO DOMAIN (VPC ONLY)', 180, 16, N, True, 'middle', max_lines=2)
    s += art('code', 638, 230, 56) + block(666, 310, 'STUDIO NOTEBOOK', 180, 16, N, True, 'middle', max_lines=2)
    s += edge([(630, 258), (300, 258)], O)
    return s

def privatelink(d):
    """Interface endpoints give a private subnet a private path to AWS services."""
    s = zone(24, 24, 430, 400, 'VPC', B, P)
    s += zone(44, 70, 390, 340, 'PRIVATE SUBNET', T, 'white')
    s += art('internet', 356, 30, 36, G) + cross(374, 48, O, 12, 3) + text(344, 54, 'No internet', 16, O, True, 'end')
    s += art('code', 70, 206, 56) + block(98, 290, 'VPC-ONLY NOTEBOOK', 100, 16, N, True, 'middle', max_lines=2)
    services = d['services']; n = len(services)
    s += text(330, 106, 'INTERFACE ENDPOINTS', 16, B, True, 'middle')
    s += zone(500, 24, 276, 400, 'AWS SERVICES', O, W)
    for i, (key, name) in enumerate(services):
        y = 140 + i * 70
        s += edge([(134, 234), (288, y + 20)], B, False, True, 2)
        s += art('privatelink', 298, y, 40)
        s += edge([(346, y + 20), (524, y + 20)], O, False, True, 2.2)
        s += art(key, 532, y, 40) + block(584, y + 26, name, 180, 16, N, True, max_lines=1)
    return s

def registry(d):
    """A model group with versions and approval status; only approved versions deploy."""
    s = zone(24, 24, 484, 380, 'MODEL GROUP: ' + d['group'], B, P)
    colors = {'Approved': T, 'Pending': O, 'Rejected': G}
    for i, (ver, metric, status) in enumerate(d['versions']):
        x = 40 + i * 156
        c = colors[status]
        s += rect(x, 74, 140, 266, 'white', c, 8, container=True)
        s += text(x + 70, 104, ver, 18, B, True, 'middle') + art('model', x + 42, 118, 56, N)
        s += block(x + 70, 204, metric, 120, 16, N, False, 'middle', max_lines=3)
        s += pill(x + 14, 290, 112, 36, status, c, 'white', 16)
    ai = [v[2] for v in d['versions']].index('Approved'); ax = 40 + ai * 156 + 70
    s += edge([(ax, 342), (ax, 380), (640, 380), (640, 326)], T)
    s += text(640, 238, 'ENDPOINT', 17, T, True, 'middle') + art('endpoint', 608, 250, 64)
    ls, _ = lines_list(540, 56, d['notes'], 236, 16, N, max_lines=2)
    s += ls
    return s

def lineage(d):
    """Artifacts flow into a training job, which produces artifacts used by an endpoint."""
    s = ''
    def node(key, x, y, lab, c=N):
        return art(key, x - 24, y - 24, 48, c) + block(x, y + 46, lab, 140, 16, c, True, 'middle', max_lines=2)
    ins = d['inputs']; outs = d['outputs']
    for (key, lab), y in zip(ins, [100, 210, 320]):
        s += node(key, 100, y, lab)
        s += edge([(130, y), (180, y), (180, 210), (316, 210)] if y != 210 else [(130, y), (316, y)], B, False, y == 210, 2.2)
    s += node('train', 346, 210, d['job'], O)
    for (key, lab), y in zip(outs, [100, 210, 320]):
        s += edge([(376, 210), (440, 210), (440, y), (546, y)] if y != 210 else [(376, 210), (546, 210)], O, False, True, 2.2)
        s += node(key, 576, y, lab)
    s += edge([(606, 210), (680, 210)], B, True)
    s += node('endpoint', 716, 210, d['endpoint'], B)
    s += note(d['foot'], 430)
    return s

def feature_time(d):
    """A feature's value over time and a point-in-time lookup, beside the feature group's lineage."""
    x, y, w, h = 60, 60, 420, 240
    s = text(24, 36, d['feature'], 18, B, True) + axes(x, y, w, h)
    pts = d['points']; vals = [v for _, _, v in pts]; lo, hi = min(vals) - 10, max(vals) + 6
    norm = lambda v: (v - lo) / (hi - lo)
    step = []
    for i, (t, lab, v) in enumerate(pts):
        nxt = pts[i + 1][0] if i + 1 < len(pts) else .98
        step += [(t, norm(v)), (nxt, norm(v))]
    s += line(x, y, w, h, step, B, 3)
    for t, lab, v in pts:
        s += dot(x + t * w, y + h - norm(v) * h, B, 5) + text(x + t * w, y + h + 24, lab, 16, G, True, 'middle')
    qt, qlab, qv = d['query']
    qx = x + qt * w
    s += edge([(qx, y + 4), (qx, y + h)], O, True, False, 2)
    s += circle(qx, y + h - norm(qv) * h, 9, 'white', O, 3)
    s += block(qx + 12, y + 20, qlab, 200, 16, O, True, max_lines=2)
    s += block(270, 352, d['caption'], 440, 16, N, False, 'middle', max_lines=2)
    s += edge([(520, 30), (520, 420)], L, False, False, 1.4)
    s += text(548, 52, 'LINEAGE', 18, B, True)
    for i, (key, lab) in enumerate(d['lineage']):
        yy = 74 + i * 120
        s += art(key, 548, yy, 52) + block(616, yy + 32, lab, 160, 16, N, True, max_lines=2)
        if i < len(d['lineage']) - 1: s += edge([(574, yy + 60), (574, yy + 112)], B)
    return s

def agent_auth(d):
    """Identity authenticates callers and holds credentials; Policy at the gateway allows or denies each tool call."""
    s = art('person', 24, 120, 60) + text(54, 206, 'USER', 16, N, True, 'middle')
    s += edge([(92, 150), (218, 150)], B) + text(136, 138, 'Sign in', 16, B, True, 'middle')
    s += zone(180, 60, 160, 340, 'IDENTITY', B, P)
    s += art('agentcore', 228, 120, 56) + text(256, 204, 'AGENT', 16, N, True, 'middle')
    s += art('key', 230, 248, 52) + block(256, 326, 'TOKEN VAULT', 140, 16, N, True, 'middle', max_lines=1) + block(256, 348, d['vault'], 130, 16, G, False, 'middle', max_lines=2)
    s += edge([(292, 148), (432, 148)], B)
    s += zone(380, 60, 190, 340, 'GATEWAY', O, W)
    s += art('router', 444, 118, 60, O) + block(474, 204, 'POLICY CHECK', 160, 16, O, True, 'middle', max_lines=1)
    ls, _ = lines_list(396, 238, d['rules'], 160, 16, N, max_lines=2)
    s += ls
    s += edge([(512, 132), (612, 104)], T)
    s += art('tools', 620, 74, 52) + block(682, 92, d['allowed'], 94, 16, N, True, max_lines=2) + text(682, 136, 'Allowed', 16, T, True)
    s += edge([(512, 166), (612, 262)], O, True)
    s += cross(566, 218, O, 10, 3.4)
    s += art('tools', 620, 236, 52, G) + block(682, 254, d['denied'], 94, 16, N, True, max_lines=3) + text(682, 318, 'Denied', 16, O, True)
    s += note(d['foot'], 430)
    return s

def standards(d):
    """Three AI frameworks: ISO standards, EU AI Act risk tiers, and the NIST AI RMF functions."""
    s = text(144, 40, 'ISO/IEC STANDARDS', 18, B, True, 'middle') + text(400, 40, 'EU AI ACT', 18, B, True, 'middle') + text(656, 40, 'NIST AI RMF', 18, B, True, 'middle')
    for i, (name, desc) in enumerate(d['iso']):
        y = 64 + i * 150
        s += rect(24, y, 240, 136, P if i == 0 else 'white', B, 8, container=True) + text(40, y + 32, name, 19, B, True) + block(40, y + 62, desc, 210, 16, N, max_lines=3)
    tiers = d['tiers']; colors = [R, O, B, T]
    for i, (name, rule) in enumerate(tiers):
        w = 150 + i * 30; x = 400 - w / 2; y = 64 + i * 78
        s += rect(x, y, w, 70, 'white', colors[i], 6, container=True) + text(400, y + 29, name, 17, colors[i], True, 'middle', True) + block(400, y + 52, rule, w - 20, 16, N, False, 'middle', max_lines=1)
    s += pill(556, 64, 200, 42, 'GOVERN (across all)', O, W, 16)
    for i, name in enumerate(['MAP', 'MEASURE', 'MANAGE']):
        y = 136 + i * 84
        s += pill(586, y, 140, 42, name, B, P, 17)
        if i < 2: s += edge([(656, y + 46), (656, y + 78)], B)
    s += edge([(730, 325), (762, 325), (762, 157), (732, 157)], B, True)
    s += note(d['foot'], 430)
    return s

def risk_matrix(d):
    """Three assessment steps beside a likelihood-by-severity grid."""
    s = text(24, 40, 'ESTIMATE RISK', 18, B, True)
    y = 76
    for i, st in enumerate(d['steps']):
        s += circle(38, y - 6, 14, W, O, 2.4) + text(38, y, str(i + 1), 16, O, True, 'middle')
        nl = len(_wrap(st, 232, 16))
        s += block(62, y, st, 232, 16, N, max_lines=4); y += nl * 19.5 + 22
    s += rect(24, 330, 270, 60, P, B, 8, container=True) + block(159, 356, 'Risk = likelihood × severity', 250, 17, B, True, 'middle', max_lines=1) + block(159, 378, 'Assess before and after controls', 250, 16, G, False, 'middle', max_lines=1)
    likes = ['Rare', 'Unlikely', 'Possible', 'Likely', 'Frequent']
    sevs = ['Extreme', 'Major', 'Moderate', 'Minor', 'Very minor']
    gx, gy, lw, cw, ch = 330, 84, 96, 70, 60
    s += text(gx + lw + cw * 2.5, 40, 'LIKELIHOOD', 17, B, True, 'middle')
    fills = {'Very low': '#e6f4f2', 'Low': '#cde9e3', 'Medium': '#fde7d4', 'High': '#f8c595', 'Critical': '#f2a3a3'}
    for j, lk in enumerate(likes): s += text(gx + lw + cw * (j + .5), 72, lk, 16, N, True, 'middle')
    for i, sv in enumerate(sevs):
        sy = gy + i * ch
        s += text(gx + lw - 10, sy + 36, sv, 16, N, True, 'end')
        for j in range(5):
            score = (5 - i) * (j + 1)
            lvl = 'Very low' if score <= 3 else 'Low' if score <= 6 else 'Medium' if score <= 10 else 'High' if score <= 15 else 'Critical'
            s += rect(gx + lw + cw * j, sy, cw - 4, ch - 4, fills[lvl], 'none', 3) + text(gx + lw + cw * j + (cw - 4) / 2, sy + 34, lvl, 16, N, False, 'middle')
    s += vlabel(gx - 10, gy + ch * 2.5, 'SEVERITY', 17, B)
    s += note(d['foot'], 430)
    return s

def balance(d):
    """Access control and data availability on a balance, with the failure at each extreme."""
    s = art('db', 368, 40, 64) + text(400, 132, 'GOVERNED DATA', 17, N, True, 'middle')
    s += rect(140, 222, 520, 12, B, 'none', 6) + path('M400 236L366 290H434Z', N, 2.4, N)
    s += art('lock', 170, 150, 64) + art('chart', 566, 150, 64)
    s += text(202, 266, 'ACCESS CONTROLS', 18, B, True, 'middle') + text(202, 290, d['left'], 16, N, False, 'middle')
    s += text(598, 266, 'DATA AVAILABILITY', 18, B, True, 'middle') + text(598, 290, d['right'], 16, N, False, 'middle')
    s += rect(24, 330, 360, 64, W, O, 8, container=True) + block(204, 368, d['left_risk'], 330, 17, O, True, 'middle', max_lines=1)
    s += rect(416, 330, 360, 64, W, O, 8, container=True) + block(596, 368, d['right_risk'], 330, 17, O, True, 'middle', max_lines=1)
    s += note(d['foot'], 428)
    return s

def scoping(d):
    """Five scopes of generative AI use, from buying an app to training a model."""
    s = text(102, 34, 'BUY', 18, O, True, 'middle') + text(556, 34, 'BUILD', 18, B, True, 'middle')
    s += edge([(24, 44), (180, 44)], O, False, False, 2) + edge([(332, 44), (776, 44)], B, False, False, 2)
    cw = (752 - 4 * 10) / 5
    for i, (name, desc, ex) in enumerate(d['scopes']):
        x = round(24 + i * (cw + 10), 2); c = O if i < 2 else B
        s += rect(x, 56, round(cw, 2), 252, W if i < 2 else P, c, 8, container=True)
        s += text(round(x + cw / 2, 2), 84, f'SCOPE {i + 1}', 17, c, True, 'middle')
        s += block(round(x + cw / 2, 2), 112, name, cw - 18, 17, N, True, 'middle', max_lines=2)
        s += block(round(x + cw / 2, 2), 170, desc, cw - 18, 16, N, False, 'middle', max_lines=3)
        s += block(round(x + cw / 2, 2), 252, ex, cw - 18, 16, G, False, 'middle', max_lines=2)
    s += edge([(40, 326), (760, 326)], B) + text(400, 350, 'More of the model and data are yours to secure', 16, B, True, 'middle')
    s += rect(24, 364, 752, 62, P, B, 8, container=True) + text(400, 390, 'SECURING GENERATIVE AI AT EVERY SCOPE', 16, B, True, 'middle')
    s += block(400, 412, d['disciplines'], 724, 16, N, False, 'middle', max_lines=1)
    return s

KINDS = {name: fn for name, fn in globals().items() if callable(fn) and not name.startswith('_')}
