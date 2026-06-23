# AWS Certified Cloud Practitioner (CLF-C02) Slide Outline & Course Design

This document outlines the structured training slides for the AWS Certified Cloud Practitioner (CLF-C02) course. It rephrases the concepts from the official slides to be fully original, engaging, and beginner-friendly, and details the static SVG/infographic visualizations that will be built later.

---

# Module 1: Cloud Core Concepts

## Learning Objectives
* Define the primary business and technical advantages of the AWS Cloud.
* Understand the core design principles of the AWS Well-Architected Framework.
* Identify cloud migration strategies (the 7 Rs) and cloud economics.

---

### Slide 1.1: Course Welcome & Structure
* **Title:** Welcome to AWS Cloud Practitioner (CLF-C02) Prep
* **Content:**
  * Master the foundations of the AWS Cloud and prepare to pass your certification exam.
  * The exam is divided into four primary domains:
    * **Domain 1: Cloud Concepts** (24% of exam)
    * **Domain 2: Security & Compliance** (30% of exam)
    * **Domain 3: Technology & Services** (34% of exam)
    * **Domain 4: Billing, Pricing & Support** (12% of exam)
* **Visualization:** 
  * A colorful donut chart showing the four domains with their respective percentage weights.

### Slide 1.2: What is Cloud Computing?
* **Title:** Cloud Computing: The Basics
* **Content:**
  * **On-Demand Self-Service:** Provision resources whenever you need them without human intervention.
  * **Broad Network Access:** Access services over the internet using standard devices (laptops, phones).
  * **Resource Pooling:** Multiple customers share physical hardware securely, dynamically allocating resources.
  * **Rapid Elasticity:** Automatically scale resources up or down to handle spikes or drops in demand.
  * **Pay-As-You-Go Pricing:** Pay only for what you run (metered services, similar to electricity usage).
* **Visualization:** 
  * A diagram showing a user requesting resources (servers, databases, storage) over the internet from a shared cloud pool. A meter icon counts active resources and shows a dynamic cost billing counter.

### Slide 1.3: Six Key Benefits of the Cloud (Part 1)
* **Title:** Why Choose Cloud? Core Advantages (1 of 2)
* **Content:**
  * **Trade Upfront Expenses for Variable Costs:** Avoid massive initial capital expenditures (CapEx) on servers and data centers. Instead, pay operational expenses (OpEx) based on actual usage.
  * **Benefit from Massive Economies of Scale:** AWS has millions of customers. This massive scale allows AWS to purchase hardware at lower costs and pass those savings directly to you.
  * **Stop Guessing Capacity:** Instead of purchasing excess hardware that sits idle, or running out of capacity during a traffic spike, scale resources dynamically as demand dictates.
* **Visualization:** 
  * A comparison infographic showing:
    * **Traditional IT:** High upfront cost, long purchase timelines, under-provisioning (crash) or over-provisioning (waste).
    * **Cloud IT:** Elastic line matching demand exactly, with no upfront cost.

### Slide 1.4: Six Key Benefits of the Cloud (Part 2)
* **Title:** Why Choose Cloud? Core Advantages (2 of 2)
* **Content:**
  * **Increase Speed and Agility:** Spin up new servers, databases, or test environments in minutes rather than weeks.
  * **Focus on Business, Not Data Centers:** Stop spending time and money racking servers, cooling data centers, and managing physical infrastructure. Let AWS handle the physical heavy lifting.
  * **Go Global in Minutes:** Deploy applications in multiple regions around the world with just a few clicks, reducing latency for global users.
* **Visualization:** 
  * A world map showing an application deploying from one region to multiple continents instantly with dotted lines representing fast, low-latency access for international users.

### Slide 1.5: High Availability and Reliability
* **Title:** Creating Resilient Systems: High Availability
* **Content:**
  * **High Availability (HA):** Systems designed to minimize downtime and remain operational without human intervention.
  * **Redundancy:** Avoiding single points of failure by deploying backup systems.
  * **Multi-AZ Deployments:** Placing duplicate servers in separate physical locations (Availability Zones). If one location suffers an outage, traffic automatically redirects to the healthy zone.
* **Visualization:** 
  * A diagram showing a user accessing an application through a load balancer. The load balancer routes traffic to a primary server in Availability Zone A. A dotted "failover" arrow shows traffic automatically rerouting to a standby server in Availability Zone B when the primary server goes offline.

### Slide 1.6: Scalability vs. Elasticity
* **Title:** Growth in the Cloud: Scalability and Elasticity
* **Content:**
  * **Vertical Scaling (Scale Up/Down):** Adding power to an existing server (e.g., upgrading from a 2-core CPU to a 16-core CPU).
  * **Horizontal Scaling (Scale Out/In):** Adding more servers of the same size to distribute the workload (e.g., going from 1 server to 5 servers).
  * **Elasticity:** The ability of a system to automatically scale horizontal resources in real-time to match fluctuating demand.
* **Visualization:** 
  * Three side-by-side diagrams:
    * **Vertical Scaling:** A small server box expanding into a giant server box.
    * **Horizontal Scaling:** A single server box multiplying into a row of identical server boxes.
    * **Elasticity:** A timeline graph showing servers automatically spinning up and shutting down to match a wavy traffic curve.

### Slide 1.7: The AWS Well-Architected Framework Pillars
* **Title:** Architectural Excellence: The 6 Pillars
* **Content:**
  * To build secure, high-performing, resilient, and efficient infrastructure, AWS recommends aligning with these pillars:
    * **Operational Excellence:** Running and monitoring systems to deliver business value and continuously improve.
    * **Security:** Protecting data, systems, and assets through risk assessment and mitigation.
    * **Reliability:** Ensuring workloads perform their intended functions correctly and consistently.
    * **Performance Efficiency:** Using IT resources efficiently to meet requirements as technologies evolve.
    * **Cost Optimization:** Avoiding unnecessary costs and running systems at the lowest possible price point.
    * **Sustainability:** Minimizing the environmental impact of running cloud workloads.
* **Visualization:** 
  * A temple structure where the roof is labeled "AWS Workloads" and is supported by 6 distinct pillars, each representing a framework pillar.

### Slide 1.8: Deep Dive: Operational Excellence & Security
* **Title:** Well-Architected: Operations & Security
* **Content:**
  * **Operational Excellence Principles:**
    * Perform operations as code (Infrastructure as Code).
    * Make frequent, small, reversible changes.
    * Anticipate failure and learn from all operational events.
  * **Security Principles:**
    * Implement a strong identity foundation (least privilege).
    * Protect data at rest and in transit (encryption).
    * Keep physical users away from direct data access.
* **Visualization:** 
  * A split layout showing a automated code pipeline on the left (operations) and a padlock/shield system separating users from a secure database on the right (security).

### Slide 1.9: Deep Dive: Reliability & Performance
* **Title:** Well-Architected: Reliability & Performance
* **Content:**
  * **Reliability Principles:**
    * Automatically recover from failure (automatic failover).
    * Test recovery procedures under simulated stress.
    * Scale horizontally to distribute workload risk.
  * **Performance Efficiency Principles:**
    * Democratize advanced technologies (delegate complex tasks to AWS managed services).
    * Go global in minutes (reduce latency by deploying close to users).
    * Adopt serverless architectures to eliminate server management overhead.
* **Visualization:** 
  * Left: A server falling over and a new one instantly spinning up to replace it. Right: A global map showing serverless functions executing close to users in different continents.

### Slide 1.10: Deep Dive: Cost & Sustainability
* **Title:** Well-Architected: Cost & Sustainability
* **Content:**
  * **Cost Optimization Principles:**
    * Adopt a consumption-based pricing model.
    * Measure overall efficiency and attribute expenditures (using tags).
    * Stop spending money on undifferentiated heavy lifting (like physical server maintenance).
  * **Sustainability Principles:**
    * Understand the environmental footprint of your workloads.
    * Maximize resource utilization to reduce energy waste.
    * Anticipate and adopt new, more efficient hardware and software offerings (like AWS Graviton).
* **Visualization:** 
  * Left: A scale balancing cost and resource usage. Right: A green leaf icon combined with a server rack, highlighting cloud energy efficiency.

### Slide 1.11: AWS Well-Architected Tool
* **Title:** Evaluating Workloads: AWS Well-Architected Tool
* **Content:**
  * A free, self-service tool in the AWS Management Console.
  * **Checklists:** Compares your architecture against the 6 pillars through a series of questions.
  * **Improvement Plans:** Provides a clear action plan to remediate high-risk issues.
  * **Governance:** Track milestones and improvements over time, and share custom lenses across accounts.
* **Visualization:** 
  * A dashboard mockup showing a list of architectural questions on the left, and a "High Risk / Medium Risk" warning dial on the right with recommended action items.

### Slide 1.12: The AWS Cloud Adoption Framework (AWS CAF)
* **Title:** Structuring Migration: AWS CAF
* **Content:**
  * AWS CAF helps organizations build a comprehensive roadmap for digital transformation.
  * It groups cloud migration readiness into six perspectives:
    * **Business Perspectives (Focus on value):**
      * **Business:** Align IT strategy with business outcomes.
      * **People:** Evolve skills, culture, and leadership.
      * **Governance:** Manage organizational risk and benefits.
    * **Technical Perspectives (Focus on execution):**
      * **Platform:** Build cloud architectures and patterns.
      * **Security:** Maintain data confidentiality and compliance.
      * **Operations:** Deliver cloud services at scale securely.
