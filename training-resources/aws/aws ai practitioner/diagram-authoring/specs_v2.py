"""Specs for the aif-v2 diagrams: one entry per slide id. 'desc' becomes the SVG description for screen readers."""
from canvas import B, O, T, R, N
D = {}
def add(id, kind, title, desc, **kw): D[id] = dict(kind=kind, title=title, desc=desc, **kw)

# ------------------------------------------------------------------ Module 1, task 1.1
add('m1-s2', 'nested', 'AI, machine learning, deep learning, and generative AI',
    'Generative AI sits inside deep learning, which sits inside machine learning, which is one part of AI. A list shows what AI systems do.',
    heading='EACH FIELD SITS INSIDE A BROADER ONE',
    inner='Creates new text, images, audio, and code',
    right_title='What AI systems do',
    right=['Hold a natural conversation', 'Create new content', 'Work through complex problems', 'Take on repetitive work', 'Support faster, better-informed decisions'])
add('m1-s3', 'tiles', 'Where AI adds value',
    'Five areas where AI adds value, each with two examples.',
    heading='FIVE AREAS WHERE AI ADDS VALUE', cols=3,
    items=[('person', 'Health', ['Prioritize scans for review', 'Anticipate patient demand']),
           ('eye', 'Quality', ['Spot damaged products', 'Predict machine service']),
           ('speech', 'Customer experience', ['Self-service answers', 'Relevant recommendations']),
           ('chart', 'Decisions', ['Forecast demand', 'Flag suspicious payments']),
           ('gear', 'Productivity', ['Route documents', 'Target campaigns'])])
add('m1-s4', 'forecast', 'Learning patterns to forecast',
    'A line of known weekly values continues into a forecast with an expected value and a widening range of likely outcomes.',
    heading='KNOWN HISTORY, THEN A RANGE OF LIKELY OUTCOMES', ylabel='Weekly parcel volume')
add('m1-s5', 'wave', 'Detecting unusual behavior',
    'A regular pattern of server errors stays within a normal band except for one sudden spike, which is circled as an anomaly.',
    heading='ONE POINT BREAKS THE LEARNED PATTERN', xlabel='Time (hours)', ylabel='Server errors per minute',
    foot='An anomaly starts an investigation; it is not proof that something is wrong.')
add('m1-s6', 'chain', 'Finding defects with computer vision',
    'A camera captures each item, a vision model marks a suspected defect, clear results continue, and uncertain cases go to an inspector.',
    heading='INSPECT EVERY ITEM, ESCALATE THE UNCERTAIN ONES',
    steps=[('photo', 'Capture', 'A camera photographs each item on the line'),
           ('eye', 'Analyze', 'A vision model looks for scratches and dents'),
           ('flag', 'Mark the defect', 'The suspected area is outlined with a confidence score'),
           ('person', 'Decide', 'Clear passes continue; uncertain cases go to an inspector')],
    note='Benefits: consistent speed, fewer missed defects, and a record of every decision.')
add('m1-s7', 'chat', 'Translating a support conversation',
    'A customer writes in Portuguese and an agent reads English. Amazon Translate converts each message in both directions.',
    left_name='Customer', right_name='Support agent', left_lang='Portuguese', right_lang='English',
    rows=[('Meu pedido chegou danificado. Posso trocar?', 'My order arrived damaged. Can I exchange it?', 64, 'r'),
          ('Sim. A substituição será enviada hoje.', 'Yes. The replacement ships today.', 238, 'l')])
add('m1-s8', 'slots', 'Intents, utterances, and slots',
    'A customer request is recognized as an intent, its details fill slots, and fulfillment completes the booking.',
    heading='FROM WORDS TO A COMPLETED ACTION',
    utterance='"Can someone look at my brakes on Friday afternoon?"',
    intent='ScheduleRepair', slots=['Repair type: brakes', 'Day: Friday', 'Time: afternoon', 'Shop: ask the customer'],
    fulfil=['Book the slot', 'Confirm by text', '"You are booked for 2 PM."'])
add('m1-s10', 'two_lane', 'Training and inference',
    'Training turns known examples into a model with an algorithm. Inference sends new data through that model to produce a prediction.',
    lanes=[('Training', [('db', 'Known examples'), ('gear', 'Algorithm'), ('chip', 'Trained model')], B),
           ('Inference', [('doc', 'New data'), ('chip', 'Trained model'), ('flag', 'Prediction')], O)],
    lane_notes=['Learns patterns from data with known outcomes', 'Applies what was learned; the model does not change'])
add('m1-s11', 'table_panel', 'Structured data',
    'A table of repair orders with fixed columns, and three AWS services that store structured data.',
    heading='ROWS AND COLUMNS WITH A FIXED SCHEMA',
    columns=['ORDER', 'SHOP', 'PART', 'QTY', 'PRICE', 'DATE'],
    rows=[['5101', '12', 'Brake pads', '2', '18.50', '2026-03-02'], ['5102', '12', 'Inner tube', '1', '7.25', '2026-03-02'], ['5103', '07', 'Chain', '1', '24.00', '2026-03-03'], ['5104', '31', 'Saddle', '1', '39.90', '2026-03-03']],
    widths=[110, 90, 170, 90, 120, 172],
    services_title='Common AWS storage',
    services=[('db', 'Amazon RDS', 'Relational database for transactions'), ('db', 'Amazon Redshift', 'Data warehouse for large-scale analytics'), ('s3', 'Amazon S3', 'Object storage for CSV or Parquet files')])
add('m1-s12', 'json_panel', 'Semi-structured data',
    'JSON customer records with different sets of fields, and AWS services that store such data.',
    heading='NAMED FIELDS THAT VARY FROM RECORD TO RECORD',
    code=['[', '  { "id": "C-17",', '    "name": "Ana",', '    "email": "ana@example.com" },', '  { "id": "C-18",', '    "name": "Ravi",', '    "phone": "555-0142",', '    "plan": "commuter" },', '  { "id": "C-19",', '    "email": "lee@example.com" }', ']'],
    notes=['Each record names its own fields', 'Some records have fields others lack', 'New fields need no table redesign'],
    services=[('db', 'Amazon DynamoDB'), ('db', 'Amazon DocumentDB'), ('s3', 'Amazon S3')])
add('m1-s13', 'fanin', 'Unstructured data',
    'Documents, photos, audio, and video flow into Amazon S3, where they can be used to train models that learn from unstructured content.',
    heading='CONTENT WITHOUT A PREDEFINED MODEL',
    sources=[('doc', 'Documents and email'), ('photo', 'Photographs'), ('speech', 'Audio recordings'), ('app', 'Video and posts')],
    center_icon='s3', center='Amazon S3', center_detail='Objects of any type and size',
    outputs=[('chip', 'Image models', 'Learn from photos'), ('model', 'Language models', 'Learn from text and audio')])
add('m1-s14', 'timeseries', 'Time-series data',
    'Application metrics recorded each minute in time order, with a chart of requests per second over time.',
    heading='MEASUREMENTS IN TIME ORDER',
    rows=[['09:00', '41', '820'], ['09:01', '44', '905'], ['09:02', '39', '760'], ['09:03', '52', '1,140'], ['...', '...', '...'], ['17:59', '36', '610']],
    notes=['Reveals trends, daily cycles, and sudden changes', 'Test on later periods than the training data', 'Store long histories in Amazon S3'])
add('m1-s15', 'linefit', 'Algorithm, parameters, and model',
    'Delivery records plotted by distance and time, with a fitted straight line. Training learns the slope and intercept.',
    xlabel='Distance (km)', ylabel='Delivery time (minutes)', formula='y = m·x + b',
    params=['m: minutes added per kilometer', 'b: fixed time for loading and handover', 'Training picks m and b that keep the line closest to the points'])
add('m1-s16', 'labeled', 'Supervised learning with labeled examples',
    'Photographs labeled damaged or intact train a model, which then labels a new photograph.',
    examples=[('DAMAGED', False), ('INTACT', True), ('INTACT', True), ('DAMAGED', False), ('INTACT', True), ('DAMAGED', False)],
    prediction='DAMAGED: 0.91',
    note='Labels come from people, using SageMaker Ground Truth or Amazon Mechanical Turk.')
add('m1-s17', 'clusters2', 'Clustering unlabeled data',
    'Unlabeled points on the left are grouped into four colored clusters on the right.',
    names=['Weekday commuters', 'Weekend riders', 'Tourists', 'Occasional renters'],
    note='The algorithm finds the groups; people decide what they mean.')
add('m1-s18', 'outliers', 'Flagging outliers without labels',
    'Freezer temperature readings cluster in a normal region; three readings far outside it are marked as outliers.',
    xlabel='Hour of day', ylabel='Freezer temperature',
    normal='Where most readings fall, learned without any labels',
    outlier='Far from the normal region, for example a door left open or a failing compressor')
add('m1-s19', 'rl', 'Reinforcement learning loop',
    'An agent acts on its environment and receives a new state and a reward, repeating to learn a policy.',
    agent='A warehouse robot', env='Aisles, shelves, other robots', action='Choose a route', reward='Points for fast, collision-free delivery',
    center='Repeat many times to learn a policy that earns the most total reward',
    foot='Early on the agent explores new routes; later it exploits the routes that work best.')
add('m1-s20', 'fit3', 'Underfitting, good fit, and overfitting',
    'Three charts show a line that is too simple, a curve that follows the trend, and a curve that passes through every point.')
add('m1-s21', 'endpoint', 'Real-time inference',
    'An application sends a request to a persistent endpoint, where inference code loads the model artifacts and returns a prediction.',
    traits=['Low latency', 'Steady throughput', 'Billed while running'],
    foot='Use it when a person or system is waiting for the answer, such as a payment check.')
add('m1-s22', 'chain', 'Batch inference',
    'Input files in Amazon S3 are processed together by a batch job, results are written to another S3 location, and reports read them.',
    heading='SCORE A LARGE DATASET IN ONE RUN',
    steps=[('s3', 'Input data', 'All accounts to score, stored in Amazon S3'), ('train', 'Batch job', 'The model processes the records in bulk'), ('s3', 'Results', 'Predictions written to an output location'), ('chart', 'Use', 'Reports and downstream systems')],
    note='No endpoint sits idle between runs; results arrive when the job finishes.')
add('m1-s23', 'fairness', 'Checking for bias',
    'Approval rates differ by region, with one region far below the others, and three checks to run before release.',
    chart_title='Approval rate by region', values=[('North', .68), ('Central', .64), ('South', .31)],
    checks=[('Representative data', 'Does training data cover everyone the model serves?'), ('Feature importance', 'Do any inputs stand in for protected traits?'), ('Fairness constraints', 'Should training limit outcome gaps between groups?')],
    foot='Equally qualified applicants should not receive very different outcomes because of where they live.')
add('m1-s24', 'neuralnet', 'A neural network',
    'An input layer, two hidden layers, and an output layer are connected by weighted links.',
    input='Raw values, such as pixel brightness', hidden='Transform the inputs; training adjusts the weight on every connection', output='Scores for each possible answer',
    foot='Deep learning uses many hidden layers to learn features directly from images, audio, and text.')
add('m1-s25', 'cvtasks', 'Classification compared with object detection',
    'Classification gives one label for a whole image. Detection draws a labeled box around each object it finds.',
    left='One label for the whole image, with a confidence score', right='Every object found, located with a box and a label')
add('m1-s28', 'agentloop', 'An agent plans, acts, and observes',
    'An agent receives a goal, plans a step, uses a tool, observes the result, and repeats until the goal is met, within set controls.',
    goal='Goal: rebook a missed delivery', result='Delivery rebooked',
    controls=['Only approved tools', 'Approval for consequential steps', 'Every step logged'],
    example='Look up the order, find open time slots, book one, and send the customer a confirmation.')

# ------------------------------------------------------------------ task 1.2
add('m1-s30', 'cols', 'Three reasons to use AI and ML',
    'Efficiency, solving complex problems, and better decisions, each with examples.',
    heading='WHERE AI AND ML HELP',
    items=[('gear', 'Increase efficiency', ['Automate document sorting', 'Self-service for routine requests']),
           ('search', 'Solve complex problems', ['Detect fraud in fast-moving data', 'Reduce wasted stock']),
           ('chart', 'Make better decisions', ['Forecast demand', 'Quick answers from company information'])],
    note='Often AI assists a person who makes the final decision.')
add('m1-s31', 'checklist', 'When ML is not the right fit',
    'Four questions that point to a simpler alternative to machine learning.',
    heading='CHECK BEFORE CHOOSING ML', left='Ask', right='If yes, consider',
    rows=[('scale', 'Do the costs outweigh the measurable gains?', 'A simpler process or no change'),
          ('book', 'Must every decision be fully explained?', 'A transparent model or explicit rules'),
          ('code', 'Must the answer be exact and repeatable?', 'A conventional program, such as a tax calculation'),
          ('check', 'Do clear rules already work reliably?', 'Keep the rules-based solution')])
add('m1-s32', 'tree', 'Choosing an ML problem type',
    'A tree splits into supervised and unsupervised learning, then into classification, regression, clustering, and anomaly detection.',
    root='What output do you need?',
    branches=[('Supervised learning', 'Training data includes the target'), ('Unsupervised learning', 'No target in the data')],
    leaves=[('Classification', 'A category', 'cls'), ('Regression', 'A number', 'reg'), ('Clustering', 'Groups of similar items', 'clu'), ('Anomaly detection', 'Unusual items', 'ano')])
add('m1-s33', 'classify2', 'Binary and multiclass classification',
    'An email receives a spam probability compared with a threshold. A support ticket receives scores for three teams and goes to the highest.',
    classes=[('Shipping', .74), ('Billing', .18), ('Technical', .08)],
    notes=['Binary: two classes and a probability; the threshold trades missed cases against false alarms', 'Multiclass: three or more classes; the model returns the most likely one'])
add('m1-s34', 'regress3', 'Simple, multiple, and logistic regression',
    'One input predicts a value; several inputs predict a value; logistic regression produces a probability between 0 and 1.',
    examples=['Delivery time from distance', 'House price from several features', 'Chance a customer cancels'],
    notes=['Linear regression predicts a continuous number; logistic regression is used for classification'])
