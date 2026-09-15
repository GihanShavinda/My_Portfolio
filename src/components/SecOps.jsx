import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

/* ─────────────────────────────────────────────────────────────────────────────
   Purple Team section — offensive (red) + defensive (blue).
   Self-contained: all data lives here, so it doesn't depend on constants.
   Edit the arrays below to change focus areas, tools, and the learning path.
   ───────────────────────────────────────────────────────────────────────────── */

// ── Red team (offensive) ────────────────────────────────────────────────────
const redTeam = [
  {
    tag: "web", title: "Web App Pentesting",
    desc: "Finding and exploiting web vulnerabilities — the OWASP Top 10, auth flaws, injection and business-logic bugs.",
    items: ["OWASP Top 10", "SQLi / XSS", "Auth bypass", "Burp Suite"], color: "#f43f5e",
  },
  {
    tag: "network", title: "Network Pentesting",
    desc: "Mapping and attacking network services — enumeration, exploitation and lateral movement across hosts.",
    items: ["Nmap", "Enumeration", "Pivoting", "SMB / FTP"], color: "#f5b731",
  },
  {
    tag: "exploit", title: "Exploitation & Priv-Esc",
    desc: "Turning a foothold into control — running exploits and escalating privileges on Linux and Windows.",
    items: ["Metasploit", "Priv-esc", "Reverse shells", "Payloads"], color: "#f43f5e",
  },
  {
    tag: "assess", title: "Vulnerability Assessment",
    desc: "Scanning, triaging and reporting weaknesses with CVSS-based risk ratings and clear remediation.",
    items: ["Nessus", "CVE analysis", "CVSS", "Reporting"], color: "#f5b731",
  },
];

// ── Blue team (defensive) ───────────────────────────────────────────────────
const blueTeam = [
  {
    tag: "detect", title: "Threat Detection",
    desc: "Reading logs and telemetry to spot anomalies, IOCs and suspicious patterns before they escalate.",
    items: ["Log analysis", "IOC hunting", "Alert triage", "MITRE ATT&CK"], color: "#22d3ee",
  },
  {
    tag: "respond", title: "Incident Response",
    desc: "Working an alert end-to-end: scope, contain, investigate and document the timeline of an event.",
    items: ["Triage playbooks", "Containment", "Root-cause", "Reporting"], color: "#22e39a",
  },
  {
    tag: "monitor", title: "SIEM & Log Analysis",
    desc: "Centralising events, writing queries and building dashboards to keep systems continuously observed.",
    items: ["Splunk", "Wazuh", "Query building", "Dashboards"], color: "#22d3ee",
  },
  {
    tag: "network", title: "Network Security",
    desc: "Understanding traffic, protocols and packet captures to trace how an attacker moves.",
    items: ["Wireshark", "TCP/IP", "Firewalls", "PCAP"], color: "#22e39a",
  },
];

// ── Tooling / arsenal ───────────────────────────────────────────────────────
const arsenal = [
  { group: "Recon & Enumeration", color: "#f5b731", tools: ["Nmap", "Gobuster", "ffuf", "whatweb", "Amass"] },
  { group: "Web App Testing", color: "#f43f5e", tools: ["Burp Suite", "OWASP ZAP", "SQLmap", "Nikto", "wpscan"] },
  { group: "Exploitation & Creds", color: "#f43f5e", tools: ["Metasploit", "searchsploit", "Hydra", "John the Ripper", "Hashcat"] },
  { group: "Defense & Analysis", color: "#22d3ee", tools: ["Wireshark", "Splunk", "Wazuh", "Autopsy", "Suricata"] },
];

// ── Learning path ───────────────────────────────────────────────────────────
// status: "done" | "active" | "target"
// const learning = [
//   { name: "TryHackMe — Learning Path", status: "done" }, // EDIT: exact path name you completed
//   { name: "Web Pentesting (THM)", status: "active" },
//   { name: "Jr Penetration Tester", status: "active" },
//   { name: "SOC Level 1", status: "active" },
//   { name: "Burp Suite Deep-Dive", status: "active" },
//   { name: "CompTIA Security+", status: "target" },
//   { name: "eJPT / PNPT", status: "target" },
// ];

const FocusCard = ({ tag, title, desc, items, color, index, total }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.65)}
    className="term-panel relative overflow-hidden"
    style={{ padding: "1.4rem 1.3rem", flex: "1 1 250px", minWidth: 240 }}
  >
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: color, boxShadow: `0 0 12px ${color}` }} />
    <div className="flex items-center justify-between mb-3">
      <span className="font-mono" style={{ fontSize: ".68rem", color, letterSpacing: ".04em" }}>[{tag}]</span>
      <span className="font-mono" style={{ fontSize: ".62rem", color: "var(--c-muted)" }}>
        {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
      </span>
    </div>
    <h3 className="font-display text-white font-semibold text-[18px] mb-2">{title}</h3>
    <p className="text-secondary text-[13.5px] leading-[22px] mb-4">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <span key={it} className="font-mono"
          style={{ fontSize: ".66rem", padding: ".22rem .5rem", borderRadius: 5, border: `1px solid ${color}44`, color, background: `${color}0f` }}>
          {it}
        </span>
      ))}
    </div>
  </motion.div>
);

