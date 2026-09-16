from canvas import *

def s3access(d):
 s=heading('TEST ALLOWED AND DENIED ACCESS',26,39,size=24)+art('internet',36,95,80)+text(77,214,'PUBLIC',22,N,True,'middle')
 s+=edge([(132,137),(240,137)],R,False,False)+path('M199 120L230 154 M230 120L199 154',R,4)
 s+=art('server',36,299,80)+block(77,415,'WORKLOAD',123,21,N,True,'middle',max_lines=1)+edge([(132,342),(240,342)])
 s+=zone(253,65,302,360,'ACCESS CONTROLS',B,P)+art('iam',364,120,84)+block(404,246,'IDENTITY AND\nRESOURCE POLICIES',265,24,N,True,'middle',max_lines=2)
 s+=block(404,346,'Block public access\nLimit internal permissions',258,20,G,False,'middle',max_lines=2)
 s+=edge([(568,245),(621,245)])+art('s3',638,202,86)+block(682,332,'TRAINING DATA\nIN AMAZON S3',197,23,N,True,'middle',max_lines=2)
 return s

def encryption(d):
 s=heading('ENCRYPTION AT REST',26,38,size=24)
 for cx,key,label in [(94,'doc','DATA'),(314,'lock','ENCRYPT'),(653,'s3','ENCRYPTED FILE')]:s+=art(key,cx-41,88,82)+text(cx,213,label,22,N,True,'middle')
 s+=edge([(149,129),(258,129)],O)+edge([(370,129),(594,129)])
 s+=text(480,113,'Service encryption',19,N,False,'middle')
 s+=zone(25,268,751,157,'AUTHORIZED READ PATH',N,P)
 s+=art('kms',46,326,63)+text(132,362,'KEY ACCESS',21,N,True)+edge([(277,357),(316,357)])
 s+=art('iam',336,326,63)+text(423,362,'DATA ACCESS',21,N,True)+edge([(570,357),(609,357)])+block(691,353,'CAN READ\nTHE DATA',131,21,N,True,'middle',max_lines=2)
 return s

def kms(d):
 s=art('server',39,162,82)+block(80,299,'WORKLOAD\nIDENTITY',128,23,N,True,'middle',max_lines=2)
 for y,key,title,question in [(25,'s3','DATA PERMISSION','May read this object?'),(248,'kms','KEY PERMISSION','May use this key?')]:
  s+=zone(242,y,301,178,title,B,P)+art(key,263,y+74,73)+block(360,y+109,question,163,21,N,True,max_lines=2)
 s+=edge([(137,202),(175,202),(175,117),(229,117)])+edge([(175,202),(175,337),(229,337)],O)
 s+=edge([(555,116),(580,116),(580,225),(631,225)])+edge([(555,337),(580,337),(580,225)],O,False,False)
 s+=art('lock',655,187,75)+block(689,322,'ENCRYPTED\nDATA ACCESS',174,23,N,True,'middle',max_lines=2)
 return s

def audit(d):
 s=heading('ACCOUNT AND API EVIDENCE',25,38,size=24)+art('cloudtrail',35,83,87)+block(162,108,'AWS\nCLOUDTRAIL',162,24,N,True,max_lines=2)
 s+=edge([(335,126),(393,126)])+record(414,69,361,'EVENT RECORD',['Who did what, to which resource, when','Only the events you turn on'],137)
 s+=edge([(26,235),(775,235)],L,False,False,1.6)
 s+=heading('APPLICATION AND MODEL EVIDENCE',25,276,c=O,size=24)+art('logs',35,316,87)+block(162,339,'APPLICATION\nLOGGING',172,24,N,True,max_lines=2)
 s+=edge([(345,360),(393,360)],O)+record(414,303,361,'INTERACTION RECORD',['Prompt • output • tool decision','Protect sensitive content'],123)
 return s


def privatelink(d):
 s=zone(23,24,465,399,'CUSTOMER VPC',B,'white')+zone(40,90,430,195,'PRIVATE APPLICATION PATH',B,P)
 s+=art('app',67,146,74)+text(104,257,'APPLICATION',20,N,True,'middle')
 s+=art('endpoint',338,147,73)+block(372,258,'INTERFACE ENDPOINT',180,19,N,True,'middle',max_lines=1)
 s+=edge([(156,185),(320,185)],B)+text(237,167,'Private request',19,N,False,'middle')
 s+=zone(568,24,209,399,'AWS SERVICE',N,'white')+art('sagemaker',633,116,80)+block(672,246,'SAGEMAKER\nAPI / RUNTIME',184,23,N,True,'middle',max_lines=2)
 s+=edge([(422,184),(615,184)],O)+text(527,163,'PrivateLink',16,O,True,'middle')
 s+=edge([(673,301),(673,320)])+art('model',645,330,54)+text(672,411,'HOSTED MODEL',18,N,True,'middle')
 s+=art('s3',41,329,55)+block(119,349,'S3 uses its own gateway endpoint',341,20,N,True,max_lines=1)+text(119,389,'Logs use their own endpoint',18,G)
 return s

