import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[16px] shadow-card"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="rounded-[16px] py-6 px-8 min-h-[260px] flex justify-evenly items-center flex-col relative overflow-hidden"
        style={{ background: "#0b1120" }}
      >
        {/* faint grid inside card */}
        <div className="cyber-grid" style={{ position: "absolute", inset: 0, opacity: 0.25 }} />
        <span className="font-mono" style={{ position: "absolute", top: 12, left: 14, fontSize: ".62rem", color: "#22d3ee", opacity: 0.8 }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <img src={icon} alt={title} className="w-14 h-14 object-contain relative z-10" style={{ filter: "drop-shadow(0 0 10px rgba(34,211,238,.4))" }} />
        <h3 className="text-white text-[19px] font-semibold text-center relative z-10 font-display">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>// introduction</p>
      <h2 className={styles.sectionHeadText}>whoami<span className="text-cyan">.</span></h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      I'm a full-stack developer who builds complete web applications with{" "}
      <span className="text-white">React, Node.js and databases</span> — and a cyber
      security enthusiast working toward a <span className="text-white">SOC analyst</span>{" "}
      role. I like understanding systems from both sides: how to build them well, and how
      they get attacked and defended. That mix means I write with security in mind and
      I'm at home reading logs, chasing anomalies and thinking like a defender. I learn
      fast, ship real projects, and I'm always in the lab leveling up my blue-team skills.
    </motion.p>

    <div className="mt-16 flex flex-wrap gap-8">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
