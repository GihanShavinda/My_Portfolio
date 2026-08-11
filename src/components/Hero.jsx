import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// ── EDIT THESE ────────────────────────────────────────────────────────────────
const HERO = {
  tagline: "// full-stack engineering × blue-team security",
  headline: ["I build software", "and secure systems."],
  description:
    "Full-stack developer by craft, security-minded by instinct. I engineer resilient web apps end-to-end — then think like a defender about how they could break. Now leveling up toward a SOC analyst role.",
  ctas: [
    { label: "> view_projects", href: "#work", primary: true },
    { label: "> init_contact", href: "#contact", primary: false },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

const ScrollDot = () => (
  <div className="w-full flex justify-center items-center pb-6">
    <a href="#about" aria-label="Scroll down">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2" style={{ borderColor: "rgba(34,211,238,.5)" }}>
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-3 h-3 rounded-full mb-1"
          style={{ background: "#22d3ee", boxShadow: "0 0 10px #22d3ee" }}
        />
      </div>
    </a>
  </div>
);

const Hero = () => (
  <section id="hero" className="relative w-full mx-auto" style={{ display: "flex", flexDirection: "column" }}>
    <style>{`
      .hero-line { display: block; }
      .hero-cta-primary {
        font-family: 'JetBrains Mono', monospace;
        padding: .75rem 1.8rem; border-radius: 8px;
        background: linear-gradient(100deg, #22d3ee, #22e39a); color: #05070d;
        font-size: .85rem; font-weight: 600; letter-spacing: .02em; text-decoration: none;
        box-shadow: 0 0 24px rgba(34,211,238,.4);
        transition: box-shadow .22s ease, transform .18s ease;
      }
      .hero-cta-primary:hover { box-shadow: 0 0 38px rgba(34,227,154,.6); transform: translateY(-2px); }
      .hero-cta-outline {
        font-family: 'JetBrains Mono', monospace;
        padding: .73rem 1.8rem; border-radius: 8px;
        border: 1px solid rgba(34,211,238,.4); color: #cfe9f2;
        font-size: .85rem; font-weight: 500; letter-spacing: .02em; text-decoration: none;
        transition: border-color .22s ease, background .22s ease, transform .18s ease;
      }
      .hero-cta-outline:hover { border-color: #22d3ee; background: rgba(34,211,238,.1); transform: translateY(-2px); }
    `}</style>

    <div
      className={`w-full max-w-7xl mx-auto ${styles.paddingX}`}
      style={{ paddingTop: 140, paddingBottom: "0.5rem", display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "1.5rem" }}
    >
      {/* accent rail */}
      <div className="flex flex-col justify-center items-center mt-5 flex-shrink-0">
        <div className="w-5 h-5 rounded-full" style={{ background: "#22d3ee", boxShadow: "0 0 14px #22d3ee" }} />
        <div className="w-1 sm:h-80 h-40" style={{ background: "linear-gradient(180deg,#22d3ee,#22e39a,transparent)" }} />
      </div>

      <div style={{ maxWidth: 640 }}>
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="font-mono"
          style={{ fontSize: ".82rem", fontWeight: 400, color: "#22d3ee", letterSpacing: ".08em", marginBottom: ".75rem" }}
        >
          {HERO.tagline}
        </motion.p>

        <div style={{ marginBottom: "1.25rem" }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.65 }}
            className={`${styles.heroHeadText} font-display`}
            style={{ margin: 0, lineHeight: 1.12, color: "#fff" }}
          >
            <span className="hero-line">{HERO.headline[0]}</span>
            <motion.span
              className="hero-line text-cyber-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.65 }}
            >
              {HERO.headline[1]}
            </motion.span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44, duration: 0.65 }}
          className={`${styles.heroSubText}`}
          style={{ lineHeight: 1.55, marginBottom: "2rem", maxWidth: 540, color: "#aab6c9" }}
        >
          {HERO.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58, duration: 0.6 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          {HERO.ctas.map(({ label, href, primary }) => (
            <a key={label} href={href} className={primary ? "hero-cta-primary" : "hero-cta-outline"}>
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </div>

    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <ComputersCanvas />
    </div>

    <ScrollDot />
  </section>
);

export default Hero;