def versions(d):
 s=zone(249,24,310,399,'RELEASE MANIFEST',B,P)
 for i,(a,b) in enumerate([('DATA','snapshot version 4'),('PREPARATION','recipe version 2'),('MODEL','build 7'),('PROMPT','template version 3'),('APPLICATION','code and libraries')]):
  y=108+i*65;s+=text(265,y,a,18,B,True)+text(265,y+28,b,21,N,True)
 for x,y,key,label in [(28,59,'db','SOURCES'),(28,288,'gear','TRANSFORMS'),(605,59,'model','MODEL'),(605,288,'code','APP CONFIG')]:
  s+=art(key,x+35,y,80)+text(x+75,y+115,label,21,N,True,'middle')
 s+=edge([(151,98),(234,98)])+edge([(151,331),(234,331)])+edge([(623,98),(574,98)])+edge([(623,331),(574,331)])
 return s

def lineage(d):
 s=art('s3',27,166,78)+block(68,303,'RAW DATA',129,21,N,True,'middle',max_lines=1)+edge([(120,205),(211,205)],O)
 s+=art('gear',228,166,78)+block(267,303,'PREPARATION',161,21,N,True,'middle',max_lines=1)
 s+=edge([(321,205),(351,205),(351,85),(401,85)])+edge([(351,205),(351,328),(401,328)])
 for y,run,model in [(44,'TRAINING RUN 1','MODEL 1'),(287,'TRAINING RUN 2','MODEL 2')]:
  s+=art('train',418,y,76)+text(456,y+112,run,21,N,True,'middle')+edge([(509,y+38),(559,y+38)])+art('model',576,y,76)+text(614,y+112,model,21,N,True,'middle')
 s+=edge([(667,83),(745,83),(745,171)])+edge([(667,326),(745,326),(745,263)])+art('flag',711,183,61,O)
 return s

def risk(d):
 s=heading('IMPACT →',161,40,size=21)+heading('LIKELIHOOD',25,79,size=18)
 colors=[[W,'#f1c4a6','#e29a87'],[P,W,'#f1c4a6'],[P,P,W]]
 for r in range(3):
  for c in range(3):s+=rect(152+c*108,80+r*99,103,94,colors[r][c],'white',4,sw=1)
 for i,a in enumerate(['HIGH','MEDIUM','LOW']):s+=text(35,141+i*99,a,18,N,True)
 for i,a in enumerate(['LOW','MEDIUM','HIGH']):s+=text(200+i*108,410,a,18,N,True,'middle')
 s+=circle(418,123,21,O,'none',0)+text(418,131,'A',24,'white',True,'middle')+circle(202,327,21,B,'none',0)+text(202,335,'B',24,'white',True,'middle')
 s+=block(508,73,'A: UNAUTHORIZED\nACTION',266,24,N,True,max_lines=2)+block(508,158,'Potentially high impact\nRestrict access and approve actions.',261,20,N,max_lines=3)
 s+=block(508,287,'B: WRONG\nINTERNAL DRAFT',266,24,N,True,max_lines=2)+block(508,365,'Verify against evidence before use.',263,20,N,max_lines=2)
 return s

def residency(d):
 s=zone(24,24,356,276,'WHERE DATA IS PROCESSED',B,P)+zone(428,24,347,276,'WHERE DATA ALSO FLOWS',B,'white')
 for x,key,label in [(45,'db','DATA'),(266,'chip','MODEL'),(452,'tools','TOOLS'),(677,'logs','LOGS')]:s+=art(key,x,120,69)+text(x+34,250,label,21,N,True,'middle')
 s+=edge([(128,153),(251,153)])+edge([(349,153),(438,153)],O)+edge([(535,153),(663,153)])
 s+=art('calendar',37,349,64,O)+block(128,369,'KEEP DATA ONLY\nAS LONG AS NEEDED',263,23,N,True,max_lines=2)+edge([(415,381),(447,381)],O)
 s+=art('check',467,350,62)+block(552,369,'CONFIRM ARCHIVED\nOR DELETED',222,23,N,True,max_lines=2)
 return s