* **Visualization:** 
  * A honeycomb diagram with 6 interlocking cells: Business, People, and Governance grouped under "Business Perspectives", and Platform, Security, and Operations grouped under "Technical Perspectives".

### Slide 1.13: Seven Migration Strategies (The 7 Rs)
* **Title:** Moving to the Cloud: The 7 Rs Migration Path
* **Content:**
  * **Rehost (Lift and Shift):** Move applications to AWS without changes.
  * **Relocate:** Move VMware workloads to AWS at the hypervisor level.
  * **Replatform (Lift, Tinker, and Shift):** Make minor optimizations without changing core code (e.g., moving a database to Amazon RDS).
  * **Refactor / Rearchitect:** Rewrite the application to use cloud-native features (e.g., serverless).
  * **Repurchase:** Move from a perpetual license to a SaaS model (e.g., Salesforce).
  * **Retain:** Keep applications on-premises for now due to legacy requirements.
  * **Retire:** Identify and turn off redundant or obsolete systems.
* **Visualization:** 
  * A stair-step diagram showing the 7 Rs mapped against "Level of Effort / Difficulty" (X-axis) and "Cloud-Native Benefits" (Y-axis), with Rehost at the bottom-left and Refactor at the top-right.

### Slide 1.14: AWS Migration Services
* **Title:** Migration Accelerators: AWS Migration Tools
* **Content:**
  * **AWS Application Migration Service (AWS MGN):** Automates the lift-and-shift migration of physical, virtual, or cloud servers directly to AWS with minimal downtime.
  * **AWS Migration Evaluator:** Analyzes your on-premises server inventory, CPU utilization, and memory usage to build a data-driven business case for migrating to AWS.
* **Visualization:** 
  * A pipeline diagram showing an on-premises server being evaluated by the Migration Evaluator, then copied and spun up in AWS by MGN.

### Slide 1.15: Cloud Economics: Fixed vs. Variable Costs
* **Title:** Cloud Economics: Cost Structure Shifts
* **Content:**
  * Shift from a **fixed vs variable** cost setup:
    * **Traditional IT Cost Model (Fixed CapEx):**
      * Large upfront hardware investments.
      * Guessing future capacity needs leads to wasted resources or system crashes.
      * Heavy operational costs for physical maintenance and staffing.
    * **Cloud IT Cost Model (Variable OpEx):**
      * Pay only for what you consume.
      * Instantly adjust resource counts to match demand.
      * Managed services eliminate the need to run and secure physical data centers.
* **Visualization:** 
  * A split visual:
    * Left side shows a physical server invoice with a large dollar sign.
    * Right side shows a cloud meter where costs increase and decrease smoothly alongside traffic.

### Slide 1.16: Cost Optimization: Rightsizing
* **Title:** Optimizing Compute: Rightsizing
* **Content:**
  * **Rightsizing:** The continuous process of matching instance types and sizes to your actual workload performance and capacity requirements.
  * Avoid **over-provisioning** (wasting money on idle resources).
  * Avoid **under-provisioning** (causing performance issues due to resource exhaustion).
  * Use **AWS Compute Optimizer** to get machine learning-driven recommendations for optimal resource sizing, Graviton migration paths, license optimization, and detecting idle resources.
* **Visualization:** 
  * A line graph showing a workload's actual resource demand. 
    * A straight line far above representing an over-provisioned instance (wasted cost).
    * A straight line below representing an under-provisioned instance (performance failure).
    * A tightly aligned, step-like line representing a rightsized instance setup with auto-scaling.

### Slide 1.17: Cloud Economics: Licensing Options
* **Title:** Licensing in the Cloud: BYOL vs. License Included
* **Content:**
  * **Bring Your Own License (BYOL):** Reuse your existing software licenses (e.g., Microsoft SQL Server, Windows Server) on AWS to reduce costs.
  * **License Included (LI):** Pay for both the infrastructure and software license in a single, unified bill. No upfront license fees or separate contract management.
  * **AWS License Manager:** A service to centrally track, manage, and enforce software licensing rules across your AWS and on-premises environments.
* **Visualization:** 
  * A comparison card displaying:
    * **BYOL:** Handing an existing license key to an AWS server instance.
    * **License Included:** A unified shopping cart containing both the server and the license in one bundled price.

---

## Module 1 Review Checkpoint

#### Question 1
A startup needs to deploy a new web application. They are unsure how much traffic they will receive and want to avoid paying for idle infrastructure while ensuring the site doesn't crash during traffic spikes. Which cloud benefit best addresses this scenario?
* A) Go global in minutes
* B) Benefit from massive economies of scale
* C) Stop guessing capacity
* D) Trade variable expense for fixed expense

* **Correct Answer:** **C**
* **Explanation:** "Stop guessing capacity" allows organizations to scale resources dynamically in response to real-time traffic rather than buying fixed hardware based on predictions. A is global latency reduction. B is general cost reduction. D is incorrect because the cloud trades fixed expenses for variable expenses (not the other way around).

#### Question 2
Which pillar of the AWS Well-Architected Framework focuses on minimizing the environmental impact of cloud workloads?
* A) Operational Excellence
* B) Performance Efficiency
* C) Sustainability
* D) Reliability

* **Correct Answer:** **C**
* **Explanation:** The Sustainability pillar was added specifically to focus on environmental impacts, maximizing resource utilization, and reducing energy consumption.

#### Question 3
A company wants to migrate an on-premises database to Amazon RDS without modifying the database engine or core application logic. Which migration strategy is being used?
* A) Rehost
* B) Replatform
* C) Refactor
* D) Retain

* **Correct Answer:** **B**
* **Explanation:** Moving a database to a managed service like Amazon RDS is a classic example of "Replatform" (Lift, Tinker, and Shift). You are changing the hosting platform to a managed model but keeping the database engine and code unchanged. Rehost would be moving the database to a self-managed server on EC2. Refactor would require rewriting the app for a serverless database.

---
---

# Module 2: Security and Compliance

## Learning Objectives
* Understand the division of responsibility in the AWS Shared Responsibility Model.
* Learn how AWS compliance tools protect user data.
* Identify key features of Identity and Access Management (IAM).
* List core AWS security, monitoring, and firewall services.

---

### Slide 2.1: The AWS Shared Responsibility Model
* **Title:** Security Responsibilities: Shared Ownership
* **Content:**
  * Security in the cloud is a shared partnership between AWS and the customer:
    * **AWS is responsible for Security "OF" the Cloud:**
      * Protecting physical data centers (access control, power, HVAC).
      * Maintaining physical hardware, routers, hypervisors, and core virtualization software.
      * Securing managed services (like RDS, S3, DynamoDB).
    * **The Customer is responsible for Security "IN" the Cloud:**
      * Managing customer data and application configurations.
      * Managing user access, permissions, and credentials (IAM).
      * Patching operating systems on virtual servers (EC2).
      * Configuring network firewalls (Security Groups, NACLs).
    * **Shared Controls:** Controls where responsibilities overlap (e.g., Patch Management, Configuration Management, Awareness & Training).
* **Visualization:** 
  * A standard shared responsibility model diagram showing:
    * Upper box labeled "Customer Responsibility (Security IN the Cloud)" with items: Customer Data, IAM, OS Patching, Network Configuration, Data Encryption.
    * Lower box labeled "AWS Responsibility (Security OF the Cloud)" with items: Physical Infrastructure (Regions, AZs, Edge Locations), Virtualization Layer, Hardware, Managed Services Software.

### Slide 2.2: Responsibility Shifts Based on Service Type
* **Title:** Shared Responsibility: Virtual Servers vs. Managed Services
* **Content:**
  * The customer's security burden shifts depending on the type of service selected:
    * **Infrastructure as a Service (IaaS) (e.g., database on EC2):** 
      * Customer must patch the operating system, configure database backups, configure high availability, and apply database software patches.
    * **Platform as a Service (PaaS) / Managed Service (e.g., Amazon RDS):** 
      * AWS handles OS patching, hardware backups, and database engine maintenance. 
      * Customer only manages database access permissions, schema design, and database utilization.
* **Visualization:** 
  * A side-by-side comparison table or infographic:
    * **Column 1 (EC2 Database):** Customer controls OS, Database Engine, Backups, and Security. (High Customer effort).
    * **Column 2 (RDS Database):** AWS manages OS and Database updates. Customer only manages data and access. (Low Customer effort).

### Slide 2.3: Centralized Account Governance: AWS Organizations
* **Title:** Managing Multiple Accounts: AWS Organizations
* **Content:**
  * **Centralized Management:** Consolidate multiple AWS accounts into a single organization.
  * **Organizational Units (OUs):** Group accounts together (e.g., Development, Production) to apply hierarchical rules.
  * **Service Control Policies (SCPs):** Set maximum permission boundaries across accounts. SCPs restrict what even the root user of a member account can do.
  * **Consolidated Billing:** Combine usage across all accounts to qualify for volume discounts.
* **Visualization:** 
  * A tree diagram: Root -> OUs (Dev, Production) -> Member Accounts. Red padlock icons represent SCPs attached at the OU level, blocking unauthorized services (e.g., blocking any non-US region deployments).

### Slide 2.4: Centralized Resource Sharing: AWS RAM
* **Title:** Sharing Resources Securely: AWS Resource Access Manager
* **Content:**
  * **AWS Resource Access Manager (AWS RAM):**
    * Securely share specific AWS resources (like Transit Gateways, subnets, Route 53 resolver rules) across multiple AWS accounts within your organization.
    * **Operational Efficiency:** Avoid duplicating resources in separate accounts, reducing complexity and costs.
    * **Governance:** Keep accounts isolated while securely sharing core network infrastructure.
