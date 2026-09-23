import { motion } from "framer-motion";
import { styles } from "../styles";

const HERO = {
  tagline: "// security engineering × full-stack development × purple team",
  headline: ["I build secure software", "and validate how it fails."],
  description:
    "I build end-to-end applications and security tooling with an engineering mindset — from modern frontends, APIs, and databases to detection logic, attack-path validation, and Purple Team labs. My focus is Security Engineering and Full-Stack Development, where secure-by-design software meets practical offensive and defensive validation.",
  ctas: [
    { label: "> view_projects", href: "#work", primary: true },
    { label: "> init_contact", href: "#contact", primary: false },
  ],
};

const ENGINEERING_TRACKS = [
  {
    id: "01",
    title: "Security Engineering",
    text: "Detection engineering, network security, cloud exposure, hardening, threat analysis, and security automation.",
    accent: "#22d3ee",
  },
  {
    id: "02",
    title: "Full-Stack Development",
    text: "Modern frontends, secure APIs, authentication, databases, background services, testing, and deployment workflows.",
    accent: "#22e39a",
  },
];

const PURPLE_LOOP = [
  "Validate attack path",
  "Observe telemetry",
  "Investigate evidence",
  "Improve detection",
  "Retest controls",
];

const STACK = {
  build: ["React", "Angular", "Laravel", "FastAPI", "Node.js", "PostgreSQL", "Redis", "Docker"],
  secure: ["Python", "Linux", "Wireshark", "Nmap", "Metasploit", "Sigma", "MITRE ATT&CK", "Git"],
};

