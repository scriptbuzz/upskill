"""Concept compositions added in v0.13: mechanism diagrams for exam-weighted topics and three redesigned service diagrams."""
from canvas import *
from html import escape

def dot(x,y,c,r=5):return circle(x,y,r,c,'none',0)
def axes(x,y,w,h):return edge([(x,y),(x,y+h),(x+w,y+h)],G,False,False,1.6)
def points(x,y,w,h,pts,c=B,r=5):return ''.join(dot(x+px*w,y+h-py*h,c,r) for px,py in pts)
def curve(x,y,w,h,pts,c=O,sw=2.8):return edge([(x+px*w,y+h-py*h) for px,py in pts],c,False,False,sw)
def label(cx,y,s,size=20,c=N):return text(cx,y,s,size,c,True,'middle',True)
def vtext(x,y,s,size=16,c=G):return f'<text transform="translate({x} {y}) rotate(-90)" font-size="{size}" fill="{c}" font-weight="700" text-anchor="middle">{escape(s)}</text>'

def rules_to_agents(d):
 s=heading('THE SAME SHIPMENT TASK, FOUR KINDS OF SOFTWARE')
 rings=[(24,60,286,314,'ARTIFICIAL INTELLIGENCE',N),(44,98,246,258,'MACHINE LEARNING',B),(64,136,206,202,'DEEP LEARNING',B),(84,174,166,146,'GENERATIVE AI',O)]
 for x,y,w,h,name,c in rings:s+=rect(x,y,w,h,'white' if c==N else P,c,10,False,1.8)+text(x+w/2,y+24,name,17,c,True,'middle')
 s+=block(167,236,'Foundation models learn patterns from very large data sets.',140,16,G,False,'middle',max_lines=3)
 s+=rect(44,332,246,32,W,O,6,True,1.8)+text(167,353,'AGENTIC AI: a model that chooses actions',16,O,True,'middle')
 rows=[('table','Rules-based software','Fee table → exact shipping fee','The logic is known; no prediction is needed.'),
       ('chart','Traditional ML','Shipment records → delay estimate','A focused prediction from structured inputs.'),
       ('model','Generative AI','Tracking record → drafted customer update','New content; check wording and facts.'),
       ('tools','Agentic AI','Request → lookup, tool call, proposed reschedule','It can act, so it needs permissions and approval.')]
 for i,(key,name,example,when) in enumerate(rows):
  y=58+i*78
  s+=art(key,336,y+6,56,O if i==3 else N)+text(408,y+24,name,20,N,True)
  s+=block(408,y+46,example,362,17,B,True,max_lines=1)+block(408,y+67,when,362,16,G,max_lines=1)
  if i<3:s+=edge([(336,y+76),(776,y+76)],L,False,False,1.2)
 s+=edge([(336,382),(776,382)],O,False,True,2.2)+text(336,402,'Known logic',16,G)+text(600,402,'More autonomy, more controls',16,O,True,'middle')
 return s+note(d['foot'])

