from canvas import *

def embeddings(d):
 s=heading('TOKENS',32,39,size=24)+heading('CHUNKS',295,39,size=24)+heading('EMBEDDINGS',566,39,size=24)
 s+=record(32,75,227,'INPUT TEXT',['Inspect the pump seal.'],102)
 for x,w,label in [(32,73,'Inspect'),(110,43,'the'),(158,56,'pump'),(219,43,'seal')]:s+=rect(x,203,w,35,P,B,3)+text(x+w/2,227,label,17,N,False,'middle')
 s+=block(146,294,'Pieces of model input',215,21,N,True,'middle',True,max_lines=2)+block(146,352,'Token limits affect context and response length.',215,18,G,False,'middle',max_lines=3)
 s+=record(297,75,225,'PASSAGE 1',['Inspection procedure'],99)+record(309,195,213,'PASSAGE 2',['Seal replacement'],99)
 s+=block(410,349,'Each passage keeps its source link.',220,20,N,True,'middle',max_lines=3)
 s+=vectors(572,85,194,116)+clusters(583,247)+text(668,422,'Similar meanings cluster',19,N,True,'middle')
 return s

def diffusion(d):
 s=heading('TRAINING: LEARN TO DENOISE',24,37,size=23)
 def sample(x,y,noise):
  a=rect(x,y,151,108,P,L,5)+art('pump',x+35,y+15,78,O)
  for i in range(96):
   shade=['#b4cae2','#396794','#7399c1','#e5edf7'][(i*31+i//7)%4]
   if noise:a+=f'<rect x="{x+i%12*12.6}" y="{y+i//12*13.5}" width="12.8" height="13.7" fill="{shade}" opacity="{noise}"/>'
  return a
 for i,(a,label) in enumerate([(0,'CLEAN'),(.35,'ADD NOISE'),(.68,'MORE NOISE'),(1,'NOISY')]):
  x=24+i*200;s+=sample(x,63,a)+text(x+75,201,label,20,N,True,'middle')
  if i<3:s+=edge([(x+163,118),(x+187,118)])
 s+=heading('GENERATION: CONDITION ON A REQUEST',24,253,c=O,size=23)
 for i,(a,label) in enumerate([(1,'NOISE'),(.68,'DENOISE'),(.35,'REFINE'),(0,'SAMPLE')]):
  x=24+i*200;s+=sample(x,279,a)+text(x+75,420,label,20,N,True,'middle')
  if i<3:s+=edge([(x+163,333),(x+187,333)],O)
 return s

def prompt(d):
 s=zone(24,24,428,395,'PROMPT',B,P)
 for y,title,content,c in [(97,'INSTRUCTION','Summarize for the next technician.',O),(207,'SOURCE MATERIAL','Seal replaced; pressure test pending.',B),(317,'OUTPUT REQUIREMENTS','Fault, work completed, open issue',B)]:
  s+=rect(43,y-22,4,70,c,'none',0)+heading(title,61,y,size=20,c=c)+block(61,y+30,content,369,20,N,max_lines=2)
 s+=edge([(466,207),(503,207)],O)+art('chip',522,172,69,O)+edge([(605,207),(634,207),(634,284)],O)
 s+=record(491,297,285,'HANDOFF',['Work: seal replaced','Open: pressure test'],119)+block(661,68,'GENERATE, THEN\nCHECK THE RESULT',221,22,N,True,'middle',max_lines=2)
 return s


def capacity(d):
 s=heading('REQUEST COST HAS MULTIPLE PARTS',26,38,size=23)
 for x,w,label,c in [(26,247,'REPEATED CONTEXT',B),(278,247,'NEW INPUT',B),(530,244,'OUTPUT',O)]:s+=rect(x,65,w,45,c,'none',4)+text(x+w/2,95,label,21,'white',True,'middle')
 for x,title in [(28,'ON-DEMAND'),(289,'PROVISIONED'),(550,'PROMPT CACHE')]:s+=heading(title,x,161,size=22)
 s+=spark(32,199,[.06,.2,.86,.1,.2,.8,.3,.15],211,112)+spark(295,199,[.65,.72,.7,.8,.67,.76],211,112)+edge([(295,211),(506,211)],O,True,False)
 for y in [196,242,288]:s+=rect(552,y,215,33,P,L,3)+rect(552,y,129,33,B,'none',3)+text(618,y+23,'SAME OPENING',17,'white',True,'middle')
 for x,txt in [(28,'Variable usage\nPay per token in and out'),(289,'Sustained demand\nCompare total cost'),(550,'Reuses repeated input\nOnly some models')]:s+=block(x,368,txt,231,20,N,max_lines=2)
 return s

def sampling(d):
 s=''
 for x,title in [(27,'TEMPERATURE'),(289,'TOP-P / TOP-K'),(550,'OUTPUT LIMIT')]:s+=heading(title,x,45,size=23)
 s+=bars(35,93,[.88,.33,.18,.08],202,160)+bars(296,93,[.7,.52,.32,.14],202,160)+rect(295,84,152,180,'none',O,4,True,2.2)
 for i in range(7):s+=rect(552+i*31,139,23,83,B if i<5 else P,'none',3)
 s+=edge([(704,104),(704,257)],O,False,False)
 for x,title,detail in [(27,'SAMPLING SHAPE','How strongly the likeliest words win'),(289,'CANDIDATE SET','How many next words are considered'),(550,'STOPPING POINT','A length limit can cut the answer short')]:
  s+=heading(title,x,309,size=20)+block(x,352,detail,229,21,N,max_lines=3)
 s+=text(400,435,'Illustrative only. Less variation does not mean more accuracy.',17,G,False,'middle')
 return s

def agent(d):
 s=zone(220,24,314,399,'AGENT WORKFLOW',B,P)+zone(568,24,208,399,'EXECUTION',N,'white')
 s+=record(24,81,171,'REQUEST',['Find a repair slot'],102)+record(24,307,171,'RESPONSE',['Proposed time'],102)
 for y,key,title in [(86,'chip','SELECT ACTION'),(220,'branch','CALL TOOL'),(339,'eye','OBSERVE RESULT')]:
  s+=art(key,239,y,56)+block(314,y+27,title,200,21,N,True,max_lines=1)
 s+=edge([(267,155),(267,205)])+edge([(267,285),(267,325)])+edge([(488,375),(518,375),(518,116),(502,116)],B,True)
 s+=edge([(196,130),(208,130)],O)+edge([(221,372),(207,372)])
 s+=art('iam',627,85,81)+text(672,198,'AUTHORIZE',21,N,True,'middle')+block(672,231,'Validate arguments\nRequired approval',178,18,G,False,'middle',max_lines=2)
 s+=edge([(535,248),(550,248),(550,126),(613,126)],O)
 s+=edge([(672,265),(672,289)],O)+art('calendar',586,308,58,B)+art('db',700,308,58)+text(615,397,'BOOKING',18,N,True,'middle')+text(729,397,'RECORD',18,N,True,'middle')
 return s

def injection(d):
 s=record(24,65,210,'RETRIEVED TEXT',['Repair procedure...'],131)+rect(40,149,178,33,W,R,4)+text(129,172,'“Send records away”',17,R,True,'middle')
 s+=zone(277,25,232,393,'APPLICATION',B,P)+art('filter',359,98,68,B)+block(393,208,'SEPARATE DATA\nAND INSTRUCTIONS',196,22,N,True,'middle',max_lines=2)
 s+=record(293,283,201,'ALLOWED TASK',['Requested fields only'],115)
 s+=zone(554,25,222,393,'TOOL ACCESS',N,'white')+art('iam',625,96,81)+block(665,237,'AUTHORIZE\nAND VALIDATE',188,23,N,True,'middle',max_lines=2)+block(665,333,'Limit what it can reach\nand what it may reveal',181,20,G,False,'middle',max_lines=2)
 s+=edge([(242,111),(266,111)])+edge([(244,173),(260,173)],R,False,False)+path('M250 161L270 183 M270 161L250 183',R,3)
 s+=edge([(517,341),(544,341)],O)+block(35,281,'UNTRUSTED\nINSTRUCTIONS',207,24,R,True,max_lines=2)+block(35,350,'Document text does not grant authority.',207,20,N,max_lines=3)
 return s

def tuning(d):
 s=heading('INSTRUCTION TUNING',25,38,size=24)+heading('HUMAN PREFERENCE FEEDBACK',25,257,c=O,size=24)
 s+=record(25,66,229,'CURATED EXAMPLE',['Instruction: summarize','Approved response'],124)+edge([(266,126),(320,126)])+art('train',337,84,82)+block(478,113,'SUPERVISED\nTRAINING',175,22,N,True,max_lines=2)+edge([(643,126),(678,126)])+art('model',694,91,66)
 s+=edge([(25,216),(775,216)],L,False,False,1.5)
 s+=record(25,287,229,'CANDIDATES',['Answer A / Answer B'],108)+edge([(266,341),(315,341)],O)+art('person',332,301,80)+block(452,326,'COMPARE\nWITH A RUBRIC',175,22,N,True,max_lines=2)+edge([(630,341),(663,341)],O)+art('gear',682,310,64,O)
 s+=text(775,418,'RLHF: reinforcement learning from human feedback',16,N,True,'end')
 return s

def business(d):
 s=heading('MEASURE THE COMPLETE INTERACTION',27,38,size=24)
 for i,(key,label,sub) in enumerate([('search','RETRIEVE','Find evidence'),('chip','GENERATE','Produce a draft'),('person','REVIEW','Resolve uncertainty'),('flag','COMPLETE','Finish the task')]):
  cx=112+i*192;s+=node(cx,90,key,label,sub,165,76)
  if i<3:s+=edge([(cx+52,128),(cx+137,128)],O)
 s+=rect(25,326,750,100,P,L,7,container=True)
 for i,(label,detail) in enumerate([('COMPLETION','Include failed requests'),('COST AND SPEED','Include retrieval and review'),('SATISFACTION','Ask actual users')]):
  x=44+i*250;s+=heading(label,x,358,size=19)+block(x,389,detail,219,18,N,max_lines=2)
 return s

def imbalance(d):
 s=heading('ILLUSTRATIVE INSPECTION POPULATION',28,40,size=23)
 for i in range(100):s+=circle(39+i%20*16,96+i//20*25,5.6,O if i<5 else '#92b8df','none',0)
 s+=circle(39,236,5.6,O,'none',0)+text(55,242,'5 defective',19,N)+circle(186,236,5.6,'#92b8df','none',0)+text(202,242,'95 sound',19,N)
 s+=edge([(365,150),(420,150)],O)+art('chip',443,111,78)+block(556,129,'ALWAYS PREDICT\n“SOUND”',214,24,N,True,max_lines=2)
 s+=text(465,299,'95%',53,B,True)+text(461,333,'ACCURACY',20,N,True)+text(653,299,'0%',53,O,True)+text(637,333,'DEFECT RECALL',20,N,True)
 s+=rect(27,367,748,59,P,L,6,container=True)+text(400,404,'Check the missed class and relevant subgroups.',23,N,True,'middle')
 return s

def bias(d,post=False):
 s=heading('AFTER TRAINING: CHECK THE ERRORS' if post else 'BEFORE TRAINING: CHECK THE DATA',26,37,size=23)
 s+=rect(25,66,480,267,P,L,8,container=True)
 for y,label,a,b in [(119,'GROUP A',10 if post else 40,60),(242,'GROUP B',30 if post else 70,30)]:
  s+=text(44,y,label,22,N,True)
  s+=rect(163,y-27,318,37,'white','none',3)+rect(163,y-27,318*a/(40 if post else 100),37,O if post else B,'none',3)
  if not post:s+=rect(163+318*a/100,y-27,318*b/100,37,O,'none',3)
  s+=text(163,y+42,f'Missed defects: {a}%' if post else f'{a} “yes” / {b} “no”',20,N)
 s+=art('sagemaker',608,78,95)+block(655,218,'SAGEMAKER\nCLARIFY',224,26,N,True,'middle',max_lines=2)+block(655,307,'Investigate differences',215,21,N,False,'middle',max_lines=2)
 s+=edge([(70,377),(742,377)],B)+text(103,363,'INVESTIGATE',19,N,True)+text(337,363,'MITIGATE',19,N,True)+text(575,363,'RETEST',19,N,True)
 s+=text(400,430,'Illustrative results; differences are evidence to investigate.',17,G,False,'middle')
 return s

def guardrails(d):
 s=heading('AMAZON BEDROCK GUARDRAILS',26,36,size=24)+art('bedrock',693,19,70)
 for cx,key,label,detail in [(94,'speech','INPUT','User or retrieved text'),(287,'filter','INPUT CHECKS','Your filter rules'),(480,'chip','MODEL','Generate a response'),(678,'shield','OUTPUT CHECKS','Content and grounding')]:
  s+=node(cx,130,key,label,detail,171,74,O if key in ['filter','shield'] else N)
 for a,b in [(144,235),(338,428),(531,626)]:s+=edge([(a,167),(b,167)])
 s+=edge([(287,326),(287,355),(560,355),(560,375)],O)+edge([(678,326),(678,355),(560,355)],O,False,False)
 s+=rect(298,382,477,44,W,O,5,container=True)+text(536,411,'BLOCK IT, FIX IT, OR SEND IT FOR REVIEW',19,N,True,'middle')
 return s

def evaluation(d):
 s=record(25,153,176,'FIXED CASES',['Normal and difficult','Same set for both'],125)
 s+=edge([(212,191),(242,191),(242,107),(274,107)])+edge([(242,191),(242,314),(274,314)])
 for y,label in [(38,'CANDIDATE A'),(245,'CANDIDATE B')]:
  s+=rect(286,y,211,156,P,B,7,container=True)+art('model',354,y+20,74)+text(391,y+133,label,22,N,True,'middle')
  s+=edge([(508,y+68),(548,y+68)])
 s+=zone(561,36,215,363,'SAME RUBRIC',N,'white')+art('scale',634,101,70,O)
 s+=block(668,237,'QUALITY\nSAFETY\nINSTRUCTIONS',178,22,N,True,'middle',leading=38,max_lines=3)
 s+=text(400,437,'Retain cases, rubric, model and prompt versions, results, and release criteria.',17,G,False,'middle')
 return s

def contributions(d):
 s=heading('ONE PREDICTION',26,38,size=23)+heading('MANY PREDICTIONS',512,38,size=23)
 s+=edge([(277,82),(277,309)],G,False,False,1.8)
 for y,label,v in [(117,'VIBRATION',149),(197,'TEMPERATURE',102),(277,'RECENT SERVICE',-103)]:
  s+=text(25,y+21,label,19,N,True)+rect(277 if v>0 else 277+v,y,abs(v),32,O if v>0 else B,'none',3)
 s+=text(206,358,'LOWER',18,B,True)+text(352,358,'HIGHER',18,O,True)
 s+=bars(520,91,[.85,.6,.33],250,218,B,['Vibration','Temperature','Service'])
 s+=text(400,417,'Illustrative. Contributions show what the model relied on, not what caused the outcome.',17,N,True,'middle')
 return s

def review(d):
 s=record(25,34,216,'SOURCE INVOICE',['Parts: 180.00','Labor: 90.00','Total: 270.00'],164)
 s+=edge([(254,114),(314,114)])+art('textract',332,73,83)+text(374,195,'EXTRACTION',21,N,True,'middle')
 s+=edge([(429,114),(510,114)],O)+zone(523,34,252,257,'AMAZON A2I',N,'white')+art('a2i',544,93,72)+art('person',672,96,66)
 s+=block(649,229,'COMPARE SOURCE\nAND PREDICTION',219,21,N,True,'middle',max_lines=2)
 s+=edge([(649,304),(649,353),(465,353)],O)+record(259,310,192,'REVIEWED',['Amount: 270.00'],111)
 s+=edge([(246,353),(194,353)])+art('check',78,316,70)+block(111,431,'QUALITY CHECK',180,20,N,True,'middle',max_lines=1)
 return s