* **Visualization:** 
  * A central account owning a Transit Gateway and using AWS RAM to share it with Account A and Account B, allowing them to route traffic through the shared gateway seamlessly.

### Slide 2.5: Observability: AWS CloudTrail vs. AWS Config
* **Title:** Monitoring and Auditing: CloudTrail and Config
* **Content:**
  * **AWS CloudTrail (The Auditor):**
    * Records all API calls made in your AWS account.
    * Answers: **Who** did it, **what** action was taken, **when** did it happen, and from **where** (IP address)?
    * Logs are saved securely in S3 for forensic auditing.
  * **AWS Config (The Compliance Officer):**
    * Records configuration history and relationships of your AWS resources.
    * Compares configuration states against predefined compliance rules.
    * Detects configuration drift and can trigger automatic remediation.
* **Visualization:** 
  * Infographic showing:
    * **CloudTrail:** A magnifying glass over an event log: "IAM User 'John' deleted EC2 instance 'i-12345' at 2:00 PM."
    * **Config:** A timeline showing a security group configuration changing from "Port 22 Closed" to "Port 22 Open (Non-Compliant)", triggering an alert.

### Slide 2.6: Multi-Account Standard Setup: AWS Control Tower
* **Title:** Automated Governance: AWS Control Tower
* **Content:**
  * **Landing Zone:** Automatically provisions a secure, multi-account AWS environment using best practices.
  * **Guardrails:** Enforces mandatory and recommended governance policies (e.g., enforcing MFA, blocking public S3 buckets) using AWS Organizations SCPs and AWS Config rules.
  * **Account Factory:** Automates the creation of new, pre-configured member accounts that align with company compliance.
  * **Centralized Auditing:** Consolidated dashboard for tracking CloudTrail and Config compliance across all accounts.
* **Visualization:** 
  * A control tower building icon broadcasting governance signals (Guardrails) to multiple uniform, secure AWS accounts (Account Factory).

### Slide 2.7: Security Audits & Compliance: Artifact & Audit Manager
* **Title:** Compliance Documentation & Evidence
* **Content:**
  * **AWS Artifact (Reports & Agreements):**
    * Your self-service portal for accessing AWS compliance reports.
    * Download third-party auditor reports proving AWS physical security compliance (e.g., ISO, PCI DSS, SOC 1/2/3).
    * Review, accept, and track legal agreements with AWS, such as the Business Associate Addendum (BAA) for HIPAA compliance.
  * **AWS Audit Manager:**
    * Automatically collects and organizes audit evidence to simplify compliance audits.
    * Maps resource configurations directly to industry standards (e.g., GDPR, HIPAA).
* **Visualization:** 
  * A lock and document icon where a user is pulling verified PDF compliance certificates (ISO, SOC, PCI) from a vault while an automated collector gathers config logs for Audit Manager reports.

### Slide 2.8: Data Protection: Encryption Keys and KMS
* **Title:** Securing Data: Encryption at Rest and in Transit
* **Content:**
  * Data protection is a critical customer responsibility.
  * **Encryption in Transit (Data moving over network):**
    * Secured using HTTPS.
    * Managed by **AWS Certificate Manager (ACM)**, which provisions, manages, and automatically renews SSL/TLS certificates.
    * Access AWS endpoints securely via HTTPS (including FIPS endpoints where available).
  * **Encryption at Rest (Stored data):**
    * Managed by **AWS Key Management Service (KMS)**.
    * KMS allows you to create and manage cryptographic keys.
      * *AWS Managed Keys:* AWS automatically rotates and manages.
      * *Customer Managed Keys:* Customer controls rotation, access policies, and usage.
* **Visualization:** 
  * Diagram of data in transit (a laptop connecting to an Application Load Balancer with an SSL certificate lock icon) and data at rest (an S3 bucket representing database files next to a golden key representing KMS encryption).

### Slide 2.9: Cloud Security Modules: CloudHSM & Macie
* **Title:** Advanced Data Security: CloudHSM and Macie
* **Content:**
  * **AWS CloudHSM:**
    * A dedicated Hardware Security Module (HSM) instance within AWS.
    * Gives you sole ownership and control of your encryption keys (AWS cannot see or access your keys).
    * Meets stringent regulatory standards (FIPS 140-2 Level 3).
  * **Amazon Macie:**
    * An AI-driven service that automatically discovers, classifies, and protects sensitive data.
    * Scans S3 buckets for Personally Identifiable Information (PII) (e.g., credit card numbers, SSNs) and alerts you to exposed data.
* **Visualization:** 
  * Left: A physical security hardware box representing CloudHSM. Right: A robotic magnifying glass scanning S3 document files and highlighting credit card patterns to represent Macie.

### Slide 2.10: Access Management: Protecting the Root User
* **Title:** IAM: Securing the Root User Account
* **Content:**
  * **The Root User:** Created when the AWS account is opened. Has complete, absolute access to all billing and technical resources.
  * **Critical Protection Rules:**
    * **Never** use the root user for daily administrative tasks.
    * Secure the account with a strong password and **Multi-Factor Authentication (MFA)**.
    * Lock away root access keys (delete them if not needed).
  * **Only use the root user to:**
    * Close the AWS account.
    * Change root account settings (emails, passwords, support plans).
    * Restore deleted IAM administrator permissions.
    * Perform billing and consolidated billing tasks.
* **Visualization:** 
  * A warning triangle next to a golden key labeled "Root User". A vault door is locked with an MFA authenticator device.

### Slide 2.11: AWS Identity and Access Management (IAM)
* **Title:** Control Access: IAM Entities
* **Content:**
  * **IAM User:** A single identity representing a person or application (credentials: password, access keys: access key ID + secret access key).
  * **IAM Group (or IAM User Group):** A collection of IAM users. Permissions applied to a group are inherited by all members (e.g., "Developers Group").
  * **IAM Role:** A temporary identity assumed by users, applications, or AWS services (uses **AWS STS** to get short-lived **temporary security credentials**).
  * **Principle of Least Privilege:** Grant only the exact permissions needed to do a job, and nothing more.
* **Visualization:** 
  * A diagram illustrating:
    * Users inside a Group box inherits the group permissions.
    * An EC2 instance assuming an IAM Role (dotted lines) to temporarily access an S3 bucket without using hardcoded access keys.

### Slide 2.12: Federated Access & Directory Services
* **Title:** Enterprise Access: Federation & Identity Center
* **Content:**
  * Manage access for large workforces without creating IAM users for every employee:
    * **AWS IAM Identity Center (Single Sign-On):**
      * Central site to manage single sign-on access to all AWS accounts and business applications.
    * **Amazon Cognito:**
      * Manages user sign-up, sign-in, and federation access for customer-facing web and mobile applications.
    * **AWS Directory Service:**
      * Integrates AWS resources with your existing Active Directory (AD) databases (e.g., Microsoft AD).
* **Visualization:** 
  * A corporate employee logging in once via an identity provider (IdP) and instantly accessing multiple distinct developer, tester, and manager AWS accounts.

### Slide 2.13: IAM Policies: Identity vs. Resource-Based
* **Title:** Granting Permissions: IAM Policies
* **Content:**
  * Policies are JSON documents that define permissions (Allow or Deny actions).
  * **Identity-Based Policies:** Attached to IAM users, groups, or roles.
    * *AWS Managed:* Standard templates created by AWS (e.g., ReadOnlyAccess).
    * *Customer Managed:* Custom policies built by you.
    * *Inline Policies:* Embedded directly within a specific single user, group, or role.
    * *Cross-Account Policies:* Define a **trust policy** (which account is trusted to assume the role) and a **permissions policy** (what that role can access).
  * **Resource-Based Policies:** Attached directly to an AWS resource.
    * *Example:* S3 Bucket Policies. These define who (which IAM users or external accounts) has access to that specific bucket.
* **Visualization:** 
  * Left: User card with a policy sheet attached ("What can I access?"). Right: S3 Bucket cylinder with a policy sheet attached ("Who can access me?").

### Slide 2.14: Secrets Management: Parameter Store vs. Secrets Manager
* **Title:** Storing Credentials: Parameter Store and Secrets Manager
* **Content:**
  * **AWS Systems Manager Parameter Store:**
    * A secure, hierarchical storage service for configuration data and passwords.
    * Best for general configuration variables and lightweight secrets.
  * **AWS Secrets Manager:**
    * A dedicated secrets database.
    * **Key Difference:** Automatically rotates database credentials, API keys, and OAuth tokens, and integrates directly with RDS.
* **Visualization:** 
  * A comparative table showing:
    * **Parameter Store:** Standard secure storage (vault drawer).
    * **Secrets Manager:** Vault drawer with an automatic clock hand rotating the lock, representing credentials rotation.

### Slide 2.15: Edge & Web Application Firewalls
* **Title:** Network Defense: Shield, WAF, and Firewall Manager
* **Content:**
  * **AWS Shield:**
    * Protects against Distributed Denial of Service (DDoS) attacks.
    * *Shield Standard:* Free, automatically enabled for all customers.
    * *Shield Advanced:* Paid, includes 24/7 access to DDoS response teams.
  * **AWS WAF (Web Application Firewall):**
    * Monitors HTTP/HTTPS requests to protect web apps from common exploits (e.g., SQL Injection, Cross-Site Scripting, bots).
  * **AWS Firewall Manager:**
    * Centrally configures and manages firewall rules across all accounts in your organization.