def problem_types(d):
 s=heading('FOUR PROBLEM TYPES: WHAT THE OUTPUT IS')
 panels=[(24,62,'CLASSIFICATION','Output: a category (brakes, gears, tires)','Supervised: labels are known','cls'),
         (400,62,'REGRESSION','Output: a number (repair hours)','Supervised: values are known','reg'),
         (24,246,'CLUSTERING','Output: groups with no given names','Unsupervised: no labels','clu'),
         (400,246,'ANOMALY DETECTION','Output: a flag on the odd case','Unsupervised: learn what is normal','ano')]
 for x,y,name,out,learn,kind in panels:
  s+=rect(x,y,376,170,'white',L,8)+text(x+14,y+28,name,20,N,True)
  s+=block(x+14,y+53,out,200,16,B,True,max_lines=2)+block(x+14,y+95,learn,200,16,G,max_lines=2)
  px,py,pw,ph=x+232,y+18,128,120
  s+=axes(px,py,pw,ph)
  if kind=='cls':
   s+=points(px,py,pw,ph,[(.15,.25),(.3,.2),(.25,.45),(.4,.35),(.2,.6)],B)+points(px,py,pw,ph,[(.65,.7),(.8,.6),(.7,.85),(.9,.8),(.6,.55)],O)
   s+=edge([(px+pw*.2,py+ph*.05),(px+pw*.95,py+ph*.9)],N,True,False,1.8)
  if kind=='reg':
   pts=[(.1,.2),(.25,.32),(.4,.35),(.55,.55),(.7,.6),(.85,.8),(.95,.85)];s+=points(px,py,pw,ph,pts,B)+curve(px,py,pw,ph,[(.05,.15),(.98,.9)],O)
  if kind=='clu':
   for cx,cy,c in [(.22,.3,B),(.7,.25,T),(.5,.75,O)]:s+=points(px,py,pw,ph,[(cx+dx,cy+dy) for dx,dy in [(0,0),(.08,.05),(-.07,.06),(.04,-.09),(-.05,-.06)]],c)
  if kind=='ano':
   s+=points(px,py,pw,ph,[(.1+.09*i,.4+.12*((i*7)%3)) for i in range(9)],B)+dot(px+pw*.82,py+ph*.1,O,6)+circle(px+pw*.82,py+ph*.1,13,'none',O,2.2)
 return s+note(d['foot'])

def agentic(d):
 s=heading('ONE AGENT LOOPS; SEVERAL AGENTS COORDINATE')
 s+=zone(24,54,440,316,'A SINGLE AGENT',B,P)
 s+=rect(44,100,170,66,'white',B,6,container=True)+text(129,127,'GOAL',18,B,True,'middle')+text(129,151,'Reschedule a delivery',16,N,False,'middle')
 s+=edge([(218,131),(228,131)])
 s+=art('model',232,100,70)+label(267,188,'DECIDE',18)
 s+=edge([(306,131),(346,131)])
 s+=art('tools',350,100,70)+label(385,188,'TOOL',18)
 s+=edge([(385,202),(385,232)],B)+text(394,222,'via MCP',16,G)
 s+=art('eye',350,236,60)+label(385,320,'OBSERVE',18)
 s+=edge([(346,266),(318,266),(318,150),(306,150)],B)+text(312,228,'result',16,G,False,'end')
 s+=text(44,262,'MEMORY',18,N,True)+text(44,286,'Working context: this task',16,N)+text(44,308,'Long-term: saved facts',16,N)
 s+=art('db',232,244,56)+edge([(260,240),(260,208)],B,True,True,2.2)
 s+=rect(44,338,400,26,W,O,5,False,1.5)+text(244,356,'Permitted tools • stop conditions • human approval',16,O,True,'middle')
 s+=zone(488,54,288,164,'COORDINATOR PATTERN',N,'white')
 s+=art('model',600,96,48)+text(624,166,'COORDINATOR',16,N,True,'middle')
 for cx,name in [(530,'Research'),(718,'Check')]:
  s+=art('model',cx-22,140,44,T)+text(cx,204,name,16,N,True,'middle')
 s+=edge([(596,120),(556,140)],B)+edge([(652,120),(692,140)],B)
 s+=zone(488,234,288,140,'SEQUENTIAL HANDOFF',N,'white')
 for i,name in enumerate(['Draft','Verify','Send']):
  cx=536+i*98;s+=art('model',cx-22,272,44,T)+text(cx,336,name,16,N,True,'middle')
  if i<2:s+=edge([(cx+26,294),(cx+72,294)],O)
 s+=text(632,358,'each result becomes the next input',16,G,False,'middle')
 return s+note(d['foot'])

