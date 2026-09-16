"""Measured typography, official artwork, and fixed-weight connectors for course SVGs."""
from pathlib import Path
from html import escape
import base64,json,math
from illustrations import ICONS
HERE=Path(__file__).resolve().parent
N='#101b45';B='#0865d9';O='#e96506';G='#515d6d';L='#cbd7e6';P='#f4f8fd';W='#fff7ef';R='#c9232c';T='#17786d'
METRICS=json.loads((HERE/'fonts/metrics.json').read_text())
FONT_CSS=''.join('@font-face{font-family:Diagram;src:url(data:font/woff;base64,'+base64.b64encode((HERE/f'fonts/roboto-condensed-{w}.woff').read_bytes()).decode()+') format("woff");font-weight:'+str(w)+';font-style:normal;}' for w in [500,700])
ASSETS={p.stem:base64.b64encode(p.read_bytes()).decode() for p in (HERE/'aws-icons').glob('*.svg')}

def width(s,size=18,bold=False):
 m=METRICS['700' if bold else '500'];return sum(m.get(c,m['?']) for c in s)*size

def text(x,y,s,size=18,c=N,bold=False,anchor='start',caps=False):
 s=str(s).upper() if caps else str(s)
 return f'<text x="{x}" y="{y}" font-size="{size}" fill="{c}" font-weight="{700 if bold else 500}" text-anchor="{anchor}">{escape(s)}</text>'

def block(x,y,s,w,size=18,c=N,bold=False,anchor='start',caps=False,leading=None,max_lines=6):
 s=s.upper() if caps else s;out=[]
 for para in s.split('\n'):
  current=''
  for word in para.split():
   candidate=(current+' '+word).strip()
   if width(candidate,size,bold)>w and current:out.append(current);current=word
   else:current=candidate
  if current:out.append(current)
 assert len(out)<=max_lines, f'{s!r}: {len(out)} lines exceeds {max_lines} at width {w}'
 assert all(width(line,size,bold)<=w+1 for line in out),f'Unbreakable label: {s}'
 return ''.join(text(x,y+i*(leading or size*1.22),line,size,c,bold,anchor) for i,line in enumerate(out))

def rect(x,y,w,h,fill='white',stroke=L,r=7,dash=False,sw=1.8,container=False):
 return f'<rect'+(' class="text-container"' if container else '')+f' x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"'+(' stroke-dasharray="7 5"' if dash else '')+'/>'

def circle(x,y,r,fill='white',stroke=B,sw=2.4):return f'<circle cx="{x}" cy="{y}" r="{r}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'

def edge(points,c=B,dash=False,arrow=True,sw=2.8):
 d='M'+'L'.join(f'{x} {y}' for x,y in points)
 return f'<path class="connector" d="{d}" fill="none" stroke="{c}" stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round"'+(' stroke-dasharray="7 5"' if dash else '')+(f' marker-end="url(#{"orange" if c==O else "red" if c==R else "blue" if c==B else "navy"})"' if arrow else '')+'/>'

def path(d,c=B,sw=2.8,fill='none'):
 return f'<path d="{d}" fill="{fill}" stroke="{c}" stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round"/>'

def art(key,x,y,size=72,c=N):
 if key in ASSETS:
  return f'<image class="diagram-icon" data-aws="{key}" x="{x}" y="{y}" width="{size}" height="{size}" href="data:image/svg+xml;base64,{ASSETS[key]}"/>'
 assert key in ICONS,key
 # Original geometric illustrations for non-service concepts. Stroke stays fixed after scaling.
 body=ICONS[key].replace('/>',' vector-effect="non-scaling-stroke"/>')
 return f'<g class="diagram-icon" transform="translate({x} {y}) scale({size/48})" fill="none" stroke="{c}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">{body}</g>'

def node(cx,y,key,label,detail='',w=160,size=72,color=N):
 s=art(key,cx-size/2,y,size,color)+block(cx,y+size+29,label,w,20,color,True,'middle',True,max_lines=3)
 if detail:s+=block(cx,y+size+88,detail,w,17,G,False,'middle',max_lines=3)
 return s