add('m1-s35', 'scenario', 'Customer segmentation with clustering',
    'Rental history attributes go into clustering, which produces customer segments that drive tailored offers.',
    heading='SCENARIO: A BICYCLE RENTAL COMPANY',
    cols=[('Raw customer data', ['Rental frequency', 'Rental length', 'Time of day', 'Bicycle type', 'Home district'], B),
          ('Clustering', ['Finds groups on its own', 'No predefined labels', 'Groups by similarity'], O),
          ('Segments found', ['Daily commuters', 'Weekend riders', 'Occasional visitors'], B),
          ('Business action', ['Commuter pass', 'Weekend bundles', 'Visitor offers'], T)],
    foot='Measure whether retention improves after the offers launch.')
add('m1-s36', 'scenario', 'Card fraud detection with anomaly detection',
    'Payment details feed a model of each cardholder\'s normal behavior; payments far outside it are held for verification.',
    heading='SCENARIO: CARD PAYMENTS',
    cols=[('Payment details', ['Amount', 'Merchant type', 'Time of day', 'Location', 'Device', 'Past spending'], B),
          ('Anomaly detection', ['Learns normal behavior', 'Scores distance from it', 'Needs no fraud labels'], O),
          ('Flagged payments', ['Far outside the usual pattern', 'New fraud schemes included'], R),
          ('Outcome', ['Hold and verify', 'Most purchases flow normally'], T)],
    foot='Fraud tactics change constantly, so labels for new schemes rarely exist.')
add('m1-s37', 'hub', 'Amazon Rekognition capabilities',
    'Amazon Rekognition in the center, linked to face analysis, object and scene labels with custom labels, text detection, and content moderation.',
    center_icon='rekognition', center='Amazon Rekognition',
    items=[('person', 'Faces', 'Compare and analyze faces for identity checks'), ('photo', 'Objects and scenes', 'Labels, plus Custom Labels trained on your images'),
           ('doc', 'Text in images', 'Detect words on signs, labels, and screens'), ('shield', 'Content moderation', 'Flag inappropriate or unsafe content')])
add('m1-s38', 'chain', 'From a scanned letter to insights',
    'A scanned letter goes through Amazon Textract to become text, then through Amazon Comprehend to find phrases, entities, sentiment, and personal data.',
    heading='EXTRACT THE TEXT, THEN UNDERSTAND IT',
    steps=[('doc', 'Scanned letter', 'Image or PDF with print and handwriting'), ('textract', 'Amazon Textract', 'Text, handwriting, layout, forms, tables'), ('docs', 'Extracted text', 'Ready for analysis'), ('comprehend', 'Amazon Comprehend', 'Key phrases, entities, sentiment, PII')],
    accent=[1, 3])
add('m1-s39', 'cols', 'Language and speech services',
    'Amazon Lex, Amazon Transcribe, and Amazon Polly with their main uses and options.',
    items=[('lex', 'Amazon Lex', ['Voice and text chatbots', 'Interactive voice response (IVR)', 'Intents, utterances, slots']),
           ('transcribe', 'Amazon Transcribe', ['Speech to text', 'Batch files or live streams', 'Custom vocabularies and custom language models']),
           ('polly', 'Amazon Polly', ['Text to lifelike speech', 'Spoken prompts for callers'])])
add('m1-s40', 'cols', 'Search, recommendation, and translation',
    'Amazon Kendra, Amazon Personalize, and Amazon Translate with their purposes.',
    items=[('search', 'Amazon Kendra', ['Search company documents', 'Ask in natural language', 'Returns relevant passages']),
           ('personalize', 'Amazon Personalize', ['Recommendations for each customer', 'Learns from interaction history']),
           ('translate', 'Amazon Translate', ['Text between many languages', 'Websites, chats, documents'])])
add('m1-s41', 'chain', 'Scoring online activity for fraud',
    'Online events such as payments and sign-ups receive a fraud risk score in real time or batch, which leads to an approve, review, or block decision.',
    heading='EVENT, RISK SCORE, DECISION',
    steps=[('client', 'Online event', 'Payment, sign-up, login, or review'), ('alert', 'Fraud risk score', 'ML scores the event in real time or in batch'), ('flag', 'Decision', 'Approve, send for review, or block')],
    note='Confirm current service availability in AWS documentation before planning a new project.')
add('m1-s42', 'hub', 'Amazon Bedrock',
    'Amazon Bedrock in the center, linked to foundation models from several providers, customization, RAG, and typical uses.',
    center_icon='bedrock', center='Amazon Bedrock',
    items=[('model', 'Many model providers', 'Foundation models through one API'), ('gear', 'Customize', 'Adapt a model with your own training data'),
           ('search', 'Retrieval (RAG)', 'Supply company information at request time'), ('docs', 'Typical uses', 'Draft, summarize, answer questions, create images')])
add('m1-s43', 'chain', 'The lifecycle in Amazon SageMaker AI',
    'Amazon SageMaker AI supports preparing and labeling data, building and training models, deploying them, and monitoring them.',
    heading='ONE MANAGED SERVICE FOR THE ML LIFECYCLE',
    steps=[('db', 'Prepare', 'Explore, clean, and label data'), ('train', 'Build and train', 'Algorithms, your code, or pretrained models'), ('endpoint', 'Deploy', 'Real-time or batch inference'), ('chart', 'Monitor', 'Track quality in production')],
    note='Amazon SageMaker AI is the service formerly called Amazon SageMaker.')
add('m1-s44', 'two_lane', 'Before and after conversational self-service',
    'A keypad menu leads to many transfers to agents. A Lex bot understands speech and completes routine requests automatically.',
    lanes=[('Before', [('client', 'Keypad menu'), ('alert', 'Caller gives up'), ('person', 'Agent transfer')], R),
           ('After', [('speech', 'Caller speaks'), ('lex', 'Amazon Lex bot'), ('check', 'Request completed')], T)],
    lane_notes=['Rigid menus frustrate callers', 'Natural speech; routine tasks automated'])
add('m1-s45', 'chain', 'Predictive maintenance from sensor data',
    'Sensors stream readings to Amazon CloudWatch and to a model in SageMaker AI, which detects warning patterns so crews act early.',
    heading='SENSE, DETECT, ACT EARLY',
    steps=[('pump', 'Sensors', 'Pressure, temperature, vibration'), ('cloudwatch', 'Amazon CloudWatch', 'Collect metrics and raise alarms'), ('sagemaker', 'SageMaker AI model', 'Detect patterns that come before a failure'), ('person', 'Field crew', 'Respond before a leak or shutdown')],
    note='Outcomes: faster response, earlier leak detection, fewer unplanned shutdowns, safer operations.')
add('m1-s46', 'two_lane', 'Recommendations and a generative trip planner',
    'Traveler history feeds recommended stays. A conversational planner retrieves current listings to ground its suggestions.',
    lanes=[('Recommend', [('person', 'Traveler history'), ('personalize', 'Recommendation model'), ('docs', 'Suggested stays')], B),
           ('Plan', [('speech', 'Trip conversation'), ('search', 'Retrieve listings (RAG)'), ('bedrock', 'Grounded suggestions')], O)],
    lane_notes=['Matches past searches and bookings', 'Generative AI grounded in current listings'])
add('m1-s47', 'chain', 'Visual search',
    'A shopper uploads a photo, a vision model detects objects, similar products are returned, and new labeled images retrain the model.',
    heading='SEARCH BY PICTURE',
    steps=[('photo', 'Upload a photo', 'The shopper shares a picture'), ('eye', 'Detect objects', 'A vision model finds items in it'), ('search', 'Match products', 'Visually similar items are returned'), ('docs', 'Browse and buy', 'The shopper picks a match')],
    loop='New labeled images retrain the model', loop_from=3, loop_to=1, loop_y=372, loop_start=268, loop_end=262)

# ------------------------------------------------------------------ task 1.3
add('m1-s50', 'chain', 'The ML pipeline',
    'Business goal, problem framing, data collection, data preparation, model training and evaluation, deployment, and monitoring, with monitoring feeding back.',
    heading='FROM BUSINESS GOAL TO MONITORED MODEL',
    steps=[('flag', 'Business goal', ''), ('scale', 'Frame the ML problem', ''), ('db', 'Collect data', ''), ('filter', 'Prepare data', 'Clean and engineer features'), ('train', 'Train and evaluate', 'Tune until targets are met'), ('endpoint', 'Deploy and monitor', '')],
    loop='Production results send work back to earlier stages', loop_from=5, loop_to=2, loop_y=360, loop_start=270, loop_end=272)
add('m1-s51', 'cycle', 'The ML lifecycle loop',
    'Six stages in a loop: business goal, problem framing, data processing, model development, deployment, and monitoring.',
    center='Continuous improvement',
    items=[('flag', 'Business goal'), ('scale', 'Problem framing'), ('db', 'Data processing'), ('train', 'Model development'), ('endpoint', 'Deployment'), ('chart', 'Monitoring')])
add('m1-s52', 'phases', 'Defining the problem',
    'First identify the business goal, then frame the ML task with inputs, outputs, metrics, feasibility, and a simple starting point.',
    heading='TWO STEPS BEFORE ANY MODEL',
    items=[('flag', 'Identify the business goal', ['Define success criteria', 'Align the stakeholders', 'Agree how success is measured']),
           ('scale', 'Frame the ML problem', ['Inputs, output, and metrics', 'Check feasibility: data, skills, budget', 'Compare cost with benefit', 'Start with the simplest option'])],
    first_orange=True)
add('m1-s53', 'ladder', 'Use, adapt, or build a model',
    'Three steps of increasing effort and control: call a hosted AI service, adapt a pretrained model, or build a custom model.',
    steps=[('comprehend', 'Use a hosted service', 'Call an API; no training', 'Comprehend, Rekognition'),
           ('bedrock', 'Adapt a model', 'Start pretrained; customize with your data', 'Bedrock, SageMaker JumpStart'),
           ('sagemaker', 'Build a custom model', 'Most control, data, and skill', 'SageMaker AI training')])
add('m1-s54', 'hub', 'Amazon SageMaker JumpStart',
    'SageMaker JumpStart in the center, linked to foundation models, vision and language models, fine-tuning, and deployment.',
    center_icon='sagemaker', center='SageMaker JumpStart',
    items=[('model', 'Foundation models', 'Pretrained models from many providers'), ('eye', 'Vision and language', 'Computer vision and NLP models'),
           ('gear', 'Fine-tune', 'Transfer learning with your own data'), ('endpoint', 'Deploy', 'Host on SageMaker AI infrastructure')])
add('m1-s55', 'phases', 'Collect, prepare, and engineer features',
    'Three phases of data processing: collect with ETL and labels, prepare with exploration, cleaning, and splitting, and engineer features.',
    items=[('db', 'Collect', ['Find data sources', 'Extract, transform, load (ETL)', 'Add labels']),
           ('filter', 'Prepare', ['Explore the data', 'Clean gaps and errors', 'Split: train, validate, test']),
           ('gear', 'Engineer features', ['Select useful inputs', 'Transform raw values'])],
    first_orange=True, h=356)
add('m1-s56', 'fanin', 'AWS Glue for ETL',
    'Data from databases, files, and streams flows into AWS Glue, which transforms it and writes curated data to Amazon S3 while recording metadata in the Data Catalog.',
    sources=[('db', 'Databases'), ('docs', 'Files in Amazon S3'), ('logs', 'Application logs')],
    center_icon='glue', center='AWS Glue', center_detail='Serverless ETL and transforms',
    outputs=[('s3', 'Curated data', 'Ready for analytics and ML'), ('book', 'Data Catalog', 'Metadata for discovery')])
add('m1-s57', 'fanin', 'Glue crawlers populate the Data Catalog',
    'A crawler reads Amazon S3, Amazon Redshift, Amazon RDS, Amazon DynamoDB, and JDBC sources, classifiers infer schemas, and tables are written to the Data Catalog.',
    sources=[('s3', 'Amazon S3'), ('db', 'Amazon Redshift'), ('db', 'Amazon RDS'), ('db', 'Amazon DynamoDB'), ('server', 'JDBC databases')],
    center_icon='search', center='Crawler', center_detail='Classifiers infer schemas',
    outputs=[('book', 'Data Catalog', 'Tables, schemas, locations'), ('chart', 'Analytics and ML jobs', 'Find and query the data')])
add('m1-s58', 'chain', 'AWS Glue DataBrew',
    'Explore and profile a dataset, record transformations in a recipe, check data quality rules, and produce clean output.',
    heading='VISUAL, REPEATABLE DATA PREPARATION',
    steps=[('search', 'Explore and profile', 'See distributions and gaps'), ('databrew', 'Build a recipe', 'Point-and-click steps, saved'), ('check', 'Quality rules', 'Which records pass or fail'), ('s3', 'Clean output', 'Reapply the recipe to new data')])
add('m1-s59', 'groundtruth', 'Labeling with SageMaker Ground Truth',
    'Raw data goes to an active learning model; confident items are labeled automatically and uncertain items go to people, whose labels retrain the model.',
    foot='Workers can come from Amazon Mechanical Turk, a vendor, or your own staff.')
add('m1-s60', 'chain', 'SageMaker Data Wrangler in Canvas',
    'Import data, add transformation steps to a data flow, visualize and analyze it, then export it for training.',
    heading='A DATA FLOW BUILT ONE STEP AT A TIME',
    steps=[('db', 'Import', 'Connect to data sources'), ('gear', 'Transform', 'Each step joins the data flow'), ('chart', 'Visualize and analyze', 'Check quality and patterns'), ('train', 'Export', 'Prepared data for training')],
    note='Hundreds of built-in transformations, such as filling missing values and encoding categories.')
add('m1-s62', 'cycle', 'Train, tune, and evaluate',
    'Training adjusts parameters, experiments try hyperparameters, and evaluation compares results with metric targets, in a repeating loop.',
    center='Meets the metric targets?',
    items=[('train', 'Train: adjust parameters'), ('gear', 'Experiment: try hyperparameters'), ('check', 'Evaluate on validation data')])
add('m1-s63', 'fanin', 'Inputs and outputs of a SageMaker training job',
    'Training data in S3, a training image from Amazon ECR, and hyperparameters feed a training job, which saves model artifacts to S3 and records metrics.',
    sources=[('s3', 'Training data in Amazon S3'), ('server', 'Training image in Amazon ECR'), ('gear', 'Hyperparameters')],
    center_icon='train', center='Training job', center_detail='Container on managed instances',
    outputs=[('s3', 'Model artifacts', 'Learned weights saved to Amazon S3'), ('chart', 'Metrics', 'Compare runs')])
