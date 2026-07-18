const CLF_COURSE_DATA = {
  "id": "clf",
  "version": "v1.5 beta",
  "title": "AWS Certified Cloud Practitioner (CLF-C02)",
  "description": "Master the foundations of the AWS Cloud and prepare to pass your CLF certification exam.",
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
          "visualization": "clf_m1_domain_weights.svg"
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
          "visualization": "clf_m1_cloud_basics.svg"
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
              "text": "**Benefit from Massive Economies of Scale:** AWS has millions of customers. This massive scale allows AWS to purchase hardware at lower costs and pass those savings directly to you.",
              "indent": 1
            },
            {
              "text": "**Stop Guessing Capacity:** Instead of purchasing excess hardware that sits idle, or running out of capacity during a traffic spike, scale resources dynamically as demand dictates.",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_traditional_vs_cloud.svg"
        },
        {
          "id": "1.4",
          "title": "Six Key Benefits of the Cloud (Part 2)",
          "bullets": [
            {
              "text": "**Increase Speed and Agility:** Spin up new servers, databases, or test environments in minutes rather than weeks.",
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
          "visualization": "clf_m1_global_reach.svg"
        },
        {
          "id": "1.5",
          "title": "High Availability and Reliability",
          "bullets": [
            {
              "text": "**High Availability (HA):** Systems designed to minimize downtime and remain operational without human intervention.",
              "indent": 0
            },
            {
              "text": "**Redundancy:** Avoiding single points of failure by deploying backup systems.",
              "indent": 1
            },
            {
              "text": "**Multi-AZ Deployments:** Placing duplicate servers in separate physical locations (Availability Zones). If one location suffers an outage, traffic automatically redirects to the healthy zone.",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_high_availability.svg"
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
              "text": "**Elasticity:** The ability of a system to automatically scale horizontal resources in real-time to match fluctuating demand.",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_scaling_dimensions.svg"
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
          "visualization": "clf_m1_well_architected_pillars.svg"
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
          "visualization": "clf_m1_operations_security.svg"
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
          "visualization": "clf_m1_reliability_performance.svg"
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
              "text": "Anticipate and adopt new, more efficient hardware and software offerings (like AWS Graviton).",
              "indent": 2
            }
          ],
          "visualization": "clf_m1_cost_sustainability.svg"
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
          "visualization": "clf_m1_well_architected_tool.svg"
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
          "visualization": "clf_m1_caf_honeycomb.svg"
        },
        {
          "id": "1.13",
          "title": "Seven Migration Strategies (The 7 Rs)",
          "bullets": [
            {
              "text": "**Rehost (Lift and Shift):** Move applications to AWS without changes.",
              "indent": 0
            },
            {
              "text": "**Relocate:** Move VMware workloads to AWS at the hypervisor level.",
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
          "visualization": "clf_m1_migration_7rs.svg"
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
              "text": "**AWS Migration Evaluator:** Analyzes your on-premises server inventory, CPU utilization, and memory usage to build a data-driven business case for migrating to AWS.",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_migration_workflow.svg"
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
          "visualization": "clf_m1_cost_economics.svg"
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
          "visualization": "clf_m1_rightsizing.svg"
        },
        {
          "id": "1.17",
          "title": "Cloud Economics: Licensing Options",
          "bullets": [
            {
              "text": "**Bring Your Own License (BYOL):** Reuse your existing software licenses (e.g., Microsoft SQL Server, Windows Server) on AWS to reduce costs.",
              "indent": 0
            },
            {
              "text": "**License Included (LI):** Pay for both the infrastructure and software license in a single, unified bill. No upfront license fees or separate contract management.",
              "indent": 1
            },
            {
              "text": "**AWS License Manager:** A service to centrally track, manage, and enforce software licensing rules across your AWS and on-premises environments.",
              "indent": 1
            }
          ],
          "visualization": "clf_m1_licensing_byol.svg"
        }
      ],
      "quiz": [
        {
          "id": 1,
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
            "A": "Global latency reduction (Go global in minutes) is achieved through features like AWS Edge Locations and Amazon CloudFront, not capacity scaling.",
            "B": "Benefit from massive economies of scale is a general cost benefit of the cloud, but does not focus on matching real-time dynamic capacity to demand.",
            "D": "The cloud trades fixed upfront expenses for variable operating expenses, not the other way around."
          }
        },
        {
          "id": 2,
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
          "question": "A company wants to migrate an on-premises database to Amazon RDS without modifying the database engine or core application logic. Which migration strategy is being used?",
          "options": {
            "A": "Rehost",
            "B": "Replatform",
            "C": "Refactor",
            "D": "Retain"
          },
          "correct": "B",
          "explanation": "Moving a database to a managed service like Amazon RDS is a classic example of \"Replatform\" (Lift, Tinker, and Shift). You are changing the hosting platform to a managed model but keeping the database engine and code unchanged. Rehost would be moving the database to a self-managed server on EC2. Refactor would require rewriting the app for a serverless database.",
          "wrongExplanations": {
            "A": "Rehost (Lift and Shift) involves moving the database to self-managed EC2 instances without changing the platform or leveraging managed database services.",
            "C": "Refactor involves re-architecting the application to use cloud-native features like serverless databases (e.g. DynamoDB).",
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
          "visualization": "clf_m2_shared_responsibility.svg"
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
              "text": "AWS handles OS patching, hardware backups, and database engine maintenance.",
              "indent": 3
            },
            {
              "text": "Customer only manages database access permissions, schema design, and database utilization.",
              "indent": 3
            }
          ],
          "visualization": "clf_m2_responsibility_shifts.svg"
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
            }
          ],
          "visualization": "clf_m2_organizations_tree.svg"
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
          "visualization": "clf_m2_resource_sharing.svg"
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
              "text": "Records all API calls made in your AWS account.",
              "indent": 2
            },
            {
              "text": "Answers: **Who** did it, **what** action was taken, **when** did it happen, and from **where** (IP address)?",
              "indent": 2
            },
            {
              "text": "Logs are saved securely in S3 for forensic auditing.",
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
              "text": "Detects configuration drift and can trigger automatic remediation.",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_cloudtrail_vs_config.svg"
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
              "text": "**Guardrails:** Enforces mandatory and recommended governance policies (e.g., enforcing MFA, blocking public S3 buckets) using AWS Organizations SCPs and AWS Config rules.",
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
          "visualization": "clf_m2_control_tower.svg"
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
              "text": "Download third-party auditor reports proving AWS physical security compliance (e.g., ISO, PCI DSS, SOC 1/2/3).",
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
              "text": "Automatically collects and organizes audit evidence to simplify compliance audits.",
              "indent": 2
            },
            {
              "text": "Maps resource configurations directly to industry standards (e.g., GDPR, HIPAA).",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_compliance_documentation.svg"
        },
        {
          "id": "2.8",
          "title": "Data Protection: Encryption Keys and KMS",
          "bullets": [
            {
              "text": "Data protection is a critical customer responsibility.",
              "indent": 0
            },
            {
              "text": "**Encryption in Transit (Data moving over network):**",
              "indent": 1
            },
            {
              "text": "Secured using HTTPS.",
              "indent": 2
            },
            {
              "text": "Managed by **AWS Certificate Manager (ACM)**, which provisions, manages, and automatically renews SSL/TLS certificates.",
              "indent": 2
            },
            {
              "text": "Access AWS endpoints securely via HTTPS (including FIPS endpoints where available).",
              "indent": 2
            },
            {
              "text": "**Encryption at Rest (Stored data):**",
              "indent": 1
            },
            {
              "text": "Managed by **AWS Key Management Service (KMS)**.",
              "indent": 2
            },
            {
              "text": "KMS allows you to create and manage cryptographic keys.",
              "indent": 2
            },
            {
              "text": "*AWS Managed Keys:* AWS automatically rotates and manages.",
              "indent": 3
            },
            {
              "text": "*Customer Managed Keys:* Customer controls rotation, access policies, and usage.",
              "indent": 3
            }
          ],
          "visualization": "clf_m2_encryption_types.svg"
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
              "text": "Meets stringent regulatory standards (FIPS 140-2 Level 3).",
              "indent": 2
            },
            {
              "text": "**Amazon Macie:**",
              "indent": 1
            },
            {
              "text": "An AI-driven service that automatically discovers, classifies, and protects sensitive data.",
              "indent": 2
            },
            {
              "text": "Scans S3 buckets for Personally Identifiable Information (PII) (e.g., credit card numbers, SSNs) and alerts you to exposed data.",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_cloudhsm_macie.svg"
        },
        {
          "id": "2.10",
          "title": "Access Management: Protecting the Root User",
          "bullets": [
            {
              "text": "**The Root User:** Created when the AWS account is opened. Has complete, absolute access to all billing and technical resources.",
              "indent": 0
            },
            {
              "text": "**Critical Protection Rules:**",
              "indent": 1
            },
            {
              "text": "**Never** use the root user for daily administrative tasks.",
              "indent": 2
            },
            {
              "text": "Secure the account with a strong password and **Multi-Factor Authentication (MFA)**.",
              "indent": 2
            },
            {
              "text": "Lock away root access keys (delete them if not needed).",
              "indent": 2
            },
            {
              "text": "**Only use the root user to:**",
              "indent": 1
            },
            {
              "text": "Close the AWS account.",
              "indent": 2
            },
            {
              "text": "Change root account settings (emails, passwords, support plans).",
              "indent": 2
            },
            {
              "text": "Restore deleted IAM administrator permissions.",
              "indent": 2
            },
            {
              "text": "Perform billing and consolidated billing tasks.",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_root_protection.svg"
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
              "text": "**IAM Role:** A temporary identity assumed by users, applications, or AWS services (uses **AWS STS** to get short-lived **temporary security credentials**).",
              "indent": 1
            },
            {
              "text": "**Principle of Least Privilege:** Grant only the exact permissions needed to do a job, and nothing more.",
              "indent": 1
            }
          ],
          "visualization": "clf_m2_iam_entities.svg"
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
          "visualization": "clf_m2_federated_access.svg"
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
          "visualization": "clf_m2_iam_policies.svg"
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
              "text": "**Key Difference:** Automatically rotates database credentials, API keys, and OAuth tokens, and integrates directly with RDS.",
              "indent": 2
            }
          ],
          "visualization": "clf_m2_secrets_management.svg"
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
          "visualization": "clf_m2_network_defense.svg"
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
          "visualization": "clf_m2_threat_detection.svg"
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
            }
          ],
          "visualization": "clf_m2_security_hub.svg"
        }
      ],
      "quiz": [
        {
          "id": 1,
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
          "question": "A financial institution wants to prevent its developers from deploying resources in any AWS region outside of the US. What is the most efficient way to enforce this policy centrally across multiple developer accounts?",
          "options": {
            "A": "Attach an IAM Policy to every developer user",
            "B": "Configure an AWS Config rule in each account",
            "C": "Apply a Service Control Policy (SCP) at the Organizational Unit level",
            "D": "Use AWS Secrets Manager to block access"
          },
          "correct": "C",
          "explanation": "Service Control Policies (SCPs) in AWS Organizations let you define central permission guardrails across all accounts in an OU. An SCP can block region access globally, which cannot be bypassed even by administrator/root credentials in member accounts.",
          "wrongExplanations": {
            "A": "Attaching IAM policies to individual users is complex to scale across multiple accounts and can be bypassed by users with local admin credentials.",
            "B": "AWS Config rules only monitor and flag violations after they occur (detective), rather than preventing the actions.",
            "D": "Secrets Manager stores secrets (keys/passwords), and does not enforce regional boundaries or permission policies."
          }
        },
        {
          "id": 3,
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
          "visualization": "clf_m3_aws_interaction.svg"
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
            }
          ],
          "visualization": "clf_m3_infrastructure_as_code.svg"
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
          "visualization": "clf_m3_deployment_models.svg"
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
              "text": "**Availability Zones (AZs):** Datacenter clusters within a Region.",
              "indent": 1
            },
            {
              "text": "Each Region has at least three AZs.",
              "indent": 2
            },
            {
              "text": "AZs are physically separated (flood plains, power grids) but connected via high-speed, redundant, low-latency fiber.",
              "indent": 2
            },
            {
              "text": "**Edge Locations:** Caching sites distributed globally to deliver content fast to end-users (used by CloudFront CDN, Route 53, WAF, and Global Accelerator).",
              "indent": 1
            }
          ],
          "visualization": "clf_m3_global_infrastructure.svg"
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
          "visualization": "clf_m3_compute_toolbox.svg"
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
              "text": "Best for developers who don't want to manage OS setups.",
              "indent": 2
            },
            {
              "text": "**Amazon Lightsail:**",
              "indent": 1
            },
            {
              "text": "Simple, low-cost virtual private server (VPS) bundles. Includes compute, storage, DNS, and database in a fixed monthly price.",
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
          "visualization": "clf_m3_compute_management.svg"
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
          "visualization": "clf_m3_autoscaling_loadbalancing.svg"
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
            }
          ],
          "visualization": "clf_m3_container_orchestration.svg"
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
              "text": "Pay only for the compute time you consume (milliseconds of execution).",
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
          "visualization": "clf_m3_lambda_event_driven.svg"
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
              "text": "Managed SQL service supporting engines: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Amazon Aurora.",
              "indent": 2
            },
            {
              "text": "*Multi-AZ:* Automatically replicates to a standby instance in another AZ for disaster recovery.",
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
              "text": "Enterprise-grade, AWS-designed relational database. Up to 5x faster than standard MySQL. Relies on fault-tolerant, self-healing shared storage across AZs.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_relational_databases.svg"
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
              "text": "**Serverless:** Scales automatically with zero management.",
              "indent": 2
            },
            {
              "text": "**Performance:** Single-digit millisecond latency at any scale.",
              "indent": 2
            },
            {
              "text": "**Global Tables:** Automatically replicates data across chosen AWS regions for global low-latency access.",
              "indent": 2
            },
            {
              "text": "**Other Database Engines:**",
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
              "text": "*Amazon Timestream:* Time-series database.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_nosql_dynamodb.svg"
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
              "text": "Migrates databases to AWS securely with minimal source database downtime.",
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
              "text": "Required for heterogeneous migrations. Converts the source database schema and code structures to match the target database engine.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_database_migration.svg"
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
              "text": "**Public Subnets:** Connected to the **Internet Gateway (IGW)**. Resources (like web servers) have public IP addresses and can access/be accessed from the internet.",
              "indent": 2
            },
            {
              "text": "**Private Subnets:** Isolated from the public internet. Used for sensitive backends (databases, application servers). Accesses the internet securely outbound using a **NAT Gateway** (placed in the public subnet).",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_vpc_subnets.svg"
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
              "text": "Stateful (remembers traffic states; if inbound is allowed, outbound is automatically allowed).",
              "indent": 3
            },
            {
              "text": "Operates at the **Instance** level (attached to EC2/RDS).",
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
          "visualization": "clf_m3_vpc_firewalls.svg"
        },
        {
          "id": "3.15",
          "title": "Hybrid Connectivity: VPN and Direct Connect",
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
              "text": "High speeds, extremely low latency, highly secure, but takes longer to provision.",
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
            }
          ],
          "visualization": "clf_m3_hybrid_connectivity.svg"
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
              "text": "Stores data in fixed-size blocks. Mounted directly to a single EC2 instance as a hard drive. (Best for databases).",
              "indent": 2
            },
            {
              "text": "**File Storage (Amazon EFS):**",
              "indent": 1
            },
            {
              "text": "Stores data in a hierarchical file/folder structure. Can be shared and mounted to hundreds of Linux EC2 instances simultaneously.",
              "indent": 2
            },
            {
              "text": "**Object Storage (Amazon S3):**",
              "indent": 1
            },
            {
              "text": "Stores data as flat objects (files + metadata) inside flat directories (called Buckets). Accessible globally via APIs.",
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
          "visualization": "clf_m3_storage_comparison.svg"
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
              "text": "Persistent block storage. If the EC2 instance is stopped or terminated, the data remains intact. Supports backup snapshots.",
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
          "visualization": "clf_m3_block_lifecycle.svg"
        },
        {
          "id": "3.18",
          "title": "Object Storage: Amazon S3 Storage Classes",
          "bullets": [
            {
              "text": "**S3 Standard:** Hot data accessed frequently. Fast access, high throughput, highest storage cost.",
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
              "text": "*Glacier Deep Archive:* Cheapest storage tier, takes 12-48 hours to retrieve.",
              "indent": 2
            },
            {
              "text": "**S3 Express One Zone:** Ultra-fast, single-digit millisecond latency storage inside a single AZ for high-performance computing.",
              "indent": 1
            }
          ],
          "visualization": "clf_m3_s3_storage_tiers.svg"
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
            }
          ],
          "visualization": "clf_m3_hybrid_storage.svg"
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
            }
          ],
          "visualization": "clf_m3_application_integration.svg"
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
          "visualization": "clf_m3_developer_cicd.svg"
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
              "text": "**Amazon Kinesis / Data Firehose:** Ingests large streams of real-time data records (IoT, logs).",
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
              "text": "**Amazon QuickSight:** Business intelligence (BI) service to build interactive dashboards and visualizations.",
              "indent": 2
            },
            {
              "text": "**Amazon OpenSearch Service:** Interactive log analytics, keyword search, and real-time visualization dashboards.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_analytics_pipeline.svg"
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
              "text": "**Amazon Q Developer:** Generates, reviews, and refines code within IDEs.",
              "indent": 2
            },
            {
              "text": "**Amazon Q Business:** Connects to company data to answer employee queries.",
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
          "visualization": "clf_m3_ai_ml_services.svg"
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
              "text": "**Amazon AppStream 2.0:**",
              "indent": 1
            },
            {
              "text": "Streams desktop applications directly to a web browser without code changes.",
              "indent": 2
            }
          ],
          "visualization": "clf_m3_user_productivity.svg"
        }
      ],
      "quiz": [
        {
          "id": 1,
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
          "question": "Which AWS serverless compute service allows you to run code in response to events (such as files uploaded to S3) without managing virtual servers, billing you only for the exact milliseconds the code runs?",
          "options": {
            "A": "Amazon EC2",
            "B": "AWS Fargate",
            "C": "AWS Lambda",
            "D": "AWS Elastic Beanstalk"
          },
          "correct": "C",
          "explanation": "AWS Lambda is the core serverless compute service. It is event-driven and runs code only when triggered, charging per millisecond. Fargate is for serverless containers, not pure raw code files. EC2 and Beanstalk require server provisioning/management.",
          "wrongExplanations": {
            "A": "Amazon EC2 requires deploying, patching, scaling, and managing underlying virtual server instances (not serverless).",
            "B": "AWS Fargate runs serverless containerized applications (Docker), not pure raw code packages directly.",
            "D": "AWS Elastic Beanstalk is a Platform-as-a-Service (PaaS) to deploy applications on standard servers, which it still provisions and manages behind the scenes."
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
              "text": "**Pay-As-You-Go:** No long-term contracts. Pay only for the resources you consume hourly or per-second.",
              "indent": 2
            },
            {
              "text": "**Save When You Commit:** Lock in lower rates by committing to a 1- or 3-year term for compute and databases (Savings Plans/Reserved Instances).",
              "indent": 2
            },
            {
              "text": "**Pay Less by Using More:** Volume discounts apply as your data footprint grows (especially in storage and data transfer).",
              "indent": 2
            }
          ],
          "visualization": "clf_m4_pricing_principles.svg"
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
              "text": "Fixed, standard hourly rates. No long-term commitments.",
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
              "text": "Bid on unused AWS compute capacity for up to **90% discount** compared to On-Demand.",
              "indent": 2
            },
            {
              "text": "**Catch:** AWS can reclaim (terminate) the instance with a 2-minute warning if they need the capacity back.",
              "indent": 2
            },
            {
              "text": "Best for stateless, fault-tolerant, batch-processing workloads.",
              "indent": 2
            }
          ],
          "visualization": "clf_m4_compute_pricing_1.svg"
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
              "text": "Save up to **75%** by committing to a 1- or 3-year term for a specific instance type, region, and platform.",
              "indent": 2
            },
            {
              "text": "Options: *Standard RIs* (fixed) or *Convertible RIs* (allows altering instance types/OS during the term).",
              "indent": 2
            },
            {
              "text": "*Size Flexibility:* Within AWS Organizations, unused RIs automatically apply to smaller or larger instances of the same family (e.g. 1 m5.large covers 2 m5.mediums, and 2 m5.mediums cover 1 m5.large).",
              "indent": 2
            },
            {
              "text": "**Savings Plans:**",
              "indent": 1
            },
            {
              "text": "Save up to **72%** by committing to a consistent dollar spend per hour (e.g., $10/hour) for 1 or 3 years.",
              "indent": 2
            },
            {
              "text": "**More Flexible:** Applies automatically across EC2, Lambda, and Fargate regardless of region or instance size changes.",
              "indent": 2
            }
          ],
          "visualization": "clf_m4_compute_pricing_2.svg"
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
              "text": "Required to meet specific compliance standards or reuse your existing per-core software licenses (BYOL).",
              "indent": 3
            },
            {
              "text": "**Capacity Reservations:**",
              "indent": 2
            },
            {
              "text": "Reserve compute capacity in a specific Availability Zone to ensure availability when needed. Pay On-Demand rates unless coupled with an RI or Savings Plan.",
              "indent": 3
            }
          ],
          "visualization": "clf_m4_dedicated_infrastructure.svg"
        },
        {
          "id": "4.5",
          "title": "Cloud Data Transfer Costs",
          "bullets": [
            {
              "text": "Understanding data transfer charges is crucial to cost optimization:",
              "indent": 0
            },
            {
              "text": "**Inbound Data (Internet into AWS):** Always **Free**.",
              "indent": 2
            },
            {
              "text": "**Outbound Data (AWS out to Internet):** **Charged** per GB.",
              "indent": 2
            },
            {
              "text": "**Data Transfer within AWS (Same Region):**",
              "indent": 2
            },
            {
              "text": "*Same Availability Zone (VPC Peering):* **Free**.",
              "indent": 3
            },
            {
              "text": "*Across different Availability Zones:* **Charged** per GB (both directions, e.g., EC2 to RDS in different AZs).",
              "indent": 3
            },
            {
              "text": "**Inter-Region Transfer (Region to Region):** **Charged** per GB.",
              "indent": 2
            },
            {
              "text": "**Connectivity Tools:** Site-to-Site VPN and Direct Connect charge connection/port fees plus outbound data rates (inbound is free).",
              "indent": 2
            }
          ],
          "visualization": "clf_m4_data_transfer_costs.svg"
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
              "text": "The most detailed, raw cost report available. Outputs granular hourly details by service, account, and tags to S3 for database analytics.",
              "indent": 2
            }
          ],
          "visualization": "clf_m4_cost_management_tools.svg"
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
            }
          ],
          "visualization": "clf_m4_cost_tagging.svg"
        },
        {
          "id": "4.8",
          "title": "AWS Support Plans (Part 1)",
          "bullets": [
            {
              "text": "**Basic Support:**",
              "indent": 0
            },
            {
              "text": "**Cost:** Free for all customers.",
              "indent": 2
            },
            {
              "text": "**Scope:** 24/7 access to billing support, service quota increases, health dashboards, and 7 core Trusted Advisor checks.",
              "indent": 2
            },
            {
              "text": "**Developer Support:**",
              "indent": 1
            },
            {
              "text": "**Cost:** Starts at $29/month.",
              "indent": 2
            },
            {
              "text": "**Scope:** Adds email access to cloud support associates.",
              "indent": 2
            },
            {
              "text": "**Response Times:** <24 business hours for general questions; <12 business hours for system impaired.",
              "indent": 2
            },
            {
              "text": "**Target:** Building blocks/testing environments.",
              "indent": 2
            }
          ],
          "visualization": "clf_m4_support_plans_1.svg"
        },
        {
          "id": "4.9",
          "title": "AWS Support Plans (Part 2)",
          "bullets": [
            {
              "text": "**Business Support:**",
              "indent": 0
            },
            {
              "text": "**Cost:** Starts at $100/month.",
              "indent": 2
            },
            {
              "text": "**Scope:** 24/7 phone, email, and chat access to cloud support engineers. Help with third-party software integrations. All Trusted Advisor checks.",
              "indent": 2
            },
            {
              "text": "**Response Times:** <1 hour for production systems down.",
              "indent": 2
            },
            {
              "text": "**Enterprise Support (and Enterprise On-Ramp):**",
              "indent": 1
            },
            {
              "text": "**Cost:** Starts at $15,000/month (On-Ramp starts at $5,500/month).",
              "indent": 2
            },
            {
              "text": "**Scope:** Adds a dedicated **Technical Account Manager (TAM)**, who acts as a personal architectural advocate. Adds Infrastructure Event Management (IEM).",
              "indent": 2
            },
            {
              "text": "**Response Times:** <15 minutes for critical business outages (<30m for Enterprise On-Ramp).",
              "indent": 2
            }
          ],
          "visualization": "clf_m4_support_plans_2.svg"
        },
        {
          "id": "4.10",
          "title": "Self-Assessment Tool: AWS Trusted Advisor",
          "bullets": [
            {
              "text": "A service that automatically inspects your AWS environment to find optimization opportunities across 6 key pillars:",
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
              "text": "**Access:** Basic/Developer support get 7 core checks; Business and above get all 480+ checks.",
              "indent": 1
            }
          ],
          "visualization": "clf_m4_trusted_advisor.svg"
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
              "text": "**AWS User Notifications:** Instantly aggregates notifications from multiple sources (events, billing, limits) in one place.",
              "indent": 1
            },
            {
              "text": "**AWS Health API:** Programmatically fetch health and notification data (available for Business Support and above).",
              "indent": 1
            }
          ],
          "visualization": "clf_m4_aws_health.svg"
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
          "visualization": "clf_m4_trust_safety.svg"
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
              "text": "A digital catalog of third-party software, AMI templates, and services that run directly on AWS.",
              "indent": 2
            },
            {
              "text": "**Key Features:** Pay-as-you-go, BYOL, or subscription pricing with unified billing (charges appear directly on your AWS invoice).",
              "indent": 2
            }
          ],
          "visualization": "clf_m4_partner_marketplace.svg"
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
          "visualization": "clf_m4_support_experts.svg"
        }
      ],
      "quiz": [
        {
          "id": 1,
          "question": "A media transcoding company runs batch processing jobs that can tolerate unexpected interruptions and server terminations. The company wants to secure the highest discount possible for compute costs. Which EC2 pricing model is most appropriate?",
          "options": {
            "A": "On-Demand Instances",
            "B": "Savings Plans",
            "C": "Spot Instances",
            "D": "Reserved Instances"
          },
          "correct": "C",
          "explanation": "Spot Instances offer the largest discount (up to 90%) but can be interrupted when AWS needs capacity back. Since the workload is a batch processing job that can tolerate interruptions, Spot is the perfect choice to minimize cost.",
          "wrongExplanations": {
            "A": "On-Demand Instances offer maximum flexibility with zero commitments, but do not provide any discount.",
            "B": "Savings Plans offer discounts in exchange for a committed hourly spend over 1 or 3 years, but are less cost-effective than Spot instances for dynamic, interruptible batch encoding.",
            "D": "Reserved Instances require a long-term (1 or 3 year) capacity commitment, which does not match transient, variable batch workloads."
          }
        },
        {
          "id": 2,
          "question": "Under which condition is data transfer within AWS completely free?",
          "options": {
            "A": "Copying data from an EC2 instance in us-east-1 to us-west-2",
            "B": "Copying data from an EC2 instance to an RDS database in the same Availability Zone",
            "C": "Copying data from an EC2 instance to another EC2 instance in different Availability Zones within the same region",
            "D": "Sending data from an EC2 instance to a customer over the internet"
          },
          "correct": "B",
          "explanation": "Data transfer within the same Availability Zone (AZ) in the same Region is free. Cross-AZ (C), Cross-Region (A), and Outbound internet data transfer (D) all incur per-GB charges.",
          "wrongExplanations": {
            "A": "Copying data across different AWS Regions (e.g. us-east-1 to us-west-2) incurs standard inter-region data transfer fees.",
            "C": "Copying data across different Availability Zones (AZs) in the same Region incurs standard data transfer fees (typically $0.01 per GB in each direction).",
            "D": "Data transfer outbound from AWS servers to the public internet incurs standard internet egress data fees."
          }
        },
        {
          "id": 3,
          "question": "An enterprise customer requires a dedicated technical contact who can provide proactive architectural guidance, coordinate support event management, and assist with optimization efforts. Which support plan is required to get a designated Technical Account Manager (TAM)?",
          "options": {
            "A": "Basic Support",
            "B": "Developer Support",
            "C": "Business Support",
            "D": "Enterprise Support"
          },
          "correct": "D",
          "explanation": "Only the Enterprise Support plan (and Enterprise On-Ramp as a pooled resource) provides access to a Technical Account Manager (TAM). Developer and Business support provide access to general support engineers but not a designated TAM.",
          "wrongExplanations": {
            "A": "Basic Support is free for all customers and only covers billing and account queries, with no technical support engineers or TAM.",
            "B": "Developer Support only provides email support for developers during business hours, with no TAM or phone access.",
            "C": "Business Support offers 24/7 access to support engineers via chat, phone, and email, but does not provide a designated TAM."
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
          "visualization": "clf_m5_exam_keywords.svg"
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
              "text": "You have 90 minutes for 65 questions (approx. 1.3 minutes per question).",
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
          "visualization": "clf_m5_time_management.svg"
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
              "text": "**AWS Skill Builder Center:** Offers game-based learning (Cloud Quest), self-paced labs, and over 500 digital courses.",
              "indent": 1
            },
            {
              "text": "**Register for Your Exam:** Log in to your AWS Certification account. Schedule your exam to be taken at a Pearson VUE testing center or online.",
              "indent": 1
            }
          ],
          "visualization": "clf_m5_final_prep.svg"
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
          "visualization": ""
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
          "visualization": ""
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
          "visualization": ""
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
          "visualization": ""
        }
      ],
      "quiz": []
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLF_COURSE_DATA;
}