def shots(d):
 s=heading('EXAMPLES IN THE PROMPT, NOT IN THE MODEL')
 cards=[('ZERO-SHOT',['Task: label the note as','brakes, gears, or tires.','','Note: rear wheel loses','pressure overnight.'],'No examples. The instruction carries the task.'),
        ('ONE-SHOT',['Task: label the note.','','Example: chain skips under','load → gears','','Note: rear wheel loses','pressure overnight.'],'One worked example shows the format.'),
        ('FEW-SHOT',['Task: label the note.','','chain skips → gears','lever feels soft → brakes','rim rubs pad → brakes?','','Note: rear wheel loses','pressure overnight.'],'Several examples, including an ambiguous one.')]
 for i,(name,lines,why) in enumerate(cards):
  x=24+i*254
  s+=rect(x,56,236,230,'white',B,8,container=True)+text(x+14,84,name,20,B,True)
  for j,line in enumerate(lines):
   if line:s+=text(x+14,112+j*22,line,16,N,line.startswith(('Example','Note','Task')))
  s+=block(x+14,304,why,236,16,G,max_lines=2)
  s+=edge([(x+118,332),(x+118,350)],O)
 s+=rect(24,354,636,30,W,O,6)+text(342,374,'Output for every card: tires',18,O,True,'middle')
 s+=art('lock',690,336,44)+text(712,402,'weights unchanged',16,G,True,'middle')
 return s+note(d['foot'])

def customization(d):
 s=heading('MORE CUSTOMIZATION, MORE COST TO BUILD AND KEEP')
 steps=[('Prompt engineering','No','Minutes'),('RAG','No','Retrieval system'),('Fine-tuning','Yes','Labeled examples'),('Continued pretraining','Yes','Domain corpus'),('Pretraining','Yes','Vast data and compute')]
 for i,(name,weights,cost) in enumerate(steps):
  x=24+i*150;h=30+i*28;y=226-h
  s+=rect(x,y,136,h,[P,P,'#dbe8fa','#b9d2f3',B][i],'none',4)
  s+=block(x+68,y-26,name,136,17,N,True,'middle',max_lines=2)
  s+=text(x+68,252,'Weights change: '+weights,16,O if weights=='Yes' else G,True,'middle')
  s+=block(x+68,272,cost,148,16,G,False,'middle',max_lines=1)
 s+=edge([(24,234),(776,234)],G,False,True,1.8)
 s+=zone(24,292,752,112,'DISTILLATION: A SMALLER MODEL LEARNS FROM A LARGER ONE',T,'white')
 s+=art('model',48,338,50)+text(104,368,'TEACHER',16,N,True)
 s+=edge([(178,363),(240,363)],T)+text(209,349,'responses',16,G,False,'middle')
 s+=rect(244,340,160,46,P,T,6,container=True)+text(324,368,'TRAINING SET',17,T,True,'middle')
 s+=edge([(408,363),(452,363)],T)
 s+=art('model',456,344,38,T)+text(500,368,'STUDENT',16,N,True)
 s+=block(572,356,'Cheaper and faster to serve; narrower outside its task.',196,16,N,max_lines=2)
 return s+note(d['foot'])

def fit(d):
 s=heading('BIAS AND VARIANCE: HOW A MODEL FITS')
 data=[(.05,.22),(.15,.4),(.25,.3),(.35,.55),(.45,.5),(.55,.7),(.65,.62),(.75,.8),(.85,.72),(.95,.9)]
 panels=[('UNDERFIT (HIGH BIAS)','A straight line misses the pattern.',[(.02,.45),(.98,.62)],'High','High'),
         ('GOOD FIT','The curve follows the trend, not the noise.',[(.02,.2),(.25,.36),(.5,.55),(.75,.72),(.98,.9)],'Low','Low'),
         ('OVERFIT (HIGH VARIANCE)','The curve chases every training point.',[(.02,.15)]+data+[(.98,.95)],'Very low','High')]
 for i,(name,why,line,tr,new) in enumerate(panels):
  x=24+i*254
  s+=rect(x,56,236,270,'white',L,8)+text(x+118,84,name,19,O if i!=1 else T,True,'middle')
  px,py,pw,ph=x+24,98,190,112
  s+=axes(px,py,pw,ph)+points(px,py,pw,ph,data,B,4)+curve(px,py,pw,ph,line,O if i!=1 else T)
  s+=block(x+118,236,why,212,16,G,False,'middle',max_lines=2)
  s+=text(x+14,286,'Training error',16,N)+text(x+222,286,tr,16,N,True,'end')
  s+=text(x+14,310,'New-data error',16,N)+text(x+222,310,new,16,O if new=='High' else T,True,'end')
 s+=rect(24,340,752,42,P,L,6)+text(400,366,'Compare training and validation results. A gap between them signals overfitting.',18,N,True,'middle')
 return s+note(d['foot'])