const GroupLabel = ({ dot, label, sub }) => (
  <div className="flex items-center gap-3 mb-5 mt-2">
    <span style={{ width: 12, height: 12, borderRadius: 3, background: dot, boxShadow: `0 0 12px ${dot}`, transform: "rotate(45deg)", flexShrink: 0 }} />
    <h3 className="font-display font-bold" style={{ color: "#fff", fontSize: "1.25rem" }}>{label}</h3>
    <span className="font-mono" style={{ fontSize: ".68rem", color: "var(--c-muted)" }}>{sub}</span>
    <span style={{ flex: 1, height: 1, background: "var(--c-line)" }} />
  </div>
);

const STATUS = {
  done:   { color: "#22e39a", label: "completed", filled: true },
  active: { color: "#22d3ee", label: "in progress", filled: true },
  target: { color: "#f5b731", label: "target", filled: false },
};

const StatusBadge = ({ name, status }) => {
  const s = STATUS[status] || STATUS.target;
  return (
    <div className="flex items-center gap-2.5 term-panel" style={{ padding: ".6rem .85rem" }}>
      <span className={s.filled ? "led" : ""}
        style={{ width: 8, height: 8, borderRadius: "50%", background: s.filled ? s.color : "transparent",
          border: s.filled ? "none" : `1.5px solid ${s.color}`, boxShadow: s.filled ? `0 0 10px ${s.color}` : "none", flexShrink: 0 }} />
      <span className="text-white text-[13.5px] font-medium flex-1">{name}</span>
      <span className="font-mono" style={{ fontSize: ".58rem", color: s.color, letterSpacing: ".05em", textTransform: "uppercase" }}>{s.label}</span>
    </div>
  );
};

const SecOps = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>// offensive + defensive</p>
      <h2 className={styles.sectionHeadText}>
        Purple Team<span style={{ color: "#f43f5e" }}>.</span>
      </h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I work both sides of security. On the <span style={{ color: "#f43f5e" }}>red</span> side I
      break into web apps and networks to find what's exploitable; on the{" "}
      <span style={{ color: "#22d3ee" }}>blue</span> side I detect, investigate and respond.
      Attacking and defending inform each other — that's the purple-team mindset.
    </motion.p>

    {/* red team */}
    <motion.div variants={fadeIn("up", "spring", 0.12, 0.6)} className="mt-12">
      <GroupLabel dot="#f43f5e" label="Red Team" sub="// offensive security" />
      <div className="flex flex-wrap gap-5">
        {redTeam.map((f, i) => <FocusCard key={f.title} index={i} total={redTeam.length} {...f} />)}
      </div>
    </motion.div>

    {/* blue team */}
    <motion.div variants={fadeIn("up", "spring", 0.16, 0.6)} className="mt-12">
      <GroupLabel dot="#22d3ee" label="Blue Team" sub="// defensive security" />
      <div className="flex flex-wrap gap-5">
        {blueTeam.map((f, i) => <FocusCard key={f.title} index={i} total={blueTeam.length} {...f} />)}
      </div>
    </motion.div>

    {/* tooling / arsenal */}
    <motion.div variants={fadeIn("up", "spring", 0.2, 0.7)} className="mt-14 term-panel hud-corners" style={{ overflow: "hidden" }}>
      <div className="flex items-center gap-2" style={{ padding: ".7rem 1rem", borderBottom: "1px solid var(--c-line)", background: "rgba(255,255,255,.02)" }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f43f5e" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f5b731" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22e39a" }} />
        <span className="font-mono ml-2" style={{ fontSize: ".72rem", color: "var(--c-muted)" }}>~/tools — arsenal</span>
        <span className="font-mono ml-auto" style={{ fontSize: ".66rem", color: "var(--c-cyan)" }}>pentest toolkit</span>
      </div>
      <div className="flex flex-wrap" style={{ gap: "1.8rem", padding: "1.6rem 1.5rem" }}>
        {arsenal.map((a) => (
          <div key={a.group} style={{ flex: "1 1 220px", minWidth: 200 }}>
            <div className="flex items-center gap-2 mb-3" style={{ paddingBottom: ".5rem", borderBottom: `1px solid ${a.color}33` }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: a.color, boxShadow: `0 0 8px ${a.color}` }} />
              <span className="font-display font-bold" style={{ color: a.color, fontSize: ".92rem" }}>{a.group}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {a.tools.map((t) => (
                <span key={t} className="font-mono"
                  style={{ fontSize: ".68rem", padding: ".25rem .55rem", borderRadius: 5, border: "1px solid var(--c-line)", color: "#e6eef7", background: "rgba(255,255,255,.02)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    {/* learning path */}
    {/* <motion.div variants={fadeIn("up", "spring", 0.24, 0.7)} className="mt-14">
      <div className="flex items-center gap-2 mb-5">
        <span className="font-mono text-cyan" style={{ fontSize: ".8rem" }}>$ tail -f ./learning_path.log</span>
        <span className="cursor-blink font-mono text-cyan">_</span>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
        {learning.map((l) => <StatusBadge key={l.name} {...l} />)}
      </div>
    </motion.div> */}
  </>
);

export default SectionWrapper(SecOps, "security");