def heading(s,x=24,y=35,c=N,size=24):return text(x,y,s,size,c,True,caps=True)
def note(s,y=426):return block(400,y,s,748,16,G,False,'middle',max_lines=1)
def zone(x,y,w,h,label,c=B,fill=P):
 return rect(x,y,w,h,fill,c,8,True,1.8,True)+text(x+16,y+29,label,20,c,True,caps=True)

def record(x,y,w,label,rows,h=None):
 h=h or 52+len(rows)*26
 s=rect(x,y,w,h,'white',B,6,container=True)+text(x+14,y+29,label,18,B,True,caps=True)
 for i,row in enumerate(rows):s+=block(x+14,y+59+i*27,row,w-28,17,N,max_lines=1)
 return s

def table(x,y,columns,rows,widths,rowh=34):
 w=sum(widths);s=rect(x,y,w,rowh*(len(rows)+1),'white',L,5,container=False)+rect(x,y,w,rowh,P,'none',4)
 for i,row in enumerate([columns]+rows):
  xx=x
  for j,val in enumerate(row):s+=text(xx+12,y+24+i*rowh,val,16,B if i==0 else N,i==0);xx+=widths[j]
  if i:s+=edge([(x,y+i*rowh),(x+w,y+i*rowh)],L,False,False,1.2)
 return s

def bars(x,y,vals,w=170,h=100,c=B,labels=None):
 s=edge([(x,y),(x,y+h),(x+w,y+h)],G,False,False,1.6);gap=w/len(vals)
 for i,v in enumerate(vals):
  s+=rect(x+i*gap+8,y+h-v*h,gap-16,v*h,c,'none',2)
  if labels:s+=text(x+(i+.5)*gap,y+h+25,labels[i],16,G,False,'middle')
 return s

def spark(x,y,vals,w=200,h=105,c=B):
 pts=[(round(x+i*w/(len(vals)-1),2),round(y+h*(1-v),2)) for i,v in enumerate(vals)]
 return edge([(x,y),(x,y+h),(x+w,y+h)],L,False,False,1.6)+edge(pts,c,False,False,2.8)

def vectors(x,y,w=160,h=90):
 return ''.join(rect(x+j*w/7,y+i*h/4,w/7-5,h/4-5,[P,'#91b9df',B][(j+i*2)%3],'none',2) for i in range(4) for j in range(7))

def network(x,y,w=210,h=115):
 layers=[(0,[.15,.5,.85]),(.33,[.05,.35,.65,.95]),(.67,[.15,.5,.85]),(1,[.5])];s=''
 for (a,ys),(b,zs) in zip(layers,layers[1:]):
  for u in ys:
   for v in zs:s+=edge([(x+a*w,y+u*h),(x+b*w,y+v*h)],'#b6c9de',False,False,1.4)
 for i,(a,ys) in enumerate(layers):
  for u in ys:s+=circle(x+a*w,y+u*h,6,[O,B,B,T][i],'none',0)
 return s

def clusters(x,y):
 return ''.join(circle(x+dx+(i*13)%42,y+dy+(i*17)%42,5,c,'none',0) for dx,dy,c in [(0,0,O),(102,10,B),(60,78,T)] for i in range(9))

def seal(cx,y,label='CHECK',color=B):return art('check',cx-35,y,70)+text(cx,y+103,label,20,color,True,'middle',True)

def render(title,desc,body):
 markers=''.join(f'<marker id="{key}" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="11" refY="6" orient="auto"><path d="M0 0L12 6L0 12Z" fill="{c}"/></marker>' for key,c in [('blue',B),('orange',O),('red',R),('navy',N)])
 return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%" style="background:white" role="img" aria-labelledby="title desc"><title id="title">{escape(title)}</title><desc id="desc">{escape(desc)}</desc><defs><style>{FONT_CSS}</style>{markers}</defs><rect width="800" height="450" fill="white"/><g font-family="Diagram,Arial,sans-serif">{body}</g></svg>'
