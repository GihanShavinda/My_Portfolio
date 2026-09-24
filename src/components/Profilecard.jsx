import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile-photo.jpeg";
// ── EDIT THESE ────────────────────────────────────────────────────────────────
const PROFILE = {
  handle: "gihan",
  name: "Gihan Shavinda",
  roles: [
    "Security Engineering",
    "Full-Stack Development",
    "Purple Team Security",
  ],
  photo: profileImage,
  initials: "GS",
  uid: "0xGS-2601",
  location: "Sri Lanka",
  stats: [
    { value: "3+", label: "yrs_building" },
    { value: "20+", label: "projects_shipped" },
    { value: "10+", label: "tech_stack" },
    { value: "24/7", label: "learning_mode" },
  ],
  ctas: [
    { label: "./hire_me.sh", href: "#contact", primary: true },
  ],
  cvs: [
    {
      label: "Security Engineering CV",
      short: "security_engineering.pdf",
      href: "/Gihan-Shavinda-Security-Engineering-CV.pdf",
      accent: "var(--c-cyan)",
    },
    {
      label: "Full-Stack Development CV",
      short: "fullstack_development.pdf",
      href: "/Gihan-Shavinda-Full-Stack-Development-CV.pdf",
      accent: "var(--c-emerald)",
    },
  ],
  social: [
    {
      label: "GitHub",
      href: "https://github.com/GihanShavinda",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gihan-shavinda-279480340",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:shavindagihan389@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "Medium",
      href: "https://medium.com/@shavindagihan389",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

const useRoleTyper = (roles) => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[i % roles.length];
    let delay = deleting ? 45 : 85;

    if (!deleting && text === full) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? full.slice(0, prev.length - 1) : full.slice(0, prev.length + 1)
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, roles]);

  return text;
};

const useClock = () => {
  const [now, setNow] = useState("");
  useEffect(() => {
    const tick = () =>
      setNow(new Date().toLocaleTimeString("en-GB", { hour12: false }) + " UTC");
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return now;
};

const StatusTicker = () => {
  const clock = useClock();
  const items = [
    <><span className="led" /> system.status: <b style={{ color: "#22e39a" }}>ONLINE</b></>,
    <>threat.level: <b style={{ color: "#22e39a" }}>LOW</b></>,
    <>role: security-engineering × full-stack</>,
    <>loc: {PROFILE.location}</>,
    <>local.time: {clock || "--:--:--"}</>,
    <>uplink: secure // TLS 1.3</>,
  ];
  const row = (
    <div style={{ display: "flex", alignItems: "center", gap: "2.6rem", paddingRight: "2.6rem" }}>
      {items.map((it, idx) => (
        <span key={idx} style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", whiteSpace: "nowrap" }}>
          {it}
        </span>
      ))}
    </div>
  );
  return (
    <div
      style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 5,
        borderBottom: "1px solid var(--c-line)",
        background: "rgba(5,7,13,0.7)", backdropFilter: "blur(6px)",
        fontFamily: "'JetBrains Mono', monospace", fontSize: ".72rem",
        color: "var(--c-muted)", overflow: "hidden", height: 34,
        display: "flex", alignItems: "center",
      }}
    >
      <div style={{ display: "flex", animation: "ticker 26s linear infinite" }}>
        {row}
        {row}
      </div>
    </div>
  );
};

const Prompt = () => (
  <span style={{ color: "var(--c-emerald)", whiteSpace: "nowrap" }}>
    visitor@{PROFILE.handle}<span style={{ color: "var(--c-muted)" }}>:</span>
    <span style={{ color: "var(--c-cyan)" }}>~</span>
    <span style={{ color: "var(--c-muted)" }}>$ </span>
  </span>
);

