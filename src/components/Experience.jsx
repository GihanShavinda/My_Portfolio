import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0b1120",
        color: "#fff",
        border: "1px solid rgba(34,211,238,.16)",
        borderRadius: "12px",
        boxShadow: "0 24px 60px -30px rgba(34,211,238,.35)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(34,211,238,.3)" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, border: "3px solid #22d3ee", boxShadow: "0 0 0 4px #05070d, 0 0 18px rgba(34,211,238,.5)" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[22px] font-bold font-display'>{experience.title}</h3>
        <p
          className='text-cyan text-[15px] font-semibold font-mono'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          // build • learn • test • improve
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Journey<span className="text-[#a855f7]">.</span>
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
