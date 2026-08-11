import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300`}
      style={{
        background: scrolled ? "rgba(5,7,13,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(34,211,238,.14)" : "1px solid transparent",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* brand */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
          style={{ textDecoration: "none" }}
        >
          <span style={{ color: "#22e39a" }}>~/</span>
          <span className="text-white font-semibold">gihan</span>
          <span className="cursor-blink" style={{ color: "#22d3ee" }}>_</span>
        </a>

        {/* desktop links */}
        <ul className="list-none hidden sm:flex flex-row gap-9">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-mono text-[15px] cursor-pointer transition-colors"
              style={{ color: active === nav.title ? "#22d3ee" : "#7d8ba5" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#22d3ee")}
              onMouseLeave={(e) => (e.currentTarget.style.color = active === nav.title ? "#22d3ee" : "#7d8ba5")}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>
                <span style={{ color: "#22e39a" }}>#</span>{nav.title.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[26px] h-[26px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 absolute top-16 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl term-panel`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="font-mono cursor-pointer text-[15px]"
                  style={{ color: active === nav.title ? "#22d3ee" : "#7d8ba5" }}
                  onClick={() => { setToggle(!toggle); setActive(nav.title); }}
                >
                  <a href={`#${nav.id}`}>
                    <span style={{ color: "#22e39a" }}>#</span>{nav.title.toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