const ScrollDot = () => (
  <div className="w-full flex justify-center items-center pb-8 pt-4">
    <a href="#about" aria-label="Scroll down">
      <div
        className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2"
        style={{ borderColor: "rgba(34,211,238,.5)" }}
      >
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
  <section id="hero" className="relative w-full mx-auto hero-shell">
    <style>{`
      .hero-shell {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
      }

      .hero-shell::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background:
          radial-gradient(circle at 78% 35%, rgba(34,211,238,.075), transparent 30%),
          radial-gradient(circle at 86% 62%, rgba(34,227,154,.055), transparent 30%);
      }

      .hero-grid {
        position: relative;
        z-index: 1;
        width: 100%;
        display: grid;
        grid-template-columns: minmax(0, 1.08fr) minmax(390px, .92fr);
        gap: clamp(2rem, 5vw, 5.5rem);
        align-items: center;
        padding-top: 126px;
        padding-bottom: 42px;
      }

      .hero-copy-wrap {
        display: flex;
        align-items: flex-start;
        gap: 1.35rem;
        min-width: 0;
      }

      .hero-line { display: block; }

      .hero-cta-primary,
      .hero-cta-outline {
        font-family: 'JetBrains Mono', monospace;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: .75rem 1.8rem;
        border-radius: 8px;
        font-size: .85rem;
        letter-spacing: .02em;
        text-decoration: none;
        transition: all .22s ease;
      }

      .hero-cta-primary {
        background: linear-gradient(100deg, #22d3ee, #22e39a);
        color: #05070d;
        font-weight: 700;
        box-shadow: 0 0 24px rgba(34,211,238,.35);
      }

      .hero-cta-primary:hover {
        box-shadow: 0 0 38px rgba(34,227,154,.55);
        transform: translateY(-2px);
      }

      .hero-cta-outline {
        border: 1px solid rgba(34,211,238,.4);
        color: #cfe9f2;
        font-weight: 500;
        background: rgba(5, 12, 22, .5);
      }

      .hero-cta-outline:hover {
        border-color: #22d3ee;
        background: rgba(34,211,238,.1);
        transform: translateY(-2px);
      }

      .engineering-console {
        position: relative;
        border: 1px solid rgba(34,211,238,.22);
        border-radius: 18px;
        background: linear-gradient(145deg, rgba(5,13,24,.94), rgba(5,9,17,.88));
        box-shadow: 0 28px 80px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.03);
        overflow: hidden;
      }

      .engineering-console::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(120deg, rgba(34,211,238,.03), transparent 35%, rgba(34,227,154,.025));
      }

      .console-topbar {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: .85rem 1rem;
        border-bottom: 1px solid rgba(148,163,184,.12);
        background: rgba(255,255,255,.018);
      }

      .console-dots { display: flex; gap: .38rem; }
      .console-dot { width: 8px; height: 8px; border-radius: 50%; background: #253243; }
      .console-dot.active { background: #22e39a; box-shadow: 0 0 8px rgba(34,227,154,.65); }

      .console-status {
        font-family: 'JetBrains Mono', monospace;
        font-size: .66rem;
        letter-spacing: .08em;
        color: #7f91a9;
      }

      .console-body {
        position: relative;
        z-index: 1;
        padding: 1.2rem 1.25rem 1.3rem;
      }

      .console-kicker {
        font-family: 'JetBrains Mono', monospace;
        color: #22d3ee;
        font-size: .7rem;
        letter-spacing: .11em;
        text-transform: uppercase;
        margin-bottom: .45rem;
      }

      .console-title {
        color: #f8fafc;
        font-size: 1.38rem;
        line-height: 1.25;
        font-weight: 700;
        margin: 0;
      }

      .console-subtitle {
        color: #8290a5;
        font-size: .82rem;
        line-height: 1.6;
        margin-top: .45rem;
        max-width: 34rem;
      }

      .track-list {
        margin-top: 1.2rem;
        border-top: 1px solid rgba(148,163,184,.1);
      }

      .track-row {
        display: grid;
        grid-template-columns: 42px minmax(0, 1fr);
        gap: .85rem;
        padding: 1rem 0;
        border-bottom: 1px solid rgba(148,163,184,.1);
      }

      .track-id {
        font-family: 'JetBrains Mono', monospace;
        font-size: .72rem;
        padding-top: .12rem;
      }

      .track-title {
        color: #edf7fb;
        font-size: .92rem;
        font-weight: 650;
        margin-bottom: .22rem;
      }

      .track-text {
        color: #8290a5;
        font-size: .76rem;
        line-height: 1.55;
      }

      .purple-loop {
        margin-top: 1.15rem;
        padding: .95rem 0 .15rem;
      }

      .loop-label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: .75rem;
      }

      .loop-label span:first-child {
        font-family: 'JetBrains Mono', monospace;
        color: #d9e7ef;
        font-size: .73rem;
      }

      .loop-label span:last-child {
        font-family: 'JetBrains Mono', monospace;
        color: #8b5cf6;
        font-size: .63rem;
        letter-spacing: .06em;
      }

      .loop-flow {
        display: flex;
        align-items: center;
        gap: .45rem;
        flex-wrap: wrap;
      }

      .loop-step {
        font-family: 'JetBrains Mono', monospace;
        color: #aebcd0;
        font-size: .66rem;
        padding: .42rem .58rem;
        border-radius: 999px;
        background: rgba(139,92,246,.075);
        border: 1px solid rgba(139,92,246,.2);
        white-space: nowrap;
      }

      .loop-arrow { color: rgba(34,211,238,.55); font-size: .72rem; }

      .stack-zone {
        margin-top: 1.2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        padding-top: 1.05rem;
        border-top: 1px solid rgba(148,163,184,.1);
      }

      .stack-label {
        font-family: 'JetBrains Mono', monospace;
        color: #718198;
        font-size: .63rem;
        letter-spacing: .08em;
        margin-bottom: .55rem;
        text-transform: uppercase;
      }

      .stack-chips { display: flex; flex-wrap: wrap; gap: .35rem; }
      .stack-chip {
        font-family: 'JetBrains Mono', monospace;
        color: #aebed0;
        font-size: .61rem;
        padding: .3rem .45rem;
        border-radius: 5px;
        background: rgba(148,163,184,.055);
        border: 1px solid rgba(148,163,184,.11);
      }

      .console-footer {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        align-items: center;
        padding: .8rem 1.25rem;
        border-top: 1px solid rgba(148,163,184,.1);
        background: rgba(0,0,0,.13);
        font-family: 'JetBrains Mono', monospace;
        font-size: .64rem;
      }

      .focus-live { color: #22e39a; }
      .focus-mode { color: #75869b; text-align: right; }

      @media (max-width: 1050px) {
        .hero-grid {
          grid-template-columns: 1fr;
          gap: 3.4rem;
          padding-top: 118px;
        }
        .engineering-console { max-width: 760px; margin-left: 1.8rem; }
      }

      @media (max-width: 640px) {
        .hero-grid { padding-top: 104px; gap: 2.4rem; }
        .hero-copy-wrap { gap: .85rem; }
        .engineering-console { margin-left: 0; border-radius: 14px; }
        .console-body { padding: 1rem; }
        .console-footer { padding: .75rem 1rem; align-items: flex-start; flex-direction: column; }
        .focus-mode { text-align: left; }
        .stack-zone { grid-template-columns: 1fr; }
        .track-row { grid-template-columns: 34px minmax(0, 1fr); }
      }
    `}</style>

    <div className={`hero-grid max-w-7xl mx-auto ${styles.paddingX}`}>
      <div className="hero-copy-wrap">
        <div className="flex flex-col justify-center items-center mt-5 flex-shrink-0">
          <div
            className="w-5 h-5 rounded-full"
            style={{ background: "#22d3ee", boxShadow: "0 0 14px #22d3ee" }}
          />
          <div
            className="w-1 sm:h-80 h-40"
            style={{ background: "linear-gradient(180deg,#22d3ee,#22e39a,transparent)" }}
          />
        </div>

        <div style={{ minWidth: 0 }}>
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="font-mono"
            style={{ fontSize: ".78rem", fontWeight: 400, color: "#22d3ee", letterSpacing: ".08em", marginBottom: ".75rem" }}
          >
            {HERO.tagline}
          </motion.p>

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

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.65 }}
            className={`${styles.heroSubText}`}
            style={{ lineHeight: 1.6, marginTop: "1.45rem", marginBottom: "1.8rem", maxWidth: 600, color: "#aab6c9" }}
          >
            {HERO.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.6 }}
            style={{ display: "flex", gap: ".85rem", flexWrap: "wrap" }}
          >
            {HERO.ctas.map(({ label, href, primary }) => (
              <a key={label} href={href} className={primary ? "hero-cta-primary" : "hero-cta-outline"}>
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.aside
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.75 }}
        className="engineering-console"
        aria-label="Engineering focus overview"
      >
        <div className="console-topbar">
          <div className="console-dots" aria-hidden="true">
            <span className="console-dot active" />
            <span className="console-dot" />
            <span className="console-dot" />
          </div>
          <span className="console-status">engineering_focus.json · ACTIVE</span>
        </div>

        <div className="console-body">
          <p className="console-kicker">career_mode</p>
          <h2 className="console-title">Build securely. Validate continuously.</h2>
          <p className="console-subtitle">
            A dual engineering path combining software delivery with practical security validation — supported by Purple Team thinking.
          </p>

          <div className="track-list">
            {ENGINEERING_TRACKS.map((track) => (
              <div className="track-row" key={track.id}>
                <span className="track-id" style={{ color: track.accent }}>{track.id}</span>
                <div>
                  <div className="track-title">{track.title}</div>
                  <div className="track-text">{track.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="purple-loop">
            <div className="loop-label">
              <span>purple_team_loop</span>
              <span>OFFENSE ↔ DEFENSE</span>
            </div>
            <div className="loop-flow">
              {PURPLE_LOOP.map((step, index) => (
                <div key={step} style={{ display: "contents" }}>
                  <span className="loop-step">{step}</span>
                  {index < PURPLE_LOOP.length - 1 && <span className="loop-arrow">→</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="stack-zone">
            <div>
              <div className="stack-label">build_stack</div>
              <div className="stack-chips">
                {STACK.build.map((item) => <span className="stack-chip" key={item}>{item}</span>)}
              </div>
            </div>
            <div>
              <div className="stack-label">security_stack</div>
              <div className="stack-chips">
                {STACK.secure.map((item) => <span className="stack-chip" key={item}>{item}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="console-footer">
          <span className="focus-live">● focus: secure-by-design engineering</span>
          <span className="focus-mode">lab-driven · project-built · continuously learning</span>
        </div>
      </motion.aside>
    </div>

    <ScrollDot />
  </section>
);

export default Hero;
