#!/usr/bin/env python3
"""Regenerate the AI Practitioner rebuild SVGs from specs_v2.py and the compositions in v2.py.

Set AIF_V2_COURSE to the version folder to build (default: the newest, aif-v1-5).
Never point it at an older version folder: published versions are not rewritten."""
import json, os, subprocess, sys
from pathlib import Path
import canvas, v2
from specs_v2 import D

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[3]
COURSE_ID = os.environ.get('AIF_V2_COURSE', 'aif-v1-5')
COURSE = ROOT / 'training-website/courses' / COURSE_ID
data = json.loads(subprocess.check_output(['node', '-e', 'process.stdout.write(JSON.stringify(require(process.argv[1])))', str(COURSE / f'{COURSE_ID}_data.js')], text=True))
only = set(sys.argv[1:])
built = []
failures = []
for module in data['modules']:
    for slide in module['slides']:
        if not slide.get('visualization'):
            assert slide['id'] not in D, f"{slide['id']} has a spec but no visualization"
            continue
        assert slide['id'] in D, f"{slide['id']} has no diagram spec"
        if only and slide['id'] not in only: continue
        spec = dict(D[slide['id']], id=slide['id'])
        try:
            body = v2.KINDS[spec['kind']](spec)
        except AssertionError as error:
            failures.append(f"{slide['id']} ({spec['kind']}): {error}")
            continue
        (COURSE / 'visualizations' / slide['visualization']).write_text(canvas.render(spec['title'], spec['desc'], body))
        built.append(slide['id'])
used = {s['id'] for m in data['modules'] for s in m['slides'] if s.get('visualization')}
assert set(D) <= used, f'Specs without slides: {sorted(set(D) - used)}'
if failures:
    sys.exit('Labels that do not fit:\n' + '\n'.join(failures))
print(f'Generated {len(built)} {COURSE_ID} diagrams across {len({D[i]["kind"] for i in built})} compositions.')
