"""Course compositions sized against the Cloud Practitioner artwork at 800×450."""
from canvas import *

def flow(d):
 s=heading(d['title'],size=23 if width(d['title'].upper(),24,True)>746 else 24)
 service_steps={'m1-s13':{1:'glue'},'m3-s9':{},'m5-s5':{1:'sagemaker'},'m5-s9':{0:'s3',1:'macie'},'m5-s25':{1:'auditmanager'},'m5-s29':{1:'databrew'}}
 for i,(key,label,detail) in enumerate(d['steps']):
  key=service_steps.get(d['id'],{}).get(i,key);cx=116+i*189
  s+=node(cx,94,key,label,detail,165,80,O if i==0 else N)
  if i<3:s+=edge([(cx+52,134),(cx+137,134)],B)
 ev=d['evidence'];s+=rect(24,357,752,69,P,L,7,container=True)
 s+=text(40,385,ev[1],18,B,True,caps=True)+block(310,397,ev[2],448,18,N,max_lines=1)
 return s

def lanes(d):
 s=heading(d.get('left','INPUT'),40,40,size=20)+heading(d.get('middle','ANALYSIS'),318,40,B,20)+heading(d.get('right','RESULT'),581,40,size=20)
 service_map={'Amazon Quick':'quick','Kiro':'code','Strands Agents':'sdk','Bedrock AgentCore':'agentcore'}
 for i,(key,inp,name,out) in enumerate(d['rows']):
  y=75+i*82
  s+=art(service_map.get(name,key),39,y,62)
  s+=block(116,y+22,inp,153,19,N,True,max_lines=2)
  s+=edge([(279,y+31),(302,y+31)])+block(318,y+22,name,204,18,N,True,max_lines=3)
  s+=edge([(540,y+31),(565,y+31)])+block(581,y+22,out,193,18,N,max_lines=3)
  if i<3:s+=edge([(39,y+72),(774,y+72)],L,False,False,1.2)
 return s

def visual(kind,x,y,w=220,h=145,key=None):
 if key:return art(key,x+(w-100)/2,y+16,100)
 if kind=='table':return table(x,y,['JOB','HOURS','COST'],[['R07','2.0','120'],['R08','1.5','90'],['R09','3.0','180']],[w*.34,w*.33,w*.33],33)
 if kind=='photo':return rect(x,y,w,h,P,L)+art('pump',x+w/2-46,y+27,92,O)+rect(x+w/2-56,y+16,112,116,'none',O,3,False,2.4)
 if kind=='network':return network(x+10,y+8,w-20,h-15)
 if kind=='series':return spark(x,y,[.15,.25,.6,.4,.76,.65,.9],w,h-20)
 if kind=='checklist':
  s=''
  for i,label in enumerate(['QUALITY','SAFETY','USEFULNESS']):s+=path(f'M{x+9} {y+21+i*43}l7 7l16 -20',T,3)+text(x+51,y+24+i*43,label,20,N,True)
  return s
 return art(kind,x+(w-108)/2,y+10,108)

def compare(d):
 if d['id']=='m1-s10':return vision(d)
 if d['id']=='m2-s8':return value_workflow(d)
 items=d['items'];n=len(items);col=752/n;s=''
 keys={'m1-s10':['rekognition','textract'],'m5-s21':['artifact','check'],'m5-s27':['inspector','trustedadvisor']}.get(d['id'],[None]*n)
 for i,(label,kind,detail,example) in enumerate(items):
  x=24+i*col
  if i:s+=edge([(x,30),(x,390)],L,False,False,1.6)
  s+=block(x+col/2,47,label,col-40,23,N,True,'middle',True,max_lines=2)
  s+=visual(kind,x+28,105,col-56,142,keys[i])
  s+=block(x+col/2,286,detail,col-44,18,N,False,'middle',max_lines=5)
 return s

def orbit(d):
 if d['id'] in ['m4-s1','m5-s28']:
  s=heading(d['title'],40,39)
  for i,(key,label,detail) in enumerate(d['items']):
   cx=117+i*189;s+=art(key,cx-43,99,86)+text(cx,227,label,24,N,True,'middle',True)+block(cx,270,detail,160,18,G,False,'middle',max_lines=4)
  s+=edge([(48,363),(752,363)],B,False,False,3)+rect(220,384,360,44,'white',B,5,container=True)+text(400,414,d['center'],22,N,True,'middle',True)
  return s
 s='';positions=[(177,47),(618,47),(618,264),(177,264)]
 for (key,label,detail),(cx,y) in zip(d['items'],positions):
  s+=art(key,cx-34,y,68)+text(cx,y+97,label,23,N,True,'middle',True)+block(cx,y+125,detail,225,17,G,False,'middle',max_lines=2)
 s+=edge([(267,83),(526,83)],O)+edge([(755,119),(755,294)],O)+edge([(526,298),(267,298)],O)+edge([(43,294),(43,119)],O)
 s+=rect(286,183,228,80,P,B,6,container=True)+block(400,213,d['center'],194,20,N,True,'middle',True,max_lines=2)
 return s