* **Visualization:** 
  * A series of defense layers:
    * Outermost: AWS Shield blocking large traffic arrows (DDoS).
    * Middle: AWS WAF blocking malicious code scripts (SQLi).
    * Innermost: The Web Application server.

### Slide 2.16: Threat Detection: Inspector, GuardDuty, and Detective
* **Title:** Security Intelligence: Inspector, GuardDuty, and Detective
* **Content:**
  * **Amazon Inspector (Vulnerability Scanner):**
    * Automated security assessment tool. Scans EC2 instances, container images, and Lambda functions for software vulnerabilities and exposure.
  * **Amazon GuardDuty (Threat Intelligence):**
    * Continuous security monitoring service. Analyzes CloudTrail logs, VPC flow logs, and DNS logs using machine learning to detect malicious activity (e.g., crypto-mining).
  * **Amazon Detective (Investigation):**
    * Automatically collects log data and creates visual graphs to investigate the root cause of security issues.
* **Visualization:** 
  * A workflow:
    1. **Inspector:** Scans code files for holes.
    2. **GuardDuty:** Detects a malicious actor calling AWS APIs.
    3. **Detective:** Generates a relational tree chart showing the attacker's path and affected resources.

### Slide 2.17: Security Posture: Security Hub, Trusted Advisor, & CloudWatch
* **Title:** Centralized Security Posture
* **Content:**
  * **AWS Security Hub:**
    * A centralized security dashboard that consolidates security alerts (findings) from multiple AWS services (GuardDuty, Inspector, Macie).
  * **AWS Trusted Advisor:**
    * Automatically runs core account security checks (e.g., Root MFA, open ports, public S3 buckets).
  * **Amazon CloudWatch:**
    * Real-time monitoring of metrics and log events. Can trigger alarms when security anomalies are detected.
* **Visualization:** 
  * A centralized control panel receiving warning alerts (red/yellow badges) from various security tools and showing a single security score percentage.

---

## Module 2 Review Checkpoint

#### Question 1
Under the AWS Shared Responsibility Model, which of the following is the sole responsibility of the customer?
* A) Maintaining the hypervisor virtualization software
* B) Patching the operating system of an EC2 instance
* C) Destroying physical hard drives in AWS data centers
* D) Upgrading database software on Amazon DynamoDB

* **Correct Answer:** **B**
* **Explanation:** Customer is responsible for everything "IN" the cloud, which includes configuring and patching the guest operating systems on virtual servers (EC2). A, C, and D are handled by AWS as part of core infrastructure and managed services.

#### Question 2
A financial institution wants to prevent its developers from deploying resources in any AWS region outside of the US. What is the most efficient way to enforce this policy centrally across multiple developer accounts?
* A) Attach an IAM Policy to every developer user
* B) Configure an AWS Config rule in each account
* C) Apply a Service Control Policy (SCP) at the Organizational Unit level
* D) Use AWS Secrets Manager to block access

* **Correct Answer:** **C**
* **Explanation:** Service Control Policies (SCPs) in AWS Organizations let you define central permission guardrails across all accounts in an OU. An SCP can block region access globally, which cannot be bypassed even by administrator/root credentials in member accounts.

#### Question 3
Which AWS security service uses machine learning to continuously analyze account logs and detect potential malicious activity, such as unauthorized API calls or cryptocurrency mining?
* A) Amazon Inspector
* B) Amazon GuardDuty
* C) AWS Shield
* D) AWS Artifact

* **Correct Answer:** **B**
* **Explanation:** Amazon GuardDuty is an intelligent threat detection service that analyzes logs (VPC Flow Logs, CloudTrail, DNS) using machine learning to detect suspicious behaviors. Inspector is a vulnerability scanner for software patches. Shield is for DDoS protection. Artifact provides compliance PDF documents.

---
---

# Module 3: Cloud Technology and Services

## Learning Objectives
* Compare the ways to manage AWS resources (Console, CLI, SDKs, IaC).
* Describe AWS global infrastructure components (Regions, AZs, Edge Locations).
* Identify core Compute, Database, Storage, and Networking services.
* List analytics, application integration, developer, and AI/ML services.

---

### Slide 3.1: Interacting with AWS
* **Title:** Operating in AWS: Console, CLI, and SDKs
* **Content:**
  * **AWS Management Console:**
    * Web-based graphical user interface (GUI).
    * Best for beginners, visual dashboards, manual exploration, and learning.
  * **AWS Command Line Interface (AWS CLI):**
    * Terminal-based command tool.
    * Best for scripting, automation, and speed.
  * **Software Development Kits (SDKs):**
    * Programming libraries for specific languages (Python, Java, Node.js).
    * Allows applications to interact with AWS resources programmatically.
* **Visualization:** 
  * A split diagram showing three ways to access AWS:
    * A web browser interface (Console).
    * A terminal shell line `aws ec2 run-instances` (CLI).
    * Code syntax block `boto3.client('ec2')` (SDK).

### Slide 3.2: Infrastructure as Code (IaC)
* **Title:** Automation at Scale: Infrastructure as Code
* **Content:**
  * Manage and provision infrastructure using code configuration files, ensuring consistency, speed, and repeatability:
    * **AWS CloudFormation:**
      * Provisions AWS resources using declarative templates written in YAML or JSON.
    * **AWS Cloud Development Kit (AWS CDK):**
      * Allows you to define infrastructure using familiar programming languages (TypeScript, Python) which compiles into CloudFormation templates.
    * **AWS Service Catalog:**
      * Creates and manages catalogs of pre-approved, compliant IT services for organization-wide deployment.
* **Visualization:** 
  * Code sheet template (YAML/JSON) entering a CloudFormation cloud engine, which automatically builds out VPC networks, EC2 servers, and S3 buckets.

### Slide 3.3: Deployment Models: Cloud, Hybrid, and On-Premises
* **Title:** Cloud Architecture Deployment Models
* **Content:**
  * **All-In Cloud:** The entire application, databases, and assets run on AWS.
  * **Hybrid Cloud:** Integrates on-premises data centers with AWS services:
    * **AWS Outposts:** Runs physical AWS hardware inside your private data center for low-latency requirements.
    * **AWS Storage Gateway:** Connects local server storage to S3 cloud storage.
  * **On-Premises / Private Cloud:** Legacy hosting using virtualized local infrastructure.
* **Visualization:** 
  * Three panels:
    * **Cloud:** Application and databases inside the AWS Cloud box.
    * **Hybrid:** An arrow connecting a corporate data center server to AWS services, supported by an Outposts rack.
    * **On-Premises:** Physical server racks in a private office warehouse.

### Slide 3.4: AWS Global Infrastructure
* **Title:** AWS Global Footprint: Regions and AZs
* **Content:**
  * **AWS Regions:** Geographic locations around the world (e.g., us-east-1). Each Region is isolated and independent.
  * **Availability Zones (AZs):** Datacenter clusters within a Region.
    * Each Region has at least three AZs.
    * AZs are physically separated (flood plains, power grids) but connected via high-speed, redundant, low-latency fiber.
  * **Edge Locations:** Caching sites distributed globally to deliver content fast to end-users (used by CloudFront CDN, Route 53, WAF, and Global Accelerator).
* **Visualization:** 
  * Map zooming in from a global view (Edge Locations and Regions) down to a single Region box. Inside the Region, three distinct Availability Zones are shown with physical distances between them, interconnected by dual fiber lines.

### Slide 3.5: Compute: Virtual Servers (EC2)
* **Title:** Elastic Compute Cloud: Amazon EC2
* **Content:**
  * **Amazon EC2:** Secure, resizable virtual servers in the cloud (called Instances).
  * **EC2 Instance Types (Optimized for workloads):**
    * **General Purpose (e.g., T4g):** Balanced compute, memory, and networking.
    * **Compute Optimized (e.g., C8g):** High-performance CPUs (best for batch processing, video encoding).
    * **Memory Optimized (e.g., R8g):** High RAM (best for in-memory databases).
    * **Accelerated Computing (e.g., G6e):** Uses hardware accelerators (GPUs) (best for AI/ML and graphics).
    * **Storage Optimized (e.g., I8g):** Fast local SSD storage (best for cache/data warehouses).
    * **HPC Optimized (e.g., Hpc7a):** Built specifically for High Performance Computing workloads.
* **Visualization:** 
  * A toolbox graphic displaying different instance families (e.g., `t4g`, `c8g`, `r8g`) labeled with their corresponding core strengths: balance, compute gears, memory chips, or SSD drives.

### Slide 3.6: Compute: Management Options
* **Title:** Compute Deployment: Beanstalk and Lightsail
* **Content:**
  * **AWS Elastic Beanstalk (PaaS):**
    * Upload your application code (Java, PHP, Python) and Beanstalk automatically handles provisioning, load balancing, auto-scaling, and health monitoring. 
    * Best for developers who don't want to manage OS setups.
  * **Amazon Lightsail:**
    * Simple, low-cost virtual private server (VPS) bundles. Includes compute, storage, DNS, and database in a fixed monthly price.
    * Best for small websites, blogs, and testing environments.
  * **AWS Batch:**
    * Automates batch computing jobs across EC2 and Fargate, designed for large-scale data processing and HPC tasks.
* **Visualization:** 
  * Left: A code package entering a Beanstalk box, which automatically spins up load balancers and servers. Right: A unified box representing Lightsail, containing simple, flat-rate components (server, disk, database).

