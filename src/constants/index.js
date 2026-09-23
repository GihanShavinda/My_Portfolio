import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,

  reactjs,
  angular,
  php,
  python,
  mysql,
 
  nodejs,
  mongodb,
  git,
  docker,
  willsj,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  threejs,
} from "../assets";
import project01Main from "../assets/projects/project 01/project_01_1.png";
import project01Image2 from "../assets/projects/project 01/project_01_2.png";
import project01Image3 from "../assets/projects/project 01/project_01_3.png";
import project01Image4 from "../assets/projects/project 01/project_01_4.png";

import project02 from "../assets/projects/project_02.png";

import project03 from "../assets/projects/project_03.png";

import project04 from "../assets/projects/project_04.png";

import project05Main from "../assets/projects/project 05/project_05_1.png";
import project05Image2 from "../assets/projects/project 05/project_05_2.png";
import project05Image3 from "../assets/projects/project 05/project_05_3.png";
import project05Image4 from "../assets/projects/project 05/project_05_4.png";

import project06Main from "../assets/projects/project 06/project_06_1.png";
import project06Image2 from "../assets/projects/project 06/project_06_2.png";
import project06Image3 from "../assets/projects/project 06/project_06_3.png";
import project06Image4 from "../assets/projects/project 06/project_06_4.png";

import project07Main from "../assets/projects/project 07/project_07_1.png";
import project07Image2 from "../assets/projects/project 07/project_07_2.png";
import project07Image3 from "../assets/projects/project 07/project_07_3.png";
import project07Image4 from "../assets/projects/project 07/project_07_4.png";

import project08Main from "../assets/projects/project 08/project_08_1.png";
import project08Image2 from "../assets/projects/project 08/project_08_2.png";
import project08Image3 from "../assets/projects/project 08/project_08_3.png";
import project08Image4 from "../assets/projects/project 08/project_08_4.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "security", title: "Security" },
  { id: "certs", title: "Certs" },
  { id: "work", title: "Journey" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

// ── What I do (About / introduction capabilities) ────────────────────────────
// Two primary career tracks + supporting engineering and Purple Team strengths.
const services = [
  {
    type: "primary",
    tag: "FULL-STACK",
    title: "Full-Stack Engineering",
    icon: web,
    desc: "Building production-ready web applications from responsive interfaces to APIs, databases, authentication and deployment.",
    items: ["React / Angular", "Laravel / Node.js", "REST APIs", "SQL / NoSQL"],
    accent: "#22d3ee",
  },
  {
    type: "primary",
    tag: "SECURITY",
    title: "Security Engineering",
    icon: backend,
    desc: "Designing, testing and improving secure systems with practical experience across monitoring, detection, network analysis and secure development.",
    items: ["Detection Engineering", "Network Security", "Threat Analysis", "Secure Architecture"],
    accent: "#22e39a",
  },
  {
    type: "support",
    tag: "BUILD",
    title: "Secure Backend & API Engineering",
    icon: creator,
    desc: "Authentication, RBAC, API hardening, validation, database design and security-conscious backend development.",
    items: ["JWT / RBAC", "API Security", "Docker", "Cloud"],
    accent: "#f5b731",
  },
  {
    type: "support",
    tag: "DETECT",
    title: "Detection & Response Engineering",
    icon: mobile,
    desc: "Turning logs and telemetry into useful detections, investigation context and repeatable response workflows.",
    items: ["SIEM", "Log Analysis", "ATT&CK", "Incident Response"],
    accent: "#a78bfa",
  },
  {
    type: "purple",
    tag: "PURPLE / OFFENSE",
    title: "Adversary Validation",
    icon: web,
    desc: "Using controlled offensive techniques to validate attack paths, security controls and observable evidence without losing defensive context.",
    items: ["Recon", "Web Testing", "Attack Paths", "Control Validation"],
    accent: "#f43f5e",
  },
  {
    type: "purple",
    tag: "PURPLE / DEFENSE",
    title: "Detection Validation",
    icon: backend,
    desc: "Mapping simulated attacker behavior to telemetry, detections and response improvements so offensive findings strengthen defensive coverage.",
    items: ["Telemetry", "Detection Gaps", "Triage", "Coverage Improvement"],
    accent: "#38bdf8",
  },
];

// ── Tech bubbles ─────────────────────────────────────────────────────────────
const technologies = [
  { name: "HTML 5", icon: html },
  
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  {name: "Angular", icon: angular},
  { name: "PHP", icon: php },
  { name: "Python", icon: python },
  { name: "MySQL", icon: mysql },
  
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "docker", icon: docker },
];

// ── SECURITY / SOC focus areas (new section) ─────────────────────────────────
// Blue-team capabilities you're building toward a SOC Analyst role.
const securityFocus = [
  {
    tag: "detect",
    title: "Threat Detection",
    desc: "Reading logs and telemetry to spot anomalies, IOCs and suspicious patterns before they escalate.",
    items: ["Log analysis", "IOC hunting", "Alert triage", "MITRE ATT&CK"],
    color: "#22d3ee",
  },
  {
    tag: "respond",
    title: "Incident Response",
    desc: "Working an alert end-to-end: scope, contain, investigate and document the timeline of an event.",
    items: ["Triage playbooks", "Containment", "Root-cause", "Reporting"],
    color: "#22e39a",
  },
  {
    tag: "monitor",
    title: "SIEM & Log Analysis",
    desc: "Centralising events, writing queries and building dashboards to keep systems continuously observed.",
    items: ["Splunk basics", "Wazuh", "Query building", "Dashboards"],
    color: "#f5b731",
  },
  {
    tag: "network",
    title: "Network Security",
    desc: "Understanding traffic, protocols and packet captures to trace how an attacker moves.",
    items: ["Wireshark", "Nmap", "TCP/IP", "Firewalls"],
    color: "#f43f5e",
  },
];

// Learning path — honest status tags. Edit as you progress.
// status: "active" (currently doing) | "target" (planned / studying toward)
const learningPath = [
  { name: "TryHackMe — SOC Level 1", status: "active" },
  { name: "Blue Team Labs Online", status: "active" },
  { name: "Linux & Bash", status: "active" },
  { name: "CompTIA Security+", status: "target" },
  { name: "Splunk Fundamentals", status: "target" },
  { name: "Hack The Box — Defensive", status: "target" },
];