def rules(d):
 s=heading('Rule-based approach',32,40,c=O)+heading('Machine learning',32,225,c=B)
 for x,key,label in [(85,'doc','KNOWN POLICY'),(325,'code','WRITTEN RULES'),(605,'flag','DECISION')]:
  s+=art(key,x,71,68,O)+text(x+34,171,label,20,N,True,'middle')
 s+=edge([(170,105),(306,105)],O)+edge([(412,105),(583,105)],O)
 s+=edge([(24,193),(776,193)],L,False,False,1.5)
 for x,key,label in [(49,'db','EXAMPLES'),(295,'gear','ALGORITHM'),(625,'chip','MODEL')]:
  s+=art(key,x,253,72)+text(x+36,354,label,20,N,True,'middle')
 s+=edge([(136,289),(278,289)])+text(207,278,'Training',17,G,False,'middle')+edge([(381,289),(606,289)])
 s+=text(37,421,'NEW INPUT',18,O,True)+edge([(143,414),(550,414),(550,310),(610,310)],O)+text(341,398,'Inference uses the model',18,N,False,'middle')+edge([(711,289),(753,289),(753,414),(693,414)],O)+text(687,438,'Prediction',17,N,False,'middle')
 return s

def formats(d):
 s=''
 for x,y,label,kind,detail in [(32,37,'STRUCTURED','table','Defined columns'),(429,37,'SEMI-STRUCTURED','json','Flexible named fields'),(32,270,'UNSTRUCTURED','photo','Images, audio, notes'),(429,270,'TIME SERIES','series','Preserve time ordering')]:
  s+=heading(label,x,y,size=22)
  if kind=='json':s+=record(x,y+20,338,'EVENT',['{ "job": "R07",','  "hours": 2.0 }'],134)
  elif kind=='table':s+=visual('table',x,y+20,338,134)
  elif kind=='photo':s+=art('photo',x,y+27,78)+art('speech',x+120,y+27,78)+art('doc',x+240,y+27,78)
  else:s+=spark(x,y+26,[.15,.5,.3,.72,.55,.95],335,83)
  s+=text(x,y+174 if y<200 else y+148,detail,18,G)
 return s

def learning(d):
 s=''
 for x,title in [(27,'SUPERVISED'),(289,'UNSUPERVISED'),(550,'REINFORCEMENT')]:s+=heading(title,x,47,size=23)
 s+=table(27,105,['JOB','COST'],[['R07','120'],['R08','90'],['R09','180']],[115,115],34)
 s+=clusters(312,119)
 s+=art('chip',554,114,66)+art('globe',701,114,66)+edge([(633,145),(686,145)],O)+text(660,119,'Action',17,G,False,'middle')
 s+=edge([(733,195),(733,244),(586,244),(586,195)])+text(660,232,'Reward',17,G,False,'middle')
 for x,a,b in [(27,'KNOWN TARGET','Repair details predict cost'),(289,'HIDDEN STRUCTURE','Similar rental patterns'),(550,'POLICY OVER TIME','Act, then get a reward')]:
  s+=heading(a,x,326,size=21)+block(x,367,b,230,20,N,max_lines=2)
 return s

def neural(d):
 s=heading('The network learns its own features',218,49,size=22)+art('pump',35,178,85,O)+block(78,319,'INPUT\nFEATURES',145,21,N,True,'middle',max_lines=2)
 s+=zone(213,75,397,268,'HIDDEN LAYERS',B,P)+network(238,143,345,148)
 s+=edge([(137,220),(198,220)],O)+edge([(624,220),(665,220)])+art('flag',678,181,70,B)+block(713,319,'PREDICTION',130,20,N,True,'middle',max_lines=1)
 s+=edge([(724,353),(724,392),(286,392),(286,355)],B,True)+text(496,382,'Training adjusts connection weights',18,N,False,'middle')
 return s