### Slide 3.7: High Availability Compute: Scaling & Load Balancing
* **Title:** Resilient Compute: Auto Scaling and Load Balancing
* **Content:**
  * **Amazon EC2 Auto Scaling:**
    * Automatically adds or removes EC2 instances based on demand.
    * Replaces unhealthy instances automatically.
  * **Elastic Load Balancing (ELB):**
    * Distributes incoming application traffic across multiple EC2 instances, containers, and IP addresses.
    * Integrates with Auto Scaling to direct traffic to new instances as they spin up.
* **Visualization:** 
  * A load balancer icon receiving a massive wave of client traffic arrows, distributing them evenly across a group of EC2 instances. The instance group boundaries expand to add another instance as a metric threshold is crossed.

### Slide 3.8: Compute: Container Orchestration
* **Title:** Containerized Applications: ECS, EKS, and Fargate
* **Content:**
  * Containers pack application code and dependencies into a single deployable unit.
  * **Amazon ECS (Elastic Container Service):**
    * AWS-native, highly efficient container management system.
  * **Amazon EKS (Elastic Kubernetes Service):**
    * Managed Kubernetes service to run standard container configurations.
  * **Hosting Models:**
    * *EC2 Launch Type:* You manage the underlying virtual servers hosting the containers.
    * *AWS Fargate:* Serverless container execution. You pay per container run without managing virtual servers.
* **Visualization:** 
  * A cargo container yard diagram showing Docker boxes. The ECS crane lifts container boxes onto either a self-managed cargo ship (EC2 instances) or directly onto a serverless platform (AWS Fargate).

### Slide 3.9: Compute: Serverless Code Execution (AWS Lambda)
* **Title:** Event-Driven Serverless Compute: AWS Lambda
* **Content:**
  * **AWS Lambda:**
    * Run code without provisioning or managing physical servers.
    * Pay only for the compute time you consume (milliseconds of execution).
    * Automatically scales to handle matching execution traffic.
  * **Event-Driven:** Code executes in response to triggers (e.g., file upload to S3, database change, HTTP request).
* **Visualization:** 
  * A sequence diagram:
    1. User uploads file to S3.
    2. S3 triggers an event.
    3. AWS Lambda functions run for 200ms to resize the image.
    4. Code execution stops and billing ceases.

### Slide 3.10: Database Services: Relational (RDS & Aurora)
* **Title:** SQL Databases: Amazon RDS and Aurora
* **Content:**
  * Relational databases store structured data in tables with schemas.
  * **Amazon RDS (Relational Database Service):**
    * Managed SQL service supporting engines: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Amazon Aurora.
    * *Multi-AZ:* Automatically replicates to a standby instance in another AZ for disaster recovery.
    * *Read Replicas:* Offload read traffic to duplicate read-only instances.
  * **Amazon Aurora:**
    * Enterprise-grade, AWS-designed relational database. Up to 5x faster than standard MySQL. Relies on fault-tolerant, self-healing shared storage across AZs.
* **Visualization:** 
  * Left: RDS Primary instance in AZ 1 synchronously copying writes to a Standby instance in AZ 2. Right: A shared storage ring spanning 3 AZs supporting Aurora database nodes.

### Slide 3.11: Database Services: NoSQL (DynamoDB)
* **Title:** NoSQL Databases: Amazon DynamoDB
* **Content:**
  * Non-relational databases store unstructured key-value or document data.
  * **Amazon DynamoDB:**
    * Fully managed NoSQL database service.
    * **Serverless:** Scales automatically with zero management.
    * **Performance:** Single-digit millisecond latency at any scale.
    * **Global Tables:** Automatically replicates data across chosen AWS regions for global low-latency access.
  * **Other Database Engines:**
    * *Amazon Neptune:* Graph database.
    * *Amazon ElastiCache:* In-memory data store/cache.
    * *Amazon Redshift:* Data warehouse.
    * *Amazon DocumentDB:* MongoDB compatible document store.
    * *Amazon Timestream:* Time-series database.
* **Visualization:** 
  * A fast-paced key-value grid (JSON format) and a lightning bolt icon, highlighting rapid access speed and serverless scaling.

### Slide 3.12: Database Migration Service (DMS)
* **Title:** Moving Databases: AWS DMS and SCT
* **Content:**
  * **AWS Database Migration Service (AWS DMS):**
    * Migrates databases to AWS securely with minimal source database downtime.
    * **Homogeneous:** Migrating between same database types (e.g., Oracle to Oracle).
    * **Heterogeneous:** Migrating between different database types (e.g., Oracle to Aurora).
  * **AWS Schema Conversion Tool (AWS SCT):**
    * Required for heterogeneous migrations. Converts the source database schema and code structures to match the target database engine.
* **Visualization:** 
  * An on-premises Oracle database passing through the Schema Conversion Tool (changing schema shapes) and migrating over the internet to an AWS PostgreSQL database via DMS.

### Slide 3.13: Network Services: VPC and Subnets
* **Title:** Network Isolation: Amazon VPC
* **Content:**
  * **Amazon VPC:** A private, logically isolated virtual network within your AWS account.
  * **Subnets:** Subsections of a VPC used to organize resources:
    * **Public Subnets:** Connected to the **Internet Gateway (IGW)**. Resources (like web servers) have public IP addresses and can access/be accessed from the internet.
    * **Private Subnets:** Isolated from the public internet. Used for sensitive backends (databases, application servers). Accesses the internet securely outbound using a **NAT Gateway** (placed in the public subnet).
* **Visualization:** 
  * A large VPC box divided into:
    * A Public Subnet (hosting web servers, connected to an Internet Gateway).
    * A Private Subnet (hosting RDS instances, connecting outbound through a NAT Gateway in the public subnet).

### Slide 3.14: VPC Security: Security Groups vs. Network ACLs
* **Title:** VPC Firewalls: Security Groups vs. Network ACLs
* **Content:**
  * Protect your virtual network using two firewalls:
    * **Security Group:**
      * Stateful (remembers traffic states; if inbound is allowed, outbound is automatically allowed).
      * Operates at the **Instance** level (attached to EC2/RDS).
    * **Network ACL (Access Control List):**
      * Stateless (evaluates traffic both ways; rules must be explicitly created for inbound and outbound).
      * Operates at the **Subnet** level (attached to subnets).
* **Visualization:** 
  * A table comparing:
    * **Security Group:** Surrounds an individual EC2 instance. (Stateful).
    * **Network ACL:** Positioned at the border of the Subnet. (Stateless).

### Slide 3.15: Hybrid Connectivity: VPN and Direct Connect
* **Title:** Connecting Local Offices to AWS
* **Content:**
  * **AWS Site-to-Site VPN:**
    * Creates an encrypted tunnel over the public internet between your on-premises router and AWS.
    * Fast to set up, cost-effective, but relies on public internet bandwidth.
  * **AWS Direct Connect:**
    * A physical, dedicated fiber-optic connection bypasses the public internet entirely.
    * High speeds, extremely low latency, highly secure, but takes longer to provision.
  * **Amazon Route 53:**
    * A highly available, cloud-based Domain Name System (DNS) service that routes web traffic to domain targets.
  * **VPC Peering & Transit Gateway:**
    * Connect VPCs directly (Peering) or hub-and-spoke via a central router (Transit Gateway).
* **Visualization:** 
  * A corporate office routing traffic to AWS in two ways:
    * A wavy line over the internet cloud representing VPN.
    * A straight, solid fiber line bypassing the internet cloud representing Direct Connect.

### Slide 3.16: Storage Services: Block vs. File vs. Object
* **Title:** AWS Storage Typologies
* **Content:**
  * **Block Storage (Amazon EBS):**
    * Stores data in fixed-size blocks. Mounted directly to a single EC2 instance as a hard drive. (Best for databases).
  * **File Storage (Amazon EFS):**
    * Stores data in a hierarchical file/folder structure. Can be shared and mounted to hundreds of Linux EC2 instances simultaneously.
  * **Object Storage (Amazon S3):**
    * Stores data as flat objects (files + metadata) inside flat directories (called Buckets). Accessible globally via APIs.
  * **Amazon FSx:**
    * Launch highly-customized, specialized filesystems (e.g., Windows File Server, Lustre) for specific performance workloads.
* **Visualization:** 
  * A 3-column comparison:
    * **Block:** EC2 connected to a single EBS drive cylinder.
    * **File:** Multiple EC2 instances mounted to a single EFS directory tree.
    * **Object:** A folder containing objects (data + tags metadata) in a flat S3 bucket.

### Slide 3.17: Block Storage Lifecycle: EBS vs. Instance Store
* **Title:** EC2 Disk Storage: EBS vs. Instance Store
* **Content:**
  * **Amazon EBS (Elastic Block Store):**
    * Persistent block storage. If the EC2 instance is stopped or terminated, the data remains intact. Supports backup snapshots.
  * **EC2 Instance Store:**
    * Ephemeral (temporary) physical block storage. The disk is physically attached to the host hardware hosting the EC2 instance. 
    * **Risk:** If the instance is stopped or terminated, all data is permanently lost.
* **Visualization:** 
  * Two animations:
    * **EBS:** A virtual instance turns off (stops) and turn back on; the database remains intact on the separate EBS volume.
    * **Instance Store:** An instance stops; the physically attached disk sweeps clean, losing all temporary caches.

