import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CapabilityPill = ({ children, accent }) => (
  <span
    className="font-mono text-[11px] sm:text-[12px] px-3 py-1.5 rounded-full"
    style={{
      color: accent,
      border: `1px solid ${accent}33`,
      background: `${accent}0D`,
    }}
  >
    {children}
  </span>
);

const PrimaryTrack = ({ service, index }) => (
  <motion.article
    variants={fadeIn(index === 0 ? "right" : "left", "spring", 0.15 + index * 0.12, 0.75)}
    className="relative overflow-hidden rounded-[22px] p-[1px]"
    style={{
      background: `linear-gradient(135deg, ${service.accent}AA, rgba(255,255,255,.04) 45%, ${service.accent}25)`,
    }}
  >
    <div
      className="relative h-full rounded-[21px] px-6 py-7 sm:px-8 sm:py-8"
      style={{ background: "linear-gradient(145deg, rgba(11,17,32,.98), rgba(6,10,19,.98))" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 90% 8%, ${service.accent}16, transparent 34%)`,
        }}
      />

      <div className="relative z-10 flex items-start justify-between gap-5">
        <div>
          <div className="font-mono text-[11px] tracking-[0.18em] mb-3" style={{ color: service.accent }}>
            {service.tag}
          </div>
          <h3 className="font-display text-white text-[25px] sm:text-[30px] font-semibold leading-tight">
            {service.title}
          </h3>
        </div>

        <div
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0"
          style={{ background: `${service.accent}10`, border: `1px solid ${service.accent}2E` }}
        >
          <img
            src={service.icon}
            alt=""
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
            style={{ filter: `drop-shadow(0 0 10px ${service.accent}55)` }}
          />
        </div>
      </div>

      <p className="relative z-10 mt-5 text-secondary text-[15px] sm:text-[16px] leading-7 max-w-xl">
        {service.desc}
      </p>

      <div className="relative z-10 mt-6 flex flex-wrap gap-2">
        {service.items.map((item) => (
          <CapabilityPill key={item} accent={service.accent}>{item}</CapabilityPill>
        ))}
      </div>
    </div>
  </motion.article>
);

const SupportingTrack = ({ service, index }) => (
  <motion.article
    variants={fadeIn("up", "spring", 0.15 + index * 0.08, 0.65)}
    className="group relative py-5 sm:py-6 border-t"
    style={{ borderColor: "rgba(125,139,165,.16)" }}
  >
    <div className="flex gap-4 sm:gap-5 items-start">
      <div
        className="mt-1 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:-translate-y-1"
        style={{ background: `${service.accent}0D`, border: `1px solid ${service.accent}28` }}
      >
        <img src={service.icon} alt="" className="w-5 h-5 object-contain" />
      </div>

      <div className="min-w-0">
        <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.14em] mb-1.5" style={{ color: service.accent }}>
          {service.tag}
        </div>
        <h4 className="font-display text-white text-[18px] sm:text-[20px] font-semibold">
          {service.title}
        </h4>
        <p className="text-secondary text-[14px] leading-6 mt-2 max-w-2xl">
          {service.desc}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
          {service.items.map((item) => (
            <span key={item} className="font-mono text-[11px] text-[#8fa0b9]">
              <span style={{ color: service.accent }}>//</span> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.article>
);

const PurpleBridge = ({ purpleServices }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.35, 0.75)}
    className="mt-10 sm:mt-12 relative overflow-hidden rounded-[20px]"
    style={{
      border: "1px solid rgba(167,139,250,.18)",
      background: "linear-gradient(105deg, rgba(244,63,94,.055), rgba(11,17,32,.92) 45%, rgba(56,189,248,.055))",
    }}
  >
    <div className="px-5 sm:px-7 py-5 border-b flex flex-wrap items-center justify-between gap-3" style={{ borderColor: "rgba(125,139,165,.12)" }}>
      <div>
        <div className="font-mono text-[10px] tracking-[0.18em] text-[#a78bfa]">PURPLE TEAM MINDSET</div>
        <div className="font-display text-white text-[19px] sm:text-[22px] font-semibold mt-1">
          Attack insight → defensive improvement
        </div>
      </div>
      <div className="font-mono text-[10px] sm:text-[11px] text-[#7d8ba5]">
        validate · observe · detect · improve
      </div>
    </div>

    <div className="grid md:grid-cols-2">
      {purpleServices.map((service, index) => (
        <div
          key={service.title}
          className={`px-5 sm:px-7 py-6 ${index === 1 ? "md:border-l" : ""}`}
          style={{ borderColor: "rgba(125,139,165,.12)" }}
        >
          <div className="font-mono text-[10px] tracking-[0.15em]" style={{ color: service.accent }}>
            {service.tag}
          </div>
          <h4 className="font-display text-white text-[20px] font-semibold mt-2">{service.title}</h4>
          <p className="text-secondary text-[14px] leading-6 mt-2">{service.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.items.map((item) => (
              <CapabilityPill key={item} accent={service.accent}>{item}</CapabilityPill>
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const About = () => {
  const primary = services.filter((service) => service.type === "primary");
  const supporting = services.filter((service) => service.type === "support");
  const purple = services.filter((service) => service.type === "purple");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>// introduction</p>
        <h2 className={styles.sectionHeadText}>build<span className="text-cyan">.</span>secure<span className="text-cyan">.</span>improve</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 max-w-4xl"
      >
        <p className="text-secondary text-[16px] sm:text-[17px] leading-[30px]">
          I&apos;m a final-year IT undergraduate and developer focused on two connected paths: <span className="text-white font-medium">Security Engineering</span> and <span className="text-white font-medium">Full-Stack Development</span>. I build complete applications across frontend, backend, APIs and databases, while applying a security-first mindset through threat analysis, secure architecture, detection engineering and hands-on lab work.
        </p>
        <p className="text-secondary text-[16px] sm:text-[17px] leading-[30px] mt-3">
          My goal is to work where <span className="text-white">software engineering meets practical security</span>—building systems, understanding how they can fail, validating controls from an attacker&apos;s perspective, and strengthening detection and response from a defender&apos;s perspective.
        </p>
      </motion.div>

      <div className="mt-10 sm:mt-12 grid lg:grid-cols-2 gap-5">
        {primary.map((service, index) => (
          <PrimaryTrack key={service.title} service={service} index={index} />
        ))}
      </div>

      <div className="mt-9 grid lg:grid-cols-2 lg:gap-x-10">
        {supporting.map((service, index) => (
          <SupportingTrack key={service.title} service={service} index={index} />
        ))}
      </div>

      <PurpleBridge purpleServices={purple} />
    </>
  );
};

export default SectionWrapper(About, "about");