add('m1-s64', 'chain', 'Automatic model tuning',
    'Define hyperparameter ranges and an objective metric; the tuning job runs training jobs in a loop and reports the best combination.',
    heading='LET SAGEMAKER AI SEARCH THE SETTINGS',
    steps=[('gear', 'Set ranges', 'For example, learning rate 0.001 to 0.1'), ('flag', 'Objective metric', 'Such as validation accuracy'), ('train', 'Training jobs', 'Each with different values'), ('check', 'Best job', 'Reported when criteria are met')],
    loop='Each result guides the next values to try', loop_from=2, loop_to=0, loop_y=358, loop_start=272, loop_end=270)
add('m1-s65', 'cols', 'Self-managed or hosted deployment',
    'A model container can run on self-managed AWS compute or on hosted SageMaker AI inference.',
    heading='WHERE THE MODEL RUNS',
    items=[('server', 'Self-managed', ['AWS Batch, Amazon ECS, Amazon EKS', 'AWS Lambda, Amazon EC2', 'More control, more responsibility']),
           ('sagemaker', 'Hosted: SageMaker AI', ['Managed endpoints and batch jobs', 'Provisioning and scaling handled', 'Less operational work'])],
    note='First choose batch or real-time inference; then choose where it runs.', accent=[1])
add('m1-s66', 'chain', 'Deploying to a SageMaker endpoint',
    'Model artifacts in S3 and an inference image in ECR become a SageMaker model, which an endpoint configuration places on an endpoint that applications call.',
    heading='FROM ARTIFACTS TO A LIVE ENDPOINT',
    steps=[('s3', 'Artifacts and image', 'Amazon S3 and Amazon ECR'), ('model', 'SageMaker model', 'Combines the two'), ('gear', 'Endpoint configuration', 'Instance type and count'), ('endpoint', 'Endpoint', 'Applications request predictions')],
    note='SageMaker Inference Recommender load-tests options to balance performance and cost.')
add('m1-s67', 'quad', 'Four SageMaker AI inference options',
    'Real-time, serverless, asynchronous, and batch transform inference with when to use each.',
    items=[('clock', 'Real-time', ['Live predictions, low latency', 'Sustained, steady traffic']),
           ('cloud', 'Serverless', ['Intermittent traffic with idle periods', 'May start slower after idle time']),
           ('mail', 'Asynchronous', ['Large payloads, long processing', 'Requests queued, results later']),
           ('db', 'Batch transform', ['Offline, large datasets', 'No one waiting for the answer'])])
add('m1-s71', 'chain', 'Amazon SageMaker Pipelines',
    'Define a pipeline with the Python SDK or JSON, then process data, train, create the model, and register it.',
    heading='AN ML WORKFLOW AS CONNECTED STEPS',
    steps=[('code', 'Define', 'Python SDK or JSON definition'), ('filter', 'Process data', ''), ('train', 'Train', ''), ('model', 'Create model', ''), ('book', 'Register', 'Model registry for approval')],
    note='Each run records its inputs and outputs, so results can be reproduced.')
FOOT = 'Example: 100 parcels checked for damage; 50 are actually damaged and 50 are intact.'
COUNTS = (30, 10, 20, 40)
add('m1-s73', 'matrix', 'Confusion matrix', 'A two-by-two grid of predicted against actual classes: true positive, false positive, false negative, true negative.',
    counts=(None, None, None, None), pos='Damaged', neg='Intact', metric='Four outcomes', question='Each prediction lands in one cell: correct (green) or an error (red).', foot='Question: is this parcel damaged? "Positive" means the model says damaged.')
add('m1-s74', 'matrix', 'Accuracy', 'Accuracy uses the true positive and true negative cells: (30 + 40) divided by 100 equals 0.70.',
    counts=COUNTS, pos='Damaged', neg='Intact', highlight=['TP', 'TN'], metric='Accuracy', question='What share of all predictions were correct?',
    formula='(TP + TN) ÷ all predictions', calc='(30 + 40) ÷ 100 = 0.70', value=.70, foot=FOOT)
add('m1-s75', 'matrix', 'Precision', 'Precision uses true positives and false positives: 30 divided by 40 equals 0.75.',
    counts=COUNTS, pos='Damaged', neg='Intact', highlight=['TP', 'FP'], metric='Precision', question='When the model says damaged, how often is it right?',
    formula='TP ÷ (TP + FP)', calc='30 ÷ (30 + 10) = 0.75', value=.75, foot=FOOT)
add('m1-s76', 'matrix', 'Recall', 'Recall uses true positives and false negatives: 30 divided by 50 equals 0.60.',
    counts=COUNTS, pos='Damaged', neg='Intact', highlight=['TP', 'FN'], metric='Recall', question='Of the parcels that are damaged, how many did the model find?',
    formula='TP ÷ (TP + FN)', calc='30 ÷ (30 + 20) = 0.60', value=.60, foot=FOOT)
add('m1-s77', 'matrix', 'F1 score', 'F1 combines precision 0.75 and recall 0.60 into about 0.67.',
    counts=COUNTS, pos='Damaged', neg='Intact', highlight=['TP', 'FP', 'FN'], metric='F1 score', question='One number that balances precision and recall.',
    formula='2 × P × R ÷ (P + R)', calc='2 × 0.75 × 0.60 ÷ 1.35 ≈ 0.67', value=.67, foot=FOOT)
add('m1-s78', 'matrix', 'False positive rate', 'False positive rate uses false positives and true negatives: 10 divided by 50 equals 0.20.',
    counts=COUNTS, pos='Damaged', neg='Intact', highlight=['FP', 'TN'], metric='False positive rate', question='Of the intact parcels, what share were wrongly flagged?',
    formula='FP ÷ (FP + TN)', calc='10 ÷ (10 + 40) = 0.20', value=.20, foot=FOOT)
add('m1-s79', 'matrix', 'Specificity', 'Specificity uses true negatives and false positives: 40 divided by 50 equals 0.80.',
    counts=COUNTS, pos='Damaged', neg='Intact', highlight=['TN', 'FP'], metric='Specificity (TNR)', question='Of the intact parcels, what share were correctly cleared?',
    formula='TN ÷ (TN + FP)', calc='40 ÷ (40 + 10) = 0.80', value=.80, foot=FOOT)
add('m1-s80', 'roc', 'ROC curve and AUC', 'A curve of true positive rate against false positive rate bends toward the top left; the shaded area under it is 0.88.',
    notes=['Each point is one threshold setting', 'Top-left means many positives found with few false alarms', 'The diagonal is random guessing', 'AUC sums up the curve from 0 to 1'])
add('m1-s81', 'residuals', 'Regression error metrics', 'Points around a fitted line with dashed error segments, and the formulas for MSE, RMSE, and MAE.',
    xlabel='Distance (km)', ylabel='Delivery time',
    metrics=[('MSE', 'Average of squared errors', 'Large errors count much more'), ('RMSE', 'Square root of MSE', 'Same units as the target'), ('MAE', 'Average absolute error', 'Less affected by a few big errors')],
    foot='Errors of 2, -4, and 6 minutes give MAE = 4 and MSE of about 18.7.')
add('m1-s82', 'chain', 'Measuring business value and ROI',
    'Define goals and metrics, estimate the cost of errors, measure actual improvement and cost, then calculate return on investment.',
    heading='PLAN THE MEASURE BEFORE YOU BUILD',
    steps=[('flag', 'Goals and metrics', 'What should improve'), ('alert', 'Cost of errors', 'Risk of wrong predictions'), ('chart', 'Measure results', 'Actual gains, costs, feedback'), ('scale', 'Calculate ROI', '(benefit − cost) ÷ cost')],
    note='AWS Cost Explorer tracks what the solution costs over time.')
add('m1-s83', 'lanes2', 'AWS tools across the AI/ML pipeline',
    'Four stages of AI/ML work matched with AWS tools: data and custom models, foundation models, software development, and business users.',
    rows=[('db', 'Prepare data, train custom models', 'AWS Glue, SageMaker AI', 'Integrate data; label, train, deploy, monitor'),
          ('model', 'Build with foundation models', 'Amazon Bedrock', 'Managed model access, customization, evaluation'),
          ('code', 'Develop the application', 'Kiro', 'AI-assisted planning, coding, and testing'),
          ('quick', 'Put AI in business users\' hands', 'Amazon Quick, Amazon Q', 'Ask questions of company data; automate work')])

# ------------------------------------------------------------------ Module 2, task 2.1
add('m2-s2', 'rings', 'Where generative AI fits',
    'Four concentric circles: AI contains machine learning, which contains deep learning, which contains generative AI. Notes describe each.',
    right_title='Each ring in one line',
    right=[('Artificial intelligence', 'Systems that perform tasks associated with human thinking'), ('Machine learning', 'Learns patterns from data instead of fixed rules'),
           ('Deep learning', 'Many-layered neural networks that learn their own features'), ('Generative AI', 'Creates new text, images, audio, video, and code')])
add('m2-s4', 'pretrain_adapt', 'Foundation models',
    'Varied data such as documents, images, video, code, tables, and charts pretrains one foundation model, which is adapted to many tasks.',
    data=[('doc', 'Documents'), ('photo', 'Images'), ('app', 'Video'), ('code', 'Code'), ('table', 'Tables'), ('chart', 'Charts')],
    tasks=['Generate text', 'Summarize documents', 'Extract information', 'Answer questions', 'Power a chatbot', 'Generate images'])
add('m2-s5', 'cycle', 'The foundation model lifecycle',
    'Seven stages in a loop: data selection, model selection, pretraining, fine-tuning, evaluation, deployment, and feedback.',
    center='Continuous improvement',
    items=[('db', 'Data selection'), ('search', 'Model selection'), ('train', 'Pretraining'), ('gear', 'Fine-tuning'), ('check', 'Evaluation'), ('endpoint', 'Deployment'), ('speech', 'Feedback')])
add('m2-s6', 'tokens_vectors', 'Tokens and embeddings',
    'A sentence split into tokens, and a chart of word vectors where related words such as bicycle and scooter sit close together.',
    tokens=['The', 'rider', 'return', 'ed', 'the', 'bike', '.'],
    points=[('bicycle', .62, .78, B), ('scooter', .7, .66, B), ('helmet', .5, .58, T), ('invoice', .2, .3, O), ('receipt', .28, .2, O)],
    notes=['Words can split into several tokens', 'Each token or passage becomes a vector of numbers', 'Each dot stands for one vector; related meanings sit close together'])
add('m2-s7', 'prompt_parts', 'The parts of a prompt',
    'Four prompt elements with an example of each: context, instruction, output indicator, and input data.',
    rows=[('Context', 'You are a support specialist for a bicycle rental company.'), ('Instruction', 'Classify the customer message below by topic.'),
          ('Output indicator', 'Answer with one word: billing, shipping, or technical.'), ('Input data', 'Message: "I was charged twice for Saturday\'s rental."')])
add('m2-s8', 'diffusion2', 'How diffusion generates an image',
    'Three panels show random noise, a partly cleared image, and a finished image; training adds noise and generation removes it.',
    note='Latent diffusion, as in Stable Diffusion, works in a compressed space instead of on every pixel.')
add('m2-s9', 'tiles', 'Generative AI use cases',
    'Six groups of generative AI use cases, each with examples.',
    heading='WHAT GENERATIVE AI IS USED FOR', cols=3,
    items=[('photo', 'Images and video', ['Product mock-ups', 'Short video clips']), ('speech', 'Audio', ['Narration', 'Voice prompts']),
           ('doc', 'Summaries and translation', ['Condense reports', 'Translate messages']), ('person', 'Assistants and agents', ['Answer staff questions', 'Customer service']),
           ('code', 'Code generation', ['Draft functions', 'Explain code']), ('search', 'Search', ['Find by meaning', 'Recommend items'])])
add('m2-s10', 'tokens_cost', 'Tokens drive cost and speed',
    'A request broken into instruction, history, retrieved passages, and answer tokens, with notes on how each affects cost and speed.',
    parts=[('Instructions', 300, N), ('Chat history', 900, B), ('Retrieved passages', 2400, '#537fbc'), ('Answer', 600, O)],
    cost='Input and output tokens are billed, often at different rates. Retrieved passages are frequently the largest part.',
    speed='Output is generated token by token, so a 600-token answer takes longer than a 100-token answer.',
    foot='Illustrative token counts. Check the pricing unit and rates of the model you choose.')
add('m2-s11', 'context_window', 'Context engineering',
    'Candidate information is filtered so only the system instructions, relevant history, current stock result, and retrieved manual pages enter the context window.',
    candidates=[('System instructions', True), ('Every past conversation', False), ('Last three relevant turns', True), ('Live stock count (authorized)', True), ('Whole product catalog', False), ('Two relevant manual pages', True)],
    window=['Rules and role', 'Relevant history', 'Current stock result', 'Manual passages', 'The new question'],
    note='Kept small and relevant: lower cost, fewer distractions.')
add('m2-s12', 'multiagent', 'Agentic AI building blocks',
    'A supervisor agent splits work among specialist agents; a sequential handoff passes results along; tools, memory, and orchestration support them.',
    specialists=['Research agent', 'Booking agent', 'Checking agent'], sequence=['Gather', 'Draft', 'Review'],
    blocks=[('tools', 'Tool use', 'Call APIs and databases'), ('db', 'Memory', 'Short-term task, long-term facts'), ('branch', 'Orchestration', 'Order of steps and when to stop'), ('person', 'Human approval', 'For consequential actions')])
add('m2-s13', 'mcp', 'Model Context Protocol',
    'An agent with an MCP client discovers and calls tools offered by MCP servers for a calendar, a database, and a file store.',
    servers=[('calendar', 'Calendar service'), ('db', 'Order database'), ('docs', 'Document store')],
    foot='MCP standardizes the connection; permissions and validation are still enforced by your application and services.')

