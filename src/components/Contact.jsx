import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

//template_ssct12d
//service_jgkcfha
//K4jRgfg14qlHoFVaB

    emailjs
      .send(
        "service_jgkcfha",
        "template_ssct12d",
        {
          from_name: form.name,
          to_name: "Gihan Shavinda",
          from_email: form.email,
          to_email: "shavindagihan389@gmail.com",
          message: form.message,
        },
        "K4jRgfg14qlHoFVaB"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <style>{`
        .contact-input { background: #0a1120; border: 1px solid rgba(34,211,238,.16); transition: border-color .2s, box-shadow .2s; }
        .contact-input:focus { border-color: #22d3ee; box-shadow: 0 0 0 2px rgba(34,211,238,.18); }
        .contact-send { color: #05070d; background: linear-gradient(100deg,#22d3ee,#22e39a); font-weight: 600; box-shadow: 0 0 22px rgba(34,211,238,.4); transition: transform .18s, box-shadow .2s; }
        .contact-send:hover { transform: translateY(-2px); box-shadow: 0 0 34px rgba(34,227,154,.55); }
      `}</style>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] term-panel p-8'
      >
        <p className={styles.sectionSubText}>// establish connection</p>
        <h3 className={styles.sectionHeadText}>Contact<span className="text-cyan">.</span></h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-mono text-[14px] mb-3'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium contact-input'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-mono text-[14px] mb-3'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium contact-input'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-mono text-[14px] mb-3'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium contact-input'
            />
          </label>

          <button
            type='submit'
            className='contact-send font-mono py-3 px-8 rounded-lg outline-none w-fit'
          >
            {loading ? "> sending..." : "> send_message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
