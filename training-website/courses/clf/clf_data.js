const CLF_COURSE_DATA = {
  "id": "clf",
  "version": "v1.12.1 beta",
  "lastModified": "2026-09-20",
  "title": "AWS Certified Cloud Practitioner (CLF-C02)",
  "description": "Master the foundations of the AWS Cloud and prepare to pass your CLF certification exam.",
  "catalog": {
    "tag": "CLF-C02",
    "theme": "orange",
    "order": 1,
    "description": "The foundational entry-point for understanding the AWS Cloud core concepts, billing models, security architecture, and services ecosystem. Fully rephrased and optimized for CLF-C02.",
    "labAccess": "Free"
  },
  "modules": [
    {
      "id": 1,
      "title": "Cloud Core Concepts",
      "objectives": [
        "Define the primary business and technical advantages of the AWS Cloud.",
        "Understand the core design principles of the AWS Well-Architected Framework.",
        "Identify cloud migration strategies (the 7 Rs) and cloud economics."
      ],
      "slides": [
        {
          "id": "1.1",
          "title": "Course Welcome & Structure",
          "bullets": [
            {
              "text": "Master the foundations of the AWS Cloud and prepare to pass your certification exam.",
              "indent": 0
            },
            {
              "text": "The exam is divided into four primary domains:",
              "indent": 1
            },
            {
              "text": "**Domain 1: Cloud Concepts** (24% of exam)",
              "indent": 2
            },
            {
              "text": "**Domain 2: Security & Compliance** (30% of exam)",
              "indent": 2
            },
            {
              "text": "**Domain 3: Technology & Services** (34% of exam)",
              "indent": 2
            },
            {
              "text": "**Domain 4: Billing, Pricing & Support** (12% of exam)",
              "indent": 2
            }
          ],
          "visualization": "clf_m1_domain_weights.png"
        },
        {
          "id": "1.2",
          "title": "What is Cloud Computing?",
          "bullets": [
            {
              "text": "**On-Demand Self-Service:** Provision resources whenever you need them without human intervention.",
              "indent": 0
            },
            {
              "text": "**Broad Network Access:** Access services over the internet using standard devices (laptops, phones).",
              "indent": 1
            },
            {
              "text": "**Resource Pooling:** Multiple customers share physical hardware securely, dynamically allocating resources.",
              "indent": 1
            },
            {
              "text": "**Rapid Elasticity:** Automatically scale resources up or down to handle spikes or drops in demand.",
              "indent": 1
            },
            {
              "text": "**Pay-As-You-Go Pricing:** Pay only for what you run (metered services, similar to electricity usage).",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_cloud_basics.png"
        },
        {
          "id": "1.3",
          "title": "Six Key Benefits of the Cloud (Part 1)",
          "bullets": [
            {
              "text": "**Trade Upfront Expenses for Variable Costs:** Avoid massive initial capital expenditures (CapEx) on servers and data centers. Instead, pay operational expenses (OpEx) based on actual usage.",
              "indent": 0
            },
            {
              "text": "**Economies of scale:** AWS spreads infrastructure investment and operating work across many customers. Purchasing scale, efficient facilities, automation, and managed services can lower unit costs; actual savings depend on the workload and pricing choice.",
              "indent": 1
            },
            {
              "text": "**Stop Guessing Capacity:** Instead of purchasing excess hardware that sits idle, or running out of capacity during a traffic spike, scale resources dynamically as demand dictates.",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_traditional_vs_cloud.png"
        },
        {
          "id": "1.4",
          "title": "Six Key Benefits of the Cloud (Part 2)",
          "bullets": [
            {
              "text": "**Speed and agility:** Create an environment quickly, test an idea, deploy a small change, and use feedback to improve it. Faster experimentation can shorten time to market when teams also have effective delivery processes.",
              "indent": 0
            },
            {
              "text": "**Focus on Business, Not Data Centers:** Stop spending time and money racking servers, cooling data centers, and managing physical infrastructure. Let AWS handle the physical heavy lifting.",
              "indent": 1
            },
            {
              "text": "**Go Global in Minutes:** Deploy applications in multiple regions around the world with just a few clicks, reducing latency for global users.",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_global_reach.png"
        },
        {
          "id": "1.5",
          "title": "High Availability and Reliability",
          "bullets": [
            {
              "text": "**High availability (HA):** Design to limit downtime through redundancy and recovery. Failover may be manual or automated according to the workload and service configuration.",
              "indent": 0
            },
            {
              "text": "**Redundancy:** Avoiding single points of failure by deploying backup systems.",
              "indent": 1
            },
            {
              "text": "**Multi-AZ design:** Place appropriate components in more than one Availability Zone and configure health checks, routing, and recovery. Separate locations alone do not create automatic application failover.",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_high_availability.png"
        },
        {
          "id": "1.6",
          "title": "Scalability vs. Elasticity",
          "bullets": [
            {
              "text": "**Vertical Scaling (Scale Up/Down):** Adding power to an existing server (e.g., upgrading from a 2-core CPU to a 16-core CPU).",
              "indent": 0
            },
            {
              "text": "**Horizontal Scaling (Scale Out/In):** Adding more servers of the same size to distribute the workload (e.g., going from 1 server to 5 servers).",
              "indent": 1
            },
            {
              "text": "**Elasticity:** Adjust capacity as demand changes, often through automated scaling policies. Scaling can add or remove resources, while the supported scaling method and response time depend on the service.",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_scaling_dimensions.png"
        },
        {
          "id": "1.7",
          "title": "The AWS Well-Architected Framework Pillars",
          "bullets": [
            {
              "text": "To build secure, high-performing, resilient, and efficient infrastructure, AWS recommends aligning with these pillars:",
              "indent": 0
            },
            {
              "text": "**Operational Excellence:** Running and monitoring systems to deliver business value and continuously improve.",
              "indent": 2
            },
            {
              "text": "**Security:** Protecting data, systems, and assets through risk assessment and mitigation.",
              "indent": 2
            },
            {
              "text": "**Reliability:** Ensuring workloads perform their intended functions correctly and consistently.",
              "indent": 2
            },
            {
              "text": "**Performance Efficiency:** Using IT resources efficiently to meet requirements as technologies evolve.",
              "indent": 2
            },
            {
              "text": "**Cost Optimization:** Avoiding unnecessary costs and running systems at the lowest possible price point.",
              "indent": 2
            },
            {
              "text": "**Sustainability:** Minimizing the environmental impact of running cloud workloads.",
              "indent": 2
            }
          ],
          "visualization": "clf_m1_well_architected_pillars.png"
        },
        {
          "id": "1.8",
          "title": "Deep Dive: Operational Excellence & Security",
          "bullets": [
            {
              "text": "**Operational Excellence Principles:**",
              "indent": 0
            },
            {
              "text": "Perform operations as code (Infrastructure as Code).",
              "indent": 2
            },
            {
              "text": "Make frequent, small, reversible changes.",
              "indent": 2
            },
            {
              "text": "Anticipate failure and learn from all operational events.",
              "indent": 2
            },
            {
              "text": "**Security Principles:**",
              "indent": 1
            },
            {
              "text": "Implement a strong identity foundation (least privilege).",
              "indent": 2
            },
            {
              "text": "Protect data at rest and in transit (encryption).",
              "indent": 2
            },
            {
              "text": "Keep physical users away from direct data access.",
              "indent": 2
            }
          ],
          "visualization": "clf_m1_operations_security.png"
        },
        {
          "id": "1.18",
          "title": "Operational Excellence and Security in Practice",
          "bullets": [
            {
              "text": "**Observability:** Combine metrics, logs, and traces so operators can investigate behavior and act on a meaningful signal. Organize teams around business outcomes and refine procedures after incidents and routine operations.",
              "indent": 0
            },
            {
              "text": "**Safe operations:** Automate repeatable work, make small reversible changes, and test response procedures. Managed services can reduce routine work while the team remains accountable for its application.",
              "indent": 0
            },
            {
              "text": "**Security at every layer:** Apply identity, network, application, and data controls. Preserve traceability, automate security checks, and reduce direct human access to sensitive data.",
              "indent": 0
            },
            {
              "text": "**Incident readiness:** Define detection, response, and recovery responsibilities before an incident. Test the process and protect data both while stored and during transfer.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "1.9",
          "title": "Deep Dive: Reliability & Performance",
          "bullets": [
            {
              "text": "**Reliability Principles:**",
              "indent": 0
            },
            {
              "text": "Automatically recover from failure (automatic failover).",
              "indent": 2
            },
            {
              "text": "Test recovery procedures under simulated stress.",
              "indent": 2
            },
            {
              "text": "Scale horizontally to distribute workload risk.",
              "indent": 2
            },
            {
              "text": "**Performance Efficiency Principles:**",
              "indent": 1
            },
            {
              "text": "Democratize advanced technologies (delegate complex tasks to AWS managed services).",
              "indent": 2
            },
            {
              "text": "Go global in minutes (reduce latency by deploying close to users).",
              "indent": 2
            },
            {
              "text": "Adopt serverless architectures to eliminate server management overhead.",
              "indent": 2
            }
          ],
          "visualization": ""
        },
        {
          "id": "1.19",
          "title": "Reliability and Performance Design Decisions",
          "bullets": [
            {
              "text": "**Design for failure:** Distribute suitable components across Availability Zones, remove single points of failure, and test recovery. Automate recovery where appropriate instead of assuming infrastructure never fails.",
              "indent": 0
            },
            {
              "text": "**Capacity and change:** Measure demand, scale horizontally where the application allows it, and use repeatable deployment automation. Test capacity and recovery rather than relying on guesses.",
              "indent": 0
            },
            {
              "text": "**Experimentation:** Compare resource types and managed or serverless options with representative workloads. Monitor latency and throughput as demand and technology change.",
              "indent": 0
            },
            {
              "text": "**Mechanical sympathy:** Understand how the workload uses processors, memory, storage, and networks so the chosen resources fit its behavior. The most powerful instance is not automatically the most efficient choice.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "1.10",
          "title": "Deep Dive: Cost & Sustainability",
          "bullets": [
            {
              "text": "**Cost Optimization Principles:**",
              "indent": 0
            },
            {
              "text": "Adopt a consumption-based pricing model.",
              "indent": 2
            },
            {
              "text": "Measure overall efficiency and attribute expenditures (using tags).",
              "indent": 2
            },
            {
              "text": "Stop spending money on undifferentiated heavy lifting (like physical server maintenance).",
              "indent": 2
            },
            {
              "text": "**Sustainability Principles:**",
              "indent": 1
            },
            {
              "text": "Understand the environmental footprint of your workloads.",
              "indent": 2
            },
            {
              "text": "Maximize resource utilization to reduce energy waste.",
              "indent": 2
            },
            {
              "text": "Choose more efficient hardware and software when testing shows that it meets the workload's requirements.",
              "indent": 2
            }
          ],
          "visualization": "clf_m1_cost_sustainability.png"
        },
        {
          "id": "1.20",
          "title": "Cloud Financial Management and Sustainability",
          "bullets": [
            {
              "text": "**Cloud financial management:** Assign spending ownership, budget for the workload, and review actual usage and value. Attribute costs to the teams or products that create them.",
              "indent": 0
            },
            {
              "text": "**Efficiency:** Measure business output against resource consumption. Consumption pricing and managed services can reduce waste, but idle resources and unnecessary processing still cost money.",
              "indent": 0
            },
            {
              "text": "**Sustainability goals:** Establish a baseline and measurable improvement goals. Increase utilization, use suitable efficient technologies, and review the environmental effect of changing capacity or architectures.",
              "indent": 0
            },
            {
              "text": "**Downstream impact:** Consider unnecessary data transfer, client-device work, and retained data as well as server resources. A local optimization should not simply move avoidable work elsewhere.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "1.11",
          "title": "AWS Well-Architected Tool",
          "bullets": [
            {
              "text": "A free, self-service tool in the AWS Management Console.",
              "indent": 0
            },
            {
              "text": "**Checklists:** Compares your architecture against the 6 pillars through a series of questions.",
              "indent": 1
            },
            {
              "text": "**Improvement Plans:** Provides a clear action plan to remediate high-risk issues.",
              "indent": 1
            },
            {
              "text": "**Governance:** Track milestones and improvements over time, and share custom lenses across accounts.",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_well_architected_tool.png"
        },
        {
          "id": "1.12",
          "title": "The AWS Cloud Adoption Framework (AWS CAF)",
          "bullets": [
            {
              "text": "AWS CAF helps organizations build a comprehensive roadmap for digital transformation.",
              "indent": 0
            },
            {
              "text": "It groups cloud migration readiness into six perspectives:",
              "indent": 1
            },
            {
              "text": "**Business Perspectives (Focus on value):**",
              "indent": 2
            },
            {
              "text": "**Business:** Align IT strategy with business outcomes.",
              "indent": 3
            },
            {
              "text": "**People:** Evolve skills, culture, and leadership.",
              "indent": 3
            },
            {
              "text": "**Governance:** Manage organizational risk and benefits.",
              "indent": 3
            },
            {
              "text": "**Technical Perspectives (Focus on execution):**",
              "indent": 2
            },
            {
              "text": "**Platform:** Build cloud architectures and patterns.",
              "indent": 3
            },
            {
              "text": "**Security:** Maintain data confidentiality and compliance.",
              "indent": 3
            },
            {
              "text": "**Operations:** Deliver cloud services at scale securely.",
              "indent": 3
            }
          ],
          "visualization": "clf_m1_caf_honeycomb.png"
        },
        {
          "id": "1.22",
          "title": "Migration Readiness and Business Outcomes",
          "bullets": [
            {
              "text": "**AWS CAF outcomes:** Use the Cloud Adoption Framework to reduce business risk, improve environmental, social, and governance performance, support revenue growth, and increase operational efficiency. These are goals to measure, not guaranteed results.",
              "indent": 0
            },
            {
              "text": "**Discovery:** Inventory applications, owners, dependencies, licenses, and data before assigning a migration strategy. Confirm the business reason to move each workload.",
              "indent": 0
            },
            {
              "text": "**Effort trade-offs:** Rehosting often changes less than refactoring, while retiring a redundant system avoids a migration. Actual effort depends on dependencies, testing, and organizational readiness rather than a universal ranking.",
              "indent": 0
            },
            {
              "text": "**Economic choices:** Compare usage-based charges, support and operating costs, volume pricing, and optional commitments. Cloud adoption can shift costs toward consumption, but not every cost becomes variable or commitment-free.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "1.13",
          "title": "Seven Migration Strategies (The 7 Rs)",
          "bullets": [
            {
              "text": "**Rehost (lift and shift):** Move an application to cloud infrastructure with little or no change to its architecture. Plan testing, data transfer, and cutover even when code changes are small.",
              "indent": 0
            },
            {
              "text": "**Relocate:** Move a workload at the platform or hypervisor level while preserving much of its operating environment. Check the supported destination and dependencies before choosing this approach.",
              "indent": 1
            },
            {
              "text": "**Replatform (Lift, Tinker, and Shift):** Make minor optimizations without changing core code (e.g., moving a database to Amazon RDS).",
              "indent": 1
            },
            {
              "text": "**Refactor / Rearchitect:** Rewrite the application to use cloud-native features (e.g., serverless).",
              "indent": 1
            },
            {
              "text": "**Repurchase:** Move from a perpetual license to a SaaS model (e.g., Salesforce).",
              "indent": 1
            },
            {
              "text": "**Retain:** Keep applications on-premises for now due to legacy requirements.",
              "indent": 1
            },
            {
              "text": "**Retire:** Identify and turn off redundant or obsolete systems.",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_migration_7rs.png"
        },
        {
          "id": "1.14",
          "title": "AWS Migration Services",
          "bullets": [
            {
              "text": "**AWS Application Migration Service (AWS MGN):** Automates the lift-and-shift migration of physical, virtual, or cloud servers directly to AWS with minimal downtime.",
              "indent": 0
            },
            {
              "text": "**AWS Migration Evaluator:** Uses inventory and utilization information to estimate migration options and their costs. The assessment supports a business case and should be checked against licensing, operational, and growth assumptions.",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_migration_workflow.png"
        },
        {
          "id": "1.15",
          "title": "Cloud Economics: Fixed vs. Variable Costs",
          "bullets": [
            {
              "text": "Shift from a **fixed vs variable** cost setup:",
              "indent": 0
            },
            {
              "text": "**Traditional IT Cost Model (Fixed CapEx):**",
              "indent": 2
            },
            {
              "text": "Large upfront hardware investments.",
              "indent": 3
            },
            {
              "text": "Guessing future capacity needs leads to wasted resources or system crashes.",
              "indent": 3
            },
            {
              "text": "Heavy operational costs for physical maintenance and staffing.",
              "indent": 3
            },
            {
              "text": "**Cloud IT Cost Model (Variable OpEx):**",
              "indent": 2
            },
            {
              "text": "Pay only for what you consume.",
              "indent": 3
            },
            {
              "text": "Instantly adjust resource counts to match demand.",
              "indent": 3
            },
            {
              "text": "Managed services eliminate the need to run and secure physical data centers.",
              "indent": 3
            }
          ],
          "visualization": ""
        },
        {
          "id": "1.16",
          "title": "Cost Optimization: Rightsizing",
          "bullets": [
            {
              "text": "**Rightsizing:** The continuous process of matching instance types and sizes to your actual workload performance and capacity requirements.",
              "indent": 0
            },
            {
              "text": "Avoid **over-provisioning** (wasting money on idle resources).",
              "indent": 1
            },
            {
              "text": "Avoid **under-provisioning** (causing performance issues due to resource exhaustion).",
              "indent": 1
            },
            {
              "text": "Use **AWS Compute Optimizer** to get machine learning-driven recommendations for optimal resource sizing, Graviton migration paths, license optimization, and detecting idle resources.",
              "indent": 1
            }
          ],
          "visualization": ""
        },
        {
          "id": "1.21",
          "title": "Automation and Resource Efficiency",
          "bullets": [
            {
              "text": "**Business benefits:** Tested automation can reduce manual errors, improve consistency, and lower operating effort. Review failures and permissions so an automated mistake does not spread unchecked.",
              "indent": 0
            },
            {
              "text": "**Capacity and deployment:** Auto Scaling responds to demand, and scheduled scaling prepares for predictable peaks. Infrastructure as code (IaC) creates repeatable environments from versioned definitions.",
              "indent": 0
            },
            {
              "text": "**Operations:** AWS Systems Manager supports patching and configuration tasks. CloudWatch alarms can trigger actions, and Lambda can run event-driven automation within its execution limits.",
              "indent": 0
            },
            {
              "text": "**Workflows and protection:** AWS Step Functions coordinates multiple tasks with error handling. AWS Backup schedules supported backups; restore tests confirm whether the protected data can actually be recovered.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "1.17",
          "title": "Cloud Economics: Licensing Options",
          "bullets": [
            {
              "text": "**Bring Your Own License (BYOL):** Use an existing software license on eligible AWS infrastructure when its terms allow it. Confirm portability, deployment restrictions, and support before assuming a saving.",
              "indent": 0
            },
            {
              "text": "**License Included (LI):** Eligible service or image pricing includes the software license with infrastructure usage. The supported product and commercial terms still determine what rights and charges apply.",
              "indent": 1
            },
            {
              "text": "**AWS License Manager:** Helps track license usage and apply configured licensing rules across supported cloud and on-premises resources. It assists license administration but does not replace checking contractual compliance.",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_licensing_byol.png"
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "1.2",
            "1.3",
            "1.4",
            "1.6"
          ],
          "question": "A startup needs to deploy a new web application. They are unsure how much traffic they will receive and want to avoid paying for idle infrastructure while ensuring the site doesn't crash during traffic spikes. Which cloud benefit best addresses this scenario?",
          "options": {
            "A": "Go global in minutes",
            "B": "Benefit from massive economies of scale",
            "C": "Stop guessing capacity",
            "D": "Trade variable expense for fixed expense"
          },
          "correct": "C",
          "explanation": "\"Stop guessing capacity\" allows organizations to scale resources dynamically in response to real-time traffic rather than buying fixed hardware based on predictions. A is global latency reduction. B is general cost reduction. D is incorrect because the cloud trades fixed expenses for variable expenses (not the other way around).",
          "wrongExplanations": {
            "A": "Deploying applications in Regions closer to users reduces latency. It does not by itself adjust capacity to match changing demand.",
            "B": "Benefit from massive economies of scale is a general cost benefit of the cloud, but does not focus on matching real-time dynamic capacity to demand.",
            "D": "The cloud trades fixed upfront expenses for variable operating expenses, not the other way around."
          }
        },
        {
          "id": 2,
          "teachingSlideIds": [
            "1.7",
            "1.9",
            "1.10"
          ],
          "question": "Which pillar of the AWS Well-Architected Framework focuses on minimizing the environmental impact of cloud workloads?",
          "options": {
            "A": "Operational Excellence",
            "B": "Performance Efficiency",
            "C": "Sustainability",
            "D": "Reliability"
          },
          "correct": "C",
          "explanation": "The Sustainability pillar was added specifically to focus on environmental impacts, maximizing resource utilization, and reducing energy consumption.",
          "wrongExplanations": {
            "A": "Operational Excellence focuses on running and monitoring systems to deliver business value and continually improving processes.",
            "B": "Performance Efficiency focuses on using computing resources efficiently to meet requirements as demand changes.",
            "D": "Reliability focuses on system resilience, fault tolerance, and recovery from disruptions."
          }
        },
        {
          "id": 3,
          "teachingSlideIds": [
            "1.13"
          ],
          "question": "A company wants to migrate an on-premises database to Amazon RDS without modifying the database engine or core application logic. Which migration strategy is being used?",
          "options": {
            "A": "Rehost",
            "B": "Replatform",
            "C": "Refactor",
            "D": "Retain"
          },
          "correct": "B",
          "explanation": "Replatform makes a limited platform change, such as moving a database to Amazon RDS, while preserving the core application logic. Rehost moves the existing workload without that platform change. Refactor changes the application architecture, while retain keeps the workload where it is.",
          "wrongExplanations": {
            "A": "Rehost moves the existing workload without changing its platform. The scenario instead adopts a managed database platform.",
            "C": "Refactor changes the application architecture to use cloud-native capabilities. The scenario keeps the core application logic unchanged.",
            "D": "Retain involves keeping the database on-premises rather than migrating it."
          }
        }
      ]
    },
    {
      "id": 2,
      "title": "Security and Compliance",
      "objectives": [
        "Understand the division of responsibility in the AWS Shared Responsibility Model.",
        "Learn how AWS compliance tools protect user data.",
        "Identify key features of Identity and Access Management (IAM).",
        "List core AWS security, monitoring, and firewall services."
      ],
      "slides": [
        {
          "id": "2.1",
          "title": "The AWS Shared Responsibility Model",
          "bullets": [
            {
              "text": "Security in the cloud is a shared partnership between AWS and the customer:",
              "indent": 0
            },
            {
              "text": "**AWS is responsible for Security \"OF\" the Cloud:**",
              "indent": 2
            },
            {
              "text": "Protecting physical data centers (access control, power, HVAC).",
              "indent": 3
            },
            {
              "text": "Maintaining physical hardware, routers, hypervisors, and core virtualization software.",
              "indent": 3
            },
            {
              "text": "Securing managed services (like RDS, S3, DynamoDB).",
              "indent": 3
            },
            {
              "text": "**The Customer is responsible for Security \"IN\" the Cloud:**",
              "indent": 2
            },
            {
              "text": "Managing customer data and application configurations.",
              "indent": 3
            },
            {
              "text": "Managing user access, permissions, and credentials (IAM).",
              "indent": 3
            },
            {
              "text": "Patching operating systems on virtual servers (EC2).",
              "indent": 3
            },
            {
              "text": "Configuring network firewalls (Security Groups, NACLs).",
              "indent": 3
            },
            {
              "text": "**Shared Controls:** Controls where responsibilities overlap (e.g., Patch Management, Configuration Management, Awareness & Training).",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_shared_responsibility.png"
        },
        {
          "id": "2.2",
          "title": "Responsibility Shifts Based on Service Type",
          "bullets": [
            {
              "text": "The customer's security burden shifts depending on the type of service selected:",
              "indent": 0
            },
            {
              "text": "**Infrastructure as a Service (IaaS) (e.g., database on EC2):**",
              "indent": 2
            },
            {
              "text": "Customer must patch the operating system, configure database backups, configure high availability, and apply database software patches.",
              "indent": 3
            },
            {
              "text": "**Platform as a Service (PaaS) / Managed Service (e.g., Amazon RDS):**",
              "indent": 2
            },
            {
              "text": "AWS maintains RDS infrastructure and the managed operating system, and provides supported backup and maintenance capabilities.",
              "indent": 3
            },
            {
              "text": "The customer still configures database access, network rules, data protection, backup retention, and supported maintenance settings. Managed service operation does not remove these decisions.",
              "indent": 3
            },
            {
              "text": "**AWS Lambda:** AWS manages the service infrastructure and supported managed-runtime maintenance. Customers secure function code, dependencies, permissions, data, and configuration; custom runtimes and container images require additional customer maintenance.",
              "indent": 0
            }
          ],
          "visualization": "clf_m2_responsibility_shifts.png"
        },
        {
          "id": "2.3",
          "title": "Centralized Account Governance: AWS Organizations",
          "bullets": [
            {
              "text": "**Centralized Management:** Consolidate multiple AWS accounts into a single organization.",
              "indent": 0
            },
            {
              "text": "**Organizational Units (OUs):** Group accounts together (e.g., Development, Production) to apply hierarchical rules.",
              "indent": 1
            },
            {
              "text": "**Service Control Policies (SCPs):** Set maximum permission boundaries across accounts. SCPs restrict what even the root user of a member account can do.",
              "indent": 1
            },
            {
              "text": "**Consolidated Billing:** Combine usage across all accounts to qualify for volume discounts.",
              "indent": 1
            },
            {
              "text": "**Regional guardrail:** An SCP on a development OU can deny covered resource-creation actions outside approved Regions. It limits permissions across member accounts; it does not grant permissions.",
              "indent": 1
            },
            {
              "text": "**Account roles:** The management account administers the organization. A delegated administrator is a designated member account that manages supported service functions, reducing the need to use the management account for routine work.",
              "indent": 0
            }
          ],
          "visualization": "clf_m2_organizations_tree.png"
        },
        {
          "id": "2.4",
          "title": "Centralized Resource Sharing: AWS RAM",
          "bullets": [
            {
              "text": "**AWS Resource Access Manager (AWS RAM):**",
              "indent": 0
            },
            {
              "text": "Securely share specific AWS resources (like Transit Gateways, subnets, Route 53 resolver rules) across multiple AWS accounts within your organization.",
              "indent": 2
            },
            {
              "text": "**Operational Efficiency:** Avoid duplicating resources in separate accounts, reducing complexity and costs.",
              "indent": 2
            },
            {
              "text": "**Governance:** Keep accounts isolated while securely sharing core network infrastructure.",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_resource_sharing.png"
        },
        {
          "id": "2.5",
          "title": "Observability: AWS CloudTrail vs. AWS Config",
          "bullets": [
            {
              "text": "**AWS CloudTrail (The Auditor):**",
              "indent": 0
            },
            {
              "text": "Records supported account and API events according to the trail or event-data-store configuration. Data events and some other event types require explicit selection.",
              "indent": 2
            },
            {
              "text": "Answers: **Who** did it, **what** action was taken, **when** did it happen, and from **where** (IP address)?",
              "indent": 2
            },
            {
              "text": "Trails can deliver event logs to S3. Select the necessary event types, protect the logs, and configure retention for the audit requirement.",
              "indent": 2
            },
            {
              "text": "**AWS Config (The Compliance Officer):**",
              "indent": 1
            },
            {
              "text": "Records configuration history and relationships of your AWS resources.",
              "indent": 2
            },
            {
              "text": "Compares configuration states against predefined compliance rules.",
              "indent": 2
            },
            {
              "text": "Detects configuration drift and can trigger remediation. Use an SCP to deny disallowed resource-creation requests; a Config rule checks resource configuration.",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_cloudtrail_vs_config.png"
        },
        {
          "id": "2.6",
          "title": "Multi-Account Standard Setup: AWS Control Tower",
          "bullets": [
            {
              "text": "**Landing Zone:** Automatically provisions a secure, multi-account AWS environment using best practices.",
              "indent": 0
            },
            {
              "text": "**Controls:** Control Tower applies supported preventive, detective, and proactive controls through services such as Organizations and Config. Select and test controls against the actual landing-zone requirements.",
              "indent": 1
            },
            {
              "text": "**Account Factory:** Automates the creation of new, pre-configured member accounts that align with company compliance.",
              "indent": 1
            },
            {
              "text": "**Centralized Auditing:** Consolidated dashboard for tracking CloudTrail and Config compliance across all accounts.",
              "indent": 1
            }
          ],
          "visualization": "clf_m2_control_tower.png"
        },
        {
          "id": "2.7",
          "title": "Security Audits & Compliance: Artifact & Audit Manager",
          "bullets": [
            {
              "text": "**AWS Artifact (Reports & Agreements):**",
              "indent": 0
            },
            {
              "text": "Your self-service portal for accessing AWS compliance reports.",
              "indent": 2
            },
            {
              "text": "Review AWS assurance documents, including relevant ISO, PCI DSS, and SOC reports, and check their service, location, and reporting-period scope.",
              "indent": 2
            },
            {
              "text": "Review, accept, and track legal agreements with AWS, such as the Business Associate Addendum (BAA) for HIPAA compliance.",
              "indent": 2
            },
            {
              "text": "**AWS Audit Manager:**",
              "indent": 1
            },
            {
              "text": "Collects evidence from supported AWS sources and organizes it within an assessment framework for reviewers.",
              "indent": 2
            },
            {
              "text": "Framework mappings help structure an assessment. Reviewers still decide whether controls are effective and whether the evidence satisfies applicable requirements.",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_compliance_documentation.png"
        },
        {
          "id": "2.19",
          "title": "Compliance Evidence and Customer Obligations",
          "bullets": [
            {
              "text": "**Certifications and attestations:** Independent assessments provide evidence about defined controls and a stated scope. AWS Artifact supplies provider reports and agreements for review.",
              "indent": 0
            },
            {
              "text": "**Frameworks and regulations:** A framework organizes practices; a law or regulation creates obligations where applicable. AWS participation in a program does not automatically establish compliance for the customer's application.",
              "indent": 0
            },
            {
              "text": "**Evidence example:** Use Artifact to examine AWS assurance reports, CloudTrail to investigate selected account actions, and Config to assess recorded configurations. Security Hub findings concern security posture and do not replace the provider's audit report.",
              "indent": 0
            },
            {
              "text": "**Review:** Match evidence to the control, service, Region, and time period. Record customer controls and unresolved gaps alongside AWS documentation.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "2.8",
          "title": "Data Protection: Encryption Keys and KMS",
          "bullets": [
            {
              "text": "**Encryption in transit:** Use Transport Layer Security (TLS), commonly through HTTPS, to protect network traffic. Verify certificates and endpoint requirements for each connection.",
              "indent": 0
            },
            {
              "text": "**Certificates:** AWS Certificate Manager (ACM) issues and manages supported certificates and renews eligible ones. Imported certificates need a separate renewal process. AWS Private Certificate Authority issues private certificates for internal trust requirements.",
              "indent": 0
            },
            {
              "text": "**Encryption at rest:** AWS KMS manages keys for integrated services. AWS managed keys and customer managed keys offer different policy and lifecycle controls. Check each service's defaults and the required key permissions.",
              "indent": 0
            },
            {
              "text": "**Cryptographic uses:** Supported KMS key types can support encryption, signing, or message authentication. FIPS endpoints are available only for supported services and Regions; using one endpoint does not establish compliance for an entire application.",
              "indent": 0
            }
          ],
          "visualization": "clf_m2_encryption_types.png"
        },
        {
          "id": "2.9",
          "title": "Cloud Security Modules: CloudHSM & Macie",
          "bullets": [
            {
              "text": "**AWS CloudHSM:**",
              "indent": 0
            },
            {
              "text": "A dedicated Hardware Security Module (HSM) instance within AWS.",
              "indent": 2
            },
            {
              "text": "Gives you sole ownership and control of your encryption keys (AWS cannot see or access your keys).",
              "indent": 2
            },
            {
              "text": "Check the compliance validation for the selected CloudHSM hardware type and configuration against the workload's cryptographic requirements.",
              "indent": 2
            },
            {
              "text": "**Amazon Macie:**",
              "indent": 1
            },
            {
              "text": "Discovers sensitive data in supported S3 objects and produces findings for investigation. It does not automatically remove the data or replace access controls.",
              "indent": 2
            },
            {
              "text": "Scans S3 buckets for Personally Identifiable Information (PII) (e.g., credit card numbers, SSNs) and alerts you to exposed data.",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_cloudhsm_macie.png"
        },
        {
          "id": "2.10",
          "title": "Access Management: Protecting the Root User",
          "bullets": [
            {
              "text": "**Root access:** The account root identity can perform sensitive account tasks. Reserve it for operations that require root permissions and use federated access or an appropriate role for ordinary administration.",
              "indent": 0
            },
            {
              "text": "**Protect sign-in and recovery:** Use strong authentication and MFA, protect recovery mechanisms, and use an organization-controlled group email address where appropriate. Monitor root sign-ins and activity.",
              "indent": 0
            },
            {
              "text": "**Access keys:** Avoid creating root access keys and remove unneeded existing keys. Protect exceptional credentials and recovery procedures with accountable owners.",
              "indent": 0
            },
            {
              "text": "**Task restrictions:** Changes to root credentials and some account recovery actions require special access. Consult the current root-task documentation rather than assuming that all billing or support tasks require root.",
              "indent": 0
            }
          ],
          "visualization": "clf_m2_root_protection.png"
        },
        {
          "id": "2.11",
          "title": "AWS Identity and Access Management (IAM)",
          "bullets": [
            {
              "text": "**IAM User:** A single identity representing a person or application (credentials: password, access keys: access key ID + secret access key).",
              "indent": 0
            },
            {
              "text": "**IAM Group (or IAM User Group):** A collection of IAM users. Permissions applied to a group are inherited by all members (e.g., \"Developers Group\").",
              "indent": 1
            },
            {
              "text": "**IAM Role:** An assumable identity with a trust policy and permissions. AWS Security Token Service (STS) issues temporary credentials to an authorized role session; the role itself is not a short-lived identity.",
              "indent": 1
            },
            {
              "text": "**Principle of Least Privilege:** Grant only the exact permissions needed to do a job, and nothing more.",
              "indent": 1
            }
          ],
          "visualization": "clf_m2_iam_entities.png"
        },
        {
          "id": "2.12",
          "title": "Federated Access & Directory Services",
          "bullets": [
            {
              "text": "Manage access for large workforces without creating IAM users for every employee:",
              "indent": 0
            },
            {
              "text": "**AWS IAM Identity Center (Single Sign-On):**",
              "indent": 2
            },
            {
              "text": "Central site to manage single sign-on access to all AWS accounts and business applications.",
              "indent": 3
            },
            {
              "text": "**Amazon Cognito:**",
              "indent": 2
            },
            {
              "text": "Manages user sign-up, sign-in, and federation access for customer-facing web and mobile applications.",
              "indent": 3
            },
            {
              "text": "**AWS Directory Service:**",
              "indent": 2
            },
            {
              "text": "Integrates AWS resources with your existing Active Directory (AD) databases (e.g., Microsoft AD).",
              "indent": 3
            }
          ],
          "visualization": "clf_m2_federated_access.png"
        },
        {
          "id": "2.13",
          "title": "IAM Policies: Identity vs. Resource-Based",
          "bullets": [
            {
              "text": "Policies are JSON documents that define permissions (Allow or Deny actions).",
              "indent": 0
            },
            {
              "text": "**Identity-Based Policies:** Attached to IAM users, groups, or roles.",
              "indent": 1
            },
            {
              "text": "*AWS Managed:* Standard templates created by AWS (e.g., ReadOnlyAccess).",
              "indent": 2
            },
            {
              "text": "*Customer Managed:* Custom policies built by you.",
              "indent": 2
            },
            {
              "text": "*Inline Policies:* Embedded directly within a specific single user, group, or role.",
              "indent": 2
            },
            {
              "text": "*Cross-Account Policies:* Define a **trust policy** (which account is trusted to assume the role) and a **permissions policy** (what that role can access).",
              "indent": 2
            },
            {
              "text": "**Resource-Based Policies:** Attached directly to an AWS resource.",
              "indent": 1
            },
            {
              "text": "*Example:* S3 Bucket Policies. These define who (which IAM users or external accounts) has access to that specific bucket.",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_iam_policies.png"
        },
        {
          "id": "2.20",
          "title": "Authentication, Access Reports, and Permission Limits",
          "bullets": [
            {
              "text": "**Passwords and access keys:** For IAM users that remain necessary, configure a suitable account password policy and MFA. Prefer federation and temporary credentials, keep secrets out of code, and update or revoke long-lived keys when risk or personnel changes require it.",
              "indent": 0
            },
            {
              "text": "**Assuming a role:** An authorized caller requests a role session through STS. In cross-account access, the destination trust policy and the caller's authorization must permit the request; the role's permissions then limit resource actions.",
              "indent": 0
            },
            {
              "text": "**Permission boundaries and SCPs:** A permissions boundary limits an IAM user or role within an account. A service control policy limits covered permissions in organization member accounts. Neither grants permissions by itself.",
              "indent": 0
            },
            {
              "text": "**Access reports:** IAM credential reports help review account credential status. IAM Access Analyzer examines supported access and policy findings. Use the evidence to remove unnecessary access and investigate unintended public or cross-account permissions.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "2.14",
          "title": "Secrets Management: Parameter Store vs. Secrets Manager",
          "bullets": [
            {
              "text": "**AWS Systems Manager Parameter Store:**",
              "indent": 0
            },
            {
              "text": "A secure, hierarchical storage service for configuration data and passwords.",
              "indent": 2
            },
            {
              "text": "Best for general configuration variables and lightweight secrets.",
              "indent": 2
            },
            {
              "text": "**AWS Secrets Manager:**",
              "indent": 1
            },
            {
              "text": "A dedicated secrets database.",
              "indent": 2
            },
            {
              "text": "**Rotation:** Secrets Manager supports automatic rotation for supported integrations and configured rotation functions. Verify how the target system updates its secret; storing an arbitrary API key does not automatically make its rotation work.",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_secrets_management.png"
        },
        {
          "id": "2.15",
          "title": "Edge & Web Application Firewalls",
          "bullets": [
            {
              "text": "**AWS Shield:**",
              "indent": 0
            },
            {
              "text": "Protects against Distributed Denial of Service (DDoS) attacks.",
              "indent": 2
            },
            {
              "text": "*Shield Standard:* Free, automatically enabled for all customers.",
              "indent": 2
            },
            {
              "text": "*Shield Advanced:* Paid, includes 24/7 access to DDoS response teams.",
              "indent": 2
            },
            {
              "text": "**AWS WAF (Web Application Firewall):**",
              "indent": 1
            },
            {
              "text": "Monitors HTTP/HTTPS requests to protect web apps from common exploits (e.g., SQL Injection, Cross-Site Scripting, bots).",
              "indent": 2
            },
            {
              "text": "**AWS Firewall Manager:**",
              "indent": 1
            },
            {
              "text": "Centrally configures and manages firewall rules across all accounts in your organization.",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_network_defense.png"
        },
        {
          "id": "2.16",
          "title": "Threat Detection: Inspector, GuardDuty, and Detective",
          "bullets": [
            {
              "text": "**Amazon Inspector (Vulnerability Scanner):**",
              "indent": 0
            },
            {
              "text": "Automated security assessment tool. Scans EC2 instances, container images, and Lambda functions for software vulnerabilities and exposure.",
              "indent": 2
            },
            {
              "text": "**Amazon GuardDuty (Threat Intelligence):**",
              "indent": 1
            },
            {
              "text": "Continuous security monitoring service. Analyzes CloudTrail logs, VPC flow logs, and DNS logs using machine learning to detect malicious activity (e.g., crypto-mining).",
              "indent": 2
            },
            {
              "text": "**Amazon Detective (Investigation):**",
              "indent": 1
            },
            {
              "text": "Automatically collects log data and creates visual graphs to investigate the root cause of security issues.",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_threat_detection.png"
        },
        {
          "id": "2.17",
          "title": "Security Posture: Security Hub, Trusted Advisor, & CloudWatch",
          "bullets": [
            {
              "text": "**AWS Security Hub:**",
              "indent": 0
            },
            {
              "text": "A centralized security dashboard that consolidates security alerts (findings) from multiple AWS services (GuardDuty, Inspector, Macie).",
              "indent": 2
            },
            {
              "text": "**AWS Trusted Advisor:**",
              "indent": 1
            },
            {
              "text": "Automatically runs core account security checks (e.g., Root MFA, open ports, public S3 buckets).",
              "indent": 2
            },
            {
              "text": "**Amazon CloudWatch:**",
              "indent": 1
            },
            {
              "text": "Real-time monitoring of metrics and log events. Can trigger alarms when security anomalies are detected.",
              "indent": 2
            },
            {
              "text": "**Integrations:** Security Hub can receive supported findings from AWS services and third-party security products, including products available through AWS Marketplace. Confirm the integration and enabled finding types for the account.",
              "indent": 0
            }
          ],
          "visualization": "clf_m2_security_hub.png"
        },
        {
          "id": "2.21",
          "title": "AWS Security Guidance and Support Resources",
          "bullets": [
            {
              "text": "**Official guidance:** Use AWS Security Documentation and the Well-Architected Security pillar for design and operating practices. The AWS Security Blog provides explanations and implementation examples.",
              "indent": 0
            },
            {
              "text": "**Security notices:** AWS Security Bulletins publish relevant security communications. Check the affected service, scope, and recommended action instead of assuming every notice applies to every workload.",
              "indent": 0
            },
            {
              "text": "**Learning and troubleshooting:** AWS re:Post and the Knowledge Center provide community discussion and support knowledge. Verify advice against current service documentation before applying it.",
              "indent": 0
            },
            {
              "text": "**Direct assistance:** AWS Support handles account or technical cases according to the support plan. AWS Professional Services helps with scoped transformation and implementation engagements. AWS cloud security and compliance pages provide additional official resources.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "2.18",
          "title": "Data Protection: Data Classification",
          "bullets": [
            {
              "text": "**Data Classification:** Categorizing data by sensitivity level so the right protection controls can be applied to each category.",
              "indent": 0
            },
            {
              "text": "**Common Classification Tiers:**",
              "indent": 1
            },
            {
              "text": "**Public:** Safe to disclose (marketing pages, documentation).",
              "indent": 2
            },
            {
              "text": "**Internal:** Business data with limited distribution (reports, wikis).",
              "indent": 2
            },
            {
              "text": "**Confidential:** Customer PII and financial records. Requires encryption and tight access control.",
              "indent": 2
            },
            {
              "text": "**Restricted:** Highly regulated secrets (credentials, health records). Strongest encryption, monitoring, and least-privilege access.",
              "indent": 2
            },
            {
              "text": "**Matching Controls to Tiers:**",
              "indent": 1
            },
            {
              "text": "Use resource tags to label data sensitivity, encrypt confidential tiers with **AWS KMS**, and let **Amazon Macie** automatically discover and classify sensitive data stored in S3.",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_data_classification.png"
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "2.1",
            "2.2"
          ],
          "question": "Under the AWS Shared Responsibility Model, which of the following is the sole responsibility of the customer?",
          "options": {
            "A": "Maintaining the hypervisor virtualization software",
            "B": "Patching the operating system of an EC2 instance",
            "C": "Destroying physical hard drives in AWS data centers",
            "D": "Upgrading database software on Amazon DynamoDB"
          },
          "correct": "B",
          "explanation": "Customer is responsible for everything \"IN\" the cloud, which includes configuring and patching the guest operating systems on virtual servers (EC2). A, C, and D are handled by AWS as part of core infrastructure and managed services.",
          "wrongExplanations": {
            "A": "Maintaining the hypervisor virtualization software is the responsibility of AWS (Security OF the Cloud).",
            "C": "Physical destruction of decommissioned hard drives inside AWS facilities is the responsibility of AWS.",
            "D": "Upgrading underlying database software on a fully managed service like DynamoDB is managed by AWS."
          }
        },
        {
          "id": 2,
          "teachingSlideIds": [
            "2.3",
            "2.5",
            "2.13",
            "2.14"
          ],
          "question": "A financial institution wants to prevent its developers from deploying resources in any AWS region outside of the US. What is the most efficient way to enforce this policy centrally across multiple developer accounts?",
          "options": {
            "A": "Attach an IAM Policy to every developer user",
            "B": "Configure an AWS Config rule in each account",
            "C": "Apply a Service Control Policy (SCP) at the Organizational Unit level",
            "D": "Use AWS Secrets Manager to block access"
          },
          "correct": "C",
          "explanation": "An SCP attached to an organizational unit (OU) sets a central permission boundary for its member accounts. A region-deny rule can prevent covered resource-creation actions outside approved Regions, even when a developer has administrator permissions in a member account. The SCP restricts permissions; it does not grant them.",
          "wrongExplanations": {
            "A": "Attaching IAM policies to individual users is complex to scale across multiple accounts and can be bypassed by users with local admin credentials.",
            "B": "AWS Config evaluates resource configurations and can trigger remediation. A Config rule does not itself deny a developer's resource-creation API request.",
            "D": "Secrets Manager stores secrets (keys/passwords), and does not enforce regional boundaries or permission policies."
          }
        },
        {
          "id": 3,
          "teachingSlideIds": [
            "2.7",
            "2.15",
            "2.16"
          ],
          "question": "Which AWS security service uses machine learning to continuously analyze account logs and detect potential malicious activity, such as unauthorized API calls or cryptocurrency mining?",
          "options": {
            "A": "Amazon Inspector",
            "B": "Amazon GuardDuty",
            "C": "AWS Shield",
            "D": "AWS Artifact"
          },
          "correct": "B",
          "explanation": "Amazon GuardDuty is an intelligent threat detection service that analyzes logs (VPC Flow Logs, CloudTrail, DNS) using machine learning to detect suspicious behaviors. Inspector is a vulnerability scanner for software patches. Shield is for DDoS protection. Artifact provides compliance PDF documents.",
          "wrongExplanations": {
            "A": "Amazon Inspector performs vulnerability assessments on EC2 instances and container images, rather than continuous account log threat detection.",
            "C": "AWS Shield provides managed DDoS protection for active web endpoints.",
            "D": "AWS Artifact is a portal to access AWS compliance reports and agreements, not a threat detection service."
          }
        }
      ]
    },
    {
      "id": 3,
      "title": "Cloud Technology and Services",
      "objectives": [
        "Compare the ways to manage AWS resources (Console, CLI, SDKs, IaC).",
        "Describe AWS global infrastructure components (Regions, AZs, Edge Locations).",
        "Identify core Compute, Database, Storage, and Networking services.",
        "List analytics, application integration, developer, and AI/ML services."
      ],
      "slides": [
        {
          "id": "3.1",
          "title": "Interacting with AWS",
          "bullets": [
            {
              "text": "**AWS Management Console:**",
              "indent": 0
            },
            {
              "text": "Web-based graphical user interface (GUI).",
              "indent": 2
            },
            {
              "text": "Best for beginners, visual dashboards, manual exploration, and learning.",
              "indent": 2
            },
            {
              "text": "**AWS Command Line Interface (AWS CLI):**",
              "indent": 1
            },
            {
              "text": "Terminal-based command tool.",
              "indent": 2
            },
            {
              "text": "Best for scripting, automation, and speed.",
              "indent": 2
            },
            {
              "text": "**Software Development Kits (SDKs):**",
              "indent": 1
            },
            {
              "text": "Programming libraries for specific languages (Python, Java, Node.js).",
              "indent": 2
            },
            {
              "text": "Allows applications to interact with AWS resources programmatically.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_aws_interaction.png"
        },
        {
          "id": "3.2",
          "title": "Infrastructure as Code (IaC)",
          "bullets": [
            {
              "text": "Manage and provision infrastructure using code configuration files, ensuring consistency, speed, and repeatability:",
              "indent": 0
            },
            {
              "text": "**AWS CloudFormation:**",
              "indent": 2
            },
            {
              "text": "Provisions AWS resources using declarative templates written in YAML or JSON.",
              "indent": 3
            },
            {
              "text": "**AWS Cloud Development Kit (AWS CDK):**",
              "indent": 2
            },
            {
              "text": "Allows you to define infrastructure using familiar programming languages (TypeScript, Python) which compiles into CloudFormation templates.",
              "indent": 3
            },
            {
              "text": "**AWS Service Catalog:**",
              "indent": 2
            },
            {
              "text": "Creates and manages catalogs of pre-approved, compliant IT services for organization-wide deployment.",
              "indent": 3
            },
            {
              "text": "**Repeatability:** A one-time console change creates a resource directly. A reviewed template records the intended resources so another environment can be created consistently and later changes can be compared.",
              "indent": 0
            }
          ],
          "visualization": "clf_m3_infrastructure_as_code.png"
        },
        {
          "id": "3.3",
          "title": "Deployment Models: Cloud, Hybrid, and On-Premises",
          "bullets": [
            {
              "text": "**All-In Cloud:** The entire application, databases, and assets run on AWS.",
              "indent": 0
            },
            {
              "text": "**Hybrid Cloud:** Integrates on-premises data centers with AWS services:",
              "indent": 1
            },
            {
              "text": "**AWS Outposts:** Runs physical AWS hardware inside your private data center for low-latency requirements.",
              "indent": 2
            },
            {
              "text": "**AWS Storage Gateway:** Connects local server storage to S3 cloud storage.",
              "indent": 2
            },
            {
              "text": "**On-Premises / Private Cloud:** Legacy hosting using virtualized local infrastructure.",
              "indent": 1
            }
          ],
          "visualization": "clf_m3_deployment_models.png"
        },
        {
          "id": "3.4",
          "title": "AWS Global Infrastructure",
          "bullets": [
            {
              "text": "**AWS Regions:** Geographic locations around the world (e.g., us-east-1). Each Region is isolated and independent.",
              "indent": 0
            },
            {
              "text": "**Availability Zones (AZs):** Each AZ contains one or more physical data centers within a Region.",
              "indent": 1
            },
            {
              "text": "AWS designs Regions with multiple Availability Zones. Check the selected Region's available zones and services when planning a deployment.",
              "indent": 2
            },
            {
              "text": "AZs are physically separated (flood plains, power grids) but connected via high-speed, redundant, low-latency fiber.",
              "indent": 2
            },
            {
              "text": "**Edge services:** CloudFront caches content near users, while Route 53 and Global Accelerator support global routing. WAF and Shield can protect supported edge-facing applications; an edge location is not a general-purpose Region.",
              "indent": 1
            }
          ],
          "visualization": "clf_m3_global_infrastructure.png"
        },
        {
          "id": "3.25",
          "title": "Regions, Edge Caches, and Global Deployment",
          "bullets": [
            {
              "text": "**Multiple Regions:** Consider geographic latency, business continuity, disaster recovery, service availability, and data-residency obligations. Multi-Region operation adds replication, routing, testing, and cost decisions.",
              "indent": 0
            },
            {
              "text": "**Multiple Availability Zones:** Distribute components within a Region to reduce the effect of a zone failure. This is a different failure boundary from replicating into another Region.",
              "indent": 0
            },
            {
              "text": "**CloudFront caching:** Edge locations serve cached content close to viewers. Regional edge caches can sit between edge locations and the origin to reduce origin requests for supported traffic.",
              "indent": 0
            },
            {
              "text": "**Protection and routing:** CloudFront, Route 53, Global Accelerator, WAF, and Shield have different delivery, routing, and protection roles. Select the required behavior rather than treating every edge service as a cache.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "3.5",
          "title": "Compute: Virtual Servers (EC2)",
          "bullets": [
            {
              "text": "**Amazon EC2:** Secure, resizable virtual servers in the cloud (called Instances).",
              "indent": 0
            },
            {
              "text": "**EC2 Instance Types (Optimized for workloads):**",
              "indent": 1
            },
            {
              "text": "**General Purpose (e.g., T4g):** Balanced compute, memory, and networking.",
              "indent": 2
            },
            {
              "text": "**Compute Optimized (e.g., C8g):** High-performance CPUs (best for batch processing, video encoding).",
              "indent": 2
            },
            {
              "text": "**Memory Optimized (e.g., R8g):** High RAM (best for in-memory databases).",
              "indent": 2
            },
            {
              "text": "**Accelerated Computing (e.g., G6e):** Uses hardware accelerators (GPUs) (best for AI/ML and graphics).",
              "indent": 2
            },
            {
              "text": "**Storage Optimized (e.g., I8g):** Fast local SSD storage (best for cache/data warehouses).",
              "indent": 2
            },
            {
              "text": "**HPC Optimized (e.g., Hpc7a):** Built specifically for High Performance Computing workloads.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_compute_toolbox.png"
        },
        {
          "id": "3.6",
          "title": "Compute: Management Options",
          "bullets": [
            {
              "text": "**AWS Elastic Beanstalk (PaaS):**",
              "indent": 0
            },
            {
              "text": "Upload your application code (Java, PHP, Python) and Beanstalk automatically handles provisioning, load balancing, auto-scaling, and health monitoring.",
              "indent": 2
            },
            {
              "text": "The team still owns its application, configuration, and supported platform-update decisions even when Beanstalk automates deployment tasks.",
              "indent": 2
            },
            {
              "text": "**Amazon Lightsail:**",
              "indent": 1
            },
            {
              "text": "Offers bundles for supported virtual servers, containers, storage, and databases. Compare the included allowances and additional usage charges for the chosen bundle.",
              "indent": 2
            },
            {
              "text": "Best for small websites, blogs, and testing environments.",
              "indent": 2
            },
            {
              "text": "**AWS Batch:**",
              "indent": 1
            },
            {
              "text": "Automates batch computing jobs across EC2 and Fargate, designed for large-scale data processing and HPC tasks.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_compute_management.png"
        },
        {
          "id": "3.7",
          "title": "High Availability Compute: Scaling & Load Balancing",
          "bullets": [
            {
              "text": "**Amazon EC2 Auto Scaling:**",
              "indent": 0
            },
            {
              "text": "Automatically adds or removes EC2 instances based on demand.",
              "indent": 2
            },
            {
              "text": "Replaces unhealthy instances automatically.",
              "indent": 2
            },
            {
              "text": "**Elastic Load Balancing (ELB):**",
              "indent": 1
            },
            {
              "text": "Distributes incoming application traffic across multiple EC2 instances, containers, and IP addresses.",
              "indent": 2
            },
            {
              "text": "Integrates with Auto Scaling to direct traffic to new instances as they spin up.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_autoscaling_loadbalancing.png"
        },
        {
          "id": "3.8",
          "title": "Compute: Container Orchestration",
          "bullets": [
            {
              "text": "Containers pack application code and dependencies into a single deployable unit.",
              "indent": 0
            },
            {
              "text": "**Amazon ECS (Elastic Container Service):**",
              "indent": 1
            },
            {
              "text": "AWS-native, highly efficient container management system.",
              "indent": 2
            },
            {
              "text": "**Amazon EKS (Elastic Kubernetes Service):**",
              "indent": 1
            },
            {
              "text": "Managed Kubernetes service to run standard container configurations.",
              "indent": 2
            },
            {
              "text": "**Hosting Models:**",
              "indent": 1
            },
            {
              "text": "*EC2 Launch Type:* You manage the underlying virtual servers hosting the containers.",
              "indent": 2
            },
            {
              "text": "*AWS Fargate:* Serverless container execution. You pay per container run without managing virtual servers.",
              "indent": 2
            },
            {
              "text": "**Amazon ECR:** Elastic Container Registry stores container images that ECS, EKS, and other compatible runtimes can pull. An image registry stores the package; a runtime executes it.",
              "indent": 0
            }
          ],
          "visualization": "clf_m3_container_orchestration.png"
        },
        {
          "id": "3.9",
          "title": "Compute: Serverless Code Execution (AWS Lambda)",
          "bullets": [
            {
              "text": "**AWS Lambda:**",
              "indent": 0
            },
            {
              "text": "Run code without provisioning or managing physical servers.",
              "indent": 2
            },
            {
              "text": "Standard Lambda usage is billed for requests and execution duration; duration is measured in milliseconds.",
              "indent": 2
            },
            {
              "text": "Automatically scales to handle matching execution traffic.",
              "indent": 2
            },
            {
              "text": "**Event-Driven:** Code executes in response to triggers (e.g., file upload to S3, database change, HTTP request).",
              "indent": 1
            }
          ],
          "visualization": "clf_m3_lambda_event_driven.png"
        },
        {
          "id": "3.10",
          "title": "Database Services: Relational (RDS & Aurora)",
          "bullets": [
            {
              "text": "Relational databases store structured data in tables with schemas.",
              "indent": 0
            },
            {
              "text": "**Amazon RDS (Relational Database Service):**",
              "indent": 1
            },
            {
              "text": "RDS manages supported relational engines such as PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, and Db2. Engine support, licensing, and capabilities vary.",
              "indent": 2
            },
            {
              "text": "**Multi-AZ:** Supports database availability through supported standby or cluster configurations. Replication and read-serving behavior depend on the deployment type.",
              "indent": 2
            },
            {
              "text": "*Read Replicas:* Offload read traffic to duplicate read-only instances.",
              "indent": 2
            },
            {
              "text": "**Amazon Aurora:**",
              "indent": 1
            },
            {
              "text": "Aurora provides MySQL- and PostgreSQL-compatible database options. Its distributed storage supports resilience across Availability Zones; evaluate performance with the intended workload rather than assuming a fixed speed multiplier.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_relational_databases.png"
        },
        {
          "id": "3.26",
          "title": "RDS Availability, Read Replicas, and Aurora Storage",
          "bullets": [
            {
              "text": "**Multi-AZ DB instance:** A synchronous standby in another Availability Zone provides failover support and does not serve read traffic. The configuration supports availability, not read scaling.",
              "indent": 0
            },
            {
              "text": "**Read replicas:** RDS uses supported engine replication to provide read-only copies, generally asynchronously. Replication lag is possible, and supported cross-Region replicas can contribute to a recovery design.",
              "indent": 0
            },
            {
              "text": "**Multi-AZ DB clusters:** Supported cluster deployments have a writer and readable standby instances. Do not apply the single-standby limitation to every Multi-AZ deployment.",
              "indent": 0
            },
            {
              "text": "**Aurora:** Its cluster storage spans three Availability Zones. Writer and reader instances use the cluster volume, and application routing distinguishes reads from writes. Check the engine and deployment configuration when planning failover.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "3.11",
          "title": "Database Services: NoSQL (DynamoDB)",
          "bullets": [
            {
              "text": "Non-relational databases store unstructured key-value or document data.",
              "indent": 0
            },
            {
              "text": "**Amazon DynamoDB:**",
              "indent": 1
            },
            {
              "text": "Fully managed NoSQL database service.",
              "indent": 2
            },
            {
              "text": "**Serverless operation:** AWS manages the underlying servers. Customers still design keys and indexes, select capacity settings, and monitor throttling and costs.",
              "indent": 2
            },
            {
              "text": "**Performance:** Design access patterns and capacity for low-latency requests. A poorly distributed key or insufficient configured capacity can affect observed performance.",
              "indent": 2
            },
            {
              "text": "**Global Tables:** Automatically replicates data across chosen AWS regions for global low-latency access.",
              "indent": 2
            },
            {
              "text": "**Purpose-Built Databases:** Specialized engines matched to specific workloads:",
              "indent": 1
            },
            {
              "text": "*Amazon Neptune:* Graph database.",
              "indent": 2
            },
            {
              "text": "*Amazon ElastiCache:* In-memory data store/cache.",
              "indent": 2
            },
            {
              "text": "*Amazon Redshift:* Data warehouse.",
              "indent": 2
            },
            {
              "text": "*Amazon DocumentDB:* MongoDB compatible document store.",
              "indent": 2
            },
            {
              "text": "**Amazon Timestream:** Provides time-series database offerings. Timestream for LiveAnalytics is closed to new customers; check available alternatives and the specific offering before selecting it.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_nosql_dynamodb.png"
        },
        {
          "id": "3.12",
          "title": "Database Migration Service (DMS)",
          "bullets": [
            {
              "text": "**AWS Database Migration Service (AWS DMS):**",
              "indent": 0
            },
            {
              "text": "Can load data and, for supported sources, replicate ongoing changes to reduce cutover downtime. Test compatibility, validation, and cutover because a migration is not automatically downtime-free.",
              "indent": 2
            },
            {
              "text": "**Homogeneous:** Migrating between same database types (e.g., Oracle to Oracle).",
              "indent": 2
            },
            {
              "text": "**Heterogeneous:** Migrating between different database types (e.g., Oracle to Aurora).",
              "indent": 2
            },
            {
              "text": "**AWS Schema Conversion Tool (AWS SCT):**",
              "indent": 1
            },
            {
              "text": "Schema conversion is needed when source and target structures differ. Use supported DMS Schema Conversion or AWS SCT capabilities as appropriate, and handle unsupported objects or application changes separately.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_database_migration.png"
        },
        {
          "id": "3.13",
          "title": "Network Services: VPC and Subnets",
          "bullets": [
            {
              "text": "**Amazon VPC:** A private, logically isolated virtual network within your AWS account.",
              "indent": 0
            },
            {
              "text": "**Subnets:** Subsections of a VPC used to organize resources:",
              "indent": 1
            },
            {
              "text": "**Public subnets:** Their route table has a route to an internet gateway. A resource also needs suitable addressing and security rules before it can communicate directly with the internet.",
              "indent": 2
            },
            {
              "text": "**Private subnets:** Have no direct route to an internet gateway. Where outbound internet access is needed, a public NAT gateway can provide an appropriate IPv4 path; private endpoints can reach supported services without that path.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_vpc_subnets.png"
        },
        {
          "id": "3.14",
          "title": "VPC Security: Security Groups vs. Network ACLs",
          "bullets": [
            {
              "text": "Protect your virtual network using two firewalls:",
              "indent": 0
            },
            {
              "text": "**Security Group:**",
              "indent": 2
            },
            {
              "text": "Stateful: response traffic for an allowed connection is permitted automatically. Rules still control which new connections may start.",
              "indent": 3
            },
            {
              "text": "Applies to associated network interfaces, such as those used by EC2 instances and supported database resources.",
              "indent": 3
            },
            {
              "text": "**Network ACL (Access Control List):**",
              "indent": 2
            },
            {
              "text": "Stateless (evaluates traffic both ways; rules must be explicitly created for inbound and outbound).",
              "indent": 3
            },
            {
              "text": "Operates at the **Subnet** level (attached to subnets).",
              "indent": 3
            }
          ],
          "visualization": "clf_m3_vpc_firewalls.png"
        },
        {
          "id": "3.15",
          "title": "Hybrid Connectivity: VPN, Direct Connect & PrivateLink",
          "bullets": [
            {
              "text": "**AWS Site-to-Site VPN:**",
              "indent": 0
            },
            {
              "text": "Creates an encrypted tunnel over the public internet between your on-premises router and AWS.",
              "indent": 2
            },
            {
              "text": "Fast to set up, cost-effective, but relies on public internet bandwidth.",
              "indent": 2
            },
            {
              "text": "**AWS Direct Connect:**",
              "indent": 1
            },
            {
              "text": "A physical, dedicated fiber-optic connection bypasses the public internet entirely.",
              "indent": 2
            },
            {
              "text": "Provides a dedicated network path with predictable connectivity characteristics. Encryption is a separate design decision; evaluate supported MACsec or VPN options when required.",
              "indent": 2
            },
            {
              "text": "**Amazon Route 53:**",
              "indent": 1
            },
            {
              "text": "A highly available, cloud-based Domain Name System (DNS) service that routes web traffic to domain targets.",
              "indent": 2
            },
            {
              "text": "**VPC Peering & Transit Gateway:**",
              "indent": 1
            },
            {
              "text": "Connect VPCs directly (Peering) or hub-and-spoke via a central router (Transit Gateway).",
              "indent": 2
            },
            {
              "text": "**AWS PrivateLink:**",
              "indent": 1
            },
            {
              "text": "Provides private connectivity to AWS services through VPC interface endpoints — traffic never traverses the public internet.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_hybrid_connectivity.png"
        },
        {
          "id": "3.27",
          "title": "Client VPN, Site-to-Site VPN, and DNS",
          "bullets": [
            {
              "text": "**AWS Client VPN:** Connect individual remote users to authorized resources through a managed VPN endpoint. This differs from connecting an entire office network.",
              "indent": 0
            },
            {
              "text": "**Site-to-Site VPN:** Connect a customer gateway device on the organization's side to a supported AWS endpoint, such as a virtual private gateway or transit gateway. Routing and tunnel configuration determine reachable networks.",
              "indent": 0
            },
            {
              "text": "**DNS resolution:** A client asks a resolver for a domain's records. If the answer is not cached, resolution follows the DNS hierarchy to the authoritative service, such as Route 53, and returns the appropriate record.",
              "indent": 0
            },
            {
              "text": "**Application traffic:** After resolving the destination, the client connects using the application protocol. DNS returns routing information; it does not carry the application's entire data exchange.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "3.16",
          "title": "Storage Services: Block vs. File vs. Object",
          "bullets": [
            {
              "text": "**Block Storage (Amazon EBS):**",
              "indent": 0
            },
            {
              "text": "Presents volumes as block devices, commonly for EC2 boot disks and databases. Attachment rules depend on volume and instance support; some EBS configurations support Multi-Attach.",
              "indent": 2
            },
            {
              "text": "**File Storage (Amazon EFS):**",
              "indent": 1
            },
            {
              "text": "Presents shared files and directories through network file access. EFS supports compatible clients that need to work with the same filesystem.",
              "indent": 2
            },
            {
              "text": "**Object Storage (Amazon S3):**",
              "indent": 1
            },
            {
              "text": "Keeps objects in buckets, each addressed by a key with associated data and metadata. Prefixes can organize keys, but a bucket does not require a traditional directory hierarchy.",
              "indent": 2
            },
            {
              "text": "**Amazon FSx:**",
              "indent": 1
            },
            {
              "text": "Launch highly-customized, specialized filesystems (e.g., Windows File Server, Lustre) for specific performance workloads.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_storage_comparison.png"
        },
        {
          "id": "3.28",
          "title": "Shared Filesystems and Object Access",
          "bullets": [
            {
              "text": "**EFS mount targets:** Clients use mount targets in the VPC to reach an EFS filesystem. For a Regional filesystem, use mount targets in the Availability Zones where clients run and allow the required network traffic.",
              "indent": 0
            },
            {
              "text": "**Regional and One Zone:** EFS offers different storage-resilience choices. Match mount-target placement and recovery planning to the selected filesystem type.",
              "indent": 0
            },
            {
              "text": "**S3 objects:** A bucket holds objects with keys, contents, and metadata. Access uses supported APIs and permissions, rather than mounting an ordinary block disk.",
              "indent": 0
            },
            {
              "text": "**A storage decision:** Store product images and analytics logs as S3 objects, share configuration files through a suitable filesystem, and use a database for transactional records that need database semantics.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "3.17",
          "title": "Block Storage Lifecycle: EBS vs. Instance Store",
          "bullets": [
            {
              "text": "**Amazon EBS (Elastic Block Store):**",
              "indent": 0
            },
            {
              "text": "EBS data survives an instance stop. On termination, the volume's DeleteOnTermination setting determines whether it is deleted. Keep independent snapshots or backups for recovery.",
              "indent": 2
            },
            {
              "text": "**EC2 Instance Store:**",
              "indent": 1
            },
            {
              "text": "Ephemeral (temporary) physical block storage. The disk is physically attached to the host hardware hosting the EC2 instance.",
              "indent": 2
            },
            {
              "text": "**Risk:** If the instance is stopped or terminated, all data is permanently lost.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_block_lifecycle.png"
        },
        {
          "id": "3.18",
          "title": "Object Storage: Amazon S3 Storage Classes",
          "bullets": [
            {
              "text": "**S3 Standard:** Supports frequent access with low retrieval latency and storage across multiple Availability Zones. Compare the complete storage, request, and transfer costs for the workload.",
              "indent": 0
            },
            {
              "text": "**S3 Standard-IA (Infrequent Access):** Data accessed less often but requires instant access when requested. Lower storage cost, retrieval fee applied.",
              "indent": 1
            },
            {
              "text": "**S3 Intelligent-Tiering:** Automatically moves files between hot/cold tiers based on changing access patterns with no retrieval fees.",
              "indent": 1
            },
            {
              "text": "**S3 Glacier Tiers (Archiving):**",
              "indent": 1
            },
            {
              "text": "*Glacier Instant Retrieval:* Miliseconds retrieval.",
              "indent": 2
            },
            {
              "text": "*Glacier Flexible:* Minutes to hours retrieval.",
              "indent": 2
            },
            {
              "text": "**S3 Glacier Deep Archive:** Suits long-retention data that can wait hours for retrieval. Retrieval option, minimum duration, and request charges affect the total cost.",
              "indent": 2
            },
            {
              "text": "**S3 Express One Zone:** Ultra-fast, single-digit millisecond latency storage inside a single AZ for high-performance computing.",
              "indent": 1
            },
            {
              "text": "**S3 One Zone-IA:** Stores infrequently accessed data in one Availability Zone. Use it when the data can be recreated or another protection strategy meets the resilience requirement.",
              "indent": 0
            }
          ],
          "visualization": "clf_m3_s3_storage_tiers.png"
        },
        {
          "id": "3.19",
          "title": "Hybrid Storage & Backups",
          "bullets": [
            {
              "text": "**AWS Storage Gateway:**",
              "indent": 0
            },
            {
              "text": "A hybrid storage service connecting local server environments to AWS.",
              "indent": 2
            },
            {
              "text": "Modes: **File Gateway** (local file access mapped to S3), **Volume Gateway** (local block disks backed by S3), **Tape Gateway** (replaces local tape backups with S3 Glacier).",
              "indent": 2
            },
            {
              "text": "**AWS Backup:**",
              "indent": 1
            },
            {
              "text": "Centrally manage, automate, and schedule backups across multiple AWS services (EC2, RDS, EBS, EFS) and on-premises volumes.",
              "indent": 2
            },
            {
              "text": "**Recovery design:** AWS Backup supports cross-Region and cross-account copies for eligible resources and configurations. Protect backup access and retention, and test restores as part of ransomware and disaster-recovery planning.",
              "indent": 0
            }
          ],
          "visualization": "clf_m3_hybrid_storage.png"
        },
        {
          "id": "3.20",
          "title": "Application Integration Services",
          "bullets": [
            {
              "text": "Integrate and decouple distributed systems:",
              "indent": 0
            },
            {
              "text": "**Amazon SQS (Simple Queue Service):**",
              "indent": 2
            },
            {
              "text": "A message queue service. Decouples and buffers workloads by holding messages in a queue until a worker consumes them. (Pull model).",
              "indent": 3
            },
            {
              "text": "**Amazon SNS (Simple Notification Service):**",
              "indent": 2
            },
            {
              "text": "A pub/sub messaging service. Sends notifications, SMS, or pushes alerts to subscribers. (Push model).",
              "indent": 3
            },
            {
              "text": "**Amazon EventBridge:**",
              "indent": 2
            },
            {
              "text": "A serverless event bus that connects applications using event data from SaaS apps and AWS services.",
              "indent": 3
            },
            {
              "text": "**AWS Step Functions:**",
              "indent": 2
            },
            {
              "text": "Orchestrates multiple AWS services into visual, multi-step workflows.",
              "indent": 3
            },
            {
              "text": "**Amazon API Gateway:**",
              "indent": 2
            },
            {
              "text": "The 'front door' for APIs: create, publish, secure, and monitor REST/HTTP APIs at any scale (commonly paired with Lambda).",
              "indent": 3
            }
          ],
          "visualization": "clf_m3_application_integration.png"
        },
        {
          "id": "3.21",
          "title": "Developer and Application Tools",
          "bullets": [
            {
              "text": "**AWS Amplify:**",
              "indent": 0
            },
            {
              "text": "A complete package of tools and services to build and deploy full-stack mobile and web apps quickly.",
              "indent": 2
            },
            {
              "text": "**AWS AppSync:**",
              "indent": 1
            },
            {
              "text": "Simplifies building applications with scalable GraphQL APIs.",
              "indent": 2
            },
            {
              "text": "**AWS Developer CI/CD Tools:**",
              "indent": 1
            },
            {
              "text": "**AWS CodeBuild:** Compiles source code, runs tests, and produces deployable software packages.",
              "indent": 2
            },
            {
              "text": "**AWS CodePipeline:** Automates the software release pipeline from code check-in to production deployment.",
              "indent": 2
            },
            {
              "text": "**AWS X-Ray:** Traces user requests through your microservices architecture to identify latency bottlenecks and debug errors.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_developer_cicd.png"
        },
        {
          "id": "3.22",
          "title": "Analytics Services: Data Pipelines",
          "bullets": [
            {
              "text": "**Ingest & Store:**",
              "indent": 0
            },
            {
              "text": "**Amazon Kinesis Data Streams:** Accepts streaming records that applications can process with supported consumers. **Amazon Data Firehose** delivers streaming data to supported destinations, with optional transformations.",
              "indent": 2
            },
            {
              "text": "**Amazon Redshift:** Fast, petabyte-scale data warehouse for complex SQL queries.",
              "indent": 2
            },
            {
              "text": "**Catalog & Process:**",
              "indent": 1
            },
            {
              "text": "**AWS Glue:** Serverless ETL (Extract, Transform, Load) service that automatically catalogs metadata.",
              "indent": 2
            },
            {
              "text": "**Amazon EMR:** Managed big data framework (Hadoop, Spark).",
              "indent": 2
            },
            {
              "text": "**Query & Visualize:**",
              "indent": 1
            },
            {
              "text": "**Amazon Athena:** Serverless query service to analyze raw data in S3 using standard SQL.",
              "indent": 2
            },
            {
              "text": "**Amazon QuickSight (now Amazon Quick Sight within Amazon Quick):** Provides business intelligence dashboards and interactive visualizations. Older course materials use the QuickSight name.",
              "indent": 2
            },
            {
              "text": "**Amazon OpenSearch Service:** Interactive log analytics, keyword search, and real-time visualization dashboards.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_analytics_pipeline.png"
        },
        {
          "id": "3.29",
          "title": "An Analytics Pipeline on AWS",
          "bullets": [
            {
              "text": "**Ingest and store:** Collect equipment readings through Kinesis Data Streams or deliver them with Data Firehose. Retain raw objects in S3 and use Redshift where warehouse analytics fits the data and query pattern.",
              "indent": 0
            },
            {
              "text": "**Catalog and prepare:** Glue Data Catalog records metadata. Glue jobs transform datasets, while EMR runs supported distributed processing frameworks such as Spark and Hadoop.",
              "indent": 0
            },
            {
              "text": "**Query:** Athena can query supported data in S3, Redshift runs warehouse SQL, and OpenSearch supports indexed search and analytics. These services serve different access patterns.",
              "indent": 0
            },
            {
              "text": "**Visualize and validate:** Amazon Quick Sight dashboards communicate results. Confirm freshness, permissions, and data quality before treating a chart as an operational decision.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "3.23",
          "title": "Artificial Intelligence and Machine Learning (AI/ML)",
          "bullets": [
            {
              "text": "**AI Services (Pre-built models accessed via APIs):**",
              "indent": 0
            },
            {
              "text": "**Amazon Rekognition:** Image and video analysis (object/face detection).",
              "indent": 2
            },
            {
              "text": "**Amazon Polly:** Converts text into lifelike speech.",
              "indent": 2
            },
            {
              "text": "**Amazon Transcribe:** Converts spoken audio into text.",
              "indent": 2
            },
            {
              "text": "**Amazon Translate:** Language translation service.",
              "indent": 2
            },
            {
              "text": "**Amazon Comprehend:** Natural language processing (NLP) and sentiment analysis.",
              "indent": 2
            },
            {
              "text": "**Amazon Lex:** Build conversational AI chatbots.",
              "indent": 2
            },
            {
              "text": "**Amazon Textract:** Extracts text and data from scanned documents.",
              "indent": 2
            },
            {
              "text": "**Amazon Kendra:** Intelligent search service.",
              "indent": 2
            },
            {
              "text": "**Amazon Personalize:** Automated recommendations.",
              "indent": 2
            },
            {
              "text": "**Generative AI Assistants:**",
              "indent": 1
            },
            {
              "text": "**Amazon Q Developer and Kiro:** Provide development assistance such as code suggestions and review. The Q Developer CLI was rebranded as Kiro; use the current supported tool and integration for the environment.",
              "indent": 2
            },
            {
              "text": "**Amazon Q Business:** Answers questions using connected organizational information. It is closed to new customers; AWS directs new evaluations of similar capabilities to Amazon Quick. Existing Q Business customers can continue using their service.",
              "indent": 2
            },
            {
              "text": "**Amazon Bedrock:** Provides managed access to foundation models for generative applications. This workshop introduces its service role; the AI Practitioner workshop develops model selection, retrieval, and evaluation in depth.",
              "indent": 2
            },
            {
              "text": "**End-to-End ML Platform:**",
              "indent": 1
            },
            {
              "text": "**Amazon SageMaker AI:** Fully managed platform to build, train, tune, and deploy custom machine learning models.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_ai_ml_services.png"
        },
        {
          "id": "3.24",
          "title": "Business Apps & End User Computing",
          "bullets": [
            {
              "text": "**Amazon Connect:**",
              "indent": 0
            },
            {
              "text": "A fully cloud-based, omni-channel contact center platform.",
              "indent": 2
            },
            {
              "text": "**Amazon SES (Simple Email Service):**",
              "indent": 1
            },
            {
              "text": "A bulk, scalable email service for marketing, notification, and transactional emails.",
              "indent": 2
            },
            {
              "text": "**Amazon WorkSpaces:**",
              "indent": 1
            },
            {
              "text": "Managed virtual desktop infrastructure (VDI) providing users secure remote access to windows/linux desktops from any device.",
              "indent": 2
            },
            {
              "text": "**Amazon WorkSpaces Applications (formerly Amazon AppStream 2.0):**",
              "indent": 1
            },
            {
              "text": "Streams desktop applications directly to a web browser without code changes.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_user_productivity.png"
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "3.3",
            "3.4"
          ],
          "question": "Which aspect of AWS global infrastructure consists of one or more physical data centers and is connected to other similar clusters via low-latency, redundant fiber networks?",
          "options": {
            "A": "AWS Region",
            "B": "Edge Location",
            "C": "Availability Zone",
            "D": "Outpost"
          },
          "correct": "C",
          "explanation": "An Availability Zone (AZ) is made up of one or more physical data centers in a Region. AZs are separated physically but linked by high-speed fiber. A Region is a geographic collection of AZs. Edge locations cache content. Outposts are physical racks placed in your office.",
          "wrongExplanations": {
            "A": "An AWS Region is a physical, geographical area containing multiple isolated and physically separated Availability Zones.",
            "B": "Edge Locations are endpoints used by Amazon CloudFront to cache media and web contents closer to end-users.",
            "D": "AWS Outposts are physical hardware racks that bring native AWS services and infrastructure on-premises."
          }
        },
        {
          "id": 2,
          "teachingSlideIds": [
            "3.5"
          ],
          "question": "An application requires high-performance CPU processing for transcoding massive batch video files. The workload runs once a day and is not real-time. Which EC2 instance family would be most appropriate?",
          "options": {
            "A": "General Purpose (T-family)",
            "B": "Compute Optimized (C-family)",
            "C": "Memory Optimized (R-family)",
            "D": "Storage Optimized (I-family)"
          },
          "correct": "B",
          "explanation": "Compute Optimized instances (like the C-family) are designed for compute-bound applications that require high performance processors, making them perfect for transcoding batch files.",
          "wrongExplanations": {
            "A": "General Purpose (T-family) provides a balanced mix of resources and is not optimized for high-performance CPU-bound tasks like video encoding.",
            "C": "Memory Optimized (R-family) is designed for processing large datasets in memory (e.g. database systems) rather than CPU-bound transcoding.",
            "D": "Storage Optimized (I-family) is designed for high read/write storage access to very large datasets on local NVMe disk arrays."
          }
        },
        {
          "id": 3,
          "teachingSlideIds": [
            "3.5",
            "3.6",
            "3.8",
            "3.9"
          ],
          "question": "Which AWS service runs an event-handler function when a file is uploaded to Amazon S3, without requiring you to provision or manage virtual servers?",
          "options": {
            "A": "Amazon EC2",
            "B": "AWS Fargate",
            "C": "AWS Lambda",
            "D": "AWS Elastic Beanstalk"
          },
          "correct": "C",
          "explanation": "AWS Lambda runs functions in response to events such as S3 uploads. AWS manages the execution infrastructure. Standard usage is billed for requests and execution duration.",
          "wrongExplanations": {
            "A": "Amazon EC2 requires deploying, patching, scaling, and managing underlying virtual server instances (not serverless).",
            "B": "AWS Fargate supplies serverless compute for containers managed through ECS or EKS. The scenario asks for the event-handler function execution taught under Lambda.",
            "D": "Elastic Beanstalk automates application deployment, provisioning, load balancing, and scaling on managed application environments. Lambda is the function-execution service described here."
          }
        }
      ]
    },
    {
      "id": 4,
      "title": "Billing, Pricing, and Support",
      "objectives": [
        "Compare the compute pricing options (On-Demand, Spot, Reserved, Savings Plans).",
        "Identify free vs. paid data transfer directions in AWS.",
        "Explain cost management tools (Pricing Calculator, Cost Explorer, Budgets, CUR).",
        "Review AWS Support plans and the Technical Account Manager (TAM) role."
      ],
      "slides": [
        {
          "id": "4.1",
          "title": "AWS Pricing Fundamentals",
          "bullets": [
            {
              "text": "AWS pricing follows three core principles:",
              "indent": 0
            },
            {
              "text": "**Pay-as-you-go:** Usage determines the bill without a long-term commitment. The billing unit depends on the service: compute time, requests, stored data, or another measured resource.",
              "indent": 2
            },
            {
              "text": "**Save When You Commit:** Lock in lower rates by committing to a 1- or 3-year term for compute and databases (Savings Plans/Reserved Instances).",
              "indent": 2
            },
            {
              "text": "**Pay Less by Using More:** Volume discounts apply as your data footprint grows (especially in storage and data transfer).",
              "indent": 2
            },
            {
              "text": "**Storage Pricing Dimensions:**",
              "indent": 1
            },
            {
              "text": "**S3 cost factors:** Region and storage class affect rates. Estimate stored GB-months, requests, retrievals, and transfers; include minimum storage durations and object sizes where applicable. Lifecycle transitions can also incur request charges.",
              "indent": 2
            }
          ],
          "visualization": "clf_m4_pricing_principles.png"
        },
        {
          "id": "4.2",
          "title": "Compute Purchase Options (Part 1)",
          "bullets": [
            {
              "text": "**On-Demand Instances:**",
              "indent": 0
            },
            {
              "text": "On-Demand compute has no long-term commitment; rates and billing granularity depend on the instance configuration.",
              "indent": 2
            },
            {
              "text": "Best for spiky, unpredictable workloads or short-term app testing.",
              "indent": 2
            },
            {
              "text": "**Spot Instances:**",
              "indent": 1
            },
            {
              "text": "Use spare EC2 capacity at a discount compared with On-Demand. Spot prices are set by AWS.",
              "indent": 2
            },
            {
              "text": "**Interruption:** Spot can be stopped, terminated, or hibernated. Stop and termination notices normally give two minutes; hibernation starts immediately. Design checkpointing and retries for interruptions.",
              "indent": 2
            },
            {
              "text": "Best for stateless, fault-tolerant, batch-processing workloads.",
              "indent": 2
            }
          ],
          "visualization": "clf_m4_compute_pricing_1.png"
        },
        {
          "id": "4.3",
          "title": "Compute Purchase Options (Part 2)",
          "bullets": [
            {
              "text": "**Reserved Instances (RIs):**",
              "indent": 0
            },
            {
              "text": "A one- or three-year Reserved Instance commitment discounts matching EC2 usage. Regional reservations provide billing benefits; zonal reservations also reserve matching capacity in their Availability Zone.",
              "indent": 2
            },
            {
              "text": "**Standard and Convertible:** Convertible RIs support exchanges for different eligible configurations under exchange rules. Standard RIs offer less exchange flexibility; permitted modifications still exist.",
              "indent": 2
            },
            {
              "text": "**Size flexibility:** Eligible regional RIs can cover other sizes in the same family. The next lesson separates this rule from discount sharing across accounts.",
              "indent": 2
            },
            {
              "text": "**Savings Plans:**",
              "indent": 1
            },
            {
              "text": "Commit to a dollar amount of eligible usage per hour for one or three years. Charges for the commitment continue even when usage falls below that level.",
              "indent": 2
            },
            {
              "text": "**Plan scope:** Compute Savings Plans can cover eligible EC2, Fargate, and Lambda usage. EC2 Instance Savings Plans apply to a selected instance family in a Region. A discount commitment alone does not reserve capacity.",
              "indent": 2
            }
          ],
          "visualization": "clf_m4_compute_pricing_2.png"
        },
        {
          "id": "4.15",
          "title": "RI Size Flexibility and Discount Sharing",
          "bullets": [
            {
              "text": "**Eligibility:** Size flexibility applies to supported regional Linux/UNIX RIs with default tenancy. Zonal RIs, dedicated tenancy, and excluded platforms or instance families do not receive it.",
              "indent": 0
            },
            {
              "text": "**Normalized capacity:** For an eligible m5 reservation, one m5.xlarge has the same normalized capacity as two m5.large instances. Apply the discount to matching usage; an RI is not a running virtual machine.",
              "indent": 0
            },
            {
              "text": "**Consolidated billing:** AWS Organizations can share eligible RI and Savings Plans discounts across participating accounts, subject to billing sharing settings. This is separate from size flexibility.",
              "indent": 0
            },
            {
              "text": "**Volume discounts:** Eligible usage can be aggregated across an organization for tiered pricing. Consolidation does not combine every service charge into a single universal discount.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "4.4",
          "title": "EC2 Isolation: Dedicated Hosts vs. Dedicated Instances",
          "bullets": [
            {
              "text": "For strict compliance, security, or licensing requirements:",
              "indent": 0
            },
            {
              "text": "**Dedicated Instances:**",
              "indent": 2
            },
            {
              "text": "Virtual instances run on hardware dedicated to a single customer, isolated from other accounts. (Still managed as standard virtual instances).",
              "indent": 3
            },
            {
              "text": "**Dedicated Hosts:**",
              "indent": 2
            },
            {
              "text": "You rent a **physical server** dedicated entirely to your workloads.",
              "indent": 3
            },
            {
              "text": "Gives you full visibility and control over physical cores and sockets.",
              "indent": 3
            },
            {
              "text": "Physical host visibility can support eligible socket- or core-based bring-your-own-license (BYOL) arrangements. Check the software license terms and compliance requirement before choosing tenancy.",
              "indent": 3
            },
            {
              "text": "**Capacity Reservations:**",
              "indent": 2
            },
            {
              "text": "**Capacity Reservations:** Hold matching EC2 capacity in one Availability Zone. Unused reserved capacity is still billed at the applicable On-Demand rate; matching running instances are not billed twice. Eligible billing discounts can apply.",
              "indent": 3
            }
          ],
          "visualization": "clf_m4_dedicated_infrastructure.png"
        },
        {
          "id": "4.5",
          "title": "Cloud Data Transfer Costs",
          "bullets": [
            {
              "text": "**Read the path:** Charges depend on the services, Availability Zones, Regions, and network path. Distinguish data-transfer charges from compute, storage, and network-device charges.",
              "indent": 0
            },
            {
              "text": "**Same Availability Zone:** Direct private-IP traffic between an EC2 instance and an RDS database in the same AZ has no data-transfer charge. The resources themselves still incur their normal charges.",
              "indent": 0
            },
            {
              "text": "**Different Availability Zones:** EC2-to-EC2 and EC2-to-RDS traffic across AZs in the same Region generally incurs regional data-transfer charges.",
              "indent": 0
            },
            {
              "text": "**Across Regions:** EC2 traffic sent from one AWS Region to another generally incurs inter-Region transfer charges.",
              "indent": 0
            },
            {
              "text": "**Internet traffic:** Standard inbound data transfer to EC2 is free. Outbound internet data can incur charges after applicable free allowances.",
              "indent": 0
            },
            {
              "text": "**Other charges:** NAT gateways, VPN connections, Direct Connect, and other network services can add their own charges. A free data-transfer path does not make the whole application free.",
              "indent": 0
            }
          ],
          "visualization": "clf_m4_data_transfer_costs.png"
        },
        {
          "id": "4.16",
          "title": "Networking Price Components",
          "bullets": [
            {
              "text": "**AWS Transit Gateway:** Estimate attachment hours and applicable data-processing charges in addition to transfer charges along the path.",
              "indent": 0
            },
            {
              "text": "**AWS Site-to-Site VPN:** A connection can incur hourly charges even when little traffic flows. Data transfer and options such as acceleration can add costs.",
              "indent": 0
            },
            {
              "text": "**AWS Direct Connect:** Include connection or port-hour charges, outbound transfer, and any connectivity-provider fees. A dedicated connection does not make all data transfer free.",
              "indent": 0
            },
            {
              "text": "**Estimate the route:** Trace source, destination, AZ, Region, and intermediary services. Model the full path in AWS Pricing Calculator using the relevant service pricing pages.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "4.6",
          "title": "AWS Cost Management Tools",
          "bullets": [
            {
              "text": "**AWS Billing Dashboard:**",
              "indent": 0
            },
            {
              "text": "View invoices, tracking details, payment history, and high-level charts showing where costs are growing.",
              "indent": 2
            },
            {
              "text": "**AWS Pricing Calculator (Before Deployment):**",
              "indent": 1
            },
            {
              "text": "Build an architectural mockup and estimate monthly and annual costs before provisioning resources.",
              "indent": 2
            },
            {
              "text": "**AWS Cost Explorer (After Deployment):**",
              "indent": 1
            },
            {
              "text": "Visualize, analyze, and graph your historical cost patterns, resource usage, and forecast future costs.",
              "indent": 2
            },
            {
              "text": "**AWS Budgets (Alerts):**",
              "indent": 1
            },
            {
              "text": "Set custom cost and usage limits. Triggers alerts (email/SNS) when your forecasted or actual costs exceed your threshold.",
              "indent": 2
            },
            {
              "text": "**AWS Cost & Usage Report (CUR):**",
              "indent": 1
            },
            {
              "text": "Export detailed cost and usage records to Amazon S3 for analysis by service, account, and activated tags. AWS Data Exports offers CUR 2.0 with selectable columns and filtering.",
              "indent": 2
            }
          ],
          "visualization": "clf_m4_cost_management_tools.png"
        },
        {
          "id": "4.7",
          "title": "Cost Allocation: Tagging",
          "bullets": [
            {
              "text": "**Tags:** Key-value metadata labels attached to resources (e.g., Key: `Department`, Value: `Finance`).",
              "indent": 0
            },
            {
              "text": "**Cost Allocation Tags:** Activate tags in the billing console to track expenses by tag values.",
              "indent": 1
            },
            {
              "text": "Allows you to organize cost reports (CUR, Cost Explorer) by:",
              "indent": 1
            },
            {
              "text": "Project or Application name.",
              "indent": 2
            },
            {
              "text": "Environment (Dev, Testing, Production).",
              "indent": 2
            },
            {
              "text": "Cost Center or Department.",
              "indent": 2
            },
            {
              "text": "**Tag types:** AWS-generated tags describe supported resource attributes; user-defined tags apply your own business labels. Activate supported cost allocation tags for billing reports—creating a resource tag alone is not enough.",
              "indent": 0
            }
          ],
          "visualization": "clf_m4_cost_tagging.png"
        },
        {
          "id": "4.17",
          "title": "Total Cost of Ownership and Cost Attribution",
          "bullets": [
            {
              "text": "**Total cost of ownership (TCO):** Compare cloud costs with the full cost of the existing environment, including hardware, facilities, software, staffing, and maintenance over the same period.",
              "indent": 0
            },
            {
              "text": "**Migration Evaluator and Pricing Calculator:** Use assessed usage to build a migration business case, then estimate a proposed AWS configuration. Document growth and utilization assumptions so the comparison is meaningful.",
              "indent": 0
            },
            {
              "text": "**Attribute spending:** Use accounts and activated allocation tags to assign costs to teams or products. Review untagged and shared resources before treating a report as a complete chargeback.",
              "indent": 0
            },
            {
              "text": "**Act on the result:** Cost Explorer investigates spending trends; Budgets monitors thresholds. Neither a forecast nor a budget alert automatically caps all AWS charges.",
              "indent": 0
            }
          ],
          "visualization": ""
        },
        {
          "id": "4.8",
          "title": "AWS Support Plans (Part 1)",
          "bullets": [
            {
              "text": "**Basic Support:** Included account and billing assistance, service health information, and self-service learning resources. It does not provide technical troubleshooting by support engineers.",
              "indent": 0
            },
            {
              "text": "**Business Support+:** Adds round-the-clock access to AWS engineers, contextual AI assistance, third-party software help, and expanded Trusted Advisor access.",
              "indent": 0
            },
            {
              "text": "**Plan selection:** Compare the required technical assistance, proactive guidance, and incident response with current plan entitlements. Paid support charges use plan-specific minimums and usage calculations.",
              "indent": 0
            }
          ],
          "visualization": "clf_m4_support_plans_1.png"
        },
        {
          "id": "4.9",
          "title": "AWS Support Plans (Part 2)",
          "bullets": [
            {
              "text": "**Enterprise Support:** Includes a designated Technical Account Manager (TAM) for proactive operational guidance and coordination, along with technical support.",
              "indent": 0
            },
            {
              "text": "**Unified Operations:** Adds deeper operational engagement for critical workloads. Compare its current scope with Enterprise Support when ongoing operational partnership is required.",
              "indent": 0
            },
            {
              "text": "**Legacy names:** Developer Support, Business Support, and Enterprise On-Ramp appear in older learning materials. AWS schedules their discontinuation for January 1, 2027, with separate availability rules for AWS GovCloud (US).",
              "indent": 0
            },
            {
              "text": "**Response targets:** Initial engagement time depends on severity and plan. A response target is not a guarantee that the incident will be resolved within that time.",
              "indent": 0
            }
          ],
          "visualization": "clf_m4_support_plans_2.png"
        },
        {
          "id": "4.10",
          "title": "Self-Assessment Tool: AWS Trusted Advisor",
          "bullets": [
            {
              "text": "AWS Trusted Advisor checks account resources against best practices and returns findings in these categories:",
              "indent": 0
            },
            {
              "text": "1. **Cost Optimization:** Find idle EC2 instances or unattached EBS disks.",
              "indent": 2
            },
            {
              "text": "2. **Security:** Find public S3 buckets or missing root MFA.",
              "indent": 2
            },
            {
              "text": "3. **Fault Tolerance:** Find resources missing Multi-AZ setups.",
              "indent": 2
            },
            {
              "text": "4. **Performance:** Check for throughput limitations or CPU bottlenecks.",
              "indent": 2
            },
            {
              "text": "5. **Operational Excellence:** Audit operations and configurations.",
              "indent": 2
            },
            {
              "text": "6. **Service Limits:** Alert when account usage approaches default limits.",
              "indent": 2
            },
            {
              "text": "**Access:** Basic includes service-limit checks and selected security and fault-tolerance checks. Business Support+, Enterprise Support, and Unified Operations provide the full check set. Check availability changes; do not memorize a fixed total.",
              "indent": 1
            }
          ],
          "visualization": "clf_m4_trusted_advisor.png"
        },
        {
          "id": "4.11",
          "title": "Health Monitoring: AWS Health",
          "bullets": [
            {
              "text": "**AWS Health Dashboard:**",
              "indent": 0
            },
            {
              "text": "*Public Events:* Service-wide status and regional outages visible to anyone.",
              "indent": 2
            },
            {
              "text": "*Account-Specific Events:* Issues and notifications specifically affecting your AWS resources.",
              "indent": 2
            },
            {
              "text": "**AWS User Notifications:** Configure delivery and aggregation of supported AWS events so recipients receive relevant operational notifications. Delivery depends on event and notification settings.",
              "indent": 1
            },
            {
              "text": "**AWS Health API:** Retrieve health events programmatically with an eligible paid plan: Business Support+, Enterprise Support, or Unified Operations. AWS documents transitional access for eligible legacy plans.",
              "indent": 1
            }
          ],
          "visualization": "clf_m4_aws_health.png"
        },
        {
          "id": "4.12",
          "title": "AWS Trust & Safety",
          "bullets": [
            {
              "text": "**Reporting Abuse:** Direct channel to report any illegal or abusive activity originating from AWS resources (e.g., spam, phishing, DDoS hosting).",
              "indent": 0
            },
            {
              "text": "**Abuse Notices:** How to respond and remediate issues if AWS notifies you that your resource is acting maliciously.",
              "indent": 1
            },
            {
              "text": "**Protection & Messaging:** Core best practices for secure digital messaging and securing application endpoints.",
              "indent": 1
            }
          ],
          "visualization": "clf_m4_trust_safety.png"
        },
        {
          "id": "4.13",
          "title": "AWS Business Ecosystem: Partners & Marketplace",
          "bullets": [
            {
              "text": "**AWS Partner Network (APN):**",
              "indent": 0
            },
            {
              "text": "A global community of thousands of partners (consulting, software, reseller, managed services) to help you build, deploy, and scale AWS solutions.",
              "indent": 2
            },
            {
              "text": "**AWS Marketplace:**",
              "indent": 1
            },
            {
              "text": "A catalog for discovering and procuring third-party software, data, and professional services, including products with supported subscription or private-offer terms.",
              "indent": 2
            },
            {
              "text": "**Key Features:** Pay-as-you-go, BYOL, or subscription pricing with unified billing (charges appear directly on your AWS invoice).",
              "indent": 2
            },
            {
              "text": "**Partner roles:** Consulting and managed-service partners can assist with implementation or operations; technology partners provide software. Training and validated expertise can help evaluate a partner. Funding or incentives depend on program eligibility.",
              "indent": 0
            }
          ],
          "visualization": "clf_m4_partner_marketplace.png"
        },
        {
          "id": "4.14",
          "title": "Support Resources: Professional Services & Architects",
          "bullets": [
            {
              "text": "**AWS Solutions Architects:**",
              "indent": 0
            },
            {
              "text": "Provide general technical guidance, best practices, and architecture reviews (like Well-Architected reviews) to optimize your design.",
              "indent": 2
            },
            {
              "text": "**AWS Professional Services:**",
              "indent": 1
            },
            {
              "text": "A global team of experts who work directly with your organization on projects for implementation assistance and knowledge transfer.",
              "indent": 2
            },
            {
              "text": "**Community Forums:**",
              "indent": 1
            },
            {
              "text": "**AWS re:Post:** A community-driven, expert-reviewed Q&A forum for technical support.",
              "indent": 2
            },
            {
              "text": "**AWS Knowledge Center:** FAQs and guide videos answering common technical issues.",
              "indent": 2
            }
          ],
          "visualization": "clf_m4_support_experts.png"
        },
        {
          "id": "4.18",
          "title": "Choosing AWS Learning and Support Resources",
          "bullets": [
            {
              "text": "**Documentation:** Use service guides for configuration steps and API references for request and response behavior. Check release notes and AWS blogs for changes and implementation examples.",
              "indent": 0
            },
            {
              "text": "**Whitepapers and AWS Well-Architected:** Use these resources to evaluate design principles and architecture tradeoffs.",
              "indent": 0
            },
            {
              "text": "**AWS Prescriptive Guidance:** Look for patterns, strategies, and migration playbooks that explain how to carry out a defined technical change.",
              "indent": 0
            },
            {
              "text": "**AWS re:Post and Knowledge Center:** Search community discussions and troubleshooting articles. For an account-specific incident, open an appropriate case in AWS Support Center rather than posting sensitive details publicly.",
              "indent": 0
            }
          ],
          "visualization": ""
        }
      ],
      "quiz": [
        {
          "id": 1,
          "teachingSlideIds": [
            "4.1",
            "4.2",
            "4.3"
          ],
          "question": "A media company runs batch processing jobs that can tolerate interruptions. It wants to use discounted spare EC2 capacity. Which purchase option fits this requirement?",
          "options": {
            "A": "On-Demand Instances",
            "B": "Savings Plans",
            "C": "Spot Instances",
            "D": "Reserved Instances"
          },
          "correct": "C",
          "explanation": "Spot Instances use spare EC2 capacity at a discount. AWS can reclaim that capacity, so interruptible batch jobs are a suitable use case.",
          "wrongExplanations": {
            "A": "On-Demand avoids a long-term commitment but does not purchase discounted, interruptible spare capacity.",
            "B": "Savings Plans reduce eligible compute rates in exchange for a committed hourly spend over one or three years. They do not purchase interruptible spare capacity.",
            "D": "Reserved Instances provide billing discounts for a one- or three-year commitment. They are not the spare-capacity purchase option in this scenario."
          }
        },
        {
          "id": 2,
          "teachingSlideIds": [
            "4.5"
          ],
          "question": "Which transfer has no data-transfer charge? Ignore free allowances and separate charges for running resources or network services.",
          "options": {
            "A": "Copying data from an EC2 instance in us-east-1 to us-west-2",
            "B": "Sending data directly between EC2 and an RDS database in the same Availability Zone using private IP addresses",
            "C": "Copying data from an EC2 instance to another EC2 instance in different Availability Zones within the same region",
            "D": "Sending data from an EC2 instance to a customer over the internet"
          },
          "correct": "B",
          "explanation": "Direct private-IP traffic between EC2 and RDS in the same Availability Zone has no data-transfer charge. This rule does not remove charges for running EC2, RDS, or additional network services.",
          "wrongExplanations": {
            "A": "Copying data across different AWS Regions (e.g. us-east-1 to us-west-2) incurs standard inter-region data transfer fees.",
            "C": "EC2-to-EC2 traffic across different Availability Zones in the same Region generally incurs regional data-transfer charges.",
            "D": "Outbound internet traffic from EC2 can incur transfer charges. The question excludes free allowances, so they do not make this option free."
          }
        },
        {
          "id": 3,
          "teachingSlideIds": [
            "4.8",
            "4.9"
          ],
          "question": "Among these support options, which provides a designated Technical Account Manager (TAM) for proactive operational guidance?",
          "options": {
            "A": "Basic Support",
            "B": "Developer Support (legacy)",
            "C": "Business Support+",
            "D": "Enterprise Support"
          },
          "correct": "D",
          "explanation": "Enterprise Support includes a designated TAM. Business Support+ gives access to support engineers but does not include this designated relationship.",
          "wrongExplanations": {
            "A": "Basic Support offers account and billing assistance and self-service resources, without a designated TAM.",
            "B": "The legacy Developer plan does not include a designated TAM.",
            "C": "Business Support+ offers round-the-clock technical support but does not assign a designated TAM."
          }
        }
      ]
    },
    {
      "id": 5,
      "title": "Course Wrap-up & Exam Tips",
      "objectives": [
        "Review the four exam domains and key keywords.",
        "Master test-taking strategy, question analysis, and elimination techniques.",
        "Identify final prep resources and registration steps."
      ],
      "slides": [
        {
          "id": "5.1",
          "title": "Test-Taking Strategy (Part 1)",
          "bullets": [
            {
              "text": "**Identify Key Qualifiers:** Pay attention to constraint keywords in the questions:",
              "indent": 0
            },
            {
              "text": "*MOST cost-effective* (Look for pricing options like Spot, Serverless, S3 Glacier).",
              "indent": 2
            },
            {
              "text": "*MINIMAL operational overhead* (Look for managed services like RDS, Beanstalk, DynamoDB over EC2).",
              "indent": 2
            },
            {
              "text": "*HIGHLY resilient / fault-tolerant* (Look for Multi-AZ, Load Balancers, Auto Scaling).",
              "indent": 2
            },
            {
              "text": "**Read ALL Options:** Do not select the first answer that seems correct. Read all choices, as one may fit the constraint qualifiers better.",
              "indent": 1
            }
          ],
          "visualization": "clf_m5_exam_keywords.png"
        },
        {
          "id": "5.2",
          "title": "Test-Taking Strategy (Part 2)",
          "bullets": [
            {
              "text": "**Use Elimination:** Cross off obviously incorrect answers first. For example, if a question asks about database migrations, eliminate general compute or storage options.",
              "indent": 0
            },
            {
              "text": "**Time Management:**",
              "indent": 1
            },
            {
              "text": "The standard exam allows 90 minutes for 65 questions, about 1.4 minutes per question on average. Aim to keep some time for reviewing flagged answers.",
              "indent": 2
            },
            {
              "text": "If a question is too complex, make a best guess, **flag it for review**, and move on. Do not get stuck on a single question.",
              "indent": 2
            },
            {
              "text": "**No Penalty for Guessing:** Answer every single question. Unanswered questions are marked as incorrect.",
              "indent": 1
            }
          ],
          "visualization": "clf_m5_time_management.png"
        },
        {
          "id": "5.3",
          "title": "Exam Prep Resources",
          "bullets": [
            {
              "text": "**Official AWS Skill Builder Practice Question Set:** Take the free official prep quiz to align with the question style and wording of the exam.",
              "indent": 0
            },
            {
              "text": "**Tutorials Dojo (Practice Exams):** Review detailed explanations to understand why answers are correct and incorrect.",
              "indent": 1
            },
            {
              "text": "**AWS Whitepapers:** Review the \"AWS Well-Architected Framework\" whitepaper.",
              "indent": 1
            },
            {
              "text": "**AWS Skill Builder:** Choose digital courses to revisit concepts and supported hands-on experiences to practise applying them. Check each activity’s current availability and access terms.",
              "indent": 1
            },
            {
              "text": "**Register for Your Exam:** Log in to your AWS Certification account. Schedule your exam to be taken at a Pearson VUE testing center or online.",
              "indent": 1
            }
          ],
          "visualization": "clf_m5_final_prep.png"
        },
        {
          "id": "5.4",
          "title": "Readiness Review and Continued Learning",
          "bullets": [
            {
              "text": "**Review by domain:** Cloud Concepts accounts for 24% of scored content, Security and Compliance 30%, Cloud Technology and Services 34%, and Billing, Pricing, and Support 12%. Review weak topics in every domain.",
              "indent": 0
            },
            {
              "text": "**Official practice options:** Use the Official Practice Question Set to learn the question format, a pretest to identify weaknesses, and the AWS Certification Official Practice Exam to assess readiness. Access terms vary by resource.",
              "indent": 0
            },
            {
              "text": "**Apply the concepts:** AWS Cloud Quest provides game-based activities; AWS Builder Labs offers guided practice. Use available scenario challenges to explain your design decisions, then review what the result teaches.",
              "indent": 0
            },
            {
              "text": "**Feedback and help:** Send workshop corrections to the organizer. For AWS Training and Certification account or exam issues, use the official training support channel.",
              "indent": 0
            }
          ],
          "visualization": ""
        }
      ],
      "quiz": []
    },
    {
      "id": 6,
      "title": "Skill Builder Labs",
      "objectives": [
        "Gain hands-on experience with core AWS services using official Skill Builder labs.",
        "Launch, resize, manage, and monitor an Amazon EC2 instance.",
        "Create a custom VPC, configure subnets, and define internet routing.",
        "Create Amazon S3 buckets, manage objects, and understand lifecycle options.",
        "Manage access permissions, groups, and IAM policies."
      ],
      "slides": [
        {
          "id": "6.1",
          "title": "LAB: Introduction to Amazon EC2 (Free)",
          "bullets": [
            {
              "text": "**Lab Overview:** This lab provides a basic overview of launching, resizing, managing, and monitoring an Amazon EC2 instance.",
              "indent": 0
            },
            {
              "text": "**Key Tasks:**",
              "indent": 1
            },
            {
              "text": "Launch an EC2 instance with the Amazon Linux AMI.",
              "indent": 2
            },
            {
              "text": "Select an instance type (t2.micro) and configure network settings.",
              "indent": 2
            },
            {
              "text": "Resize an active instance and monitor CPU utilization metrics in CloudWatch.",
              "indent": 2
            },
            {
              "text": "Clean up resources by terminating the instance.",
              "indent": 2
            },
            {
              "text": "**Official Lab Link:** [Launch Lab on AWS Skill Builder](https://skillbuilder.aws/learn/9VNGAHHAUU/introduction-to-amazon-ec2/)",
              "indent": 1
            }
          ],
          "visualization": "clf_m6_ec2_lab.png"
        },
        {
          "id": "6.2",
          "title": "LAB: Introduction to Amazon VPC (Free)",
          "bullets": [
            {
              "text": "**Lab Overview:** This lab introduces you to Amazon Virtual Private Cloud (Amazon VPC). You will use the Amazon VPC wizard to create a VPC, public subnet, and route tables.",
              "indent": 0
            },
            {
              "text": "**Key Tasks:**",
              "indent": 1
            },
            {
              "text": "Create a custom VPC using the VPC Wizard in the console.",
              "indent": 2
            },
            {
              "text": "Configure public and private subnets with appropriate IP ranges.",
              "indent": 2
            },
            {
              "text": "Attach an Internet Gateway (IGW) to allow internet connectivity.",
              "indent": 2
            },
            {
              "text": "Define routing in the route tables to allow flow between subnets and the IGW.",
              "indent": 2
            },
            {
              "text": "**Official Lab Link:** [Launch Lab on AWS Skill Builder](https://skillbuilder.aws/learn/PH6Z6EVH8Z/introduction-to-amazon-virtual-private-cloud-vpc/)",
              "indent": 1
            }
          ],
          "visualization": "clf_m6_vpc_lab.png"
        },
        {
          "id": "6.3",
          "title": "LAB: Introduction to Amazon S3 (Free)",
          "bullets": [
            {
              "text": "**Lab Overview:** This lab demonstrates how to use an Amazon S3 bucket and manage files, or objects, that are stored in the bucket.",
              "indent": 0
            },
            {
              "text": "**Key Tasks:**",
              "indent": 1
            },
            {
              "text": "Create a uniquely named S3 bucket in a designated AWS region.",
              "indent": 2
            },
            {
              "text": "Upload files (objects) into the bucket and configure access permissions.",
              "indent": 2
            },
            {
              "text": "Move, copy, view, and delete objects in the bucket.",
              "indent": 2
            },
            {
              "text": "Understand S3 versioning, lifecycle configuration, and clean up S3 buckets.",
              "indent": 2
            },
            {
              "text": "**Official Lab Link:** [Launch Lab on AWS Skill Builder](https://skillbuilder.aws/learn/R54NZHEX5K/introduction-to-amazon-simple-storage-service-s3/)",
              "indent": 1
            }
          ],
          "visualization": "clf_m6_s3_lab.png"
        },
        {
          "id": "6.4",
          "title": "LAB: Introduction to AWS IAM (Free)",
          "bullets": [
            {
              "text": "**Lab Overview:** This lab shows you how to manage access and permissions to your AWS services using AWS Identity and Access Management (IAM).",
              "indent": 0
            },
            {
              "text": "**Key Tasks:**",
              "indent": 1
            },
            {
              "text": "Create IAM users and add them to custom security groups.",
              "indent": 2
            },
            {
              "text": "Manage user credentials (passwords) and require MFA.",
              "indent": 2
            },
            {
              "text": "Define and apply IAM policies to restrict user access to specific services.",
              "indent": 2
            },
            {
              "text": "Log in as an IAM user to verify policy restrictions and permissions.",
              "indent": 2
            },
            {
              "text": "**Official Lab Link:** [Launch Lab on AWS Skill Builder](https://skillbuilder.aws/learn/XFPX3M7HAQ/introduction-to-aws-identity-and-access-management-iam/)",
              "indent": 1
            }
          ],
          "visualization": "clf_m6_iam_lab.png"
        }
      ],
      "quiz": []
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLF_COURSE_DATA;
}