# ------------------------------------------------------------------ task 2.2
add('m2-s15', 'tiles', 'Advantages of generative AI',
    'Four advantages: adaptability, responsiveness, simplicity and conversation, and content generation.',
    heading='WHY TEAMS ADOPT GENERATIVE AI', cols=2,
    items=[('gear', 'Adaptability', ['One model, many tasks and topics']), ('clock', 'Responsiveness', ['Answers in seconds, at any hour']),
           ('speech', 'Simple and conversational', ['Ask in plain language']), ('doc', 'Content generation', ['Drafts people can refine'])])
add('m2-s18', 'tiles', 'Business metrics for generative AI',
    'Six measures of business value: accuracy, cross-domain performance, efficiency, conversion rate, average revenue per user, and customer lifetime value, plus ROI.',
    heading='MEASURE VALUE, THEN COMPARE WITH COST', cols=3,
    items=[('check', 'Accuracy', ['Share of correct outputs']), ('globe', 'Cross-domain performance', ['Quality across topics and tasks']), ('clock', 'Efficiency', ['Time saved per task']),
           ('chart', 'Conversion rate', ['Visitors who complete a purchase']), ('person', 'Revenue per user', ['Average revenue per user']), ('people', 'Customer lifetime value', ['Revenue over the relationship'])])
add('m2-s19', 'checklist', 'Choosing a generative AI model',
    'Four questions for model selection: task fit, performance and latency, constraints and compliance, and cost and complexity.',
    heading='QUESTIONS FOR MODEL SELECTION', left='Factor', right='Ask',
    rows=[('model', 'Model type and capabilities', 'Text, images, or both? Is the quality good enough?'), ('clock', 'Performance and latency', 'How fast, and at what traffic level?'),
          ('lock', 'Constraints and compliance', 'Context length, languages, data residency, license'), ('scale', 'Cost and complexity', 'Choose the smallest model that meets the needs')])

# ------------------------------------------------------------------ task 2.3
add('m2-s21', 'stack3', 'The AWS AI and ML stack',
    'Three layers: generative AI services at the top, task-specific AI services in the middle, and the ML platform at the bottom.',
    layers=[('Generative AI', [('bedrock', 'Amazon Bedrock'), ('sagemaker', 'SageMaker JumpStart'), ('speech', 'Amazon Q')], O),
            ('AI services', [('comprehend', 'Comprehend'), ('rekognition', 'Rekognition'), ('textract', 'Textract'), ('transcribe', 'Transcribe'), ('lex', 'Lex')], B),
            ('ML platform', [('sagemaker', 'Amazon SageMaker AI'), ('code', 'ML frameworks')], N)],
    foot='Higher layers need less ML expertise; lower layers give more control.')
add('m2-s22', 'quad', 'SageMaker AI capabilities',
    'Four capabilities of SageMaker AI: data preparation and labeling, training and evaluation, deployment and monitoring, and pretrained models.',
    items=[('db', 'Prepare and label', ['Explore and transform data', 'Label training examples']), ('train', 'Train and evaluate', ['Built-in algorithms or frameworks', 'Measure quality']),
           ('endpoint', 'Deploy and monitor', ['Real-time or batch hosting', 'Track quality in production']), ('model', 'Pretrained models', ['Start from JumpStart', 'Fine-tune with your data'])])
add('m2-s23', 'service_groups', 'AI services grouped by task',
    'Six groups of AWS AI services: text and documents, vision, search, conversation, speech, and recommendations.',
    groups=[('Text and documents', [('comprehend', 'Comprehend'), ('translate', 'Translate'), ('textract', 'Textract')]), ('Vision', [('rekognition', 'Rekognition')]),
            ('Search', [('search', 'Kendra')]), ('Chatbots', [('lex', 'Lex')]), ('Speech', [('polly', 'Polly'), ('transcribe', 'Transcribe')]),
            ('Recommendations', [('personalize', 'Personalize')])])
add('m2-s24', 'cols', 'Generative AI services on AWS',
    'Amazon Bedrock, SageMaker JumpStart, and Amazon Q with what each provides.',
    items=[('bedrock', 'Amazon Bedrock', ['Foundation models through one API', 'Customize and evaluate', 'No servers to manage']),
           ('sagemaker', 'SageMaker JumpStart', ['Hub of pretrained models', 'Fine-tune and host in your account']),
           ('speech', 'Amazon Q', ['Assistants for business users', 'Help with software development'])])
add('m2-s25', 'transfer', 'Transfer learning',
    'A model trained on a general dataset becomes a generalized model, which is fine-tuned on a smaller dataset to produce a specialized model.',
    note='Example: a model that understands general English is fine-tuned with a few thousand support tickets to classify ticket topics.')
add('m2-s26', 'chain', 'Using SageMaker JumpStart',
    'Browse the catalog, choose a pretrained model, fine-tune it with your data, and deploy it with SageMaker AI.',
    heading='FROM CATALOG TO YOUR OWN ENDPOINT',
    steps=[('search', 'Browse', 'Foundation, vision, and language models'), ('model', 'Choose a model', 'Check the license and requirements'), ('gear', 'Fine-tune', 'Transfer learning with your data'), ('endpoint', 'Deploy', 'Host with SageMaker AI in your account')])
add('m2-s27', 'cols', 'Advantages of AWS generative AI',
    'Four advantages: faster development, scalability and cost, flexibility, and integration.',
    items=[('code', 'Faster development', ['Pretrained models', 'Coding assistance', 'Automated ML workflows']), ('chart', 'Scale and cost', ['Pay as you go', 'Global infrastructure']),
           ('gear', 'Flexibility', ['Many model providers', 'Services keep expanding']), ('branch', 'Integration', ['Ready-to-use AI services', 'Common SDKs and APIs'])], size=16)
add('m2-s28', 'quad', 'Security, compliance, responsibility, and safety',
    'Four benefits of AWS infrastructure for generative AI: security, compliance, shared responsibility, and safety.',
    items=[('iam', 'Security', ['IAM, encryption, private networking']), ('artifact', 'Compliance', ['Compliance programs and reports']),
           ('people', 'Responsibility', ['AWS secures the cloud', 'You secure data, access, outputs']), ('shield', 'Safety', ['Bedrock Guardrails filter content'])])
add('m2-s29', 'tiles', 'Cost trade-offs',
    'Six cost trade-offs: responsiveness and availability, redundancy and Regional coverage, performance, token-based pricing, provisioned throughput, and custom models.',
    heading='WHAT DRIVES THE BILL', cols=3,
    items=[('clock', 'Responsiveness', ['Faster and more available costs more']), ('globe', 'Regional coverage', ['More Regions: resilience, more cost']), ('chart', 'Performance', ['Larger models cost more per request']),
           ('scale', 'Token pricing', ['On-demand, per input and output token']), ('server', 'Provisioned throughput', ['Reserved capacity for steady use']), ('gear', 'Custom models', ['Training and hosting add cost'])])
add('m2-s30', 'hub', 'Amazon Bedrock and Amazon Nova',
    'Amazon Bedrock in the center, linked to model choice, playgrounds and PartyRock, model evaluation, and Amazon Nova models.',
    center_icon='bedrock', center='Amazon Bedrock',
    items=[('model', 'Model choice', 'High-performing models from several providers'), ('app', 'Playgrounds', 'Experiment; PartyRock for quick prototypes'),
           ('check', 'Model evaluation', 'Compare models on your tasks'), ('photo', 'Amazon Nova', 'Text, image, and video generation')])
add('m2-s31', 'lanes2', 'Tools for agents and developers',
    'Amazon Quick for business users, Kiro for developers, Strands Agents for building agents, and Bedrock AgentCore for running them.',
    left='Need', middle='Tool', right='Role',
    rows=[('person', 'Business users and their data', 'Amazon Quick', 'Ask questions; automate work'), ('code', 'Writing application code', 'Kiro', 'AI-assisted planning, coding, testing'),
          ('sdk', 'Building an agent', 'Strands Agents', 'Open-source SDK: model plus tools'), ('agentcore', 'Running agents in production', 'Amazon Bedrock AgentCore', 'Runtime, identity, memory, monitoring')])

# ------------------------------------------------------------------ Module 3, task 3.1
add('m3-s3', 'tiles', 'Performance requirements',
    'Four performance requirements for a foundation model: accuracy, latency, reliability, and monitoring over time.',
    heading='WHAT GOOD PERFORMANCE MEANS', cols=2,
    items=[('check', 'Accuracy', ['Correct answers; watch for hallucinations and arithmetic slips']), ('clock', 'Latency', ['Size and architecture affect response time']),
           ('docs', 'Reliability', ['Consistent quality across several test sets']), ('chart', 'Monitor over time', ['Keep measuring after launch'])])
add('m3-s4', 'cols', 'Constraints, capabilities, compliance, and cost',
    'Four columns of model selection factors: constraints, capabilities, compliance, and cost.',
    items=[('server', 'Constraints', ['Compute and memory', 'Data available', 'Deployment needs']), ('model', 'Capabilities', ['Text or images', 'Multimodal, multilingual', 'Input and output length']),
           ('book', 'Compliance', ['Guidelines and licenses', 'Regulations']), ('scale', 'Cost', ['Larger models: more capable, more costly'])], size=16)
add('m3-s5', 'sliders', 'Inference parameters',
    'Sliders for temperature, Top P, and Top K show the effect of low and high settings, plus maximum length and stop sequences.',
    sliders=[('Temperature', 'Typical range 0 to 1', '0.2', 'focused', '1.0', 'more varied', .25), ('Top P', 'Typical range 0 to 1', '0.25', 'few word choices', '0.99', 'wide choice', .6),
             ('Top K', 'Number of candidates', '10', 'few options', '500', 'many options', .4)],
    length=[('Maximum length', 'Caps output tokens; controls cost and length'), ('Stop sequences', 'Text that ends generation; several allowed')])
add('m3-s6', 'rag2', 'Retrieval Augmented Generation',
    'A user question goes to an application, which searches knowledge sources, adds the retrieved passages to the prompt, and sends it to a language model that answers.',
    foot='RAG adds current, company-specific information at request time without changing the model\'s weights.')
add('m3-s8', 'fanin', 'Amazon Bedrock Knowledge Bases',
    'Documents from S3, Confluence, SharePoint, Salesforce, and the web are chunked and embedded into a vector store; structured data is queried with SQL.',
    sources=[('s3', 'Amazon S3'), ('docs', 'Confluence, SharePoint'), ('people', 'Salesforce'), ('globe', 'Web crawler')],
    center_icon='bedrock', center='Knowledge Bases', center_detail='Chunk, embed, store',
    outputs=[('db', 'Vector store', 'Embeddings for similarity search'), ('table', 'Structured data', 'Natural language to SQL')])
add('m3-s9', 'agents_arch', 'Amazon Bedrock Agents',
    'A user query becomes a structured prompt; the model plans reasoning steps that call data sources and external APIs; the completion becomes the response.',
    foot='Business uses: claims processing, appointment booking, order status, routine IT requests.')
add('m3-s10', 'cost_ladder', 'Customization approaches and cost',
    'Bars compare setup cost and effort for prompting, RAG, distillation, fine-tuning, continued pretraining, and pretraining from scratch.',
    heading='FROM CHEAPEST TO MOST EXPENSIVE TO SET UP',
    rows=[('Prompting (in-context)', .06, 'Instructions and examples', T), ('RAG', .2, 'Retrieval and a vector store', B), ('Distillation', .38, 'Train a small student from a teacher', B),
          ('Fine-tuning', .5, 'Labeled data, training, upkeep', O), ('Continued pretraining', .72, 'Large unlabeled domain data', O), ('Pretraining from scratch', 1, 'Massive data and compute', R)],
    foot='Illustrative. Running costs differ: a distilled model is cheaper per request; long prompts cost more each time.')

# ------------------------------------------------------------------ task 3.2
add('m3-s15', 'cot_tuning', 'Chain-of-thought prompting and prompt tuning',
    'A multi-step question solved in numbered steps, compared with prompt tuning, where learned soft-prompt vectors are trained and model weights stay frozen.',
    question='A rental costs 12 per hour, with a 10 discount over 4 hours. Cost for 5 hours?',
    steps=['5 hours × 12 = 60', 'The rental is over 4 hours, so apply the discount', '60 − 10 = 50'],
    answer='Final answer: 50',
    tuning_note='A lightweight training method: it needs labeled examples but leaves the model itself unchanged.')
add('m3-s16', 'tiles', 'Prompt engineering best practices',
    'Six practices: be specific and concise, add examples, state what to avoid, experiment, understand the model, and add guardrails.',
    heading='HABITS THAT IMPROVE RESPONSES', cols=3,
    items=[('flag', 'Specific and concise', ['Task, format, tone, length']), ('docs', 'Examples and context', ['Show the expected output']), ('filter', 'Negative prompts', ['Say what to leave out']),
           ('search', 'Experiment', ['Compare variants on the same cases']), ('model', 'Know your model', ['Strengths, limits, biases']), ('shield', 'Guardrails', ['Block harmful or off-topic content'])])
add('m3-s17', 'tiles', 'Adversarial prompting risks',
    'Five risks: exposure, prompt injection, hijacking, jailbreaking, and poisoning, with a defense note.',
    heading='HOW PROMPTS CAN BE ATTACKED', cols=3,
    items=[('lock', 'Exposure', ['Reveals confidential data or instructions']), ('code', 'Prompt injection', ['Hidden instructions in input or documents']), ('flag', 'Hijacking', ['Takes over the original task']),
           ('key', 'Jailbreaking', ['Bypasses safety rules']), ('db', 'Poisoning', ['Corrupts training or retrieval data']), ('shield', 'Defend in layers', ['Guardrails, validation, least privilege'])],
    accent=[5])
add('m3-s18', 'prompt_versions', 'Bedrock Prompt Management',
    'A managed prompt with versions 1 to 3, one approved, and a table comparing two variants on the same 50 test cases.',
    versions=[('v1', 'First summary prompt', 'retired'), ('v2', 'Adds output fields', 'retired'), ('v3', 'Adds an example', 'approved'), ('v4', 'Shorter wording', 'testing')],
    rows=[['v3', 'Model A, temperature 0.2', '46 of 50 correct'], ['v4', 'Model A, temperature 0.2', '44 of 50 correct']],
    foot='Keep the approved version for rollback; record the model settings each version was tested with.')

