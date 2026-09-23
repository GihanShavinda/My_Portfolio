import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const skillCategories = [
  {
    category: "Frontend Engineering",
    short: "FE",
    color: "#22d3ee",
    summary: "Interactive, responsive interfaces with modern component architecture.",
    skills: ["Angular", "React.js", "JavaScript / TypeScript", "Tailwind CSS", "Three.js / WebGL"],
  },
  {
    category: "Backend & APIs",
    short: "BE",
    color: "#22e39a",
    summary: "Secure APIs, service logic, data modelling and application backends.",
    skills: ["Node / Express", "PHP / Laravel", "REST APIs", "MongoDB", "MySQL / PostgreSQL"],
  },
  {
    category: "Offensive Security",
    short: "RED",
    color: "#f43f5e",
    summary: "Reconnaissance and practical web/network security testing in controlled labs.",
    skills: ["Web App Pentesting", "Burp Suite", "Nmap / Recon", "Metasploit", "SQLi / XSS"],
  },
  {
    category: "Defensive Security",
    short: "BLUE",
    color: "#38bdf8",
    summary: "Detection, investigation and network visibility for security operations.",
    skills: ["Wireshark", "Log & SIEM Analysis", "Threat Detection", "Incident Response", "Linux / Bash"],
  },
  {
    category: "Engineering Tooling",
    short: "OPS",
    color: "#f5b731",
    summary: "Development workflow, automation and cloud/container foundations.",
    skills: ["Git / GitHub", "Docker", "Python", "AWS (EC2 / S3)", "Figma"],
  },
];

const CapabilityRow = ({ category, short, color, summary, skills, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.08, 0.6)}
    className="skill-row"
  >
    <div className="skill-row__identity">
      <span className="skill-row__index">0{index + 1}</span>
      <div className="skill-row__mark" style={{ borderColor: color, color }}>
        {short}
      </div>
    </div>

    <div className="skill-row__copy">
      <div className="skill-row__heading">
        <h3>{category}</h3>
        <span style={{ background: color }} />
      </div>
      <p>{summary}</p>
    </div>

    <div className="skill-row__stack">
      {skills.map((skill, i) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.06 + i * 0.04 }}
          className="skill-token"
          style={{ "--skill-color": color }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>// engineering capability map</p>
      <h2 className={styles.sectionHeadText}>
        Skills<span className="text-cyan">.</span>
      </h2>
    </motion.div>

    <div className="skills-intro mt-4">
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A cross-functional stack spanning full-stack engineering and practical security.
        Instead of self-rated percentages, this map shows the technologies and capabilities
        I actively use across development, offensive testing and defensive analysis.
      </motion.p>
      <motion.div variants={fadeIn("left", "spring", 0.18, 0.7)} className="skills-signal">
        <span className="led" />
        <span>FULL-STACK × SECURITY</span>
      </motion.div>
    </div>

    <div className="skills-matrix mt-12">
      <div className="skills-matrix__rail" aria-hidden="true">
        <span>CAPABILITY</span>
        <span>ACTIVE STACK</span>
      </div>
      {skillCategories.map((category, index) => (
        <CapabilityRow key={category.category} index={index} {...category} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Skills, "skills");
