// Original course explanations and scenarios; see the AIF exam alignment map.
const AIF_COURSE_DATA = {
  "id": "aif",
  "version": "v0.16 beta",
  "lastModified": "2026-09-16",
  "title": "AWS Certified AI Practitioner (AIF-C01)",
  "description": "Build foundational AI judgment through original explanations, diagrams, and scenario checkpoints aligned to the AIF-C01 exam guide.",
  "catalog": {
    "tag": "AIF-C01",
    "theme": "purple",
    "order": 2,
    "description": "Gain foundational knowledge of artificial intelligence, machine learning concepts, and generative AI services on AWS. Perfect for builders looking to implement predictive and generative models.",
    "labAccess": "Requires Subscription"
  },
  "modules": [
    {
      "id": "m1",
      "title": "Fundamentals of AI and ML",
      "objectives": [
        "Explain basic AI concepts and terminologies.",
        "Identify practical use cases for AI.",
        "Describe the ML development lifecycle."
      ],
      "slides": [
        {
          "id": "m1-s1",
          "title": "AIF-C01 Learning Map",
          "bullets": [
            {
              "text": "**Learning goal:** Learn how an organization chooses, checks, and controls AI systems. This exam does not test whether you can write model code.",
              "indent": 0
            },
            {
              "text": "**Exam weights:** AI and ML fundamentals 20%; generative AI fundamentals 24%; foundation model applications 28%; responsible AI 14%; security and governance 14%.",
              "indent": 0
            },
            {
              "text": "**How to study:** For every scenario, ask three questions. What outcome is needed? What are the limits (cost, time, rules)? What evidence would prove it worked? Knowing a service name is not enough on its own.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m1-s2",
          "title": "AI, Models, and Algorithms",
          "bullets": [
            {
              "text": "**Artificial intelligence (AI):** Software that does tasks we associate with human thinking, such as recognizing speech, reading images, or picking the next action. AI includes both hand-written rules and learned models.",
              "indent": 0
            },
            {
              "text": "**Machine learning (ML):** Instead of writing the rules by hand, an algorithm studies examples and produces a model. The algorithm is the learning method. The model is the result you use to make predictions.",
              "indent": 0
            },
            {
              "text": "**Training and inference:** Training is when the model learns from data. Inference is when the finished model answers a new request. Answering a request does not retrain the model.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s2.svg",
          "examObjectives": [
            "1.1.1",
            "1.1.2"
          ]
        },
        {
          "id": "m1-s3",
          "title": "AI Value in Everyday Operations",
          "bullets": [
            {
              "text": "**A bicycle workshop:** AI can forecast spare-part demand, flag unusual card transactions for fraud review, or use computer vision to identify damaged parts in photos.",
              "indent": 0
            },
            {
              "text": "**Customer assistance:** Speech recognition converts calls into text. Natural language processing (NLP) identifies topics and helps summarize each request for a technician.",
              "indent": 0
            },
            {
              "text": "**Business value:** Automation handles repetitive work, scalability helps process growing request volumes, and predictions assist human decisions. Measure fewer stockouts or faster service, and require human review when an error could cause harm.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s3.svg",
          "examObjectives": [
            "1.2.1",
            "1.2.4"
          ]
        },
        {
          "id": "m1-s4",
          "title": "Rules, Predictive Models, and AI Agents",
          "bullets": [
            {
              "text": "**Rules-based software:** A fixed shipping-fee table applies an exact policy. Use plain rules when the logic is already known and nothing needs to be predicted.",
              "indent": 0
            },
            {
              "text": "**Traditional ML:** A model estimates delivery delay from past shipment records. Use it when you need one focused prediction and want to see which inputs drove it.",
              "indent": 0
            },
            {
              "text": "**Generative AI:** A foundation model writes a delivery update from the tracking record. It creates new text, so someone must check that the wording is accurate and appropriate.",
              "indent": 0
            },
            {
              "text": "**Agentic AI:** An agent can look up a shipment, choose an allowed tool, and propose a new delivery time. Because it can take actions, it needs permissions and, for important actions, human approval.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s4.svg",
          "examObjectives": [
            "1.1.2",
            "1.2.6"
          ]
        },
        {
          "id": "m1-s5",
          "title": "Recognizing Data Formats",
          "bullets": [
            {
              "text": "**Structured data:** A repair table with fixed columns such as bicycle type, labor hours, and cost. A label is a known outcome added to each row, such as whether the repair succeeded.",
              "indent": 0
            },
            {
              "text": "**Semi-structured and unstructured data:** Inspection events stored as JSON have named fields but flexible shapes. Photos, recordings, and free-form notes have no fixed fields and need extra processing before a model can use them.",
              "indent": 0
            },
            {
              "text": "**Time series:** Measurements recorded over time, such as daily sales. Keep the time order when you test a forecasting model, or the model will cheat by seeing the future.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s5.svg",
          "examObjectives": [
            "1.1.4"
          ]
        },
        {
          "id": "m1-s6",
          "title": "Learning from Labels, Patterns, and Rewards",
          "bullets": [
            {
              "text": "**Supervised learning:** Past repairs with known final costs teach a model to estimate the cost of new jobs. The correct answers are in the training data.",
              "indent": 0
            },
            {
              "text": "**Unsupervised learning:** Rental histories with no labels can still reveal groups of riders who behave alike. Nobody tells the model what the groups are in advance.",
              "indent": 0
            },
            {
              "text": "**Reinforcement learning:** An agent tries actions and gets rewards or penalties from its environment. Over many tries it learns a strategy, called a policy, for a sequence of decisions.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s6.svg",
          "examObjectives": [
            "1.1.5"
          ]
        },
        {
          "id": "m1-s7",
          "title": "Deep Learning and Feature Representation",
          "bullets": [
            {
              "text": "**Neural networks:** Layers of connected nodes turn input features into an output. Training adjusts the strength of the connections, called weights, to reduce mistakes.",
              "indent": 0
            },
            {
              "text": "**Deep learning:** A neural network with many layers can learn feature representations directly from images, sound, and text. Traditional ML often relies more on people selecting and engineering input features. Both approaches need suitable data and evaluation.",
              "indent": 0
            },
            {
              "text": "**Choosing a model size:** Weigh how much data you have, how hard the task is, your compute budget, and whether you must explain the result. A small model is often enough for a well-defined table of numbers.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s7.svg",
          "examObjectives": [
            "1.1.1",
            "1.1.2"
          ]
        },
        {
          "id": "m1-s21",
          "title": "Overfitting, Underfitting, and Generalization",
          "bullets": [
            {
              "text": "**Underfitting:** A model that is too simple misses useful patterns. A repair-time model that always predicts the same duration may perform badly on both its training examples and new jobs.",
              "indent": 0
            },
            {
              "text": "**Overfitting:** A flexible model may memorize peculiarities of its training examples. Very good training results alongside much worse validation results suggest it has not learned patterns that generalize.",
              "indent": 0
            },
            {
              "text": "**Improving generalization:** Compare training and validation performance. More representative data, a better model choice, or regularization that limits complexity may help. Select improvements on validation data before the final test.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.1.1",
            "1.3.1"
          ]
        },
        {
          "id": "m1-s22",
          "title": "Bias, Fairness, and Feature Importance",
          "bullets": [
            {
              "text": "**Representative data:** Include the users and conditions the model will encounter. A speech system trained on a narrow set of accents may serve some callers less accurately.",
              "indent": 0
            },
            {
              "text": "**Feature importance:** Estimate which inputs influence predictions. A location field can act as a proxy for a protected characteristic, so inspect its effects and compare outcomes across relevant groups.",
              "indent": 0
            },
            {
              "text": "**Fairness constraints:** Set an explicit requirement, such as limiting an unjustified difference in error rates between groups. Evaluate that requirement alongside overall performance and the consequences of errors.",
              "indent": 0
            },
            {
              "text": "**Two meanings of bias:** Statistical bias concerns a model missing underlying patterns. Unfair bias concerns differences in treatment or outcomes. Module 4 examines fairness and explainability in more depth.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.1.1",
            "1.3.1"
          ]
        },
        {
          "id": "m1-s8",
          "title": "Language Models and Foundation Models",
          "bullets": [
            {
              "text": "**Foundation model:** A model trained on a very large, broad dataset so it can be reused for many tasks. A large language model (LLM) is a foundation model that reads and writes text.",
              "indent": 0
            },
            {
              "text": "**How a transformer works:** The model learns how words in a sequence relate to one another, using a mechanism called attention. A fluent answer shows the model learned language patterns. It does not prove the answer is true.",
              "indent": 0
            },
            {
              "text": "**Where models come from:** You can call a model hosted by a provider, run a model whose weights are published, or train your own. Compare the license, the operating effort, and how much customization you need.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.1.1",
            "1.3.2"
          ]
        },
        {
          "id": "m1-s9",
          "title": "Selecting an ML Problem Type",
          "bullets": [
            {
              "text": "**Classification:** Assign a request to a known class. Binary classification has two classes, such as urgent or routine. Multiclass classification has more than two, such as brakes, gears, or tires. A model may return class probabilities before choosing a label.",
              "indent": 0
            },
            {
              "text": "**Regression:** Estimate a number, such as how many hours a repair will take. Ask how large the errors are and what a wrong estimate would cost.",
              "indent": 0
            },
            {
              "text": "**Clustering and anomaly detection:** Clustering finds groups of similar customers without predefined categories. Anomaly detection flags the single record that does not fit the usual pattern.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s9.svg",
          "examObjectives": [
            "1.2.3"
          ]
        },
        {
          "id": "m1-s23",
          "title": "Linear Regression and Logistic Regression",
          "bullets": [
            {
              "text": "**Simple linear regression:** Predict a numeric output using one input, such as estimating repair hours from the number of damaged components. The model fits a linear relationship to the observations.",
              "indent": 0
            },
            {
              "text": "**Multiple linear regression:** Use several inputs, such as component count, bicycle age, and technician experience, to estimate the same numeric outcome.",
              "indent": 0
            },
            {
              "text": "**Logistic regression:** A binary classifier estimates a probability between 0 and 1, such as the probability that a repair needs a safety inspection. A decision threshold turns that probability into a class.",
              "indent": 0
            },
            {
              "text": "**Choosing by the output:** An estimate of 2.5 repair hours is regression. An estimated 0.8 probability of an unsafe part supports classification, even though the probability is a number.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.2.3"
          ]
        },
        {
          "id": "m1-s10",
          "title": "Managed Services for Images and Documents",
          "bullets": [
            {
              "text": "**Amazon Rekognition:** Uses computer vision to analyze images and video, such as locating objects in an inspection photo. The next lesson compares its labeling, text, face, and moderation capabilities.",
              "indent": 0
            },
            {
              "text": "**Amazon Textract:** Extracts printed text, handwriting, tables, and form fields from document images. Layout analysis also identifies elements such as headings and paragraphs, helping preserve document structure.",
              "indent": 0
            },
            {
              "text": "**Amazon Comprehend:** Uses natural language processing (NLP) to identify entities, key phrases, sentiment, and personally identifiable information (PII). It analyzes text, including text already extracted by Textract.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s10.svg",
          "examObjectives": [
            "1.2.4",
            "1.2.5"
          ]
        },
        {
          "id": "m1-s24",
          "title": "Amazon Rekognition Capabilities",
          "bullets": [
            {
              "text": "**Object detection and Custom Labels:** Built-in labels identify common objects. Amazon Rekognition Custom Labels trains a model from labeled images for categories specific to a business, such as its own product types.",
              "indent": 0
            },
            {
              "text": "**Text detection:** Read words in images, such as a shop sign or equipment label. For document forms, tables, and page structure, use the extraction capabilities of Amazon Textract.",
              "indent": 0
            },
            {
              "text": "**Facial comparison and analysis:** Compare faces or analyze supported facial attributes. Similarity scores provide evidence for a workflow and do not establish a person's identity with certainty.",
              "indent": 0
            },
            {
              "text": "**Content moderation:** Detect potentially unsafe visual content and route uncertain or consequential cases for review. Choose thresholds that reflect the application's policy and error costs.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.2.4",
            "1.2.5"
          ]
        },
        {
          "id": "m1-s11",
          "title": "Managed Services for Speech and Language",
          "bullets": [
            {
              "text": "**Amazon Transcribe and Amazon Polly:** Transcribe turns a mechanic's voice recording into text. Polly turns written instructions into speech.",
              "indent": 0
            },
            {
              "text": "**Amazon Translate and Amazon Comprehend:** Translate converts a service message into another language. Comprehend analyzes the meaning and sentiment of the text.",
              "indent": 0
            },
            {
              "text": "**Amazon Lex and Amazon Personalize:** Lex supports chatbots and interactive voice response (IVR), where callers interact with an automated telephone service. Personalize uses interaction history to recommend relevant products or content.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s11.svg",
          "examObjectives": [
            "1.2.5"
          ]
        },
        {
          "id": "m1-s25",
          "title": "Amazon Transcribe: Batch, Streaming, and Vocabulary",
          "bullets": [
            {
              "text": "**Batch transcription:** Process stored recordings, such as last week's customer calls in Amazon S3. A completed transcript can then be searched or analyzed with Amazon Comprehend.",
              "indent": 0
            },
            {
              "text": "**Streaming transcription:** Send audio as it arrives to obtain a live transcript, for example captions during a support call. Historical recordings do not require a live streaming workflow.",
              "indent": 0
            },
            {
              "text": "**Custom vocabularies:** Supply specialized words, such as a bicycle brand or model name, to improve their recognition and written form. Test the vocabulary on representative recordings.",
              "indent": 0
            },
            {
              "text": "**Custom language models:** Adapt recognition to broader domain language patterns using suitable text data. A short list of unusual product names usually calls for a vocabulary before a custom language model.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.2.4",
            "1.2.5"
          ]
        },
        {
          "id": "m1-s26",
          "title": "Document Search, Recommendations, and Fraud Detection",
          "bullets": [
            {
              "text": "**Amazon Kendra:** Index documents from connected repositories so users can search for relevant passages using natural-language questions. A technician can retrieve a maintenance instruction from the organization's manuals.",
              "indent": 0
            },
            {
              "text": "**Amazon Personalize:** Recommend items from user interactions, item information, and other supported data. Evaluate whether recommendations help users complete their task, rather than assuming more clicks always mean better outcomes.",
              "indent": 0
            },
            {
              "text": "**Fraud detection:** A payment model can flag unusual transactions for review. Amazon Fraud Detector combines fraud predictions and rules for uses such as account or payment risk, including real-time and batch scoring.",
              "indent": 0
            },
            {
              "text": "**Availability:** Amazon Fraud Detector stopped accepting new customers on November 7, 2025. Recognize its purpose in existing systems; a new project needs an available alternative, such as a suitable model deployed with SageMaker AI.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.2.1",
            "1.2.5"
          ]
        },
        {
          "id": "m1-s27",
          "title": "Amazon Bedrock, SageMaker AI, and JumpStart",
          "bullets": [
            {
              "text": "**Amazon Bedrock:** Access foundation models from multiple providers through managed APIs. Retrieval augmented generation (RAG) supplies retrieved information at request time; fine-tuning changes supported models using additional training data.",
              "indent": 0
            },
            {
              "text": "**Amazon SageMaker AI:** Supports preparing data, training and evaluating models, deploying inference workloads, and operating them. Choose it when the project needs control of a model's development and deployment.",
              "indent": 0
            },
            {
              "text": "**SageMaker JumpStart:** Start with pretrained models for supported tasks, including language and computer vision. Inspect model licenses and requirements, fine-tune when supported, and deploy with SageMaker AI.",
              "indent": 0
            },
            {
              "text": "**A service choice:** For a manual-summary assistant, consider a Bedrock model with retrieved passages. For a custom repair-duration predictor, consider SageMaker training. Modules 2 and 3 develop foundation-model applications further.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.2.5",
            "1.3.2",
            "1.3.4"
          ]
        },
        {
          "id": "m1-s28",
          "title": "Applied AI Scenarios and Success Criteria",
          "bullets": [
            {
              "text": "**Self-service support:** A bicycle rental company uses Lex to collect a caller's request and approved application logic to retrieve a booking. Compare completed requests and transfers to staff, while allowing a caller to reach a person.",
              "indent": 0
            },
            {
              "text": "**Predictive maintenance:** A fleet operator models changes in vibration and temperature to identify equipment needing inspection. Measure avoided downtime and unnecessary service visits before allowing the model to change a maintenance schedule.",
              "indent": 0
            },
            {
              "text": "**Travel recommendations:** A booking site can use Personalize to rank accommodation options, then use a foundation model with retrieved descriptions to explain the choices. Keep availability and price grounded in current booking data.",
              "indent": 0
            },
            {
              "text": "**Visual product search:** An image model retrieves candidate replacement parts from a photo, and a technician checks compatibility. Evaluate correct-part retrieval and return rates using images from actual customer conditions.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.2.1",
            "1.2.4",
            "1.2.6"
          ]
        },
        {
          "id": "m1-s12",
          "title": "The ML Lifecycle and Its Feedback Loops",
          "bullets": [
            {
              "text": "**Frame the task:** Agree with business owners and affected users on the goal, success criteria, and baseline. Check whether suitable data, permissions, budget, and operational support make the project feasible. Define the model's inputs and required output.",
              "indent": 0
            },
            {
              "text": "**Develop and release:** Train several candidate models, test them on data they have not seen, and choose how the model will be called in production.",
              "indent": 0
            },
            {
              "text": "**Learn from operation:** Watch the results and the incoming data. Evidence may call for fresh data, retraining, or a rethink of the original business assumption.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s12.svg",
          "examObjectives": [
            "1.3.1",
            "1.3.5"
          ]
        },
        {
          "id": "m1-s13",
          "title": "Data Preparation and AWS Glue",
          "bullets": [
            {
              "text": "**Before training:** Check for missing values, odd distributions, duplicate records, and whether you are allowed to use the data. This exploratory data analysis finds problems before the model learns them.",
              "indent": 0
            },
            {
              "text": "**AWS Glue:** Runs data integration work such as extract, transform, and load (ETL): read source data, clean or combine it, and write the result to a destination. Its Data Catalog records dataset structure and location.",
              "indent": 0
            },
            {
              "text": "**AWS Glue DataBrew:** Provides visual exploration and preparation without writing code. Save transformations as recipes, and use data quality rules to check conditions such as complete identifiers or valid value ranges.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s13.svg",
          "examObjectives": [
            "1.3.1",
            "1.3.4"
          ]
        },
        {
          "id": "m1-s29",
          "title": "Data Sources and the AWS Glue Data Catalog",
          "bullets": [
            {
              "text": "**Data sources:** Amazon S3 holds objects such as files and training datasets. Amazon RDS runs relational databases, Amazon DynamoDB stores key-value and document data, and Amazon Redshift supports warehouse analytics.",
              "indent": 0
            },
            {
              "text": "**Crawlers and classifiers:** A Glue crawler inspects a configured source. Classifiers recognize its format and infer its schema, and the crawler records table metadata in the Data Catalog. A JDBC connection can provide access to supported relational databases.",
              "indent": 0
            },
            {
              "text": "**Metadata and data:** Catalog entries describe where data lives and how it is structured. Cataloging a dataset does not copy every record into the catalog or grant everyone access to the underlying source.",
              "indent": 0
            },
            {
              "text": "**An ETL example:** Extract repair records, remove duplicate entries, standardize time units, and load the prepared dataset into S3. Keep the source, transformation recipe, and output version traceable.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.1",
            "1.3.4"
          ]
        },
        {
          "id": "m1-s14",
          "title": "Labels and Reusable Features",
          "bullets": [
            {
              "text": "**SageMaker Ground Truth:** Supports human labeling and, for supported tasks, automated labeling. People establish reliable examples, and a model helps label additional data. Existing customers retain access, but AWS has closed the service to new customers.",
              "indent": 0
            },
            {
              "text": "**Feature engineering:** Turns raw data into useful inputs, for example converting repair timestamps into elapsed hours. A feature must be available at prediction time, not only after the outcome is known.",
              "indent": 0
            },
            {
              "text": "**Feature selection:** Choose inputs that help the prediction and remove irrelevant or leaking fields. SageMaker Feature Store manages reusable features, while Data Wrangler in SageMaker Canvas provides visual data preparation. Later lessons explain these roles in detail.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.1",
            "1.3.4"
          ]
        },
        {
          "id": "m1-s30",
          "title": "Human and Automated Data Labeling",
          "bullets": [
            {
              "text": "**Human labeling:** Give reviewers clear definitions and examples of defective and sound parts. Compare reviewers' decisions and investigate disagreements before accepting labels for training.",
              "indent": 0
            },
            {
              "text": "**Ground Truth automation:** For supported tasks, Ground Truth uses human-labeled examples to train a labeling model. Confident predictions can label more examples, while uncertain examples return to human workers.",
              "indent": 0
            },
            {
              "text": "**Active learning:** Select informative or uncertain examples for human review so the labeling process can improve efficiently. Automated labels still need quality checks and representative evaluation.",
              "indent": 0
            },
            {
              "text": "**Availability:** Ground Truth remains usable by existing customers, but new customers cannot enroll. The human-review and active-learning concepts also apply to other labeling workflows.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.1",
            "1.3.4"
          ]
        },
        {
          "id": "m1-s31",
          "title": "Data Wrangler, Canvas, and Feature Store",
          "bullets": [
            {
              "text": "**Data Wrangler in SageMaker Canvas:** Import data, inspect distributions and missing values, and build a visual preparation flow. Each transformation adds a recorded step that can be applied to the full dataset.",
              "indent": 0
            },
            {
              "text": "**Preparation example:** Join repair and bicycle records, handle missing values, and derive bicycle age. Preview the result, check data quality, and save the flow so later runs apply the same transformations.",
              "indent": 0
            },
            {
              "text": "**SageMaker Feature Store:** Organize prepared features into feature groups so teams can discover and reuse them. An online store supports low-latency feature retrieval; an offline store preserves historical records for training and batch work.",
              "indent": 0
            },
            {
              "text": "**Feature governance:** Track feature definitions and record times, control read/write access, and retain the history needed to reproduce training data. Discovering a feature group does not automatically authorize reading its records.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.1",
            "1.3.4"
          ]
        },
        {
          "id": "m1-s15",
          "title": "Training, Tuning, and Validation",
          "bullets": [
            {
              "text": "**Parameters and hyperparameters:** Parameters are the values inside the model that training learns. Hyperparameters, such as the learning rate, are settings you choose that control how training runs.",
              "indent": 0
            },
            {
              "text": "**Three data splits:** Train on the training set. Use the validation set to compare candidates and tune settings. Keep the test set untouched until the end so it gives an honest final score.",
              "indent": 0
            },
            {
              "text": "**SageMaker AI:** Manages training jobs and supports automatic hyperparameter tuning. Compare candidates using a validation metric, record each experiment, and reserve the test set for final evaluation.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s15.svg",
          "examObjectives": [
            "1.3.1",
            "1.3.4"
          ]
        },
        {
          "id": "m1-s32",
          "title": "SageMaker Training Jobs and Automatic Model Tuning",
          "bullets": [
            {
              "text": "**Training execution:** A typical SageMaker training job reads data from S3 and runs an algorithm in a container on managed EC2 compute. The job receives hyperparameters and learns model parameters such as weights.",
              "indent": 0
            },
            {
              "text": "**Training outputs:** Save the resulting model artifacts in S3 and record metrics, code, dataset versions, and settings. The saved model can then be evaluated and deployed without repeating the training job.",
              "indent": 0
            },
            {
              "text": "**Automatic Model Tuning:** Choose hyperparameter ranges and an objective metric, such as validation accuracy to maximize or validation error to minimize. SageMaker runs candidate training jobs and compares their results.",
              "indent": 0
            },
            {
              "text": "**Stopping and selection:** Limit the number or runtime of training jobs and use supported completion criteria. Check the selected candidate against business requirements and evaluate the untouched test set before release.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.1",
            "1.3.4"
          ]
        },
        {
          "id": "m1-s16",
          "title": "Choosing an Inference Pattern",
          "bullets": [
            {
              "text": "**Real-time inference:** A rider waiting for a price needs low latency. A persistent SageMaker endpoint serves requests continuously, so plan for sustained throughput and the cost of running its capacity.",
              "indent": 0
            },
            {
              "text": "**Batch inference:** SageMaker Batch Transform scores large datasets offline, such as all open repairs each night. Running a job when needed can avoid the cost of keeping an endpoint ready between infrequent requests.",
              "indent": 0
            },
            {
              "text": "**Asynchronous and serverless inference:** SageMaker Asynchronous Inference queues requests with large payloads or long processing times. SageMaker Serverless Inference suits intermittent traffic, but startup delay and supported-model limits affect the choice.",
              "indent": 0
            },
            {
              "text": "**Managed or self-hosted:** A managed API removes infrastructure work. Running your own endpoint gives more control but makes you responsible for maintenance and scaling.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s16.svg",
          "examObjectives": [
            "1.1.3",
            "1.3.3"
          ]
        },
        {
          "id": "m1-s33",
          "title": "AWS Compute Choices for Model Deployment",
          "bullets": [
            {
              "text": "**Amazon EC2:** Run an inference server on virtual machines when you need control over its runtime and compute. Your team takes responsibility for the application, capacity decisions, and the parts of the operating environment it manages.",
              "indent": 0
            },
            {
              "text": "**Amazon ECS and Amazon EKS:** Amazon Elastic Container Service (ECS) runs container workloads. Amazon Elastic Kubernetes Service (EKS) provides managed Kubernetes. Both can support a custom inference application, with different orchestration and operational choices.",
              "indent": 0
            },
            {
              "text": "**AWS Batch and AWS Lambda:** Batch schedules queued compute jobs, such as offline predictions. Lambda runs event-driven functions and can invoke a model endpoint or run a small compatible workload within its execution limits.",
              "indent": 0
            },
            {
              "text": "**SageMaker inference:** Its managed deployment options handle model-serving tasks. Compare latency, throughput, payload size, operating effort, and cost with the other compute choices. Managed infrastructure still requires application and model ownership.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.3",
            "1.3.4"
          ]
        },
        {
          "id": "m1-s17",
          "title": "MLOps and Production Readiness",
          "bullets": [
            {
              "text": "**Machine learning operations (MLOps):** Applies DevOps practices to delivering and maintaining ML systems. Version source code, datasets, models, and experiment settings so another person can reproduce a result and investigate a release.",
              "indent": 0
            },
            {
              "text": "**Service roles:** SageMaker Pipelines coordinates ML tasks, and Model Registry records model versions and approval status. SageMaker Model Monitor checks production data and predictions for changes. AWS now limits Model Monitor access to existing customers.",
              "indent": 0
            },
            {
              "text": "**Operational discipline:** Before launch, plan monitoring, rollback, retraining, and who owns the model. Undocumented manual changes and unmaintained dependencies become technical debt.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.4",
            "1.3.5"
          ]
        },
        {
          "id": "m1-s34",
          "title": "Production Monitoring and Drift",
          "bullets": [
            {
              "text": "**Data and model quality:** Data drift is a change in incoming data, such as a new distribution of bicycle ages or missing fields. Model-quality monitoring compares predictions with actual outcomes when those outcomes become available.",
              "indent": 0
            },
            {
              "text": "**Bias drift and feature attribution drift:** Bias drift changes fairness measurements across groups. Feature attribution drift changes which inputs influence predictions compared with the baseline. Either deserves investigation even if average accuracy looks stable.",
              "indent": 0
            },
            {
              "text": "**Alerts and retraining:** Establish baselines, thresholds, review frequency, and an owner. An alert may require fixing an upstream data issue, changing a threshold, or retraining. Validate a replacement and retain rollback capability before deploying it.",
              "indent": 0
            },
            {
              "text": "**SageMaker Model Monitor:** Recognize its data-quality, model-quality, bias, and feature-attribution checks for existing deployments. It is closed to new customers; new monitoring designs can combine suitable evaluation tools with CloudWatch metrics and alarms.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.1",
            "1.3.4",
            "1.3.5"
          ]
        },
        {
          "id": "m1-s35",
          "title": "MLOps Repositories and Workflow Orchestration",
          "bullets": [
            {
              "text": "**Versioned delivery:** Keep code in a source-code repository, features in a feature store, and approved model versions in a model registry. Infrastructure as code (IaC) records environment definitions in reviewable files so deployments can be repeated.",
              "indent": 0
            },
            {
              "text": "**SageMaker Pipelines:** Connect preparation, training, evaluation, and model registration with defined dependencies. Pipelines can be expressed through its Python SDK and JSON definitions. A quality check can prevent a weak candidate from progressing.",
              "indent": 0
            },
            {
              "text": "**AWS Step Functions and Amazon MWAA:** Step Functions coordinates AWS tasks with workflow states and error handling. Amazon Managed Workflows for Apache Airflow (MWAA) runs Airflow workflows, often for scheduled data pipelines.",
              "indent": 0
            },
            {
              "text": "**Automated retraining:** A schedule or monitoring event can start a pipeline. Run validation and required approval checks before promotion; triggering a new training run should not automatically replace the production model.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.4",
            "1.3.5"
          ]
        },
        {
          "id": "m1-s18",
          "title": "A Confusion Matrix for Inspection",
          "bullets": [
            {
              "text": "**Positive means the model flagged a defect:** A true positive is a defective part correctly flagged. A false positive is a sound part flagged by mistake, which sends it for unnecessary inspection.",
              "indent": 0
            },
            {
              "text": "**Negative means the model cleared the part:** A true negative is a sound part correctly cleared. A false negative is a real defect the model missed.",
              "indent": 0
            },
            {
              "text": "**The example test set:** Of 80 parts, the model found 18 defects and missed 6. It flagged 8 sound parts by mistake and cleared 48 correctly. These four counts explain every kind of error.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s18.svg",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s19",
          "title": "Precision, Recall, Accuracy, and F1",
          "bullets": [
            {
              "text": "**Accuracy:** Correct predictions divided by all predictions. Here (18 + 48) ÷ 80 = 82.5%.",
              "indent": 0
            },
            {
              "text": "**Precision and recall:** Precision asks how often a defect alert is right: 18 ÷ 26, about 69%. Recall asks how many real defects were found: 18 ÷ 24 = 75%.",
              "indent": 0
            },
            {
              "text": "**F1 score:** A single number that balances precision and recall, about 72% here. Choose the metric by what hurts more: a missed defect or an unnecessary check. When defects are rare, accuracy alone can look good while missing every defect.",
              "indent": 0
            }
          ],
          "visualization": "aif_m1_s19.svg",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s36",
          "title": "F1, False Positive Rate, and Specificity",
          "bullets": [
            {
              "text": "**The inspection counts:** Use 18 true positives (TP), 8 false positives (FP), 48 true negatives (TN), and 6 false negatives (FN) from the 80-part example.",
              "indent": 0
            },
            {
              "text": "**F1 score:** The harmonic mean of precision and recall can be calculated as 2TP ÷ (2TP + FP + FN). Here, 36 ÷ (36 + 8 + 6) = 0.72, or 72%. It does not incorporate true negatives.",
              "indent": 0
            },
            {
              "text": "**False positive rate (FPR):** Of all sound parts, what fraction received a defect alert? FP ÷ (FP + TN) = 8 ÷ 56, about 14.3%. Its denominator differs from precision, which considers all alerts.",
              "indent": 0
            },
            {
              "text": "**Specificity:** Also called the true negative rate (TNR), it measures how many sound parts were correctly cleared. TN ÷ (TN + FP) = 48 ÷ 56, about 85.7%. Specificity equals 1 − FPR.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s37",
          "title": "Decision Thresholds, ROC Curves, and AUC",
          "bullets": [
            {
              "text": "**Decision threshold:** A defect classifier produces scores. Lowering the alert threshold generally catches more defects and also flags more sound parts. Raising it generally reduces alerts but can miss additional defects.",
              "indent": 0
            },
            {
              "text": "**Receiver operating characteristic (ROC):** Plot true positive rate, which is recall, against false positive rate across thresholds. The inspection example contributes one point: FPR about 14.3% and recall 75%.",
              "indent": 0
            },
            {
              "text": "**Area under the curve (AUC):** ROC AUC summarizes ranking across thresholds. A value of 1 means perfect separation on the evaluated data; 0.5 is the chance-level ranking reference. A single confusion matrix cannot establish the whole curve or its AUC.",
              "indent": 0
            },
            {
              "text": "**Operational choice:** Choose the actual threshold using missed-defect costs and inspection capacity. For rare defects, inspect precision and recall too, because a high ROC AUC alone does not tell you how many alerts will be useful.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s38",
          "title": "Regression Metrics: MAE, MSE, and RMSE",
          "bullets": [
            {
              "text": "**A repair-time example:** Actual durations are 2, 4, and 6 hours. Predictions are 1, 4, and 9 hours, so prediction errors are −1, 0, and 3 hours.",
              "indent": 0
            },
            {
              "text": "**Mean absolute error (MAE):** Average the error magnitudes: (1 + 0 + 3) ÷ 3 = 1.33 hours. This expresses a typical miss in the same units as the prediction.",
              "indent": 0
            },
            {
              "text": "**Mean squared error (MSE):** Average the squared errors: (1 + 0 + 9) ÷ 3 = 3.33 hours squared. Squaring gives larger misses more influence.",
              "indent": 0
            },
            {
              "text": "**Root mean squared error (RMSE):** Take the square root of MSE: √(10 ÷ 3) ≈ 1.83 hours. RMSE returns to the original units while remaining more sensitive than MAE to large errors.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s20",
          "title": "Business Fit and Measures of Success",
          "bullets": [
            {
              "text": "**Business fit:** Compare a rules-based solution, traditional ML, and a foundation model against the required output. Explainability and regulatory requirements may affect the choice, but no model category automatically satisfies every obligation.",
              "indent": 0
            },
            {
              "text": "**Return on investment (ROI):** Count data preparation, development costs, human review, inference charges, and mistakes. If annual benefits are $60,000 and annual costs are $40,000, ROI is ($60,000 − $40,000) ÷ $40,000 = 50%, using the same period for both totals.",
              "indent": 0
            },
            {
              "text": "**AWS Cost Explorer:** Examine AWS spending by service and time period, and investigate cost changes. Include labor and other costs separately when calculating the project's full cost and cost per user.",
              "indent": 0
            },
            {
              "text": "**Measures after release:** Compare actual spending and operational improvement with the original business case. Review customer feedback, service completion, and error costs alongside model metrics before expanding the rollout.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.2.2",
            "1.2.6",
            "1.3.6"
          ]
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "m1-s4",
            "m1-s5",
            "m1-s6",
            "m1-s9"
          ],
          "question": "A bicycle rental company must estimate next week's number of repairs using historical weekly totals. Which problem type fits the required output?",
          "options": {
            "A": "Classification into fixed repair categories",
            "B": "Regression to estimate a numeric quantity",
            "C": "Clustering customers without labels",
            "D": "Generating an illustrated maintenance guide"
          },
          "correct": "B",
          "explanation": "The required output is a number. A regression or forecasting approach can estimate repair volume from relevant historical information.",
          "wrongExplanations": {
            "A": "Classification returns a category rather than the requested volume estimate.",
            "C": "Clustering discovers groups; it does not directly estimate next week's repair count.",
            "D": "Content generation addresses a different output and does not supply a validated numeric forecast."
          }
        },
        {
          "id": 2,
          "teachingSlideIds": [
            "m1-s18",
            "m1-s19"
          ],
          "question": "An inspection model misses too many defective parts. Which TWO measurements most directly help assess missed defects and the reliability of its defect alerts? Select TWO.",
          "options": {
            "A": "Recall for defective parts",
            "B": "Total dataset storage size",
            "C": "Precision for defect alerts",
            "D": "Number of layers in the model",
            "E": "Average time spent uploading the training dataset"
          },
          "correct": "A,C",
          "explanation": "Recall measures the share of actual defects detected. Precision measures the share of defect alerts that are correct. Together they expose the trade-off between missed defects and unnecessary inspections.",
          "wrongExplanations": {
            "B": "Storage size does not quantify prediction errors.",
            "D": "Architecture complexity does not reveal how often defects are missed or alerts are correct.",
            "E": "Upload duration is an operational measure, not a measure of defect detection or alert correctness."
          }
        },
        {
          "id": 3,
          "teachingSlideIds": [
            "m1-s10",
            "m1-s11"
          ],
          "question": "A workshop needs searchable text from recorded customer calls. Which managed service provides the first conversion step?",
          "options": {
            "A": "Amazon Polly",
            "B": "Amazon Textract",
            "C": "Amazon Transcribe",
            "D": "Amazon Personalize"
          },
          "correct": "C",
          "explanation": "Transcribe converts speech in audio into text that can then be searched or analyzed.",
          "wrongExplanations": {
            "A": "Polly converts written text into speech, the opposite direction.",
            "B": "Textract extracts text and structure from documents rather than transcribing recordings.",
            "D": "Personalize generates recommendations using interaction data."
          }
        }
      ]
    },
    {
      "id": "m2",
      "title": "Fundamentals of Generative AI",
      "objectives": [
        "Explain generative AI, context engineering, and agent workflows.",
        "Compare AWS services and the benefits, limitations, and costs of generative AI."
      ],
      "slides": [
        {
          "id": "m2-s1",
          "title": "Generative AI and the FM Lifecycle",
          "bullets": [
            {
              "text": "**Generative AI:** Creates new content from patterns it learned, such as an equipment summary, a draft illustration, or a suggested code change.",
              "indent": 0
            },
            {
              "text": "**Foundation model lifecycle:** Select suitable data and a model, pretrain only when needed, and fine-tune for a justified task. Evaluate quality and safety, deploy the approved version, then collect feedback to guide the next iteration.",
              "indent": 0
            },
            {
              "text": "**Modalities:** Match the model to the kind of content: text, image, audio, video, or several at once (multimodal). A model that can understand images cannot necessarily generate them.",
              "indent": 0
            }
          ],
          "visualization": "aif_m2_s1.svg",
          "examObjectives": [
            "2.1.1",
            "2.1.2",
            "2.1.3"
          ]
        },
        {
          "id": "m2-s12",
          "title": "Transfer Learning and Foundation Model Development",
          "bullets": [
            {
              "text": "**Transfer learning:** Reuse a model trained on broad data as the starting point for a related task. Fine-tuning on approved repair instructions adapts that starting point without repeating full pretraining.",
              "indent": 0
            },
            {
              "text": "**Choosing the amount of change:** Try an existing model and a clear prompt first. Fine-tuning adds data preparation and training work. Training from scratch usually requires the most data, compute, and operational effort.",
              "indent": 0
            },
            {
              "text": "**Evaluation throughout the lifecycle:** Reserve representative test cases, check whether adaptation harms earlier capabilities, and monitor user feedback after release. A larger training investment does not guarantee a better business result.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.1.3",
            "2.1.4"
          ]
        },
        {
          "id": "m2-s2",
          "title": "Agentic AI and Coordinated Work",
          "bullets": [
            {
              "text": "**Agent:** Uses a model to decide the next action toward a goal, calls a tool, looks at the result, and decides again. A fixed workflow, by contrast, follows the same steps every time.",
              "indent": 0
            },
            {
              "text": "**Multi-agent patterns:** A coordinator agent can hand research and checking to specialist agents. In a sequential handoff, each agent passes its result to the next. Every extra agent adds coordination cost and another place to fail.",
              "indent": 0
            },
            {
              "text": "**Memory and messages:** Working context holds the current task. Longer-term memory stores selected facts for later. Agents pass each other explicit task descriptions and results instead of assuming shared knowledge.",
              "indent": 0
            },
            {
              "text": "**Boundaries:** Define which tools are allowed, when to stop, and which actions need a human. Model Context Protocol (MCP) is a standard way to connect an agent to tools and data. It does not grant permission by itself.",
              "indent": 0
            }
          ],
          "visualization": "aif_m2_s2.svg",
          "examObjectives": [
            "2.1.6",
            "1.1.2"
          ]
        },
        {
          "id": "m2-s3",
          "title": "Tokens, Embeddings, and Chunking",
          "bullets": [
            {
              "text": "**Tokens:** Models read and write text in small pieces called tokens, which are often parts of words. The token count limits how much fits in the context, affects response length, and drives cost.",
              "indent": 0
            },
            {
              "text": "**Embeddings:** Numeric representations of meaning. Two passages with similar embeddings are about similar things, even if they use different words.",
              "indent": 0
            },
            {
              "text": "**Chunking:** Splitting a long manual into meaningful passages so the right passage can be retrieved later. Chunks that are too short lose context. Chunks that are too long add noise and cost more tokens.",
              "indent": 0
            }
          ],
          "visualization": "aif_m2_s3.svg",
          "examObjectives": [
            "2.1.1",
            "2.1.4"
          ]
        },
        {
          "id": "m2-s4",
          "title": "How Diffusion Generates Images",
          "bullets": [
            {
              "text": "**Training:** A diffusion model learns by taking clean images, adding noise step by step, and learning how to reverse each step.",
              "indent": 0
            },
            {
              "text": "**Generation:** It starts from pure noise and removes it step by step, guided by your request, until an image appears. The image is made up, not retrieved from a library.",
              "indent": 0
            },
            {
              "text": "**Latent diffusion:** Some systems do this in a compressed form of the image to save compute. Always check the result for what you asked for, visual glitches, and responsible use.",
              "indent": 0
            }
          ],
          "visualization": "aif_m2_s4.svg",
          "examObjectives": [
            "2.1.1",
            "2.1.2"
          ]
        },
        {
          "id": "m2-s13",
          "title": "Transformers, GANs, and Variational Autoencoders",
          "bullets": [
            {
              "text": "**Transformers:** Self-attention represents relationships among tokens in a sequence. Transformer models can support classification, translation, generation, and other tasks according to their training and modalities.",
              "indent": 0
            },
            {
              "text": "**Generative adversarial networks (GANs):** A generator creates samples while a discriminator learns to distinguish generated samples from real ones. Their competing training objectives can improve sample quality, but training does not guarantee indistinguishable results.",
              "indent": 0
            },
            {
              "text": "**Variational autoencoders (VAEs):** An encoder maps data into a probability distribution in a latent space. A decoder reconstructs or generates samples from that representation.",
              "indent": 0
            },
            {
              "text": "**Architecture choice:** Diffusion, transformer, GAN, and VAE describe model approaches. Evaluate the actual model and task rather than selecting solely by the architecture name.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.1.1",
            "2.1.2"
          ]
        },
        {
          "id": "m2-s5",
          "title": "An Effective Prompt Has a Clear Job",
          "bullets": [
            {
              "text": "**Instruction:** Ask for one clear task: “Summarize the repair note for the next technician.”",
              "indent": 0
            },
            {
              "text": "**Context and input:** Supply the note and say who the audience is. Keep the source text clearly separated from your instructions so the model treats it as material, not as commands.",
              "indent": 0
            },
            {
              "text": "**Output requirements:** Ask for exactly what you need, such as three fields: fault reported, work completed, open issue. A rule like “Do not invent a part number” sets a boundary, but you still have to check the output.",
              "indent": 0
            }
          ],
          "visualization": "aif_m2_s5.svg",
          "examObjectives": [
            "3.2.1",
            "3.2.3"
          ]
        },
        {
          "id": "m2-s6",
          "title": "GenAI Benefits and Failure Modes",
          "bullets": [
            {
              "text": "**Benefits:** Adaptability lets one model support several tasks. Responsiveness enables interactive help, while a natural-language interface can simplify access. A customer service agent can draft an answer from approved records, subject to review.",
              "indent": 0
            },
            {
              "text": "**Limitations:** Hallucinations are plausible but incorrect outputs. Nondeterminism means repeated requests can produce different answers. A fluent response may still be unhelpful, unsafe, or difficult to explain.",
              "indent": 0
            },
            {
              "text": "**Business decision:** Test the whole workflow with real users. Budget time for review and correction instead of treating every generated answer as ready to publish.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.2.1",
            "2.2.2"
          ]
        },
        {
          "id": "m2-s14",
          "title": "Alignment and Interpretability",
          "bullets": [
            {
              "text": "**Alignment:** Evaluate whether an assistant follows intended goals and produces helpful, honest, and harmless responses. Test refusal behavior, unsupported claims, and harmful outputs alongside task success.",
              "indent": 0
            },
            {
              "text": "**Intrinsic interpretability:** A model with an understandable structure, such as a small decision tree, can make its decision rules directly inspectable.",
              "indent": 0
            },
            {
              "text": "**Post hoc explanations:** Analyze a model after training, for example by estimating how inputs affected a prediction. An explanation is evidence about behavior and may be incomplete.",
              "indent": 0
            },
            {
              "text": "**Trade-offs:** Compare explanation quality and predictive performance for the task. Complexity can make interpretation harder, but an interpretable model is not automatically less accurate.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.2.2",
            "2.2.4"
          ]
        },
        {
          "id": "m2-s7",
          "title": "Context Engineering",
          "bullets": [
            {
              "text": "**More than one prompt:** Context engineering means deciding what the model should see for this task: which instructions, conversation history, retrieved passages, and tool results.",
              "indent": 0
            },
            {
              "text": "**Select and organize:** A repair assistant needs the current bicycle model and the relevant manual pages, not every conversation and document the company owns.",
              "indent": 0
            },
            {
              "text": "**Manage the window:** The model can only hold so much at once. Summarize old turns, drop irrelevant results, keep the important rules, and only retrieve data the user is allowed to see.",
              "indent": 0
            },
            {
              "text": "**Check the payoff:** Extra context costs tokens and time. Keep it only if it clearly improves the answers. More context is not automatically better context.",
              "indent": 0
            },
            {
              "text": "**Current facts:** A model's training data is not a live inventory record. Retrieve the current stock count from an authorized system and include that result with the customer's request. Guessing a number cannot establish what is in stock.",
              "indent": 0
            },
            {
              "text": "**Document-answering sequence:** First retrieve relevant passages from authorized manuals. Next combine the question and passages into the model context. Then generate a draft from that context. Finally check each claim against the cited passages.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.1.5"
          ]
        },
        {
          "id": "m2-s8",
          "title": "Measuring GenAI Business Value",
          "bullets": [
            {
              "text": "**Set a baseline:** Before adding a manual-search assistant, measure how long staff currently take to find an approved procedure.",
              "indent": 0
            },
            {
              "text": "**Track value:** Compare time saved, conversion rate, average revenue per user, or customer lifetime value, but only where the assistant can realistically move that number.",
              "indent": 0
            },
            {
              "text": "**Quality and efficiency:** Check answer accuracy, user feedback, and cross-domain performance across departments and tasks. Measure useful completions per unit of time and cost, including human review. Faster answers with more mistakes may reduce value.",
              "indent": 0
            }
          ],
          "visualization": "aif_m2_s8.svg",
          "examObjectives": [
            "2.2.4"
          ]
        },
        {
          "id": "m2-s9",
          "title": "Bedrock, SageMaker AI, and JumpStart",
          "bullets": [
            {
              "text": "**Amazon Bedrock:** Gives your application managed access to foundation models, plus building blocks such as retrieval, prompt management, and agents.",
              "indent": 0
            },
            {
              "text": "**Amazon SageMaker AI:** Helps you prepare data, train, deploy, and run your own ML models. SageMaker JumpStart offers pretrained models to start from.",
              "indent": 0
            },
            {
              "text": "**Why use managed services:** Less infrastructure to run, and built-in links to AWS identity, monitoring, and data services. You still control your data, your permissions, and how your application behaves.",
              "indent": 0
            }
          ],
          "visualization": "aif_m2_s9.svg",
          "examObjectives": [
            "1.3.4",
            "2.3.1",
            "2.3.2",
            "2.3.3"
          ]
        },
        {
          "id": "m2-s15",
          "title": "AWS Generative AI Services and Model Choices",
          "bullets": [
            {
              "text": "**Service layers:** Ready-made services supply capabilities such as transcription. Bedrock supplies access to foundation models. SageMaker AI and frameworks such as PyTorch support building and training models with more control.",
              "indent": 0
            },
            {
              "text": "**Amazon Nova:** This model family includes different text, image, video, and speech capabilities. Select a specific model by its supported inputs and outputs; a model that understands images may only return text.",
              "indent": 0
            },
            {
              "text": "**Playgrounds and prototypes:** Bedrock playgrounds support model experiments. PartyRock provides a visual way to prototype generative AI applications. A useful prototype still needs access controls, evaluation, and cost planning before production.",
              "indent": 0
            },
            {
              "text": "**Benefits and obligations:** Managed APIs and pretrained models can reduce setup work and speed experimentation. Integration with AWS services can simplify operations, while customers remain responsible for permissions, data use, output evaluation, and suitable safeguards.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.3.1",
            "2.3.2",
            "2.3.3"
          ]
        },
        {
          "id": "m2-s10",
          "title": "Inference Cost and Capacity Choices",
          "bullets": [
            {
              "text": "**Text inference pricing:** Most on-demand models charge separately for input tokens and output tokens. Longer retrieved context and longer answers both raise the bill. Check the pricing unit of the model you pick.",
              "indent": 0
            },
            {
              "text": "**Capacity trade-off:** On-demand usage suits variable demand. Provisioned throughput supplies reserved capacity where supported. Compare performance, customization costs, regional coverage, and redundancy for availability; extra capacity or Regions can add cost.",
              "indent": 0
            },
            {
              "text": "**Prompt caching:** Some models can reuse the unchanged start of a prompt instead of processing it again. Savings depend on cache writes, reads, eligibility rules, and how long the cache lasts.",
              "indent": 0
            }
          ],
          "visualization": "aif_m2_s10.svg",
          "examObjectives": [
            "2.1.4",
            "2.2.3",
            "2.3.4"
          ]
        },
        {
          "id": "m2-s11",
          "title": "AWS Tools for Business and Agent Development",
          "bullets": [
            {
              "text": "**Amazon Quick:** A ready-made assistant that helps business users find information and get work done across connected sources.",
              "indent": 0
            },
            {
              "text": "**Amazon Q Developer and Kiro:** Amazon Q Developer provides software-development assistance. Its CLI was rebranded as Kiro, and AWS offers an upgrade path for IDE users. Recognize both names in existing documentation and check the supported tool for your environment.",
              "indent": 0
            },
            {
              "text": "**Strands Agents and Bedrock AgentCore:** Strands Agents is an open-source toolkit for building an agent from a model and tools. **Amazon Bedrock AgentCore** runs and operates agents, providing identity, memory, and monitoring.",
              "indent": 0
            },
            {
              "text": "**Match the layer:** A coding tool, an agent-building toolkit, an agent-running service, and a business assistant each solve a different part of the job. They can be combined.",
              "indent": 0
            }
          ],
          "visualization": "aif_m2_s11.svg",
          "examObjectives": [
            "1.3.4",
            "2.3.1"
          ]
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "m1-s8",
            "m2-s5",
            "m2-s7"
          ],
          "question": "A repair assistant needs today's stock count and the customer's current request. Which approach best prepares the model for this interaction?",
          "options": {
            "A": "Include every past conversation regardless of relevance",
            "B": "Select relevant history and retrieve an authorized current stock result for the context",
            "C": "Ask the model to invent a plausible stock count without checking inventory",
            "D": "Assume the count is already stored in the model's pretrained weights"
          },
          "correct": "B",
          "explanation": "Context engineering selects the instructions, relevant history, and current tool or retrieval results needed for the request while respecting permissions and context limits.",
          "wrongExplanations": {
            "A": "Unfiltered history increases cost and can introduce irrelevant or unauthorized information.",
            "C": "A plausible generated number is not evidence of the current stock count. The assistant needs a result from an authorized current source.",
            "D": "Pretrained weights are not a live inventory system."
          }
        },
        {
          "id": 2,
          "teachingSlideIds": [
            "m2-s3",
            "m2-s5",
            "m2-s6",
            "m2-s7"
          ],
          "question": "Arrange this document-answering workflow from first to last. The manuals are already indexed. Move each step into the correct position.",
          "options": {
            "A": "Combine the question and retrieved passages into the model context",
            "B": "Check the generated claims against the cited passages",
            "C": "Retrieve relevant passages from authorized manuals",
            "D": "Generate a draft answer using the supplied context"
          },
          "correct": "C,A,D,B",
          "explanation": "Retrieve evidence, assemble the context, generate the draft, and verify the resulting claims. The final check matters because relevant retrieval does not guarantee a grounded answer.",
          "wrongExplanations": {},
          "type": "ordering"
        }
      ]
    },
    {
      "id": "m3",
      "title": "Applications of Foundation Models",
      "objectives": [
        "Select models, retrieval, prompting, and customization approaches for a business task.",
        "Evaluate generated content, RAG, and agent workflows against quality and business goals."
      ],
      "slides": [
        {
          "id": "m3-s1",
          "title": "Choosing a Foundation Model",
          "bullets": [
            {
              "text": "**Selection criteria:** Compare modality, languages, model size, input/output length, accuracy, latency, and output reliability. Check compute and data needs, deployment constraints, license terms, and applicable compliance requirements using representative requests.",
              "indent": 0
            },
            {
              "text": "**Total cost and complexity:** Include tokens, retrieval, customization, deployment, and ongoing operations. A larger model may cost more without improving this task. Monitor performance over time rather than relying only on an initial benchmark.",
              "indent": 0
            },
            {
              "text": "**Prompt caching:** Some models can reuse an unchanged prompt opening. Test whether your prompts qualify and how often the cache hits. Support and pricing vary by model and service.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.2.3",
            "3.1.1"
          ]
        },
        {
          "id": "m3-s2",
          "title": "Inference Parameters and Their Effects",
          "bullets": [
            {
              "text": "**Temperature:** Controls how strongly the model favors the most likely next word. Lower values give steadier answers, but they do not make the answer more correct or identical every time.",
              "indent": 0
            },
            {
              "text": "**Top-p and top-k:** Limit how many candidate words the model may choose from, by total probability (top-p) or by count (top-k). Availability and ranges depend on the model.",
              "indent": 0
            },
            {
              "text": "**Output length and stop sequences:** Cap how long the answer can be. A cap can cut an answer short, and it does not enlarge the model's context window. Change one setting at a time and compare.",
              "indent": 0
            }
          ],
          "visualization": "aif_m3_s2.svg",
          "examObjectives": [
            "3.1.2"
          ]
        },
        {
          "id": "m3-s3",
          "title": "RAG: Grounding a Response in Retrieved Material",
          "bullets": [
            {
              "text": "**Retrieve first:** Retrieval-augmented generation (RAG) searches approved repair manuals for passages that match the question and adds them, with their sources, to the prompt.",
              "indent": 0
            },
            {
              "text": "**Generate with evidence:** The model answers from those passages and names its sources. This adds knowledge at request time without retraining the model.",
              "indent": 0
            },
            {
              "text": "**Check the result:** Retrieval can return the wrong passage, and the model can misread a right one. Check that sources are relevant, the answer sticks to them, the content is current, and the user may see it. RAG does not guarantee accuracy.",
              "indent": 0
            }
          ],
          "visualization": "aif_m3_s3.svg",
          "examObjectives": [
            "3.1.3"
          ]
        },
        {
          "id": "m3-s4",
          "title": "Vector Search and AWS Data Stores",
          "bullets": [
            {
              "text": "**Embeddings:** Turn meaning into numbers so a question can be compared with stored passages. Similarity search finds likely candidates. It does not prove that a candidate answers the question.",
              "indent": 0
            },
            {
              "text": "**AWS choices:** Amazon OpenSearch Service, Amazon Aurora PostgreSQL, and Amazon RDS for PostgreSQL (with the pgvector extension) can store and search embeddings. Amazon Neptune Analytics adds vector search to graph data.",
              "indent": 0
            },
            {
              "text": "**Choosing a store:** Match it to your data shape, filtering and access needs, scale, and existing integrations. A vector store is one part of a retrieval system, alongside data loading and evaluation.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.1.4"
          ]
        },
        {
          "id": "m3-s20",
          "title": "Vector Database Choices and Their Roles",
          "bullets": [
            {
              "text": "**Search and relational stores:** Amazon OpenSearch Service and OpenSearch Serverless support vector search. Amazon Aurora PostgreSQL and Amazon RDS for PostgreSQL can use pgvector for similarity queries alongside relational data.",
              "indent": 0
            },
            {
              "text": "**Document and memory stores:** Amazon DocumentDB supports vector search on supported deployments. Amazon MemoryDB supports vector indexes for applications needing fast similarity queries with its supported APIs.",
              "indent": 0
            },
            {
              "text": "**Graph data:** Amazon Neptune Analytics offers vector search with graph analysis. Neptune ML concerns machine learning on graph data; its name alone does not identify the vector-search capability needed for a retrieval system.",
              "indent": 0
            },
            {
              "text": "**Selection constraints:** Check engine/version support, access controls, index behavior, scale, and integration requirements. A database being managed by AWS does not mean every engine or deployment supports the same vector operations.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.1.3"
          ]
        },
        {
          "id": "m3-s5",
          "title": "Knowledge Bases: Documents and Structured Data",
          "bullets": [
            {
              "text": "**Document retrieval:** Amazon Bedrock Knowledge Bases can ingest supported sources such as S3 documents and connected repositories, split content into chunks, create embeddings, and retrieve passages. Connector support and permissions depend on the configured source.",
              "indent": 0
            },
            {
              "text": "**Structured retrieval:** A knowledge base connected to a database can turn a plain question into a SQL query. “How many seals are in stock?” needs a database number, not a similar paragraph.",
              "indent": 0
            },
            {
              "text": "**Keep it working:** Refresh the sources, keep access limits in place, and check the citations or query results. Test the data-source setup for your task.",
              "indent": 0
            },
            {
              "text": "**Source examples:** Supported connectors include Confluence, Microsoft SharePoint, Salesforce, and web crawling. Keep source permissions and refresh behavior aligned with the application, and validate what the configured connector actually ingests.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.1.3",
            "3.1.4"
          ]
        },
        {
          "id": "m3-s6",
          "title": "Agents, Tools, and Permission Boundaries",
          "bullets": [
            {
              "text": "**Example:** A workshop assistant reads a booking request, checks free slots through a tool, and proposes an appointment. The model chooses actions only within the workflow the application allows.",
              "indent": 0
            },
            {
              "text": "**Tool connection:** Bedrock Agents can call action groups and knowledge bases. Other agent frameworks connect tools through protocols such as MCP. A protocol connects; it does not grant permission.",
              "indent": 0
            },
            {
              "text": "**Safe execution:** Validate what the agent sends to a tool, restrict what the tool can reach, and require approval for consequential changes. Treat tool results as data, and record the action and its outcome.",
              "indent": 0
            }
          ],
          "visualization": "aif_m3_s6.svg",
          "examObjectives": [
            "3.1.6",
            "2.1.6"
          ]
        },
        {
          "id": "m3-s7",
          "title": "Zero-Shot, One-Shot, and Few-Shot Prompts",
          "bullets": [
            {
              "text": "**Zero-shot:** “Label this repair note as brakes, gears, or tires: rear wheel loses pressure overnight.” The instruction alone defines the task, with no examples.",
              "indent": 0
            },
            {
              "text": "**One-shot:** Add one worked example, such as “chain skips under load → gears,” before asking for the new label.",
              "indent": 0
            },
            {
              "text": "**Few-shot:** Add several examples, including ambiguous ones. Examples steer the answer at request time only. They do not change the model's weights.",
              "indent": 0
            }
          ],
          "visualization": "aif_m3_s7.svg",
          "examObjectives": [
            "3.2.2"
          ]
        },
        {
          "id": "m3-s8",
          "title": "Reusable Prompts and Prompt Management",
          "bullets": [
            {
              "text": "**Template:** Keep the fixed instructions separate from the parts that change, such as the repair note, the audience, and the retrieved evidence. State the output fields you expect.",
              "indent": 0
            },
            {
              "text": "**Bedrock Prompt Management:** Saves reusable prompts, compares variants, and tests model settings. Versions let the team see exactly which prompt a release used.",
              "indent": 0
            },
            {
              "text": "**Controlled rollout:** Test a revised template on the same cases before adopting it. Keep the approved version available for rollback, and record which model settings it was tested with.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.2.1",
            "3.2.2",
            "3.2.5"
          ]
        },
        {
          "id": "m3-s9",
          "title": "Prompt Engineering Practices",
          "bullets": [
            {
              "text": "**Specificity and concision:** State a precise task, separate reference material from instructions, and specify the output format and missing-information behavior. Use relevant examples and remove unnecessary wording.",
              "indent": 0
            },
            {
              "text": "**Chain-of-thought prompting:** Asking the model to reason step by step can help on suitable tasks. The reasoning can still be wrong, so check the final answer against evidence or a tool.",
              "indent": 0
            },
            {
              "text": "**Test systematically:** Compare prompts on a fixed set of cases. Prompt engineering changes the words you send. Prompt tuning is a different technique that trains extra prompt parameters.",
              "indent": 0
            }
          ],
          "visualization": "aif_m3_s9.svg",
          "examObjectives": [
            "3.2.2",
            "3.2.3"
          ]
        },
        {
          "id": "m3-s10",
          "title": "Adversarial Prompting and Defensive Layers",
          "bullets": [
            {
              "text": "**Prompt injection:** An attacker hides instructions in a message or a document the assistant retrieves. A manual that says “send customer records elsewhere” is untrusted text, not a command.",
              "indent": 0
            },
            {
              "text": "**Other attacks:** A jailbreak attempts to bypass safeguards. Prompt hijacking redirects the assistant toward an attacker's goal. Prompt leakage exposes hidden instructions or data, while poisoning corrupts training or retrieval material.",
              "indent": 0
            },
            {
              "text": "**Defense:** Keep instructions separate from data, limit what tools can do, filter sensitive information, and test with attack cases. No single prompt or filter stops every attack.",
              "indent": 0
            }
          ],
          "visualization": "aif_m3_s10.svg",
          "examObjectives": [
            "3.2.4",
            "5.1.4"
          ]
        },
        {
          "id": "m3-s11",
          "title": "Pretraining, Fine-Tuning, and Transfer Learning",
          "bullets": [
            {
              "text": "**Pretraining:** Teaching a model broad language patterns from a huge dataset. Doing this from scratch takes enormous data and compute.",
              "indent": 0
            },
            {
              "text": "**Fine-tuning:** Training an existing model further on a smaller set of chosen examples to improve a task, a style, or its behavior.",
              "indent": 0
            },
            {
              "text": "**Transfer learning:** Reusing what a trained model already knows for a related task. Before training anything, check whether prompting or retrieval would solve the problem.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.3.1"
          ]
        },
        {
          "id": "m3-s12",
          "title": "Continued Pretraining and Domain Adaptation",
          "bullets": [
            {
              "text": "**Continued pretraining:** Keeps training an existing model on a body of domain text, such as maintenance documents, so it learns the field's vocabulary and patterns.",
              "indent": 0
            },
            {
              "text": "**Domain adaptation versus instruction fine-tuning:** Domain adaptation teaches the model a field. Instruction fine-tuning teaches it how to respond, using examples of good answers.",
              "indent": 0
            },
            {
              "text": "**Choose by need:** Facts that change often, such as stock levels, belong in retrieval or a tool. Trained knowledge is hard to refresh and does not replace a reliable source of current records.",
              "indent": 0
            },
            {
              "text": "**Catastrophic forgetting:** Further training can weaken capabilities the base model previously handled. Evaluate both the target domain and earlier tasks before accepting an adapted model.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.3.1",
            "3.3.2"
          ]
        },
        {
          "id": "m3-s13",
          "title": "Instruction Tuning and Human Preferences",
          "bullets": [
            {
              "text": "**Instruction tuning:** Trains the model on pairs of instruction and approved response, for example a repair note paired with its approved summary.",
              "indent": 0
            },
            {
              "text": "**Reinforcement learning from human feedback (RLHF):** People compare or rate model answers. A reinforcement learning step then pushes the model toward the answers people preferred.",
              "indent": 0
            },
            {
              "text": "**Quality controls:** Give reviewers clear criteria, sample many kinds of users and tasks, and check that reviewers agree. Preferences can carry bias, and a preferred answer is not automatically a true one.",
              "indent": 0
            }
          ],
          "visualization": "aif_m3_s13.svg",
          "examObjectives": [
            "3.3.2",
            "3.3.3"
          ]
        },
        {
          "id": "m3-s21",
          "title": "Fine-Tuning Workflow and Evaluation",
          "bullets": [
            {
              "text": "**Prepare examples:** Define the behavior to improve and build approved instruction/response pairs. Separate training, validation, and test examples before experimenting with settings.",
              "indent": 0
            },
            {
              "text": "**Train and update:** Run batches of examples through the base model, compute a training loss, and update the permitted model weights or adaptation parameters. Instruction tuning teaches responses to instructions, while continued pretraining uses domain text to extend learned patterns.",
              "indent": 0
            },
            {
              "text": "**Evaluate changes:** Compare the customized model with the base model for task quality, safety, and retained capabilities. Test unseen cases and measure whether the improvement justifies training and inference costs.",
              "indent": 0
            },
            {
              "text": "**Release control:** Record data and model versions, obtain required approval, and monitor the deployed result. Human feedback can guide later improvements without making every preferred answer factually correct.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.3.1",
            "3.3.2",
            "3.3.3"
          ]
        },
        {
          "id": "m3-s14",
          "title": "Customization Costs and Model Distillation",
          "bullets": [
            {
              "text": "**Compare the options:** Prompting costs almost nothing to set up. RAG adds a retrieval system. Fine-tuning adds data preparation, training, evaluation, and ongoing model maintenance.",
              "indent": 0
            },
            {
              "text": "**Distillation:** A large “teacher” model produces answers that are used to train a smaller “student” model for a specific task. Bedrock supports distillation for selected model pairs.",
              "indent": 0
            },
            {
              "text": "**Decision:** The student is cheaper and faster to run but may be weaker outside its task. Compare quality and total cost against the teacher and against an uncustomized model.",
              "indent": 0
            }
          ],
          "visualization": "aif_m3_s14.svg",
          "examObjectives": [
            "3.1.5",
            "3.3.1"
          ]
        },
        {
          "id": "m3-s15",
          "title": "Preparing Data for Customization",
          "bullets": [
            {
              "text": "**Curate:** Remove duplicates, fix wrong labels, and confirm you have the right to use the material. Cover the real tasks, users, languages, and hard cases.",
              "indent": 0
            },
            {
              "text": "**Protect:** Remove personal information you do not need, limit who can access the data, and record where it came from and which version it is. Keep test examples out of the training set.",
              "indent": 0
            },
            {
              "text": "**AWS roles:** Use S3 for datasets, Glue for integration, and Data Wrangler in Canvas for visual preparation. SageMaker Studio supports development, and Feature Store manages reusable features. Ground Truth labeling and Clarify bias/explanation tools now have access restrictions for new customers.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.3.3"
          ]
        },
        {
          "id": "m3-s16",
          "title": "Evaluating Generated Content",
          "bullets": [
            {
              "text": "**Reference metrics:** ROUGE measures overlap useful for summary evaluation; BLEU measures n-gram precision with a brevity penalty, often for translation. BERTScore compares contextual token embeddings. None alone establishes factual accuracy or usefulness.",
              "indent": 0
            },
            {
              "text": "**Human evaluation:** People score answers for accuracy, usefulness, safety, and following instructions, using one shared rubric and a set of real cases.",
              "indent": 0
            },
            {
              "text": "**Model as judge:** A separate model scores the answers against a rubric, for example through Bedrock evaluation. Check its scores against human judgments and watch for bias. A judge score is not the final truth.",
              "indent": 0
            },
            {
              "text": "**Benchmark datasets:** Evaluate candidates on a fixed, representative collection with reference answers or scoring criteria. Include difficult cases, check for training-data contamination, and supplement public benchmarks with examples from the actual workflow.",
              "indent": 0
            }
          ],
          "visualization": "aif_m3_s16.svg",
          "examObjectives": [
            "3.4.1",
            "3.4.2"
          ]
        },
        {
          "id": "m3-s17",
          "title": "Connecting Model Quality to Business Outcomes",
          "bullets": [
            {
              "text": "**Define success:** A repair assistant should finish the task, save effort, and satisfy the user. A high text-similarity score by itself does not show business value.",
              "indent": 0
            },
            {
              "text": "**Business metrics:** Measure efficiency, conversion rate, average revenue per user, and user satisfaction where the application can affect them. Compare cross-domain performance, response time, and cost per interaction, including failures and human review.",
              "indent": 0
            },
            {
              "text": "**Compare fairly:** Run the same workload through the current process and the candidate system. Set the pass mark before choosing a model, then keep measuring after release.",
              "indent": 0
            }
          ],
          "visualization": "aif_m3_s17.svg",
          "examObjectives": [
            "3.4.3",
            "3.4.5"
          ]
        },
        {
          "id": "m3-s18",
          "title": "Evaluating RAG, Agents, and Complete Workflows",
          "bullets": [
            {
              "text": "**RAG stages:** Check three things separately: did retrieval find the right evidence, did the answer stick to it, and did the final response solve the question?",
              "indent": 0
            },
            {
              "text": "**Agent stages:** Check which tool the agent chose, whether the inputs it sent were right, whether it respected permissions, and how it recovered from failures. A polished reply can hide a wrong booking.",
              "indent": 0
            },
            {
              "text": "**End to end:** Test multi-step and multi-agent workflows with normal and hostile cases. Measure completion, cost, speed, and user satisfaction across the whole run.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.4.4",
            "3.4.5"
          ]
        },
        {
          "id": "m3-s19",
          "title": "Selecting a Generative AI Application Pattern",
          "bullets": [
            {
              "text": "**Summarize or draft:** Give the model approved material and check the result for accuracy, tone, and usefulness. Human review may be part of the workflow.",
              "indent": 0
            },
            {
              "text": "**Answer with current facts:** Use retrieval for maintenance documents and a tool for live data such as a stock count. Pick the source that can actually answer the question.",
              "indent": 0
            },
            {
              "text": "**Act:** Use an agent when the task needs decisions and tool calls across several steps. Define success, action limits, and who to escalate to before rollout.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.1.2",
            "3.1.6",
            "3.4.3"
          ]
        },
        {
          "id": "m3-s22",
          "title": "Model Families and Application Tasks",
          "bullets": [
            {
              "text": "**Model providers:** Bedrock offers models from Amazon and other providers. Names encountered in AWS materials include Nova, AI21 Jamba, Anthropic Claude, Cohere Command, DeepSeek, Meta Llama, Mistral, and Stability AI models. Availability varies by model, Region, and access method.",
              "indent": 0
            },
            {
              "text": "**Task coverage:** Evaluate classification, question answering with or without supplied context, summarization, open-ended writing, code generation, mathematics, and reasoning using examples from the intended application.",
              "indent": 0
            },
            {
              "text": "**Model-specific capabilities:** Confirm supported input/output modalities, context limits, customization methods, and lifecycle status in the current catalog. A provider name or an older model version is not enough to establish suitability.",
              "indent": 0
            },
            {
              "text": "**Verification:** Test calculations and generated code with appropriate tools and review. For document answers, verify citations and distinguish a supported fact from a plausible completion.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.1.1",
            "3.2.1"
          ]
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "m3-s2",
            "m3-s7",
            "m3-s8"
          ],
          "question": "A team changes its repair-summary prompt each week and cannot reproduce an earlier release. Which capability most directly addresses this problem?",
          "options": {
            "A": "Bedrock Prompt Management versions and tested variants",
            "B": "A higher top-k setting on every request",
            "C": "More examples in a prompt without saving the prompt",
            "D": "A larger output token limit"
          },
          "correct": "A",
          "explanation": "Versioned prompts and recorded settings identify what was released. Testing variants against fixed cases helps assess changes before adoption.",
          "wrongExplanations": {
            "B": "Top-k affects sampling candidates, not release history.",
            "C": "Examples may guide output but do not create a version record.",
            "D": "An output limit constrains length rather than recording or evaluating changes."
          }
        },
        {
          "id": 2,
          "teachingSlideIds": [
            "m3-s16",
            "m3-s17",
            "m3-s18"
          ],
          "question": "A booking agent writes polite replies, but sometimes calls the wrong scheduling tool and retries until costs rise. Which evaluation is most useful?",
          "options": {
            "A": "Score only the overlap between the reply and a reference sentence",
            "B": "Count the number of words in the reply",
            "C": "Evaluate tool choice, task completion, and cost across complete runs",
            "D": "Ask the agent whether it believes it performed well"
          },
          "correct": "C",
          "explanation": "A workflow evaluation tests actions and outcomes across the run. Tool correctness, completion, and interaction cost reveal failures that fluent wording can hide.",
          "wrongExplanations": {
            "A": "Text overlap alone misses incorrect actions and repeated tool calls.",
            "B": "Reply length does not establish a successful booking or efficient execution.",
            "D": "Self-assessment is not independent evidence of correct execution."
          }
        }
      ]
    },
    {
      "id": "m4",
      "title": "Guidelines for Responsible AI",
      "objectives": [
        "Describe the core pillars of responsible AI systems.",
        "Explain the concepts of model transparency, interpretability, and explainability.",
        "Identify tools on AWS to analyze model bias and model explainability.",
        "Explain risk assessment frameworks and safety guardrails."
      ],
      "slides": [
        {
          "id": "m4-s1",
          "title": "Responsible AI Across the Lifecycle",
          "bullets": [
            {
              "text": "**Qualities to assess:** Fairness, robustness, safety, privacy, transparency, explainability, and governance help determine fitness for users. Inclusivity considers who can participate and benefit, while veracity concerns the accuracy and truthfulness of information.",
              "indent": 0
            },
            {
              "text": "**Shared work:** Product owners define acceptable outcomes. Data teams check that the data represents everyone. Operators watch for real-world failures.",
              "indent": 0
            },
            {
              "text": "**Example:** A model that prioritizes repairs must serve every customer group reliably, not just score well on average.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s1.svg",
          "examObjectives": [
            "4.1.1"
          ]
        },
        {
          "id": "m4-s2",
          "title": "Bias, Variance, and Generalization",
          "bullets": [
            {
              "text": "**Bias (in the statistical sense):** A model that is too simple misses real patterns. This is called underfitting, and it performs poorly on both training data and new data.",
              "indent": 0
            },
            {
              "text": "**Variance:** A model that is too flexible memorizes quirks of the training data and fails on new cases. This is overfitting. Compare training results with validation results to catch it.",
              "indent": 0
            },
            {
              "text": "**Two meanings of bias:** Statistical bias is about model simplicity. Unfair treatment of groups is a different problem. Test for both.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s2.svg",
          "examObjectives": [
            "4.1.6"
          ]
        },
        {
          "id": "m4-s3",
          "title": "Class Imbalance and Representation",
          "bullets": [
            {
              "text": "**Class imbalance:** If only a few parts are defective, a model that says “sound” every time looks highly accurate while catching zero defects.",
              "indent": 0
            },
            {
              "text": "**Representation:** Include the conditions and populations the model will meet in use, such as different bicycle types, lighting, and repair locations.",
              "indent": 0
            },
            {
              "text": "**Assessment:** Look at recall and error rate for each class and each relevant subgroup. Resampling or class weighting can help, but test them on realistic held-out data.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s3.svg",
          "examObjectives": [
            "4.1.5",
            "4.1.6"
          ]
        },
        {
          "id": "m4-s4",
          "title": "Where Unfair Bias Can Enter",
          "bullets": [
            {
              "text": "**Data and algorithm bias:** Unrepresentative examples or inconsistent labels can distort learning. Optimizing only overall accuracy can also neglect unequal error costs or outcomes across groups.",
              "indent": 0
            },
            {
              "text": "**Features and past decisions:** A location field can stand in for a protected characteristic such as ethnicity. Past decisions in the data may already reflect unfair treatment.",
              "indent": 0
            },
            {
              "text": "**Interaction bias and amplification:** Feedback from a narrow set of users may distort future behavior. A system can amplify existing disparities when its outputs shape the next round of data. Audit data, decisions, and downstream effects.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s4.svg",
          "examObjectives": [
            "4.1.1",
            "4.1.7"
          ]
        },
        {
          "id": "m4-s5",
          "title": "Reducing Bias with Evidence",
          "bullets": [
            {
              "text": "**Before training:** Use label-quality analysis and human audits to inspect sampling, inconsistent labels, missing groups, and proxy features. Involve affected stakeholders when deciding what acceptable performance means.",
              "indent": 0
            },
            {
              "text": "**During evaluation:** Use subgroup analysis and relevant fairness metrics. Set justified fairness constraints and investigate differences rather than relying only on an aggregate score.",
              "indent": 0
            },
            {
              "text": "**After release:** Collect feedback, audit real decisions, and update the system when the evidence says so. Write down what you changed and what effect it had.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s5.svg",
          "examObjectives": [
            "4.1.2",
            "4.1.7"
          ]
        },
        {
          "id": "m4-s6",
          "title": "Responsible Datasets",
          "bullets": [
            {
              "text": "**Inclusivity, diversity, and veracity:** Include relevant populations and conditions, seek varied examples, and verify factual and label accuracy. Document underrepresented groups and balance data where appropriate for the task.",
              "indent": 0
            },
            {
              "text": "**Rights and privacy:** Before using a dataset, confirm what you may use it for, where it came from, whether consent was needed, and who may access it.",
              "indent": 0
            },
            {
              "text": "**Maintenance:** Version the dataset, remove sensitive fields you do not need, and set refresh and retention rules. Keep a separate evaluation set.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s6.svg",
          "examObjectives": [
            "4.1.5"
          ]
        },
        {
          "id": "m4-s7",
          "title": "Responsible Model Selection",
          "bullets": [
            {
              "text": "**Look past the benchmark:** Compare what the model can and cannot do, how it behaves on safety tests, how open it is, and under what conditions it was evaluated.",
              "indent": 0
            },
            {
              "text": "**Sustainability and cost:** Try a smaller or more efficient model first. Consider energy and compute use alongside quality and speed.",
              "indent": 0
            },
            {
              "text": "**Accountability and stakeholder engagement:** Name the decision owner, involve affected users, and record the reasons for selection. Choose tested behavior and controls that match the possible harm of a mistake.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s7.svg",
          "examObjectives": [
            "4.1.3"
          ]
        },
        {
          "id": "m4-s8",
          "title": "SageMaker Clarify: Bias Before Training",
          "bullets": [
            {
              "text": "**Inspect the dataset:** SageMaker Clarify can measure bias in the training data before training, such as one group being underrepresented or labeled differently.",
              "indent": 0
            },
            {
              "text": "**Interpret with care:** A numerical difference is a lead to investigate, not a verdict on fairness or a legal conclusion.",
              "indent": 0
            },
            {
              "text": "**Respond:** Look at how the data was collected and labeled, apply a justified fix, and compare the revised data with the original.",
              "indent": 0
            },
            {
              "text": "**Availability:** AWS limits SageMaker Clarify to existing customers. Learn its bias-analysis role and metrics for existing deployments; new projects can implement suitable metrics and explanation methods in their own evaluation pipeline.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s8.svg",
          "examObjectives": [
            "4.1.2",
            "4.1.7"
          ]
        },
        {
          "id": "m4-s21",
          "title": "Pre-Training Bias Measures",
          "bullets": [
            {
              "text": "**Class imbalance:** Compare representation across relevant groups. If one group supplies very few examples, performance estimates for that group may be unreliable even before training begins.",
              "indent": 0
            },
            {
              "text": "**Label imbalance:** Compare the rate of favorable labels within each group. Historical labels can encode earlier decisions that should be investigated rather than reproduced automatically.",
              "indent": 0
            },
            {
              "text": "**Demographic disparity:** Examine how group membership is distributed among favorable and unfavorable outcomes. State the population, denominator, and favorable outcome so the comparison can be interpreted.",
              "indent": 0
            },
            {
              "text": "**Response:** Investigate collection and labeling practices, review consent and coverage, and test a justified correction. A numerical disparity does not by itself establish its cause or a legal conclusion.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "4.1.5",
            "4.1.7"
          ]
        },
        {
          "id": "m4-s9",
          "title": "SageMaker Clarify: Bias After Training",
          "bullets": [
            {
              "text": "**Inspect the predictions:** After training, Clarify can compare error rates and outcomes between groups using post-training bias metrics.",
              "indent": 0
            },
            {
              "text": "**Look beneath the average:** A model can score well overall while missing defects far more often for one equipment category.",
              "indent": 0
            },
            {
              "text": "**Track changes:** Repeat the check after every retraining and whenever the real population changes. Keep the reports for review.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s9.svg",
          "examObjectives": [
            "4.1.2",
            "4.1.7"
          ]
        },
        {
          "id": "m4-s22",
          "title": "Post-Training Bias Measures",
          "bullets": [
            {
              "text": "**Positive prediction rates:** Compare how often each group receives the favorable prediction. A difference may reveal an issue that overall accuracy hides.",
              "indent": 0
            },
            {
              "text": "**Error-rate comparisons:** Compare specificity, recall, and accuracy across groups using their own confusion matrices. Check sample sizes and uncertainty before concluding that one group is better served.",
              "indent": 0
            },
            {
              "text": "**Treatment equality:** Compare the balance of false positive and false negative errors between groups. Clarify defines this measure using differences in false-negative-to-false-positive ratios; record the definition and handle zero denominators explicitly.",
              "indent": 0
            },
            {
              "text": "**Ongoing review:** Compare current results with the approved baseline and review the effect of retraining. Fairness measurements should reflect the use case and affected people.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "4.1.7"
          ]
        },
        {
          "id": "m4-s10",
          "title": "Safety and Legal Risks of Generated Content",
          "bullets": [
            {
              "text": "**End user risk:** Hallucinations, toxicity, or unfair stereotypes can harm a person who acts on generated content. A confident but incorrect maintenance instruction may cause injury, so assess the consequence as well as the likelihood of an error.",
              "indent": 0
            },
            {
              "text": "**Rights and confidentiality:** Check the use of copyrighted material, attribution needs, exposure of sensitive data, and who owns the output. Involve legal and privacy specialists.",
              "indent": 0
            },
            {
              "text": "**Controls:** Combine approved sources, filters, testing, user guidance, and escalation to a person. Match the controls to what a mistake would cost in your application.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s10.svg",
          "examObjectives": [
            "4.1.4"
          ]
        },
        {
          "id": "m4-s11",
          "title": "Amazon Bedrock Guardrails",
          "bullets": [
            {
              "text": "**Configurable checks:** Bedrock Guardrails content filters can detect categories such as hate, insults, sexual content, and violence. Denied topics set application-specific boundaries. Sensitive-information filters can block or mask supported personal information.",
              "indent": 0
            },
            {
              "text": "**Grounding checks:** Where supported, a guardrail can test whether an answer is backed by the supplied context and relevant to the question. This is evidence, not a guarantee.",
              "indent": 0
            },
            {
              "text": "**Defense in depth:** Guardrails work alongside permissions, retrieval controls, application checks, and human review. Test your guardrail settings with realistic failures.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s11.svg",
          "examObjectives": [
            "4.1.2",
            "5.1.4"
          ]
        },
        {
          "id": "m4-s12",
          "title": "Model Evaluation on AWS",
          "bullets": [
            {
              "text": "**Representative tests:** Use built-in or custom prompt datasets and human review as appropriate. Evaluate factual accuracy, toxicity, stereotyping, and semantic robustness, including whether harmless rewording changes the answer unexpectedly.",
              "indent": 0
            },
            {
              "text": "**Service choices:** Bedrock evaluation supports automated methods and human review. Existing SageMaker Clarify customers can use its supported evaluation capabilities; new projects can use suitable evaluation libraries or Bedrock for foundation-model evaluation.",
              "indent": 0
            },
            {
              "text": "**Decision record:** Keep the test set, the model and prompt versions, the rubric, the results, and the pass mark so a reviewer can see why you chose that model.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s12.svg",
          "examObjectives": [
            "3.4.1",
            "4.1.2"
          ]
        },
        {
          "id": "m4-s13",
          "title": "Transparency, Interpretability, and Explainability",
          "bullets": [
            {
              "text": "**Transparency:** Being open about how the system is used, what data and tests it is based on, its known limits, and who is accountable.",
              "indent": 0
            },
            {
              "text": "**Interpretability:** A model simple enough to follow from input to prediction, such as a small decision tree.",
              "indent": 0
            },
            {
              "text": "**Explainability:** Methods that describe why a complex model gave an output. When the method cannot see the whole decision process, the explanation is an approximation.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "4.2.1"
          ]
        },
        {
          "id": "m4-s14",
          "title": "Choosing Useful Explanations",
          "bullets": [
            {
              "text": "**The trade-off:** Compare prediction quality with the kind of explanation your users need. A more complex model is not automatically more accurate.",
              "indent": 0
            },
            {
              "text": "**Audience:** A technician needs to know what triggered one alert. A governance reviewer needs to see how the model behaves across many cases.",
              "indent": 0
            },
            {
              "text": "**Check the explanation:** Test that explanations are stable and useful. A confident-sounding explanation written by a model is not proof of how the model actually decided.",
              "indent": 0
            },
            {
              "text": "**Safety and transparency:** Publishing model internals can expose proprietary logic, sensitive training details, or attack opportunities. Give each audience useful evidence without disclosing information it is not authorized to receive.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "4.2.3"
          ]
        },
        {
          "id": "m4-s15",
          "title": "Model Openness, Licenses, and Safety",
          "bullets": [
            {
              "text": "**Three separate things:** A model's weights, its training code, and its training data can each be open or closed. An open-weight model does not necessarily reveal the other two.",
              "indent": 0
            },
            {
              "text": "**License review:** Check what uses are allowed, whether you may redistribute or modify the model, and what credit you must give, before adopting it.",
              "indent": 0
            },
            {
              "text": "**Responsibility:** Openness helps inspection and customization, but safety still depends on your testing, settings, data handling, and operation.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s15.svg",
          "examObjectives": [
            "4.2.2"
          ]
        },
        {
          "id": "m4-s16",
          "title": "Model Cards and Service Cards",
          "bullets": [
            {
              "text": "**Model documentation:** Record the intended use, evaluation results, training context, limits, and risks so others can judge whether the model fits their need.",
              "indent": 0
            },
            {
              "text": "**AWS AI Service Cards:** Describe an AWS service's intended uses, limits, and responsible design considerations. Read them alongside your own testing.",
              "indent": 0
            },
            {
              "text": "**SageMaker Model Cards:** Structured documentation for a specific model across its life. A card supports transparency; it does not certify that every use is safe.",
              "indent": 0
            },
            {
              "text": "**AWS examples:** AI Service Cards cover services and model families such as Comprehend, Transcribe, Rekognition, Textract, Titan, and Nova. SageMaker Model Cards can integrate model metadata and evaluation evidence, but a responsible owner must maintain the use and risk descriptions.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "4.2.2"
          ]
        },
        {
          "id": "m4-s17",
          "title": "SageMaker Clarify: Explaining Predictions",
          "bullets": [
            {
              "text": "**Feature contributions:** Clarify can estimate how much each input feature pushed a prediction up or down, using explanation methods such as SHAP.",
              "indent": 0
            },
            {
              "text": "**One prediction or many:** Explain a single alert, or summarize which features matter across many predictions. A strong contribution shows what the model used, not what caused the outcome.",
              "indent": 0
            },
            {
              "text": "**Use in review:** Combine explanations with model performance, data quality, and expert knowledge before changing a decision or a feature.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s17.svg",
          "examObjectives": [
            "4.2.1",
            "4.2.2"
          ]
        },
        {
          "id": "m4-s23",
          "title": "Clarify Processing and Explanation Evidence",
          "bullets": [
            {
              "text": "**Processing workflow:** In an existing Clarify deployment, a processing job reads a dataset and analysis configuration from S3. Analyses requiring predictions send samples to a model endpoint and write results for review.",
              "indent": 0
            },
            {
              "text": "**Explanation scope:** Feature contributions can describe one prediction or summarize many. Supported methods can examine tabular, image, and language models, with results interpreted according to the method and input representation.",
              "indent": 0
            },
            {
              "text": "**Experiment records:** Keep the data, model version, analysis settings, and outputs together. Experiment tracking helps compare runs; it does not prove that an explanation is causal or complete.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "4.2.1",
            "4.2.2"
          ]
        },
        {
          "id": "m4-s18",
          "title": "Designing for Human Oversight",
          "bullets": [
            {
              "text": "**Meaningful control:** Tell users when AI is involved, what it can do, and how to challenge or correct an outcome.",
              "indent": 0
            },
            {
              "text": "**Workflow:** Send uncertain or high-impact cases to a qualified reviewer, with the evidence they need and enough time to act.",
              "indent": 0
            },
            {
              "text": "**Feedback:** Record corrections and the reasons for them, look for repeated problems, and show operators how improvements make it into the next release.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s18.svg",
          "examObjectives": [
            "4.2.4"
          ]
        },
        {
          "id": "m4-s19",
          "title": "Amazon Augmented AI and Human Review",
          "bullets": [
            {
              "text": "**Amazon Augmented AI (A2I):** Adds human review to supported prediction workflows or custom tasks. AWS has closed A2I to new customers; existing deployments can continue using its review functions.",
              "indent": 0
            },
            {
              "text": "**Example:** Send a low-confidence invoice extraction to a reviewer who compares the extracted amount with the original document.",
              "indent": 0
            },
            {
              "text": "**Close the loop:** Record the reviewer's decision, protect sensitive content, and quality-check reviewed examples before using them for future training.",
              "indent": 0
            }
          ],
          "visualization": "aif_m4_s19.svg",
          "examObjectives": [
            "4.2.4"
          ]
        },
        {
          "id": "m4-s24",
          "title": "Human Feedback and Model Improvement",
          "bullets": [
            {
              "text": "**Human-centered design:** Include people with different needs and expertise when defining the task, review process, and right to challenge an outcome. Design the system to support their decisions and abilities.",
              "indent": 0
            },
            {
              "text": "**Ground Truth ranking:** Existing Ground Truth workflows can collect comparisons or rankings of model responses. Give reviewers consistent criteria and check whether the ranking data represents the intended users.",
              "indent": 0
            },
            {
              "text": "**Reinforcement learning from human feedback (RLHF):** One approach uses preference comparisons to train a reward model, then adjusts a model policy to favor higher-rated responses. Test factual accuracy and safety separately from reviewer preference.",
              "indent": 0
            },
            {
              "text": "**Closing the loop:** A recorded correction does not change a model by itself. Approve the data, run the chosen improvement process, and evaluate the resulting version before deployment.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "4.1.3",
            "4.2.4"
          ]
        },
        {
          "id": "m4-s20",
          "title": "Transparent Decisions and Feedback in Operation",
          "bullets": [
            {
              "text": "**Explain the outcome:** Show the evidence, the system's limits, and the action taken, in words the affected person can understand.",
              "indent": 0
            },
            {
              "text": "**Offer correction:** Let a customer challenge a wrong repair classification and reach a person who can fix it.",
              "indent": 0
            },
            {
              "text": "**Learn responsibly:** Review feedback for repeated failures, track the change you make, and retest before release. Collecting feedback alone does not improve the model.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "4.2.4",
            "4.2.1"
          ]
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "m2-s10",
            "m3-s5",
            "m3-s14",
            "m4-s11"
          ],
          "question": "A support assistant must reject requests about a disallowed topic and redact selected sensitive information in responses. Which Bedrock capability is the closest fit?",
          "options": {
            "A": "Knowledge Bases ingestion",
            "B": "Guardrails with configured topic and sensitive-information controls",
            "C": "Model distillation",
            "D": "Prompt caching"
          },
          "correct": "B",
          "explanation": "Configured Guardrails checks can enforce supported topic and sensitive-information rules. They should be tested alongside application and access controls.",
          "wrongExplanations": {
            "A": "Ingestion prepares retrieval sources rather than defining these content controls.",
            "C": "Distillation trains a smaller model for a task; it is not the requested filtering policy.",
            "D": "Caching can reuse prompt-prefix computation; it does not redact content."
          }
        },
        {
          "id": 2,
          "teachingSlideIds": [
            "m4-s3",
            "m4-s4",
            "m4-s5",
            "m4-s9"
          ],
          "question": "A model performs well overall, but reviewers suspect worse outcomes for one customer group. Which TWO actions provide useful evidence? Select TWO.",
          "options": {
            "A": "Compare error rates across relevant groups",
            "B": "Assume the aggregate accuracy proves fairness",
            "C": "Review the group's representation and label quality in the data",
            "D": "Increase model size without evaluating the change",
            "E": "Judge fairness only from the model's written self-description"
          },
          "correct": "A,C",
          "explanation": "Subgroup error analysis reveals differences hidden by an average. Reviewing representation and labels helps investigate potential causes before choosing a mitigation.",
          "wrongExplanations": {
            "B": "Aggregate performance can conceal unequal outcomes.",
            "D": "A larger model is not evidence of fairer behavior and could retain the same data problems.",
            "E": "A self-description does not measure actual subgroup outcomes or dataset representation."
          }
        }
      ]
    },
    {
      "id": "m5",
      "title": "Security, Compliance, and Governance for AI Solutions",
      "objectives": [
        "Apply identity, data, network, and tool-access controls to AI systems.",
        "Trace and audit AI interactions while protecting sensitive information.",
        "Choose governance evidence, risk controls, and lifecycle practices."
      ],
      "slides": [
        {
          "id": "m5-s1",
          "title": "Shared Responsibility for AI",
          "bullets": [
            {
              "text": "**AWS responsibilities:** AWS secures the infrastructure that delivers the service. How much of the operation AWS handles depends on which service you choose.",
              "indent": 0
            },
            {
              "text": "**Customer responsibilities:** You control identities, data, application behavior, and service settings. A managed model never decides which customer records your application may reveal.",
              "indent": 0
            },
            {
              "text": "**Review the boundary:** For training, retrieval, inference, and tool calls, write down who secures each part.",
              "indent": 0
            },
            {
              "text": "**Service examples:** AWS maintains physical facilities and the underlying virtualization infrastructure. With EC2, the customer manages the guest operating system and application. Managed services shift some operating tasks to AWS, while customer data, permissions, and application decisions still require controls.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s1.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s2",
          "title": "IAM Policies and Least Privilege",
          "bullets": [
            {
              "text": "**Authorization:** AWS Identity and Access Management (IAM) policies state which actions are allowed on which resources, and under what conditions. Grant only what the task needs.",
              "indent": 0
            },
            {
              "text": "**Example:** A summarization app needs to read approved manuals and call a model. It does not need permission to delete the document bucket.",
              "indent": 0
            },
            {
              "text": "**Account practices:** Protect the root user's credentials, turn on multi-factor authentication (MFA), and use roles or federated sign-in for everyday work.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s3",
          "title": "IAM Users, Groups, and Roles",
          "bullets": [
            {
              "text": "**Users and groups:** A user is one identity. A group holds users so they share the same permissions. Do not hand long-lived credentials to applications.",
              "indent": 0
            },
            {
              "text": "**Roles:** An application or a federated user takes on a role to get temporary credentials. The role's trust policy says who is allowed to use it.",
              "indent": 0
            },
            {
              "text": "**Workforce access:** IAM Identity Center manages employee sign-in across accounts and applications. Keep human access separate from application permissions.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s37",
          "title": "IAM Access Controls in Practice",
          "bullets": [
            {
              "text": "**IAM scope:** IAM provides account access controls integrated with AWS services, without an additional IAM service charge. Federation connects an existing identity provider so employees can use temporary access instead of separate long-lived IAM credentials.",
              "indent": 0
            },
            {
              "text": "**Identity and resource policies:** Identity policies grant permissions to an identity. Resource policies specify permitted principals for supported resources. Effective access depends on the applicable policies, conditions, and explicit denies.",
              "indent": 0
            },
            {
              "text": "**Root protection and MFA:** Reserve root access for tasks that require it, protect recovery channels, and avoid root access keys. Multi-factor authentication combines a sign-in secret with an additional factor, preferably a phishing-resistant method.",
              "indent": 0
            },
            {
              "text": "**Least privilege example:** A training role may read one approved S3 location and write model artifacts to another. Give a deployment role different permissions and test that unrelated data cannot be read.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.1",
            "5.1.3"
          ]
        },
        {
          "id": "m5-s4",
          "title": "Resource Policies and S3 Public Access",
          "bullets": [
            {
              "text": "**Resource policy:** A bucket policy states who may do what to an S3 bucket. Review it together with identity permissions and any other controls that apply.",
              "indent": 0
            },
            {
              "text": "**Block Public Access:** S3 enables these settings for new buckets by default. Account- and bucket-level settings can override public permissions granted elsewhere. Keep the required settings enabled and review exceptions deliberately.",
              "indent": 0
            },
            {
              "text": "**Access review:** Test both allowed and denied paths, including access from other accounts. A private bucket still needs the right permissions for the internal identities that use it.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s4.svg",
          "examObjectives": [
            "5.1.1",
            "5.1.3"
          ]
        },
        {
          "id": "m5-s5",
          "title": "SageMaker Role Manager",
          "bullets": [
            {
              "text": "**Role creation:** SageMaker Role Manager suggests permissions for data scientist, MLOps, and SageMaker compute personas. AWS limits this tool to existing customers; new projects can create and review roles using IAM and infrastructure as code.",
              "indent": 0
            },
            {
              "text": "**Narrow the result:** Compare the generated permissions with the datasets and jobs you actually use. The template is a starting point for least privilege, not the end.",
              "indent": 0
            },
            {
              "text": "**Separate duties:** Give data preparation, model development, and production operation only the access each one needs.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s5.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s6",
          "title": "Encryption at Rest",
          "bullets": [
            {
              "text": "**Stored data:** Encrypt datasets, model files, and logs using the service's encryption settings. Include backups and copies in the plan.",
              "indent": 0
            },
            {
              "text": "**Key access:** Control who may use the encryption key, not only who may read the storage.",
              "indent": 0
            },
            {
              "text": "**Limit:** Encryption protects the stored bytes. Anyone who is allowed to decrypt and read can still leak the content.",
              "indent": 0
            },
            {
              "text": "**Data integrity:** Protect datasets and model artifacts from unauthorized changes through restricted writes, versioning, and integrity checks. Encryption alone does not prove that an authorized writer supplied correct data.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s6.svg",
          "examObjectives": [
            "5.1.1",
            "5.1.3"
          ]
        },
        {
          "id": "m5-s7",
          "title": "AWS Key Management Service",
          "bullets": [
            {
              "text": "**AWS Key Management Service (KMS):** Creates and manages the keys that AWS services use to encrypt and decrypt your data, and the permissions on those keys.",
              "indent": 0
            },
            {
              "text": "**Key choices:** AWS managed keys are managed for a service on your behalf. Customer managed keys give you control over policies and lifecycle. Check which option meets the workload's access and audit needs before changing a key.",
              "indent": 0
            },
            {
              "text": "**Audit:** Review key usage in the logs and investigate unexpected decrypt calls. Key management adds to data-access controls; it does not replace them.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s7.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s8",
          "title": "Encryption in Transit",
          "bullets": [
            {
              "text": "**TLS:** Transport Layer Security encrypts requests and responses while they travel between clients, APIs, and service endpoints. Use secure connections and check certificates.",
              "indent": 0
            },
            {
              "text": "**Coverage:** Protect uploads, retrieval requests, model calls, and tool calls, not only the public web page.",
              "indent": 0
            },
            {
              "text": "**Two different jobs:** Private routing controls which path the data takes. Encryption protects the data on that path. Neither replaces the other.",
              "indent": 0
            },
            {
              "text": "**Distributed training:** SageMaker supports encrypting communication between training instances for supported configurations. Check data-sensitivity requirements and performance impact rather than assuming every training data path has the same protection.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.1",
            "5.1.3"
          ]
        },
        {
          "id": "m5-s9",
          "title": "Finding Sensitive Data with Amazon Macie",
          "bullets": [
            {
              "text": "**Discovery:** Amazon Macie scans S3 objects for sensitive data, such as personal or financial information, and reports what it finds.",
              "indent": 0
            },
            {
              "text": "**Response:** Investigate the finding, restrict access, and remove or mask personal information you do not need before it enters an AI workflow.",
              "indent": 0
            },
            {
              "text": "**Scope:** Macie finds problems; it does not fix them, and it does not cover every storage service.",
              "indent": 0
            },
            {
              "text": "**Privacy techniques:** Masking, tokenization, or differential privacy can reduce exposure. Removing obvious identifiers alone may not stop someone from re-identifying a person.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s9.svg",
          "examObjectives": [
            "5.1.3"
          ]
        },
        {
          "id": "m5-s10",
          "title": "AWS CloudTrail and Audit Evidence",
          "bullets": [
            {
              "text": "**API activity:** AWS CloudTrail records account and API events, showing who did what, to which resource, and when.",
              "indent": 0
            },
            {
              "text": "**Configure it:** Choose which events to record and how long to keep them, based on your audit needs. Some data-level events must be switched on separately.",
              "indent": 0
            },
            {
              "text": "**Application evidence:** Prompts, model outputs, and tool decisions need their own application logging. CloudTrail alone is not a transcript of the conversation.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s10.svg",
          "examObjectives": [
            "5.1.4",
            "5.2.2"
          ]
        },
        {
          "id": "m5-s11",
          "title": "Network Boundaries for SageMaker",
          "bullets": [
            {
              "text": "**VPC:** A virtual private cloud is your private network in AWS. Use subnets, security groups, and route tables to limit where a workload can connect.",
              "indent": 0
            },
            {
              "text": "**SageMaker workloads:** Configure supported VPC access so managed jobs or endpoints reach your private resources through network interfaces. Studio VPC-only mode limits direct internet access; routes and endpoints still determine which services the workload can reach.",
              "indent": 0
            },
            {
              "text": "**Three separate controls:** Network rules decide what is reachable. IAM decides what is allowed. Encryption protects the data. Check all three for every data path.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s11.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s12",
          "title": "AWS PrivateLink and SageMaker Endpoints",
          "bullets": [
            {
              "text": "**Private service access:** An interface VPC endpoint, powered by AWS PrivateLink, lets your VPC reach the SageMaker API and runtime without crossing the public internet.",
              "indent": 0
            },
            {
              "text": "**Account boundary:** Your VPC connects to a service that AWS operates in its own environment. The endpoint is a doorway to the service, not the model itself.",
              "indent": 0
            },
            {
              "text": "**Related paths:** S3 can use gateway or interface endpoints according to the design. CloudWatch Logs needs its own supported private-access path. Apply the relevant endpoint policies and IAM permissions, and test each dependency.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s12.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s13",
          "title": "AI Attack Paths and Mitigations",
          "bullets": [
            {
              "text": "**Data attacks:** Poisoned training examples or tampered documents can change what the model says. Know where data came from, restrict who can write to it, and version approved sources.",
              "indent": 0
            },
            {
              "text": "**Application security and threat detection:** Monitor prompt injection, model theft attempts, and data leaks. Validate inputs, sanitize outputs before application use, and check for toxicity or unsafe instructions before acting.",
              "indent": 0
            },
            {
              "text": "**Practical response:** Limit what tools can do, check outputs before acting on them, rate-limit abusive callers, and rehearse incident response with realistic attack cases.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s13.svg",
          "examObjectives": [
            "5.1.4"
          ]
        },
        {
          "id": "m5-s38",
          "title": "Model Attacks and Layered Mitigations",
          "bullets": [
            {
              "text": "**Model inversion:** An attacker attempts to infer information about training data from model behavior or outputs. Limit unnecessary output detail, protect access, and evaluate privacy leakage risks.",
              "indent": 0
            },
            {
              "text": "**Model theft:** Repeated queries or unauthorized artifact access can expose model behavior or weights. Restrict artifact access, monitor unusual query patterns, and apply appropriate rate limits.",
              "indent": 0
            },
            {
              "text": "**Poisoning and adversarial inputs:** An attacker can alter source data or craft inputs intended to cause failure. Preserve data provenance, validate sources and inputs, and evaluate challenging examples before deployment.",
              "indent": 0
            },
            {
              "text": "**Response:** Separate detection from remediation. Investigate the affected data, identity, model, and application path, then validate the fix and retraining outcome before restoring normal operation.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.3",
            "5.1.4"
          ]
        },
        {
          "id": "m5-s14",
          "title": "Monitoring Data Quality",
          "bullets": [
            {
              "text": "**Baseline:** Record what normal input looks like: the feature types, value distributions, and missing-value rates from a trusted reference dataset.",
              "indent": 0
            },
            {
              "text": "**Model Monitor:** Existing SageMaker Model Monitor customers can schedule comparisons of captured inputs with a baseline and alert on violations. AWS has closed the service to new customers; equivalent monitoring needs a supported alternative workflow.",
              "indent": 0
            },
            {
              "text": "**Investigation:** A drift alert is a signal to investigate. Decide whether it is a data pipeline bug, a real change in the population, or a legitimate new pattern.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.3"
          ]
        },
        {
          "id": "m5-s15",
          "title": "Monitoring Model Quality",
          "bullets": [
            {
              "text": "**Ground truth:** Compare predictions with what actually happened once the real outcomes are known. Input drift alone does not tell you how big the prediction errors are.",
              "indent": 0
            },
            {
              "text": "**Metrics:** Track the measure that matters for the task, such as recall for defect detection or absolute error for repair time.",
              "indent": 0
            },
            {
              "text": "**Action:** Set thresholds, name an owner, and decide in advance whether a failure means rollback, fresh data, or retraining.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.3"
          ]
        },
        {
          "id": "m5-s16",
          "title": "Versioning Data, Models, and Prompts",
          "bullets": [
            {
              "text": "**Trace a result:** For each release, record the data snapshot, the preparation steps, the model file, the prompt version, and the application settings that were used.",
              "indent": 0
            },
            {
              "text": "**Reproduce:** Version the code and its libraries as well as the trained model. A model filename alone cannot recreate the whole workflow.",
              "indent": 0
            },
            {
              "text": "**Recover:** Keep a tested way to roll back, and a record of who approved what, so changes can be investigated and reversed.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s16.svg",
          "examObjectives": [
            "5.1.2"
          ]
        },
        {
          "id": "m5-s17",
          "title": "SageMaker Model Registry",
          "bullets": [
            {
              "text": "**Registry:** SageMaker Model Registry stores model versions with their metadata and approval status.",
              "indent": 0
            },
            {
              "text": "**Release workflow:** Compare evaluation results and finish the required review before promoting a model version to production.",
              "indent": 0
            },
            {
              "text": "**Distinction:** Registry approval is a workflow gate. It does not replace application testing, runtime permissions, or ongoing monitoring.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.2"
          ]
        },
        {
          "id": "m5-s18",
          "title": "SageMaker Model Cards for Governance",
          "bullets": [
            {
              "text": "**Document:** Capture the model's purpose, risk notes, training context, and evaluation results in one structured record.",
              "indent": 0
            },
            {
              "text": "**Review:** Explain where the model is appropriate and which limits matter to the teams that use it.",
              "indent": 0
            },
            {
              "text": "**Maintain:** Update the card as versions and evidence change, and link it to release and lineage records.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.2",
            "4.2.2"
          ]
        },
        {
          "id": "m5-s19",
          "title": "SageMaker ML Lineage Tracking",
          "bullets": [
            {
              "text": "**Relationships:** SageMaker ML Lineage Tracking records how datasets, processing jobs, training runs, and model files connect to one another.",
              "indent": 0
            },
            {
              "text": "**Investigation:** If a source dataset turns out to be flawed, lineage shows which models and releases were built from it.",
              "indent": 0
            },
            {
              "text": "**Evidence chain:** Combine lineage with versioning, documentation, and source citations for retrieved text. Training lineage and answer citations answer different questions.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s19.svg",
          "examObjectives": [
            "5.1.2"
          ]
        },
        {
          "id": "m5-s39",
          "title": "Versioned Artifacts and Feature Lineage",
          "bullets": [
            {
              "text": "**Repositories:** GitHub, GitLab, or another source repository can track code. Amazon Elastic Container Registry (ECR) stores container images. Record an immutable image digest and the exact dataset version used by each training job.",
              "indent": 0
            },
            {
              "text": "**Dataset versions:** S3 object versions or deliberately immutable dataset locations can preserve inputs. A partition or folder name alone does not prevent someone from overwriting the data.",
              "indent": 0
            },
            {
              "text": "**Feature lineage:** SageMaker Feature Store history and lineage help identify how features were produced and recover values for a particular point in time. This helps prevent a training dataset from using information that arrived after a prediction.",
              "indent": 0
            },
            {
              "text": "**Release traceability:** Connect the data and image versions to the training run, model version, approval record, and endpoint configuration. Model Cards capture intended use and risk evidence alongside the release history.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.2",
            "5.2.2"
          ]
        },
        {
          "id": "m5-s20",
          "title": "SageMaker Model Dashboard",
          "bullets": [
            {
              "text": "**Operational view:** SageMaker Model Dashboard brings together model governance, monitoring status, lineage, and endpoint performance metrics for supported models in the account. The detail available depends on configured monitoring and integrations.",
              "indent": 0
            },
            {
              "text": "**Triage:** Follow an alert to the underlying quality, bias, or explanation evidence. A dashboard status is a symptom, not a diagnosis.",
              "indent": 0
            },
            {
              "text": "**Ownership:** Assign people to investigate changes and record what they did. Monitoring only has value when someone acts on it.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.3"
          ]
        },
        {
          "id": "m5-s21",
          "title": "AWS Artifact and Compliance Resources",
          "bullets": [
            {
              "text": "**AWS Artifact:** Download AWS compliance reports and agreements to check the provider's controls.",
              "indent": 0
            },
            {
              "text": "**Compliance resources:** AWS Compliance Center and related technical documentation explain provider programs and offer learning resources. Check the report scope, service, Region, and period covered before using the evidence.",
              "indent": 0
            },
            {
              "text": "**Your own evidence:** AWS reports prove AWS's side. You still have to show that your data use, configuration, and operations meet the requirements.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s21.svg",
          "examObjectives": [
            "5.2.1"
          ]
        },
        {
          "id": "m5-s22",
          "title": "Frameworks for AI Risk and Governance",
          "bullets": [
            {
              "text": "**Frameworks and standards:** NIST AI RMF organizes risk work around Govern, Map, Measure, and Manage. ISO/IEC 42001 concerns an AI management system, while ISO/IEC 23894 gives AI risk-management guidance.",
              "indent": 0
            },
            {
              "text": "**EU AI Act:** Distinguish prohibited practices, high-risk requirements, and transparency obligations for relevant systems. Obligations depend on the system, organizational role, and applicable dates; an application outside one category is not automatically unregulated.",
              "indent": 0
            },
            {
              "text": "**Application review:** Work with legal and compliance specialists to find out which obligations apply. An exam-level overview is not a compliance decision.",
              "indent": 0
            },
            {
              "text": "**Proposals and enacted law:** The Algorithmic Accountability Act of 2023 appears in older training material as a legislative proposal. Verify enactment and applicability before describing a bill as a binding requirement.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.2.3"
          ]
        },
        {
          "id": "m5-s23",
          "title": "An AI Risk Assessment Matrix",
          "bullets": [
            {
              "text": "**Assess:** Estimate how likely a failure is and how much harm it would do to people, operations, or data. Write down your assumptions and uncertainty.",
              "indent": 0
            },
            {
              "text": "**Prioritize:** A wrong internal draft and an unauthorized payment need different controls, even if they happen equally often.",
              "indent": 0
            },
            {
              "text": "**Inherent and residual risk:** Assess risk before controls, then assess what remains after mitigations. Record owners and assumptions, and update the assessment when the system's tools, users, data, or capabilities change.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s23.svg",
          "examObjectives": [
            "5.2.3"
          ]
        },
        {
          "id": "m5-s24",
          "title": "Data Residency, Retention, and Privacy",
          "bullets": [
            {
              "text": "**Residency:** Know where source data, processing, model requests, logs, and backups are stored. Check the service, Region, and settings against your requirements.",
              "indent": 0
            },
            {
              "text": "**Retention:** Decide how long prompts, outputs, datasets, and audit evidence must be kept. Then implement deletion or archiving and verify it happens.",
              "indent": 0
            },
            {
              "text": "**Privacy:** Collect only the data you need and limit reuse. Sending a record to a model or a tool is a data flow that belongs in the governance review.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s24.svg",
          "examObjectives": [
            "5.1.3",
            "5.2.2"
          ]
        },
        {
          "id": "m5-s25",
          "title": "AWS Audit Manager",
          "bullets": [
            {
              "text": "**Evidence collection:** AWS Audit Manager gathers and organizes evidence against the assessment framework you choose.",
              "indent": 0
            },
            {
              "text": "**Review work:** Assess the evidence, document gaps, and assign fixes. Automatic collection does not decide whether a control is effective.",
              "indent": 0
            },
            {
              "text": "**Two different services:** AWS Artifact gives you AWS's own compliance reports. Audit Manager organizes evidence for your assessments.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s25.svg",
          "examObjectives": [
            "5.2.1"
          ]
        },
        {
          "id": "m5-s26",
          "title": "AWS Config",
          "bullets": [
            {
              "text": "**Configuration history:** AWS Config records how your resources are configured and how that changes over time.",
              "indent": 0
            },
            {
              "text": "**Rules:** Config rules check settings against what you require, such as encryption turned on or public access turned off.",
              "indent": 0
            },
            {
              "text": "**Scope:** A correctly configured resource does not prove that a generated answer is accurate or fair. You still have to evaluate the application.",
              "indent": 0
            },
            {
              "text": "**Conformance packs and remediation:** Group Config rules with remediation actions to assess a policy consistently. Review and test automated corrections so a compliance rule does not disrupt a legitimate workload.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s26.svg",
          "examObjectives": [
            "5.2.1"
          ]
        },
        {
          "id": "m5-s27",
          "title": "Amazon Inspector and AWS Trusted Advisor",
          "bullets": [
            {
              "text": "**Amazon Inspector:** Finds known software vulnerabilities and unintended network exposure in the workloads it covers.",
              "indent": 0
            },
            {
              "text": "**AWS Trusted Advisor:** Reviews your account and recommends improvements for security, reliability, performance, and cost.",
              "indent": 0
            },
            {
              "text": "**AI context:** These tools cover the infrastructure. You still need separate tests for prompt injection, unsafe outputs, and inappropriate tool actions.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s27.svg",
          "examObjectives": [
            "5.1.4",
            "5.2.1"
          ]
        },
        {
          "id": "m5-s28",
          "title": "Data Governance Responsibilities",
          "bullets": [
            {
              "text": "**Data roles:** A data owner approves permitted uses and access. A data steward maintains definitions and quality practices. IT teams implement storage, protection, and lifecycle controls under those decisions.",
              "indent": 0
            },
            {
              "text": "**Discovery and understanding:** Keep a catalog, classification, lineage, and a plain description of what each field means, so teams know what they are using.",
              "indent": 0
            },
            {
              "text": "**Lifecycle and observation:** Apply rules from collection through use, observation, retention, and deletion. Monitor whether real data handling follows the approved purpose, including copies used for testing.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s28.svg",
          "examObjectives": [
            "5.2.2",
            "5.2.3"
          ]
        },
        {
          "id": "m5-s29",
          "title": "Data Discovery and Curation",
          "bullets": [
            {
              "text": "**Inventory:** Use data catalogs and metadata to find sources and understand their structure and ownership.",
              "indent": 0
            },
            {
              "text": "**Preparation:** Glue and DataBrew run repeatable cleaning and transformation steps. Record the recipe and the version of the dataset it produced.",
              "indent": 0
            },
            {
              "text": "**Governance decision:** Cleaning data does not give you permission to use it. Confirm the permitted purpose and the quality before approving the dataset.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s29.svg",
          "examObjectives": [
            "5.2.2"
          ]
        },
        {
          "id": "m5-s40",
          "title": "Data Profiling, Quality, and Curation",
          "bullets": [
            {
              "text": "**Profiling:** Examine distributions, missing values, inconsistent units, and unexpected duplicates. DataBrew profile jobs and data quality rules help identify issues before a dataset is approved.",
              "indent": 0
            },
            {
              "text": "**AWS Glue Data Quality:** Define or recommend quality rules and evaluate data against them. Use results and supported anomaly detection to investigate changes, rather than treating one successful check as permanent approval.",
              "indent": 0
            },
            {
              "text": "**Catalog and lineage:** Glue Data Catalog stores metadata that supports discovery. Record where each dataset originated and how transformations changed it so users can understand and trace the material.",
              "indent": 0
            },
            {
              "text": "**Curation:** Resolve quality problems, integrate sources, and reconcile conflicting records against an agreed definition. Balance authorized access and useful analysis with privacy, security, and retention obligations.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.2",
            "5.2.2"
          ]
        },
        {
          "id": "m5-s30",
          "title": "S3 Lifecycle and Lake Formation",
          "bullets": [
            {
              "text": "**Retention:** S3 Lifecycle rules move objects to cheaper storage classes over time and delete them when they expire. Remember older versions and copies.",
              "indent": 0
            },
            {
              "text": "**Lake Formation:** Grants and manages permissions for a data lake in one place, down to individual tables and columns.",
              "indent": 0
            },
            {
              "text": "**Verify outcomes:** Test who can actually read the data and whether expired data really is gone. A configured rule needs proof that it works.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s30.svg",
          "examObjectives": [
            "5.2.2"
          ]
        },
        {
          "id": "m5-s41",
          "title": "S3 Storage Classes and Retention Decisions",
          "bullets": [
            {
              "text": "**Access patterns:** S3 Standard supports frequently accessed objects. Standard-IA and One Zone-IA suit infrequent access with different resilience characteristics; Intelligent-Tiering can adjust storage tiers for changing access patterns.",
              "indent": 0
            },
            {
              "text": "**Archives:** S3 Glacier Instant Retrieval, Flexible Retrieval, and Deep Archive offer different retrieval times and costs. Match the class to how quickly retained datasets or evidence must be recovered.",
              "indent": 0
            },
            {
              "text": "**Lifecycle rules:** Transition eligible objects and expire them according to policy. Include noncurrent versions and retention protections in the design, and verify actual deletion rather than assuming a rule immediately removes every copy.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.2.2"
          ]
        },
        {
          "id": "m5-s31",
          "title": "Generative AI Security Scoping Matrix",
          "bullets": [
            {
              "text": "**Scopes 1 and 2:** Using a public AI app (scope 1) or an enterprise app with AI features (scope 2) calls for acceptable-use rules, access controls, a review of what data is shared, and checks on the provider.",
              "indent": 0
            },
            {
              "text": "**Scope 3:** Building your own application on a pretrained model adds responsibility for the app's behavior, prompts, retrieval, and tools.",
              "indent": 0
            },
            {
              "text": "**Scopes 4 and 5:** Fine-tuning a model (scope 4) adds the customization data and model controls. Training your own model (scope 5) adds the whole training pipeline and infrastructure. Control what you manage.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s31.svg",
          "examObjectives": [
            "5.2.3"
          ]
        },
        {
          "id": "m5-s32",
          "title": "Applying Governance to an AI Scope",
          "bullets": [
            {
              "text": "**Map the system:** List the application, model, data sources, tools, and the parties who operate each. Mark which parts your organization controls.",
              "indent": 0
            },
            {
              "text": "**Assign controls:** For each component and owner, set the access, testing, logging, incident response, and documentation requirements.",
              "indent": 0
            },
            {
              "text": "**Check the gaps:** A vendor-run component still needs checks and an agreed boundary. A component you run needs an accountable operating team.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s32.svg",
          "examObjectives": [
            "5.2.3"
          ]
        },
        {
          "id": "m5-s33",
          "title": "Building an AI Governance Process",
          "bullets": [
            {
              "text": "**Before release:** Set acceptable use, risk review, evaluation pass marks, approvals, and named owners.",
              "indent": 0
            },
            {
              "text": "**During operation:** Set a consistent review cadence, monitor outcomes, investigate incidents, and control changes to models, prompts, data, and tools. Publish appropriate transparency standards so users and reviewers know the system's purpose and limits.",
              "indent": 0
            },
            {
              "text": "**Workforce readiness:** Train people to recognize AI limits, protect sensitive data, question outputs, and follow the escalation process.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s33.svg",
          "examObjectives": [
            "5.2.3"
          ]
        },
        {
          "id": "m5-s34",
          "title": "AgentCore Identity and Policy",
          "bullets": [
            {
              "text": "**Identity:** Amazon Bedrock AgentCore Identity gives an agent its own identity and manages its access to AWS and third-party resources, including acting on behalf of a user.",
              "indent": 0
            },
            {
              "text": "**Policy:** AgentCore Policy decides whether a specific tool call is allowed, using rules written in the Cedar policy language. Identity says who is acting; policy says whether the action is permitted.",
              "indent": 0
            },
            {
              "text": "**Example:** Let an assistant read appointment availability but forbid it from cancelling another customer's booking. Keep application checks and human approval as well.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s35",
          "title": "Auditing AI Interactions",
          "bullets": [
            {
              "text": "**Record the workflow:** Log the request context you are allowed to keep, the model and prompt versions, which sources were retrieved, the tool calls, the decisions, and the outcomes.",
              "indent": 0
            },
            {
              "text": "**Protect the evidence:** Remove personal data you do not need, restrict who can read the logs, and set a retention period. Otherwise the logs become a second copy of sensitive data.",
              "indent": 0
            },
            {
              "text": "**Investigate:** Line up application traces with CloudTrail events and operational monitoring to rebuild what happened. Review unsafe content and unusual tool behavior.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.4",
            "5.2.2"
          ]
        },
        {
          "id": "m5-s36",
          "title": "Detecting Unsupported Answers",
          "bullets": [
            {
              "text": "**Grounding:** Compare each claim with the retrieved evidence or a trusted system of record. A citation must actually support the sentence next to it.",
              "indent": 0
            },
            {
              "text": "**Validation:** Check calculations and structured outputs with ordinary code or tools. Use grounding scores and confidence signals with care. A model's own confidence is not proof.",
              "indent": 0
            },
            {
              "text": "**Escalation:** When evidence is missing or contradictory, ask the user to clarify, decline to answer, or hand the case to a person. Measure how often each happens.",
              "indent": 0
            }
          ],
          "visualization": "aif_m5_s36.svg",
          "examObjectives": [
            "5.1.5"
          ]
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "m5-s2",
            "m5-s34",
            "m5-s35"
          ],
          "question": "An agent may read appointment availability but must be prevented from canceling bookings outside the acting user's authority. Which design best enforces this boundary?",
          "options": {
            "A": "Give the agent administrator access and rely on a polite prompt",
            "B": "Use AgentCore Identity for access and Policy for fine-grained tool authorization",
            "C": "Log all cancellations but allow every tool call",
            "D": "Reduce the model's output token limit"
          },
          "correct": "B",
          "explanation": "Identity establishes the acting identity and access context. Policy can enforce authorization on gateway tool calls. Application validation and any required approval remain part of the workflow.",
          "wrongExplanations": {
            "A": "A prompt is not an authorization boundary; administrator access is excessive.",
            "C": "Logging provides evidence after actions but does not prevent unauthorized calls.",
            "D": "Output length does not restrict a tool's authority."
          }
        },
        {
          "id": 2,
          "teachingSlideIds": [
            "m1-s11",
            "m2-s10",
            "m5-s9",
            "m5-s21",
            "m5-s25",
            "m5-s26",
            "m5-s27"
          ],
          "question": "A reviewer needs AWS provider audit reports, while the project team separately needs to organize evidence for its own assessment. Which pairing fits these two needs?",
          "options": {
            "A": "AWS Artifact for provider reports; AWS Audit Manager for assessment evidence",
            "B": "Amazon Inspector for provider reports; Amazon Polly for assessment evidence",
            "C": "AWS Config for provider reports; Amazon Translate for assessment evidence",
            "D": "Amazon Macie for provider reports; prompt caching for assessment evidence"
          },
          "correct": "A",
          "explanation": "Artifact provides access to AWS compliance reports and agreements. Audit Manager helps collect and organize assessment evidence. Neither automatically establishes that the customer application satisfies every obligation.",
          "wrongExplanations": {
            "B": "Inspector examines supported workload vulnerabilities; Polly generates speech.",
            "C": "Config tracks resource configurations; Translate performs language translation.",
            "D": "Macie discovers sensitive data in S3; prompt caching reuses eligible model computation."
          }
        }
      ]
    },
    {
      "id": "m6",
      "title": "Course Review and Wrap-up",
      "objectives": [
        "Review the five exam domains for the AWS Certified AI Practitioner (AIF-C01) exam.",
        "Understand the test-taking strategies and elimination techniques.",
        "Identify resources for exam practice and register for the certification."
      ],
      "slides": [
        {
          "id": "m6-s1",
          "title": "Review the Five Exam Domains",
          "bullets": [
            {
              "text": "**Domain weights:** AI and ML fundamentals 20%; generative AI fundamentals 24%; foundation model applications 28%; responsible AI 14%; security and governance 14%.",
              "indent": 0
            },
            {
              "text": "**Course structure:** Modules follow a teaching order. Their slide counts do not match the share of exam questions.",
              "indent": 0
            },
            {
              "text": "**Revision focus:** Revisit context engineering, agents, customization trade-offs, workflow evaluation, and operational controls, along with the fundamentals.",
              "indent": 0
            }
          ],
          "visualization": "aif_m6_s1.svg",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m6-s2",
          "title": "Question Formats and Exam Strategy",
          "bullets": [
            {
              "text": "**Formats:** The exam guide lists multiple-choice, multiple-response, ordering, and matching questions. Follow each question's instructions for how many to select or how to arrange them.",
              "indent": 0
            },
            {
              "text": "**Read the constraint:** Find the desired outcome, the available data, the cost or speed limits, and the required control. Rule out services that solve a different problem.",
              "indent": 0
            },
            {
              "text": "**Scoring:** The guide describes 50 scored and 15 unscored questions. The passing score is 700 on a scale of 100 to 1,000, which is not the same as 70% correct.",
              "indent": 0
            },
            {
              "text": "**Time management:** Work out the requirement before comparing the options. Eliminate mismatches, select the best-supported answer, and flag a difficult item for review rather than spending the remaining exam time on one question.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.4.1"
          ]
        },
        {
          "id": "m6-s3",
          "title": "Check Readiness with Evidence",
          "bullets": [
            {
              "text": "**Explain your choices:** For each exam objective, explain the concept, apply it to a scenario, and say why a plausible alternative is wrong.",
              "indent": 0
            },
            {
              "text": "**Official practice:** Use an AWS Certification Official Practice Exam or available pretest to assess readiness and review explanations. The 11 course checkpoints sample concepts and do not predict a passing result.",
              "indent": 0
            },
            {
              "text": "**Target the gaps:** Sort your mistakes by objective, then try new scenarios. Reasoning through an unfamiliar case is stronger evidence than remembering a question's wording.",
              "indent": 0
            }
          ],
          "visualization": "aif_m6_s3.svg",
          "examObjectives": [
            "3.4.1"
          ]
        },
        {
          "id": "m6-s4",
          "title": "Find Official Exam and Preparation Information",
          "bullets": [
            {
              "text": "**Exam information:** The [AWS AI Practitioner certification page](https://aws.amazon.com/certification/certified-ai-practitioner/) has the current exam guide and the scheduling route.",
              "indent": 0
            },
            {
              "text": "**Preparation:** [AWS Skill Builder](https://skillbuilder.aws/) has official practice and learning resources. Availability and access requirements can change.",
              "indent": 0
            },
            {
              "text": "**Before scheduling:** Check the current delivery options and candidate requirements in the official registration flow.",
              "indent": 0
            }
          ],
          "visualization": "aif_m6_s4.svg",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m6-s5",
          "title": "Continue with Applied Practice",
          "bullets": [
            {
              "text": "**Try a small task:** Compare two prompts or two models on the same approved material and record the differences in quality, cost, and speed.",
              "indent": 0
            },
            {
              "text": "**Trace a workflow:** Follow one request through retrieval, generation, tool use, and validation. Note where permissions and monitoring apply.",
              "indent": 0
            },
            {
              "text": "**Use current documentation:** Service features change. Keep the exam objectives as your study boundary and the official AWS documentation as the reference for how things work.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.1.6"
          ]
        },
        {
          "id": "m6-s7",
          "title": "Continuing Learning and Certification Paths",
          "bullets": [
            {
              "text": "**AWS Skill Builder:** Choose digital courses, self-paced labs, game-based learning, and use-case challenges according to the skills you need to practice. Some resources are free and others require paid access.",
              "indent": 0
            },
            {
              "text": "**Instructor-led learning:** Classroom training can add guided practice and discussion. Choose the course by its prerequisites and learning outcomes, rather than its length alone.",
              "indent": 0
            },
            {
              "text": "**Certification levels:** Foundational credentials cover core knowledge; Associate and Professional credentials address increasing role depth. Specialty credentials focus on a particular area. Check the current AWS catalog and each exam's recommended experience.",
              "indent": 0
            },
            {
              "text": "**Feedback and support:** Send workshop feedback to the organizer with a slide reference. For AWS-owned training or certification issues, use [AWS Training and Certification support](https://support.aws.amazon.com/#/contacts/aws-training).",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m6-s6",
          "title": "Reflect and Plan the Next Review",
          "bullets": [
            {
              "text": "**Explain one decision:** Describe a situation where rules, traditional ML, or a foundation model is the best fit, and the trade-off involved.",
              "indent": 0
            },
            {
              "text": "**Identify one gap:** Pick an objective you cannot yet explain in a fresh scenario and schedule focused practice on it.",
              "indent": 0
            },
            {
              "text": "**Improve the course:** Report unclear explanations, broken links, or diagram problems, with the slide ID and what you saw.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "4.2.4"
          ]
        }
      ],
      "quiz": []
    },
    {
      "id": "m7",
      "title": "Skill Builder Labs",
      "objectives": [
        "Gain hands-on experience with core AWS AI and ML services.",
        "Explore the Amazon Bedrock console, adjust foundation model parameters, and test prompts.",
        "Practice prompt engineering techniques in playground environments.",
        "Set up a development environment in Amazon SageMaker Studio and run machine learning models."
      ],
      "slides": [
        {
          "id": "m7-s1",
          "title": "LAB: Introduction to the Amazon Bedrock Console (Requires Subscription)",
          "bullets": [
            {
              "text": "**Lab activity:** Explore the Bedrock console and playgrounds, try text or image models, and adjust the inference settings.",
              "indent": 0
            },
            {
              "text": "**Reflection:** Send the same prompt with different settings. Note which settings change the variety or length of the answer, and which claims still need checking.",
              "indent": 0
            },
            {
              "text": "**AWS Skill Builder:** [Launch Lab on AWS Skill Builder](https://skillbuilder.aws/learn/CQ9BPN151C/lab--introduction-to-the-amazon-bedrock-console/)",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.1.1",
            "3.1.2"
          ]
        },
        {
          "id": "m7-s2",
          "title": "LAB: Explore Foundation Models and Prompt Engineering (Requires Subscription)",
          "bullets": [
            {
              "text": "**Lab activity:** Experiment with foundation models and prompts in Bedrock, including examples and inference settings.",
              "indent": 0
            },
            {
              "text": "**Reflection:** Keep a small table of prompt, settings, output quality, and limitations. Use the same test cases each time so improvements are real.",
              "indent": 0
            },
            {
              "text": "**AWS Skill Builder:** [Launch Lab on AWS Skill Builder](https://skillbuilder.aws/learn/AX3ECS7BFW/lab--explore-foundation-models-and-prompt-engineering/)",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.2.2",
            "3.2.3"
          ]
        },
        {
          "id": "m7-s3",
          "title": "LAB: Build Machine Learning Models with Amazon SageMaker (Requires Subscription)",
          "bullets": [
            {
              "text": "**Lab activity:** Work in SageMaker Studio, set up a notebook, and build a linear regression model with Python and scikit-learn.",
              "indent": 0
            },
            {
              "text": "**Reflection:** Link each hands-on step to data preparation, training, inference, or evaluation. The coding goes beyond what the exam requires, but it makes the concepts concrete.",
              "indent": 0
            },
            {
              "text": "**AWS Skill Builder:** [Launch Lab on AWS Skill Builder](https://skillbuilder.aws/learn/V4N9X9XV6E/lab--build-machine-learning-models-with-amazon-sagemaker/)",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.1",
            "1.3.4"
          ]
        }
      ],
      "quiz": []
    }
  ]
};

if (typeof module !== "undefined" && module.exports) module.exports = AIF_COURSE_DATA;