const ProfileCard = () => {
  const role = useRoleTyper(PROFILE.roles);
  const photoRef = useRef(null);
  const [cvOpen, setCvOpen] = useState(false);
  const cvMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(event.target)) {
        setCvOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <section
      className="cyber-glow-bg scanlines profile-shell"
      style={{
        position: "relative", width: "100%", minHeight: "100vh",
        overflow: "hidden", display: "flex", alignItems: "center",
        justifyContent: "center", paddingTop: 34,
      }}
    >
      <div
        className="cyber-grid drift"
        style={{ position: "absolute", inset: 0, opacity: 0.5, WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, #000 40%, transparent 100%)", maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, #000 40%, transparent 100%)" }}
      />

      <StatusTicker />

      <div
        className="profile-layout"
        style={{
          position: "relative", zIndex: 4, width: "100%", maxWidth: 1200,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "3rem", padding: "3rem 2rem", flexWrap: "wrap",
        }}
      >
        {/* LEFT: terminal console */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="term-panel profile-terminal"
          style={{ flex: "1 1 460px", maxWidth: 620, overflow: "visible", position: "relative", zIndex: 10 }}
        >
          <div
            className="profile-terminal-bar"
            style={{
              display: "flex", alignItems: "center", gap: ".5rem",
              padding: ".7rem 1rem", borderBottom: "1px solid var(--c-line)",
              background: "rgba(255,255,255,0.02)",
              fontFamily: "'JetBrains Mono', monospace", fontSize: ".72rem",
              color: "var(--c-muted)",
            }}
          >
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#f43f5e" }} />
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#f5b731" }} />
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#22e39a" }} />
            <span style={{ marginLeft: ".6rem" }}>visitor@{PROFILE.handle}: ~/portfolio — zsh</span>
          </div>

          <div
            className="profile-terminal-body"
            style={{
              padding: "1.6rem 1.5rem 1.8rem",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: ".92rem", color: "var(--c-text)",
            }}
          >
            <div style={{ lineHeight: 1.9 }}><Prompt /><span style={{ color: "var(--c-muted)" }}>whoami</span></div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <div
                className="glitch font-display glow-cyan"
                data-text={PROFILE.name}
                style={{
                  fontSize: "clamp(1.8rem, 4.4vw, 2.9rem)", fontWeight: 700,
                  color: "#fff", letterSpacing: "-.01em", margin: ".2rem 0 .6rem",
                }}
              >
                {PROFILE.name}
              </div>
            </motion.div>

            <div style={{ lineHeight: 1.9 }}><Prompt /><span style={{ color: "var(--c-muted)" }}>cat ./role.txt</span></div>

            <div style={{ fontSize: "clamp(1.05rem, 2.4vw, 1.5rem)", fontWeight: 500, margin: ".15rem 0 1.1rem", minHeight: "1.9rem" }}>
              <span className="text-cyber-gradient font-display" style={{ fontWeight: 600 }}>{role}</span>
              <span className="cursor-blink">_</span>
            </div>

            <div style={{ lineHeight: 1.9 }}><Prompt /><span style={{ color: "var(--c-muted)" }}>./status --now</span></div>
            <div style={{ color: "var(--c-muted)", fontSize: ".82rem", lineHeight: 1.7, marginBottom: "1.3rem" }}>
              <span style={{ color: "var(--c-emerald)" }}>[ ok ]</span> shipping full-stack apps ·{" "}
              <span style={{ color: "var(--c-cyan)" }}>[ hunt ]</span> monitoring, detection &amp; response ·{" "}
              <span style={{ color: "var(--c-amber)" }}>[ goal ]</span> Security Engineer × Full-Stack Developer
            </div>

            <div style={{ display: "flex", gap: ".5rem", marginBottom: "1.3rem", flexWrap: "wrap" }}>
              {PROFILE.social.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="pc-social">
                  {icon}
                </a>
              ))}
            </div>

            <div style={{ display: "flex", gap: ".8rem", flexWrap: "wrap", alignItems: "flex-start" }}>
              {PROFILE.ctas.map(({ label, href, primary }) => (
                <a key={label} href={href} className={primary ? "pc-btn-primary" : "pc-btn-outline"}>{label}</a>
              ))}

              <div ref={cvMenuRef} className="pc-cv-wrap">
                <button
                  type="button"
                  className={`pc-btn-outline pc-cv-trigger ${cvOpen ? "is-open" : ""}`}
                  onClick={() => setCvOpen((open) => !open)}
                  aria-expanded={cvOpen}
                  aria-haspopup="menu"
                >
                  <span>./view_cv</span>
                  <span className="pc-cv-chevron">{cvOpen ? "▲" : "▼"}</span>
                </button>

                {cvOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.16 }}
                    className="pc-cv-menu"
                    role="menu"
                  >
                    <div className="pc-cv-head">select_target_cv:</div>
                    {PROFILE.cvs.map(({ label, short, href, accent }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="pc-cv-option"
                        role="menuitem"
                        onClick={() => setCvOpen(false)}
                      >
                        <span className="pc-cv-dot" style={{ background: accent, boxShadow: `0 0 10px ${accent}` }} />
                        <span>
                          <strong>{label}</strong>
                          <small>{short}</small>
                        </span>
                        <span className="pc-cv-open">↗</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: HUD photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="profile-visual"
          style={{ flex: "0 1 340px", position: "relative" }}
        >
          <div className="hud-corners" style={{ position: "relative", padding: 10 }}>
            <div style={{ position: "absolute", inset: "-8%", background: "radial-gradient(circle at 50% 40%, rgba(34,211,238,.22), transparent 62%)", filter: "blur(6px)", zIndex: 0 }} />
            <div className="scanlines" style={{ position: "relative", zIndex: 1, overflow: "hidden", border: "1px solid var(--c-line)", borderRadius: 14, background: "var(--c-panel)" }}>
              <img
                ref={photoRef}
                src={PROFILE.photo}
                alt={PROFILE.name}
                style={{ display: "block", width: "100%", objectFit: "cover", objectPosition: "top", filter: "grayscale(18%) contrast(1.05) drop-shadow(0 0 26px rgba(34,211,238,.25))" }}
                onError={(e) => { e.currentTarget.style.display = "none"; const fb = document.getElementById("pc-fallback"); if (fb) fb.style.display = "flex"; }}
              />
              <div id="pc-fallback" className="text-cyber-gradient" style={{ display: "none", width: "100%", height: 360, alignItems: "center", justifyContent: "center", fontFamily: "'Chakra Petch', sans-serif", fontSize: "5rem", fontWeight: 700 }}>
                {PROFILE.initials}
              </div>
              <div style={{ position: "absolute", left: 12, bottom: 12, zIndex: 2, fontFamily: "'JetBrains Mono', monospace", fontSize: ".66rem", color: "var(--c-cyan)", background: "rgba(5,7,13,.72)", border: "1px solid var(--c-line)", borderRadius: 6, padding: ".3rem .55rem", backdropFilter: "blur(4px)" }}>
                <span className="led" style={{ marginRight: 6 }} />
                uid:{PROFILE.uid} · verified
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".6rem", marginTop: "1rem" }}>
            {PROFILE.stats.map(({ value, label }) => (
              <div key={label} style={{ border: "1px solid var(--c-line)", borderRadius: 8, background: "rgba(34,211,238,.04)", padding: ".65rem .8rem" }}>
                <div className="font-display" style={{ fontSize: "1.35rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{value}</div>
                <div className="font-mono" style={{ fontSize: ".64rem", color: "var(--c-muted)", marginTop: ".25rem", letterSpacing: ".02em" }}>{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .pc-social { width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; border-radius: 8px; border: 1px solid var(--c-line); color: var(--c-muted); text-decoration: none; transition: all .2s ease; background: rgba(34,211,238,.03); }
        .pc-social:hover { border-color: var(--c-cyan); color: var(--c-cyan); background: rgba(34,211,238,.12); transform: translateY(-2px); box-shadow: 0 0 16px rgba(34,211,238,.35); }
        .pc-btn-primary { font-family: 'JetBrains Mono', monospace; font-size: .82rem; font-weight: 500; padding: .62rem 1.3rem; border-radius: 8px; text-decoration: none; cursor: pointer; color: #05070d; background: linear-gradient(100deg, var(--c-cyan), var(--c-emerald)); box-shadow: 0 0 22px rgba(34,211,238,.4); transition: transform .18s, box-shadow .2s; }
        .pc-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 34px rgba(34,227,154,.55); }
        .pc-btn-outline { font-family: 'JetBrains Mono', monospace; font-size: .82rem; font-weight: 500; padding: .6rem 1.3rem; border-radius: 8px; text-decoration: none; cursor: pointer; color: var(--c-text); background: transparent; border: 1px solid var(--c-line); transition: border-color .2s, background .2s, transform .18s; }
        .pc-btn-outline:hover { border-color: var(--c-cyan); background: rgba(34,211,238,.08); transform: translateY(-2px); }
        .pc-cv-wrap { position: relative; z-index: 80; }
        .pc-cv-trigger { display: inline-flex; align-items: center; gap: .65rem; }
        .pc-cv-trigger.is-open { border-color: var(--c-cyan); background: rgba(34,211,238,.08); }
        .pc-cv-chevron { font-size: .58rem; color: var(--c-cyan); }
        .pc-cv-menu { position: absolute; top: calc(100% + .7rem); left: 0; z-index: 999; width: min(360px, 88vw); padding: .6rem; border: 1px solid rgba(34,211,238,.45); border-radius: 12px; background: #070b12; box-shadow: 0 24px 65px rgba(0,0,0,.72), 0 0 34px rgba(34,211,238,.18); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); isolation: isolate; }
        .pc-cv-head { padding: .5rem .6rem .6rem; font-family: 'JetBrains Mono', monospace; font-size: .65rem; color: var(--c-muted); letter-spacing: .06em; text-transform: uppercase; }
        .pc-cv-option { display: grid; border: 1px solid transparent; grid-template-columns: auto 1fr auto; align-items: center; gap: .7rem; padding: .72rem .68rem; border-radius: 8px; color: var(--c-text); text-decoration: none; transition: background .18s ease, transform .18s ease; }
        .pc-cv-option:hover { background: rgba(34,211,238,.09); border-color: rgba(34,211,238,.18); transform: translateX(2px); }
        .pc-cv-option strong { display: block; font-family: 'Chakra Petch', sans-serif; font-size: .86rem; font-weight: 600; color: #fff; }
        .pc-cv-option small { display: block; margin-top: .12rem; font-family: 'JetBrains Mono', monospace; font-size: .61rem; color: var(--c-muted); }
        .pc-cv-dot { width: 8px; height: 8px; border-radius: 50%; }
        .pc-cv-open { color: var(--c-muted); font-size: .85rem; }
        @media (max-width: 520px) { .pc-cv-menu { left: 0; right: auto; width: min(310px, calc(100vw - 3rem)); } }
      `}</style>
    </section>
  );
};

export default ProfileCard;
