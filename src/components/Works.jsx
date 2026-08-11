import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import HScroller from "./HScroller";

// fixed card geometry — every project card is exactly this size
const CARD_W = 350;
const CARD_H = 500;

const clamp = (lines) => ({
  display: "-webkit-box",
  WebkitLineClamp: lines,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

const ProjectCard = ({
  index,
  slug,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const navigate = useNavigate();
  const openCaseStudy = () => slug && navigate(`/project/${slug}`);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.6)} style={{ width: CARD_W }}>
      <Tilt
        options={{ max: 12, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl"
        style={{ width: CARD_W, height: CARD_H, border: "1px solid var(--c-line)", display: "flex", flexDirection: "column" }}
      >
        {/* clickable media → case study (fixed height) */}
        <div
          className="relative w-full group cursor-pointer"
          style={{ height: 200, flexShrink: 0 }}
          onClick={openCaseStudy}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openCaseStudy()}
          aria-label={`Open ${name} case study`}
        >
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

          <div
            className="absolute inset-0 rounded-2xl flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "linear-gradient(180deg, transparent 40%, rgba(5,7,13,.82))" }}
          >
            <span className="font-mono" style={{ color: "var(--c-cyan)", fontSize: ".8rem", letterSpacing: ".05em" }}>
              &gt; view_case_study
            </span>
          </div>

          <div className="absolute inset-0 flex justify-end m-3 pointer-events-none">
            <div
              onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer pointer-events-auto"
              style={{ background: "rgba(5,7,13,.85)", border: "1px solid var(--c-line)" }}
              role="button"
              aria-label="Open source code"
              title="Source code"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        {/* title (2 lines) + description (4 lines), clamped so all cards match */}
        <div className="mt-5 cursor-pointer" onClick={openCaseStudy}>
          <h3 className="text-white font-bold text-[22px] font-display" style={{ ...clamp(2), minHeight: "3.4rem", lineHeight: "1.15" }}>
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px]" style={{ ...clamp(4), lineHeight: "1.5" }}>
            {description}
          </p>
        </div>

        {/* tags (single clamped row) */}
        <div className="mt-3 flex flex-wrap gap-2" style={{ maxHeight: "1.6rem", overflow: "hidden" }}>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[13px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>

        {/* CTA pinned to the bottom */}
        {slug && (
          <button
            onClick={openCaseStudy}
            className="font-mono"
            style={{
              marginTop: "auto", background: "none", border: "1px solid rgba(34,211,238,.4)", color: "#cfe9f2",
              padding: ".5rem 1rem", borderRadius: 8, fontSize: ".78rem", cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: ".4rem", alignSelf: "flex-start", transition: "all .2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#22d3ee"; e.currentTarget.style.background = "rgba(34,211,238,.1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(34,211,238,.4)"; e.currentTarget.style.background = "none"; }}
          >
            open_case_study →
          </button>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>// selected builds</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects<span className="text-cyan">.</span></h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A selection of things I've built end-to-end. Click any project to open
          its full case study — the problem, my approach, the stack, and the
          result. Scroll sideways to see more.
        </motion.p>
      </div>

      <div className="mt-16">
        <HScroller ariaLabel="Projects">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </HScroller>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