### Slide 3.18: Object Storage: Amazon S3 Storage Classes
* **Title:** Cost-Effective Storage: S3 Tiers
* **Content:**
  * **S3 Standard:** Hot data accessed frequently. Fast access, high throughput, highest storage cost.
  * **S3 Standard-IA (Infrequent Access):** Data accessed less often but requires instant access when requested. Lower storage cost, retrieval fee applied.
  * **S3 Intelligent-Tiering:** Automatically moves files between hot/cold tiers based on changing access patterns with no retrieval fees.
  * **S3 Glacier Tiers (Archiving):**
    * *Glacier Instant Retrieval:* Miliseconds retrieval.
    * *Glacier Flexible:* Minutes to hours retrieval.
    * *Glacier Deep Archive:* Cheapest storage tier, takes 12-48 hours to retrieve.
  * **S3 Express One Zone:** Ultra-fast, single-digit millisecond latency storage inside a single AZ for high-performance computing.
* **Visualization:** 
  * A temperature scale (Hot to Cold):
    * Standard at the hot end (sun icon).
    * Glacier Deep Archive at the cold end (snowflake icon).
    * Intelligent-Tiering bridging the center with rotating arrows.

### Slide 3.19: Hybrid Storage & Backups
* **Title:** Hybrid Storage & Backups
* **Content:**
  * **AWS Storage Gateway:**
    * A hybrid storage service connecting local server environments to AWS.
    * Modes: **File Gateway** (local file access mapped to S3), **Volume Gateway** (local block disks backed by S3), **Tape Gateway** (replaces local tape backups with S3 Glacier).
  * **AWS Backup:**
    * Centrally manage, automate, and schedule backups across multiple AWS services (EC2, RDS, EBS, EFS) and on-premises volumes.
* **Visualization:** 
  * An on-premises tape machine passing data through a Tape Gateway to AWS S3 Glacier archive folders.

### Slide 3.20: Application Integration Services
* **Title:** App Integration: SQS, SNS, and EventBridge
* **Content:**
  * Integrate and decouple distributed systems:
    * **Amazon SQS (Simple Queue Service):**
      * A message queue service. Decouples and buffers workloads by holding messages in a queue until a worker consumes them. (Pull model).
    * **Amazon SNS (Simple Notification Service):**
      * A pub/sub messaging service. Sends notifications, SMS, or pushes alerts to subscribers. (Push model).
    * **Amazon EventBridge:**
      * A serverless event bus that connects applications using event data from SaaS apps and AWS services.
    * **AWS Step Functions:**
      * Orchestrates multiple AWS services into visual, multi-step workflows.
* **Visualization:** 
  * Diagram of decoupled app: An order service puts messages into an SQS queue. A processing service pulls messages from the queue. An SNS bell sends email alerts to customers.

### Slide 3.21: Developer and Application Tools
* **Title:** App Building: Amplify, AppSync, and CI/CD
* **Content:**
  * **AWS Amplify:**
    * A complete package of tools and services to build and deploy full-stack mobile and web apps quickly.
  * **AWS AppSync:**
    * Simplifies building applications with scalable GraphQL APIs.
  * **AWS Developer CI/CD Tools:**
    * **AWS CodeBuild:** Compiles source code, runs tests, and produces deployable software packages.
    * **AWS CodePipeline:** Automates the software release pipeline from code check-in to production deployment.
    * **AWS X-Ray:** Traces user requests through your microservices architecture to identify latency bottlenecks and debug errors.
* **Visualization:** 
  * A CI/CD pipe timeline: Developer pushes code -> CodeBuild compiles and tests -> CodePipeline deploys -> X-Ray monitors request paths.

### Slide 3.22: Analytics Services: Data Pipelines
* **Title:** Analytics Architecture in AWS
* **Content:**
  * **Ingest & Store:**
    * **Amazon Kinesis / Data Firehose:** Ingests large streams of real-time data records (IoT, logs).
    * **Amazon Redshift:** Fast, petabyte-scale data warehouse for complex SQL queries.
  * **Catalog & Process:**
    * **AWS Glue:** Serverless ETL (Extract, Transform, Load) service that automatically catalogs metadata.
    * **Amazon EMR:** Managed big data framework (Hadoop, Spark).
  * **Query & Visualize:**
    * **Amazon Athena:** Serverless query service to analyze raw data in S3 using standard SQL.
    * **Amazon QuickSight:** Business intelligence (BI) service to build interactive dashboards and visualizations.
    * **Amazon OpenSearch Service:** Interactive log analytics, keyword search, and real-time visualization dashboards.
* **Visualization:** 
  * A 4-stage pipeline showing:
    1. Ingest (Kinesis)
    2. Store/Catalog (S3 + Glue)
    3. Process (EMR)
    4. Query/Visualize (Athena + OpenSearch + QuickSight dashboards).

### Slide 3.23: Artificial Intelligence and Machine Learning (AI/ML)
* **Title:** Smart Services: AI and Machine Learning
* **Content:**
  * **AI Services (Pre-built models accessed via APIs):**
    * **Amazon Rekognition:** Image and video analysis (object/face detection).
    * **Amazon Polly:** Converts text into lifelike speech.
    * **Amazon Transcribe:** Converts spoken audio into text.
    * **Amazon Translate:** Language translation service.
    * **Amazon Comprehend:** Natural language processing (NLP) and sentiment analysis.
    * **Amazon Lex:** Build conversational AI chatbots.
    * **Amazon Textract:** Extracts text and data from scanned documents.
    * **Amazon Kendra:** Intelligent search service.
    * **Amazon Personalize:** Automated recommendations.
  * **Generative AI Assistants:**
    * **Amazon Q Developer:** Generates, reviews, and refines code within IDEs.
    * **Amazon Q Business:** Connects to company data to answer employee queries.
  * **End-to-End ML Platform:**
    * **Amazon SageMaker AI:** Fully managed platform to build, train, tune, and deploy custom machine learning models.
* **Visualization:** 
  * Left: A robot brain processing code (Amazon Q). Right: A developer building custom models in a SageMaker notebook environment.

### Slide 3.24: Business Apps & End User Computing
* **Title:** User Productivity: Connect and WorkSpaces
* **Content:**
  * **Amazon Connect:**
    * A fully cloud-based, omni-channel contact center platform.
  * **Amazon SES (Simple Email Service):**
    * A bulk, scalable email service for marketing, notification, and transactional emails.
  * **Amazon WorkSpaces:**
    * Managed virtual desktop infrastructure (VDI) providing users secure remote access to windows/linux desktops from any device.
  * **Amazon AppStream 2.0:**
    * Streams desktop applications directly to a web browser without code changes.
* **Visualization:** 
  * A remote worker on a laptop accessing a virtual Windows desktop environment inside a web browser, supported by Amazon WorkSpaces.

---

## Module 3 Review Checkpoint

#### Question 1
Which aspect of AWS global infrastructure consists of one or more physical data centers and is connected to other similar clusters via low-latency, redundant fiber networks?
* A) AWS Region
* B) Edge Location
* C) Availability Zone
* D) Outpost

* **Correct Answer:** **C**
* **Explanation:** An Availability Zone (AZ) is made up of one or more physical data centers in a Region. AZs are separated physically but linked by high-speed fiber. A Region is a geographic collection of AZs. Edge locations cache content. Outposts are physical racks placed in your office.

#### Question 2
An application requires high-performance CPU processing for transcoding massive batch video files. The workload runs once a day and is not real-time. Which EC2 instance family would be most appropriate?
* A) General Purpose (T-family)
* B) Compute Optimized (C-family)
* C) Memory Optimized (R-family)
* D) Storage Optimized (I-family)

* **Correct Answer:** **B**
* **Explanation:** Compute Optimized instances (like the C-family) are designed for compute-bound applications that require high performance processors, making them perfect for transcoding batch files.

#### Question 3
Which AWS serverless compute service allows you to run code in response to events (such as files uploaded to S3) without managing virtual servers, billing you only for the exact milliseconds the code runs?
* A) Amazon EC2
* B) AWS Fargate
* C) AWS Lambda
* D) AWS Elastic Beanstalk

* **Correct Answer:** **C**
* **Explanation:** AWS Lambda is the core serverless compute service. It is event-driven and runs code only when triggered, charging per millisecond. Fargate is for serverless containers, not pure raw code files. EC2 and Beanstalk require server provisioning/management.

---
---

# Module 4: Billing, Pricing, and Support

## Learning Objectives
* Compare the compute pricing options (On-Demand, Spot, Reserved, Savings Plans).
* Identify free vs. paid data transfer directions in AWS.
* Explain cost management tools (Pricing Calculator, Cost Explorer, Budgets, CUR).
* Review AWS Support plans and the Technical Account Manager (TAM) role.

---

### Slide 4.1: AWS Pricing Fundamentals
* **Title:** Cloud Economics: How AWS Charges
* **Content:**
  * AWS pricing follows three core principles:
    * **Pay-As-You-Go:** No long-term contracts. Pay only for the resources you consume hourly or per-second.
    * **Save When You Commit:** Lock in lower rates by committing to a 1- or 3-year term for compute and databases (Savings Plans/Reserved Instances).
    * **Pay Less by Using More:** Volume discounts apply as your data footprint grows (especially in storage and data transfer).
* **Visualization:** 
  * A graph showing three steps: 
    1. A single box (standard rate).
    2. A row of boxes (discount rate).
    3. A calendar sheet showing a 1-year contract signature (max discount).

### Slide 4.2: Compute Purchase Options (Part 1)
* **Title:** EC2 Pricing Models: On-Demand and Spot
* **Content:**
  * **On-Demand Instances:**
    * Fixed, standard hourly rates. No long-term commitments.
    * Best for spiky, unpredictable workloads or short-term app testing.
  * **Spot Instances:**
    * Bid on unused AWS compute capacity for up to **90% discount** compared to On-Demand.
    * **Catch:** AWS can reclaim (terminate) the instance with a 2-minute warning if they need the capacity back.
    * Best for stateless, fault-tolerant, batch-processing workloads.