def shared(d):
 s=heading('SHARED RESPONSIBILITY FOR AN AI APPLICATION')
 s+=zone(24,54,500,190,'CUSTOMER: SECURITY IN THE CLOUD',O,W)
 rows=[('Customer data, prompts, and retrieved sources','db'),('Identities, roles, and permissions','iam'),('Application behavior: prompts, tools, guardrails','app'),('Model choice, configuration, and encryption settings','kms')]
 for i,(name,key) in enumerate(rows):
  y=92+i*36;s+=art(key,44,y,28)+text(84,y+20,name,17,N,True)
 s+=zone(24,262,500,146,'AWS: SECURITY OF THE CLOUD',B,P)
 for i,name in enumerate(['Managed service software and model hosting','Compute, storage, database, and networking','Regions, Availability Zones, and physical facilities']):
  s+=art('check',44,300+i*34,26)+text(84,320+i*34,name,17,N,True)
 s+=edge([(44,251),(504,251)],N,False,False,2.4)
 s+=rect(548,54,228,354,'white',L,8,container=True)+text(662,82,'THE LINE MOVES',18,N,True,'middle')
 s+=block(662,106,'The more AWS manages, the less you operate. You always own your data and how the application uses it.',196,16,G,False,'middle',max_lines=4)
 for i,(name,you) in enumerate([('Bedrock model API','Prompts, data, permissions'),('SageMaker AI endpoint','Plus model, container, VPC'),('Model on your own EC2','Plus OS and patching')]):
  y=192+i*70;s+=rect(562,y,200,62,P,B,6,container=True)+block(662,y+25,name,180,16,B,True,'middle',max_lines=1)+block(662,y+47,you,180,16,N,False,'middle',max_lines=1)
 return s+note(d['foot'])

def platform_layers(d):
 s=heading('THREE WAYS TO USE AI ON AWS')
 layers=[(54,'BUILD WITH FOUNDATION MODELS',B,P,'bedrock','Amazon Bedrock','Managed access to foundation models, plus Knowledge Bases, Agents, Guardrails, and evaluation.'),
         (172,'USE PRETRAINED AI SERVICES',T,'white',None,'Ready-to-call APIs','No training. Call the service for a specific task.'),
         (290,'BUILD YOUR OWN MODELS',O,W,'sagemaker','Amazon SageMaker AI','Prepare data, train, tune, deploy, and monitor. JumpStart offers pretrained models to start from.')]
 for y,title,c,fill,key,name,desc in layers:
  s+=zone(96,y,680,116,title,c,fill)
  if key:
   s+=art(key,116,y+40,58)+text(188,y+62,name,20,N,True)+block(188,y+84,desc,560,16,G,max_lines=2)
  else:
   for i,(k,nm) in enumerate([('rekognition','Rekognition'),('textract','Textract'),('comprehend','Comprehend'),('transcribe','Transcribe'),('polly','Polly'),('translate','Translate'),('lex','Lex'),('personalize','Personalize')]):
    cx=150+i*78;s+=art(k,cx-20,y+40,40)+text(cx,y+100,nm,16,N,True,'middle')
 s+=edge([(56,400),(56,64)],N,False,True,2.2)+vtext(38,130,'LESS TO BUILD')+vtext(38,346,'MORE CONTROL')
 return s+note(d['foot'])

