import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";
import HScroller from "./HScroller";

const ACCENTS = { cyan: "#22d3ee", emerald: "#22e39a", amber: "#f5b731" };

const CARD_W = 350;
const CARD_H = 280;

const clamp = (lines) => ({
  display: "-webkit-box",
  WebkitLineClamp: lines,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

// issuer → up to 2 initials, skipping filler words
const initialsOf = (issuer = "") =>
  issuer
    .split(/\s+/)
    .filter((w) => !["of", "and", "the", "&", "·", "-"].includes(w.toLowerCase()))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

// circular credential seal (issuer initials + verified check)
const Seal = ({ issuer, color }) => (
  <div style={{ position: "relative", width: 48, height: 48, flexShrink: 0 }}>
    <div
      style={{
        width: 48, height: 48, borderRadius: "50%",
        border: `1.5px solid ${color}`, background: `${color}12`,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: `0 0 14px ${color}33, inset 0 0 10px ${color}18`,
      }}
    >
      <span className="font-display" style={{ color, fontSize: ".95rem", fontWeight: 700, letterSpacing: ".02em" }}>
        {initialsOf(issuer)}
      </span>
    </div>
    {/* verified check badge */}
    <span
      style={{
        position: "absolute", right: -3, bottom: -3, width: 18, height: 18, borderRadius: "50%",
        background: "#22e39a", color: "#05070d", fontSize: ".64rem", fontWeight: 900,
        display: "flex", alignItems: "center", justifyContent: "center",
        border: "2px solid var(--c-panel)", boxShadow: "0 0 8px #22e39a88",
      }}
      aria-label="verified"
    >
      ✓
    </span>
  </div>
);

export const CertCard = ({
  title, issuer, platform, date, credentialId, grade, duration,
  credentialUrl, accent, index,
}) => {
  const color = ACCENTS[accent] || ACCENTS.cyan;
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.12, 0.6)} style={{ width: CARD_W }}>
      <div
        className="relative overflow-hidden"
        style={{
          width: CARD_W, height: CARD_H, display: "flex", flexDirection: "column",
          padding: "1.5rem 1.4rem", borderRadius: 14,
          background: "linear-gradient(160deg, rgba(13,22,38,.9), rgba(11,17,32,.96))",
          border: "1px solid var(--c-line)",
        }}
      >
        {/* corner accent glow + watermark bracket for the "credential" feel */}
        <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: `radial-gradient(circle, ${color}22, transparent 70%)`, pointerEvents: "none" }} />

        {/* header: seal + issuer */}
        <div className="flex items-start gap-3 mb-3" style={{ flexShrink: 0 }}>
          <Seal issuer={issuer} color={color} />
          <div style={{ minWidth: 0 }}>
            <div className="font-mono" style={{ color, fontSize: ".78rem", letterSpacing: ".02em", ...clamp(1) }}>
              {issuer}
            </div>
            <div className="flex items-center gap-2 mt-1">
              {platform && (
                <span className="font-mono" style={{ fontSize: ".6rem", color: "var(--c-muted)", border: "1px solid var(--c-line)", borderRadius: 4, padding: ".08rem .38rem" }}>
                  via {platform}
                </span>
              )}
              <span className="font-mono" style={{ fontSize: ".62rem", color: "var(--c-muted)" }}>{date}</span>
            </div>
          </div>
        </div>

        {/* title */}
        <h3 className="font-display text-white font-semibold" style={{ fontSize: "1.02rem", lineHeight: 1.3, marginBottom: ".6rem", minHeight: "2.6rem", ...clamp(2) }}>
          {title}
        </h3>

        {/* grade / duration */}
        {(grade || duration) && (
          <div className="flex items-center gap-2 flex-wrap" style={{ marginBottom: ".7rem" }}>
            {grade && (
              <span className="font-mono" style={{ fontSize: ".64rem", color, background: `${color}14`, border: `1px solid ${color}55`, borderRadius: 5, padding: ".14rem .5rem", fontWeight: 600 }}>
                GRADE {grade}
              </span>
            )}
            {duration && (
              <span className="font-mono" style={{ fontSize: ".64rem", color: "var(--c-muted)", border: "1px solid var(--c-line)", borderRadius: 5, padding: ".14rem .5rem" }}>
                {duration}
              </span>
            )}
          </div>
        )}

        {/* credential id */}
        {credentialId && (
          <div className="font-mono" style={{ fontSize: ".66rem", color: "var(--c-muted)", ...clamp(1) }}>
            <span style={{ color: "var(--c-cyan)" }}>ID</span> :: {credentialId}
          </div>
        )}

        {/* footer: verify */}
        <div style={{ marginTop: "auto", paddingTop: ".9rem" }}>
          {credentialUrl ? (
            <a
              href={credentialUrl} target="_blank" rel="noreferrer" className="font-mono"
              style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", fontSize: ".72rem", color, textDecoration: "none", border: `1px solid ${color}55`, borderRadius: 6, padding: ".4rem .85rem", transition: "background .2s ease, border-color .2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${color}14`; e.currentTarget.style.borderColor = color; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = `${color}55`; }}
            >
              verify_credential ↗
            </a>
          ) : (
            <span className="font-mono" style={{ fontSize: ".68rem", color: "#22e39a", display: "inline-flex", alignItems: "center", gap: ".4rem" }}>
              <span className="led" style={{ width: 6, height: 6, borderRadius: "50%", background: "#22e39a", boxShadow: "0 0 8px #22e39a" }} />
              verified · on file
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>// verified credentials</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications<span className="text-cyan">.</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Formal credentials backing the security track — network defense, risk
        management, SOC operations and hands-on ethical hacking. Each one is
        verifiable by its issuer.
      </motion.p>

      <div className="mt-12">
        <HScroller ariaLabel="Certifications" viewMoreTo="/certifications" viewMoreLabel="view all credentials →">
          {certifications.map((cert, index) => (
            <CertCard key={cert.title} index={index} {...cert} />
          ))}
        </HScroller>
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certs");