// ── Journey / roadmap (Experience timeline) ──────────────────────────────────
// Honest, editable milestones — replace with your real dates & details.
const experiences = [
  {
    title: "Started Building for the Web",
    company_name: "Self-Study · Web Development Foundations",
    icon: html,
    iconBg: "#0d1626",
    date: "Foundation",
    points: [
      "Built a strong base in HTML, CSS and JavaScript by creating practical web interfaces and small applications.",
      "Progressed from front-end fundamentals into APIs, databases and end-to-end application development.",
    ],
  },
  {
    title: "Full-Stack Developer (Intern)",
    company_name: "Willsj Technologies LLC · Bur Dubai, UAE (Remote)",
    icon: willsj,
    iconBg: "#ffffff",
    date: "Mar 2025 - Nov 2025",
    points: [
      "Built back-end services for production products using PHP Laravel and MySQL, including JWT-based authentication and access control.",
      "Worked with REST APIs, Postman, Git/GitHub and CI/CD practices while applying secure development principles.",
      "Integrated and deployed application services on Google Cloud, gaining practical experience across full-stack and cloud workflows.",
    ],
  },
  {
    title: "Independent Project Development",
    company_name: "Self-Study · Hands-On Portfolio Projects",
    icon: reactjs,
    iconBg: "#0d1626",
    date: "Ongoing",
    points: [
      "Build end-to-end projects independently to strengthen React/Angular, Node.js, Laravel, FastAPI, databases, APIs and deployment skills.",
      "Use project-based learning to explore secure application design, automation, AI-assisted workflows and real-world engineering patterns.",
      "Continuously document, test and improve projects as part of structured self-study and portfolio development.",
    ],
  },
  {
    title: "Cybersecurity Hands-On Learning",
    company_name: "Home Lab · TryHackMe · Security Engineering",
    icon: backend,
    iconBg: "#0d1626",
    date: "Ongoing",
    points: [
      "Practise network analysis, vulnerability assessment, detection engineering, incident investigation and defensive security in hands-on labs.",
      "Use Windows, Linux and Kali lab systems with tools such as Wireshark, Nmap and Metasploit to understand attacks from both sides.",
      "Apply security concepts directly in self-built platforms instead of learning them only as theory.",
    ],
  },
  {
    title: "Purple Team Focus",
    company_name: "Offensive Validation ↔ Defensive Improvement",
    icon: creator,
    iconBg: "#0d1626",
    date: "Current Focus",
    points: [
      "Simulate realistic attack paths in controlled labs and use the resulting evidence to validate detections and defensive controls.",
      "Focus on MITRE ATT&CK mapping, detection coverage, attack-path analysis, threat hunting and evidence-driven response improvement.",
      "Build security engineering projects that connect red-team techniques with blue-team visibility and measurable defensive outcomes.",
    ],
  },
  {
    title: "Career Direction",
    company_name: "Security Engineering + Full-Stack Development",
    icon: creator,
    iconBg: "#0d1626",
    date: "Next Step",
    points: [
      "Targeting roles where I can engineer secure systems while continuing to build strong full-stack products and platforms.",
      "Developing toward security engineering and Purple Team responsibilities with a developer-first understanding of applications, APIs and cloud systems.",
      "Continuing hands-on study, certifications and practical projects to deepen both software engineering and cybersecurity capability.",
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────────────────────
// Each project drives BOTH the card (Works section) and its own case-study page
// at /project/<slug>. Fill the case-study fields with your real content.
// Any optional field left empty/removed simply hides that section on the page:
//   overview, industry, deliverables[], context, problem, solution,
//   designSystem { colors[], typography[] }, gallery[], live_link
const projects = [
    {
    // ── card ──
    slug: "cloudhunt-aws-cloud-threat-detection-response",
    name: "☁️ CloudHunt — Agentless AWS Cloud Threat Detection & Response",
    tagline: "Identity-graph-driven cloud detection, attack-path reasoning and safe response",
    description:
      "An agentless AWS cloud security engineering platform that ingests CloudTrail-style telemetry, detects suspicious identity and control-plane behavior, correlates multi-stage activity into cloud cases, models IAM relationships in Neo4j, discovers privilege-escalation paths, reconstructs AssumeRole attack chains, and ranks incidents by blast radius. CloudHunt adds MITRE ATT&CK mapping, human-approved reversible response, reporting, and an evaluation harness while remaining fully demonstrable offline through LocalStack and deterministic replay scenarios.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "Angular", color: "pink-text-gradient" },
      { name: "Neo4j", color: "green-text-gradient" },
      { name: "AWS Security", color: "orange-text-gradient" },
      { name: "Cloud Detection", color: "blue-text-gradient" },
    ],
    image: project08Main,
    source_code_link: "https://github.com/GihanShavinda/CloudHunt", // Add the exact CloudHunt GitHub repository URL when ready
    live_link: "",

    // ── case study ──
    overview:
      "CloudHunt is an agentless cloud threat detection and response platform designed around a simple idea: cloud incidents should be investigated as identity attack paths, not isolated API calls. It combines cloud telemetry processing, deterministic signature and behavioral detection, IAM graph reasoning, offline privilege-escalation analysis, attack-chain reconstruction, blast-radius prioritization, MITRE ATT&CK context, guarded response actions, reporting and evaluation in one end-to-end workflow. The platform is deliberately lab-friendly and can be demonstrated without production AWS credentials by using LocalStack, sample datasets and deterministic replay scenarios.",
    industry: "Cloud Security · Security Engineering · SOC / Detection & Response",
    deliverables: [
      "Agentless CloudTrail-style telemetry ingestion and normalization",
      "Signature + behavioral cloud detection engines",
      "IAM identity graph with AssumeRole and permission relationships",
      "Offline effective-permission and privilege-escalation analysis",
      "Multi-stage cloud attack-chain reconstruction",
      "Blast-radius-first incident prioritization",
      "MITRE ATT&CK cloud-technique mapping",
      "Risk-classified reversible response with approval guardrails",
      "Case workspace with evidence timeline, graph and audit history",
      "JSON / CSV / PDF reporting",
      "Evaluation harness for detection, correlation, privesc and safety metrics",
      "Angular + FastAPI + PostgreSQL + Neo4j + Redis platform",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "FastAPI",
      "Python 3.11",
      "PostgreSQL",
      "Neo4j",
      "Redis",
      "LocalStack",
      "Cytoscape.js",
      "Docker Compose",
      "pytest",
      "MITRE ATT&CK",
      "ReportLab",
    ],
    role: "Cloud Security Engineering · Detection Engineering · Full-Stack Development",
    projectType: "Agentless Cloud Threat Detection & Response Platform",
    status: "Working lab-first implementation · evaluation-ready",
    highlights: [
      "Investigates cloud identity paths instead of treating API calls as isolated alerts",
      "Combines signature, behavioral, IAM graph and privilege-escalation reasoning",
      "Prioritizes cases by reachable blast radius and administrator-equivalent access",
      "Keeps response explainable, reversible and human-approved for high-impact actions",
    ],

    context:
      "Cloud security workflows are often fragmented across SIEM alerts, native cloud findings, IAM posture tools and separate response systems. This creates a gap between detecting a suspicious API call and understanding how an identity could traverse roles, escalate privilege, reach sensitive resources and affect business-critical assets. CloudHunt was built to unify those steps into one reproducible engineering workflow.",
    problem:
      "Existing tools frequently separate telemetry detection from identity-relationship analysis, privilege-escalation reasoning and incident response. Static IAM tools can show risky permissions but not connect them to current attack evidence, while severity-first alerting may under-prioritize incidents that expose a much larger reachable blast radius. Automated response can also become unsafe when actions are opaque or irreversible.",
    solution:
      "CloudHunt normalizes cloud telemetry, runs deterministic signature and behavioral detections, correlates related activity into a cloud case, then enriches the case with IAM graph relationships and offline privilege-escalation paths. It reconstructs the attack chain across discovery, AssumeRole, escalation, sensitive-resource access and defense evasion, maps the sequence to MITRE ATT&CK, computes reachable blast radius, and routes response through an approved action catalogue. Low-risk reversible actions can be automated while higher-impact actions require explicit human approval and are fully audited.",

    architecture: [
      {
        title: "Telemetry Ingestion",
        detail: "CloudTrail-style events, GuardDuty-style findings and IAM/Config snapshots enter an agentless normalization pipeline.",
      },
      {
        title: "Detection & Correlation",
        detail: "Signature rules and per-principal behavioral analytics detect suspicious activity and group related events into one cloud case.",
      },
      {
        title: "IAM Graph Reasoning",
        detail: "Neo4j models users, roles, policies, permissions, resources and AssumeRole relationships for identity-path analysis.",
      },
      {
        title: "Privesc & Attack Chain",
        detail: "Offline effective-permission logic identifies escalation paths and reconstructs multi-stage identity movement across the incident.",
      },
      {
        title: "Blast Radius & ATT&CK",
        detail: "Reachable sensitive resources and admin-equivalent privilege are scored, prioritized and mapped to ATT&CK cloud techniques.",
      },
      {
        title: "Response, Audit & Evaluation",
        detail: "Risk-aware actions, approvals, audit history, reports and evaluation metrics complete the investigation-to-response workflow.",
      },
    ],

    features: [
      {
        title: "Agentless cloud telemetry processing",
        detail: "Normalizes CloudTrail and related AWS-style telemetry into a consistent event model without endpoint agents.",
        meta: "TELEMETRY",
      },
      {
        title: "Signature + behavioral detection",
        detail: "Combines deterministic control-plane rules with per-principal signals such as new geography, unusual APIs and enumeration bursts.",
        meta: "DETECTION",
      },
      {
        title: "IAM identity graph",
        detail: "Represents users, roles, policies, permission edges, resources and AssumeRole relationships for reachability analysis.",
        meta: "GRAPH",
      },
      {
        title: "Offline privilege-escalation analysis",
        detail: "Evaluates escalation primitives such as CreatePolicyVersion, AttachUserPolicy, PassRole and AssumeRole without issuing dangerous live writes.",
        meta: "PRIVESC",
      },
      {
        title: "Attack-chain reconstruction",
        detail: "Stitches discovery, role assumption, escalation, sensitive-resource access and defense-evasion activity into a single analyst-readable case.",
        meta: "CORRELATION",
      },
      {
        title: "Blast-radius-first triage",
        detail: "Prioritizes incidents by reachable sensitive assets and administrator-equivalent access rather than severity labels alone.",
        meta: "RISK",
      },
      {
        title: "Human-in-the-loop response",
        detail: "Low-risk reversible actions may automate, while higher-impact operations require explicit approval and token/MFA controls.",
        meta: "HITL",
      },
      {
        title: "Evaluation harness",
        detail: "Measures detection precision/recall, correlation accuracy, privesc-path accuracy, attack-chain accuracy, blast-radius quality and response safety.",
        meta: "VALIDATION",
      },
    ],

    implementation: [
      "Built FastAPI services for authentication, RBAC, account onboarding, telemetry ingestion, cases, reports and guarded response actions",
      "Implemented Angular workspaces for dashboards, detections, IAM graph exploration, case investigation, approvals and administration",
      "Modeled IAM users, roles, policies, resources and AssumeRole relationships in Neo4j",
      "Added deterministic signature rules and behavioral detections over normalized cloud audit telemetry",
      "Implemented offline effective-permission and known privilege-escalation path analysis",
      "Correlated related events into cloud cases and reconstructed multi-stage attack chains",
      "Added blast-radius scoring based on reachable sensitive resources and administrator-equivalent access",
      "Mapped relevant case steps to MITRE ATT&CK cloud techniques",
      "Implemented approved-action guardrails, reversibility, approval requirements and audit logging",
      "Added JSON, CSV and PDF case reporting with ReportLab",
      "Built LocalStack / replay-driven demo workflows so the platform can be evaluated without production AWS credentials",
      "Created pytest-based evaluation covering detection, correlation, path accuracy, ATT&CK coverage and containment safety",
    ],

    security: [
      {
        title: "Least-privilege access model",
        detail: "Viewer, Cloud Analyst and Administrator roles are enforced in the backend, with public signup restricted to Viewer access.",
        category: "Identity",
      },
      {
        title: "Offline escalation analysis",
        detail: "Privilege-escalation paths are reasoned about without performing dangerous live IAM write operations.",
        category: "Cloud Security",
      },
      {
        title: "Human-approved high-impact actions",
        detail: "High-impact response requires explicit approval, while only low-risk reversible actions are eligible for automation.",
        category: "Response Safety",
      },
      {
        title: "Thin optional AI",
        detail: "Core detection, response and evaluation remain deterministic and functional when the assistant is disabled.",
        category: "AI Safety",
      },
      {
        title: "Auditable case workflow",
        detail: "Actions and before/after evidence are recorded for traceability across investigation and response.",
        category: "Audit",
      },
      {
        title: "No production credentials required for demo",
        detail: "LocalStack and deterministic replay scenarios enable reproducible validation without exposing real AWS secrets.",
        category: "Lab Safety",
      },
    ],

    engineering: [
      {
        title: "Graph-first cloud reasoning",
        detail: "Identity relationships and attack reachability are modeled explicitly instead of reducing every event to a flat alert.",
        category: "Architecture",
      },
      {
        title: "Separation of relational and graph data",
        detail: "PostgreSQL stores application state while Neo4j handles identity reachability and attack-path relationships.",
        category: "Data Design",
      },
      {
        title: "Offline-first reproducibility",
        detail: "LocalStack, fixtures and deterministic replay make demonstrations and evaluation repeatable and low-cost.",
        category: "DevSecOps",
      },
      {
        title: "Explainable risk prioritization",
        detail: "Blast-radius ranking is based on concrete reachable impact rather than an opaque severity score alone.",
        category: "Explainability",
      },
      {
        title: "Evaluation as a first-class feature",
        detail: "The system includes a dedicated harness for measuring detection quality, path accuracy, correlation and safety rather than relying on screenshots only.",
        category: "Validation",
      },
    ],

    outcomes: [
      { value: "16-step", label: "End-to-end workflow from telemetry ingestion through response and evaluation" },
      { value: "3 roles", label: "Administrator, Cloud Analyst and Viewer with backend-enforced RBAC" },
      { value: "3 formats", label: "Case reporting available in JSON, CSV and PDF" },
      { value: "0 unsafe", label: "Evaluation target for automatic high-impact response actions" },
    ],

    designSystem: {
      colors: [
        { name: "Cloud Cyan", hex: "#22D3EE" },
        { name: "Graph Violet", hex: "#8B5CF6" },
        { name: "Risk Amber", hex: "#F59E0B" },
        { name: "Critical Red", hex: "#F43F5E" },
      ],
      typography: ["Interface sans — analyst workflows", "Monospace — cloud events, IAM paths and evidence"],
    },

    gallery: [
      { src: project08Image2, caption: "CloudHunt dashboard with correlated cloud cases, sensitive-resource exposure and detection context" },
      { src: project08Image3, caption: "IAM identity graph and AssumeRole / privilege-escalation attack-path investigation" },
      { src: project08Image4, caption: "Case workspace with attack chain, blast radius, ATT&CK mapping, guarded response and audit evidence" },
    ],
  },
  {
    // ── card ──
    slug: "socmind-ai-explainable-security-operations",
    name: "🧠 SOCMind AI — Explainable Security Operations Platform",
    tagline: "Detect, correlate, reconstruct, explain, guide and respond — with humans in control",
    description:
      "An explainable, human-in-the-loop SOC platform that ingests security telemetry, combines Sigma-style rules, anomaly detection and correlation, reconstructs MITRE-tagged attack stories, provides evidence-grounded AI investigation guidance, and routes response through a transparent risk-aware approval engine with append-only auditing.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "MITRE ATT&CK", color: "orange-text-gradient" },
      { name: "RAG / XAI", color: "pink-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
    ],
    image: project07Main,
    source_code_link: "https://github.com/GihanShavinda/SOCMind-AI", // Add the exact SOCMind AI GitHub URL when ready
    live_link: "",

    // ── case study ──
    overview:
      "SOCMind AI is an explainable, human-in-the-loop security operations platform built to move from raw telemetry to an auditable investigation and response workflow. It ingests Windows and Linux security events, applies layered deterministic detection, correlates related behavior into incidents, reconstructs MITRE ATT&CK-tagged attack stories and graphs, and guides analysts using evidence-grounded AI. Response is constrained by an approved command catalog, transparent risk evaluation, human approvals and reversible audited actions. The platform remains operational without an LLM through deterministic fallback logic.",
    industry: "Security Operations · Detection Engineering · Explainable AI · Purple Team",
    deliverables: [
      "Windows and Linux security-event collectors",
      "Sigma-style rule engine, anomaly engine and correlation engine",
      "MITRE ATT&CK mapping and chronological attack-story reconstruction",
      "Interactive attacker → account → host → process → external attack graph",
      "Evidence-grounded AI investigation assistant with deterministic fallback",
      "Approved OS-aware investigation command catalog and safety engine",
      "Risk-aware decision engine for auto-response vs human approval",
      "Structured playbooks, reversible actions and append-only audit trail",
      "UEBA, threat hunting, forensic case packages and model cards",
      "Angular analyst console with FastAPI backend, PostgreSQL and Redis",
      "PDF, CSV and JSON incident reporting",
      "JWT, MFA and RBAC for Administrator / SOC Analyst / Viewer roles",
    ],
    technologies: [
      "Angular 18",
      "TypeScript",
      "FastAPI",
      "Python 3.12",
      "PostgreSQL",
      "Redis",
      "SQLAlchemy",
      "Alembic",
      "JWT",
      "TOTP MFA",
      "Sigma-style YAML",
      "Docker Compose",
      "MITRE ATT&CK",
      "RAG",
    ],
    role: "Security Engineering · SOC Engineering · Full-Stack Development · AI Safety",
    projectType: "Security Operations / Explainable AI Platform",
    status: "Working multi-service lab platform",
    highlights: [
      "Layered rule, anomaly and correlation detection without requiring an LLM",
      "Evidence-grounded attack-story reconstruction and MITRE ATT&CK mapping",
      "Risk-aware human-in-the-loop response with transparent approval reasoning",
      "Advanced SOC workflows including UEBA, hunting, forensics, reports and model cards",
    ],

    context:
      "SOC analysts often work across fragmented alerts, raw events, threat-intelligence context and response tools. AI can help summarize that evidence, but unrestricted AI-generated actions introduce reliability and safety risks. SOCMind AI was built to combine explainable investigation support with deterministic detections and constrained, auditable response controls.",
    problem:
      "Traditional SOC workflows suffer from alert fragmentation and manual investigation overhead, while naive AI assistants can hallucinate conclusions or recommend unsafe actions. A useful platform needs to correlate evidence, explain why activity is suspicious, preserve analyst control and keep core detection/response capabilities functional even when an LLM is unavailable.",
    solution:
      "SOCMind separates deterministic security logic from optional generative assistance. Rules, anomaly baselines and correlation create incidents; MITRE mapping and graph reconstruction organize the attack story; RAG grounds AI guidance in incident evidence and known playbooks; approved command catalogs and a safety engine constrain investigation guidance; and a transparent decision engine routes low-risk reversible actions toward automation while escalating higher-impact actions for human approval and auditing.",

    architecture: [
      {
        title: "Collection & Normalization",
        detail: "Linux and Windows collectors ship normalized security telemetry into the event-ingestion pipeline.",
      },
      {
        title: "Detection",
        detail: "Sigma-style rules, per-entity anomaly baselines and correlation logic identify suspicious behavior and escalation patterns.",
      },
      {
        title: "Incident Intelligence",
        detail: "Incidents are enriched with MITRE ATT&CK, threat intelligence, attack graphs, chronology and triage context.",
      },
      {
        title: "Explainable Guidance",
        detail: "The assistant explains what happened, why it is suspicious and what to investigate next using incident evidence and RAG context.",
      },
      {
        title: "Risk-Aware Response",
        detail: "A safety and decision layer evaluates response confidence, asset criticality and action impact before automation or approval.",
      },
      {
        title: "Analyst Console & Audit",
        detail: "Angular surfaces incidents, hunting, approvals, reports, model cards and an append-only record of every decision and action.",
      },
    ],

    features: [
      {
        title: "Layered detection",
        detail: "Rule-based, anomaly and correlation engines combine to create scored incidents with de-duplication and escalation context.",
        meta: "DETECTION",
      },
      {
        title: "Attack-story reconstruction",
        detail: "Events are ordered into a MITRE-tagged narrative and interactive graph connecting attacker, account, host, process and external infrastructure.",
        meta: "INVESTIGATION",
      },
      {
        title: "Evidence-grounded AI assistant",
        detail: "The assistant answers what happened, why it is suspicious and what to do next using the current incident and similar evidence rather than unrestricted generation.",
        meta: "RAG / XAI",
      },
      {
        title: "Approved command catalog",
        detail: "Investigation commands come only from an OS-aware allow-listed catalog and are classified by risk before recommendation.",
        meta: "SAFETY",
      },
      {
        title: "Human-in-the-loop decision engine",
        detail: "Threat confidence, response confidence, business impact and asset criticality determine whether an action can automate or must be approved.",
        meta: "HITL",
      },
      {
        title: "Reversible audited response",
        detail: "Response follows propose → approve/auto → execute → rollback, with every step written to an append-only audit log.",
        meta: "RESPONSE",
      },
      {
        title: "Threat hunting & UEBA",
        detail: "Analysts can hunt across events, analyze entity risk and promote validated hunting logic into reusable detections.",
        meta: "HUNT",
      },
      {
        title: "Forensics & reporting",
        detail: "The platform can package tamper-evident case evidence and export incident reporting in PDF, CSV and JSON formats.",
        meta: "FORENSICS",
      },
    ],

    implementation: [
      "Built FastAPI services and PostgreSQL models for assets, events, incidents, decisions, actions, reports and audit records",
      "Implemented JWT authentication, RBAC, TOTP MFA, account administration and protected security workflows",
      "Added Linux and Windows collectors that normalize endpoint authentication and security telemetry",
      "Created Sigma-style YAML detection-as-code plus anomaly and correlation layers independent of any LLM",
      "Built MITRE ATT&CK mapping, attack-story chronology, attack graphs and triage/SLA prioritization",
      "Implemented an evidence-grounded RAG assistant with deterministic fallback when no LLM provider is configured",
      "Created an approved command catalog, risk classifications, safety checks and playbook-driven response workflows",
      "Implemented a transparent decision engine for auto-response vs approval and append-only auditing",
      "Added UEBA, threat hunting, forensic case packaging, analyst feedback and model-card workflows",
      "Built the Angular analyst console and Docker Compose stack with PostgreSQL and Redis",
      "Validated the platform in an isolated Windows / Ubuntu / Kali virtual lab using repeatable attack scenarios",
    ],

    security: [
      {
        title: "Detection independent of generative AI",
        detail: "Core detection remains deterministic and available even when an LLM is disabled or unavailable.",
        category: "Resilience",
      },
      {
        title: "Prompt-injection boundary",
        detail: "Untrusted log content is treated as data instead of instructions on the optional LLM path.",
        category: "AI Security",
      },
      {
        title: "Constrained action space",
        detail: "AI guidance cannot invent arbitrary shell commands; recommended commands must exist in the approved catalog.",
        category: "AI Safety",
      },
      {
        title: "RBAC + MFA",
        detail: "Sensitive routes and high-impact approvals are protected by role checks, JWT authentication and TOTP multi-factor authentication.",
        category: "Identity",
      },
      {
        title: "Human-approved high-impact response",
        detail: "Only low-impact, reversible, high-confidence actions on opted-in low-criticality assets are eligible for automation; other actions escalate.",
        category: "Response Safety",
      },
      {
        title: "Append-only auditing",
        detail: "Decisions, approvals and actions are preserved as an auditable history for investigation and accountability.",
        category: "Audit",
      },
    ],

    engineering: [
      {
        title: "Detection as code",
        detail: "Sigma-style YAML rules can be added without changing application code, keeping detection logic reviewable and version-controlled.",
        category: "Maintainability",
      },
      {
        title: "Layered service architecture",
        detail: "Collection, detection, intelligence, reasoning, response, reporting and presentation are separated into explicit components.",
        category: "Architecture",
      },
      {
        title: "LLM-optional design",
        detail: "Generative AI enhances narrative guidance but is not a runtime dependency for detection, recommendation safety or core case handling.",
        category: "Reliability",
      },
      {
        title: "Explainable decision logic",
        detail: "Automation decisions expose their inputs and rationale rather than hiding response behavior behind an opaque score.",
        category: "Explainability",
      },
      {
        title: "Virtual-lab validation",
        detail: "Windows and Linux collectors plus Kali attack simulation provide end-to-end evidence that detections and investigation flows work on real lab telemetry.",
        category: "Validation",
      },
    ],

    outcomes: [
      { value: "3 layers", label: "Rule, anomaly and correlation detection working together" },
      { value: "HITL", label: "Risk-aware human approval for higher-impact response actions" },
      { value: "3 formats", label: "Incident reports exportable as PDF, CSV and JSON" },
      { value: "2 OS", label: "Windows and Linux telemetry collectors validated in the lab" },
    ],

    designSystem: {
      colors: [
        { name: "SOC Cyan", hex: "#22D3EE" },
        { name: "Critical Red", hex: "#F43F5E" },
        { name: "Safe Green", hex: "#22E39A" },
        { name: "Analyst Surface", hex: "#08111F" },
      ],
      typography: ["Interface sans — analyst workflows", "Monospace — telemetry, detections and investigation evidence"],
    },

    gallery: [
      { src: project07Image2, caption: "SOCMind AI incident investigation workspace with correlated evidence and attack story" },
      { src: project07Image3, caption: "MITRE ATT&CK, attack-graph and explainable analyst-guidance workflow" },
      { src: project07Image4, caption: "Risk-aware response, approvals, auditing and advanced SOC analytics" },
    ],
  },
  {
    // ── card ──
    slug: "depguard-supply-chain-threat-scanner",
    name: "🛡️ DepGuard — Supply-Chain Dependency Threat Scanner",
    tagline: "Known-CVE scanning plus behavioral package-risk signals across six ecosystems",
    description:
      "A full-stack software supply-chain security scanner that combines live OSV vulnerability intelligence with explainable behavioral heuristics for suspicious packages. DepGuard scans npm, PHP, Python, Ruby, Go and Rust dependency trees, surfaces CVEs with remediation guidance, and adds a 0–100 Trust Score for npm packages using typosquatting, install-script and package-maturity signals. Heavy scans run asynchronously through queued jobs, while an Angular dashboard provides graded, filterable and exportable results.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "Laravel", color: "pink-text-gradient" },
      { name: "Express", color: "green-text-gradient" },
      { name: "OSV", color: "orange-text-gradient" },
      { name: "Supply Chain Security", color: "blue-text-gradient" },
    ],
    image: project05Main,
    source_code_link: "https://github.com/GihanShavinda/DepGuard", // Add the exact DepGuard GitHub repository URL when ready
    live_link: "",

    // ── case study ──
    overview:
      "DepGuard is a production-shaped dependency threat scanner built at the intersection of full-stack engineering and software supply-chain security. It detects known vulnerabilities by querying OSV.dev and complements that coverage with an explainable Trust Score for npm packages, allowing suspicious packages to be surfaced even when no CVE exists yet. The system supports six ecosystems, resolves exact dependency versions from lockfiles, processes large scans asynchronously, and presents prioritized findings through an Angular security dashboard.",
    industry: "Application Security · Software Supply Chain · Full-Stack Engineering",
    deliverables: [
      "Six-ecosystem dependency and lockfile scanning",
      "OSV.dev known-vulnerability correlation",
      "0–100 explainable npm package Trust Score",
      "Typosquatting, install-hook and package-immaturity heuristics",
      "Direct + transitive dependency analysis",
      "Severity, CVSS and remediation guidance",
      "Queued background scans with polling API",
      "Filterable dashboard, charts, JSON export and upgrade commands",
      "Angular + Laravel + Express polyglot architecture",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Laravel",
      "PHP",
      "Express",
      "Node.js",
      "OSV.dev API",
      "npm Registry API",
      "SQL Database",
      "Queues / Background Jobs",
      "Docker",
    ],
    role: "Full-Stack Engineering · Application Security · Supply-Chain Security",
    projectType: "Security Engineering / Full-Stack Application",
    status: "Working multi-service implementation",
    highlights: [
      "Combines CVE intelligence with pre-CVE behavioral risk signals",
      "Supports npm, PHP, Python, Ruby, Go and Rust projects",
      "Scans resolved dependency trees instead of direct dependencies only",
      "Uses asynchronous processing for large real-world dependency graphs",
    ],

    context:
      "Modern applications inherit substantial risk from open-source dependencies. Conventional scanners are effective once a vulnerability is known and catalogued, but a newly published malicious or suspicious package may have no CVE at all. DepGuard was built to preserve standard vulnerability scanning while adding a transparent behavioral layer for earlier investigation.",
    problem:
      "CVE-only dependency scanners have an unavoidable blind spot: they cannot identify a newly malicious package before a vulnerability record exists. At the same time, vulnerable code often sits several levels deep in transitive dependencies, and large dependency trees are too expensive to process reliably inside a single synchronous web request.",
    solution:
      "DepGuard uses two complementary detection layers. First, it resolves exact direct and transitive package versions and checks them against OSV.dev for known vulnerabilities. Second, npm packages receive a transparent Trust Score based on suspicious naming, install scripts and package-maturity metadata. Laravel orchestrates scans and persistence, Express handles ecosystem-aware parsing and heuristics, and Angular presents prioritized findings with remediation guidance. Heavy work is moved to queued background jobs and exposed through a polling API.",

    architecture: [
      {
        title: "Angular Dashboard",
        detail: "Accepts project manifests and presents graded, filterable findings, charts, remediation guidance and exports.",
      },
      {
        title: "Laravel API",
        detail: "Owns scan orchestration, persistence, OSV integration, validation, result normalization and API endpoints.",
      },
      {
        title: "Queue Worker",
        detail: "Processes expensive dependency scans asynchronously so large projects do not block request/response cycles.",
      },
      {
        title: "Express Parser",
        detail: "Parses lockfiles across six ecosystems, resolves dependency relationships and executes npm behavioral heuristics.",
      },
      {
        title: "Threat Intelligence",
        detail: "OSV.dev supplies vulnerability data while package-registry metadata supports Trust Score signals.",
      },
      {
        title: "Results & Remediation",
        detail: "Normalized findings are stored and returned with severity, CVSS context, trust signals and concrete upgrade actions.",
      },
    ],

    features: [
      {
        title: "Known-vulnerability scanning",
        detail: "Every resolved package/version is correlated with OSV.dev so known vulnerabilities can be surfaced with severity and remediation context.",
        meta: "CVE / OSV",
      },
      {
        title: "Explainable Trust Score",
        detail: "npm packages start at 100 and lose weighted points for observable risk signals, making the final score auditable rather than opaque.",
        meta: "RISK",
      },
      {
        title: "Typosquatting detection",
        detail: "Flags package names that closely resemble established packages and may be attempting dependency-confusion or typo-based deception.",
        meta: "SUPPLY CHAIN",
      },
      {
        title: "Install-script inspection",
        detail: "Highlights packages that execute install-time scripts, an important malware execution surface in package ecosystems.",
        meta: "BEHAVIOR",
      },
      {
        title: "Package-maturity signals",
        detail: "Uses age, adoption, repository and maintainer metadata as investigation signals for newly created or weakly established packages.",
        meta: "HEURISTICS",
      },
      {
        title: "Six-ecosystem auto-detection",
        detail: "Recognizes npm, Composer/PHP, Python, Ruby, Go and Rust project formats without requiring a different scanner UI for each ecosystem.",
        meta: "MULTI-ECO",
      },
      {
        title: "Async scan execution",
        detail: "Large dependency trees are dispatched to background jobs and tracked through polling rather than forcing users to wait on one HTTP request.",
        meta: "SCALE",
      },
      {
        title: "Actionable dashboard",
        detail: "Findings can be filtered and exported, with severity charts and copy-ready upgrade guidance where remediation data is available.",
        meta: "UX",
      },
    ],

    implementation: [
      "Scaffolded the project as three independently runnable services: Angular web, Laravel API and Express parser",
      "Built lockfile parsers that flatten resolved direct and transitive dependency versions",
      "Connected Laravel to OSV.dev and normalized vulnerability severity, CVSS and remediation information",
      "Added an Angular report workflow with severity grading, filtering and remediation-oriented findings",
      "Implemented npm Trust Score heuristics for typosquatting, install hooks and package maturity",
      "Parallelized registry metadata requests, capped concurrency and chunked OSV calls for predictable performance",
      "Moved expensive scans into queued jobs and exposed scan status through a polling API",
      "Expanded parsing to Composer/PHP, Python, Ruby, Go and Rust with content-based ecosystem detection",
      "Added JSON export, severity visualization and copy-ready ecosystem-specific upgrade commands",
    ],

    security: [
      {
        title: "Software supply-chain threat detection",
        detail: "The project treats third-party dependencies as an application-security attack surface rather than trusted build inputs.",
        category: "AppSec",
      },
      {
        title: "CVE / CVSS intelligence",
        detail: "Known vulnerabilities are correlated through OSV and presented with severity context to support prioritization.",
        category: "Vulnerability Management",
      },
      {
        title: "Pre-CVE behavioral signals",
        detail: "Heuristics surface packages worthy of investigation even when no formal vulnerability record has been published.",
        category: "Threat Detection",
      },
      {
        title: "Responsible risk framing",
        detail: "A low Trust Score is explicitly treated as an investigation signal, not proof that a package is malicious.",
        category: "Security Analysis",
      },
      {
        title: "Transitive dependency visibility",
        detail: "Resolved lockfiles expose vulnerable or suspicious packages hidden below the application's direct dependency list.",
        category: "Exposure",
      },
    ],

    engineering: [
      {
        title: "Polyglot service architecture",
        detail: "Angular, Laravel and Express are separated by responsibility and communicate over HTTP, allowing each service to evolve independently.",
        category: "Architecture",
      },
      {
        title: "Async job processing",
        detail: "Long-running scans are handled outside the synchronous request path using a queue-worker and polling pattern.",
        category: "Backend",
      },
      {
        title: "Performance-conscious integrations",
        detail: "Registry calls are parallelized with bounded concurrency and vulnerability queries are chunked to avoid external-service bottlenecks.",
        category: "Performance",
      },
      {
        title: "Lockfile-first analysis",
        detail: "The scanner prioritizes exact resolved dependency versions rather than only declared version ranges from top-level manifests.",
        category: "Data Accuracy",
      },
      {
        title: "Honest ecosystem scoping",
        detail: "CVE scanning covers all six ecosystems, while behavioral heuristics remain npm-specific where the required metadata source is valid.",
        category: "Engineering Judgment",
      },
    ],

    outcomes: [
      { value: "6", label: "Supported package ecosystems: npm, PHP, Python, Ruby, Go and Rust" },
      { value: "0–100", label: "Explainable package Trust Score for npm behavioral risk" },
      { value: "1,000+", label: "Package dependency trees designed for optimized asynchronous scanning" },
      { value: "2 layers", label: "Known-CVE intelligence plus behavioral supply-chain risk signals" },
    ],

    designSystem: {
      colors: [
        { name: "Cyber Cyan", hex: "#22D3EE" },
        { name: "Threat Magenta", hex: "#D946EF" },
        { name: "Secure Green", hex: "#22E39A" },
        { name: "Deep Surface", hex: "#08111F" },
      ],
      typography: ["Interface sans — dashboard content", "Monospace — technical/security metadata"],
    },

    gallery: [
      { src: project05Image2, caption: "Dependency scan dashboard with vulnerability severity and package-risk findings" },
      { src: project05Image3, caption: "Trust Score and behavioral supply-chain signals for suspicious npm packages" },
      { src: project05Image4, caption: "Detailed vulnerability findings, remediation guidance and scan analytics" },
    ],
  },
  {
    // ── card ──
    slug: "iomt-explainable-intrusion-detection",
    name: "🛡️ Explainable IoMT Intrusion Detection System",
    tagline: "Protocol-gated XAI that detects and explains attacks on medical IoT devices",
    description:
      "A multi-protocol intrusion detection system for IoMT (Internet of Medical Things) devices, combining XGBoost and CNN-BiLSTM classifiers trained on real CICIoMT2024 network traffic across Wi-Fi, MQTT, and Bluetooth. A tiered explainability engine (fast attention-based + precise SHAP-based) routes explanations per-protocol rather than through one global explainer, mapped to CIA-triad security impact and illustrative HIPAA references. Extended with a full security-operations layer — MITRE ATT&CK mapping, CVSS-inspired risk scoring, SIEM export, and unsupervised zero-day detection — achieving 99.65% binary accuracy and 99.85% Bluetooth accuracy across 19 real attack classes.",
    tags: [
      { name: "TensorFlow/Keras", color: "blue-text-gradient" },
      { name: "XGBoost", color: "green-text-gradient" },
      { name: "SHAP", color: "pink-text-gradient" },
      { name: "FastAPI", color: "orange-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
    ],
    image: project01Main,
    source_code_link: "https://github.com/GihanShavinda/Network-Intrusion-Detection-System", // EDIT: add your GitHub repo URL
    live_link: "", // EDIT: add a live demo URL if you have one

    // ── case study ──
    overview:
      "An explainable intrusion detection system purpose-built for IoMT (medical IoT) networks — Wi-Fi, MQTT, and Bluetooth traffic — combining a CNN-BiLSTM deep model and XGBoost across binary, category, and 19-class multiclass detection. A two-tier explanation engine (fast ante-hoc attention at ~71ms, precise post-hoc SHAP at ~675ms) routes each explanation through a protocol-specific background rather than one blended baseline, paired with a natural-language audit engine mapping every detection to its CIA-triad security impact. Extended into a full security-operations layer with MITRE ATT&CK mapping, CVSS-inspired risk scoring, real SIEM-compatible (CEF) logging, attack-campaign correlation, and an unsupervised zero-day detector trained only on normal traffic.",
    industry: "Cybersecurity · Healthcare IoT · Explainable AI",
    deliverables: [
      "XGBoost + CNN-BiLSTM multi-protocol classifiers",
      "Protocol-gated, tiered (attention + SHAP) explanation engine",
      "DiCE prescriptive counterfactual explanations",
      "CIA/HIPAA-mapped NLG audit engine",
      "MITRE ATT&CK + Cyber Kill Chain mapping",
      "CVSS-inspired risk scoring & SIEM (CEF) export",
      "Unsupervised zero-day / anomaly detection layer",
      "Live PCAP-to-alert inference pipeline",
      "FastAPI backend + React operations dashboard",
    ],
    technologies: [
      "Python", "TensorFlow/Keras", "XGBoost", "SHAP", "DiCE", "scikit-learn",
      "FastAPI", "MongoDB", "React", "Vite",
    ],
    role: "Security Engineering · ML/XAI · Full-Stack Integration",
    projectType: "Final-Year Research / Security Engineering",
    status: "Research prototype · evaluated",
    highlights: [
      "Multi-protocol detection for Wi-Fi, MQTT and BLE traffic",
      "Protocol-gated explanations instead of one global explainer",
      "Fast attention-based Tier-1 explanations plus SHAP Tier-2 analysis",
      "Operational security context through CIA, ATT&CK and risk mapping",
    ],
    architecture: [
      { title: "Traffic / PCAP", detail: "Wi-Fi, MQTT and BLE network observations enter the pipeline." },
      { title: "PSFE", detail: "Protocol-sensitive feature extraction builds model-ready traffic windows." },
      { title: "Detection", detail: "CNN-BiLSTM and XGBoost classify benign and malicious behavior." },
      { title: "Explainability", detail: "Attention and protocol-gated SHAP identify the evidence behind a detection." },
      { title: "Security Context", detail: "Findings are mapped to CIA impact, ATT&CK and risk-oriented audit output." },
      { title: "Operations UI", detail: "FastAPI services expose results to the React investigation dashboard." },
    ],
    features: [
      { title: "Multi-protocol intrusion detection", detail: "Handles Wi-Fi, MQTT and BLE rather than assuming one homogeneous IoT traffic source.", meta: "DETECTION" },
      { title: "Tiered explainability", detail: "Uses a low-latency attention path for rapid explanations and a deeper SHAP path when more precise feature attribution is required.", meta: "XAI" },
      { title: "Protocol-gated SHAP", detail: "Explanations are generated against protocol-relevant backgrounds to avoid mixing incompatible network behavior.", meta: "TRUST" },
      { title: "Security-oriented audit output", detail: "Transforms raw model predictions into human-readable security impact and investigation context.", meta: "SOC" },
      { title: "Live inference pipeline", detail: "Supports the path from captured traffic through feature extraction, inference and alert generation.", meta: "PIPELINE" },
      { title: "Zero-day anomaly layer", detail: "Adds unsupervised anomaly detection trained on normal behavior for events outside the supervised class taxonomy.", meta: "ANOMALY" },
    ],
    implementation: [
      "Extract protocol-sensitive packet/window features before model inference",
      "Use separate protocol-aware processing paths where input behavior differs",
      "Run supervised detection before selecting the appropriate explanation tier",
      "Generate security-readable audit output rather than exposing raw model scores only",
      "Expose inference and investigation data through FastAPI endpoints",
      "Present alerts, explanations and risk context through a React dashboard",
    ],
    security: [
      { title: "MITRE ATT&CK mapping", detail: "Alerts are enriched with recognized adversary tactics/techniques to improve investigation context.", category: "Threat Mapping" },
      { title: "CIA impact mapping", detail: "Detected behavior is translated into confidentiality, integrity and availability impact for clearer security interpretation.", category: "Risk" },
      { title: "Adversarial / robustness evaluation", detail: "The model and explanation pipeline are evaluated beyond headline accuracy to test stability and evasion resistance.", category: "Validation" },
      { title: "SIEM-oriented output", detail: "Security events are structured for downstream operational use rather than remaining isolated ML predictions.", category: "Operations" },
    ],
    engineering: [
      { title: "Protocol-aware feature engineering", detail: "Feature extraction is intentionally aligned with protocol semantics instead of applying one generic representation.", category: "ML Engineering" },
      { title: "Human-in-the-loop explainability", detail: "The system keeps analysts in control by showing why a detection occurred and what evidence contributed.", category: "XAI" },
    ],
    outcomes: [
      { value: "99.65%", label: "Reported binary detection accuracy in the project evaluation" },
      { value: "~71 ms", label: "Tier-1 attention explanation latency measured in the project" },
      { value: "19", label: "Attack classes represented in the multiclass evaluation" },
    ],
    context:
      "Built as a final-year cybersecurity project addressing a real gap in IoMT intrusion detection literature: explainability approaches that treat all network traffic identically, regardless of protocol, and evaluation practices that stop at accuracy without testing robustness, stability, or generalization.",
    problem:
      "Existing IoMT intrusion detection research applies one generic explainer across fundamentally different protocols (Wi-Fi, MQTT, Bluetooth), rarely tests whether explanations are stable or attacks are evadable, and almost never validates whether a trained model generalizes beyond its own dataset — leaving security teams with detections they can't trust or act on.",
    solution:
      "Built a protocol-gated, tiered explanation system routing each detection through a background specific to its own protocol, validated with evaluation rigor largely absent from comparable published work — statistical significance testing, cross-validation stability, explanation stability under perturbation, adversarial evasion testing, and zero-shot cross-dataset generalization — then extended it into an operational security layer with risk scoring, MITRE-mapped alerts, and zero-day detection for attack types outside the trained taxonomy.",
    designSystem: {
      colors: [
        { name: "Threat Red", hex: "#FF3358" },
        { name: "Warning Amber", hex: "#FFB020" },
        { name: "Secure Green", hex: "#00FFA3" },
        { name: "Info Blue", hex: "#3AB7FF" },
      ],
      typography: ["JetBrains Mono — data & metrics"],
    },
    gallery: [
      { src: project01Image2, caption: "Security monitoring and detection dashboard" },
      { src: project01Image3, caption: "Explainable AI investigation and threat analysis" },
      { src: project01Image4, caption: "Detection results and operational security insights" },
    ],
  },
  {
    // ── card ──
    slug: "socforge-network-threat-detection-response",
    name: "🛡️ SOCForge — Network Threat Detection & Response Lab",
    tagline: "Evidence-first network detection, correlation, hunting and human-approved response",
    description:
      "A defensive network security engineering lab that converts packet captures, reconnaissance evidence and IDS telemetry into normalized events, alerts and correlated incidents. SOCForge combines behavioral Python detectors with Suricata signatures, optional Zeek metadata, MITRE ATT&CK mapping, risk scoring, evidence traceability, threat hunting and human-approved response guidance inside an isolated lab workflow.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Suricata", color: "pink-text-gradient" },
      { name: "Nmap", color: "green-text-gradient" },
      { name: "MITRE ATT&CK", color: "orange-text-gradient" },
      { name: "Network Security", color: "blue-text-gradient" },
    ],
    image: project06Main,
    source_code_link: "https://github.com/GihanShavinda/SOC-Forge", // Add the exact SOCForge GitHub URL when ready
    live_link: "",

    // ── case study ──
    overview:
      "SOCForge is a defensive network threat-detection and response lab designed around one question chain: what happened, how it happened, which host was involved, whether the behavior can be reproduced, how serious it is, and what should happen next. It collects packet and reconnaissance evidence, normalizes output from multiple security tools into one event model, combines behavioral and signature-based detection, correlates alerts into incidents, maps activity to MITRE ATT&CK, and keeps response recommendations human-approved rather than automatically executing destructive actions.",
    industry: "Security Engineering · Network Detection & Response · Purple Team",
    deliverables: [
      "Isolated Kali + Metasploitable2 network-security lab",
      "Nmap reconnaissance and service-discovery evidence",
      "tcpdump packet capture and tshark field extraction",
      "Behavioral Python detection plus Suricata signature detection",
      "Optional Zeek connection / protocol metadata enrichment",
      "Normalized NetworkEvent schema across tool outputs",
      "Alert correlation, MITRE ATT&CK mapping and incident risk scoring",
      "Evidence-linked investigation workflow with PCAP / scan references",
      "Overview, Incidents and Hunt dashboard views",
      "Human-approved response recommendations and audited decisions",
    ],
    technologies: [
      "Python",
      "Nmap",
      "tcpdump",
      "tshark",
      "Suricata",
      "Zeek",
      "Metasploit",
      "MITRE ATT&CK",
      "SQLite",
      "PCAP / JSON / XML / TSV",
      "Linux / Kali",
    ],
    role: "Security Engineering · Detection Engineering · Purple Team Validation",
    projectType: "Defensive Security / Network Detection & Response Lab",
    status: "Working isolated-lab implementation",
    highlights: [
      "Runs behavioral and signature detection side by side to reduce blind spots",
      "Normalizes heterogeneous tool output into one machine-readable event model",
      "Preserves traceable evidence from incident conclusions back to raw PCAP and scan artifacts",
      "Keeps risky actions recommendation-only and requires human approval",
    ],

    context:
      "Network-security tooling often produces disconnected evidence: scan XML, packet captures, IDS alerts, protocol metadata and analyst notes. SOCForge was built to turn those separate artifacts into one reproducible investigation pipeline inside a deliberately isolated lab.",
    problem:
      "Using Nmap, packet capture and IDS tools independently leaves the analyst to manually connect activity across formats and timelines. Signature-only detection misses novel behavior, behavioral-only detection can be noisy, and automation becomes dangerous if attacker-controlled tool output can flow directly into command execution.",
    solution:
      "SOCForge places every tool behind a controlled ingestion and execution boundary. Nmap, tcpdump, tshark, Suricata and optional Zeek output are normalized into a common NetworkEvent representation; behavioral detectors and signature rules generate alerts; correlation and ATT&CK context form incidents; evidence references preserve provenance; and the dashboard exposes investigation and hunting workflows while response actions remain human-approved.",

    architecture: [
      {
        title: "Recon & Capture",
        detail: "Nmap discovers services while tcpdump records ground-truth PCAP evidence during controlled lab activity.",
      },
      {
        title: "Structured Extraction",
        detail: "tshark, Suricata and optional Zeek convert packet evidence into structured protocol, alert and connection data.",
      },
      {
        title: "Normalization",
        detail: "Heterogeneous outputs are validated and transformed into one NetworkEvent schema for downstream analysis.",
      },
      {
        title: "Detection",
        detail: "Behavioral Python detectors identify attack shapes while Suricata signatures match known malicious patterns.",
      },
      {
        title: "Correlation & Context",
        detail: "Alerts are correlated into incidents, enriched with MITRE ATT&CK context and assigned investigation risk.",
      },
      {
        title: "Investigation & Response",
        detail: "The dashboard provides overview, incident evidence and hunting while response recommendations require human approval.",
      },
    ],

    features: [
      {
        title: "Dual detection philosophy",
        detail: "Behavioral detectors catch the shape of novel or unknown activity while Suricata provides precise signature matches for known threats.",
        meta: "DETECTION",
      },
      {
        title: "Evidence-first packet workflow",
        detail: "PCAPs remain the ground-truth source and derived events retain references back to the raw evidence used for each conclusion.",
        meta: "FORENSICS",
      },
      {
        title: "Normalized event model",
        detail: "Nmap, tshark, Suricata and Zeek data are converted into structured machine-readable events instead of scraped terminal text.",
        meta: "PIPELINE",
      },
      {
        title: "Incident correlation",
        detail: "Individual alerts and scan observations are joined into a higher-level incident timeline rather than shown as unrelated tool output.",
        meta: "CORRELATION",
      },
      {
        title: "MITRE ATT&CK context",
        detail: "Observed behavior is mapped into recognizable adversary techniques so the investigation communicates in a standard security language.",
        meta: "ATT&CK",
      },
      {
        title: "Threat hunting workspace",
        detail: "Analysts can query raw events by source, destination, port, protocol and time range to pivot beyond generated incidents.",
        meta: "HUNT",
      },
      {
        title: "Safe execution boundary",
        detail: "External tools run through an audited execution choke point with allow-listed binaries, argument lists, timeouts and target validation.",
        meta: "SAFETY",
      },
      {
        title: "Human-approved response",
        detail: "SOCForge recommends actions but does not silently execute destructive responses; approval records the decision and exposes the command for manual use.",
        meta: "HITL",
      },
    ],

    implementation: [
      "Created an isolated host-only lab using Kali as the analyst/attacker workstation and Metasploitable2 as the authorized target",
      "Built reconnaissance and packet-capture workflows around Nmap and tcpdump, preserving XML and PCAP evidence",
      "Used tshark for deterministic structured field extraction from packet captures",
      "Integrated Suricata signature alerts and optional Zeek metadata as independent evidence sources",
      "Normalized every tool output into validated structured events before detection and correlation",
      "Combined behavioral detection with signature matching so each method covers the other's blind spots",
      "Correlated alerts with ATT&CK context, evidence pivots and risk-oriented incident conclusions",
      "Exposed Overview, Incidents and Hunt workflows through the dashboard",
      "Added target guards, safe subprocess execution, traceable evidence references and human-approved response handling",
    ],

    security: [
      {
        title: "Network isolation",
        detail: "The lab is intentionally host-only so attack traffic and validation activity cannot route to the public internet.",
        category: "Lab Safety",
      },
      {
        title: "Authorized-target enforcement",
        detail: "Scanning and validation logic rejects non-private targets unless explicitly overridden, reducing accidental out-of-scope activity.",
        category: "Guardrails",
      },
      {
        title: "Command-injection resistance",
        detail: "External tools are launched with argument arrays rather than shell strings, with allow-listed binaries and execution timeouts.",
        category: "Secure Execution",
      },
      {
        title: "Trust-boundary validation",
        detail: "Tool output is treated as attacker-influenced input and validated before it enters downstream analysis or storage.",
        category: "Input Validation",
      },
      {
        title: "Traceable evidence",
        detail: "Events and incidents retain raw evidence references so conclusions can be reproduced from PCAP, scan and IDS artifacts.",
        category: "Forensics",
      },
      {
        title: "Human-in-the-loop response",
        detail: "Response guidance is recommendation-only; the project records approval decisions instead of automatically executing destructive actions.",
        category: "Response Safety",
      },
    ],

    engineering: [
      {
        title: "Structured tool integration",
        detail: "The pipeline consumes XML, TSV, JSON and PCAP-derived fields rather than brittle terminal scraping.",
        category: "Integration",
      },
      {
        title: "Common event schema",
        detail: "A single normalized representation lets detectors and correlation logic work across multiple security-tool sources.",
        category: "Data Engineering",
      },
      {
        title: "Reproducible validation workflow",
        detail: "Capture, scan, detection and validation steps are intentionally ordered so analysts can reproduce why an incident formed.",
        category: "Testing",
      },
      {
        title: "Persistent campaign context",
        detail: "The SQLite evidence store accumulates across runs so correlation can see activity beyond one capture session.",
        category: "State",
      },
    ],

    outcomes: [
      { value: "2 paths", label: "Behavioral + signature detection working side by side" },
      { value: "3 views", label: "Overview, incident investigation and raw-event hunting workflows" },
      { value: "1 schema", label: "Normalized event model across multiple network-security tools" },
      { value: "HITL", label: "Human-approved response instead of destructive auto-action" },
    ],

    designSystem: {
      colors: [
        { name: "Analyst Cyan", hex: "#22D3EE" },
        { name: "Alert Red", hex: "#F43F5E" },
        { name: "Evidence Green", hex: "#22E39A" },
        { name: "Terminal Surface", hex: "#07111E" },
      ],
      typography: ["Interface sans — investigation UI", "Monospace — evidence, commands and event metadata"],
    },

    gallery: [
      { src: project06Image2, caption: "SOCForge incident and evidence investigation workflow" },
      { src: project06Image3, caption: "Network detection, correlation and MITRE ATT&CK analysis view" },
      { src: project06Image4, caption: "Threat hunting and human-approved response workflow" },
    ],
  },
  {
    // ── card ──
    slug: "cyber-awareness-platform",
    name: "🛡️ Cybersecurity Awareness & Human Firewall Platform",
    tagline: "Adaptive security training that measures and predicts human risk",
    description:
      "A full-stack cybersecurity awareness platform built on a three-service architecture (Angular, Node.js, Python). It trains employees, tests them with safe simulated phishing, and turns their behavior into an explainable Human Risk Score. An XGBoost microservice predicts each user's risk (~82% accuracy) with per-factor explanations, while adaptive phishing difficulty, gamification, background-scheduled campaigns, PDF reporting, and full audit logging round out an enterprise-grade system.",
    tags: [
      { name: "Angular", color: "pink-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "XGBoost", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "orange-text-gradient" },
    ],
    image: project02, // EDIT: import your screenshot at the top of this file
    source_code_link: "https://github.com/GihanShavinda/Cyber-Awareness-Platform", // EDIT: confirm exact repo URL
    live_link: "", // EDIT: add a live demo URL if you deploy one

    // ── case study ──
    overview:
      "An adaptive cybersecurity awareness platform that moves training beyond passive video-and-quiz completion. It measures whether an employee can actually recognize and respond to a real attack, combining a behavior-driven Human Risk Score with a trained, explainable XGBoost model. Built as three cooperating services — an Angular frontend, a Node.js/Express API, and a Python/FastAPI ML microservice — backed by PostgreSQL and Redis, with a BullMQ worker for scheduled background jobs.",
    industry: "Cybersecurity · Machine Learning · EdTech",
    deliverables: [
      "Role-based training platform (courses, lessons, auto-scored quizzes)",
      "Behavior-driven Human Risk Score engine",
      "Safe in-app phishing simulation with adaptive difficulty",
      "Explainable XGBoost risk-prediction microservice",
      "Admin analytics, PDF reports, and full audit logging",
      "Gamification, notifications, and email delivery",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Python",
      "FastAPI",
      "XGBoost",
      "Redis",
      "BullMQ",
      "Docker",
    ],
    role: "Full-Stack Engineering · Security Design · ML Integration",
    projectType: "Security Awareness / Human Risk Platform",
    highlights: [
      "Three-service architecture separating UI, application API and ML inference",
      "Behavior-driven Human Risk Score instead of completion-only training metrics",
      "Adaptive phishing simulations designed for safe learning and measurement",
      "Explainable ML output gives admins visibility into the factors behind user risk",
    ],
    architecture: [
      { title: "Angular Client", detail: "Employees and administrators interact with training, simulations and analytics." },
      { title: "Node / Express API", detail: "Owns authentication, authorization, business rules and application workflows." },
      { title: "PostgreSQL", detail: "Stores users, training activity, campaign behavior, scores and audit records." },
      { title: "ML Service", detail: "FastAPI + XGBoost predicts human risk and returns explainable factors." },
      { title: "Redis / BullMQ", detail: "Handles scheduled campaigns and background work outside the request path." },
      { title: "Admin Analytics", detail: "Dashboards and reports convert behavior into actionable security awareness insight." },
    ],
    features: [
      { title: "Role-based training", detail: "Structured learning flows, lessons and scored quizzes provide measurable training activity.", meta: "LEARNING" },
      { title: "Human Risk Score", detail: "Combines observed behavior into a continuously understandable security-risk signal.", meta: "RISK" },
      { title: "Safe phishing simulation", detail: "Tests recognition behavior without collecting real credentials or creating unsafe campaign behavior.", meta: "SIMULATION" },
      { title: "Adaptive difficulty", detail: "Simulation difficulty can respond to a user's demonstrated behavior and learning progress.", meta: "ADAPTIVE" },
      { title: "Explainable ML", detail: "Risk predictions include factor-level explanations rather than an opaque score only.", meta: "XAI" },
      { title: "Audit and reporting", detail: "Administrative actions and risk results can be traced and exported for review.", meta: "GOVERNANCE" },
    ],
    implementation: [
      "Separate presentation, business logic and ML inference into independent services",
      "Keep security-sensitive validation and authorization on the server side",
      "Use PostgreSQL/Prisma for relational application state and auditability",
      "Use Redis/BullMQ for scheduled or asynchronous campaign processing",
      "Expose ML inference through a dedicated FastAPI service",
      "Containerize supporting services to make the environment reproducible",
    ],
    security: [
      { title: "Server-side RBAC", detail: "Administrative and user capabilities are separated by role and enforced at the API layer.", category: "Access Control" },
      { title: "Safe-by-design simulation", detail: "Phishing exercises avoid real credential capture and are designed for controlled awareness testing.", category: "Safety" },
      { title: "Audit logging", detail: "Security-relevant administrative activity is recorded to support traceability and review.", category: "Governance" },
      { title: "Human risk analytics", detail: "Security awareness is treated as a measurable risk signal rather than a course-completion checkbox.", category: "Risk" },
    ],
    engineering: [
      { title: "Service separation", detail: "Angular, Node/Express and FastAPI responsibilities are separated to keep UI, business logic and ML concerns maintainable.", category: "Architecture" },
      { title: "Background job processing", detail: "Time-consuming and scheduled work is moved to BullMQ rather than blocking user requests.", category: "Reliability" },
    ],
    outcomes: [
      { value: "3", label: "Cooperating application services in the architecture" },
      { value: "~82%", label: "Reported risk-model accuracy in the project evaluation" },
      { value: "1", label: "Unified platform connecting training, simulation, prediction and reporting" },
    ],
    context:
      "Developed as a final-year project exploring the 'Human Firewall' concept — the idea that an organization's true vulnerability is human behavior, and that this behavior can be measured, scored, predicted, and improved.",
    problem:
      "Traditional security training only records whether an employee finished a course. It never answers the question that actually matters: would this person fall for a real phishing attack? Risk stays invisible until an incident happens.",
    solution:
      "Built a platform that continuously measures real behavior — quiz performance and responses to simulated phishing — and converts it into a live risk score. An XGBoost microservice predicts each user's risk with per-factor explanations, phishing difficulty adapts to each user, and admins get org-wide dashboards, analytics, exportable PDF reports, and an audited trail of every action. Security is enforced server-side throughout, and all phishing simulations are safe by design (no real emails, no credential capture).",
    designSystem: {
      colors: [
        { name: "Neon Teal", hex: "#00E5C7" },
        { name: "Deep Space", hex: "#0A0E1A" },
        { name: "Cyber Violet", hex: "#A855F7" },
      ],
      typography: ["Segoe UI — UI", "Inter — headings"],
    },
    gallery: [project02], // EDIT: add more screenshots (import them at the top of this file)
  },
  {
    // ── card ──
    slug: "football-value-predictor",
    name: "⚽ Football Player Market Value Predictor",
    tagline: "Explainable ML that predicts a player's transfer value",
    description:
      "Football Player Transfer Market Value Prediction uses XGBoost to predict a player's market value in euros from FIFA 22 statistics including age, ratings, position, and wage. SHAP explainability reveals key value drivers. A Streamlit web app allows live predictions with per-feature explanations, achieving approximately 85% variance explained (R² ≈ 0.85)",
    tags: [
      { name: "XGBoost", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "green-text-gradient" },
      { name: "SHAP", color: "pink-text-gradient" },
      { name: "Python", color: "orange-text-gradient" },
    ],
    image: project03,
    source_code_link: "https://github.com/GihanShavinda/Football-Player-Market-Value-Prediction-Model/tree/master",
    live_link: "", // EDIT: add a live demo URL if you have one

    // ── case study ──
    overview:
      "A machine-learning system that estimates a football player's transfer market value in euros from FIFA 22 attributes. An XGBoost regressor is paired with a SHAP explainability layer, so every prediction is broken down attribute-by-attribute and served live through an interactive Streamlit app — reaching roughly 85% explained variance (R² ≈ 0.85).",
    industry: "Sports Analytics · Machine Learning",
    deliverables: [
      "XGBoost regression model",
      "SHAP explainability layer",
      "Streamlit prediction web app",
      "Feature-engineering pipeline",
    ],
    technologies: ["Python", "XGBoost", "Scikit-learn", "SHAP", "Pandas", "Streamlit"],
    role: "Machine Learning · Data Analysis · Explainable AI",
    projectType: "Predictive Analytics Application",
    highlights: [
      "Regression pipeline built from FIFA 22 player attributes",
      "SHAP explanations reveal which player attributes move an individual prediction",
      "Interactive Streamlit interface turns the model into a usable application",
    ],
    architecture: [
      { title: "FIFA 22 Data", detail: "Player attributes provide the raw structured dataset." },
      { title: "Preprocessing", detail: "Cleaning and feature preparation produce consistent model inputs." },
      { title: "XGBoost", detail: "Gradient-boosted regression estimates market value." },
      { title: "SHAP", detail: "Feature attribution explains why a prediction moves higher or lower." },
      { title: "Streamlit", detail: "Users submit player attributes and inspect prediction plus explanation." },
    ],
    features: [
      { title: "Live value prediction", detail: "Users can enter player characteristics and receive an immediate market-value estimate.", meta: "ML" },
      { title: "Per-feature explanation", detail: "SHAP reveals the contribution of attributes such as age, rating and wage to each prediction.", meta: "XAI" },
      { title: "Reusable preprocessing", detail: "Input preparation is kept consistent between training and interactive inference.", meta: "PIPELINE" },
      { title: "Interactive web delivery", detail: "Streamlit makes the model accessible without requiring users to run notebooks or scripts.", meta: "APP" },
    ],
    implementation: [
      "Clean and prepare structured FIFA player data with Pandas",
      "Train and evaluate an XGBoost regression model",
      "Use a consistent inference pipeline for interactive predictions",
      "Generate SHAP explanations for prediction transparency",
      "Deliver the workflow through a Streamlit application",
    ],
    engineering: [
      { title: "Explainable regression", detail: "SHAP is used to pair predictive performance with interpretable feature contributions.", category: "XAI" },
      { title: "Training/inference consistency", detail: "The same feature assumptions are preserved between model development and live use.", category: "ML Engineering" },
    ],
    outcomes: [
      { value: "≈0.85", label: "Reported R² / explained variance for the trained model" },
      { value: "SHAP", label: "Feature-level explanations included with individual predictions" },
      { value: "Live", label: "Interactive prediction workflow delivered through Streamlit" },
    ],
    context:
      "Built as a data-science project to explore how well modern gradient-boosting models can price football talent from public FIFA statistics.",
    problem:
      "Player valuations are opaque and subjective — it is hard to tell which attributes actually move a player's market value, and black-box models don't earn trust.",
    solution:
      "Trained an XGBoost regressor on cleaned FIFA 22 data, then layered SHAP so each euro prediction is explained per feature. Wrapped it in a Streamlit app for live, interpretable predictions.",
    designSystem: {
      colors: [
        { name: "Pitch Green", hex: "#22C55E" },
        { name: "Deep Slate", hex: "#0E1117" },
        { name: "Accent Amber", hex: "#F5B731" },
      ],
      typography: ["Source Sans Pro — UI", "IBM Plex Mono — data"],
    },
    gallery: [project03], // EDIT: add more screenshots (import them at the top of this file)
  },
  {
    slug: "pixel-art",
    name: "🖌️ Pixel Art — Web Application",
    tagline: "Draw, customise and share retro pixel art in the browser",
    description:
      "Pixel Art is a web application that empowers users to create, customize, and share vibrant art designs directly in their browser. With an intuitive grid-based canvas, a rich color palette, and tools like fill, erase, and symmetry drawing, artists of all skill levels can bring retro-inspired creations to life in minutes. Once finished, users can export their artwork and share it with the community.",
    tags: [
      { name: "php laravel", color: "blue-text-gradient" },
      { name: "blade", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: project04,
    source_code_link: "https://github.com/GihanShavinda/Pixel_Art/tree/master",
    live_link: "",

    overview:
      "A browser-based pixel-art studio where anyone can create, customise and share designs on an intuitive grid canvas. It ships with a rich colour palette and tools like fill, erase and symmetry drawing, plus export and community sharing — all backed by a Laravel + MySQL server.",
    industry: "Creative Tools · Web Application",
    deliverables: [
      "Grid-based drawing canvas",
      "Fill / erase / symmetry tools",
      "Artwork export & sharing",
      "Laravel + MySQL backend",
    ],
    technologies: ["PHP", "Laravel", "Blade", "MySQL", "JavaScript"],
    role: "Full-Stack Development · UI Interaction · Data Persistence",
    projectType: "Interactive Web Application",
    highlights: [
      "Browser-based grid editor with drawing, erase, fill and symmetry interactions",
      "Server-side persistence lets users save and revisit artwork",
      "Community sharing extends the tool beyond a temporary browser canvas",
    ],
    architecture: [
      { title: "Blade UI", detail: "Renders application views and account/community pages." },
      { title: "Canvas Logic", detail: "JavaScript handles grid drawing interactions and editing tools." },
      { title: "Laravel", detail: "Controllers and application services manage accounts, artwork and sharing workflows." },
      { title: "MySQL", detail: "Persists users, saved artwork and related application data." },
      { title: "Community View", detail: "Saved creations can be revisited and shared from the same application." },
    ],
    features: [
      { title: "Grid drawing canvas", detail: "A pixel-oriented editing surface supports precise browser-based artwork creation.", meta: "EDITOR" },
      { title: "Drawing toolset", detail: "Fill, erase and symmetry tools reduce repetitive work and improve creation speed.", meta: "UX" },
      { title: "Save and revisit", detail: "Artwork persists through the Laravel/MySQL backend instead of disappearing with the browser session.", meta: "DATA" },
      { title: "Community sharing", detail: "Users can move from creating artwork to sharing it through the same web application.", meta: "SOCIAL" },
    ],
    implementation: [
      "Use JavaScript for responsive grid interactions in the browser",
      "Use Laravel for routing, controllers and server-side application logic",
      "Persist accounts and artwork records in MySQL",
      "Render server-backed views with Blade",
      "Separate interactive editing concerns from persistence and account workflows",
    ],
    engineering: [
      { title: "Client/server separation", detail: "Immediate drawing interactions stay in the browser while persistence and user workflows remain server-side.", category: "Architecture" },
      { title: "Persistent domain model", detail: "Artwork becomes stored application data rather than temporary UI state only.", category: "Data" },
    ],
    outcomes: [
      { value: "5", label: "Core technologies used across client interaction, server logic and persistence" },
      { value: "CRUD", label: "Artwork and account workflows supported through a persistent backend" },
      { value: "Web", label: "End-to-end creative workflow available directly in the browser" },
    ],
    context:
      "A full-stack web project focused on delivering a smooth, interactive drawing experience with server-side persistence and sharing.",
    problem:
      "Most quick pixel-art tools are throwaway — they don't let creators save, revisit or share their work in one place.",
    solution:
      "Built a responsive canvas with a full tool set on the front end and a Laravel/MySQL back end for accounts, saved artwork and a shareable community gallery.",
    designSystem: {
      colors: [
        { name: "Canvas Ink", hex: "#111827" },
        { name: "Palette Pink", hex: "#EC4899" },
        { name: "Grid Line", hex: "#334155" },
      ],
      typography: ["Poppins — UI", "JetBrains Mono — code"],
    },
    gallery: [project04],
  },
];

// ── Certifications ───────────────────────────────────────────────────────────
// Completed, verifiable credentials. Add `credentialUrl` to make the "verify"
// button on each card open the official verification page. `grade`, `duration`
// and `credentialId` are optional — leave empty to hide them on the card.
// `accent` is one of: "cyan" | "emerald" | "amber".
const certifications = [
  {
  title: " Pre Security",  // e.g. "Jr Penetration Tester" or the exact name
  issuer: "TryHackMe",
  platform: "",
  date: "Aug 2025",        // your completion month/year
  credentialId: "THM-7SCNTVZA4C",        // THM certificate ID, if any
  accent: "amber",
  credentialUrl: "https://tryhackme.com/certificate/THM-7SCNTVZA4C",       // THM certificate URL
  },
  {
    title: "Security Operations Center (SOC)",
    issuer: "Cisco Learning and Certifications",
    platform: "",
    date: "Jun 2026",
    credentialId: "OZZ8WU6JCWQ5",
    accent: "cyan",
    credentialUrl: "https://www.coursera.org/verify/OZZ8WU6JCWQ5", // EDIT: paste the Cisco verification URL
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    platform: "Coursera",
    date: "May 2026",
    credentialId: "C7UBQLV2KTUO",
    accent: "emerald",
    credentialUrl: "https://coursera.org/verify/C7UBQLV2KTUO",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google",
    platform: "Coursera",
    date: "May 2026",
    credentialId: "VW8BHE4CO29W",
    accent: "emerald",
    credentialUrl: "https://coursera.org/verify/VW8BHE4CO29W",
  },
  {
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google",
    platform: "Coursera",
    date: "Jun 2026",
    credentialId: "WE4UK4LSSMNP",
    accent: "emerald",
    credentialUrl: "https://coursera.org/verify/WE4UK4LSSMNP",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    issuer: "Academy of Future Robotics",
    platform: "",
    date: "Nov 2025",
    credentialId: "",
    grade: "A+",
    duration: "4-month course",
    accent: "amber",
    credentialUrl: "",
  },
];

export { services, technologies, securityFocus, learningPath, experiences, projects, certifications };