* **Visualization:** 
  * A price tag comparison:
    * On-Demand tag shows full price ($0.10/hr) with a "Ready Anytime" label.
    * Spot tag shows discounted price ($0.01/hr) with a "Subject to Interruptions" label.

### Slide 4.3: Compute Purchase Options (Part 2)
* **Title:** EC2 Pricing Models: Commitments & Savings
* **Content:**
  * **Reserved Instances (RIs):**
    * Save up to **75%** by committing to a 1- or 3-year term for a specific instance type, region, and platform.
    * Options: *Standard RIs* (fixed) or *Convertible RIs* (allows altering instance types/OS during the term).
    * *Size Flexibility:* Within AWS Organizations, unused RIs automatically apply to smaller or larger instances of the same family (e.g. 1 m5.large covers 2 m5.mediums, and 2 m5.mediums cover 1 m5.large).
  * **Savings Plans:**
    * Save up to **72%** by committing to a consistent dollar spend per hour (e.g., $10/hour) for 1 or 3 years.
    * **More Flexible:** Applies automatically across EC2, Lambda, and Fargate regardless of region or instance size changes.
* **Visualization:** 
  * A contract graphic showing a Savings Plan umbrella covering different compute icons (EC2, Lambda, Fargate) across a 3-year timeline.

### Slide 4.4: EC2 Isolation: Dedicated Hosts vs. Dedicated Instances
* **Title:** Dedicated Infrastructure: Hosts and Instances
* **Content:**
  * For strict compliance, security, or licensing requirements:
    * **Dedicated Instances:**
      * Virtual instances run on hardware dedicated to a single customer, isolated from other accounts. (Still managed as standard virtual instances).
    * **Dedicated Hosts:**
      * You rent a **physical server** dedicated entirely to your workloads.
      * Gives you full visibility and control over physical cores and sockets.
      * Required to meet specific compliance standards or reuse your existing per-core software licenses (BYOL).
    * **Capacity Reservations:**
      * Reserve compute capacity in a specific Availability Zone to ensure availability when needed. Pay On-Demand rates unless coupled with an RI or Savings Plan.
* **Visualization:** 
  * A physical server rack split:
    * **Dedicated Instances:** Virtual boxes in your own yard, isolated from other yards.
    * **Dedicated Host:** A padlock on the entire physical hardware rack cabinet.

### Slide 4.5: Cloud Data Transfer Costs
* **Title:** Network Cost Structure: Data Transfer
* **Content:**
  * Understanding data transfer charges is crucial to cost optimization:
    * **Inbound Data (Internet into AWS):** Always **Free**.
    * **Outbound Data (AWS out to Internet):** **Charged** per GB.
    * **Data Transfer within AWS (Same Region):**
      * *Same Availability Zone (VPC Peering):* **Free**.
      * *Across different Availability Zones:* **Charged** per GB (both directions, e.g., EC2 to RDS in different AZs).
    * **Inter-Region Transfer (Region to Region):** **Charged** per GB.
    * **Connectivity Tools:** Site-to-Site VPN and Direct Connect charge connection/port fees plus outbound data rates (inbound is free).
* **Visualization:** 
  * A traffic-light diagram:
    * Green arrow: Internet -> AWS (Free).
    * Green arrow: EC2 in AZ-1 -> EC2 in AZ-1 (Free).
    * Red arrow: AWS -> Internet (Paid).
    * Red arrow: EC2 in AZ-1 -> EC2 in AZ-2 (Paid).
    * Red arrow: Region 1 -> Region 2 (Paid).

### Slide 4.6: AWS Cost Management Tools
* **Title:** Cost Planning and Analysis Tools
* **Content:**
  * **AWS Billing Dashboard:**
    * View invoices, tracking details, payment history, and high-level charts showing where costs are growing.
  * **AWS Pricing Calculator (Before Deployment):**
    * Build an architectural mockup and estimate monthly and annual costs before provisioning resources.
  * **AWS Cost Explorer (After Deployment):**
    * Visualize, analyze, and graph your historical cost patterns, resource usage, and forecast future costs.
  * **AWS Budgets (Alerts):**
    * Set custom cost and usage limits. Triggers alerts (email/SNS) when your forecasted or actual costs exceed your threshold.
  * **AWS Cost & Usage Report (CUR):**
    * The most detailed, raw cost report available. Outputs granular hourly details by service, account, and tags to S3 for database analytics.
* **Visualization:** 
  * A toolkit displaying:
    * A calculator (Pricing Calculator).
    * A line chart showing cost spikes (Cost Explorer).
    * A clock with an alarm bell ringing at $100 (AWS Budgets).

### Slide 4.7: Cost Allocation: Tagging
* **Title:** Tracking Costs: Cost Allocation Tags
* **Content:**
  * **Tags:** Key-value metadata labels attached to resources (e.g., Key: `Department`, Value: `Finance`).
  * **Cost Allocation Tags:** Activate tags in the billing console to track expenses by tag values.
  * Allows you to organize cost reports (CUR, Cost Explorer) by:
    * Project or Application name.
    * Environment (Dev, Testing, Production).
    * Cost Center or Department.
* **Visualization:** 
  * Tag labels attached to EC2 instances and S3 buckets. A unified billing invoice is split into slices corresponding to the tag labels (e.g., 60% Dev slice, 40% Prod slice).

### Slide 4.8: AWS Support Plans (Part 1)
* **Title:** Support Plans: Basic and Developer
* **Content:**
  * **Basic Support:**
    * **Cost:** Free for all customers.
    * **Scope:** 24/7 access to billing support, service quota increases, health dashboards, and 7 core Trusted Advisor checks.
  * **Developer Support:**
    * **Cost:** Starts at $29/month.
    * **Scope:** Adds email access to cloud support associates.
    * **Response Times:** <24 business hours for general questions; <12 business hours for system impaired.
    * **Target:** Building blocks/testing environments.
* **Visualization:** 
  * Left: A free badge next to a billing envelope (Basic). Right: A wrench icon next to a 24-hour email icon (Developer).

### Slide 4.9: AWS Support Plans (Part 2)
* **Title:** Support Plans: Business and Enterprise
* **Content:**
  * **Business Support:**
    * **Cost:** Starts at $100/month.
    * **Scope:** 24/7 phone, email, and chat access to cloud support engineers. Help with third-party software integrations. All Trusted Advisor checks.
    * **Response Times:** <1 hour for production systems down.
  * **Enterprise Support (and Enterprise On-Ramp):**
    * **Cost:** Starts at $15,000/month (On-Ramp starts at $5,500/month).
    * **Scope:** Adds a dedicated **Technical Account Manager (TAM)**, who acts as a personal architectural advocate. Adds Infrastructure Event Management (IEM).
    * **Response Times:** <15 minutes for critical business outages (<30m for Enterprise On-Ramp).
* **Visualization:** 
  * Left: 24/7 chat bubbles with a 1-hour alarm clock (Business). Right: A personal consultant icon labeled "TAM" next to a 15-minute alarm clock (Enterprise).

### Slide 4.10: Self-Assessment Tool: AWS Trusted Advisor
* **Title:** Auto-Optimizing Accounts: Trusted Advisor
* **Content:**
  * A service that automatically inspects your AWS environment to find optimization opportunities across 6 key pillars:
    1. **Cost Optimization:** Find idle EC2 instances or unattached EBS disks.
    2. **Security:** Find public S3 buckets or missing root MFA.
    3. **Fault Tolerance:** Find resources missing Multi-AZ setups.
    4. **Performance:** Check for throughput limitations or CPU bottlenecks.
    5. **Operational Excellence:** Audit operations and configurations.
    6. **Service Limits:** Alert when account usage approaches default limits.
  * **Access:** Basic/Developer support get 7 core checks; Business and above get all 480+ checks.
* **Visualization:** 
  * A dashboard checklist showing:
    * Cost: 3 idle servers found (Red Warning).
    * Security: Root MFA active (Green Check).
    * Fault Tolerance: Single AZ RDS in use (Yellow Warning).

### Slide 4.11: Health Monitoring: AWS Health
* **Title:** Monitoring Service Health: AWS Health
* **Content:**
  * **AWS Health Dashboard:**
    * *Public Events:* Service-wide status and regional outages visible to anyone.
    * *Account-Specific Events:* Issues and notifications specifically affecting your AWS resources.
  * **AWS User Notifications:** Instantly aggregates notifications from multiple sources (events, billing, limits) in one place.
  * **AWS Health API:** Programmatically fetch health and notification data (available for Business Support and above).
* **Visualization:** 
  * A split layout showing a public outage globe alert on the left, and an inbox containing a private notification about a specific EC2 server degradation on the right.

### Slide 4.12: AWS Trust & Safety
* **Title:** Abuse and Protection: AWS Trust & Safety
* **Content:**
  * **Reporting Abuse:** Direct channel to report any illegal or abusive activity originating from AWS resources (e.g., spam, phishing, DDoS hosting).
  * **Abuse Notices:** How to respond and remediate issues if AWS notifies you that your resource is acting maliciously.
  * **Protection & Messaging:** Core best practices for secure digital messaging and securing application endpoints.
* **Visualization:** 
  * An envelope with a red warning exclamation mark representing an Abuse Notice, next to a security officer shield representing AWS compliance oversight.

