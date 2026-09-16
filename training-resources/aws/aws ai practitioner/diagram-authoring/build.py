#!/usr/bin/env python3
"""Regenerate the original AIF SVGs from their editable compositions."""
import json, subprocess
from pathlib import Path
import canvas, plates, details, systems, concepts
from specs import D
HERE=Path(__file__).resolve().parent
ROOT=HERE.parents[3]
COURSE=ROOT/'training-website/courses/aif'
data=json.loads(subprocess.check_output(['node','-e','process.stdout.write(JSON.stringify(require(process.argv[1])))',str(COURSE/'aif_data.js')],text=True))
rows=[]
for m in data['modules']:
 for slide in m['slides']:
  if not slide.get('visualization'):continue
  d=D[slide['id']];kind=d['kind']
  d=dict(d,id=slide['id'])
  aliases={'workflow':'flow','network':'neural','approved-lifecycle':'lifecycle','approved-rag':'rag'}
  name=aliases.get(kind,kind.replace('-','_'))
  if kind in ['prebias','postbias']:
   body=details.bias(d,kind=='postbias')
  else:
   fn=next(getattr(module,name) for module in [plates,details,systems,concepts] if hasattr(module,name))
   body=fn(d)
  desc=d['subtitle']+' '+d['foot']
  art=canvas.render(d['title'],desc,body)
  (COURSE/'visualizations'/slide['visualization']).write_text(art)
  rows.append((slide['id'],slide['visualization'],d['title'],kind,desc))
assert len(rows)==len(D)==78,(len(rows),len(D))
print(f'Generated {len(rows)} diagrams across {len(set(d["kind"] for d in D.values()))} compositions.')