# ------------------------------------------------------------------ task 3.3
add('m3-s20', 'chain', 'The training process for foundation models',
    'Pretraining on huge data, then fine-tuning on labeled data, with a risk of catastrophic forgetting that continuous pretraining helps address.',
    heading='PRETRAIN, ADAPT, KEEP LEARNING',
    steps=[('db', 'Pretraining', 'Broad capabilities from huge, mostly unlabeled data'), ('gear', 'Fine-tuning', 'Supervised adaptation with labeled examples'), ('alert', 'Watch for forgetting', 'Narrow tuning can erase general knowledge'), ('train', 'Continuous pretraining', 'Add domain knowledge while keeping breadth')],
    accent=[2])
add('m3-s21', 'cols', 'Instruction fine-tuning and RLHF',
    'Two fine-tuning methods: instruction fine-tuning with instruction and response pairs, and reinforcement learning from human feedback with ranked responses.',
    heading='TWO WAYS TO FINE-TUNE',
    items=[('docs', 'Instruction fine-tuning', ['Pairs: instruction and ideal response', 'Teaches the model to follow directions', 'Example: approved claim summaries']),
           ('people', 'RLHF', ['People rank or rate responses', 'Feedback trains toward preferred answers', 'Aligns tone and helpfulness'])],
    note='Both start from a pretrained base model and adjust its weights with a smaller dataset.')
add('m3-s22', 'chain', 'Fine-tuning steps',
    'Prepare data, select prompts, calculate the loss, and update weights, repeating over epochs, then evaluate on held-out data.',
    heading='ONE FINE-TUNING RUN',
    steps=[('db', 'Prepare data', 'Examples that match the task'), ('docs', 'Select prompts', 'Template libraries can help'), ('scale', 'Calculate loss', 'Output compared with expected answer'), ('gear', 'Update weights', 'Reduce the loss each epoch'), ('check', 'Evaluate', 'Held-out data')],
    loop='Repeat for several epochs', loop_from=3, loop_to=1, loop_y=352, loop_start=262, loop_end=262)
add('m3-s24', 'tiles', 'Preparing data for fine-tuning',
    'Six data preparation concerns: curation, size, labeling, representativeness, governance, and RLHF rankings.',
    heading='GOOD DATA BEFORE MORE DATA', cols=3,
    items=[('filter', 'Curation', ['Relevant, clean, deduplicated']), ('chart', 'Size', ['Enough to cover the task']), ('flag', 'Labeling', ['Correct, consistent answers']),
           ('people', 'Coverage', ['Represents real users, languages, hard cases']), ('lock', 'Governance', ['Rights, privacy, source, version']), ('scale', 'RLHF data', ['Consistent human rankings'])])

# ------------------------------------------------------------------ task 3.4
add('m3-s26', 'text_metrics', 'ROUGE, BLEU, and BERTScore',
    'A reference sentence and a generated paraphrase, with what ROUGE, BLEU, and BERTScore each measure.',
    reference='The bike shop opens at nine and closes at six on weekdays.',
    generated='On weekdays the shop is open from nine until six.',
    metrics=[('ROUGE', 'Overlap with the reference, focused on what was captured', 'Summaries'), ('BLEU', 'Precision of matching word sequences, with a penalty for short output', 'Translation'),
             ('BERTScore', 'Similarity of meaning using embeddings, so paraphrases can score well', 'Meaning')])
add('m3-s27', 'tiles', 'Business metrics for generative AI',
    'Five business metrics: user satisfaction, average revenue per user, conversion rate, cross-domain performance, and efficiency.',
    heading='IS IT WORKING FOR THE BUSINESS?', cols=3,
    items=[('person', 'User satisfaction', ['Ratings and feedback']), ('chart', 'Revenue per user', ['Average revenue per user']), ('flag', 'Conversion rate', ['Visits that end in a purchase']),
           ('globe', 'Cross-domain', ['Quality across product lines']), ('clock', 'Efficiency', ['Time and cost saved'])])
add('m3-s28', 'quad', 'Approaches to evaluating foundation models',
    'Four evaluation approaches: human-in-the-loop, benchmark datasets, Amazon Bedrock Model Evaluation, and LLM-as-a-judge.',
    items=[('people', 'Human in the loop', ['Rate outputs with a shared rubric', 'Accuracy, helpfulness, safety']), ('docs', 'Benchmark datasets', ['Fixed questions, known answers', 'Fair comparison of models']),
           ('bedrock', 'Bedrock evaluation', ['Automatic, human, or model judging', 'Runs on your datasets']), ('scale', 'LLM-as-a-judge', ['A model scores against a rubric', 'Check against human ratings'])])
add('m3-s29', 'cols', 'Evaluating RAG, agents, and workflows',
    'What to check for RAG systems, agents, and complete workflows.',
    heading='EVALUATE THE WHOLE APPLICATION',
    items=[('search', 'RAG', ['Retrieval: right passages?', 'Grounding: sticks to them?', 'Answer: correct?']), ('tools', 'Agents', ['Right tool and inputs?', 'Permissions respected?', 'No wasted retries?']),
           ('branch', 'Workflows', ['Complete runs end to end', 'Normal and hard cases', 'Completion, cost, time'])])
add('m3-s30', 'quad', 'Aligning evaluation with business objectives',
    'Four alignment measures: business objectives, task completion rate, user satisfaction, and cost per interaction.',
    items=[('flag', 'Business objective', ['Productivity, engagement', 'Well-designed tasks']), ('check', 'Task completion rate', ['Resolved without hand-off']),
           ('person', 'User satisfaction', ['Ratings and feedback']), ('scale', 'Cost per interaction', ['Total cost ÷ interactions'])])

# ================================================================== Module 4: Guidelines for Responsible AI
# ------------------------------------------------------------------ task 4.1
add('m4-s2', 'tiles', 'Core dimensions of responsible AI',
    'Six dimensions: fairness, explainability, robustness, privacy and security, governance, and transparency.',
    heading='SIX DIMENSIONS OF RESPONSIBLE AI', cols=3,
    items=[('scale', 'Fairness', ['Effects on each group of users']), ('eye', 'Explainability', ['Why an output was produced']), ('shield', 'Robustness', ['Reliable with unusual inputs']),
           ('lock', 'Privacy and security', ['Permitted use, protected data']), ('flag', 'Governance', ['Processes that set and enforce rules']), ('doc', 'Transparency', ['Purpose, limits, and risks shared'])])
add('m4-s3', 'quad', 'Bias, inclusivity, safety, and veracity',
    'Four more features to check: bias, inclusivity, safety, and veracity, each with what to look for.',
    items=[('scale', 'Bias', ['Unjustified gaps between groups', 'Measured, not assumed']), ('people', 'Inclusivity', ['Works for every user group', 'Languages, abilities, backgrounds']),
           ('shield', 'Safety', ['No harmful or abusive output', 'Tested with difficult prompts']), ('search', 'Veracity', ['Truthful, accurate statements', 'Facts checked before use'])])
add('m4-s4', 'targets', 'Effects of bias and variance',
    'Four targets compare low and high bias with low and high variance, next to the effects of each problem on people and results.',
    labels=[['Accurate and consistent', 'Overfitting'], ['Underfitting', 'Inaccurate and erratic']],
    right_title='Effects on people and results',
    effects=['High bias misses the real pattern: the model underfits', 'High variance chases noise: the model overfits and fails on new data',
             'Errors can fall unevenly on demographic groups', 'Inaccurate or unequal results erode user trust'])
add('m4-s5', 'imbalance', 'Class imbalance',
    'A training set split 70 percent and 30 percent between two groups, and a bar chart showing a much higher error rate for the smaller group.',
    left_title='Who is in the training data', total='10,000', split=(70, 30), groups=['Group A', 'Group B'],
    right_title='Error rate by group', errors=[('Group A', 6), ('Group B', 19)],
    foot='The model fits the larger group best; the smaller group sees about three times as many errors.')
add('m4-s6', 'cols', 'Types of bias',
    'Four sources of unfair bias: data bias, algorithm bias, interaction bias, and bias amplification.',
    heading='WHERE UNFAIR BIAS COMES FROM',
    items=[('db', 'Data bias', ['Groups missing or underrepresented', 'Past unfair decisions in labels']), ('gear', 'Algorithm bias', ['Optimized for overall score only', 'No fairness measure']),
           ('people', 'Interaction bias', ['Users and feedback not representative']), ('chart', 'Amplification', ['Social biases learned and repeated at scale'])])
add('m4-s7', 'tiles', 'Mitigating bias',
    'Six practices to reduce bias: diverse data, audits, fairness metrics and constraints, transparency, stakeholder involvement, and monitoring.',
    heading='REDUCING BIAS ACROSS THE LIFECYCLE', cols=3,
    items=[('db', 'Diverse data', ['Representative training examples']), ('search', 'Audits', ['Check data and models for bias']), ('scale', 'Fairness metrics', ['Measure and limit group gaps']),
           ('eye', 'Transparency', ['Explainable decisions']), ('people', 'Stakeholders', ['Affected communities involved']), ('clock', 'Monitoring', ['Watch for new bias; retrain'])])
add('m4-s8', 'tiles', 'Characteristics of responsible datasets',
    'Six dataset characteristics: inclusive and diverse, curated sources, balanced, privacy protected, consent and transparency, and regular audits.',
    heading='WHAT A RESPONSIBLE DATASET LOOKS LIKE', cols=3,
    items=[('people', 'Inclusive, diverse', ['Covers the full population']), ('filter', 'Curated sources', ['Known, reviewed origins']), ('scale', 'Balanced', ['Groups in fair proportion']),
           ('lock', 'Privacy protected', ['Personal data secured']), ('doc', 'Consent', ['Permission and documented collection']), ('calendar', 'Regular audits', ['Scheduled checks for gaps'])])
add('m4-s9', 'cols', 'Responsible model selection',
    'Three stages: measure environmental impact, act on sustainability, and own the result through transparency, accountability, and stakeholder engagement.',
    heading='CHOOSING A MODEL RESPONSIBLY', arrows=True,
    items=[('chart', 'Measure impact', ['Energy for training and inference', 'Hardware and resource use', 'Informs the decision']),
           ('globe', 'Act sustainably', ['Right-size the model', 'Efficient tuning, scale with demand', 'Is generative AI needed?']),
           ('people', 'Own the outcome', ['Share capabilities and limits', 'Assign clear accountability', 'Engage stakeholders'])])
add('m4-s10', 'hub', 'Amazon SageMaker Clarify',
    'SageMaker Clarify at the centre with four capabilities: pre-training bias, post-training bias, drift monitoring, and feature explanations.',
    center_icon='sagemaker', center='SageMaker Clarify',
    items=[('db', 'Data bias', 'Pre-training metrics on the dataset'), ('scale', 'Model bias', 'Post-training metrics on predictions'),
           ('chart', 'Drift', 'With SageMaker Model Monitor in production'), ('eye', 'Explanations', 'Feature importance for tables, images, text')])
add('m4-s11', 'clarify_job', 'How a SageMaker Clarify processing job runs',
    'Amazon S3 supplies the dataset and analysis configuration to a Clarify container in a processing job, which sends requests to a model endpoint and writes results back to S3.',
    inputs='Dataset and analysis configuration', results='Analysis results',
    notes=['The analysis configuration lists the metrics to compute and the groups to compare', 'Pre-training metrics need only the data; post-training and explanations query the model'])
add('m4-s12', 'metric_table', 'Pre-training bias metrics',
    'A table of three pre-training metrics with the concern each flags and an apprenticeship applicant example.',
    heading='MEASURED ON THE DATA, BEFORE TRAINING',
    columns=['Metric', 'Concern', 'Example: apprenticeship applicants'], widths=[190, 250, 312],
    rows=[['Class imbalance', 'A group has few examples', 'Most applicants are 25 to 50, so the model is less reliable for older applicants'],
          ['Label imbalance', 'Positive labels more common for one group', 'Past acceptance rate is higher for applicants aged 25 to 50'],
          ['Demographic disparity', "A group's share of rejections exceeds its share of acceptances", 'Older applicants: 40% of rejections but 25% of acceptances']],
    note='These metrics need only the dataset and its labels, so they run before any model exists.')
add('m4-s13', 'metric_table', 'Post-training bias metrics',
    'A table of five post-training metrics and the concern each flags.',
    heading='MEASURED ON PREDICTIONS, AFTER TRAINING',
    columns=['Metric', 'Concern'], widths=[300, 452],
    rows=[['Difference in positive proportions', 'The model predicts a positive outcome more often for one group'],
          ['Specificity difference', 'The model correctly identifies negatives more often for one group'],
          ['Recall difference', 'The model finds true positives more often for one group'],
          ['Accuracy difference', 'Predictions are more accurate for one group'],
          ['Treatment equality', 'The ratio of false positives to false negatives differs between groups']],
    note='Each metric compares two groups. A value near zero means the model treats them similarly.')
add('m4-s14', 'subgroup', 'Detecting bias with subgroup analysis, label review, and audits',
    'An overall accuracy of 91 percent hides one group at 72 percent; three checks reveal it: label quality, human audits, and subgroup analysis.',
    overall='91%', groups=[('Group A', 94), ('Group B', 92), ('Group C', 93), ('Group D', 72)], threshold=85,
    right_title='Checks that reveal it',
    checks=[('doc', 'Analyze label quality', 'Sample labels, especially for small groups'), ('people', 'Human audits', 'Reviewers inspect decisions metrics miss'),
            ('search', 'Subgroup analysis', 'Break results down by group'), ('clock', 'Keep monitoring', 'Model Monitor for drift, A2I for review')],
    foot='A single overall score can hide a group that the model serves poorly.')
add('m4-s15', 'radial', 'Generative AI risks',
    'A foundation model surrounded by five risks: hallucinations, intellectual property, bias, toxicity, and data privacy.',
    center_icon='model', center='Foundation model', accent='alert',
    items=[('alert', 'Hallucinations', 'Believable but false statements'), ('doc', 'Intellectual property', 'Copies protected work'),
           ('scale', 'Bias', 'Unfair treatment of groups'), ('speech', 'Toxicity', 'Offensive or harmful language'), ('lock', 'Data privacy', 'Sensitive data appears in output')])