### Slide 4.13: AWS Business Ecosystem: Partners & Marketplace
* **Title:** The AWS Business Ecosystem
* **Content:**
  * **AWS Partner Network (APN):**
    * A global community of thousands of partners (consulting, software, reseller, managed services) to help you build, deploy, and scale AWS solutions.
  * **AWS Marketplace:**
    * A digital catalog of third-party software, AMI templates, and services that run directly on AWS.
    * **Key Features:** Pay-as-you-go, BYOL, or subscription pricing with unified billing (charges appear directly on your AWS invoice).
* **Visualization:** 
  * A shopping basket containing third-party vendor icons (Marketplace) checking out with a unified AWS invoice receipt.

### Slide 4.14: Support Resources: Professional Services & Architects
* **Title:** AWS Support Architecture
* **Content:**
  * **AWS Solutions Architects:**
    * Provide general technical guidance, best practices, and architecture reviews (like Well-Architected reviews) to optimize your design.
  * **AWS Professional Services:**
    * A global team of experts who work directly with your organization on projects for implementation assistance and knowledge transfer.
  * **Community Forums:**
    * **AWS re:Post:** A community-driven, expert-reviewed Q&A forum for technical support.
    * **AWS Knowledge Center:** FAQs and guide videos answering common technical issues.
* **Visualization:** 
  * Left: A Solutions Architect pointing to an architectural blueprint. Right: A team of Professional Services consultants working on site at a desk.

---

## Module 4 Review Checkpoint

#### Question 1
A media transcoding company runs batch processing jobs that can tolerate unexpected interruptions and server terminations. The company wants to secure the highest discount possible for compute costs. Which EC2 pricing model is most appropriate?
* A) On-Demand Instances
* B) Savings Plans
* C) Spot Instances
* D) Reserved Instances

* **Correct Answer:** **C**
* **Explanation:** Spot Instances offer the largest discount (up to 90%) but can be interrupted when AWS needs capacity back. Since the workload is a batch processing job that can tolerate interruptions, Spot is the perfect choice to minimize cost.

#### Question 2
Under which condition is data transfer within AWS completely free?
* A) Copying data from an EC2 instance in us-east-1 to us-west-2
* B) Copying data from an EC2 instance to an RDS database in the same Availability Zone
* C) Copying data from an EC2 instance to another EC2 instance in different Availability Zones within the same region
* D) Sending data from an EC2 instance to a customer over the internet

* **Correct Answer:** **B**
* **Explanation:** Data transfer within the same Availability Zone (AZ) in the same Region is free. Cross-AZ (C), Cross-Region (A), and Outbound internet data transfer (D) all incur per-GB charges.

#### Question 3
An enterprise customer requires a dedicated technical contact who can provide proactive architectural guidance, coordinate support event management, and assist with optimization efforts. Which support plan is required to get a designated Technical Account Manager (TAM)?
* A) Basic Support
* B) Developer Support
* C) Business Support
* D) Enterprise Support

* **Correct Answer:** **D**
* **Explanation:** Only the Enterprise Support plan (and Enterprise On-Ramp as a pooled resource) provides access to a Technical Account Manager (TAM). Developer and Business support provide access to general support engineers but not a designated TAM.

---
---

# Module 5: Course Wrap-up & Exam Tips

## Learning Objectives
* Review the four exam domains and key keywords.
* Master test-taking strategy, question analysis, and elimination techniques.
* Identify final prep resources and registration steps.

---

### Slide 5.1: Test-Taking Strategy (Part 1)
* **Title:** Exam Strategy: Analyzing Questions
* **Content:**
  * **Identify Key Qualifiers:** Pay attention to constraint keywords in the questions:
    * *MOST cost-effective* (Look for pricing options like Spot, Serverless, S3 Glacier).
    * *MINIMAL operational overhead* (Look for managed services like RDS, Beanstalk, DynamoDB over EC2).
    * *HIGHLY resilient / fault-tolerant* (Look for Multi-AZ, Load Balancers, Auto Scaling).
  * **Read ALL Options:** Do not select the first answer that seems correct. Read all choices, as one may fit the constraint qualifiers better.
* **Visualization:** 
  * A text highlight box showing an exam question with the words "MOST cost-effective" and "fault-tolerant" highlighted in bright yellow, with arrows pointing to the corresponding correct answers.

### Slide 5.2: Test-Taking Strategy (Part 2)
* **Title:** Exam Strategy: Elimination and Time Management
* **Content:**
  * **Use Elimination:** Cross off obviously incorrect answers first. For example, if a question asks about database migrations, eliminate general compute or storage options.
  * **Time Management:**
    * You have 90 minutes for 65 questions (approx. 1.3 minutes per question).
    * If a question is too complex, make a best guess, **flag it for review**, and move on. Do not get stuck on a single question.
  * **No Penalty for Guessing:** Answer every single question. Unanswered questions are marked as incorrect.
* **Visualization:** 
  * An exam screen mock-up showing 4 options (A, B, C, D) with options A and B struck out with red lines, and a checkbox next to "Flag for Review" highlighted.

### Slide 5.3: Exam Prep Resources
* **Title:** Final Preparation Checklist
* **Content:**
  * **Official AWS Skill Builder Practice Question Set:** Take the free official prep quiz to align with the question style and wording of the exam.
  * **Tutorials Dojo (Practice Exams):** Review detailed explanations to understand why answers are correct and incorrect.
  * **AWS Whitepapers:** Review the "AWS Well-Architected Framework" whitepaper.
  * **AWS Skill Builder Center:** Offers game-based learning (Cloud Quest), self-paced labs, and over 500 digital courses.
  * **Register for Your Exam:** Log in to your AWS Certification account. Schedule your exam to be taken at a Pearson VUE testing center or online.
* **Visualization:** 
  * A checklist with tick boxes showing: Skill Builder Practice Set (Checked), Well-Architected Whitepaper (Checked), Practice Exams (Checked), Schedule Exam (Unchecked).

# Module 6: Skill Builder Labs

## Learning Objectives
* Gain hands-on experience with core AWS services using official Skill Builder labs.
* Launch, resize, manage, and monitor an Amazon EC2 instance.
* Create a custom VPC, configure subnets, and define internet routing.
* Create Amazon S3 buckets, manage objects, and understand lifecycle options.
* Manage access permissions, groups, and IAM policies.

---

### Slide 6.1: LAB: Introduction to Amazon EC2 (Free)
* **Title:** LAB: Introduction to Amazon EC2 (Free)
* **Content:**
  * **Lab Overview:** This lab provides a basic overview of launching, resizing, managing, and monitoring an Amazon EC2 instance.
  * **Key Tasks:**
    * Launch an EC2 instance with the Amazon Linux AMI.
    * Select an instance type (t2.micro) and configure network settings.
    * Resize an active instance and monitor CPU utilization metrics in CloudWatch.
    * Clean up resources by terminating the instance.
  * **Official Lab Link:** [Launch Lab on AWS Skill Builder](https://skillbuilder.aws/learn/9VNGAHHAUU/introduction-to-amazon-ec2/)
* **Visualization:** 

### Slide 6.2: LAB: Introduction to Amazon VPC (Free)
* **Title:** LAB: Introduction to Amazon VPC (Free)
* **Content:**
  * **Lab Overview:** This lab introduces you to Amazon Virtual Private Cloud (Amazon VPC). You will use the Amazon VPC wizard to create a VPC, public subnet, and route tables.
  * **Key Tasks:**
    * Create a custom VPC using the VPC Wizard in the console.
    * Configure public and private subnets with appropriate IP ranges.
    * Attach an Internet Gateway (IGW) to allow internet connectivity.
    * Define routing in the route tables to allow flow between subnets and the IGW.
  * **Official Lab Link:** [Launch Lab on AWS Skill Builder](https://skillbuilder.aws/learn/PH6Z6EVH8Z/introduction-to-amazon-virtual-private-cloud-vpc/)
* **Visualization:** 

### Slide 6.3: LAB: Introduction to Amazon S3 (Free)
* **Title:** LAB: Introduction to Amazon S3 (Free)
* **Content:**
  * **Lab Overview:** This lab demonstrates how to use an Amazon S3 bucket and manage files, or objects, that are stored in the bucket.
  * **Key Tasks:**
    * Create a uniquely named S3 bucket in a designated AWS region.
    * Upload files (objects) into the bucket and configure access permissions.
    * Move, copy, view, and delete objects in the bucket.
    * Understand S3 versioning, lifecycle configuration, and clean up S3 buckets.
  * **Official Lab Link:** [Launch Lab on AWS Skill Builder](https://skillbuilder.aws/learn/R54NZHEX5K/introduction-to-amazon-simple-storage-service-s3/)
* **Visualization:** 

### Slide 6.4: LAB: Introduction to AWS IAM (Free)
* **Title:** LAB: Introduction to AWS IAM (Free)
* **Content:**
  * **Lab Overview:** This lab shows you how to manage access and permissions to your AWS services using AWS Identity and Access Management (IAM).
  * **Key Tasks:**
    * Create IAM users and add them to custom security groups.
    * Manage user credentials (passwords) and require MFA.
    * Define and apply IAM policies to restrict user access to specific services.
    * Log in as an IAM user to verify policy restrictions and permissions.
  * **Official Lab Link:** [Launch Lab on AWS Skill Builder](https://skillbuilder.aws/learn/XFPX3M7HAQ/introduction-to-aws-identity-and-access-management-iam/)
* **Visualization:** 


