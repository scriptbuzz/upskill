// Original course explanations, scenarios, and diagrams; the rebuild follows the exam guide's task statements.
const AIF_V1_6_COURSE_DATA = {
  "id": "aif-v1-6",
  "version": "v1.6 beta",
  "lastModified": "2026-10-16",
  "title": "AWS Certified AI Practitioner (AIF-C01)",
  "description": "AI Practitioner workshop organized by exam domain and task statement, with checkpoint quizzes and hands-on labs.",
  "catalog": {
    "tag": "AIF-C01",
    "theme": "purple",
    "order": 3,
    "description": "Learn AI, machine learning, and generative AI on AWS, organized by the AIF-C01 exam guide's domains and task statements, with original diagrams, checkpoint quizzes, and hands-on labs.",
    "labAccess": "Requires Subscription",
    "listed": false
  },
  "modules": [
    {
      "id": "m1",
      "title": "Fundamentals of AI and ML",
      "objectives": [
        "Explain basic AI concepts and terminologies.",
        "Identify practical use cases for AI.",
        "Describe the AI/ML development lifecycle."
      ],
      "sections": [
        {
          "id": "1.1",
          "title": "Explain basic AI concepts and terminologies."
        },
        {
          "id": "1.2",
          "title": "Identify practical use cases for AI."
        },
        {
          "id": "1.3",
          "title": "Describe the AI/ML development lifecycle."
        }
      ],
      "slides": [
        {
          "id": "m1-s1",
          "title": "Task Statement 1.1: Basic AI Concepts and Terms",
          "section": "1.1",
          "bullets": [
            {
              "text": "**What this section covers:** The vocabulary used throughout the exam: artificial intelligence (AI), machine learning (ML), deep learning, neural networks, generative AI, and agentic AI.",
              "indent": 0
            },
            {
              "text": "**How models learn and answer:** Kinds of data, the three main families of learning, training compared with inference, and the inference options AWS offers.",
              "indent": 0
            },
            {
              "text": "**Quality terms:** What it means for a model to fit well, and how bias and fairness affect the people who rely on its results.",
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
          "title": "What Artificial Intelligence Means",
          "section": "1.1",
          "bullets": [
            {
              "text": "**AI:** Computer systems that perform tasks we usually associate with human thinking, such as holding a conversation, recognizing an image, drafting content, or working through a complex problem.",
              "indent": 0
            },
            {
              "text": "**Why organizations use it:** AI can take on repetitive work, respond at any hour, and surface patterns that support faster and better-informed decisions.",
              "indent": 0
            },
            {
              "text": "**Nested fields:** Machine learning is one way to build AI: the system learns from data instead of following hand-written rules. Deep learning is a kind of ML that uses many-layered neural networks. Generative AI uses deep learning models to produce new content.",
              "indent": 0
            },
            {
              "text": "**Keep the scope clear:** Not every AI system learns. A rules engine can look intelligent but only does what its authors wrote.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s2.svg",
          "examObjectives": [
            "1.1.1",
            "1.1.2"
          ]
        },
        {
          "id": "m1-s3",
          "title": "Where AI Adds Value",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Health:** Highlight scans that a clinician should review first, or anticipate a rise in patient visits from seasonal patterns.",
              "indent": 0
            },
            {
              "text": "**Quality and operations:** Spot damaged products on a production line and predict when a machine is likely to need service.",
              "indent": 0
            },
            {
              "text": "**Customer experience:** Answer routine questions through self-service and suggest products that match a customer's history.",
              "indent": 0
            },
            {
              "text": "**Decisions and productivity:** Forecast demand, flag suspicious payments, route documents to the right team, and target campaigns to the people most likely to respond.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s3.svg",
          "examObjectives": [
            "1.2.1",
            "1.2.4"
          ]
        },
        {
          "id": "m1-s4",
          "title": "Learning Patterns to Make Predictions",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Pattern recognition:** A model studies historical records, such as weekly parcel volumes, and learns the regular rise and fall in the data.",
              "indent": 0
            },
            {
              "text": "**Forecasts carry uncertainty:** A forecast is a range of likely outcomes, not a promise. The range usually widens the further ahead you look.",
              "indent": 0
            },
            {
              "text": "**Business use:** Staffing, stock levels, and maintenance can be planned from the expected value while the range shows how much buffer to keep.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s4.svg",
          "examObjectives": [
            "1.1.1",
            "1.2.4"
          ]
        },
        {
          "id": "m1-s5",
          "title": "Detecting Unusual Behavior",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Anomaly detection:** The system learns what normal activity looks like and flags points that depart from it, such as a sudden spike in server errors.",
              "indent": 0
            },
            {
              "text": "**Typical uses:** Suspicious card payments, sensor readings that suggest a failing pump, and traffic patterns that suggest an attack.",
              "indent": 0
            },
            {
              "text": "**An alert starts an investigation:** Something unusual is not always something wrong. A holiday sale can look like an anomaly, so a person or a rule decides what happens next.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s5.svg",
          "examObjectives": [
            "1.2.4"
          ]
        },
        {
          "id": "m1-s6",
          "title": "Finding Defects with Computer Vision",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Computer vision:** AI that interprets images and video. A model can examine every item on a conveyor belt and mark the region that looks scratched, dented, or misaligned.",
              "indent": 0
            },
            {
              "text": "**Benefits:** Consistent inspection at high speed, fewer missed defects caused by fatigue, and a record of each decision for quality reporting.",
              "indent": 0
            },
            {
              "text": "**Keep people involved:** Uncertain or costly decisions, such as scrapping an expensive part, can be routed to an inspector.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s6.svg",
          "examObjectives": [
            "1.1.1",
            "1.2.4"
          ]
        },
        {
          "id": "m1-s7",
          "title": "Translating Conversations",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Machine translation:** AI converts text from one language to another while considering the meaning of the whole sentence, not just word-by-word substitutions.",
              "indent": 0
            },
            {
              "text": "**Live support example:** A customer writes in Portuguese, the agent reads the message in English, and the agent's reply returns to the customer in Portuguese.",
              "indent": 0
            },
            {
              "text": "**On AWS:** Amazon Translate provides this capability through an application programming interface (API), so a chat or ticketing system can call it directly.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s7.svg",
          "examObjectives": [
            "1.2.4",
            "1.2.5"
          ]
        },
        {
          "id": "m1-s8",
          "title": "Natural Language Processing: Intents, Utterances, and Slots",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Natural language processing (NLP):** AI that works with human language in text or speech, for example to understand a request and reply to it.",
              "indent": 0
            },
            {
              "text": "**Intent and utterance:** The intent is the goal, such as scheduling a bicycle repair. Utterances are the different ways a person might express it: \"Can someone look at my brakes on Friday?\"",
              "indent": 0
            },
            {
              "text": "**Slots and fulfillment:** Slots are the details the system still needs, such as the date and the type of repair. Once the slots are filled, fulfillment carries out the action and confirms it.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s8.svg",
          "examObjectives": [
            "1.1.1",
            "1.2.4"
          ]
        },
        {
          "id": "m1-s9",
          "title": "Generative AI Creates New Content",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Generative AI:** Models that produce new text, images, audio, video, or code in response to an instruction called a prompt.",
              "indent": 0
            },
            {
              "text": "**Example:** Prompt: \"Write a two-sentence welcome message for new members of a cycling club.\" The model returns an original draft that a person can edit and approve.",
              "indent": 0
            },
            {
              "text": "**What makes it different:** Earlier ML systems mostly classify or predict from data. Generative models create content that did not exist before, so the output still needs review for accuracy and tone.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.1.1",
            "1.1.2"
          ]
        },
        {
          "id": "m1-s10",
          "title": "How Machine Learning Works: Training and Inference",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Training:** An algorithm studies known examples, finds patterns and relationships between inputs and outcomes, and stores what it learned as a model.",
              "indent": 0
            },
            {
              "text": "**Inference:** The trained model receives new data it has not seen and returns a prediction, such as an estimated delivery time.",
              "indent": 0
            },
            {
              "text": "**Improve over time:** When new labeled data arrives or results drift, the model can be retrained. Running inference alone does not change the model.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s10.svg",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m1-s11",
          "title": "Structured Data",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Structured data:** Information organized in rows and columns that follow a fixed schema, such as orders with an ID, store, product, quantity, and price.",
              "indent": 0
            },
            {
              "text": "**Why it is convenient:** Each column has a defined meaning and type, so the data is straightforward to query, join, and use as model inputs.",
              "indent": 0
            },
            {
              "text": "**AWS storage examples:** Amazon RDS for transactional relational databases, Amazon Redshift for large-scale analytics, and Amazon S3 for files such as CSV or Parquet exports.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s11.svg",
          "examObjectives": [
            "1.1.4"
          ]
        },
        {
          "id": "m1-s12",
          "title": "Semi-Structured Data",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Semi-structured data:** Records that use named fields, as in JSON, but where different records can carry different fields. One customer may have a phone number while another has only an email address.",
              "indent": 0
            },
            {
              "text": "**Flexibility:** New attributes can be added without redesigning a table, which suits product catalogs, event logs, and user profiles.",
              "indent": 0
            },
            {
              "text": "**AWS storage examples:** Amazon DynamoDB, a managed key-value and document database, and Amazon DocumentDB (with MongoDB compatibility). Files can also be stored in Amazon S3.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s12.svg",
          "examObjectives": [
            "1.1.4"
          ]
        },
        {
          "id": "m1-s13",
          "title": "Unstructured Data",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Unstructured data:** Content without a predefined data model: documents, emails, photographs, audio recordings, video, and social media posts.",
              "indent": 0
            },
            {
              "text": "**Most organizational data:** Much of what businesses hold is unstructured, and models such as image classifiers or language models are designed to learn from it.",
              "indent": 0
            },
            {
              "text": "**AWS storage:** Amazon S3 stores objects of any type and size durably, which makes it a common home for unstructured training data.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s13.svg",
          "examObjectives": [
            "1.1.4"
          ]
        },
        {
          "id": "m1-s14",
          "title": "Time-Series Data",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Time-series data:** Measurements recorded in time order, each tied to a timestamp, such as CPU use, requests per second, and memory use for an application every minute.",
              "indent": 0
            },
            {
              "text": "**What it reveals:** Trends, daily and weekly cycles, and sudden changes, which support monitoring, forecasting, and capacity planning.",
              "indent": 0
            },
            {
              "text": "**Keep the order:** When splitting time series for training and testing, test on later periods so the model is not evaluated on the past it was trained to predict.",
              "indent": 0
            },
            {
              "text": "**Storage:** Amazon S3 holds large historical datasets. Amazon Timestream, a database built for time-series data, is on the exam guide's out-of-scope list, so treat it as background.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s14.svg",
          "examObjectives": [
            "1.1.4"
          ]
        },
        {
          "id": "m1-s15",
          "title": "Algorithms, Parameters, and Model Training",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Algorithm:** The procedure the computer follows to learn from data, for example fitting a straight line through points.",
              "indent": 0
            },
            {
              "text": "**Parameters:** The values the algorithm adjusts during training. For a line, that is the slope and the intercept in y = m·x + b.",
              "indent": 0
            },
            {
              "text": "**Worked example:** To estimate delivery time (y) from distance (x), training finds the slope and intercept that place the line closest to the recorded deliveries. The trained model is that line, ready to estimate new trips.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s15.svg",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m1-s16",
          "title": "Supervised Learning Uses Labeled Examples",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Labeled data:** Each training example includes the correct answer, such as photographs of parcels marked \"damaged\" or \"intact.\"",
              "indent": 0
            },
            {
              "text": "**Learning the mapping:** The model learns which features separate the labels, then predicts the label for new, unlabeled photographs.",
              "indent": 0
            },
            {
              "text": "**Labels take effort:** Large labeled datasets are expensive to build. Amazon SageMaker Ground Truth manages labeling workflows, and Amazon Mechanical Turk offers an on-demand human workforce for simple labeling tasks.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s16.svg",
          "examObjectives": [
            "1.1.4",
            "1.1.5"
          ]
        },
        {
          "id": "m1-s17",
          "title": "Unsupervised Learning: Finding Groups",
          "section": "1.1",
          "bullets": [
            {
              "text": "**No labels:** The algorithm receives data without correct answers and looks for structure on its own.",
              "indent": 0
            },
            {
              "text": "**Clustering:** Points that are similar end up in the same group, for example riders who rent on weekday mornings and riders who rent on weekend afternoons.",
              "indent": 0
            },
            {
              "text": "**People interpret the groups:** The algorithm finds the clusters; an analyst decides what each one means and whether it is useful.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s17.svg",
          "examObjectives": [
            "1.1.5"
          ]
        },
        {
          "id": "m1-s18",
          "title": "Unsupervised Learning: Flagging Outliers",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Learning what is normal:** Without labels, the model maps where most readings fall, such as the usual temperature of a freezer at each hour of the day.",
              "indent": 0
            },
            {
              "text": "**Outliers:** Readings far from that normal region are flagged for attention, which may reveal a door left open or a failing compressor.",
              "indent": 0
            },
            {
              "text": "**Useful when examples are rare:** Failures and fraud happen seldom, so there may not be enough labeled cases to train a supervised model.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s18.svg",
          "examObjectives": [
            "1.1.5"
          ]
        },
        {
          "id": "m1-s19",
          "title": "Reinforcement Learning: Learning from Rewards",
          "section": "1.1",
          "bullets": [
            {
              "text": "**The loop:** An agent observes the state of its environment, takes an action, and receives a reward or penalty along with the new state.",
              "indent": 0
            },
            {
              "text": "**Trial and error:** Over many attempts, the agent learns a policy, a way of choosing actions that maximizes total reward over time.",
              "indent": 0
            },
            {
              "text": "**Example:** A warehouse robot earns rewards for fast, collision-free deliveries. It explores new routes at first, then exploits the routes that have worked best.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s19.svg",
          "examObjectives": [
            "1.1.5"
          ]
        },
        {
          "id": "m1-s20",
          "title": "Model Fit: Overfitting and Underfitting",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Overfitting:** The model memorizes its training examples, including noise, so it scores very well in training but poorly on new data.",
              "indent": 0
            },
            {
              "text": "**Underfitting:** The model is too simple to capture the real pattern and performs poorly on both training data and new data.",
              "indent": 0
            },
            {
              "text": "**Good fit:** The model captures the general pattern and performs similarly on data it has not seen. Compare training and validation results to tell the cases apart.",
              "indent": 0
            },
            {
              "text": "**Remedies:** More representative data, a simpler or more capable model as needed, regularization, and cross-validation.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s20.svg",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m1-s21",
          "title": "Real-Time Inference",
          "section": "1.1",
          "bullets": [
            {
              "text": "**When to use it:** An application needs an answer within moments, such as a fraud score while a payment is being approved.",
              "indent": 0
            },
            {
              "text": "**How it works:** The model runs behind a persistent endpoint. Each request goes to the endpoint, the inference code loads the trained model artifacts, and the prediction returns immediately.",
              "indent": 0
            },
            {
              "text": "**Trade-off:** Low latency and steady throughput, at the cost of keeping the endpoint running, and paying for it, even when traffic is light.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s21.svg",
          "examObjectives": [
            "1.1.3"
          ]
        },
        {
          "id": "m1-s22",
          "title": "Batch Inference",
          "section": "1.1",
          "bullets": [
            {
              "text": "**When to use it:** Large datasets that do not need instant answers, such as scoring every customer account once a night.",
              "indent": 0
            },
            {
              "text": "**How it works:** Input files sit in a storage location such as Amazon S3, a job applies the model to them in bulk, and the results are written to another location for reports or downstream systems.",
              "indent": 0
            },
            {
              "text": "**Trade-off:** Usually more cost-effective for occasional, high-volume work because no endpoint waits idle between runs; results arrive only when the job completes.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s22.svg",
          "examObjectives": [
            "1.1.3"
          ]
        },
        {
          "id": "m1-s23",
          "title": "Bias and Fairness in Model Results",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Bias:** Systematic errors that favor or disadvantage certain groups, for example a loan model that approves applicants from one region far more often than equally qualified applicants elsewhere.",
              "indent": 0
            },
            {
              "text": "**Fairness:** The goal that a model's outcomes and error rates do not unjustly differ across groups of people.",
              "indent": 0
            },
            {
              "text": "**What to check:** Whether training data represents everyone the model will serve, which features drive decisions and whether they act as stand-ins for protected traits, and whether fairness constraints are needed during training.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s23.svg",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m1-s24",
          "title": "Deep Learning and Neural Networks",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Neural network:** Layers of connected nodes. The input layer receives data, hidden layers transform it, and the output layer produces the result.",
              "indent": 0
            },
            {
              "text": "**Learning:** Each connection has a weight. Training adjusts the weights to reduce the gap between the network's output and the correct answer.",
              "indent": 0
            },
            {
              "text": "**Deep learning:** Networks with many hidden layers. They can learn useful features directly from raw images, audio, and text instead of relying on features chosen by people.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s24.svg",
          "examObjectives": [
            "1.1.1",
            "1.1.2"
          ]
        },
        {
          "id": "m1-s25",
          "title": "Computer Vision: Classify, Detect, and Locate",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Image classification:** Assigns a label to a whole image, such as \"bicycle\" or \"scooter.\"",
              "indent": 0
            },
            {
              "text": "**Object detection:** Finds each object in an image and draws a box around it with a label and a confidence score.",
              "indent": 0
            },
            {
              "text": "**Why deep learning matters here:** Neural networks trained on many labeled images learn shapes, textures, and edges on their own, which made modern computer vision accurate enough for production use.",
              "indent": 0
            },
            {
              "text": "**On AWS:** Amazon Rekognition offers ready-made image and video analysis; Amazon SageMaker AI supports training custom vision models.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s25.svg",
          "examObjectives": [
            "1.1.1",
            "1.2.4"
          ]
        },
        {
          "id": "m1-s26",
          "title": "Traditional Machine Learning Compared with Deep Learning",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Traditional ML:** Suits well-defined tasks with structured, labeled data. People select and engineer the input features. Training and running the model usually costs less.",
              "indent": 0
            },
            {
              "text": "**Deep learning:** Suits complex tasks with unstructured data such as images, audio, and free text. The network learns its own features from errors during training.",
              "indent": 0
            },
            {
              "text": "**Cost and data:** Deep learning generally needs much more data and computing power. Choose it when the problem genuinely requires it.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.1.2"
          ]
        },
        {
          "id": "m1-s27",
          "title": "Large Language Models",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Large language model (LLM):** A deep learning foundation model, typically built on the transformer architecture, trained on very large amounts of text.",
              "indent": 0
            },
            {
              "text": "**Scale:** LLMs contain billions of learned parameters, which lets one model handle many language tasks without being trained separately for each.",
              "indent": 0
            },
            {
              "text": "**Flexible uses:** Classifying text, generating text, translating, summarizing, answering questions, and writing code.",
              "indent": 0
            },
            {
              "text": "**Example:** Prompt: \"Summarize this customer email in one sentence.\" The model returns a short summary, which should still be checked against the original email.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.1.1",
            "1.1.2"
          ]
        },
        {
          "id": "m1-s28",
          "title": "Agentic AI: Models That Plan and Act",
          "section": "1.1",
          "bullets": [
            {
              "text": "**Agentic AI:** A system that uses a foundation model to work toward a goal by planning steps, calling tools such as APIs or databases, and adjusting its plan based on the results.",
              "indent": 0
            },
            {
              "text": "**How it differs:** Traditional ML predicts, and generative AI produces content in response to a prompt. An agent decides on and carries out a sequence of actions.",
              "indent": 0
            },
            {
              "text": "**Example:** Asked to rebook a missed delivery, an agent checks the order, finds open time slots, books one, and confirms with the customer.",
              "indent": 0
            },
            {
              "text": "**Controls still apply:** Limit which tools an agent may use, require approval for consequential actions, and log every step.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s28.svg",
          "examObjectives": [
            "1.1.1",
            "1.1.2"
          ]
        },
        {
          "id": "m1-s29",
          "title": "Task Statement 1.2: Practical Use Cases for AI",
          "section": "1.2",
          "bullets": [
            {
              "text": "**What this section covers:** How to recognize where AI and ML add value, and where a simpler approach is the better choice.",
              "indent": 0
            },
            {
              "text": "**Matching problems to techniques:** Classification, regression, clustering, and anomaly detection, each with a worked scenario.",
              "indent": 0
            },
            {
              "text": "**AWS managed AI services:** Ready-made services for images, documents, language, speech, search, recommendations, and generative AI, followed by real-world use cases.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.2.1"
          ]
        },
        {
          "id": "m1-s30",
          "title": "When AI and ML Help a Business",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Increase efficiency:** Automate time-consuming tasks such as sorting incoming documents, and let customers resolve routine requests through self-service.",
              "indent": 0
            },
            {
              "text": "**Solve complex problems:** Analyze large, fast-moving data that people cannot review by hand, for example to detect fraud or reduce wasted stock.",
              "indent": 0
            },
            {
              "text": "**Make better decisions:** Forecast demand and give staff quick answers drawn from the organization's own information.",
              "indent": 0
            },
            {
              "text": "**Assist people:** In many uses, AI supports a human decision-maker rather than replacing one.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s30.svg",
          "examObjectives": [
            "1.2.1"
          ]
        },
        {
          "id": "m1-s31",
          "title": "When AI and ML Are Not the Right Fit",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Cost and benefit:** Compare the cost of data, training, deployment, and upkeep with the measurable gain. If the gain is small, AI may not pay off.",
              "indent": 0
            },
            {
              "text": "**Interpretability:** Some decisions must be fully explained, for example to a regulator. A complex model may be hard to justify.",
              "indent": 0
            },
            {
              "text": "**Need for an exact answer:** ML returns probabilities. If the outcome must be deterministic, such as calculating tax owed, use a conventional program.",
              "indent": 0
            },
            {
              "text": "**A working rules-based solution:** If clear rules already solve the problem reliably, adding ML can increase cost and risk without improving results.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s31.svg",
          "examObjectives": [
            "1.2.2",
            "1.2.6"
          ]
        },
        {
          "id": "m1-s32",
          "title": "Choosing an ML Problem Type",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Supervised learning:** The training data includes the target value. Classification predicts a category; regression predicts a continuous number.",
              "indent": 0
            },
            {
              "text": "**Unsupervised learning:** The training data has no target. Clustering groups similar records; anomaly detection finds records that do not fit.",
              "indent": 0
            },
            {
              "text": "**Ask what the output is:** A label (\"spam\" or \"not spam\"), a quantity (next week's sales), a set of groups, or a list of outliers. The answer points to the technique.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s32.svg",
          "examObjectives": [
            "1.2.3"
          ]
        },
        {
          "id": "m1-s33",
          "title": "Classification: Binary and Multiclass",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Binary classification:** Two possible classes. The model returns the probability that an item belongs to the positive class, such as the probability that an email is spam.",
              "indent": 0
            },
            {
              "text": "**Multiclass classification:** Three or more classes, such as routing a support ticket to billing, shipping, or technical support. The model returns the most likely class.",
              "indent": 0
            },
            {
              "text": "**Threshold:** In binary classification, a cut-off probability converts the score into a decision. Changing the threshold trades missed cases against false alarms.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s33.svg",
          "examObjectives": [
            "1.2.3"
          ]
        },
        {
          "id": "m1-s34",
          "title": "Regression: Simple, Multiple, and Logistic",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Simple linear regression:** One input predicts a continuous value, for example delivery time from distance.",
              "indent": 0
            },
            {
              "text": "**Multiple linear regression:** Several inputs predict the value, for example a house price from floor area, number of rooms, and location.",
              "indent": 0
            },
            {
              "text": "**Logistic regression:** Despite its name, it is used for classification. It outputs a probability between 0 and 1 from one or more inputs, such as the chance that a customer cancels a subscription.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s34.svg",
          "examObjectives": [
            "1.2.3"
          ]
        },
        {
          "id": "m1-s35",
          "title": "Clustering Scenario: Customer Segments",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Problem:** A bicycle rental company has no predefined customer categories but wants to tailor its offers.",
              "indent": 0
            },
            {
              "text": "**Inputs:** Rental frequency, typical rental length, time of day, preferred bicycle type, and home district for each customer.",
              "indent": 0
            },
            {
              "text": "**Result:** Clustering reveals groups such as daily commuters, weekend leisure riders, and occasional visitors.",
              "indent": 0
            },
            {
              "text": "**Action:** Marketing designs a commuter pass, weekend bundles, and tourist offers, then measures whether retention improves.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s35.svg",
          "examObjectives": [
            "1.2.3",
            "1.2.4"
          ]
        },
        {
          "id": "m1-s36",
          "title": "Anomaly Detection Scenario: Card Fraud",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Problem:** Fraud tactics change constantly, and new schemes have no labeled examples yet.",
              "indent": 0
            },
            {
              "text": "**Inputs:** Payment amount, merchant type, time of day, location, device details, and the cardholder's past spending pattern.",
              "indent": 0
            },
            {
              "text": "**Approach:** The model learns each cardholder's normal behavior and flags payments that sit far outside it.",
              "indent": 0
            },
            {
              "text": "**Outcome:** Flagged payments are held for verification, so most legitimate purchases go through without delay.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s36.svg",
          "examObjectives": [
            "1.2.3",
            "1.2.4"
          ]
        },
        {
          "id": "m1-s37",
          "title": "Amazon Rekognition: Image and Video Analysis",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Faces:** Compare faces and analyze facial attributes for uses such as identity verification.",
              "indent": 0
            },
            {
              "text": "**Objects and scenes:** Detect and label objects, scenes, and activities. Custom Labels trains a model on your own labeled images to find items specific to your business.",
              "indent": 0
            },
            {
              "text": "**Text and moderation:** Detect text that appears in images and video, and flag inappropriate or unsafe content for review.",
              "indent": 0
            },
            {
              "text": "**No model building required:** These capabilities are called through an API without training a model yourself, except when you choose Custom Labels.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s37.svg",
          "examObjectives": [
            "1.2.4",
            "1.2.5"
          ]
        },
        {
          "id": "m1-s38",
          "title": "Amazon Textract and Amazon Comprehend",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Amazon Textract:** Extracts printed text, handwriting, layout elements, and structured data such as form fields and tables from scanned documents and images.",
              "indent": 0
            },
            {
              "text": "**Amazon Comprehend:** Uses NLP to find key phrases, entities such as names and places, and sentiment in text.",
              "indent": 0
            },
            {
              "text": "**Personally identifiable information (PII):** Comprehend can detect PII such as addresses and account numbers so it can be redacted or protected.",
              "indent": 0
            },
            {
              "text": "**Together:** Textract turns a scanned complaint letter into text; Comprehend then identifies its topic, sentiment, and any personal data.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s38.svg",
          "examObjectives": [
            "1.2.5"
          ]
        },
        {
          "id": "m1-s39",
          "title": "Amazon Lex, Amazon Transcribe, and Amazon Polly",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Amazon Lex:** Builds conversational interfaces that understand voice and text, such as customer service chatbots and interactive voice response (IVR) systems.",
              "indent": 0
            },
            {
              "text": "**Amazon Transcribe:** Converts speech to text, either from recorded files in batch or from live audio streams, for example to caption calls in real time.",
              "indent": 0
            },
            {
              "text": "**Improving transcription:** A custom vocabulary teaches Transcribe specific words such as brand names and acronyms. A custom language model adapts it to the language patterns of a domain.",
              "indent": 0
            },
            {
              "text": "**Amazon Polly:** Converts text to lifelike speech, such as the spoken prompts a caller hears in an IVR system.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s39.svg",
          "examObjectives": [
            "1.2.5"
          ]
        },
        {
          "id": "m1-s40",
          "title": "Amazon Kendra, Amazon Personalize, and Amazon Translate",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Amazon Kendra:** Intelligent search across an organization's documents. People ask questions in natural language and receive the most relevant passages.",
              "indent": 0
            },
            {
              "text": "**Amazon Personalize:** Produces individual product or content recommendations from customers' interaction history.",
              "indent": 0
            },
            {
              "text": "**Amazon Translate:** Translates text between many languages so websites, support chats, and documents can reach a wider audience.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s40.svg",
          "examObjectives": [
            "1.2.4",
            "1.2.5"
          ]
        },
        {
          "id": "m1-s41",
          "title": "Amazon Fraud Detector",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Purpose:** A managed service that scores online activity for the risk of fraud using ML.",
              "indent": 0
            },
            {
              "text": "**Events it can assess:** Online payments, checkout, new account sign-ups, account takeover attempts, and fake reviews.",
              "indent": 0
            },
            {
              "text": "**Real time and batch:** Score individual events as they happen or score many events together.",
              "indent": 0
            },
            {
              "text": "**Check availability:** Confirm the service's current availability in AWS documentation before planning a new project; the exam guide lists fraud detection as a use case rather than naming this service.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s41.svg",
          "examObjectives": [
            "1.2.4",
            "1.2.5"
          ]
        },
        {
          "id": "m1-s42",
          "title": "Amazon Bedrock for Generative AI",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Managed access:** Amazon Bedrock offers foundation models from several model providers through a single API, without managing servers.",
              "indent": 0
            },
            {
              "text": "**Customize:** Adapt a model with your own training data, or use Retrieval Augmented Generation (RAG) to supply relevant company information at request time.",
              "indent": 0
            },
            {
              "text": "**Typical uses:** Drafting text, summarizing documents, answering questions from a knowledge base, and generating images.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s42.svg",
          "examObjectives": [
            "1.2.5",
            "1.3.4"
          ]
        },
        {
          "id": "m1-s43",
          "title": "Amazon SageMaker AI for Model Development",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Fully managed ML service:** Amazon SageMaker AI supports the whole ML lifecycle in one place.",
              "indent": 0
            },
            {
              "text": "**Prepare:** Explore, clean, and label data.",
              "indent": 0
            },
            {
              "text": "**Build and train:** Train and evaluate models with built-in algorithms, your own code, or pretrained models.",
              "indent": 0
            },
            {
              "text": "**Deploy and monitor:** Host models for real-time or batch inference and track their quality in production.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s43.svg",
          "examObjectives": [
            "1.2.5",
            "1.3.4"
          ]
        },
        {
          "id": "m1-s44",
          "title": "Use Case: Conversational Self-Service",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Before:** A delivery company's phone line relied on keypad menus, so many callers gave up and asked for an agent.",
              "indent": 0
            },
            {
              "text": "**After:** An Amazon Lex bot lets callers say what they need in their own words, and routine requests such as cancelling or checking an order are completed automatically.",
              "indent": 0
            },
            {
              "text": "**Measured outcomes:** Fewer transfers to human agents, more requests completed through self-service, and lower support costs.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s44.svg",
          "examObjectives": [
            "1.2.4"
          ]
        },
        {
          "id": "m1-s45",
          "title": "Use Case: Predictive Maintenance from Sensor Data",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Problem:** Equipment failures in remote industrial sites are costly and can harm the environment.",
              "indent": 0
            },
            {
              "text": "**Approach:** Sensors stream pressure, temperature, and vibration readings. Amazon CloudWatch collects and alarms on the metrics, and ML models built in SageMaker AI detect patterns that come before a failure.",
              "indent": 0
            },
            {
              "text": "**Outcomes:** Faster response to incidents, earlier detection of leaks, fewer unplanned shutdowns, and safer field operations.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s45.svg",
          "examObjectives": [
            "1.2.4"
          ]
        },
        {
          "id": "m1-s46",
          "title": "Use Case: Recommendations and an AI Trip Planner",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Recommendations:** A travel marketplace suggests places to stay based on each traveler's searches, preferences, and past bookings.",
              "indent": 0
            },
            {
              "text": "**Generative AI planner:** A conversational assistant asks about the trip, then uses RAG to ground its suggestions in current listings rather than relying on the model's memory.",
              "indent": 0
            },
            {
              "text": "**Value:** Travelers find suitable options faster, and the business sees higher conversion from search to booking.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s46.svg",
          "examObjectives": [
            "1.2.4"
          ]
        },
        {
          "id": "m1-s47",
          "title": "Use Case: Visual Search",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Problem:** Shoppers often know what an item looks like but not what it is called.",
              "indent": 0
            },
            {
              "text": "**Approach:** A computer vision model detects objects in an uploaded photo and returns visually similar products to browse or buy.",
              "indent": 0
            },
            {
              "text": "**Keeping it accurate:** New images are labeled and added regularly, and the model is retrained so it recognizes new products and styles.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s47.svg",
          "examObjectives": [
            "1.2.4"
          ]
        },
        {
          "id": "m1-s48",
          "title": "Traditional ML or a Foundation Model?",
          "section": "1.2",
          "bullets": [
            {
              "text": "**Regulatory and explainability needs:** When decisions must be explained in detail, such as credit approvals, a traditional model with clear, documented features is often easier to justify.",
              "indent": 0
            },
            {
              "text": "**Operational constraints:** A small, specialized model can run with low latency at low cost on modest hardware. A foundation model may need more compute and adds per-request charges.",
              "indent": 0
            },
            {
              "text": "**When a foundation model fits:** Open-ended language or image tasks, many different tasks served by one model, or little labeled data for training a dedicated model.",
              "indent": 0
            },
            {
              "text": "**Decide with evidence:** Compare candidate approaches on the same test cases, including accuracy, cost, latency, and the explanation the business requires.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.2.6"
          ]
        },
        {
          "id": "m1-s49",
          "title": "Task Statement 1.3: The AI/ML Development Lifecycle",
          "section": "1.3",
          "bullets": [
            {
              "text": "**What this section covers:** The stages from business goal to monitored production model, and how they repeat.",
              "indent": 0
            },
            {
              "text": "**AWS services by stage:** Data preparation, labeling, feature management, training, tuning, deployment, monitoring, and automation.",
              "indent": 0
            },
            {
              "text": "**Measuring success:** Model performance metrics such as accuracy, precision, recall, and F1 score, and business metrics such as cost and return on investment (ROI).",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.1"
          ]
        },
        {
          "id": "m1-s50",
          "title": "The ML Pipeline",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Start with the business:** Identify the business goal, then frame it as an ML problem with clear inputs, outputs, and success measures.",
              "indent": 0
            },
            {
              "text": "**Data work:** Collect the data, then prepare it through cleaning, exploration, and feature engineering.",
              "indent": 0
            },
            {
              "text": "**Model work:** Train, tune, and evaluate candidate models until one meets the targets.",
              "indent": 0
            },
            {
              "text": "**Operate:** Deploy the chosen model and monitor its predictions. Problems found in production send work back to earlier stages.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s50.svg",
          "examObjectives": [
            "1.3.1"
          ]
        },
        {
          "id": "m1-s51",
          "title": "The ML Lifecycle Is a Loop",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Not a one-way path:** Results from evaluation or production often mean revisiting data preparation or even the problem definition.",
              "indent": 0
            },
            {
              "text": "**Stages:** Business goal, ML problem framing, data processing, model development, deployment, and monitoring.",
              "indent": 0
            },
            {
              "text": "**Feedback:** Monitoring shows when data or user behavior changes, which triggers new data collection and retraining.",
              "indent": 0
            },
            {
              "text": "**Data quality matters at every turn:** Poor data at any stage limits how good the model can become.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s51.svg",
          "examObjectives": [
            "1.3.1",
            "1.3.5"
          ]
        },
        {
          "id": "m1-s52",
          "title": "Defining the Business Problem",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Business goal:** Agree on what success means, such as reducing late deliveries by a set percentage, and align the stakeholders who will use or be affected by the model.",
              "indent": 0
            },
            {
              "text": "**Frame the ML task:** Specify the inputs, the output the model must produce, and the metrics that show whether it works.",
              "indent": 0
            },
            {
              "text": "**Feasibility and cost:** Confirm that suitable data, skills, and budget exist, and compare the expected benefit with the cost.",
              "indent": 0
            },
            {
              "text": "**Start simple:** Try the most basic approach that could work before reaching for complex models.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s52.svg",
          "examObjectives": [
            "1.3.1"
          ]
        },
        {
          "id": "m1-s53",
          "title": "Model Options: Use, Adapt, or Build",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Use a hosted AI service:** Call a ready-made model through an API, such as Amazon Comprehend, Amazon Rekognition, or Amazon Personalize. No training is required.",
              "indent": 0
            },
            {
              "text": "**Adapt a pretrained model:** Start from a foundation model or another pretrained model in Amazon Bedrock or SageMaker JumpStart, then customize it with your own data.",
              "indent": 0
            },
            {
              "text": "**Build a custom model:** Train your own model in SageMaker AI when no existing option fits. This gives the most control and requires the most data, skill, and effort.",
              "indent": 0
            },
            {
              "text": "**Sources of models:** Open source pretrained models, models offered by commercial providers, and models you train yourself.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s53.svg",
          "examObjectives": [
            "1.3.2",
            "1.3.3"
          ]
        },
        {
          "id": "m1-s54",
          "title": "Amazon SageMaker JumpStart",
          "section": "1.3",
          "bullets": [
            {
              "text": "**A model hub:** JumpStart offers a large catalog of pretrained models from many providers, including foundation models, computer vision models, and NLP models.",
              "indent": 0
            },
            {
              "text": "**Fine-tune with your data:** Adapt a pretrained model to your task through transfer learning, which takes far less data and time than training from scratch.",
              "indent": 0
            },
            {
              "text": "**Deploy with SageMaker AI:** Host the chosen or fine-tuned model on SageMaker AI infrastructure that you control.",
              "indent": 0
            },
            {
              "text": "**Check the license:** Review each model's license and terms before using it in production.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s54.svg",
          "examObjectives": [
            "1.3.2",
            "1.3.4"
          ]
        },
        {
          "id": "m1-s55",
          "title": "Processing Data: Collect, Prepare, and Engineer Features",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Collect:** Identify data sources, bring the data together through extract, transform, and load (ETL) jobs, and obtain labels where the task needs them.",
              "indent": 0
            },
            {
              "text": "**Prepare:** Explore the data to understand it (exploratory data analysis), clean missing or inconsistent values, and split it into training, validation, and test sets.",
              "indent": 0
            },
            {
              "text": "**Engineer features:** Select the most useful input variables and transform raw values into forms the model can learn from, such as turning a timestamp into day of week.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s55.svg",
          "examObjectives": [
            "1.3.1"
          ]
        },
        {
          "id": "m1-s56",
          "title": "AWS Glue for Data Integration",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Serverless ETL:** AWS Glue extracts data from many sources, transforms it, and loads it into a target such as Amazon S3, without servers to manage.",
              "indent": 0
            },
            {
              "text": "**Built-in transformations:** Clean, join, and reshape data with ready-made transforms or your own scripts.",
              "indent": 0
            },
            {
              "text": "**Data Catalog:** Glue keeps its own catalog of metadata, so prepared datasets are easy to find and reuse.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s56.svg",
          "examObjectives": [
            "1.3.4"
          ]
        },
        {
          "id": "m1-s57",
          "title": "AWS Glue Data Catalog and Crawlers",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Central metadata store:** The Data Catalog records table definitions, schemas, and locations for data across your storage and databases.",
              "indent": 0
            },
            {
              "text": "**Crawlers:** A crawler connects to data sources such as Amazon S3, Amazon Redshift, Amazon RDS, Amazon DynamoDB, and other databases over Java Database Connectivity (JDBC).",
              "indent": 0
            },
            {
              "text": "**Classifiers:** Built-in or custom classifiers recognize each source's format and infer its schema, and the crawler writes the results to the catalog as tables.",
              "indent": 0
            },
            {
              "text": "**Why it helps:** Analytics and ML jobs can query the catalog to find data and understand its structure instead of relying on tribal knowledge.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s57.svg",
          "examObjectives": [
            "1.3.4"
          ]
        },
        {
          "id": "m1-s58",
          "title": "AWS Glue DataBrew",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Visual data preparation:** Explore a dataset, profile its quality, and clean it through a point-and-click interface without writing code.",
              "indent": 0
            },
            {
              "text": "**Recipes:** Each transformation step is saved in a recipe that can be reapplied to new data, which keeps preparation repeatable.",
              "indent": 0
            },
            {
              "text": "**Data quality rules:** Define checks, such as \"no missing customer IDs,\" and see which records pass or fail.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s58.svg",
          "examObjectives": [
            "1.3.4"
          ]
        },
        {
          "id": "m1-s59",
          "title": "SageMaker Ground Truth for Labeling",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Purpose:** Build high-quality labeled datasets for training.",
              "indent": 0
            },
            {
              "text": "**Active learning:** A model trained on the first human labels labels the easy items automatically and sends uncertain items to people.",
              "indent": 0
            },
            {
              "text": "**Human labelers:** Workers from Amazon Mechanical Turk, a vendor, or your own staff label the uncertain items, and their answers are used to retrain the labeling model.",
              "indent": 0
            },
            {
              "text": "**Result:** Repeating this loop produces an accurate labeled dataset with less manual effort than labeling everything by hand.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s59.svg",
          "examObjectives": [
            "1.3.4"
          ]
        },
        {
          "id": "m1-s60",
          "title": "SageMaker Data Wrangler in SageMaker Canvas",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Where it lives:** Data Wrangler is a capability inside Amazon SageMaker Canvas, the no-code ML workspace.",
              "indent": 0
            },
            {
              "text": "**What it does:** Import, prepare, transform, visualize, and analyze data in one visual interface.",
              "indent": 0
            },
            {
              "text": "**Data flows:** Each transformation adds a step to a data flow. Hundreds of built-in transformations cover common tasks such as handling missing values and encoding categories.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s60.svg",
          "examObjectives": [
            "1.3.4"
          ]
        },
        {
          "id": "m1-s61",
          "title": "SageMaker Feature Store",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Single source of truth for features:** Store, retrieve, track, share, discover, and control access to the features that models use.",
              "indent": 0
            },
            {
              "text": "**Consistency:** Training and inference read the same feature definitions, which prevents subtle differences between how a model was trained and how it is used.",
              "indent": 0
            },
            {
              "text": "**Feature processing:** Processing workflows turn raw data into features and keep them up to date.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.4"
          ]
        },
        {
          "id": "m1-s62",
          "title": "Teaching the Model: Train, Tune, and Evaluate",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Train:** The algorithm repeatedly adjusts the model's parameters, such as weights, to reduce errors on the training data.",
              "indent": 0
            },
            {
              "text": "**Run experiments:** Try different hyperparameters, which are settings chosen before training such as the learning rate or the number of layers.",
              "indent": 0
            },
            {
              "text": "**Evaluate:** Compare each candidate on validation data against the metric targets agreed in the problem definition.",
              "indent": 0
            },
            {
              "text": "**Repeat:** The cycle continues until a model meets the targets or the team decides to revisit the data or the approach.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s62.svg",
          "examObjectives": [
            "1.3.1"
          ]
        },
        {
          "id": "m1-s63",
          "title": "How a SageMaker Training Job Runs",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Inputs:** The training dataset and its features in Amazon S3, a training container image that holds the algorithm, and the hyperparameters for this run.",
              "indent": 0
            },
            {
              "text": "**Compute:** SageMaker AI starts the requested instances, runs the training container on them, and shuts them down when the job ends.",
              "indent": 0
            },
            {
              "text": "**Outputs:** The trained model artifacts, including the learned weights, are saved to Amazon S3, and performance metrics are recorded for comparison.",
              "indent": 0
            },
            {
              "text": "**Container registry:** Training images are stored in Amazon Elastic Container Registry (Amazon ECR).",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s63.svg",
          "examObjectives": [
            "1.3.4"
          ]
        },
        {
          "id": "m1-s64",
          "title": "SageMaker Automatic Model Tuning",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Automated hyperparameter search:** You give a range for each hyperparameter and an objective metric, such as validation accuracy.",
              "indent": 0
            },
            {
              "text": "**Tuning job:** SageMaker AI runs many training jobs in a loop, each with different hyperparameter values, and uses earlier results to choose the next values.",
              "indent": 0
            },
            {
              "text": "**Stopping:** The job ends when it meets the completion criteria you set, such as a maximum number of training jobs, and reports the best-performing combination.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s64.svg",
          "examObjectives": [
            "1.3.4"
          ]
        },
        {
          "id": "m1-s65",
          "title": "Deploying a Model: Self-Managed or Hosted",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Choose the inference pattern first:** Batch inference for large volumes that can wait; real-time inference when an answer is needed immediately.",
              "indent": 0
            },
            {
              "text": "**Self-managed:** Package the model and inference code in a container and run it yourself on AWS Batch, Amazon Elastic Container Service (Amazon ECS), Amazon Elastic Kubernetes Service (Amazon EKS), AWS Lambda, or Amazon EC2.",
              "indent": 0
            },
            {
              "text": "**Hosted:** Use SageMaker AI inference, which provisions, scales, and patches the serving infrastructure for you.",
              "indent": 0
            },
            {
              "text": "**Managed API compared with self-hosted:** A managed option reduces operational work; self-hosting gives more control over the environment in exchange for more responsibility.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s65.svg",
          "examObjectives": [
            "1.3.3"
          ]
        },
        {
          "id": "m1-s66",
          "title": "Deploying to a SageMaker Endpoint",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Model:** Create a SageMaker model from the trained artifacts in Amazon S3 and an inference container image in Amazon ECR.",
              "indent": 0
            },
            {
              "text": "**Endpoint configuration:** Specify the instance type, the number of instances, and other hosting settings.",
              "indent": 0
            },
            {
              "text": "**Endpoint:** SageMaker AI launches the endpoint, and applications send requests to it to receive predictions.",
              "indent": 0
            },
            {
              "text": "**Right-sizing:** Amazon SageMaker Inference Recommender runs load tests to suggest instance types and settings that balance performance and cost.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s66.svg",
          "examObjectives": [
            "1.3.3",
            "1.3.4"
          ]
        },
        {
          "id": "m1-s67",
          "title": "Choosing a SageMaker AI Inference Option",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Real-time inference:** Live predictions with low latency and consistent performance for sustained traffic.",
              "indent": 0
            },
            {
              "text": "**Serverless Inference:** Suits intermittent traffic with idle periods; capacity scales automatically, but a request after an idle period may take longer to start.",
              "indent": 0
            },
            {
              "text": "**Asynchronous Inference:** Queues requests that have large payloads or long processing times and returns results when they are ready.",
              "indent": 0
            },
            {
              "text": "**Batch transform:** Offline inference on large datasets when no one is waiting for an immediate answer.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s67.svg",
          "examObjectives": [
            "1.1.3",
            "1.3.3"
          ]
        },
        {
          "id": "m1-s68",
          "title": "Monitoring Models in Production",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Watch continuously:** Compare live input data and predictions with what the model saw during training.",
              "indent": 0
            },
            {
              "text": "**Drift:** Data drift is a change in the inputs, such as a new customer group. Concept drift is a change in the relationship being predicted, such as new buying habits after a price change.",
              "indent": 0
            },
            {
              "text": "**Act on evidence:** Set alerts for significant drift or falling quality, and decide in advance when and how often to retrain.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.1",
            "1.3.5"
          ]
        },
        {
          "id": "m1-s69",
          "title": "Amazon SageMaker Model Monitor",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Automatic data capture:** Records requests and predictions from SageMaker AI endpoints.",
              "indent": 0
            },
            {
              "text": "**Baselines and schedules:** Compares captured data with a baseline created from training data on a schedule you define.",
              "indent": 0
            },
            {
              "text": "**What it checks:** Data quality, model quality, bias drift, and feature attribution drift.",
              "indent": 0
            },
            {
              "text": "**Alerts:** Sends results to Amazon CloudWatch so teams are notified and can trigger corrective actions such as retraining.",
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
          "id": "m1-s70",
          "title": "Machine Learning Operations (MLOps)",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Definition:** Applying DevOps practices to ML so models can be built, released, and maintained reliably.",
              "indent": 0
            },
            {
              "text": "**Core practices:** Infrastructure as code (IaC), rapid and tracked experimentation, version control for code, data, and models, active performance monitoring, and automatic retraining and validation.",
              "indent": 0
            },
            {
              "text": "**Benefits:** Productivity, repeatability, reliability, auditability, and better data and model quality.",
              "indent": 0
            },
            {
              "text": "**Production readiness and technical debt:** Automated, documented processes reduce one-off fixes that become costly to maintain, and make it clear when a model is ready to release.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "1.3.5"
          ]
        },
        {
          "id": "m1-s71",
          "title": "Amazon SageMaker Pipelines",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Workflow automation:** Define an end-to-end ML workflow as a series of connected steps that run in order.",
              "indent": 0
            },
            {
              "text": "**Define it your way:** Build pipelines with the SageMaker Python software development kit (SDK) or a JSON pipeline definition.",
              "indent": 0
            },
            {
              "text": "**Typical steps:** Process data, run training jobs, create the model, and register it in the model registry for approval and deployment.",
              "indent": 0
            },
            {
              "text": "**Repeatability:** Every run records its inputs and outputs, so results can be reproduced and compared.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s71.svg",
          "examObjectives": [
            "1.3.4",
            "1.3.5"
          ]
        },
        {
          "id": "m1-s72",
          "title": "Repositories and Orchestration Tools",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Repositories for each artifact:** SageMaker Feature Store for features, SageMaker Model Registry for model versions and their approval status, and a source code repository, such as a third-party Git service, for code.",
              "indent": 0
            },
            {
              "text": "**Orchestration options:** SageMaker Pipelines for ML-specific workflows, AWS Step Functions for workflows that coordinate many AWS services, Amazon Managed Workflows for Apache Airflow (Amazon MWAA) for teams that use Airflow, or a third-party orchestrator.",
              "indent": 0
            },
            {
              "text": "**Choose by team and scope:** Prefer the tool that fits the workflow and the skills already in use.",
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
          "id": "m1-s73",
          "title": "Reading a Confusion Matrix",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Purpose:** A confusion matrix shows how a classification model's predictions compare with the actual classes.",
              "indent": 0
            },
            {
              "text": "**Example question:** \"Is this parcel damaged?\" Each parcel lands in exactly one of four cells.",
              "indent": 0
            },
            {
              "text": "**True positive and true negative:** The model correctly says damaged, or correctly says not damaged.",
              "indent": 0
            },
            {
              "text": "**False positive and false negative:** The model says damaged when the parcel is fine, or misses a parcel that is actually damaged.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s73.svg",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s74",
          "title": "Accuracy",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Formula:** Accuracy = (true positives + true negatives) ÷ all predictions.",
              "indent": 0
            },
            {
              "text": "**Worked example:** Of 100 parcels, the model found 30 damaged parcels correctly and cleared 40 intact parcels correctly. Accuracy = (30 + 40) ÷ 100 = 0.70.",
              "indent": 0
            },
            {
              "text": "**Limitation:** Accuracy can look high when one class is rare. A model that never flags damage would still be right about most parcels if damage is uncommon.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s74.svg",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s75",
          "title": "Precision",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Question it answers:** When the model says \"damaged,\" how often is it right?",
              "indent": 0
            },
            {
              "text": "**Formula:** Precision = true positives ÷ (true positives + false positives).",
              "indent": 0
            },
            {
              "text": "**Worked example:** 30 correct alerts and 10 false alerts give 30 ÷ (30 + 10) = 0.75.",
              "indent": 0
            },
            {
              "text": "**When it matters most:** When false alarms are costly, such as unnecessarily returning goods to a supplier.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s75.svg",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s76",
          "title": "Recall",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Question it answers:** Of all the parcels that are actually damaged, how many did the model find?",
              "indent": 0
            },
            {
              "text": "**Formula:** Recall = true positives ÷ (true positives + false negatives). It is also called sensitivity or the true positive rate.",
              "indent": 0
            },
            {
              "text": "**Worked example:** 30 found and 20 missed give 30 ÷ (30 + 20) = 0.60.",
              "indent": 0
            },
            {
              "text": "**When it matters most:** When missing a positive case is costly, such as failing to detect a serious illness.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s76.svg",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s77",
          "title": "F1 Score",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Balancing two goals:** Improving precision often lowers recall, and the reverse. The F1 score combines both into one number.",
              "indent": 0
            },
            {
              "text": "**Formula:** F1 = 2 × (precision × recall) ÷ (precision + recall), the harmonic mean of the two.",
              "indent": 0
            },
            {
              "text": "**Worked example:** With precision 0.75 and recall 0.60, F1 = 2 × 0.45 ÷ 1.35 ≈ 0.67.",
              "indent": 0
            },
            {
              "text": "**When to use it:** When both false alarms and missed cases matter, especially with imbalanced classes.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s77.svg",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s78",
          "title": "False Positive Rate",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Question it answers:** Of all the parcels that are actually intact, what share did the model wrongly flag?",
              "indent": 0
            },
            {
              "text": "**Formula:** False positive rate (FPR) = false positives ÷ (false positives + true negatives).",
              "indent": 0
            },
            {
              "text": "**Worked example:** 10 false alerts among 50 intact parcels give 10 ÷ (10 + 40) = 0.20.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s78.svg",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s79",
          "title": "Specificity",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Question it answers:** Of all the intact parcels, what share did the model correctly clear?",
              "indent": 0
            },
            {
              "text": "**Formula:** Specificity, or the true negative rate (TNR) = true negatives ÷ (true negatives + false positives).",
              "indent": 0
            },
            {
              "text": "**Worked example:** 40 ÷ (40 + 10) = 0.80. Specificity and FPR always add up to 1.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s79.svg",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s80",
          "title": "ROC Curve and Area Under the Curve",
          "section": "1.3",
          "bullets": [
            {
              "text": "**ROC curve:** A receiver operating characteristic (ROC) curve plots the true positive rate against the false positive rate for every possible classification threshold.",
              "indent": 0
            },
            {
              "text": "**Reading it:** A curve that bends toward the top-left corner means the model finds positives while raising few false alarms. A diagonal line means guessing.",
              "indent": 0
            },
            {
              "text": "**Area under the curve (AUC):** Summarizes the curve in one number from 0 to 1. An AUC of 0.88 means the model ranks a random positive above a random negative 88% of the time.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s80.svg",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s81",
          "title": "Errors in Regression Models",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Error:** For each prediction, the difference between the predicted and the actual value.",
              "indent": 0
            },
            {
              "text": "**Mean squared error (MSE):** The average of the squared errors. Squaring makes large errors count much more.",
              "indent": 0
            },
            {
              "text": "**Root mean squared error (RMSE):** The square root of MSE, expressed in the same units as the target, such as minutes.",
              "indent": 0
            },
            {
              "text": "**Mean absolute error (MAE):** The average size of the errors, ignoring direction. It is less affected by a few large errors. Example: errors of 2, −4, and 6 minutes give MAE = 4 and MSE ≈ 18.7.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s81.svg",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s82",
          "title": "Measuring Business Value and ROI",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Before building:** Define the business goals and the business metrics the model should improve, and estimate the risk and cost of its errors.",
              "indent": 0
            },
            {
              "text": "**After deployment:** Measure the actual improvement and the actual costs, including development costs and cost per user, and gather customer feedback.",
              "indent": 0
            },
            {
              "text": "**Compare and decide:** Check the results against the cost-benefit model and calculate return on investment (ROI): (benefit − cost) ÷ cost.",
              "indent": 0
            },
            {
              "text": "**Track spending:** AWS Cost Explorer shows what the solution costs over time.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s82.svg",
          "examObjectives": [
            "1.3.6"
          ]
        },
        {
          "id": "m1-s83",
          "title": "AWS Tools Across the AI/ML Pipeline",
          "section": "1.3",
          "bullets": [
            {
              "text": "**Explore and prepare:** AWS Glue and SageMaker AI prepare data; SageMaker AI also labels, trains, and deploys custom models.",
              "indent": 0
            },
            {
              "text": "**Build with foundation models:** Amazon Bedrock provides managed access to foundation models and tools for customizing and evaluating them.",
              "indent": 0
            },
            {
              "text": "**Develop software:** Kiro is an AI-powered development environment that helps developers plan, write, and test application code.",
              "indent": 0
            },
            {
              "text": "**Business users:** Amazon Quick lets people ask questions of their organization's data and automate work with AI assistance; Amazon Q offers AI assistants for business and development tasks.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m1_s83.svg",
          "examObjectives": [
            "1.3.4"
          ]
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "m1-s32",
            "m1-s33",
            "m1-s34",
            "m1-s17",
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
            "m1-s73",
            "m1-s75",
            "m1-s76"
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
            "m1-s39",
            "m1-s38",
            "m1-s40"
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
      "title": "Fundamentals of GenAI",
      "objectives": [
        "Explain the basic concepts of generative AI (GenAI).",
        "Understand the capabilities and limitations of GenAI for solving business problems.",
        "Describe AWS infrastructure and technologies for building GenAI applications."
      ],
      "sections": [
        {
          "id": "2.1",
          "title": "Explain the basic concepts of generative AI (GenAI)."
        },
        {
          "id": "2.2",
          "title": "Understand the capabilities and limitations of GenAI for solving business problems."
        },
        {
          "id": "2.3",
          "title": "Describe AWS infrastructure and technologies for building GenAI applications."
        }
      ],
      "slides": [
        {
          "id": "m2-s1",
          "title": "Task Statement 2.1: Basic Concepts of Generative AI",
          "section": "2.1",
          "bullets": [
            {
              "text": "**What this section covers:** Where generative AI fits within AI, what foundation models are, and how they are built, adapted, and released.",
              "indent": 0
            },
            {
              "text": "**How models handle language and images:** Tokens, embeddings, vectors, prompts, transformer-based language models, and diffusion models.",
              "indent": 0
            },
            {
              "text": "**Working with models in practice:** Token-based pricing, context engineering, and the building blocks of agentic AI, including the Model Context Protocol (MCP).",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.1.1"
          ]
        },
        {
          "id": "m2-s2",
          "title": "Where Generative AI Fits",
          "section": "2.1",
          "bullets": [
            {
              "text": "**A subset of a subset:** Generative AI is a branch of deep learning, which is a branch of machine learning, which is one way to build AI.",
              "indent": 0
            },
            {
              "text": "**What sets it apart:** Most earlier ML systems classify, predict, or recommend. Generative AI produces new content such as text, images, audio, video, and code.",
              "indent": 0
            },
            {
              "text": "**Same foundations:** It still learns patterns from data. It just uses those patterns to create, not only to label.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s2.svg",
          "examObjectives": [
            "2.1.1",
            "1.1.2"
          ]
        },
        {
          "id": "m2-s3",
          "title": "AI Compared with Generative AI",
          "section": "2.1",
          "bullets": [
            {
              "text": "**Traditional AI and ML:** Learn from data to make a prediction or a decision, such as whether a payment is fraudulent or how many parcels will arrive tomorrow.",
              "indent": 0
            },
            {
              "text": "**Generative AI:** Uses what it learned to create something new, such as a reply to a customer, a product image, or a code snippet.",
              "indent": 0
            },
            {
              "text": "**Built on foundation models:** Generative AI applications usually start from a large pretrained foundation model (FM) rather than a model trained for one narrow task.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.1.1",
            "1.1.2"
          ]
        },
        {
          "id": "m2-s4",
          "title": "Foundation Models: Pretrain Once, Adapt to Many Tasks",
          "section": "2.1",
          "bullets": [
            {
              "text": "**Pretraining:** A foundation model learns general patterns from very large and varied data, such as text, code, images, and video, mostly without hand-made labels.",
              "indent": 0
            },
            {
              "text": "**Adaptation:** The same model can then be adapted, through prompting, retrieval, or fine-tuning, to many tasks.",
              "indent": 0
            },
            {
              "text": "**Typical tasks:** Generating and summarizing text, extracting information, answering questions, powering chatbots, and generating images.",
              "indent": 0
            },
            {
              "text": "**Why it matters:** One model can serve many uses, which avoids training a separate model from scratch for each one.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s4.svg",
          "examObjectives": [
            "2.1.1",
            "2.1.2"
          ]
        },
        {
          "id": "m2-s5",
          "title": "The Foundation Model Lifecycle",
          "section": "2.1",
          "bullets": [
            {
              "text": "**Data and model selection:** Choose suitable, permitted data and decide whether to start from an existing model.",
              "indent": 0
            },
            {
              "text": "**Pretraining:** Build broad capabilities from large datasets. Few organizations do this themselves because of the data and compute required.",
              "indent": 0
            },
            {
              "text": "**Fine-tuning and optimization:** Adapt the model to a task, a domain, or a style, and make it efficient enough to run.",
              "indent": 0
            },
            {
              "text": "**Evaluation, deployment, and feedback:** Test quality and safety, release the approved version, then collect feedback that guides the next improvement.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s5.svg",
          "examObjectives": [
            "2.1.3"
          ]
        },
        {
          "id": "m2-s6",
          "title": "Transformer Language Models: Tokens, Embeddings, and Vectors",
          "section": "2.1",
          "bullets": [
            {
              "text": "**Transformer-based LLMs:** Large language models built on the transformer architecture, which weighs how each part of the input relates to every other part.",
              "indent": 0
            },
            {
              "text": "**Tokens:** Models split text into tokens, which are words or pieces of words. \"The rider returned the bike\" becomes a handful of tokens.",
              "indent": 0
            },
            {
              "text": "**Embeddings and vectors:** Each token or passage is turned into a vector, a list of numbers. Items with related meanings, such as \"bicycle\" and \"scooter,\" end up close together.",
              "indent": 0
            },
            {
              "text": "**Use cases:** Text classification, generation, translation, and code generation. Multimodal models also work with images, for example to caption product photos or support customer service.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s6.svg",
          "examObjectives": [
            "2.1.1",
            "2.1.2"
          ]
        },
        {
          "id": "m2-s7",
          "title": "Prompt Engineering: The Parts of a Prompt",
          "section": "2.1",
          "bullets": [
            {
              "text": "**Prompt engineering:** Designing the input to a model so that it returns the result you need.",
              "indent": 0
            },
            {
              "text": "**Context:** Sets the role or situation, for example \"You are a support specialist for a bicycle rental company.\"",
              "indent": 0
            },
            {
              "text": "**Instruction and output indicator:** Says what to do and how the answer should look, for example \"Classify this message as billing, shipping, or technical. Answer with one word.\"",
              "indent": 0
            },
            {
              "text": "**Input data:** The material to work on, such as the customer's message.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s7.svg",
          "examObjectives": [
            "2.1.1",
            "3.2.1"
          ]
        },
        {
          "id": "m2-s8",
          "title": "Diffusion Models",
          "section": "2.1",
          "bullets": [
            {
              "text": "**Learning to remove noise:** During training, forward diffusion adds noise to images step by step, and the model learns to reverse each step.",
              "indent": 0
            },
            {
              "text": "**Generating:** Reverse diffusion starts from random noise and removes it gradually, guided by the prompt, until a new image appears.",
              "indent": 0
            },
            {
              "text": "**Latent diffusion:** Some models, such as Stable Diffusion, work in a compressed latent space instead of on every pixel, which reduces the computing needed.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s8.svg",
          "examObjectives": [
            "2.1.1",
            "2.1.2"
          ]
        },
        {
          "id": "m2-s9",
          "title": "Generative AI Use Cases",
          "section": "2.1",
          "bullets": [
            {
              "text": "**Create media:** Generate images, video, and audio, such as product mock-ups or narration.",
              "indent": 0
            },
            {
              "text": "**Work with text:** Summarize documents, translate, and power AI assistants and customer service agents.",
              "indent": 0
            },
            {
              "text": "**Build and find:** Generate code, improve search, and support recommendation engines.",
              "indent": 0
            },
            {
              "text": "**Check the fit:** Choose generative AI when new content or flexible language understanding is needed and a person can review the result where errors matter.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s9.svg",
          "examObjectives": [
            "2.1.2"
          ]
        },
        {
          "id": "m2-s10",
          "title": "Tokens, Cost, and Speed",
          "section": "2.1",
          "bullets": [
            {
              "text": "**Token-based pricing:** Most on-demand models charge for the input tokens they receive and the output tokens they generate, often at different rates.",
              "indent": 0
            },
            {
              "text": "**Cost grows with length:** Long instructions, large retrieved passages, chat history, and long answers all add tokens.",
              "indent": 0
            },
            {
              "text": "**Speed grows with length too:** The model generates output token by token, so longer answers take longer to finish.",
              "indent": 0
            },
            {
              "text": "**Keep it lean:** Send only the context that improves the answer, ask for the length you need, and check each model's pricing unit.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s10.svg",
          "examObjectives": [
            "2.1.4"
          ]
        },
        {
          "id": "m2-s11",
          "title": "Context Engineering",
          "section": "2.1",
          "bullets": [
            {
              "text": "**Beyond a single prompt:** Context engineering decides everything the model sees for a request: instructions, relevant history, retrieved documents, and tool results.",
              "indent": 0
            },
            {
              "text": "**Select, do not dump:** Include what this task needs and what the user is allowed to see. More context costs more and can distract the model.",
              "indent": 0
            },
            {
              "text": "**Use current sources:** A model's training data is not a live record. Retrieve current facts, such as today's stock count, from an authorized system.",
              "indent": 0
            },
            {
              "text": "**A grounded answer in four steps:** Retrieve relevant passages, combine them with the question in the context, generate a draft, then check each claim against the passages.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s11.svg",
          "examObjectives": [
            "2.1.5"
          ]
        },
        {
          "id": "m2-s12",
          "title": "Agentic AI: Tools, Memory, and Multiple Agents",
          "section": "2.1",
          "bullets": [
            {
              "text": "**Tool use:** An agent calls APIs, databases, or other services to get information or take actions, then decides what to do next.",
              "indent": 0
            },
            {
              "text": "**Memory management:** Short-term memory holds the current task. Long-term memory keeps selected facts for later sessions.",
              "indent": 0
            },
            {
              "text": "**Multi-agent patterns:** A supervisor agent can split work among specialist agents, or agents can hand results along a sequence. Each extra agent adds coordination and another point of failure.",
              "indent": 0
            },
            {
              "text": "**Workflow orchestration:** Define the order of steps, when to stop, and which actions need human approval.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s12.svg",
          "examObjectives": [
            "2.1.6",
            "1.1.1"
          ]
        },
        {
          "id": "m2-s13",
          "title": "Model Context Protocol (MCP)",
          "section": "2.1",
          "bullets": [
            {
              "text": "**A standard connection:** MCP is an open protocol that lets an agent or AI application connect to external tools and data sources in a consistent way.",
              "indent": 0
            },
            {
              "text": "**How it works:** An MCP server describes the tools or data it offers; the agent's MCP client discovers them and calls them when needed.",
              "indent": 0
            },
            {
              "text": "**Why it helps:** One integration pattern can serve many tools, instead of custom code for each connection.",
              "indent": 0
            },
            {
              "text": "**Not a permission system:** MCP connects; access control, validation, and logging still have to be enforced by the application and the services.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s13.svg",
          "examObjectives": [
            "2.1.6"
          ]
        },
        {
          "id": "m2-s14",
          "title": "Task Statement 2.2: Capabilities and Limitations of Generative AI",
          "section": "2.2",
          "bullets": [
            {
              "text": "**What this section covers:** The advantages generative AI brings to business problems and the limitations that must be managed.",
              "indent": 0
            },
            {
              "text": "**Choosing well:** Factors for selecting a model, and how interpretability affects trust.",
              "indent": 0
            },
            {
              "text": "**Proving value:** Business metrics that show whether a generative AI application is worth its cost.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.2.1"
          ]
        },
        {
          "id": "m2-s15",
          "title": "Advantages of Generative AI",
          "section": "2.2",
          "bullets": [
            {
              "text": "**Adaptability:** One model handles many different tasks and topics.",
              "indent": 0
            },
            {
              "text": "**Responsiveness:** Answers arrive in seconds, at any hour.",
              "indent": 0
            },
            {
              "text": "**Simplicity and conversation:** People can ask for what they need in plain language instead of learning a special interface.",
              "indent": 0
            },
            {
              "text": "**Content generation:** The model drafts text, images, or code that people can refine, which speeds up creative and routine work.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s15.svg",
          "examObjectives": [
            "2.2.1"
          ]
        },
        {
          "id": "m2-s16",
          "title": "Limitations of Generative AI",
          "section": "2.2",
          "bullets": [
            {
              "text": "**Quality of completions:** Responses can be unhelpful, inaccurate, or harmful. Hallucinations are confident statements that are not true.",
              "indent": 0
            },
            {
              "text": "**Alignment:** Keeping a model helpful, honest, and harmless (sometimes abbreviated HHH) takes deliberate training, testing, and safeguards.",
              "indent": 0
            },
            {
              "text": "**Interpretability:** It is hard to see why a large model produced a particular output.",
              "indent": 0
            },
            {
              "text": "**Nondeterminism:** The same prompt can produce different answers on different runs, which complicates testing and auditing.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.2.2"
          ]
        },
        {
          "id": "m2-s17",
          "title": "Interpretability: Intrinsic and Post Hoc",
          "section": "2.2",
          "bullets": [
            {
              "text": "**Intrinsic interpretability:** Simple models, such as a short decision tree or a linear model, are understandable by design. They are transparent but may perform worse on complex problems.",
              "indent": 0
            },
            {
              "text": "**Post hoc interpretability:** Explanation techniques are applied after training to show which inputs influenced an output. They work for complex models, including neural networks.",
              "indent": 0
            },
            {
              "text": "**The trade-off:** Higher interpretability often means lower performance, and the reverse. Choose based on how much explanation the decision requires.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.2.2",
            "4.2.3"
          ]
        },
        {
          "id": "m2-s18",
          "title": "Measuring the Business Value of Generative AI",
          "section": "2.2",
          "bullets": [
            {
              "text": "**Quality measures:** Accuracy of the outputs and cross-domain performance, meaning how well the model handles different topics and tasks.",
              "indent": 0
            },
            {
              "text": "**Efficiency:** Time or effort saved per task compared with the current process.",
              "indent": 0
            },
            {
              "text": "**Revenue measures:** Conversion rate, average revenue per user, and customer lifetime value.",
              "indent": 0
            },
            {
              "text": "**Return on investment (ROI):** Compare those gains with the full cost, including tokens, development, review effort, and errors.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s18.svg",
          "examObjectives": [
            "2.2.4"
          ]
        },
        {
          "id": "m2-s19",
          "title": "Choosing a Generative AI Model",
          "section": "2.2",
          "bullets": [
            {
              "text": "**Fit for the task:** Model type and capabilities, such as text only or text and images, and the quality needed.",
              "indent": 0
            },
            {
              "text": "**Performance and latency:** How fast responses must arrive and how much traffic the model must handle.",
              "indent": 0
            },
            {
              "text": "**Constraints and compliance:** Context length, supported languages, data residency, licensing, and regulatory requirements.",
              "indent": 0
            },
            {
              "text": "**Cost and complexity:** Larger, more complex models usually cost more per request and respond more slowly. Choose the smallest model that meets the requirements.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s19.svg",
          "examObjectives": [
            "2.2.3"
          ]
        },
        {
          "id": "m2-s20",
          "title": "Task Statement 2.3: AWS Technologies for Generative AI",
          "section": "2.3",
          "bullets": [
            {
              "text": "**What this section covers:** The layers of AWS AI and ML services, from ready-made AI services to generative AI tools and the ML platform underneath.",
              "indent": 0
            },
            {
              "text": "**Key services:** Amazon Bedrock, Amazon Nova, SageMaker JumpStart, Amazon Q, Amazon Quick, Kiro, Strands Agents, and Amazon Bedrock AgentCore.",
              "indent": 0
            },
            {
              "text": "**Business case:** The benefits of building on AWS and the cost trade-offs to plan for.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "2.3.1"
          ]
        },
        {
          "id": "m2-s21",
          "title": "The AWS AI and ML Stack",
          "section": "2.3",
          "bullets": [
            {
              "text": "**Generative AI layer:** Amazon Bedrock and SageMaker JumpStart for foundation models; Amazon Q assistants for business and development tasks.",
              "indent": 0
            },
            {
              "text": "**AI services layer:** Ready-made services for specific jobs, such as Amazon Comprehend, Amazon Rekognition, and Amazon Transcribe.",
              "indent": 0
            },
            {
              "text": "**ML platform layer:** Amazon SageMaker AI and common ML frameworks for building, training, and deploying your own models.",
              "indent": 0
            },
            {
              "text": "**Choose the highest layer that fits:** Higher layers need less ML expertise; lower layers give more control.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s21.svg",
          "examObjectives": [
            "2.3.1"
          ]
        },
        {
          "id": "m2-s22",
          "title": "SageMaker AI: The ML Platform Layer",
          "section": "2.3",
          "bullets": [
            {
              "text": "**Fully managed ML service:** SageMaker AI provides the infrastructure and tools for the whole model lifecycle.",
              "indent": 0
            },
            {
              "text": "**Data preparation and labeling:** Explore, transform, and label data for training.",
              "indent": 0
            },
            {
              "text": "**Training and evaluation:** Train models with built-in algorithms or popular frameworks, then measure their quality.",
              "indent": 0
            },
            {
              "text": "**Deployment, monitoring, and pretrained models:** Host and monitor models, or start from pretrained models through SageMaker JumpStart.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s22.svg",
          "examObjectives": [
            "2.3.1"
          ]
        },
        {
          "id": "m2-s23",
          "title": "AI Services Grouped by Task",
          "section": "2.3",
          "bullets": [
            {
              "text": "**Text and documents:** Amazon Comprehend analyzes text, Amazon Translate translates it, and Amazon Textract extracts it from documents.",
              "indent": 0
            },
            {
              "text": "**Vision and search:** Amazon Rekognition analyzes images and video; Amazon Kendra searches company documents.",
              "indent": 0
            },
            {
              "text": "**Conversation and speech:** Amazon Lex builds chatbots; Amazon Polly speaks text aloud; Amazon Transcribe turns speech into text.",
              "indent": 0
            },
            {
              "text": "**Recommendations and risk:** Amazon Personalize recommends items; fraud detection services score suspicious activity.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s23.svg",
          "examObjectives": [
            "1.2.5",
            "2.3.1"
          ]
        },
        {
          "id": "m2-s24",
          "title": "Generative AI Services on AWS",
          "section": "2.3",
          "bullets": [
            {
              "text": "**Amazon Bedrock:** Managed access to foundation models from several providers through one API, with tools to customize and evaluate them.",
              "indent": 0
            },
            {
              "text": "**SageMaker JumpStart:** A hub of pretrained models that you can fine-tune and deploy on SageMaker AI infrastructure you control.",
              "indent": 0
            },
            {
              "text": "**Amazon Q:** Generative AI assistants for business users and for software development work.",
              "indent": 0
            },
            {
              "text": "**Pick by control needed:** Bedrock for a managed API, JumpStart when you want to host and tune the model yourself.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s24.svg",
          "examObjectives": [
            "2.3.1"
          ]
        },
        {
          "id": "m2-s25",
          "title": "Transfer Learning",
          "section": "2.3",
          "bullets": [
            {
              "text": "**Start from general knowledge:** A model is first trained on a large, general dataset and becomes a generalized model.",
              "indent": 0
            },
            {
              "text": "**Adapt with new data:** The generalized model is trained further on a smaller, task-specific dataset, producing a model specialized for the new task.",
              "indent": 0
            },
            {
              "text": "**Why it saves effort:** Much less data, time, and compute are needed than training a new model from scratch.",
              "indent": 0
            },
            {
              "text": "**Example:** A model that understands general English is adapted with a few thousand support tickets to classify ticket topics.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s25.svg",
          "examObjectives": [
            "2.1.3",
            "3.3.2"
          ]
        },
        {
          "id": "m2-s26",
          "title": "Amazon SageMaker JumpStart",
          "section": "2.3",
          "bullets": [
            {
              "text": "**Pretrained models:** Foundation models, computer vision models, and natural language processing models, ready to try.",
              "indent": 0
            },
            {
              "text": "**Fine-tune with your data:** Adapt a model through transfer learning to your task.",
              "indent": 0
            },
            {
              "text": "**Deploy with SageMaker AI:** Host the model on infrastructure in your account, with the control that brings.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s26.svg",
          "examObjectives": [
            "2.3.1",
            "1.3.2"
          ]
        },
        {
          "id": "m2-s27",
          "title": "Advantages of Building Generative AI on AWS",
          "section": "2.3",
          "bullets": [
            {
              "text": "**Faster development and lower barriers:** Pretrained models in Amazon Bedrock, coding assistance, and automated SageMaker AI workflows reduce the expertise and time needed, which speeds time to market.",
              "indent": 0
            },
            {
              "text": "**Scalability and cost-effectiveness:** Pay-as-you-go pricing and the AWS global infrastructure let usage grow without buying hardware.",
              "indent": 0
            },
            {
              "text": "**Flexibility:** A choice of foundation models from several providers, with services that keep expanding.",
              "indent": 0
            },
            {
              "text": "**Integration:** Ready-to-use AI services connect with other AWS services through common tools, software development kits (SDKs), and APIs, which helps solutions meet business objectives.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s27.svg",
          "examObjectives": [
            "2.3.2"
          ]
        },
        {
          "id": "m2-s28",
          "title": "Security, Compliance, Responsibility, and Safety on AWS",
          "section": "2.3",
          "bullets": [
            {
              "text": "**Security:** Identity and Access Management (IAM), encryption, and private networking protect models and data.",
              "indent": 0
            },
            {
              "text": "**Compliance:** AWS infrastructure supports many compliance programs, and customers can use the reports to support their own audits.",
              "indent": 0
            },
            {
              "text": "**Shared responsibility:** AWS secures the underlying cloud; customers secure their data, permissions, prompts, and how outputs are used.",
              "indent": 0
            },
            {
              "text": "**Safety:** Tools such as Amazon Bedrock Guardrails help filter harmful content and keep applications within defined topics.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s28.svg",
          "examObjectives": [
            "2.3.3"
          ]
        },
        {
          "id": "m2-s29",
          "title": "Cost Trade-offs for Generative AI Services",
          "section": "2.3",
          "bullets": [
            {
              "text": "**Responsiveness and availability:** Faster responses and higher availability usually cost more.",
              "indent": 0
            },
            {
              "text": "**Redundancy and Regional coverage:** Running in more AWS Regions improves resilience and reach but adds cost.",
              "indent": 0
            },
            {
              "text": "**Performance:** Larger, more capable models cost more per request.",
              "indent": 0
            },
            {
              "text": "**Pricing models:** Token-based on-demand pricing suits variable traffic; provisioned throughput reserves capacity for steady, heavy use; custom models add training and hosting costs.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s29.svg",
          "examObjectives": [
            "2.3.4",
            "2.1.4"
          ]
        },
        {
          "id": "m2-s30",
          "title": "Amazon Bedrock and Amazon Nova",
          "section": "2.3",
          "bullets": [
            {
              "text": "**Amazon Bedrock:** A choice of high-performing foundation models, playgrounds for experiments, PartyRock for building quick prototypes without code, and model evaluation tools.",
              "indent": 0
            },
            {
              "text": "**On-demand pricing:** Charges are based on the number of input tokens the model receives and the number of output tokens it generates.",
              "indent": 0
            },
            {
              "text": "**Amazon Nova:** Amazon's family of foundation models, with models for text, image, and video generation.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s30.svg",
          "examObjectives": [
            "2.3.1",
            "2.1.4"
          ]
        },
        {
          "id": "m2-s31",
          "title": "Tools for Agents and Developers",
          "section": "2.3",
          "bullets": [
            {
              "text": "**Amazon Quick:** An AI workspace where business users ask questions of their organization's data and automate work.",
              "indent": 0
            },
            {
              "text": "**Kiro:** An AI-powered development environment that helps developers plan, write, and test code.",
              "indent": 0
            },
            {
              "text": "**Strands Agents:** An open-source software development kit for building agents from a model and tools.",
              "indent": 0
            },
            {
              "text": "**Amazon Bedrock AgentCore:** Services to deploy and operate agents securely, including runtime, identity, memory, and monitoring.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m2_s31.svg",
          "examObjectives": [
            "2.3.1",
            "2.1.6"
          ]
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "m2-s6",
            "m2-s11"
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
            "m2-s6",
            "m2-s7",
            "m2-s11"
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
        "Describe design considerations for applications that use foundation models (FMs).",
        "Choose effective prompt engineering techniques.",
        "Describe the training and fine-tuning process for FMs.",
        "Describe methods to evaluate FM performance."
      ],
      "sections": [
        {
          "id": "3.1",
          "title": "Describe design considerations for applications that use foundation models (FMs)."
        },
        {
          "id": "3.2",
          "title": "Choose effective prompt engineering techniques."
        },
        {
          "id": "3.3",
          "title": "Describe the training and fine-tuning process for FMs."
        },
        {
          "id": "3.4",
          "title": "Describe methods to evaluate FM performance."
        }
      ],
      "slides": [
        {
          "id": "m3-s1",
          "title": "Task Statement 3.1: Designing Applications That Use Foundation Models",
          "section": "3.1",
          "bullets": [
            {
              "text": "**What this section covers:** How to choose a foundation model, tune its responses with inference parameters, and ground it in company data.",
              "indent": 0
            },
            {
              "text": "**Building blocks on AWS:** Retrieval Augmented Generation (RAG), vector databases, Amazon Bedrock Knowledge Bases, and Amazon Bedrock Agents.",
              "indent": 0
            },
            {
              "text": "**Cost of customization:** How prompting, RAG, fine-tuning, distillation, and pretraining compare.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.1.1"
          ]
        },
        {
          "id": "m3-s2",
          "title": "Model Selection Characteristics",
          "section": "3.1",
          "bullets": [
            {
              "text": "**Model type:** Start from the task: text generation, image creation, code generation, or a multimodal task. Models are optimized for different jobs.",
              "indent": 0
            },
            {
              "text": "**Performance requirements:** How accurate, reliable, and fast the answers must be.",
              "indent": 0
            },
            {
              "text": "**Capabilities and constraints:** Supported inputs and outputs, languages, context length, customization options, and where the model can run.",
              "indent": 0
            },
            {
              "text": "**Compliance and cost:** Licensing and regulatory requirements, plus price. Larger models can do more but usually cost more and respond more slowly; features such as prompt caching can lower the cost of repeated context.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.1.1",
            "2.2.3"
          ]
        },
        {
          "id": "m3-s3",
          "title": "Performance Requirements",
          "section": "3.1",
          "bullets": [
            {
              "text": "**Accuracy:** Check how often answers are correct for your task. Models can hallucinate facts or make arithmetic mistakes.",
              "indent": 0
            },
            {
              "text": "**Latency:** Model size and architecture affect how quickly responses arrive.",
              "indent": 0
            },
            {
              "text": "**Reliability:** Test with several representative datasets to confirm the quality holds across cases, not just on a few examples.",
              "indent": 0
            },
            {
              "text": "**Monitor over time:** Keep measuring after launch, because inputs, users, and model versions change.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s3.svg",
          "examObjectives": [
            "3.1.1"
          ]
        },
        {
          "id": "m3-s4",
          "title": "Constraints, Capabilities, Compliance, and Cost",
          "section": "3.1",
          "bullets": [
            {
              "text": "**Constraints:** Available compute and memory, the amount and quality of data for customization, and deployment requirements such as running in a specific environment.",
              "indent": 0
            },
            {
              "text": "**Capabilities:** Text generation, image generation, multimodal and multilingual support, and maximum input and output length.",
              "indent": 0
            },
            {
              "text": "**Compliance:** Whether the model and how you use it meet relevant guidelines, licenses, and regulations.",
              "indent": 0
            },
            {
              "text": "**Cost:** Larger models tend to be more capable and more precise, but they cost more to run.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s4.svg",
          "examObjectives": [
            "3.1.1"
          ]
        },
        {
          "id": "m3-s5",
          "title": "Inference Parameters",
          "section": "3.1",
          "bullets": [
            {
              "text": "**Temperature:** Lower values (for example 0.2) give focused, predictable wording; higher values (for example 1.0) give more varied, creative wording.",
              "indent": 0
            },
            {
              "text": "**Top P and Top K:** Limit which next words the model may choose from, by cumulative probability (Top P) or by a fixed number of candidates (Top K). Lower values mean fewer choices.",
              "indent": 0
            },
            {
              "text": "**Maximum length:** Caps the number of output tokens, which controls cost and stops overly long answers.",
              "indent": 0
            },
            {
              "text": "**Stop sequences:** Text such as a closing tag that tells the model to stop generating. Several can be set. Supported parameters and ranges vary by model.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s5.svg",
          "examObjectives": [
            "3.1.2"
          ]
        },
        {
          "id": "m3-s6",
          "title": "Retrieval Augmented Generation (RAG)",
          "section": "3.1",
          "bullets": [
            {
              "text": "**The problem:** A model only knows what was in its training data, which may be outdated or missing your company's information.",
              "indent": 0
            },
            {
              "text": "**How RAG works:** The application searches knowledge sources for passages related to the question, then sends the instructions, the question, and the retrieved passages to the model together.",
              "indent": 0
            },
            {
              "text": "**The result:** The model answers from current, relevant information and can cite it. RAG does not change the model's weights, which separates it from fine-tuning.",
              "indent": 0
            },
            {
              "text": "**Business uses:** Customer support from product manuals, employee help desks, and question answering over policies and contracts.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s6.svg",
          "examObjectives": [
            "3.1.3"
          ]
        },
        {
          "id": "m3-s7",
          "title": "Vector Databases on AWS",
          "section": "3.1",
          "bullets": [
            {
              "text": "**Why vectors:** RAG stores passages as embeddings and finds the ones closest in meaning to a question by similarity search.",
              "indent": 0
            },
            {
              "text": "**Search services:** Amazon OpenSearch Service and Amazon OpenSearch Serverless provide built-in vector search.",
              "indent": 0
            },
            {
              "text": "**Relational and document databases:** Amazon Aurora PostgreSQL and Amazon RDS for PostgreSQL support vector search through the pgvector extension; Amazon DocumentDB also supports vector search.",
              "indent": 0
            },
            {
              "text": "**Graph and in-memory options:** Amazon Neptune supports vector search over graph data. Vector search for Amazon MemoryDB also exists, but MemoryDB is no longer on the exam guide's in-scope list.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.1.4"
          ]
        },
        {
          "id": "m3-s8",
          "title": "Amazon Bedrock Knowledge Bases",
          "section": "3.1",
          "bullets": [
            {
              "text": "**A managed RAG workflow:** Knowledge Bases connects foundation models and agents to your company's data so answers are more relevant and accurate.",
              "indent": 0
            },
            {
              "text": "**Unstructured data:** Ingests documents from sources such as Amazon S3, Confluence, Microsoft SharePoint, Salesforce, and a web crawler, splits them into chunks, creates embeddings, and stores them in a vector database.",
              "indent": 0
            },
            {
              "text": "**Structured data:** Can turn a natural-language question into a SQL query to retrieve data where it already lives.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s8.svg",
          "examObjectives": [
            "3.1.3",
            "3.1.4"
          ]
        },
        {
          "id": "m3-s9",
          "title": "Amazon Bedrock Agents",
          "section": "3.1",
          "bullets": [
            {
              "text": "**From answers to actions:** An agent breaks a user request into reasoning steps, calls external applications and data sources, and combines the results into a response.",
              "indent": 0
            },
            {
              "text": "**The flow:** The user query becomes a structured prompt; the model plans reasoning steps; the agent calls APIs, databases, or knowledge bases; the model produces the completion returned to the user.",
              "indent": 0
            },
            {
              "text": "**Business applications:** Processing insurance claims, booking appointments, checking order status, and handling routine IT requests.",
              "indent": 0
            },
            {
              "text": "**Keep control:** Limit the actions an agent can take and require confirmation for consequential steps.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s9.svg",
          "examObjectives": [
            "3.1.6"
          ]
        },
        {
          "id": "m3-s10",
          "title": "Customization Approaches and Their Cost",
          "section": "3.1",
          "bullets": [
            {
              "text": "**In-context learning (prompting):** Add instructions and examples to the prompt. Almost no setup cost; costs grow with prompt length.",
              "indent": 0
            },
            {
              "text": "**RAG:** Add a retrieval system and vector store. Moderate setup; keeps answers current without retraining.",
              "indent": 0
            },
            {
              "text": "**Fine-tuning:** Train an existing model further on labeled examples. Requires data preparation, training compute, evaluation, and maintenance.",
              "indent": 0
            },
            {
              "text": "**Distillation and pretraining:** Distillation trains a smaller student model from a larger teacher's outputs, lowering running cost for one task. Pretraining a model from scratch is by far the most expensive option.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s10.svg",
          "examObjectives": [
            "3.1.5"
          ]
        },
        {
          "id": "m3-s11",
          "title": "Task Statement 3.2: Prompt Engineering Techniques",
          "section": "3.2",
          "bullets": [
            {
              "text": "**What this section covers:** Zero-shot, few-shot, and chain-of-thought prompting, prompt templates, and prompt tuning.",
              "indent": 0
            },
            {
              "text": "**Writing better prompts:** Practical guidance on specificity, examples, experimentation, and guardrails.",
              "indent": 0
            },
            {
              "text": "**Risks and management:** Adversarial prompting threats, and versioning prompts with Amazon Bedrock Prompt Management.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.2.1"
          ]
        },
        {
          "id": "m3-s12",
          "title": "Zero-Shot Prompting",
          "section": "3.2",
          "bullets": [
            {
              "text": "**Definition:** Ask the model to perform a task without giving any examples. It relies only on what it learned in pretraining.",
              "indent": 0
            },
            {
              "text": "**Example:** \"Here is a customer review: 'Pickup was quick, the bike was clean, and the staff gave great route tips.' Summarize the review in one sentence.\" Output: \"The customer was pleased with the fast pickup, clean bike, and helpful staff.\"",
              "indent": 0
            },
            {
              "text": "**When it works:** Common, clearly described tasks such as summarizing or translating.",
              "indent": 0
            },
            {
              "text": "**Limits:** Results can be weaker for specialized or unusual tasks, so evaluate the outputs.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.2.2"
          ]
        },
        {
          "id": "m3-s13",
          "title": "Few-Shot Prompting",
          "section": "3.2",
          "bullets": [
            {
              "text": "**Definition:** Include a few worked examples in the prompt so the model can follow the pattern. One example is called single-shot or one-shot prompting.",
              "indent": 0
            },
            {
              "text": "**Example:** \"Label each comment as positive, negative, or neutral. 'The new app is so easy to use.' Positive. 'My rental was cancelled twice.' Negative. 'The shop opens at nine.' Neutral. 'Returning the bike took under a minute.'\" Output: Positive.",
              "indent": 0
            },
            {
              "text": "**Why it helps:** The examples show the format and the decision rule, which improves consistency without training the model.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.2.2"
          ]
        },
        {
          "id": "m3-s14",
          "title": "Prompt Templates",
          "section": "3.2",
          "bullets": [
            {
              "text": "**Definition:** A reusable prompt with fixed instructions and placeholders for the parts that change.",
              "indent": 0
            },
            {
              "text": "**Example structure:** {{Passage}}, then {{Question}}, then \"Choose one of the following:\" {{Option 1}}, {{Option 2}}, {{Option 3}}.",
              "indent": 0
            },
            {
              "text": "**Benefits:** Consistent formatting, easier testing, and fewer mistakes when many people or systems send similar requests.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.2.2",
            "3.2.5"
          ]
        },
        {
          "id": "m3-s15",
          "title": "Chain-of-Thought Prompting and Prompt Tuning",
          "section": "3.2",
          "bullets": [
            {
              "text": "**Chain-of-thought prompting:** Ask the model to work through a problem in intermediate steps, for example \"Explain your reasoning step by step, then give the final answer.\" This often improves results on multi-step problems.",
              "indent": 0
            },
            {
              "text": "**Prompt tuning:** Instead of editing words, a small set of learned prompt parameters (a soft prompt) is trained for a task while the model's own weights stay frozen.",
              "indent": 0
            },
            {
              "text": "**Choosing between them:** Chain-of-thought is a prompt-writing technique anyone can use; prompt tuning is a lightweight training method that needs labeled examples.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s15.svg",
          "examObjectives": [
            "3.2.2",
            "3.3.1"
          ]
        },
        {
          "id": "m3-s16",
          "title": "Prompt Engineering Best Practices",
          "section": "3.2",
          "bullets": [
            {
              "text": "**Be specific and concise:** State the task, format, tone, and length clearly, without unnecessary words.",
              "indent": 0
            },
            {
              "text": "**Add examples and context:** Show sample inputs and outputs, and include the background the model needs. Use negative prompts to state what to avoid, such as \"Do not include pricing.\"",
              "indent": 0
            },
            {
              "text": "**Experiment and understand your model:** Try variations, compare results on the same cases, and learn the model's strengths and limits. This discovery process improves response quality.",
              "indent": 0
            },
            {
              "text": "**Balance, comments, and guardrails:** Give enough direction without over-constraining, mark instructions clearly with comments or delimiters, and add guardrails to block harmful or off-topic content.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s16.svg",
          "examObjectives": [
            "3.2.1",
            "3.2.3"
          ]
        },
        {
          "id": "m3-s17",
          "title": "Adversarial Prompting Risks",
          "section": "3.2",
          "bullets": [
            {
              "text": "**Exposure:** A prompt tricks the model into revealing sensitive information, such as confidential data or its system instructions.",
              "indent": 0
            },
            {
              "text": "**Prompt injection and hijacking:** Hidden or malicious instructions in user input or retrieved content try to override the original task and take over the model's goal.",
              "indent": 0
            },
            {
              "text": "**Jailbreaking:** Crafted prompts try to bypass the model's safety rules.",
              "indent": 0
            },
            {
              "text": "**Poisoning:** Corrupted data introduced into training or into retrieval sources makes the model produce biased or wrong outputs.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s17.svg",
          "examObjectives": [
            "3.2.4"
          ]
        },
        {
          "id": "m3-s18",
          "title": "Amazon Bedrock Prompt Management",
          "section": "3.2",
          "bullets": [
            {
              "text": "**Save and reuse prompts:** Store prompts with their variables and model settings so teams use the same tested version.",
              "indent": 0
            },
            {
              "text": "**Versions:** Each saved version is fixed, so you can see exactly which prompt a release used and roll back if needed.",
              "indent": 0
            },
            {
              "text": "**Compare variants:** Test alternative wordings and settings side by side on the same inputs before choosing one.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s18.svg",
          "examObjectives": [
            "3.2.5"
          ]
        },
        {
          "id": "m3-s19",
          "title": "Task Statement 3.3: Training and Fine-Tuning Foundation Models",
          "section": "3.3",
          "bullets": [
            {
              "text": "**What this section covers:** Pretraining, fine-tuning, continuous pretraining, and how to avoid catastrophic forgetting.",
              "indent": 0
            },
            {
              "text": "**Fine-tuning methods:** Instruction fine-tuning and reinforcement learning from human feedback (RLHF), with the steps of a fine-tuning run.",
              "indent": 0
            },
            {
              "text": "**Data:** How to prepare training data, and which AWS services help.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.3.1"
          ]
        },
        {
          "id": "m3-s20",
          "title": "The Training Process for Foundation Models",
          "section": "3.3",
          "bullets": [
            {
              "text": "**Pretraining:** The model learns general capabilities from huge amounts of data, mostly through self-supervised learning.",
              "indent": 0
            },
            {
              "text": "**Fine-tuning:** A supervised process adapts the pretrained model to your tasks with smaller, labeled datasets.",
              "indent": 0
            },
            {
              "text": "**Catastrophic forgetting:** Heavy fine-tuning on a narrow task can make the model lose general knowledge it had before.",
              "indent": 0
            },
            {
              "text": "**Continuous pretraining:** Further pretraining on new, unlabeled domain data extends the model's knowledge while keeping its broad abilities, which also supports adapting a model to a specific domain.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s20.svg",
          "examObjectives": [
            "3.3.1",
            "3.3.2"
          ]
        },
        {
          "id": "m3-s21",
          "title": "Fine-Tuning a Model",
          "section": "3.3",
          "bullets": [
            {
              "text": "**Definition:** Training a base model further with a specific, smaller set of labeled examples, which adjusts its weights toward the task.",
              "indent": 0
            },
            {
              "text": "**Instruction fine-tuning:** Examples pair an instruction with the desired response, teaching the model to follow directions in a particular way.",
              "indent": 0
            },
            {
              "text": "**Reinforcement learning from human feedback (RLHF):** People rank or rate model responses, and that feedback trains the model toward preferred answers.",
              "indent": 0
            },
            {
              "text": "**Example:** An insurer fine-tunes a model on approved claim summaries so it writes summaries in the company's structure and terminology.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s21.svg",
          "examObjectives": [
            "3.3.2"
          ]
        },
        {
          "id": "m3-s22",
          "title": "Fine-Tuning Steps",
          "section": "3.3",
          "bullets": [
            {
              "text": "**Prepare the training data:** Gather and organize examples that match the task.",
              "indent": 0
            },
            {
              "text": "**Select prompts:** Choose the prompts the model will be trained on; template libraries can help.",
              "indent": 0
            },
            {
              "text": "**Calculate the loss:** Compare the model's outputs with the expected answers.",
              "indent": 0
            },
            {
              "text": "**Update the weights and evaluate:** Adjust the weights to reduce the loss over several passes (epochs), then measure the result on held-out evaluation data.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s22.svg",
          "examObjectives": [
            "3.3.1",
            "3.3.3"
          ]
        },
        {
          "id": "m3-s23",
          "title": "AWS Services for Data Preparation",
          "section": "3.3",
          "bullets": [
            {
              "text": "**Visual preparation:** SageMaker Canvas, with Data Wrangler, builds data flows with little or no code.",
              "indent": 0
            },
            {
              "text": "**Code-based and large-scale:** SageMaker Studio works with open-source frameworks such as Apache Spark, and AWS Glue provides serverless Spark-based preparation.",
              "indent": 0
            },
            {
              "text": "**Features and labels:** SageMaker Feature Store stores and shares features; SageMaker Ground Truth manages labeling.",
              "indent": 0
            },
            {
              "text": "**Bias checks:** SageMaker Clarify detects potential bias in data before training.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.3.3",
            "1.3.4"
          ]
        },
        {
          "id": "m3-s24",
          "title": "Preparing Data for Fine-Tuning",
          "section": "3.3",
          "bullets": [
            {
              "text": "**Curation and size:** Select relevant, high-quality examples and remove duplicates and errors. Quality matters more than sheer volume, but there must be enough examples to cover the task.",
              "indent": 0
            },
            {
              "text": "**Labeling:** Make sure each example's expected answer is correct and consistent.",
              "indent": 0
            },
            {
              "text": "**Representativeness:** Cover the real users, languages, tasks, and hard cases the model will face.",
              "indent": 0
            },
            {
              "text": "**Governance and RLHF data:** Confirm you have the right to use the data, protect personal information, and record its source and version. For RLHF, collect consistent human rankings of responses.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s24.svg",
          "examObjectives": [
            "3.3.3"
          ]
        },
        {
          "id": "m3-s25",
          "title": "Task Statement 3.4: Evaluating Foundation Model Performance",
          "section": "3.4",
          "bullets": [
            {
              "text": "**What this section covers:** Metrics for generated text, evaluation approaches including human review and model-based judging, and how to evaluate complete applications.",
              "indent": 0
            },
            {
              "text": "**Business view:** Metrics that show whether a model meets business objectives.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "3.4.1"
          ]
        },
        {
          "id": "m3-s26",
          "title": "Metrics for Generated Text: ROUGE, BLEU, and BERTScore",
          "section": "3.4",
          "bullets": [
            {
              "text": "**ROUGE (Recall-Oriented Understudy for Gisting Evaluation):** Measures how much of a reference summary or translation appears in the generated text. Common for summarization.",
              "indent": 0
            },
            {
              "text": "**BLEU (Bilingual Evaluation Understudy):** Measures how closely generated text matches reference translations, considering precision and length. Common for translation.",
              "indent": 0
            },
            {
              "text": "**BERTScore:** Compares meaning rather than exact words by using embeddings from a BERT model, so a correct paraphrase can still score well.",
              "indent": 0
            },
            {
              "text": "**Limits:** These metrics need reference answers and do not confirm factual accuracy on their own.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s26.svg",
          "examObjectives": [
            "3.4.2"
          ]
        },
        {
          "id": "m3-s27",
          "title": "Business Metrics for Generative AI",
          "section": "3.4",
          "bullets": [
            {
              "text": "**User satisfaction:** Feedback ratings on generated answers or recommendations.",
              "indent": 0
            },
            {
              "text": "**Average revenue per user and conversion rate:** Whether the application increases revenue or completed purchases.",
              "indent": 0
            },
            {
              "text": "**Cross-domain performance:** How well the model works across different product lines, topics, or industries.",
              "indent": 0
            },
            {
              "text": "**Efficiency:** Time and cost saved compared with the previous way of working.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s27.svg",
          "examObjectives": [
            "3.4.3",
            "3.4.5"
          ]
        },
        {
          "id": "m3-s28",
          "title": "Approaches to Evaluating Foundation Models",
          "section": "3.4",
          "bullets": [
            {
              "text": "**Human-in-the-loop evaluation:** People rate outputs against a shared rubric for accuracy, helpfulness, safety, and tone.",
              "indent": 0
            },
            {
              "text": "**Benchmark datasets:** A fixed, representative set of questions with known answers lets you compare models fairly.",
              "indent": 0
            },
            {
              "text": "**Amazon Bedrock Model Evaluation:** Runs automatic metrics, human review, or model-based judging on your own datasets.",
              "indent": 0
            },
            {
              "text": "**LLM-as-a-judge:** A separate model scores responses against a rubric. Check its scores against human ratings before relying on them.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s28.svg",
          "examObjectives": [
            "3.4.1",
            "3.4.2"
          ]
        },
        {
          "id": "m3-s29",
          "title": "Evaluating RAG, Agents, and Workflows",
          "section": "3.4",
          "bullets": [
            {
              "text": "**RAG:** Check retrieval (did it find the right passages?), grounding (does the answer stick to them?), and the final answer's correctness.",
              "indent": 0
            },
            {
              "text": "**Agents:** Check whether the agent chose the right tools, sent correct inputs, respected permissions, and completed the task without unnecessary retries.",
              "indent": 0
            },
            {
              "text": "**Workflows:** Test complete runs with normal and difficult cases, measuring task completion, cost, and time across all steps.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s29.svg",
          "examObjectives": [
            "3.4.4"
          ]
        },
        {
          "id": "m3-s30",
          "title": "Aligning Evaluation with Business Objectives",
          "section": "3.4",
          "bullets": [
            {
              "text": "**Does it meet the objective?** Tie evaluation to goals such as productivity, user engagement, and well-designed tasks the model is asked to perform.",
              "indent": 0
            },
            {
              "text": "**Task completion rate:** The share of requests the application resolves without hand-off.",
              "indent": 0
            },
            {
              "text": "**User satisfaction:** Ratings and feedback from the people using it.",
              "indent": 0
            },
            {
              "text": "**Cost per interaction:** Total model, infrastructure, and review cost divided by the number of interactions.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m3_s30.svg",
          "examObjectives": [
            "3.4.3",
            "3.4.5"
          ]
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "m3-s5",
            "m3-s14",
            "m3-s18"
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
            "m3-s26",
            "m3-s28",
            "m3-s29"
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
        "Explain the development of AI systems that are responsible.",
        "Recognize the importance of transparent and explainable models."
      ],
      "sections": [
        {
          "id": "4.1",
          "title": "Explain the development of AI systems that are responsible."
        },
        {
          "id": "4.2",
          "title": "Recognize the importance of transparent and explainable models."
        }
      ],
      "slides": [
        {
          "id": "m4-s1",
          "title": "Task Statement 4.1: Developing Responsible AI Systems",
          "section": "4.1",
          "bullets": [
            {
              "text": "**What this section covers:** The principles behind responsible AI, where unfair bias comes from, and how to reduce it in data, models, and outputs.",
              "indent": 0
            },
            {
              "text": "**Tools on AWS:** Amazon SageMaker Clarify for bias measurement, Amazon Bedrock Guardrails for content controls, and model evaluation jobs for comparing models.",
              "indent": 0
            },
            {
              "text": "**Risks to manage:** Generative AI can produce false, harmful, or infringing content, which creates legal and trust risks for the business.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "4.1.1"
          ]
        },
        {
          "id": "m4-s2",
          "title": "Core Dimensions of Responsible AI",
          "section": "4.1",
          "bullets": [
            {
              "text": "**Fairness:** Consider how the system's results affect different groups of users, such as groups defined by age, gender, or ethnicity.",
              "indent": 0
            },
            {
              "text": "**Explainability and transparency:** People can understand why the system produced an output and can learn its purpose, limits, and risks before relying on it.",
              "indent": 0
            },
            {
              "text": "**Robustness:** The system keeps working reliably when inputs are unusual, noisy, or deliberately misleading.",
              "indent": 0
            },
            {
              "text": "**Privacy, security, and governance:** Data is used with permission and protected from exposure, and the organization has defined processes to apply and enforce these practices.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s2.svg",
          "examObjectives": [
            "4.1.1"
          ]
        },
        {
          "id": "m4-s3",
          "title": "More Features to Check: Inclusivity, Safety, and Veracity",
          "section": "4.1",
          "bullets": [
            {
              "text": "**Bias:** Systematic differences in results that favor or disadvantage a group without a valid reason.",
              "indent": 0
            },
            {
              "text": "**Inclusivity:** The system works for the full range of people who will use it, including different languages, abilities, and backgrounds.",
              "indent": 0
            },
            {
              "text": "**Safety:** The system avoids outputs that could cause harm, such as dangerous instructions or abusive content.",
              "indent": 0
            },
            {
              "text": "**Veracity:** Outputs are truthful and accurate. For generative AI, this means checking for invented facts before users act on them.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s3.svg",
          "examObjectives": [
            "4.1.1"
          ]
        },
        {
          "id": "m4-s4",
          "title": "Effects of Bias and Variance",
          "section": "4.1",
          "bullets": [
            {
              "text": "**Bias (in the statistical sense):** Error from assumptions that are too simple. A high-bias model underfits and misses real patterns in the data.",
              "indent": 0
            },
            {
              "text": "**Variance:** Error from being too sensitive to the training data. A high-variance model overfits and performs poorly on new data.",
              "indent": 0
            },
            {
              "text": "**Effects on people:** Either problem can produce unequal outcomes for demographic groups, less accurate results, and lower trust in the system.",
              "indent": 0
            },
            {
              "text": "**Goal:** Balance the two so the model captures the real pattern and still generalizes to data it has not seen.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s4.svg",
          "examObjectives": [
            "4.1.6"
          ]
        },
        {
          "id": "m4-s5",
          "title": "Class Imbalance",
          "section": "4.1",
          "bullets": [
            {
              "text": "**What it is:** One class or group has far more examples in the training data than another.",
              "indent": 0
            },
            {
              "text": "**Effect on training:** The model fits the larger group best, because that is the easiest way to lower its overall error.",
              "indent": 0
            },
            {
              "text": "**Effect on the smaller group:** With few examples, the model can memorize them instead of learning a general pattern, so it makes more mistakes on that group.",
              "indent": 0
            },
            {
              "text": "**Check:** Compare error rates by group instead of relying on one overall accuracy number.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s5.svg",
          "examObjectives": [
            "4.1.5",
            "4.1.6"
          ]
        },
        {
          "id": "m4-s6",
          "title": "Types of Bias Responsible AI Addresses",
          "section": "4.1",
          "bullets": [
            {
              "text": "**Data bias:** The training data leaves out or underrepresents some groups, or it records unfair decisions from the past.",
              "indent": 0
            },
            {
              "text": "**Algorithm bias:** Training is set up to maximize overall performance, with no measure of fairness between groups.",
              "indent": 0
            },
            {
              "text": "**Interaction bias:** The people who use or give feedback to the system are not representative of everyone it affects.",
              "indent": 0
            },
            {
              "text": "**Bias amplification:** The model learns existing social biases and repeats them at scale, which can make them stronger.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s6.svg",
          "examObjectives": [
            "4.1.1",
            "4.1.6"
          ]
        },
        {
          "id": "m4-s7",
          "title": "Mitigating Bias in AI Systems",
          "section": "4.1",
          "bullets": [
            {
              "text": "**Data and audits:** Train on diverse, representative data, and audit both the data and the model for bias.",
              "indent": 0
            },
            {
              "text": "**Fairness metrics and constraints:** Measure outcome gaps between groups, and limit them during training where appropriate.",
              "indent": 0
            },
            {
              "text": "**Transparency and people:** Make the system's decisions explainable, and involve affected stakeholders and communities in design and deployment.",
              "indent": 0
            },
            {
              "text": "**Monitoring and updating:** Bias can appear after launch as data and users change, so keep measuring and retrain when needed.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s7.svg",
          "examObjectives": [
            "4.1.1",
            "4.1.7"
          ]
        },
        {
          "id": "m4-s8",
          "title": "Characteristics of Responsible Datasets",
          "section": "4.1",
          "bullets": [
            {
              "text": "**Inclusivity and diversity:** The data represents the full population the model will serve and covers a wide range of relevant attributes.",
              "indent": 0
            },
            {
              "text": "**Curated sources and balance:** Data comes from known, reviewed sources, and groups are represented in reasonable proportions.",
              "indent": 0
            },
            {
              "text": "**Privacy, consent, and transparency:** Personal data is protected, people agreed to its use, and how it was collected is documented.",
              "indent": 0
            },
            {
              "text": "**Regular audits:** Datasets are reviewed on a schedule for errors, gaps, and new sources of bias.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s8.svg",
          "examObjectives": [
            "4.1.5"
          ]
        },
        {
          "id": "m4-s9",
          "title": "Responsible Practices for Model Selection",
          "section": "4.1",
          "bullets": [
            {
              "text": "**Environmental considerations:** Measure the energy and resources that training and running a model would use, so the decision is informed.",
              "indent": 0
            },
            {
              "text": "**Sustainability:** Act on that information: choose a right-sized model, prefer efficient customization, scale capacity with demand, and ask whether generative AI is needed at all.",
              "indent": 0
            },
            {
              "text": "**Transparency and accountability:** Know and share the model's capabilities, limits, and risks, and assign clear ownership for its outcomes.",
              "indent": 0
            },
            {
              "text": "**Stakeholder engagement:** Include the people affected by the system when deciding which model and approach to use.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s9.svg",
          "examObjectives": [
            "4.1.3"
          ]
        },
        {
          "id": "m4-s10",
          "title": "Amazon SageMaker Clarify",
          "section": "4.1",
          "bullets": [
            {
              "text": "**Detects bias in data:** Runs pre-training bias metrics on your dataset before you train.",
              "indent": 0
            },
            {
              "text": "**Detects bias in models:** Evaluates a trained model's predictions with post-training bias metrics, and works with Amazon SageMaker Model Monitor to detect drift in production.",
              "indent": 0
            },
            {
              "text": "**Explains predictions:** Shows how much each input feature contributes to the model's overall behavior and to individual predictions.",
              "indent": 0
            },
            {
              "text": "**Beyond tables:** Also explains predictions from computer vision and natural language processing (NLP) models, which are otherwise difficult to inspect.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s10.svg",
          "examObjectives": [
            "4.1.7",
            "4.2.2"
          ]
        },
        {
          "id": "m4-s11",
          "title": "How a Clarify Processing Job Runs",
          "section": "4.1",
          "bullets": [
            {
              "text": "**Inputs:** The dataset and an analysis configuration are stored in Amazon S3. The configuration says which metrics to compute.",
              "indent": 0
            },
            {
              "text": "**Processing container:** A SageMaker Clarify container on a processing instance reads the inputs and runs the analysis.",
              "indent": 0
            },
            {
              "text": "**Model endpoint:** For post-training and explainability analysis, the container sends sample requests to the model and collects its predictions.",
              "indent": 0
            },
            {
              "text": "**Results:** The bias and explainability reports are written back to Amazon S3 for review.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s11.svg",
          "examObjectives": [
            "4.1.7"
          ]
        },
        {
          "id": "m4-s12",
          "title": "Pre-Training Bias Metrics",
          "section": "4.1",
          "bullets": [
            {
              "text": "**When:** Before training, using only the dataset and its labels.",
              "indent": 0
            },
            {
              "text": "**Class imbalance:** One group has few examples. A model trained mostly on applicants aged 25 to 50 may be less accurate for older applicants.",
              "indent": 0
            },
            {
              "text": "**Label imbalance:** Positive labels are more common for one group, such as a higher recorded acceptance rate for one age group.",
              "indent": 0
            },
            {
              "text": "**Demographic disparity:** A group's share of negative outcomes is larger than its share of positive outcomes, for example 40 percent of rejections but only 25 percent of acceptances.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s12.svg",
          "examObjectives": [
            "4.1.5",
            "4.1.7"
          ]
        },
        {
          "id": "m4-s13",
          "title": "Post-Training Bias Metrics",
          "section": "4.1",
          "bullets": [
            {
              "text": "**When:** After training, by comparing the model's predictions for different groups.",
              "indent": 0
            },
            {
              "text": "**Outcome rates:** Difference in positive proportions checks whether the model predicts positive outcomes more often for one group.",
              "indent": 0
            },
            {
              "text": "**Error rates:** Recall difference, specificity difference, and accuracy difference check whether the model is more correct for one group.",
              "indent": 0
            },
            {
              "text": "**Treatment equality:** Compares the ratio of false positives to false negatives between groups.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s13.svg",
          "examObjectives": [
            "4.1.7"
          ]
        },
        {
          "id": "m4-s14",
          "title": "Detecting Bias: Label Quality, Human Audits, and Subgroup Analysis",
          "section": "4.1",
          "bullets": [
            {
              "text": "**Analyze label quality:** Wrong or inconsistent labels teach the model the wrong answer. Sample and review labels, especially for smaller groups.",
              "indent": 0
            },
            {
              "text": "**Human audits:** Reviewers examine model decisions for unfair or untruthful results that metrics may miss.",
              "indent": 0
            },
            {
              "text": "**Subgroup analysis:** Break results down by group. A strong overall score can hide much worse results for one group.",
              "indent": 0
            },
            {
              "text": "**Ongoing monitoring:** SageMaker Model Monitor tracks bias drift over time, and Amazon Augmented AI (Amazon A2I) routes uncertain predictions to human reviewers.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s14.svg",
          "examObjectives": [
            "4.1.7"
          ]
        },
        {
          "id": "m4-s15",
          "title": "Generative AI Risks",
          "section": "4.1",
          "bullets": [
            {
              "text": "**Hallucinations:** The model produces believable statements that are false, such as a citation that does not exist.",
              "indent": 0
            },
            {
              "text": "**Intellectual property:** Outputs may reproduce copyrighted material or closely imitate protected work.",
              "indent": 0
            },
            {
              "text": "**Bias and toxicity:** Outputs may treat groups unfairly or contain offensive, hateful, or harmful language.",
              "indent": 0
            },
            {
              "text": "**Data privacy:** Sensitive information in prompts or training data may appear in responses.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s15.svg",
          "examObjectives": [
            "4.1.1",
            "4.1.4"
          ]
        },
        {
          "id": "m4-s16",
          "title": "Legal Risks of Working with Generative AI",
          "section": "4.1",
          "bullets": [
            {
              "text": "**Intellectual property infringement claims:** Generated content that copies protected work can lead to legal disputes.",
              "indent": 0
            },
            {
              "text": "**Biased model outputs:** Unfair results in decisions such as hiring or lending can break anti-discrimination rules.",
              "indent": 0
            },
            {
              "text": "**Loss of customer trust:** Harmful, wrong, or careless outputs damage the brand and customer relationships.",
              "indent": 0
            },
            {
              "text": "**End user risk and hallucinations:** Users who act on false or unsafe advice can be harmed, and the business may be held responsible.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s16.svg",
          "examObjectives": [
            "4.1.4"
          ]
        },
        {
          "id": "m4-s17",
          "title": "Amazon Bedrock Guardrails",
          "section": "4.1",
          "bullets": [
            {
              "text": "**What it does:** Applies the same safety policies to the user's input and the model's response, and returns a configured message when content is blocked.",
              "indent": 0
            },
            {
              "text": "**Content filters:** Detect and block harmful categories such as hate, insults, sexual content, and violence, with adjustable strength.",
              "indent": 0
            },
            {
              "text": "**Denied topics:** Topics you describe in plain language, such as investment advice, that the application must not discuss.",
              "indent": 0
            },
            {
              "text": "**More policies:** Word filters, sensitive information filters that block or mask personal data, and contextual grounding checks that flag answers not supported by the source.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s17.svg",
          "examObjectives": [
            "4.1.2"
          ]
        },
        {
          "id": "m4-s18",
          "title": "Foundation Model Evaluation",
          "section": "4.1",
          "bullets": [
            {
              "text": "**Model evaluation jobs:** Compare large language models (LLMs) on the same task using built-in or custom prompt datasets.",
              "indent": 0
            },
            {
              "text": "**Automatic and human review:** Use computed metrics, or human workers who rate responses for qualities such as helpfulness.",
              "indent": 0
            },
            {
              "text": "**Where:** Available in Amazon Bedrock and in SageMaker Clarify.",
              "indent": 0
            },
            {
              "text": "**Dimensions by task:** Accuracy, toxicity, and semantic robustness apply to most tasks; open-ended generation also checks prompt stereotyping and factual knowledge.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s18.svg",
          "examObjectives": [
            "4.1.2",
            "3.4.1"
          ]
        },
        {
          "id": "m4-s19",
          "title": "Task Statement 4.2: Transparent and Explainable Models",
          "section": "4.2",
          "bullets": [
            {
              "text": "**What this section covers:** The difference between models whose reasoning can be inspected and models that can only be explained from the outside.",
              "indent": 0
            },
            {
              "text": "**Trade-offs:** More transparency can mean lower accuracy or more exposure to attacks.",
              "indent": 0
            },
            {
              "text": "**Tools and people:** AWS documentation and tools for transparency, plus human review and feedback that keep people in control.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "4.2.1"
          ]
        },
        {
          "id": "m4-s20",
          "title": "Interpretability and Explainability",
          "section": "4.2",
          "bullets": [
            {
              "text": "**Interpretability:** You can follow the model's internal logic directly. Linear regression and decision trees are examples.",
              "indent": 0
            },
            {
              "text": "**Explainability:** The model's inner workings are too complex to follow, so you explain its behavior from the outside by studying how inputs affect outputs.",
              "indent": 0
            },
            {
              "text": "**Model-agnostic methods:** Explainability techniques treat the model as an opaque box, so they work with any model type.",
              "indent": 0
            },
            {
              "text": "**Why it matters:** Both help people find errors and bias, and both build trust in high-impact uses such as healthcare and finance.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s20.svg",
          "examObjectives": [
            "4.2.1"
          ]
        },
        {
          "id": "m4-s21",
          "title": "Interpretability Compared with Performance",
          "section": "4.2",
          "bullets": [
            {
              "text": "**Simple models:** Linear regression and decision trees are easy to interpret, but they may be less accurate on complex problems.",
              "indent": 0
            },
            {
              "text": "**Middle ground:** K-nearest neighbors, random forests, and support vector machines balance the two.",
              "indent": 0
            },
            {
              "text": "**Complex models:** Neural networks often give the highest accuracy, but their decisions are the hardest to interpret.",
              "indent": 0
            },
            {
              "text": "**Choose by need:** When people must understand each decision, a slightly less accurate but interpretable model can be the better choice.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s21.svg",
          "examObjectives": [
            "4.2.3"
          ]
        },
        {
          "id": "m4-s22",
          "title": "Transparency and Model Safety",
          "section": "4.2",
          "bullets": [
            {
              "text": "**Vulnerability to attacks:** Detailed knowledge of how a model works can help attackers design inputs that fool it.",
              "indent": 0
            },
            {
              "text": "**Exposure of proprietary algorithms:** Publishing model internals can reveal intellectual property and competitive advantage.",
              "indent": 0
            },
            {
              "text": "**Data privacy:** Openness about training data and model behavior must not expose the personal data the model learned from.",
              "indent": 0
            },
            {
              "text": "**Balance:** Decide how much to disclose, to whom, and with what security controls in place.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s22.svg",
          "examObjectives": [
            "4.2.3"
          ]
        },
        {
          "id": "m4-s23",
          "title": "Open Source AI Models",
          "section": "4.2",
          "bullets": [
            {
              "text": "**Transparent development:** Algorithms, training artifacts, and sometimes datasets are public, so anyone can inspect how the model was built.",
              "indent": 0
            },
            {
              "text": "**Community collaboration:** More contributors bring more viewpoints, and more reviewers can find bias, errors, and risks.",
              "indent": 0
            },
            {
              "text": "**Safety concerns:** Open weights can also be modified or misused, so safety depends on how people deploy the model.",
              "indent": 0
            },
            {
              "text": "**Licensing:** Each open model has a license that defines permitted use, including commercial use.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s23.svg",
          "examObjectives": [
            "4.2.2"
          ]
        },
        {
          "id": "m4-s24",
          "title": "Model Transparency on AWS: Service Cards and Model Cards",
          "section": "4.2",
          "bullets": [
            {
              "text": "**AWS AI Service Cards:** Published for services such as Amazon Comprehend, Amazon Transcribe, Amazon Rekognition, Amazon Textract, Amazon Titan, and Amazon Nova.",
              "indent": 0
            },
            {
              "text": "**What a service card covers:** Intended use cases and limitations, responsible AI design choices, and guidance for deployment and performance.",
              "indent": 0
            },
            {
              "text": "**Amazon SageMaker Model Cards:** Document your own models from design and training through evaluation, in one place.",
              "indent": 0
            },
            {
              "text": "**Less manual work:** Model cards can pull in model details automatically, such as training job information.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s24.svg",
          "examObjectives": [
            "4.2.2"
          ]
        },
        {
          "id": "m4-s25",
          "title": "Other Evidence of Transparency: Evaluations, Data, and Licensing",
          "section": "4.2",
          "bullets": [
            {
              "text": "**Amazon Bedrock Model Evaluations:** Record how candidate models perform on your prompts, so the choice rests on evidence you can show others.",
              "indent": 0
            },
            {
              "text": "**Data documentation:** Know what data trained or customized the model, where it came from, and what it leaves out.",
              "indent": 0
            },
            {
              "text": "**Licensing:** Check the model's license terms for permitted uses, restrictions, and obligations.",
              "indent": 0
            },
            {
              "text": "**Together:** Cards, evaluation results, data records, and licenses let reviewers judge whether a model fits its purpose.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s25.svg",
          "examObjectives": [
            "4.2.2"
          ]
        },
        {
          "id": "m4-s26",
          "title": "SageMaker Clarify Model Explainability",
          "section": "4.2",
          "bullets": [
            {
              "text": "**Feature importance:** Clarify measures how much each input feature contributes to predictions, using Shapley values (SHAP).",
              "indent": 0
            },
            {
              "text": "**Global and local:** Explanations cover the model's overall behavior and individual predictions.",
              "indent": 0
            },
            {
              "text": "**Supported data:** Tabular data, computer vision, and natural language processing models.",
              "indent": 0
            },
            {
              "text": "**Experiments:** Results can be tracked with SageMaker Experiments, so explanations can be compared across model versions.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s26.svg",
          "examObjectives": [
            "4.2.1",
            "4.2.2"
          ]
        },
        {
          "id": "m4-s27",
          "title": "What Is Human-Centered AI?",
          "section": "4.2",
          "bullets": [
            {
              "text": "**People first:** Design starts from the needs and values of the people who use or are affected by the system.",
              "indent": 0
            },
            {
              "text": "**Diverse perspectives:** Include different backgrounds and expertise in design, testing, and review.",
              "indent": 0
            },
            {
              "text": "**Assist, not replace:** The system strengthens human abilities and keeps people responsible for important decisions.",
              "indent": 0
            },
            {
              "text": "**Built on responsible AI:** Transparency, explainability, fairness, and privacy are requirements, not extras.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s27.svg",
          "examObjectives": [
            "4.2.4"
          ]
        },
        {
          "id": "m4-s28",
          "title": "Human-Centered Design for Explainable AI",
          "section": "4.2",
          "bullets": [
            {
              "text": "**AI decision transparency:** Show users what the system decided, the main reasons, and how confident it is.",
              "indent": 0
            },
            {
              "text": "**User-feedback mechanisms:** Let users rate, correct, or dispute results in the place where they see them.",
              "indent": 0
            },
            {
              "text": "**Human control:** Make it easy to override a decision or ask for human review.",
              "indent": 0
            },
            {
              "text": "**Close the loop:** Feed reviewed feedback into evaluation and retraining, and tell users when their input changed something.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s28.svg",
          "examObjectives": [
            "4.2.4"
          ]
        },
        {
          "id": "m4-s29",
          "title": "Amazon Augmented AI (Amazon A2I)",
          "section": "4.2",
          "bullets": [
            {
              "text": "**Human review for predictions:** An AWS AI service or your own model makes predictions, and Amazon A2I adds a human review step.",
              "indent": 0
            },
            {
              "text": "**High confidence:** Predictions above your threshold go straight to the client application.",
              "indent": 0
            },
            {
              "text": "**Low confidence:** Predictions below the threshold go to human reviewers, and their answers are combined and stored in Amazon S3.",
              "indent": 0
            },
            {
              "text": "**Improvement:** Reviewed results can be added to the training data to improve the model over time.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s29.svg",
          "examObjectives": [
            "4.2.4",
            "4.1.7"
          ]
        },
        {
          "id": "m4-s30",
          "title": "Reinforcement Learning from Human Feedback (RLHF)",
          "section": "4.2",
          "bullets": [
            {
              "text": "**Step 1, collect preferences:** The initial model writes several responses to each prompt, and people rank them.",
              "indent": 0
            },
            {
              "text": "**Step 2, train a reward model:** The rankings train a separate model that scores how much people would prefer a response.",
              "indent": 0
            },
            {
              "text": "**Step 3, tune the policy:** The language model is fine-tuned with reinforcement learning to produce responses the reward model scores highly.",
              "indent": 0
            },
            {
              "text": "**Result:** An aligned model whose answers better match human preferences for helpfulness and safety.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s30.svg",
          "examObjectives": [
            "4.2.4"
          ]
        },
        {
          "id": "m4-s31",
          "title": "Amazon SageMaker Ground Truth for Human Preferences",
          "section": "4.2",
          "bullets": [
            {
              "text": "**Ranking tasks:** Human workers compare several model responses and rank or classify them, for example by clarity.",
              "indent": 0
            },
            {
              "text": "**Training data:** The comparison and ranking results become preference data for training or fine-tuning a model.",
              "indent": 0
            },
            {
              "text": "**Workforce options:** Use your own employees, vendor workers, or a public workforce, with built-in labeling workflows.",
              "indent": 0
            },
            {
              "text": "**Ground Truth or A2I:** Ground Truth builds data for training a model; Amazon A2I reviews predictions from a model already in use.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m4_s31.svg",
          "examObjectives": [
            "4.2.4"
          ]
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "m3-s2",
            "m3-s8",
            "m3-s10",
            "m4-s17"
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
            "m4-s5",
            "m4-s6",
            "m4-s7",
            "m4-s13",
            "m4-s14"
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
        "Explain methods to secure AI systems.",
        "Recognize governance and compliance regulations for AI systems."
      ],
      "sections": [
        {
          "id": "5.1",
          "title": "Explain methods to secure AI systems."
        },
        {
          "id": "5.2",
          "title": "Recognize governance and compliance regulations for AI systems."
        }
      ],
      "slides": [
        {
          "id": "m5-s1",
          "title": "Task Statement 5.1: Securing AI Systems",
          "section": "5.1",
          "bullets": [
            {
              "text": "**What this section covers:** Who is responsible for which security tasks, and the AWS controls for identity, encryption, sensitive data, logging, and networks.",
              "indent": 0
            },
            {
              "text": "**AI-specific threats:** Poisoned training data, prompt injection, model theft, and leaked outputs, with the mitigations and monitoring that reduce them.",
              "indent": 0
            },
            {
              "text": "**Documenting origins:** Versioning, lineage, model registries, model cards, and source citations that show where data and models came from.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s2",
          "title": "The AWS Shared Responsibility Model",
          "section": "5.1",
          "bullets": [
            {
              "text": "**AWS: security of the cloud:** AWS protects the hardware, software, networking, and facilities that run its services, across Regions, Availability Zones, and edge locations.",
              "indent": 0
            },
            {
              "text": "**Customer: security in the cloud:** You protect your data, applications, identities, and access policies, and you configure operating systems, networks, and firewalls where you manage them.",
              "indent": 0
            },
            {
              "text": "**Encryption choices are yours:** You decide on client-side encryption, server-side encryption, and protection of network traffic.",
              "indent": 0
            },
            {
              "text": "**For AI workloads:** AWS secures the managed AI service; you remain responsible for training data, prompts, model access, and how outputs are used.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s2.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s3",
          "title": "AWS IAM: Who Can Access What",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Purpose:** AWS Identity and Access Management (IAM) controls access to AWS resources across your organization.",
              "indent": 0
            },
            {
              "text": "**Who:** Identities for people in your workforce and for workloads such as applications and services.",
              "indent": 0
            },
            {
              "text": "**Can access:** Permissions defined in IAM policies, which allow or deny specific actions.",
              "indent": 0
            },
            {
              "text": "**What:** The AWS resources those actions apply to, such as an S3 bucket or a SageMaker endpoint.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s3.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s4",
          "title": "IAM Features",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Global and integrated:** IAM is a global service and works with almost every AWS service.",
              "indent": 0
            },
            {
              "text": "**Shared access:** Grant other people access to resources in your AWS account without sharing passwords or keys.",
              "indent": 0
            },
            {
              "text": "**Multi-factor authentication (MFA):** Require a second factor, such as an authenticator app or security key, in addition to a password.",
              "indent": 0
            },
            {
              "text": "**Identity federation and cost:** People can sign in with an existing corporate identity, and IAM has no additional charge.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s4.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s5",
          "title": "IAM Users",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Definition:** An IAM user is an identity for one person or application that interacts with AWS, with its own long-term credentials.",
              "indent": 0
            },
            {
              "text": "**One identity per person:** When IAM users are used, each person gets their own user, never a shared one, so actions can be traced.",
              "indent": 0
            },
            {
              "text": "**Current guidance:** AWS recommends federated sign-in through AWS IAM Identity Center for people, because it issues temporary credentials.",
              "indent": 0
            },
            {
              "text": "**Protect credentials:** Turn on MFA and rotate or remove access keys that are no longer needed.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s5.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s6",
          "title": "IAM Policies and Least Privilege",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Definition:** An IAM policy is a JSON document that allows or denies actions on AWS resources.",
              "indent": 0
            },
            {
              "text": "**Structure:** Each statement has an effect (Allow or Deny), the actions, and the resources they apply to.",
              "indent": 0
            },
            {
              "text": "**Example:** A policy that lets an operator start and stop EC2 instances, and nothing else.",
              "indent": 0
            },
            {
              "text": "**Least privilege:** Grant only the permissions a task needs, and remove permissions that are no longer used.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s6.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s7",
          "title": "Resource-Based Policies",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Attached to the resource:** A resource-based policy is attached to a resource, such as an S3 bucket, instead of to an identity.",
              "indent": 0
            },
            {
              "text": "**Principal element:** It names who is allowed or denied, such as a specific IAM user, role, or another AWS account.",
              "indent": 0
            },
            {
              "text": "**Example:** A bucket policy that gives one data engineer access to one training-data bucket.",
              "indent": 0
            },
            {
              "text": "**Least privilege applies here too:** Limit both the principals and the actions, and avoid wildcards such as s3:* where possible.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s7.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s8",
          "title": "S3 Block Public Access",
          "section": "5.1",
          "bullets": [
            {
              "text": "**On by default:** Block Public Access is turned on for all new S3 buckets.",
              "indent": 0
            },
            {
              "text": "**Account level:** It can be turned on for every bucket in an AWS account at once.",
              "indent": 0
            },
            {
              "text": "**Overrides grants:** When it is on, it overrides bucket policies and access control lists that would make data public.",
              "indent": 0
            },
            {
              "text": "**Why it matters for AI:** Training data, prompts, and model artifacts in S3 stay private unless you deliberately change the setting.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s8.svg",
          "examObjectives": [
            "5.1.1",
            "5.1.4"
          ]
        },
        {
          "id": "m5-s9",
          "title": "IAM Groups",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Definition:** An IAM group is a collection of IAM users that share the policies attached to the group.",
              "indent": 0
            },
            {
              "text": "**Best practice:** Attach policies to groups, not to individual users, so permissions stay consistent.",
              "indent": 0
            },
            {
              "text": "**Change in one place:** Moving a person to a different group changes their permissions without editing policies.",
              "indent": 0
            },
            {
              "text": "**Example:** A data-science group with access to SageMaker notebooks and the project's S3 buckets.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s9.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s10",
          "title": "IAM Roles",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Definition:** An IAM role is an identity with permissions that a person or AWS service can assume for a limited time.",
              "indent": 0
            },
            {
              "text": "**Temporary credentials:** Assuming a role returns credentials that expire, which is safer than long-lived access keys.",
              "indent": 0
            },
            {
              "text": "**Used by services:** A SageMaker training job assumes a role to read training data and write model artifacts.",
              "indent": 0
            },
            {
              "text": "**Best practice:** Use roles to grant access instead of storing long-term keys in code or notebooks.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s10.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s11",
          "title": "Amazon SageMaker Role Manager",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Faster role creation:** Builds IAM roles for machine learning work from guided choices instead of hand-written policies.",
              "indent": 0
            },
            {
              "text": "**Three personas:** Data scientist, machine learning operations (MLOps), and SageMaker compute.",
              "indent": 0
            },
            {
              "text": "**Activity-based permissions:** You select the ML activities a persona performs, and Role Manager adds the matching permissions.",
              "indent": 0
            },
            {
              "text": "**Least privilege by design:** Each role receives the permissions its activities need, which you can then refine.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s11.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s12",
          "title": "Encryption at Rest",
          "section": "5.1",
          "bullets": [
            {
              "text": "**What it protects:** Stored data cannot be read without the encryption key.",
              "indent": 0
            },
            {
              "text": "**How it works:** An algorithm and a data encryption key turn plaintext into ciphertext before it is written to storage.",
              "indent": 0
            },
            {
              "text": "**Best practice:** Use server-side encryption (SSE) wherever the service supports it.",
              "indent": 0
            },
            {
              "text": "**SageMaker default:** ML storage volumes used by notebook instances, processing and training jobs, and endpoints are encrypted by default.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s12.svg",
          "examObjectives": [
            "5.1.1",
            "5.1.4"
          ]
        },
        {
          "id": "m5-s13",
          "title": "AWS Key Management Service (AWS KMS)",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Managed keys:** Create and control the encryption keys used by AWS services in your account.",
              "indent": 0
            },
            {
              "text": "**Two common key types:** AWS managed keys are created and rotated by AWS; customer managed keys give you control of policies, rotation, and deletion.",
              "indent": 0
            },
            {
              "text": "**Access control:** Key policies and IAM decide who can use each key, and use of keys is recorded in AWS CloudTrail.",
              "indent": 0
            },
            {
              "text": "**Best practice:** Specify a KMS key for default encryption of buckets and ML resources.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s13.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s14",
          "title": "Encryption in Transit",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Protected connections:** AWS service endpoints support TLS, so requests to services such as SageMaker travel over encrypted connections.",
              "indent": 0
            },
            {
              "text": "**Distributed training:** You can also encrypt traffic between the instances of a distributed training or tuning job.",
              "indent": 0
            },
            {
              "text": "**Trade-off:** Inter-node encryption adds processing time, so turn it on when the data is highly sensitive.",
              "indent": 0
            },
            {
              "text": "**Together with encryption at rest:** Data is protected both where it is stored and while it moves.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s14.svg",
          "examObjectives": [
            "5.1.1",
            "5.1.4"
          ]
        },
        {
          "id": "m5-s15",
          "title": "Amazon Macie",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Inventory:** Macie keeps an inventory of your S3 buckets, including public access, sharing, and encryption settings.",
              "indent": 0
            },
            {
              "text": "**Sensitive data discovery:** Uses machine learning and pattern matching to find sensitive data such as personally identifiable information (PII).",
              "indent": 0
            },
            {
              "text": "**Findings:** Reports what it finds so you can respond before the data is used.",
              "indent": 0
            },
            {
              "text": "**Best practice for AI:** Remove or mask PII when data is ingested, before it reaches training or retrieval.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s15.svg",
          "examObjectives": [
            "5.1.1",
            "5.1.3"
          ]
        },
        {
          "id": "m5-s16",
          "title": "Logging with AWS CloudTrail",
          "section": "5.1",
          "bullets": [
            {
              "text": "**API activity:** CloudTrail records API calls made by users, roles, and services in your AWS account.",
              "indent": 0
            },
            {
              "text": "**Delivery:** A trail delivers log files to an S3 bucket you choose, where they can be kept for audits.",
              "indent": 0
            },
            {
              "text": "**SageMaker integration:** Calls such as creating training jobs or endpoints are captured.",
              "indent": 0
            },
            {
              "text": "**Use:** Investigate who changed what and when, and support compliance reviews.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s16.svg",
          "examObjectives": [
            "5.1.1",
            "5.1.4"
          ]
        },
        {
          "id": "m5-s17",
          "title": "SageMaker and VPCs",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Your network:** Configure a virtual private cloud (VPC) with private subnets in your own AWS account.",
              "indent": 0
            },
            {
              "text": "**VPC-only access:** Set the SageMaker Studio domain to VPC-only network access so notebook traffic flows through your VPC.",
              "indent": 0
            },
            {
              "text": "**No direct internet:** Turn off direct internet access, so traffic is controlled by your security groups and routes.",
              "indent": 0
            },
            {
              "text": "**How it connects:** SageMaker places an elastic network interface in your private subnet for the managed notebook.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s17.svg",
          "examObjectives": [
            "5.1.1",
            "5.1.4"
          ]
        },
        {
          "id": "m5-s18",
          "title": "VPC Interface Endpoints (AWS PrivateLink)",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Private path to services:** Interface endpoints let resources in your VPC reach AWS services without traversing the public internet.",
              "indent": 0
            },
            {
              "text": "**Typical endpoints for ML:** The SageMaker API, SageMaker Runtime, Amazon S3, and Amazon CloudWatch Logs.",
              "indent": 0
            },
            {
              "text": "**Fits VPC-only notebooks:** Notebooks without internet access can still read data, call the model, and write logs.",
              "indent": 0
            },
            {
              "text": "**Control:** Endpoint policies can limit which actions and resources are reachable through each endpoint.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s18.svg",
          "examObjectives": [
            "5.1.1",
            "5.1.4"
          ]
        },
        {
          "id": "m5-s19",
          "title": "AI System Vulnerabilities",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Training data:** Poisoned or fake data can teach the model wrong behavior.",
              "indent": 0
            },
            {
              "text": "**Input and output data:** Manipulated inputs can mislead the model, and outputs can leak sensitive information.",
              "indent": 0
            },
            {
              "text": "**Models:** Attackers may try model inversion, which reconstructs training data from outputs, or model theft, which copies the model.",
              "indent": 0
            },
            {
              "text": "**Large language models:** Prompt injection hides instructions in input text to make the model ignore its rules.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s19.svg",
          "examObjectives": [
            "5.1.4"
          ]
        },
        {
          "id": "m5-s20",
          "title": "Mitigating AI Vulnerabilities",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Protect:** Secure and limit access to training data, encrypt data and model artifacts, and restrict who can call the model.",
              "indent": 0
            },
            {
              "text": "**Validate:** Validate and sanitize input data, sanitize outputs, and train on adversarial examples to improve robustness.",
              "indent": 0
            },
            {
              "text": "**Monitor:** Retrain regularly and validate performance, watch data quality for anomalies, and track predictions for drift.",
              "indent": 0
            },
            {
              "text": "**Layered defense:** No single control stops every attack, so combine them.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s20.svg",
          "examObjectives": [
            "5.1.4"
          ]
        },
        {
          "id": "m5-s21",
          "title": "Monitoring Data Quality with SageMaker Model Monitor",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Capture data:** Record the requests sent to an endpoint and the responses it returns.",
              "indent": 0
            },
            {
              "text": "**Create a baseline:** Compute statistics and constraints from the training data.",
              "indent": 0
            },
            {
              "text": "**Schedule monitoring jobs:** Compare captured data with the baseline on a regular schedule.",
              "indent": 0
            },
            {
              "text": "**Evaluate statistics:** Report violations, such as missing values or shifted distributions, so you can act before quality drops.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s21.svg",
          "examObjectives": [
            "5.1.4"
          ]
        },
        {
          "id": "m5-s22",
          "title": "Monitoring Model Quality",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Capture and baseline:** Record predictions and create a baseline of expected model quality.",
              "indent": 0
            },
            {
              "text": "**Model quality jobs:** Schedule jobs that measure quality metrics such as accuracy or error.",
              "indent": 0
            },
            {
              "text": "**Merge with ground truth:** Combine predictions with the true labels when they become available.",
              "indent": 0
            },
            {
              "text": "**Evaluate metrics:** Alert when quality falls below the baseline, which signals drift or a data problem.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s22.svg",
          "examObjectives": [
            "5.1.4"
          ]
        },
        {
          "id": "m5-s23",
          "title": "Version Control for ML",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Code:** Track changes in a Git repository such as GitHub, GitLab, or Bitbucket.",
              "indent": 0
            },
            {
              "text": "**Datasets and containers:** Version datasets in Amazon S3 (for example, with S3 Versioning or partitions), and container images in Amazon Elastic Container Registry (Amazon ECR).",
              "indent": 0
            },
            {
              "text": "**Training jobs, models, and endpoints:** Record which data, code, and settings produced each model, and which model each endpoint serves.",
              "indent": 0
            },
            {
              "text": "**Why:** Versions let you reproduce results, compare changes, and roll back.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s23.svg",
          "examObjectives": [
            "5.1.2"
          ]
        },
        {
          "id": "m5-s24",
          "title": "SageMaker Model Registry",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Catalog for production:** Organize models into model groups, with a new version for each trained model.",
              "indent": 0
            },
            {
              "text": "**Version details:** View the metrics, artifacts, and training information for each version.",
              "indent": 0
            },
            {
              "text": "**Metadata:** Attach information such as the business owner or intended use.",
              "indent": 0
            },
            {
              "text": "**Approval status:** Mark versions as approved, pending, or rejected, and allow only approved versions to be deployed.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s24.svg",
          "examObjectives": [
            "5.1.2"
          ]
        },
        {
          "id": "m5-s25",
          "title": "SageMaker Model Cards for Governance",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Intended use and risk:** Document how the model should be used and its risk rating.",
              "indent": 0
            },
            {
              "text": "**Audit support:** Record how the model was trained and how it performed in evaluation.",
              "indent": 0
            },
            {
              "text": "**Business context:** Explain which business goal the model supports.",
              "indent": 0
            },
            {
              "text": "**History:** Each change creates a new version of the card, so you keep a record over time.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s25.svg",
          "examObjectives": [
            "5.1.2"
          ]
        },
        {
          "id": "m5-s26",
          "title": "SageMaker ML Lineage Tracking",
          "section": "5.1",
          "bullets": [
            {
              "text": "**End-to-end record:** Automatically tracks how data, training jobs, models, and endpoints are connected.",
              "indent": 0
            },
            {
              "text": "**Entities:** Artifacts (such as datasets, images, and models), actions, contexts (such as an endpoint), and trial components (such as a training job).",
              "indent": 0
            },
            {
              "text": "**Governance:** Answer questions such as which dataset trained the model behind this endpoint.",
              "indent": 0
            },
            {
              "text": "**Reproducibility:** Rebuild a workflow from its recorded inputs and settings.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s26.svg",
          "examObjectives": [
            "5.1.2"
          ]
        },
        {
          "id": "m5-s27",
          "title": "Feature Lineage with SageMaker Feature Store",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Features:** The data properties a model uses as inputs, such as a customer's average order value.",
              "indent": 0
            },
            {
              "text": "**Feature Store:** A central repository for creating, storing, and sharing features.",
              "indent": 0
            },
            {
              "text": "**Lineage:** View the lineage of a feature group to see where its data came from.",
              "indent": 0
            },
            {
              "text": "**Point-in-time queries:** Retrieve each feature's value as it was at a specific time, which prevents training on information from the future.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s27.svg",
          "examObjectives": [
            "5.1.2"
          ]
        },
        {
          "id": "m5-s28",
          "title": "SageMaker Model Dashboard",
          "section": "5.1",
          "bullets": [
            {
              "text": "**One portal:** A central view of your models in the SageMaker console.",
              "indent": 0
            },
            {
              "text": "**Monitoring status:** See the status of Model Monitor jobs and any violations.",
              "indent": 0
            },
            {
              "text": "**Lineage:** Open a model's lineage graph.",
              "indent": 0
            },
            {
              "text": "**Endpoint performance:** View metrics for the endpoints that serve each model.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s28.svg",
          "examObjectives": [
            "5.1.2",
            "5.1.4"
          ]
        },
        {
          "id": "m5-s29",
          "title": "Securing Generative AI with Amazon Bedrock Guardrails",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Prompt attack filter:** Detects prompt injection and jailbreak attempts in user input.",
              "indent": 0
            },
            {
              "text": "**Sensitive information filters:** Block or mask PII and custom patterns in prompts and responses to prevent data leakage.",
              "indent": 0
            },
            {
              "text": "**Content and topic policies:** Filter toxic content and refuse denied topics.",
              "indent": 0
            },
            {
              "text": "**Beyond Bedrock models:** The ApplyGuardrail API can evaluate text without invoking a model, so the same policies can check other sources.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s29.svg",
          "examObjectives": [
            "5.1.1",
            "5.1.4"
          ]
        },
        {
          "id": "m5-s30",
          "title": "AgentCore Identity and Policy in AgentCore",
          "section": "5.1",
          "bullets": [
            {
              "text": "**AgentCore Identity:** Gives each agent an identity, verifies who is calling the agent (inbound authentication), and manages the credentials the agent uses to reach tools and services (outbound authentication).",
              "indent": 0
            },
            {
              "text": "**Token vault:** Stores OAuth tokens and API keys encrypted with AWS KMS, and lets an agent act only on behalf of the user it serves.",
              "indent": 0
            },
            {
              "text": "**Policy in AgentCore:** Checks every tool call that passes through AgentCore Gateway against policies written in Cedar.",
              "indent": 0
            },
            {
              "text": "**Default deny:** A call is refused unless a policy permits it, and an explicit forbid always wins. Policies can be drafted in natural language and converted to Cedar.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s30.svg",
          "examObjectives": [
            "5.1.1"
          ]
        },
        {
          "id": "m5-s31",
          "title": "Security and Privacy Considerations for AI Applications",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Application security and infrastructure protection:** Secure the code and APIs around the model, and protect networks with VPCs, PrivateLink, and web application firewalls.",
              "indent": 0
            },
            {
              "text": "**Threat detection and vulnerability management:** Amazon GuardDuty detects suspicious activity; Amazon Inspector finds software vulnerabilities.",
              "indent": 0
            },
            {
              "text": "**Prompt injection and data leakage prevention:** Treat user input as untrusted, limit what the model can access, and keep secrets out of prompts.",
              "indent": 0
            },
            {
              "text": "**Encryption, output filtering, and toxicity:** Encrypt data at rest and in transit, and validate and filter outputs before users see them.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s31.svg",
          "examObjectives": [
            "5.1.4"
          ]
        },
        {
          "id": "m5-s32",
          "title": "Audit Trails for AI Interactions",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Control-plane activity:** AWS CloudTrail records API calls, such as who created a model, agent, or guardrail.",
              "indent": 0
            },
            {
              "text": "**Model invocation logging:** Amazon Bedrock can log the full request and response of model calls to Amazon CloudWatch Logs, Amazon S3, or both. It is off until you turn it on.",
              "indent": 0
            },
            {
              "text": "**What to keep:** Who asked, which model answered, the input and output, and any guardrail interventions.",
              "indent": 0
            },
            {
              "text": "**Use:** Investigations, compliance evidence, and data for evaluating quality over time. Protect these logs, because they can contain sensitive content.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s32.svg",
          "examObjectives": [
            "5.1.4"
          ]
        },
        {
          "id": "m5-s33",
          "title": "Secure Data Engineering Practices",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Assess data quality:** Check completeness, accuracy, and freshness before data is used for training or retrieval.",
              "indent": 0
            },
            {
              "text": "**Privacy-enhancing technologies:** Masking, tokenization, anonymization, and differential privacy reduce exposure of personal data.",
              "indent": 0
            },
            {
              "text": "**Data access control:** Grant access by role with least privilege, and review it regularly.",
              "indent": 0
            },
            {
              "text": "**Data integrity:** Use versioning, checksums, and change logs so you can detect tampering and trace changes.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s33.svg",
          "examObjectives": [
            "5.1.3"
          ]
        },
        {
          "id": "m5-s34",
          "title": "Source Citation and Documenting Data Origins",
          "section": "5.1",
          "bullets": [
            {
              "text": "**Source citation:** RAG applications can return the documents behind each answer. Amazon Bedrock Knowledge Bases provides citations with its responses.",
              "indent": 0
            },
            {
              "text": "**Data lineage:** Record where data came from and how it was transformed before it trained or grounded a model.",
              "indent": 0
            },
            {
              "text": "**Data cataloging:** A catalog such as the AWS Glue Data Catalog describes each dataset so people can find and understand it.",
              "indent": 0
            },
            {
              "text": "**Model documentation:** SageMaker Model Cards record the data, training, and evaluation behind each model.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s34.svg",
          "examObjectives": [
            "5.1.2"
          ]
        },
        {
          "id": "m5-s35",
          "title": "Detecting Hallucinations and Grounding Answers",
          "section": "5.1",
          "bullets": [
            {
              "text": "**RAG grounding:** Retrieve trusted passages and instruct the model to answer only from them.",
              "indent": 0
            },
            {
              "text": "**Grounding checks:** Bedrock Guardrails contextual grounding check scores whether a response is supported by the source and relevant to the question, and blocks responses below your threshold.",
              "indent": 0
            },
            {
              "text": "**Output validation:** Check answers against rules, schemas, or known facts. Automated Reasoning checks in Bedrock Guardrails validate responses against logical rules you define.",
              "indent": 0
            },
            {
              "text": "**Confidence scoring:** Route low-confidence or unsupported answers to a fallback message or a human reviewer.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s35.svg",
          "examObjectives": [
            "5.1.5"
          ]
        },
        {
          "id": "m5-s36",
          "title": "Task Statement 5.2: Governance and Compliance for AI Systems",
          "section": "5.2",
          "bullets": [
            {
              "text": "**What this section covers:** AWS services that provide compliance evidence and check configurations, and the standards emerging for AI.",
              "indent": 0
            },
            {
              "text": "**Data governance:** How to curate, understand, and protect data, including lifecycle, residency, and retention.",
              "indent": 0
            },
            {
              "text": "**Governance processes:** Scoping generative AI use, writing policies, and reviewing them on a regular cadence.",
              "indent": 0
            }
          ],
          "visualization": "",
          "examObjectives": [
            "5.2.1"
          ]
        },
        {
          "id": "m5-s37",
          "title": "AWS Artifact",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Compliance reports on demand:** Download AWS security and compliance reports, such as SOC and ISO reports.",
              "indent": 0
            },
            {
              "text": "**Agreements:** Review, accept, and manage agreements with AWS, such as a Business Associate Addendum (BAA).",
              "indent": 0
            },
            {
              "text": "**Third-party reports:** Access compliance reports from independent software vendors that sell on AWS Marketplace.",
              "indent": 0
            },
            {
              "text": "**Use:** Show auditors how AWS meets its side of the shared responsibility model.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s37.svg",
          "examObjectives": [
            "5.2.1"
          ]
        },
        {
          "id": "m5-s38",
          "title": "AWS Compliance Resources",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Customer stories:** See how companies in regulated industries meet compliance requirements on AWS.",
              "indent": 0
            },
            {
              "text": "**Technical papers and documentation:** Guidance on mapping AWS services to specific regulations and frameworks.",
              "indent": 0
            },
            {
              "text": "**Auditor learning path:** Training that helps auditors and compliance teams understand how to audit AWS workloads.",
              "indent": 0
            },
            {
              "text": "**Use:** Plan your own controls before an audit, not after it.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s38.svg",
          "examObjectives": [
            "5.2.1"
          ]
        },
        {
          "id": "m5-s39",
          "title": "Emerging AI Compliance Standards",
          "section": "5.2",
          "bullets": [
            {
              "text": "**ISO/IEC 42001 and ISO/IEC 23894:** International standards for an AI management system and for AI risk management.",
              "indent": 0
            },
            {
              "text": "**EU Artificial Intelligence Act:** Sorts AI uses by risk. Unacceptable-risk uses are banned, high-risk uses must meet legal requirements, and lower-risk uses have lighter or no obligations.",
              "indent": 0
            },
            {
              "text": "**NIST AI Risk Management Framework (AI RMF):** Organizes AI risk work into four functions: Govern, Map, Measure, and Manage.",
              "indent": 0
            },
            {
              "text": "**Why they matter:** Customers and regulators increasingly expect evidence that AI risks are assessed and managed.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s39.svg",
          "examObjectives": [
            "5.2.3"
          ]
        },
        {
          "id": "m5-s40",
          "title": "AI Risk Management: Likelihood and Severity",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Risk:** A combination of how likely a harmful event is and how severe its consequences would be.",
              "indent": 0
            },
            {
              "text": "**Step 1:** Define the use case and the stakeholders it affects.",
              "indent": 0
            },
            {
              "text": "**Step 2:** Identify potentially harmful events, and evaluate inherent risk (before controls) and residual risk (after controls).",
              "indent": 0
            },
            {
              "text": "**Step 3:** Summarize risk levels for every risk dimension and record conclusions, such as accept, reduce, or avoid.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s40.svg",
          "examObjectives": [
            "5.2.3"
          ]
        },
        {
          "id": "m5-s41",
          "title": "The Proposed Algorithmic Accountability Act",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Status:** A bill introduced in the US Congress several times, most recently in 2023. It has not been enacted.",
              "indent": 0
            },
            {
              "text": "**Intent:** Require companies to assess the impact of automated decision systems.",
              "indent": 0
            },
            {
              "text": "**Transparency and explainability:** Favor interpretable algorithms, or use model-agnostic methods to explain complex models.",
              "indent": 0
            },
            {
              "text": "**Monitor for bias:** Measure and track bias, for example with Amazon SageMaker Clarify.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s41.svg",
          "examObjectives": [
            "5.2.3"
          ]
        },
        {
          "id": "m5-s42",
          "title": "AWS Audit Manager",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Continuous auditing:** Continually collects evidence about how you use AWS to assess compliance.",
              "indent": 0
            },
            {
              "text": "**Frameworks:** Start from a prebuilt framework, such as one for generative AI best practices, or build a custom framework.",
              "indent": 0
            },
            {
              "text": "**Evidence collection:** Gathers evidence automatically from sources such as AWS CloudTrail and AWS Config.",
              "indent": 0
            },
            {
              "text": "**Reports:** Organizes evidence into assessment reports for auditors.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s42.svg",
          "examObjectives": [
            "5.2.1"
          ]
        },
        {
          "id": "m5-s43",
          "title": "AWS Config",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Configuration history:** Continuously records the configuration of your AWS resources and how it changes.",
              "indent": 0
            },
            {
              "text": "**Config rules:** Evaluate resources against the settings you require, such as encrypted storage.",
              "indent": 0
            },
            {
              "text": "**Conformance packs:** Collections of rules, including operational best practices for AI and ML and security best practices for SageMaker.",
              "indent": 0
            },
            {
              "text": "**Remediation:** Fix noncompliant resources automatically with AWS Systems Manager Automation documents.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s43.svg",
          "examObjectives": [
            "5.2.1"
          ]
        },
        {
          "id": "m5-s44",
          "title": "Amazon Inspector",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Automated assessments:** Continuously scans workloads such as Amazon EC2 instances, container images in Amazon ECR, and AWS Lambda functions.",
              "indent": 0
            },
            {
              "text": "**Findings:** Identifies software vulnerabilities and unintended network exposure.",
              "indent": 0
            },
            {
              "text": "**Recommendations:** Each finding includes guidance on how to fix the issue.",
              "indent": 0
            },
            {
              "text": "**Prioritization:** Findings are scored by severity so teams fix the most serious issues first.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s44.svg",
          "examObjectives": [
            "5.2.1",
            "5.1.4"
          ]
        },
        {
          "id": "m5-s45",
          "title": "AWS Trusted Advisor",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Continuous checks:** Evaluates your AWS account against best practices and recommends improvements.",
              "indent": 0
            },
            {
              "text": "**Categories:** Cost optimization, performance, security, fault tolerance, service limits, and operational excellence.",
              "indent": 0
            },
            {
              "text": "**Example:** Shows potential monthly savings from idle or oversized resources.",
              "indent": 0
            },
            {
              "text": "**Governance use:** Security checks flag issues such as open ports or MFA not enabled for the root user.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s45.svg",
          "examObjectives": [
            "5.2.1"
          ]
        },
        {
          "id": "m5-s46",
          "title": "Data Governance: Curate, Understand, Protect",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Curate:** Keep data accurate, complete, and consistent.",
              "indent": 0
            },
            {
              "text": "**Understand:** Help users discover data and know what it means and where it came from.",
              "indent": 0
            },
            {
              "text": "**Protect:** Balance privacy and security with giving the right people access.",
              "indent": 0
            },
            {
              "text": "**Result:** Data that teams can trust for training, retrieval, and decisions.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s46.svg",
          "examObjectives": [
            "5.2.2"
          ]
        },
        {
          "id": "m5-s47",
          "title": "Data Governance Strategies and Roles",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Align to business objectives:** Start with the data domains that the most important business initiatives depend on.",
              "indent": 0
            },
            {
              "text": "**Data owner:** Accountable for a data domain and decides who may use it and how.",
              "indent": 0
            },
            {
              "text": "**Data steward:** Manages data quality, definitions, and policy day to day.",
              "indent": 0
            },
            {
              "text": "**IT roles:** Build and run the platforms, security controls, and pipelines that enforce the policies.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s47.svg",
          "examObjectives": [
            "5.2.2"
          ]
        },
        {
          "id": "m5-s48",
          "title": "Discovery and Understanding",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Data profiling:** Systematically examine data to find problems and understand its characteristics.",
              "indent": 0
            },
            {
              "text": "**Data catalog:** Make datasets findable for the people who need them, with descriptions and owners.",
              "indent": 0
            },
            {
              "text": "**Data lineage:** Document where data originated and how it was moved, transformed, and stored.",
              "indent": 0
            },
            {
              "text": "**Together:** Users can find the right data and judge whether it is fit for their use.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s48.svg",
          "examObjectives": [
            "5.2.2"
          ]
        },
        {
          "id": "m5-s49",
          "title": "AWS Glue DataBrew for Data Governance",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Visual data preparation:** Clean and normalize data without writing code.",
              "indent": 0
            },
            {
              "text": "**Data profiling:** Profile jobs report data characteristics such as value distributions and missing values.",
              "indent": 0
            },
            {
              "text": "**Data quality rules:** Define rules and check datasets against them.",
              "indent": 0
            },
            {
              "text": "**Data lineage:** Shows how data flowed from the original source through each job to the cleaned output.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s49.svg",
          "examObjectives": [
            "5.2.2",
            "5.1.3"
          ]
        },
        {
          "id": "m5-s50",
          "title": "Curation: Quality, Integration, and Management",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Data quality management:** Fix the issues that profiling found, such as duplicates and invalid values.",
              "indent": 0
            },
            {
              "text": "**Data integration:** Collect and merge data from a variety of sources.",
              "indent": 0
            },
            {
              "text": "**Data management:** Reconcile data stored in different systems so they agree.",
              "indent": 0
            },
            {
              "text": "**Result:** Consistent, reliable data for analysis and model training.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s50.svg",
          "examObjectives": [
            "5.2.2"
          ]
        },
        {
          "id": "m5-s51",
          "title": "AWS Glue Data Catalog and AWS Glue Data Quality",
          "section": "5.2",
          "bullets": [
            {
              "text": "**AWS Glue Data Catalog:** Stores metadata about datasets, such as schemas and locations, from many data sources.",
              "indent": 0
            },
            {
              "text": "**Discovery:** Crawlers can scan sources and add or update catalog entries automatically.",
              "indent": 0
            },
            {
              "text": "**AWS Glue Data Quality:** Recommends data quality rules and checks datasets against them.",
              "indent": 0
            },
            {
              "text": "**Anomaly detection:** Detects unusual changes in data so problems are caught before they reach models.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s51.svg",
          "examObjectives": [
            "5.2.2",
            "5.1.2"
          ]
        },
        {
          "id": "m5-s52",
          "title": "Protection: Security, Compliance, and Lifecycle",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Data security:** Define who can access data and when they should have access.",
              "indent": 0
            },
            {
              "text": "**Data compliance:** Know which standards and regulations apply to the data and confirm you meet them.",
              "indent": 0
            },
            {
              "text": "**Data lifecycle management:** Decide how long data must be kept and where it should be stored.",
              "indent": 0
            },
            {
              "text": "**Result:** Data is protected for its whole life, from collection to deletion.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s52.svg",
          "examObjectives": [
            "5.2.2"
          ]
        },
        {
          "id": "m5-s53",
          "title": "Balancing Access Control and Data Availability",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Access controls:** Protect security and privacy by limiting who can use data.",
              "indent": 0
            },
            {
              "text": "**Data availability:** Gives authorized people the data they need for innovation and insights.",
              "indent": 0
            },
            {
              "text": "**Too much control:** Data ends up in silos that teams cannot use.",
              "indent": 0
            },
            {
              "text": "**Too much access:** Sensitive data is exposed. Good governance finds the balance.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s53.svg",
          "examObjectives": [
            "5.2.2"
          ]
        },
        {
          "id": "m5-s54",
          "title": "AWS Lake Formation",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Data lake governance:** Builds, secures, and manages data lakes stored in Amazon S3.",
              "indent": 0
            },
            {
              "text": "**Central catalog:** Organizes data assets so they can be discovered.",
              "indent": 0
            },
            {
              "text": "**Fine-grained access control:** Data stewards grant permissions at the database, table, column, row, or cell level.",
              "indent": 0
            },
            {
              "text": "**One place to manage access:** Permissions apply consistently across analytics and ML services that use the data lake.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s54.svg",
          "examObjectives": [
            "5.2.2"
          ]
        },
        {
          "id": "m5-s55",
          "title": "Amazon S3 Lifecycle Configuration",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Lifecycle rules:** Apply retention and compliance policies to objects automatically.",
              "indent": 0
            },
            {
              "text": "**Transitions:** Move data to lower-cost storage classes as it ages, such as S3 Standard-IA and the S3 Glacier storage classes.",
              "indent": 0
            },
            {
              "text": "**Expiration:** Delete data when it is no longer needed.",
              "indent": 0
            },
            {
              "text": "**S3 Intelligent-Tiering:** An alternative that moves objects between access tiers automatically based on use.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s55.svg",
          "examObjectives": [
            "5.2.2"
          ]
        },
        {
          "id": "m5-s56",
          "title": "Data Residency, Retention, Logging, and Monitoring",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Data residency:** Keep data in the AWS Regions that regulations or contracts require, and know where model providers process it.",
              "indent": 0
            },
            {
              "text": "**Retention:** Keep data, logs, and model artifacts as long as required, and delete them when the period ends.",
              "indent": 0
            },
            {
              "text": "**Logging:** Record access to data and AI interactions so you can show who used what.",
              "indent": 0
            },
            {
              "text": "**Monitoring and observation:** Watch data quality, access patterns, and model behavior continuously, not only during audits.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s56.svg",
          "examObjectives": [
            "5.2.2"
          ]
        },
        {
          "id": "m5-s57",
          "title": "Generative AI Security Scoping Matrix",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Scopes 1 and 2, buying:** Scope 1 is a public consumer application. Scope 2 is an enterprise application or software as a service (SaaS) with generative AI features.",
              "indent": 0
            },
            {
              "text": "**Scope 3, building on a pretrained model:** Your application calls a versioned foundation model, such as a base model in Amazon Bedrock.",
              "indent": 0
            },
            {
              "text": "**Scopes 4 and 5, your own model:** Scope 4 fine-tunes a model on your data; scope 5 trains a model from scratch.",
              "indent": 0
            },
            {
              "text": "**Security disciplines:** Governance and compliance, legal and privacy, risk management, controls, and resilience apply at every scope.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s57.svg",
          "examObjectives": [
            "5.2.3"
          ]
        },
        {
          "id": "m5-s58",
          "title": "Governance Grows with Scope",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Scope 1:** Write usage guidelines, train the workforce, monitor compliance, and define how outputs are validated.",
              "indent": 0
            },
            {
              "text": "**Scope 2:** Also understand the service's data flow, including any third parties, and align use with regulations.",
              "indent": 0
            },
            {
              "text": "**Scope 3:** Establish a governance framework for building AI services and understand the data used to train the model.",
              "indent": 0
            },
            {
              "text": "**Scopes 4 and 5:** Also control access to the custom model, which inherits the data classification of the data used to tune or train it.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s58.svg",
          "examObjectives": [
            "5.2.3"
          ]
        },
        {
          "id": "m5-s59",
          "title": "AI Governance Strategy",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Determine your scope:** Use the Generative AI Security Scoping Matrix.",
              "indent": 0
            },
            {
              "text": "**Document and communicate policies:** Cover data standards, how access is requested, and model transparency.",
              "indent": 0
            },
            {
              "text": "**Define monitoring:** Decide which metrics, logs, and alerts show that policies are followed.",
              "indent": 0
            },
            {
              "text": "**Set a review cadence:** Review policies, risks, and controls on a regular schedule.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s59.svg",
          "examObjectives": [
            "5.2.3"
          ]
        },
        {
          "id": "m5-s60",
          "title": "Governance Reviews, Transparency Standards, and Training",
          "section": "5.2",
          "bullets": [
            {
              "text": "**Review strategies:** Combine technical reviews, risk reviews, and independent audits, and review again after major changes.",
              "indent": 0
            },
            {
              "text": "**Review cadence:** Schedule reviews, for example quarterly, plus reviews triggered by incidents or new regulations.",
              "indent": 0
            },
            {
              "text": "**Transparency standards:** Publish model cards, disclose AI use to users, and document known limitations.",
              "indent": 0
            },
            {
              "text": "**Team training requirements:** Train builders and users on policies, responsible AI, and security before they get access.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m5_s60.svg",
          "examObjectives": [
            "5.2.3"
          ]
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "m5-s6",
            "m5-s30",
            "m5-s32"
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
            "m1-s39",
            "m1-s40",
            "m3-s2",
            "m5-s15",
            "m5-s37",
            "m5-s42",
            "m5-s43",
            "m5-s44"
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
        "Review the five exam domains and how the exam is scored.",
        "Apply test-taking strategies and elimination techniques.",
        "Find official practice, registration, and continued learning resources."
      ],
      "slides": [
        {
          "id": "m6-s1",
          "title": "Exam Preparation Review: The Five Domains",
          "bullets": [
            {
              "text": "**Domain 1, Fundamentals of AI and ML (20%):** Core concepts, use cases, and the machine learning development lifecycle.",
              "indent": 0
            },
            {
              "text": "**Domain 2, Fundamentals of GenAI (24%):** How foundation models work, what they are good at, their limits, and AWS services for building with them.",
              "indent": 0
            },
            {
              "text": "**Domain 3, Applications of Foundation Models (28%):** Design choices, prompt engineering, customization, and evaluation. The largest share of the exam.",
              "indent": 0
            },
            {
              "text": "**Domains 4 and 5 (14% each):** Responsible AI, and security, compliance, and governance for AI solutions.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m6_s1.svg",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m6-s2",
          "title": "Exam Format and Scoring",
          "bullets": [
            {
              "text": "**Question types:** Multiple choice (one correct answer), multiple response (two or more correct answers), ordering (put 3 to 5 steps in order), and matching (pair 3 to 7 prompts with responses).",
              "indent": 0
            },
            {
              "text": "**Scored and unscored:** 50 questions count toward your score. Another 15 unscored questions are mixed in and are not identified.",
              "indent": 0
            },
            {
              "text": "**No penalty for guessing:** Unanswered questions are marked wrong, so answer every question.",
              "indent": 0
            },
            {
              "text": "**Results:** A scaled score from 100 to 1,000 with a minimum passing score of 700. Scoring is compensatory: you need to pass the exam overall, not each domain.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m6_s2.svg",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m6-s3",
          "title": "Test-Taking Tips",
          "bullets": [
            {
              "text": "**Read the question first:** Understand what is being asked before you look at the answer options.",
              "indent": 0
            },
            {
              "text": "**Find the key words:** Note qualifiers such as most cost-effective, least operational effort, or must not leave the VPC.",
              "indent": 0
            },
            {
              "text": "**Eliminate:** Rule out options that solve a different problem or break a stated requirement.",
              "indent": 0
            },
            {
              "text": "**Compare and decide:** Weigh the remaining options against the key words. If a question takes too long, choose your best answer, flag it, and come back.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m6_s3.svg",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m6-s4",
          "title": "Take an Official Practice Exam or Pretest",
          "bullets": [
            {
              "text": "**Validate readiness:** An AWS Certification Official Practice Exam uses the same question style, depth, and scoring as the real exam.",
              "indent": 0
            },
            {
              "text": "**Use the results:** Look at which domains and objectives you missed, not just the total score.",
              "indent": 0
            },
            {
              "text": "**Study the explanations:** Understand why each wrong option is wrong, then practice with new scenarios.",
              "indent": 0
            },
            {
              "text": "**Course checkpoints are not a predictor:** They sample concepts from each module but do not estimate an exam result.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m6_s4.svg",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m6-s5",
          "title": "Register for Your Exam",
          "bullets": [
            {
              "text": "**Start at the official page:** The AWS Certified AI Practitioner page has the current exam guide and the link to schedule.",
              "indent": 0
            },
            {
              "text": "**Choose how to test:** Take the exam at a Pearson VUE test center or online with a remote proctor.",
              "indent": 0
            },
            {
              "text": "**Check the requirements:** Review identification, system, and check-in requirements before exam day.",
              "indent": 0
            },
            {
              "text": "**Plan the date:** Schedule the exam after your practice results show you are ready across all five domains.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m6_s5.svg",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m6-s6",
          "title": "AWS Skill Builder",
          "bullets": [
            {
              "text": "**Online learning center:** AWS Skill Builder offers digital courses and learning plans, many at no charge.",
              "indent": 0
            },
            {
              "text": "**Game-based learning and use-case challenges:** Practice solving realistic problems in interactive formats.",
              "indent": 0
            },
            {
              "text": "**Self-paced labs:** Work in real AWS environments; some labs need a subscription.",
              "indent": 0
            },
            {
              "text": "**Exam preparation:** Official practice question sets and practice exams for AWS Certification.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m6_s6.svg",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m6-s7",
          "title": "Continue Learning",
          "bullets": [
            {
              "text": "**No-charge digital training:** Self-paced courses on AWS fundamentals and specific services.",
              "indent": 0
            },
            {
              "text": "**Classroom training:** Instructor-led courses from AWS or AWS Training Partners for guided, hands-on practice.",
              "indent": 0
            },
            {
              "text": "**AWS Certification:** Validate your skills with an industry-recognized credential.",
              "indent": 0
            },
            {
              "text": "**Feedback:** Send workshop feedback to the organizer with the slide ID, so the course keeps improving.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m6_s7.svg",
          "examObjectives": [
            "1.1.1"
          ]
        },
        {
          "id": "m6-s8",
          "title": "AWS Certification Levels",
          "bullets": [
            {
              "text": "**Foundational:** Knowledge-based certifications such as AI Practitioner and Cloud Practitioner. No prior AWS experience is required.",
              "indent": 0
            },
            {
              "text": "**Associate:** Role-based certifications. Prior AWS Cloud or strong on-premises IT experience is recommended.",
              "indent": 0
            },
            {
              "text": "**Professional:** Role-based certifications for advanced skills. About two years of AWS Cloud experience is recommended.",
              "indent": 0
            },
            {
              "text": "**Specialty:** Certifications focused on a specific technical area. The recommended experience varies by exam.",
              "indent": 0
            }
          ],
          "visualization": "aifv2_m6_s8.svg",
          "examObjectives": [
            "1.1.1"
          ]
        }
      ]
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
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) module.exports = AIF_V1_6_COURSE_DATA;