add('m4-s16', 'checklist', 'Legal risks of generative AI',
    'Five legal risks of generative AI with a matching action for each.',
    heading='LEGAL RISKS AND HOW TO REDUCE THEM', left='Risk', right='Reduce it by',
    rows=[('doc', 'Intellectual property claims', 'Check model terms; review outputs before publishing'), ('scale', 'Biased model outputs', 'Test results by group before release'),
          ('people', 'Loss of customer trust', 'Guardrails, disclosure, and quick correction'), ('alert', 'End user risk and hallucinations', 'Grounding, citations, and human review for high-stakes advice')])
add('m4-s17', 'guardrail_flow', 'Amazon Bedrock Guardrails',
    'A user prompt passes through Bedrock Guardrails content filters and denied topics before the model, and the response is checked on the way back; blocked content returns a configured message.',
    filters=[('Hate', .8), ('Insults', .6), ('Sexual', .9), ('Violence', .7)],
    topics=['Investment advice', 'Medical diagnosis', 'Competitor pricing'],
    more='Also: word filters, sensitive information filters, and contextual grounding checks',
    blocked='Blocked: "I can\'t help with that topic."',
    foot='The same policies check the prompt on the way in and the response on the way out.')
add('m4-s18', 'eval_matrix', 'Foundation model evaluation',
    'A grid of four task types against five evaluation dimensions, with the key features of model evaluation jobs.',
    aspects=['Compare LLMs on the same task', 'Built-in or custom prompt datasets', 'Automatic metrics or human workers', 'In Amazon Bedrock and SageMaker Clarify'],
    dims=['Accuracy', 'Toxicity', 'Robustness', 'Stereotyping', 'Factual'],
    tasks=[('Open-ended generation', [1, 2, 3, 4]), ('Text summarization', [0, 1, 2]), ('Question answering', [0, 1, 2]), ('Classification', [0, 2])],
    foot='Robustness means semantic robustness: does the output stay correct when the input is slightly changed?')

# ------------------------------------------------------------------ task 4.2
add('m4-s20', 'spectrum', 'Interpretability and explainability',
    'An interpretable linear model on the left and a neural network explained from outside on the right, along a bar from more to less transparent.',
    left_example='Linear regression, decision trees', right_example='Neural networks',
    left=['Follow the internal logic directly', 'Algorithm is easy to understand', 'May trade off accuracy or security'],
    right=['Too complex to follow inside', 'Explain from inputs and outputs', 'Model-agnostic (opaque box) methods'],
    foot='Both approaches help people find errors and bias before they trust a result.')
add('m4-s21', 'tradeoff', 'Interpretability compared with accuracy',
    'Six model types placed from linear regression, most interpretable and least accurate, to neural networks, most accurate and least interpretable.',
    models=[('Linear regression', .06, .92), ('Decision tree', .2, .8), ('K-nearest neighbors', .32, .64), ('Random forest', .44, .48), ('Support vector machine', .52, .33), ('Neural network', .64, .14)],
    notes=['Simple models are easy to explain', 'Complex models are often more accurate', 'Choose by how much each decision must be understood'])
add('m4-s22', 'cols', 'Transparency and model safety',
    'Three risks of transparency: vulnerability to attacks, exposure of proprietary algorithms, and data privacy.',
    heading='WHAT OPENNESS CAN COST',
    items=[('alert', 'Attacks', ['Known internals help craft fooling inputs']), ('key', 'Proprietary methods', ['Disclosure can reveal intellectual property']),
           ('lock', 'Data privacy', ['Details must not expose training data'])],
    note='Decide what to disclose, to whom, and with which security controls.')
add('m4-s23', 'cols', 'Open source AI models',
    'Open source models: transparent development, community collaboration, and safety and licensing concerns.',
    heading='OPEN SOURCE MODELS',
    items=[('code', 'Transparent build', ['Algorithms are public', 'Training artifacts shared', 'Datasets sometimes public']),
           ('people', 'Community', ['More diverse contributors', 'More auditing for bias and risk']),
           ('alert', 'Concerns', ['Weights can be modified or misused', 'License sets permitted use'])], accent=[2])
add('m4-s24', 'cols', 'AI Service Cards and SageMaker Model Cards',
    'AWS AI Service Cards describe AWS services; SageMaker Model Cards document your own models.',
    heading='TRANSPARENCY DOCUMENTS ON AWS',
    items=[('doc', 'AWS AI Service Cards', ['For services such as Comprehend, Rekognition, Textract, Titan, Nova', 'Intended uses and limitations', 'Responsible AI design and deployment guidance']),
           ('sagemaker', 'SageMaker Model Cards', ['For models you build', 'Design, training, and evaluation in one record', 'Some details filled in automatically'])])
add('m4-s25', 'quad', 'Evidence for choosing a transparent model',
    'Four sources of evidence: model cards, Amazon Bedrock Model Evaluations, data documentation, and licensing.',
    items=[('doc', 'Model cards', ['Purpose, limits, evaluation results']), ('bedrock', 'Bedrock evaluations', ['Performance on your own prompts', 'Results you can share']),
           ('db', 'Data documentation', ['Sources, coverage, and gaps']), ('key', 'Licensing', ['Permitted uses and obligations'])])
add('m4-s26', 'shap', 'SageMaker Clarify feature attributions',
    'A bar chart of mean absolute SHAP values for four loan features, with income contributing most.',
    chart_title='Feature attributions: loan model',
    features=[('Income', .048), ('Occupation', .019), ('Account age', .017), ('Region', .011)],
    notes=['Longer bar: larger effect on predictions', 'Based on Shapley values (SHAP)', 'Global view here; local views explain one prediction', 'An unexpected top feature can signal bias'])
add('m4-s27', 'person_center', 'Human-centered AI',
    'A person between two panels: human-centered AI practices and the responsible AI principles they rely on.',
    panels=[('Human-centered AI', ['Starts from human needs and values', 'Diverse perspectives in design', 'Strengthens human abilities'], B),
            ('Built on responsible AI', ['Transparency', 'Explainability', 'Fairness', 'Privacy'], O)],
    center='People stay responsible for important decisions',
    foot='The system assists people; it does not remove them from the decision.')
add('m4-s28', 'cycle', 'Human-centered design for explainable AI',
    'A loop: show the decision and reasons, the user reviews, the user gives feedback or overrides the result, and the team improves the model.',
    center='Explainable by design',
    items=[('eye', 'Show decision and reasons'), ('person', 'User reviews'), ('speech', 'Give feedback'), ('train', 'Review and improve')])
add('m4-s29', 'a2i_flow', 'Amazon Augmented AI',
    'A model sends predictions through Amazon A2I: high-confidence results go to the client app, low-confidence results go to human reviewers, and stored reviews can retrain the model.',
    high='High confidence: returned directly', low='Low confidence',
    loop='Reviewed results can be added to the training data')
add('m4-s30', 'rlhf', 'Reinforcement learning from human feedback',
    'Stage one: an initial model writes responses, people rank them, and the rankings train a reward model. Stage two: the reward model scores new responses to tune the model.',
    loop='Scores update the model through reinforcement learning',
    foot='The result is an aligned model whose answers better match human preferences.')
add('m4-s31', 'ranking', 'Ranking responses in SageMaker Ground Truth',
    'Three responses to one prompt rated most, somewhat, or least clear; the rankings become training data.',
    prompt='Prompt: Explain how to reset a bike lock code.',
    responses=[('RESPONSE A', 'Numbered steps with the default code', 0), ('RESPONSE B', 'Correct but one long paragraph', 1), ('RESPONSE C', 'Mentions a different lock model', 2)],
    right_title='Rankings become training data',
    foot='Ground Truth collects preferences for training; Amazon A2I reviews predictions after deployment.')

# ================================================================== Module 5: Security, Compliance, and Governance
# ------------------------------------------------------------------ task 5.1
add('m5-s2', 'shared_resp', 'The AWS shared responsibility model',
    'Customer layers for security in the cloud stacked above AWS layers for security of the cloud.',
    customer=[(['Customer data'], 40), (['Platform, applications, identity and access management'], 40), (['Operating systems, network, and firewall configuration'], 40),
              (['Client-side encryption and data integrity', 'Server-side encryption', 'Network traffic protection'], 58)],
    aws=[(['Compute', 'Storage', 'Database', 'Networking'], 40), (['Hardware and AWS global infrastructure'], 40), (['Regions', 'Availability Zones', 'Edge locations'], 40)],
    foot='For AI: AWS secures the managed service; you secure your data, prompts, model access, and how outputs are used.')
add('m5-s3', 'chain', 'Who can access what in IAM',
    'IAM connects who (users and workloads) through permissions in policies to what (AWS resources).',
    heading='AWS IDENTITY AND ACCESS MANAGEMENT',
    steps=[('people', 'Who', 'Workforce users and workloads'), ('doc', 'Can access', 'Permissions in IAM policies'), ('db', 'What', 'AWS resources in your organization')],
    note='Every request is checked against policies before it reaches a resource.')
add('m5-s4', 'tiles', 'IAM features',
    'Six IAM features: global, integrated with AWS services, shared access, MFA, identity federation, and no additional charge.',
    heading='IAM FEATURES', cols=3,
    items=[('globe', 'Global', ['One service across all Regions']), ('gear', 'Integrated', ['Works with almost every AWS service']), ('people', 'Shared access', ['No shared passwords or keys']),
           ('key', 'MFA', ['A second factor beyond the password']), ('person', 'Federation', ['Sign in with a corporate identity']), ('flag', 'No extra charge', ['Included with your AWS account'])])
add('m5-s5', 'idtree', 'IAM users',
    'An IAM user with two ways to sign in, beside its definition and best practice.',
    definition='An identity for one person or application that interacts with AWS, with its own long-term credentials.',
    practice='Never share a user. For people, prefer federated sign-in through IAM Identity Center, which uses temporary credentials.',
    root=('person', 'IAM user'), children=[('client', 'Console: password and MFA'), ('code', 'Programmatic: access keys')],
    note='Rotate or remove access keys that are no longer needed.')
add('m5-s6', 'policy_doc', 'An identity-based IAM policy',
    'A JSON policy that allows starting and stopping EC2 instances, with what each element means.',
    code=['{', '  "Version": "2012-10-17",', '  "Statement": [{', '    "Effect": "Allow",', '    "Action": [', '      "ec2:StartInstances",', '      "ec2:StopInstances"', '    ],', '    "Resource": "arn:aws:ec2:*:*:instance/*"', '  }]', '}'],
    parts=[('Effect', 'Allow or Deny'), ('Action', 'Which API operations are covered'), ('Resource', 'Which resources the actions apply to'), ('Attached to', 'A user, group, or role')],
    practice='Least privilege: only the actions this task needs.')
add('m5-s7', 'policy_doc', 'A resource-based S3 bucket policy',
    'A bucket policy that gives one named user access to one bucket, with what each element means.',
    code=['{', '  "Version": "2012-10-17",', '  "Statement": [{', '    "Effect": "Allow",', '    "Principal": {', '      "AWS": "arn:aws:iam::111122223333:', '              user/data-engineer"', '    },', '    "Action": "s3:GetObject",', '    "Resource": "arn:aws:s3:::training-data/*"', '  }]', '}'],
    parts=[('Principal', 'Who the policy applies to'), ('Action', 'What they may do'), ('Resource', 'The bucket and objects covered'), ('Attached to', 'The resource itself')],
    practice='Name specific principals and actions; avoid wildcards such as s3:*.')
add('m5-s8', 'block_public', 'S3 Block Public Access',
    'Requests from the public internet are stopped before reaching buckets in an account where Block Public Access is on.',
    buckets=['Training data', 'Model artifacts'],
    facts=['On by default for new buckets', 'Can be set for the whole account', 'Overrides policies that grant public access'],
    foot='Data stays private unless someone deliberately changes the setting.')
add('m5-s9', 'idtree', 'IAM groups',
    'An IAM group whose attached policies apply to three member users.',
    definition='A collection of IAM users. Every member inherits the policies attached to the group.',
    practice='Attach policies to groups instead of to individual users, so permissions stay consistent.',
    root=('people', 'Data science group'), children=[('person', 'User 1'), ('person', 'User 2'), ('person', 'User 3')],
    note='Moving a person to another group changes their permissions.')
add('m5-s10', 'idtree', 'IAM roles',
    'An IAM role that can be assumed by a person or by an AWS service for temporary access.',
    definition='An identity with permissions that a person or AWS service assumes for a limited time, receiving temporary credentials.',
    practice='Use roles to grant access instead of long-lived credentials stored in code or notebooks.',
    root=('key', 'IAM role'), children=[('person', 'Person'), ('sagemaker', 'SageMaker training job')],
    note='Each can assume the role; the credentials expire automatically.')
add('m5-s11', 'chain', 'SageMaker Role Manager',
    'Choose a persona and its ML activities, and Role Manager adds the matching permissions to a new IAM role.',
    heading='FROM PERSONA TO ROLE',
    steps=[('people', 'Persona', 'Data scientist, MLOps, or SageMaker compute'), ('gear', 'ML activities', 'Select what the persona does'), ('sagemaker', 'Role Manager', 'Builds the permissions'), ('key', 'IAM role', 'Least privilege for those activities')],
    accent=[3], note='Refine the generated permissions if a team needs fewer.')
add('m5-s12', 'chain', 'Encryption at rest',
    'Plaintext data and a data key pass through an encryption algorithm to produce ciphertext on a storage volume.',
    heading='ENCRYPTING STORED DATA',
    steps=[('doc', 'Plaintext data', 'Readable by anyone with access'), ('key', 'Data key + algorithm', 'Server-side encryption'), ('lock', 'Encrypted data', 'Unreadable without the key'), ('db', 'Storage volume', 'SageMaker ML volumes encrypted by default')],
    accent=[2])
add('m5-s13', 'cols', 'AWS KMS key types',
    'AWS managed keys compared with customer managed keys, and the best practice to set a default key.',
    heading='AWS KEY MANAGEMENT SERVICE',
    items=[('kms', 'AWS managed keys', ['Created and rotated by AWS', 'Used by a service on your behalf', 'Little to manage']),
           ('key', 'Customer managed keys', ['You set key policies and rotation', 'You can disable or schedule deletion', 'Use recorded in CloudTrail'])],
    note='Best practice: specify a KMS key for default encryption of buckets and ML resources.')
