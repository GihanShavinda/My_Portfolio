import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// ─── Skill data (edit levels/names freely) ──────────────────────────────────
const skillCategories = [
  {
    category: "Frontend",
    color: "#22d3ee",
    skills: [
      { name: "Angular", level: 92 },
      { name: "React.js", level: 90 },
      { name: "JavaScript / TS", level: 86 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Three.js / WebGL", level: 74 },
    ],
  },
  {
    category: "Backend",
    color: "#22e39a",
    skills: [
      { name: "Node / Express", level: 86 },
      { name: "PHP / Laravel", level: 80 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL / PostgreSQL", level: 78 },
      { name: "REST APIs", level: 84 },
    ],
  },
  {
    category: "Offensive / Red Team",
    color: "#f43f5e",
    skills: [
      { name: "Web App Pentesting", level: 74 },
      { name: "Burp Suite", level: 72 },
      { name: "Nmap / Recon", level: 76 },
      { name: "Metasploit", level: 66 },
      { name: "SQLi / XSS", level: 70 },
    ],
  },
  {
    category: "Defensive / Blue Team",
    color: "#22d3ee",
    skills: [
      { name: "Linux / Bash", level: 78 },
      { name: "Wireshark", level: 72 },
      { name: "Log & SIEM Analysis", level: 66 },
      { name: "Threat Detection", level: 68 },
      { name: "Incident Response", level: 62 },
    ],
  },
  {
    category: "Tools & DevOps",
    color: "#f5b731",
    skills: [
      { name: "Git / GitHub", level: 93 },
      { name: "Docker", level: 70 },
      { name: "Python", level: 82 },
      { name: "AWS (EC2 / S3)", level: 62 },
      { name: "Figma", level: 74 },
    ],
  },
];

const SkillBar = ({ name, level, color, delay }) => (
  <motion.div variants={fadeIn("up", "spring", delay, 0.5)} className="mb-3.5">
    <div className="flex justify-between mb-1">
      <span className="text-white text-[13px] font-mono">{name}</span>
      <span className="text-secondary text-[11px] font-mono">{level}%</span>
    </div>
    <div className="w-full rounded-full overflow-hidden" style={{ height: 5, background: "#0a1120" }}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut", delay }}
      />
    </div>
  </motion.div>
);

const CategoryColumn = ({ category, color, skills, cardIndex }) => (
  <motion.div variants={fadeIn("up", "spring", cardIndex * 0.12, 0.65)} style={{ flex: "1 1 230px", minWidth: 220 }}>
    {/* category header as a tab, colored per domain */}
    <div className="flex items-center justify-between mb-4" style={{ paddingBottom: ".6rem", borderBottom: `1px solid ${color}33` }}>
      <div className="flex items-center gap-2">
        <span style={{ width: 9, height: 9, borderRadius: 2, background: color, boxShadow: `0 0 10px ${color}`, transform: "rotate(45deg)" }} />
        <h3 className="font-display font-bold text-[15px]" style={{ color }}>{category}</h3>
      </div>
      <span className="font-mono" style={{ fontSize: ".6rem", color: "var(--c-muted)" }}>{skills.length}</span>
    </div>
    {skills.map((skill, i) => (
      <SkillBar key={skill.name} name={skill.name} level={skill.level} color={color} delay={cardIndex * 0.12 + i * 0.05} />
    ))}
  </motion.div>
);

const Skills = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>// capabilities</p>
      <h2 className={styles.sectionHeadText}>Skills<span className="text-cyan">.</span></h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      The stack I build with, and the blue-team skills I'm sharpening — from crafting
      interactive UIs and resilient back ends to reading traffic, analysing logs and
      responding to incidents.
    </motion.p>

    {/* one console frame containing all domains as columns */}
    <motion.div
      variants={fadeIn("up", "spring", 0.15, 0.7)}
      className="mt-12 term-panel hud-corners"
      style={{ overflow: "hidden" }}
    >
      {/* window chrome header */}
      <div className="flex items-center gap-2" style={{ padding: ".7rem 1rem", borderBottom: "1px solid var(--c-line)", background: "rgba(255,255,255,.02)" }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f43f5e" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f5b731" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22e39a" }} />
        <span className="font-mono ml-2" style={{ fontSize: ".72rem", color: "var(--c-muted)" }}>~/skills — capability_matrix</span>
        <span className="font-mono ml-auto" style={{ fontSize: ".66rem", color: "var(--c-cyan)" }}>{skillCategories.length} domains</span>
      </div>

      {/* columns */}
      <div className="flex flex-wrap" style={{ gap: "2rem", padding: "1.8rem 1.6rem" }}>
        {skillCategories.map((cat, i) => (
          <CategoryColumn key={cat.category} cardIndex={i} {...cat} />
        ))}
      </div>
    </motion.div>
  </>
);

export default SectionWrapper(Skills, "skills");
