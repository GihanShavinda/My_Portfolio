import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { securityFocus, learningPath } from "../constants";

const FocusCard = ({ tag, title, desc, items, color, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.12, 0.7)}
    className="term-panel relative overflow-hidden"
    style={{ padding: "1.4rem 1.3rem", flex: "1 1 250px", minWidth: 240 }}
  >
    {/* severity top strip */}
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: color, boxShadow: `0 0 12px ${color}` }} />

    <div className="flex items-center justify-between mb-3">
      <span className="font-mono" style={{ fontSize: ".68rem", color, letterSpacing: ".04em" }}>
        [{tag}]
      </span>
      <span className="font-mono" style={{ fontSize: ".62rem", color: "var(--c-muted)" }}>
        {String(index + 1).padStart(2, "0")}/{String(securityFocus.length).padStart(2, "0")}
      </span>
    </div>

    <h3 className="font-display text-white font-semibold text-[18px] mb-2">{title}</h3>
    <p className="text-secondary text-[13.5px] leading-[22px] mb-4">{desc}</p>

    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <span
          key={it}
          className="font-mono"
          style={{
            fontSize: ".66rem", padding: ".22rem .5rem", borderRadius: 5,
            border: `1px solid ${color}44`, color, background: `${color}0f`,
          }}
        >
          {it}
        </span>
      ))}
    </div>
  </motion.div>
);

const StatusBadge = ({ name, status }) => {
  const active = status === "active";
  const color = active ? "#22e39a" : "#f5b731";
  return (
    <div
      className="flex items-center gap-2.5 term-panel"
      style={{ padding: ".6rem .85rem" }}
    >
      <span
        className={active ? "led" : ""}
        style={{
          width: 8, height: 8, borderRadius: "50%",
          background: active ? color : "transparent",
          border: active ? "none" : `1.5px solid ${color}`,
          boxShadow: active ? `0 0 10px ${color}` : "none",
          flexShrink: 0,
        }}
      />
      <span className="text-white text-[13.5px] font-medium flex-1">{name}</span>
      <span className="font-mono" style={{ fontSize: ".6rem", color, letterSpacing: ".05em", textTransform: "uppercase" }}>
        {active ? "active" : "target"}
      </span>
    </div>
  );
};

const SecOps = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>// security operations</p>
      <h2 className={styles.sectionHeadText}>Blue Team<span className="text-cyan">.</span></h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      The defensive side of what I do. I'm training toward a SOC analyst role —
      monitoring systems, detecting threats and responding to incidents. These are the
      areas I'm actively building depth in.
    </motion.p>

    {/* focus grid */}
    <div className="mt-12 flex flex-wrap gap-5">
      {securityFocus.map((f, i) => (
        <FocusCard key={f.title} index={i} {...f} />
      ))}
    </div>

    {/* learning path */}
    <motion.div variants={fadeIn("up", "spring", 0.2, 0.7)} className="mt-14">
      <div className="flex items-center gap-2 mb-5">
        <span className="font-mono text-cyan" style={{ fontSize: ".8rem" }}>$ tail -f ./learning_path.log</span>
        <span className="cursor-blink font-mono text-cyan">_</span>
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
        {learningPath.map((l) => (
          <StatusBadge key={l.name} {...l} />
        ))}
      </div>
    </motion.div>
  </>
);

export default SectionWrapper(SecOps, "security");
