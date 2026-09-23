import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const offensive = [
  {
    step: "01",
    label: "DISCOVER",
    title: "Recon & Enumeration",
    desc: "Map exposed services, technologies and attack surface before touching the target.",
    tools: ["Nmap", "Gobuster", "ffuf", "Amass"],
  },
  {
    step: "02",
    label: "TEST",
    title: "Web & Network Pentesting",
    desc: "Validate weaknesses such as injection, auth flaws, unsafe services and misconfiguration.",
    tools: ["Burp Suite", "OWASP ZAP", "SQLmap", "Nikto"],
  },
  {
    step: "03",
    label: "EXPLOIT",
    title: "Controlled Exploitation",
    desc: "Prove impact in lab environments through exploitation, privilege escalation and credential testing.",
    tools: ["Metasploit", "Searchsploit", "John", "Hashcat"],
  },
];

const defensive = [
  {
    step: "04",
    label: "OBSERVE",
    title: "Telemetry & Detection",
    desc: "Inspect logs, packets and indicators to identify suspicious activity and attack behaviour.",
    tools: ["Wireshark", "Suricata", "Wazuh", "Splunk"],
  },
  {
    step: "05",
    label: "INVESTIGATE",
    title: "Triage & Analysis",
    desc: "Correlate evidence, scope affected systems and map activity to MITRE ATT&CK techniques.",
    tools: ["IOC Hunting", "PCAP", "MITRE ATT&CK", "Timeline"],
  },
  {
    step: "06",
    label: "RESPOND",
    title: "Contain & Improve",
    desc: "Contain the incident, document root cause and feed lessons back into stronger detections and controls.",
    tools: ["Playbooks", "Containment", "Reporting", "Hardening"],
  },
];

const FlowStep = ({ item, side, index }) => {
  const color = side === "red" ? "#f43f5e" : "#22d3ee";
  return (
    <motion.div
      variants={fadeIn(side === "red" ? "right" : "left", "spring", index * 0.1, 0.65)}
      className={`purple-flow__step purple-flow__step--${side}`}
    >
      <div className="purple-flow__number" style={{ color, borderColor: `${color}66` }}>
        {item.step}
      </div>
      <div className="purple-flow__content">
        <span className="purple-flow__eyebrow" style={{ color }}>{item.label}</span>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="purple-flow__tools">
          {item.tools.map((tool) => (
            <span key={tool} style={{ "--flow-color": color }}>{tool}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SecOps = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>// attack knowledge becomes defense</p>
      <h2 className={styles.sectionHeadText}>
        Purple Team<span style={{ color: "#a855f7" }}>.</span>
      </h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      My security work connects offensive validation with defensive visibility. I use red-team
      techniques to understand how an attack succeeds, then translate that evidence into detection,
      investigation and stronger controls.
    </motion.p>

    <motion.div variants={fadeIn("up", "spring", 0.15, 0.7)} className="purple-loop mt-14">
      <div className="purple-loop__header">
        <div className="purple-loop__side purple-loop__side--red">
          <span>RED / OFFENSIVE</span>
          <strong>Find the path in.</strong>
        </div>
        <div className="purple-loop__core">
          <span className="purple-loop__pulse" />
          <b>PURPLE LOOP</b>
          <small>validate → detect → improve</small>
        </div>
        <div className="purple-loop__side purple-loop__side--blue">
          <span>BLUE / DEFENSIVE</span>
          <strong>See it. Stop it. Learn.</strong>
        </div>
      </div>

      <div className="purple-flow">
        <div className="purple-flow__lane purple-flow__lane--red">
          {offensive.map((item, index) => (
            <FlowStep key={item.title} item={item} index={index} side="red" />
          ))}
        </div>

        <div className="purple-flow__spine" aria-hidden="true">
          <span className="purple-flow__spine-dot purple-flow__spine-dot--top" />
          <span className="purple-flow__spine-line" />
          <div className="purple-flow__spine-badge">↔</div>
          <span className="purple-flow__spine-line" />
          <span className="purple-flow__spine-dot purple-flow__spine-dot--bottom" />
        </div>

        <div className="purple-flow__lane purple-flow__lane--blue">
          {defensive.map((item, index) => (
            <FlowStep key={item.title} item={item} index={index} side="blue" />
          ))}
        </div>
      </div>

      <div className="purple-loop__footer">
        <span>ATTACK SURFACE</span>
        <i />
        <span>EXPLOIT EVIDENCE</span>
        <i />
        <span>TELEMETRY</span>
        <i />
        <span>DETECTION</span>
        <i />
        <span>HARDENING</span>
      </div>
    </motion.div>
  </>
);

export default SectionWrapper(SecOps, "security");
