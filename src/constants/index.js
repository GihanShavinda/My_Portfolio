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
  tripguide,
  threejs,
} from "../assets";
import project01 from "../assets/projects/project_01.png";
import project02 from "../assets/projects/project_02.png";
import project03 from "../assets/projects/project_03.png";
import project04 from "../assets/projects/project_04.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "security", title: "Security" },
  { id: "certs", title: "Certs" },
  { id: "work", title: "Journey" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

// ── What I do (About cards) ──────────────────────────────────────────────────
const services = [
  { title: "Full-Stack Development", icon: web },
  { title: "Security Monitoring (SOC)", icon: backend },
  { title: "Threat Detection & Response", icon: mobile },
  { title: "Secure, Clean Code", icon: creator },
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
    title: "Started Coding",
    company_name: "Self-taught → Web foundations",
    icon: html,
    iconBg: "#0d1626",
    date: "The beginning",
    points: [
      "Picked up HTML, CSS and JavaScript and started building small projects for the web.",
      "Fell in love with turning ideas into working, interactive interfaces.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Projects & Freelance",
    icon: reactjs,
    iconBg: "#0d1626",
    date: "Ongoing",
    points: [
      "Building end-to-end applications with React, Node.js and databases like MongoDB & MySQL.",
      "Shipping real projects — ML-powered tools, web apps and dashboards — from idea to deployment.",
      "Writing clean, maintainable code and learning secure development practices along the way.",
    ],
  },
  {
    title: "Full-Stack Developer (Intern)",
    company_name: "Willsj Technologies LLC · Bur Dubai, UAE (Remote)",
    icon: willsj,
    iconBg: "#ffffff",
    date: "Mar 2025 - Nov 2025",
    points: [
      "Built secure back-end services across four production products using PHP Laravel and MySQL, implementing JWT-based authentication and access control for user sessions and APIs.",
      "Applied secure development practices in a collaborative Git/GitHub and CI/CD workflow; validated and hardened REST APIs using Postman and API Dog.",
      "Deployed and integrated services on Google Cloud, gaining practical exposure to cloud configuration and application-layer security.",
    ],
  },
  {
    title: "Cyber Security Self-Study",
    company_name: "Labs · CTFs · Blue Team",
    icon: backend,
    iconBg: "#0d1626",
    date: "In progress",
    points: [
      "Working through hands-on labs on TryHackMe and Blue Team Labs Online.",
      "Practising log analysis, threat detection, incident response and network forensics.",
      "Building a home lab to simulate attacks and practise defending against them.",
    ],
  },
  {
    title: "Targeting: SOC Analyst",
    company_name: "Next step",
    icon: creator,
    iconBg: "#0d1626",
    date: "Goal",
    points: [
      "Preparing for a Tier-1 SOC Analyst role: monitoring, triage and response.",
      "Studying toward CompTIA Security+ and SIEM tooling (Splunk, Wazuh).",
      "Combining a developer's mindset with blue-team defence.",
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
    image: project01, // EDIT: import a screenshot at the top of this file
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
    gallery: [project01], // EDIT: add more screenshots (import them at the top of this file)
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
  {
    slug: "trip-guide",
    name: "Trip Guide",
    tagline: "Book flights, hotels and cars with curated recommendations",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/GihanShavinda",
    live_link: "",

    // EDIT: this project's case-study fields are starter text — replace with your real details
    overview:
      "A travel booking platform for flights, hotels and rental cars, with curated recommendations for popular destinations and a clean, guided booking flow.",
    industry: "Travel · Web Platform",
    deliverables: [
      "Flight / hotel / car booking",
      "Destination recommendations",
      "Responsive UI",
    ],
    technologies: ["Next.js", "Supabase", "CSS"],
    context: "EDIT: describe when and why you built Trip Guide.",
    problem: "EDIT: what user problem does it solve?",
    solution: "EDIT: how did you solve it, and with what architecture?",
    designSystem: {
      colors: [
        { name: "Primary", hex: "#22D3EE" },
        { name: "Base", hex: "#0B1120" },
      ],
      typography: ["EDIT — heading font", "EDIT — body font"],
    },
    gallery: [tripguide],
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