def language(d):
 s='';rows=[('transcribe','AUDIO → TEXT','Amazon Transcribe'),('polly','TEXT → SPEECH','Amazon Polly'),('translate','ANOTHER LANGUAGE','Amazon Translate'),('comprehend','TEXT ANALYSIS','Amazon Comprehend'),('lex','CONVERSATION','Amazon Lex'),('personalize','RECOMMENDATIONS','Amazon Personalize')]
 for i,(key,role,label) in enumerate(rows):
  x=30+(i%3)*260;y=30+(i//3)*222
  s+=art(key,x+72,y,80)+block(x+112,y+111,label,231,21,N,True,'middle',True,max_lines=2)+block(x+112,y+170,role,231,18,G,False,'middle',max_lines=2)
 return s

def training(d):
 s=heading('Separate data before model development',30,36,size=24)
 for x,w,label,c in [(30,346,'TRAINING',B),(381,185,'VALIDATION','#537fbc'),(571,199,'TEST',O)]:s+=rect(x,66,w,39,c,'none',3)+text(x+16,93,label,21,'white',True)
 for cx,key,label,desc in [(135,'train','FIT PARAMETERS','Learn model weights'),(400,'gear','TUNE + COMPARE','Choose using validation'),(665,'check','INDEPENDENT TEST','Assess the final choice')]:s+=node(cx,164,key,label,desc,221,84)
 s+=edge([(160,117),(160,139),(135,139),(135,151)])+edge([(475,117),(475,139),(400,139),(400,151)])+edge([(671,117),(671,150)],O)
 s+=edge([(190,206),(343,206)])+edge([(457,206),(608,206)],O)+edge([(400,371),(400,404),(135,404),(135,373)],B,True)+text(267,396,'Validation feedback',17,B,False,'middle')
 return s

def inference(d):
 s='';rows=[('clock','REAL-TIME','Immediate request / response'),('db','BATCH','Many records processed together'),('speech','ASYNCHRONOUS','Submit, queue, collect later'),('server','SERVERLESS','Capacity for intermittent use')]
 for i,(key,title,desc) in enumerate(rows):
  y=25+i*105;s+=art(key,34,y+6,67)+heading(title,123,y+29,size=22)+text(123,y+59,desc,18,G)
  if i==0:s+=art('person',465,y+5,58)+edge([(540,y+34),(628,y+34)],O)+art('server',645,y+5,58)+edge([(716,y+34),(766,y+34)])
  elif i in [1,2]:
   for j in range(4):s+=rect(467+j*25,y+17,18,35,P,B,2)
   s+=edge([(579,y+35),(628,y+35)])+art('logs' if i==1 else 'server',645,y+5,58)
  else:s+=spark(467,y+1,[.05,.05,.9,.7,.05,.05,.8,.05],294,65)
  if i<3:s+=edge([(33,y+94),(766,y+94)],L,False,False,1.2)
 return s

def matrix(d):
 s=heading('ACTUAL DEFECT',260,45,size=21)+heading('ACTUAL SOUND',490,45,size=21)
 s+=block(34,147,'MODEL\nALERT',157,22,N,True,max_lines=2)+block(34,317,'NO\nALERT',157,22,N,True,max_lines=2)
 for x,y,n,title,c in [(229,70,18,'TRUE POSITIVE',B),(471,70,8,'FALSE POSITIVE',O),(229,241,6,'FALSE NEGATIVE',O),(471,241,48,'TRUE NEGATIVE',B)]:
  s+=rect(x,y,225,149,P if c==B else W,c,7,container=True)+text(x+15,y+31,title,19,c,True)+text(x+15,y+98,n,49,N,True)
  s+=''.join(circle(x+96+j%8*12,y+61+j//8*12,3.8,c,'none',0) for j in range(n))
 s+=text(724,157,'26',31,N,True)+text(724,329,'54',31,N,True)+text(340,426,'24 defective',19,N,True,'middle')+text(583,426,'56 sound',19,N,True,'middle')
 return s

def metrics(d):
 s='';rows=[('ACCURACY','Correct ÷ all 80 parts','66 / 80',.825,'82.5%'),('PRECISION','Real defects ÷ 26 alerts','18 / 26',18/26,'69.2%'),('RECALL','Found ÷ 24 real defects','18 / 24',.75,'75%'),('F1','Balances precision and recall','harmonic mean',.72,'72%')]
 for i,(label,sub,calc,v,result) in enumerate(rows):
  y=32+i*99;s+=heading(label,32,y+24,size=23)+text(32,y+54,sub,17,G)+text(340,y+39,calc,20,N,True)
  s+=rect(469,y+10,211,37,P,'none',3)+rect(469,y+10,211*v,37,O if i in [1,2] else B,'none',3)+text(704,y+38,result,25,N,True)
 return s

def lifecycle(d):
 s=heading('BUSINESS TARGET',32,38,c=O,size=21)+heading('DEVELOPMENT',303,38,size=21)+heading('INDEPENDENT TEST',559,38,size=21)
 s+=art('flag',73,75,76,O)+block(110,184,'Predict failure\nwithin 7 days',166,21,N,True,'middle',max_lines=2)+block(110,246,'Baseline and\nacceptance criteria',171,18,G,False,'middle',max_lines=2)
 s+=zone(251,62,275,235,'PREPARE → TRAIN',B,P)+art('db',270,124,66)+art('train',423,124,66)+edge([(347,157),(409,157)])
 for x,w,label,c in [(267,108,'TRAIN',B),(379,72,'VALIDATE','#537fbc'),(455,55,'TEST',O)]:s+=rect(x,217,w,29,c,'none',2)+text(x+w/2,238,label,16,'white',True,'middle')
 s+=text(388,280,'Tune using validation',18,N,True,'middle')+edge([(164,113),(237,113)],O)+edge([(538,158),(594,158)])
 s+=art('check',614,90,82)+block(655,216,'MEETS QUALITY AND\nBUSINESS TARGETS?',222,20,N,True,'middle',max_lines=2)
 s+=edge([(660,268),(660,326)],O)+art('server',624,340,63)+text(655,432,'DEPLOY',20,N,True,'middle')
 s+=art('chart',51,340,65)+text(133,381,'MONITOR',20,N,True)+edge([(608,372),(280,372)],O)+text(444,358,'Predictions versus real outcomes',18,N,False,'middle')
 s+=edge([(84,326),(84,309),(268,309),(268,297)],B,True)+text(114,330,'Refresh data',17,B)
 return s

def rag(d):
 s=zone(24,22,752,164,'PREPARE THE KNOWLEDGE',B,P)
 for cx,key,label in [(93,'docs','MANUALS'),(280,'doc','CHUNKS'),(470,'chip','EMBEDDINGS'),(689,'db','INDEX')]:
  s+=art(key,cx-29,73,58)+text(cx,161,label,19,N,True,'middle')
 for a,b in [(137,237),(323,427),(512,646)]:s+=edge([(a,103),(b,103)])
 s+=heading('ANSWER A QUESTION',25,226,c=O,size=21)
 for cx,key,label in [(89,'speech','QUESTION'),(268,'search','RETRIEVE'),(460,'docs','CONTEXT'),(654,'chip','GENERATE')]:
  s+=art(key,cx-31,262,62)+text(cx,357,label,20,N,True,'middle')
 for a,b in [(135,221),(313,414),(505,608)]:s+=edge([(a,294),(b,294)],O)
 s+=edge([(689,197),(689,238),(268,238),(268,251)],B,True)
 s+=text(60,405,'Question embedded the same way',16,G)+text(388,405,'Question, passages, sources',16,G)+text(634,405,'Answer cites sources',16,N,True)
 return s


def vision(d):
 s=heading('IMAGE ANALYSIS',24,35,size=22)
 s+=rect(25,65,161,103,P,L,4)+art('pump',73,82,69,O)+text(104,201,'INSPECTION PHOTO',19,N,True,'middle')
 s+=edge([(200,116),(318,116)])+art('rekognition',334,76,80)+block(374,203,'AMAZON REKOGNITION',261,21,N,True,'middle',max_lines=1)
 s+=edge([(428,116),(541,116)])+record(557,65,218,'RESULT',['Object labels','Confidence scores'],112)
 s+=edge([(24,233),(776,233)],L,False,False,1.6)+heading('DOCUMENT EXTRACTION',24,275,size=22)
 s+=record(25,301,184,'INVOICE',['Total: 270.00'],101)+edge([(223,352),(317,352)])+art('textract',334,312,80)+text(374,427,'AMAZON TEXTRACT',21,N,True,'middle')
 s+=edge([(429,352),(541,352)])+record(557,301,218,'FIELDS + TABLES',['Total = 270.00'],101)
 return s

def value_workflow(d):
 s=heading('COMPARE THE SAME USER TASKS',24,35,size=24)
 for y,title,keys,labels in [(64,'CURRENT WORKFLOW',['person','book','flag'],['Staff search','Approved manual','Complete task']),(242,'ASSISTED WORKFLOW',['search','chip','person'],['Retrieve','Generate','Review and use'])]:
  s+=heading(title,25,y+22,size=20,c=B if y==64 else O)
  for i,(key,label) in enumerate(zip(keys,labels)):
   cx=314+i*199;s+=art(key,cx-29,y+7,58)+text(cx,y+105,label,20,N,True,'middle')
   if i<2:s+=edge([(cx+44,y+35),(cx+155,y+35)],B if y==64 else O)
 s+=edge([(24,209),(776,209)],L,False,False,1.6)
 s+=rect(25,377,750,49,P,L,5,container=True)+text(400,410,'COMPARE QUALITY, TOTAL TIME, AND COST',22,N,True,'middle')
 return s