add('m5-s14', 'transit', 'Encryption in transit',
    'TLS protects traffic between an application and the SageMaker API; optional encryption protects traffic between training instances.',
    foot='Inter-node encryption adds processing time, so turn it on for highly sensitive data.')
add('m5-s15', 'chain', 'Amazon Macie',
    'Macie inventories S3 buckets, discovers sensitive data, reports findings, and PII is removed before data is used.',
    heading='FINDING SENSITIVE DATA',
    steps=[('s3', 'S3 buckets', 'Access, sharing, encryption'), ('macie', 'Amazon Macie', 'ML and pattern matching'), ('alert', 'Findings', 'Where PII was found'), ('filter', 'Remove PII', 'At ingestion, before training')],
    accent=[2])
add('m5-s16', 'chain', 'Logging with AWS CloudTrail',
    'API calls from people and services are recorded by CloudTrail, delivered to an S3 bucket, and reviewed for audits.',
    heading='AN AUDIT TRAIL OF API ACTIVITY',
    steps=[('person', 'API call', 'User, role, or service'), ('cloudtrail', 'AWS CloudTrail', 'Records who, what, when'), ('s3', 'S3 bucket', 'Log files you keep'), ('search', 'Review', 'Investigations and audits')])
add('m5-s17', 'vpc_net', 'SageMaker Studio in a VPC',
    'A SageMaker Studio domain set to VPC-only connects its notebook through an elastic network interface in a private subnet of your VPC, with no direct internet access.')
add('m5-s18', 'privatelink', 'VPC interface endpoints',
    'A VPC-only notebook in a private subnet reaches the SageMaker API, SageMaker Runtime, Amazon S3, and CloudWatch Logs through interface endpoints, without internet access.',
    services=[('sagemaker', 'SageMaker API'), ('sagemaker', 'SageMaker Runtime'), ('s3', 'Amazon S3'), ('logs', 'CloudWatch Logs')])
add('m5-s19', 'radial', 'AI system vulnerabilities',
    'A model surrounded by five vulnerabilities: poisoned training data, manipulated input, prompt injection, leaked output, and model inversion or theft.',
    center_icon='model', center='AI system', accent='alert',
    items=[('db', 'Training data', 'Poisoned or fake examples'), ('alert', 'Prompt injection', 'Hidden instructions in input'),
           ('doc', 'Input data', 'Manipulated to mislead'), ('speech', 'Output data', 'Leaks sensitive information'), ('eye', 'Model', 'Inversion or theft')])
add('m5-s20', 'cols', 'Mitigating AI vulnerabilities',
    'Nine mitigations grouped into protect, validate, and monitor.',
    heading='LAYERED MITIGATIONS', arrows=True,
    items=[('lock', 'Protect', ['Secure and limit training data', 'Encrypt data and models', 'Restrict model access']),
           ('filter', 'Validate', ['Sanitize input data', 'Sanitize output data', 'Train on adversarial examples']),
           ('chart', 'Monitor', ['Retrain and revalidate', 'Detect data anomalies', 'Track prediction drift'])])
add('m5-s21', 'chain', 'Monitoring data quality',
    'Model Monitor captures endpoint data, builds a baseline from training data, runs scheduled jobs, and reports violations.',
    heading='SAGEMAKER MODEL MONITOR: DATA QUALITY',
    steps=[('endpoint', 'Capture data', 'Requests and responses'), ('chart', 'Create baseline', 'Statistics from training data'), ('calendar', 'Schedule jobs', 'Compare on a schedule'), ('alert', 'Evaluate', 'Report violations')],
    accent=[3])
add('m5-s22', 'chain', 'Monitoring model quality',
    'Model Monitor captures predictions, creates a quality baseline, runs jobs, merges ground truth labels, and evaluates metrics.',
    heading='SAGEMAKER MODEL MONITOR: MODEL QUALITY',
    steps=[('endpoint', 'Capture', 'Predictions'), ('chart', 'Baseline', 'Expected quality'), ('calendar', 'Quality jobs', 'On a schedule'), ('table', 'Merge labels', 'Ground truth arrives later'), ('alert', 'Evaluate', 'Alert on drops')],
    accent=[4])
add('m5-s23', 'tiles', 'Version control for ML',
    'Six things to version: code, datasets, containers, training jobs, models, and endpoints.',
    heading='VERSION EVERYTHING THAT SHAPES A MODEL', cols=3,
    items=[('code', 'Code', ['Git repositories']), ('s3', 'Datasets', ['S3 Versioning or partitions']), ('server', 'Containers', ['Images in Amazon ECR']),
           ('train', 'Training jobs', ['Data, code, and settings used']), ('model', 'Models', ['Registered model versions']), ('endpoint', 'Endpoints', ['Which model each one serves'])])
add('m5-s24', 'registry', 'SageMaker Model Registry',
    'A model group with three versions: one rejected, one approved and deployed to an endpoint, and one pending review.',
    group='CHURN', versions=[('VERSION 1', 'Accuracy 0.81', 'Rejected'), ('VERSION 2', 'Accuracy 0.88', 'Approved'), ('VERSION 3', 'Accuracy 0.89, review open', 'Pending')],
    notes=['Each training run adds a version', 'Metrics and metadata stored with it', 'Only approved versions deploy'])
add('m5-s25', 'quad', 'SageMaker Model Cards for governance',
    'Four governance uses of model cards: intended use and risk, audit support, business context, and version history.',
    items=[('flag', 'Intended use and risk', ['How to use the model', 'Its risk rating']), ('search', 'Audit support', ['How it was trained', 'How it performed']),
           ('chart', 'Business context', ['The goal it supports']), ('clock', 'History', ['Each change is a new version'])])
add('m5-s26', 'lineage', 'SageMaker ML Lineage Tracking',
    'Dataset, image, and input configuration artifacts feed a training job, which produces model, checkpoint, and output artifacts; the model serves an endpoint.',
    inputs=[('db', 'Dataset'), ('server', 'Training image'), ('doc', 'Input config')], job='Training job',
    outputs=[('clock', 'Checkpoint'), ('model', 'Model artifact'), ('doc', 'Output config')], endpoint='Endpoint',
    foot='Ask the graph which dataset and image produced the model behind any endpoint.')
add('m5-s27', 'feature_time', 'Feature lineage and point-in-time queries',
    "A feature's value changes over time; a point-in-time query returns its value as of a training example's date, beside the feature group's lineage.",
    feature='FEATURE: AVERAGE ORDER VALUE',
    points=[(.02, 'Jan', 42), (.3, 'Feb', 47), (.62, 'Apr', 55), (.85, 'May', 61)],
    query=(.48, 'As of Mar 1: 47', 47),
    caption='A point-in-time query ignores later values, so training never sees the future.',
    lineage=[('db', 'Orders table'), ('gear', 'Feature pipeline'), ('table', 'Feature group')])
add('m5-s28', 'hub', 'SageMaker Model Dashboard',
    'Model Dashboard at the centre with four views: model portal, monitoring status, lineage graph, and endpoint metrics.',
    center_icon='sagemaker', center='Model Dashboard',
    items=[('app', 'Model portal', 'All models in one console view'), ('alert', 'Monitoring', 'Model Monitor job status'),
           ('branch', 'Lineage', 'Open the lineage graph'), ('chart', 'Endpoints', 'Performance metrics')])
add('m5-s29', 'checklist', 'Bedrock Guardrails as a security control',
    'Four threats matched with the guardrail policy that addresses each.',
    heading='GUARDRAILS AGAINST GENERATIVE AI THREATS', left='Threat', right='Guardrail policy',
    rows=[('alert', 'Prompt injection and jailbreaks', 'Prompt attack filter on user input'), ('lock', 'Sensitive data leakage', 'Sensitive information filters: block or mask PII'),
          ('speech', 'Toxic or off-limits output', 'Content filters and denied topics'), ('doc', 'Text from other sources', 'ApplyGuardrail API, without invoking a model')])
add('m5-s30', 'agent_auth', 'AgentCore Identity and Policy in AgentCore',
    'A user signs in to an agent; AgentCore Identity holds the agent credentials in a token vault; Policy at AgentCore Gateway allows reading availability and denies canceling another user booking.',
    vault='OAuth tokens and API keys',
    rules=['Checks every tool call', 'Cedar policies', 'Default deny; forbid wins'],
    allowed='Read availability', denied="Cancel another user's booking",
    foot="Identity supplies the agent's credentials; Policy decides whether each tool call is allowed.")
add('m5-s31', 'tiles', 'Security and privacy considerations for AI applications',
    'Six considerations: application security, infrastructure protection, threat detection, vulnerability management, prompt injection and leakage, and output filtering.',
    heading='SECURING THE WHOLE AI APPLICATION', cols=3,
    items=[('code', 'Application security', ['Secure code and APIs around the model']), ('vpc', 'Infrastructure', ['VPCs, PrivateLink, firewalls']), ('search', 'Threat detection', ['Amazon GuardDuty']),
           ('inspector', 'Vulnerabilities', ['Amazon Inspector scans']), ('alert', 'Injection and leakage', ['Untrusted input, no secrets in prompts']), ('filter', 'Output filtering', ['Validate; block toxic content'])])
add('m5-s32', 'fanin', 'Audit trails for AI interactions',
    'CloudTrail API activity, Bedrock invocation logs, and guardrail interventions feed an audit trail stored in CloudWatch Logs and S3.',
    heading='EVIDENCE FOR EVERY AI INTERACTION',
    sources=[('cloudtrail', 'CloudTrail API activity'), ('bedrock', 'Bedrock invocation logs'), ('shield', 'Guardrail interventions')],
    center_icon='logs', center='Audit trail', center_detail='Who, which model, input, output',
    outputs=[('cloudwatch', 'CloudWatch Logs', 'Query and alert'), ('s3', 'Amazon S3', 'Long-term retention')])
add('m5-s33', 'quad', 'Secure data engineering practices',
    'Four practices: assess data quality, apply privacy-enhancing technologies, control data access, and protect data integrity.',
    items=[('filter', 'Data quality', ['Complete, accurate, current', 'Checked before use']), ('lock', 'Privacy-enhancing tech', ['Masking, tokenization', 'Anonymization, differential privacy']),
           ('key', 'Access control', ['Role-based, least privilege', 'Reviewed regularly']), ('shield', 'Data integrity', ['Versions, checksums, change logs'])])
add('m5-s34', 'cols', 'Source citation and documenting data origins',
    'Three ways to document origins: citations in answers, lineage and catalog for data, and model cards for models.',
    heading='SHOW WHERE ANSWERS AND MODELS COME FROM',
    items=[('docs', 'Citations', ['RAG returns source documents', 'Knowledge Bases cite sources']), ('branch', 'Lineage and catalog', ['Where data came from', 'Glue Data Catalog describes it']),
           ('doc', 'Model cards', ['Data, training, evaluation', 'One record per model'])])
add('m5-s35', 'chain', 'Detecting hallucinations and grounding answers',
    'Retrieve trusted sources, generate from them, run a grounding check, validate the output, and route low-confidence answers to a fallback or a person.',
    heading='GROUND, CHECK, THEN DELIVER',
    steps=[('search', 'Retrieve', 'Trusted passages (RAG)'), ('model', 'Generate', 'Answer only from sources'), ('scale', 'Grounding check', 'Score vs. threshold'), ('check', 'Validate', 'Rules and automated reasoning'), ('people', 'Low confidence', 'Fallback or human review')],
    accent=[2])

# ------------------------------------------------------------------ task 5.2
add('m5-s37', 'cols', 'AWS Artifact',
    'AWS Artifact provides AWS compliance reports, agreements with AWS, and third-party vendor reports.',
    heading='COMPLIANCE EVIDENCE FROM AWS',
    items=[('docs', 'AWS reports', ['SOC, ISO, and other reports', 'Downloaded on demand']), ('doc', 'Agreements', ['Review and accept', 'Such as a BAA']), ('people', 'Third-party reports', ['From vendors on AWS Marketplace'])],
    note="Shows auditors how AWS meets its side of the shared responsibility model.")
add('m5-s38', 'cols', 'AWS compliance resources',
    'Three compliance resources: customer stories, technical papers and documentation, and an auditor learning path.',
    heading='RESOURCES FOR REGULATED WORKLOADS',
    items=[('people', 'Customer stories', ['Regulated industries on AWS']), ('book', 'Technical papers', ['Map services to regulations']), ('check', 'Auditor learning', ['How to audit AWS workloads'])],
    note='Plan your own controls before an audit, not after it.')
add('m5-s39', 'standards', 'Emerging AI compliance standards',
    'ISO/IEC 42001 and 23894, the four EU AI Act risk tiers, and the NIST AI RMF functions Govern, Map, Measure, and Manage.',
    iso=[('ISO/IEC 42001', 'Requirements for an AI management system'), ('ISO/IEC 23894', 'Guidance for managing AI risk')],
    tiers=[('Unacceptable', 'Banned'), ('High', 'Legal requirements'), ('Limited', 'Disclose AI use'), ('Minimal', 'Few or no rules')],
    foot='Expect customers and regulators to ask for evidence that AI risks are assessed and managed.')
add('m5-s40', 'risk_matrix', 'AI risk matrix',
    'Three risk assessment steps beside a five-by-five grid of likelihood and severity, with levels from very low to critical.',
    steps=['Define the use case and the stakeholders it affects.', 'Identify harmful events; rate inherent and residual risk.', 'Summarize levels for each risk dimension and decide.'],
    foot='Example grid: the level rises with both likelihood and severity.')
add('m5-s41', 'cols', 'The proposed Algorithmic Accountability Act',
    'Two expectations of the proposed act: transparency and explainability, and monitoring for bias.',
    heading='PROPOSED IN THE US, NOT ENACTED',
    items=[('eye', 'Transparency', ['Favor interpretable algorithms', 'Or model-agnostic explanations']), ('scale', 'Monitor for bias', ['Measure and track bias', 'For example, SageMaker Clarify'])],
    note='Intent: companies assess the impact of automated decision systems.')
add('m5-s42', 'chain', 'AWS Audit Manager',
    'Choose a framework, collect evidence continuously, review it, and produce an assessment report.',
    heading='CONTINUOUS AUDIT EVIDENCE',
    steps=[('auditmanager', 'Choose framework', 'Generative AI or custom'), ('logs', 'Collect evidence', 'From CloudTrail, Config, others'), ('search', 'Review', 'Assign and track controls'), ('doc', 'Report', 'Assessment report for auditors')])
