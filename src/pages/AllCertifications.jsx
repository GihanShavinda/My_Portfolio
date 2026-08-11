import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { certifications } from "../constants";
import { CertCard } from "../components/Certifications";

/* Full listing of every certification. Route: /certifications */
const AllCertifications = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="cyber-glow-bg scanlines" style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      <div
        className="cyber-grid drift"
        style={{
          position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none", zIndex: 0,
          WebkitMaskImage: "radial-gradient(ellipse 100% 60% at 50% 0%, #000 40%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 100% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      <style>{`
        .back-link { font-family:'JetBrains Mono',monospace; color: var(--c-muted); font-size:.85rem; background:none; border:none; cursor:pointer; letter-spacing:.03em; transition: color .2s ease; }
        .back-link:hover { color: var(--c-cyan); }
        .cert-grid { display:flex; flex-wrap:wrap; gap:1.75rem; justify-content:flex-start; }
        @media (max-width: 760px) { .cert-grid { justify-content:center; } }
      `}</style>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "2rem 1.5rem 5rem" }}>
        {/* top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", marginBottom: "2.5rem" }}>
          <button onClick={() => navigate("/#certs")} className="back-link">← cd ../home</button>
          <span className="font-mono" style={{ color: "var(--c-line)", fontSize: ".75rem", letterSpacing: ".1em" }}>
            <span style={{ color: "var(--c-emerald)" }}>●</span> credentials
          </span>
        </div>

        {/* header */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="font-mono" style={{ color: "var(--c-cyan)", fontSize: ".8rem", letterSpacing: ".12em", marginBottom: "1rem" }}>
            // verified credentials
          </div>
          <h1 className="font-display" style={{ color: "#fff", fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.05, margin: "0 0 1rem" }}>
            Certifications<span style={{ color: "var(--c-cyan)" }}>.</span>
          </h1>
          <p className="font-body" style={{ color: "var(--c-muted)", fontSize: "1.05rem", maxWidth: 640, margin: 0 }}>
            Every credential I've earned across the security track — network defense,
            risk management, SOC operations and hands-on ethical hacking.
          </p>
          <div className="font-mono" style={{ color: "var(--c-emerald)", fontSize: ".78rem", marginTop: "1rem" }}>
            {certifications.length} credential{certifications.length === 1 ? "" : "s"} on record
          </div>
        </motion.div>

        {/* full grid */}
        <div className="cert-grid" style={{ marginTop: "3rem" }}>
          {certifications.map((cert, index) => (
            <CertCard key={cert.title} index={index} {...cert} />
          ))}
        </div>

        {/* footer */}
        <div style={{ marginTop: "3.5rem", paddingTop: "2rem", borderTop: "1px solid var(--c-line)" }}>
          <button onClick={() => navigate("/#certs")} className="back-link">← back to portfolio</button>
        </div>
      </div>
    </main>
  );
};

export default AllCertifications;                