def config(d):
 s=art('config',28,28,85)+heading('AWS CONFIG',146,62,size=27)+text(146,101,'Configuration history and rule evaluation',22,N)
 s+=edge([(71,225),(729,225)])
 for x,upper,lower,c in [(87,'EXPECTED','Matches the rule',B),(382,'CHANGED','A setting differs',O),(705,'CORRECTED','Reviewed and fixed',B)]:
  s+=circle(x,225,12,c,'white',2)+text(x,188,upper,22,N,True,'middle')+block(x,275,lower,167,20,N,False,'middle',max_lines=2)
 s+=rect(25,349,750,75,P,L,7,container=True)+text(400,380,'DESIRED STATE, THEN A FINDING, THEN A FIX',24,N,True,'middle')+text(400,409,'Resource configuration checks do not evaluate generated answers.',18,G,False,'middle')
 return s


def scopes(d):
 s=heading('AI SECURITY SCOPE',24,37,size=25)+heading('CONTROL FOCUS',425,37,size=22)
 rows=[('1','CONSUMER AI APP','client','Acceptable use and data sharing'),('2','ENTERPRISE AI APP','app','Access rules and provider checks'),('3','PRETRAINED MODEL APP','model','Prompts, retrieval, tools, behavior'),('4','FINE-TUNED MODEL','train','Customization data and model controls'),('5','SELF-TRAINED MODEL','server','Training pipeline and infrastructure')]
 for i,(n,a,key,b) in enumerate(rows):
  y=74+i*70;s+=circle(48,y+24,20,O if i>2 else B,'none',0)+text(48,y+32,n,23,'white',True,'middle')+block(85,y+21,a,234,21,N,True,max_lines=2)+art(key,347,y+1,46)+block(425,y+21,b,345,20,G,max_lines=2)
  if i<4:s+=edge([(85,y+59),(772,y+59)],L,False,False,1.2)
 return s

def ownership(d):
 s=heading('COMPONENT',31,41,size=22)+heading('OWNER',335,41,size=22)+heading('EVIDENCE',582,41,size=22)
 rows=[('app','Application + prompts','Application team','Test results and change log'),('db','Retrieval data','Data owner','Origin and access records'),('sagemaker','Managed model','Provider / customer','Provider checks and settings'),('tools','Tools + operation','Operating team','Permissions and incident records')]
 for i,(key,a,b,c) in enumerate(rows):
  y=77+i*89;s+=art(key,31,y,61)+block(111,y+27,a,176,20,N,True,max_lines=2)+block(337,y+27,b,200,20,N,max_lines=2)+block(585,y+27,c,190,19,N,max_lines=2)
  s+=edge([(300,y+28),(324,y+28)])+edge([(547,y+28),(570,y+28)])
 return s

def grounding(d):
 s=record(24,37,255,'GENERATED CLAIM',['“The repair is complete.”','Source: service note [1]'],148)+record(487,37,288,'TRUSTED NOTE [1]',['Seal replaced;','pressure test pending.'],148)
 s+=edge([(293,113),(346,113)],O)+art('search',363,76,69,O)+edge([(448,113),(473,113)])
 s+=heading('VALIDATE',351,224,size=23)+text(400,270,'Claims • calculations • required fields',21,N,False,'middle')
 s+=edge([(401,287),(401,320),(197,320),(197,345)])+edge([(401,320),(613,320),(613,345)],O)
 s+=rect(24,362,347,65,P,B,6,container=True)+block(197,389,'SUPPORTED\nAnswer with evidence',303,20,N,True,'middle',max_lines=2)
 s+=rect(422,362,353,65,W,O,6,container=True)+block(598,389,'MISSING OR CONFLICTING\nClarify or seek review',321,20,N,True,'middle',max_lines=2)
 return s

def domains(d):
 s='';rows=[('AI / ML FUNDAMENTALS',20),('GENERATIVE AI',24),('FM APPLICATIONS',28),('RESPONSIBLE AI',14),('SECURITY + GOVERNANCE',14)]
 for i,(label,n) in enumerate(rows):
  y=27+i*83;s+=text(26,y+36,label,23,N,True)+rect(337,y+9,336,41,P,'none',4)+rect(337,y+9,n*12,41,O if n==28 else B,'none',4)+text(704,y+40,f'{n}%',30,N,True)
 return s