add('m5-s43', 'chain', 'AWS Config',
    'Resources are recorded by AWS Config, evaluated by rules and conformance packs, and remediated with Systems Manager Automation.',
    heading='KEEP CONFIGURATIONS COMPLIANT',
    steps=[('server', 'Resources', 'EC2, S3, SageMaker, and more'), ('config', 'AWS Config', 'Records every change'), ('check', 'Rules and packs', 'AI and ML best practices'), ('gear', 'Remediate', 'Systems Manager Automation')],
    accent=[3])
add('m5-s44', 'cols', 'Amazon Inspector',
    'Inspector scans workloads automatically, reports vulnerabilities and network exposure, and recommends fixes by severity.',
    heading='AUTOMATED VULNERABILITY MANAGEMENT', arrows=True,
    items=[('inspector', 'Scan', ['EC2 instances', 'ECR container images', 'Lambda functions']), ('alert', 'Find', ['Software vulnerabilities', 'Network exposure', 'Scored by severity']), ('tools', 'Fix', ['Remediation guidance', 'Most serious first'])])
add('m5-s45', 'tiles', 'AWS Trusted Advisor',
    'Trusted Advisor check categories: cost optimization, performance, security, fault tolerance, service limits, and operational excellence.',
    heading='TRUSTED ADVISOR CHECK CATEGORIES', cols=3,
    items=[('chart', 'Cost', ['Idle or oversized resources']), ('clock', 'Performance', ['Throughput and latency']), ('lock', 'Security', ['Open ports, root MFA']),
           ('shield', 'Fault tolerance', ['Backups and redundancy']), ('flag', 'Service limits', ['Usage near quotas']), ('gear', 'Operational excellence', ['Operating best practices'])])
add('m5-s46', 'cols', 'Data governance: curate, understand, protect',
    'Three pillars of data governance: curate, understand, and protect.',
    heading='THREE PILLARS OF DATA GOVERNANCE',
    items=[('filter', 'Curate', ['Accurate, complete, consistent data']), ('search', 'Understand', ['Discover data and its meaning']), ('shield', 'Protect', ['Privacy and security with access'])])
add('m5-s47', 'cols', 'Data governance strategies and roles',
    'Start from business objectives and assign three roles: data owner, data steward, and IT roles.',
    heading='START WITH THE DATA THE BUSINESS NEEDS MOST',
    items=[('person', 'Data owner', ['Accountable for a domain', 'Decides who may use it']), ('people', 'Data steward', ['Quality and definitions', 'Day-to-day policy']), ('server', 'IT roles', ['Platforms and pipelines', 'Enforce the controls'])])
add('m5-s48', 'chain', 'Discovery and understanding',
    'Profile the data, catalog it, and document its lineage.',
    heading='HELP PEOPLE FIND AND TRUST DATA',
    steps=[('chart', 'Data profiling', 'Find problems and characteristics'), ('table', 'Data catalog', 'Make datasets findable'), ('branch', 'Data lineage', 'Origin, moves, transformations')])
add('m5-s49', 'chain', 'AWS Glue DataBrew for data governance',
    'Original data becomes a dataset, a DataBrew job profiles and cleans it, and the lineage shows each step to the cleaned data.',
    heading='PROFILE, CLEAN, AND TRACE',
    steps=[('s3', 'Original data', 'Raw source'), ('table', 'Dataset', 'Registered in DataBrew'), ('databrew', 'Profile and job', 'Quality rules, statistics'), ('s3', 'Cleaned data', 'Lineage records each step')],
    accent=[2])
add('m5-s50', 'fanin', 'Curation',
    'Data from several systems is integrated and curated, producing quality-checked, merged, and reconciled data.',
    heading='CURATION',
    sources=[('db', 'Sales system'), ('server', 'Support tickets'), ('docs', 'Product files')],
    center_icon='filter', center='Curate', center_detail='Quality, integration, management',
    outputs=[('tools', 'Issues fixed', 'From profiling'), ('table', 'Merged', 'One view of sources'), ('scale', 'Reconciled', 'Systems agree')])
add('m5-s51', 'chain', 'AWS Glue Data Catalog and Data Quality',
    'Data sources are scanned by crawlers into the Glue Data Catalog, and Glue Data Quality recommends rules and detects anomalies.',
    heading='CATALOG AND CHECK DATA',
    steps=[('db', 'Data sources', 'S3, databases, and more'), ('search', 'Crawlers', 'Discover schemas'), ('glue', 'Data Catalog', 'Metadata for each dataset'), ('chart', 'Data Quality', 'Rules and anomaly detection')])
add('m5-s52', 'cols', 'Protection',
    'Three parts of data protection: data security, data compliance, and data lifecycle management.',
    heading='PROTECTION',
    items=[('lock', 'Data security', ['Who can access data', 'And when']), ('flag', 'Data compliance', ['Which rules apply', 'Evidence you meet them']), ('clock', 'Lifecycle', ['How long to keep it', 'Where to store it'])])
add('m5-s53', 'balance', 'Balancing access control and data availability',
    'A balance with access controls on one side and data availability on the other; too much control creates silos and too much access creates risk.',
    left='Security and privacy', right='Innovation and insights',
    left_risk='Too much control: data silos', right_risk='Too much access: exposure risk',
    foot='Governance gives the right people the right data, and no more.')
add('m5-s54', 'chain', 'AWS Lake Formation',
    'A data steward uses Lake Formation to catalog data in Amazon S3 and grant fine-grained access to analytics and ML users.',
    heading='GOVERNED ACCESS TO A DATA LAKE',
    steps=[('person', 'Data steward', 'Defines permissions'), ('lakeformation', 'Lake Formation', 'Catalog and access control'), ('s3', 'Amazon S3', 'Data lake storage'), ('people', 'Users and services', 'Table, column, row, or cell access')],
    accent=[1])
add('m5-s55', 'chain', 'Amazon S3 Lifecycle configuration',
    'An example lifecycle rule moves data from S3 Standard to Standard-IA, Glacier Instant Retrieval, and Glacier Deep Archive, then expires it.',
    heading='AN EXAMPLE LIFECYCLE RULE',
    steps=[('s3', 'S3 Standard', 'Day 0'), ('s3', 'Standard-IA', 'After 30 days'), ('s3', 'Glacier Instant Retrieval', 'After 90 days'), ('s3', 'Glacier Deep Archive', 'After 1 year'), ('clock', 'Expire', 'After 7 years')],
    accent=[4], note='S3 Intelligent-Tiering can move objects between tiers automatically instead.')
add('m5-s56', 'quad', 'Data residency, retention, logging, and monitoring',
    'Four data governance strategies: residency, retention, logging, and monitoring and observation.',
    items=[('globe', 'Residency', ['Keep data in required Regions', 'Know where providers process it']), ('clock', 'Retention', ['Keep as long as required', 'Delete when the period ends']),
           ('logs', 'Logging', ['Record data access', 'Record AI interactions']), ('eye', 'Monitoring', ['Quality, access, model behavior', 'Continuously, not only at audits'])])
add('m5-s57', 'scoping', 'Generative AI Security Scoping Matrix',
    'Five scopes from consumer apps to self-trained models, grouped as buy and build, with the security disciplines that apply to all.',
    scopes=[('Consumer app', 'Public generative AI services', 'Example: a public chat app'), ('Enterprise app', 'SaaS with AI features', 'Example: Amazon Q Business'),
            ('Pre-trained model', 'Your app on a versioned model', 'Example: Bedrock base models'), ('Fine-tuned model', 'Tuned on your data', 'Example: Bedrock custom models'),
            ('Self-trained model', 'Trained from scratch', 'Example: Amazon SageMaker')],
    disciplines='Governance and compliance · Legal and privacy · Risk management · Controls · Resilience')
add('m5-s58', 'metric_table', 'Governance grows with scope',
    'A table of the governance actions added at each scope of the Generative AI Security Scoping Matrix.',
    heading='EACH SCOPE ADDS RESPONSIBILITIES',
    columns=['Scope', 'Add these governance actions'], widths=[190, 562],
    rows=[['1. Consumer app', 'Usage guidelines and training; compliance monitoring; output validation process'],
          ['2. Enterprise app', "Scope 1, plus understand the service's data flow and third parties; align use with regulations"],
          ['3. Pre-trained model', 'Governance framework for building AI services; understand the training data; validate outputs'],
          ['4. Fine-tuned model', 'Scope 3, plus control access to the custom model; it inherits the tuning data classification'],
          ['5. Self-trained model', 'Scope 4, plus govern and protect training data; the model inherits its classification']],
    note='Choose the lowest scope that meets the need to keep governance manageable.')
add('m5-s59', 'chain', 'AI governance strategy',
    'Determine scope, document and communicate policies, define monitoring, and review on a regular cadence, then repeat.',
    heading='A GOVERNANCE CYCLE',
    steps=[('search', 'Determine scope', 'Scoping Matrix'), ('doc', 'Document policies', 'Data standards, access, transparency'), ('chart', 'Define monitoring', 'Metrics, logs, alerts'), ('calendar', 'Review cadence', 'Regular, scheduled reviews')],
    loop='Repeat as use and regulations change', loop_from=3, loop_to=0, loop_y=296, loop_start=240, loop_end=240)
add('m5-s60', 'quad', 'Governance reviews, transparency standards, and training',
    'Four governance processes: review strategies, review cadence, transparency standards, and team training requirements.',
    items=[('search', 'Review strategies', ['Technical, risk, and independent', 'Again after major changes']), ('calendar', 'Review cadence', ['Scheduled, such as quarterly', 'Triggered by incidents or new rules']),
           ('doc', 'Transparency standards', ['Model cards and AI disclosures', 'Known limitations documented']), ('people', 'Team training', ['Policies, responsible AI, security', 'Before access is granted'])])

# ================================================================== Module 6: Course Review and Wrap-up
add('m6-s1', 'hbars', 'The five exam domains',
    'Horizontal bars of the five exam domains by share of scored content, with Domain 3 the largest at 28 percent.',
    heading='SHARE OF SCORED CONTENT',
    rows=[('1', 'Fundamentals of AI and ML', 20), ('2', 'Fundamentals of GenAI', 24), ('3', 'Applications of Foundation Models', 28),
          ('4', 'Guidelines for Responsible AI', 14), ('5', 'Security, Compliance, and Governance', 14)],
    note='Study every domain: the exam is passed on the overall score, not domain by domain.')
add('m6-s2', 'quad', 'Exam format and scoring',
    'Four facts about the exam: question types, scored and unscored questions, no penalty for guessing, and scaled results with a passing score of 700.',
    items=[('check', 'Question types', ['Multiple choice, multiple response', 'Ordering and matching']), ('doc', '50 scored + 15 unscored', ['Unscored items are not identified']),
           ('flag', 'No guessing penalty', ['Unanswered counts as wrong', 'Answer every question']), ('chart', 'Scaled score', ['100 to 1,000; pass at 700', 'Pass overall, not per domain'])])
add('m6-s3', 'chain', 'Test-taking tips',
    'Five steps for each question: read the question, find key words, eliminate options, compare the rest, and choose or flag.',
    heading='FIVE STEPS FOR EACH QUESTION',
    steps=[('doc', 'Read first', 'The question before the options'), ('search', 'Key words', 'Qualifiers and constraints'), ('filter', 'Eliminate', 'Options that miss a requirement'),
           ('scale', 'Compare', 'Remaining options vs. key words'), ('flag', 'Choose or flag', 'Return to hard ones later')],
    accent=[4])
add('m6-s4', 'chain', 'Using a practice exam',
    'Take an official practice exam, review results by domain, study the explanations, practice new scenarios, and repeat.',
    heading='PRACTICE WITH A PURPOSE',
    steps=[('docs', 'Practice exam', 'Official, exam-style scoring'), ('chart', 'Results by domain', 'Where points were lost'), ('book', 'Explanations', 'Why wrong options are wrong'), ('search', 'New scenarios', 'Target each gap')],
    loop='Repeat until every domain is solid', loop_from=3, loop_to=0, loop_y=296, loop_start=240, loop_end=240)
add('m6-s5', 'chain', 'Registering for the exam',
    'Open the official exam page, choose a test center or online proctoring, check identification and system requirements, and schedule the date.',
    heading='FROM READY TO REGISTERED',
    steps=[('globe', 'Exam page', 'Current guide and scheduling'), ('client', 'Choose delivery', 'Test center or online proctor'), ('check', 'Requirements', 'ID, system, check-in'), ('calendar', 'Schedule', 'After practice shows readiness')],
    accent=[3])
add('m6-s6', 'quad', 'AWS Skill Builder',
    'Four kinds of learning in AWS Skill Builder: digital courses, game-based learning and challenges, self-paced labs, and exam preparation.',
    items=[('book', 'Digital courses', ['Courses and learning plans', 'Many at no charge']), ('flag', 'Games and challenges', ['Solve realistic problems', 'Interactive formats']),
           ('code', 'Self-paced labs', ['Real AWS environments', 'Some need a subscription']), ('check', 'Exam preparation', ['Official practice questions', 'Practice exams'])])
add('m6-s7', 'cols', 'Continuing your learning',
    'Three ways to keep learning: no-charge digital training, classroom training, and AWS Certification.',
    heading='KEEP BUILDING YOUR SKILLS',
    items=[('book', 'Digital training', ['Self-paced', 'No charge for many courses']), ('people', 'Classroom training', ['Led by an instructor', 'Guided hands-on practice']), ('flag', 'AWS Certification', ['Industry-recognized', 'Validates your skills'])],
    note='Send workshop feedback to the organizer with the slide ID.')
add('m6-s8', 'levels', 'AWS Certification levels',
    'Foundational, Associate, and Professional certifications rise in depth and experience; Specialty certifications cover specific areas.',
    heading='AWS CERTIFICATION LEVELS',
    steps=[('book', 'Foundational', 'Knowledge-based; no prior AWS experience'), ('person', 'Associate', 'Role-based; some AWS or IT experience'), ('people', 'Professional', 'Advanced; about two years on AWS')],
    side=('search', 'Specialty', 'Focused on one technical area; experience varies by exam'),
    foot='AI Practitioner and Cloud Practitioner are Foundational certifications.')