def vpc_boundaries(d):
 s=heading('THREE CONTROLS ON ONE DATA PATH')
 s+=zone(24,54,522,354,'CUSTOMER VPC',B,'white')
 s+=zone(42,96,300,212,'PRIVATE SUBNET',B,P)
 s+=rect(64,140,256,132,'white',T,8,True,1.8)+text(192,164,'SECURITY GROUP',16,T,True,'middle')
 s+=art('sagemaker',92,176,56)+text(120,254,'TRAINING JOB',16,N,True,'middle')
 s+=art('server',216,176,56)+text(244,254,'ENDPOINT',16,N,True,'middle')
 s+=block(192,292,'No public IP; approved routes only',260,16,G,False,'middle',max_lines=1)
 s+=art('internet',60,326,50)+edge([(120,351),(190,351)],R,False,False,2.4)+path('M148 339L166 363M166 339L148 363',R,3)+text(258,356,'No internet gateway',16,R,True)
 s+=edge([(346,196),(400,196)],B)+art('endpoint',404,166,60)+text(434,244,'GATEWAY',16,N,True,'middle')+text(434,266,'ENDPOINT',16,N,True,'middle')
 s+=edge([(468,196),(590,196)],B)+text(500,184,'private',16,G,False,'middle')
 s+=art('s3',596,160,60)+text(626,236,'TRAINING DATA',16,N,True,'middle')+text(626,258,'in Amazon S3',16,G,False,'middle')
 s+=edge([(626,270),(626,286)],O,True,True,2)
 s+=rect(570,292,206,56,W,O,6,container=True)+art('iam',582,304,32)+text(624,315,'IAM ROLE',16,O,True)+text(624,335,'read this prefix only',16,N)
 s+=rect(570,352,206,56,W,O,6,container=True)+art('kms',582,364,32)+text(624,375,'KMS KEY',16,O,True)+text(624,395,'volumes and objects',16,N)
 s+=text(672,80,'NETWORK',16,B,True,'middle')+text(672,101,'reachability',16,G,False,'middle')
 s+=text(672,124,'IDENTITY AND KEYS',16,O,True,'middle')+text(672,145,'authorization',16,G,False,'middle')
 return s+note(d['foot'])

def retention_ladder(d):
 s=heading('RETENTION: OBJECTS MOVE DOWN THE LADDER, THEN EXPIRE',c=O)
 tiers=[('S3 Standard','Day 0','Frequent access',1.0),('Standard-IA','Day 30','Infrequent access',.55),('Glacier Flexible','Day 90','Archive, slow retrieval',.25),('Deep Archive','Day 365','Long-term, hours',.12)]
 for i,(name,day,use,cost) in enumerate(tiers):
  x=24+i*150;y=56+i*18;cx=x+75
  s+=art('s3',cx-22,y,44)+text(cx,y+64,name,16,N,True,'middle')+text(cx,y+84,day,16,O,True,'middle')
  s+=block(cx,y+104,use,146,16,G,False,'middle',max_lines=1)
  w=int(120*cost);s+=rect(cx-w/2,y+112,w,8,B,'none',2)
  s+=edge([(x+101,y+22),(x+199,y+40)],O)
 cx=699;y=128
 s+=art('check',cx-22,y,44,O)+text(cx,y+64,'EXPIRE',16,N,True,'middle')+text(cx,y+84,'Year 7',16,O,True,'middle')
 s+=text(24,250,'Blue bar: relative storage cost per gigabyte. Account for object versions and copies.',16,G)
 s+=edge([(24,262),(776,262)],L,False,False,1.6)
 s+=heading('GOVERNED ACCESS: LAKE FORMATION GRANTS BY TABLE AND COLUMN',24,292,B,23)
 s+=art('person',44,306,52)+text(70,380,'STEWARD',16,N,True,'middle')+edge([(100,332),(150,332)],B)+text(125,320,'grants',16,G,False,'middle')
 s+=art('lakeformation',154,304,56)+text(182,380,'PERMISSIONS',16,N,True,'middle')
 s+=rect(236,300,216,66,'white',B,6,container=True)+text(344,324,'ANALYST MAY READ',16,B,True,'middle')+text(344,348,'repairs table, no cost column',16,N,False,'middle')
 s+=edge([(452,332),(494,332)],B)+art('s3',498,306,52)+text(524,380,'DATA LAKE',16,N,True,'middle')
 s+=art('person',600,306,52,R)+text(626,380,'UNGRANTED',16,R,True,'middle')+edge([(656,332),(702,332)],R,False,False,2.4)+path('M672 320L692 344M692 320L672 344',R,3)
 s+=text(742,337,'denied',16,R,True,'middle')
 return s+note(d['foot'])
