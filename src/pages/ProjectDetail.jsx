import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { github } from "../assets";

/* ─────────────────────────────────────────────────────────────────────────────
   Project case-study page.  Route: /project/:slug
   Reads a project from src/constants (matched by `slug`) and renders it as a
   SOC-style "case file". Every section is optional — if a field is missing on
   the project object, that section simply doesn't render.
   ───────────────────────────────────────────────────────────────────────────── */

const Prompt = () => (
  <span style={{ color: "var(--c-emerald)", marginRight: 8 }}>$</span>
);

// left-label / right-body row used by Context · Problem · Solution
const DetailRow = ({ label, children }) =>
  !children ? null : (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(160px, 240px) 1fr",
        gap: "2rem",
        padding: "2rem 0",
        borderTop: "1px solid var(--c-line)",
      }}
      className="detail-row"
    >
      <h3
        className="font-display"
        style={{ fontSize: "1.5rem", color: "#fff", margin: 0, lineHeight: 1.2 }}
      >
        {label}
      </h3>
      <p
        className="font-body"
        style={{ color: "var(--c-muted)", fontSize: "1.02rem", lineHeight: 1.7, margin: 0 }}
      >
        {children}
      </p>
    </div>
  );

const SideBlock = ({ label, children }) => (
  <div style={{ marginBottom: "1.6rem" }}>
    <div
      className="font-mono"
      style={{
        color: "var(--c-cyan)", fontSize: ".72rem", letterSpacing: ".14em",
        textTransform: "uppercase", marginBottom: ".55rem",
      }}
    >
      {label}
    </div>
    {children}
  </div>
);

const NotFound = () => (
  <section
    className="cyber-glow-bg scanlines"
    style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
  >
    <div className="term-panel hud-corners" style={{ padding: "2.5rem 2.8rem", textAlign: "center", maxWidth: 460 }}>
      <div className="font-mono" style={{ color: "var(--c-crit)", fontSize: ".8rem", letterSpacing: ".1em", marginBottom: ".8rem" }}>
        ERROR 404 · PROJECT_NOT_FOUND
      </div>
      <h1 className="font-display" style={{ color: "#fff", fontSize: "1.8rem", margin: "0 0 1rem" }}>
        No case file here.
      </h1>
      <p className="font-body" style={{ color: "var(--c-muted)", marginBottom: "1.6rem" }}>
        That project link doesn't match anything on record.
      </p>
      <Link to="/" className="cta-outline font-mono">← cd ~/</Link>
    </div>
  </section>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) return <NotFound />;

  const {
    name, tagline, overview, image, industry, deliverables, technologies,
    context, problem, solution, security, gallery,
    source_code_link, live_link, tags,
  } = project;

  const heroImg = image || (gallery && gallery[0]);

  return (
    <main className="cyber-glow-bg scanlines" style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {/* ambient grid, faded at the edges (matches the rest of the site) */}
      <div
        className="cyber-grid drift"
        style={{
          position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none", zIndex: 0,
          WebkitMaskImage: "radial-gradient(ellipse 100% 60% at 50% 0%, #000 40%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 100% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      <style>{`
        .cta-primary, .cta-outline {
          font-family: 'JetBrains Mono', monospace; font-size: .82rem; font-weight: 600;
          letter-spacing: .02em; text-decoration: none; padding: .7rem 1.4rem; border-radius: 8px;
          display: inline-flex; align-items: center; gap: .5rem; transition: all .2s ease;
        }
        .cta-primary { background: linear-gradient(100deg,#22d3ee,#22e39a); color: #05070d; box-shadow: 0 0 22px rgba(34,211,238,.35); }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 0 34px rgba(34,227,154,.55); }
        .cta-outline { border: 1px solid rgba(34,211,238,.4); color: #cfe9f2; }
        .cta-outline:hover { border-color: #22d3ee; background: rgba(34,211,238,.1); transform: translateY(-2px); }
        .back-link { font-family:'JetBrains Mono',monospace; color: var(--c-muted); font-size:.85rem; text-decoration:none; letter-spacing:.03em; transition: color .2s ease; }
        .back-link:hover { color: var(--c-cyan); }
        .cd-overview { display: grid; grid-template-columns: 1.6fr 1fr; gap: 3rem; }
        @media (max-width: 820px) {
          .cd-overview { grid-template-columns: 1fr; gap: 2rem; }
          .detail-row { grid-template-columns: 1fr !important; gap: .6rem !important; }
        }
      `}</style>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", padding: "2rem 1.5rem 5rem" }}>
        {/* top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", marginBottom: "2.5rem" }}>
          <button onClick={() => navigate("/#projects")} className="back-link" style={{ background: "none", border: "none", cursor: "pointer" }}>
            ← cd ../projects
          </button>
          <span className="font-mono" style={{ color: "var(--c-line)", fontSize: ".75rem", letterSpacing: ".1em" }}>
            <span style={{ color: "var(--c-emerald)" }}>●</span> case_file
          </span>
        </div>

        {/* header */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="font-mono" style={{ color: "var(--c-cyan)", fontSize: ".8rem", letterSpacing: ".12em", marginBottom: "1rem" }}>
            // case_study
          </div>
          <h1 className="font-display" style={{ color: "#fff", fontSize: "clamp(2.2rem, 6vw, 4rem)", lineHeight: 1.05, margin: "0 0 1rem" }}>
            {name}
          </h1>
          {tagline && (
            <p className="font-body" style={{ color: "var(--c-muted)", fontSize: "1.15rem", maxWidth: 640, margin: 0 }}>
              {tagline}
            </p>
          )}
        </motion.div>

        {/* hero image */}
        {heroImg && (
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="hud-corners"
            style={{ marginTop: "2.5rem", borderRadius: 14, overflow: "hidden", border: "1px solid var(--c-line)", boxShadow: "0 0 40px rgba(34,211,238,.12)" }}
          >
            <img src={heroImg} alt={name} style={{ display: "block", width: "100%", objectFit: "cover" }} />
          </motion.div>
        )}

        {/* overview + sidebar */}
        {(overview || industry || deliverables || technologies) && (
          <section className="cd-overview" style={{ marginTop: "4rem" }}>
            <div>
              <h2 className="font-display" style={{ color: "#fff", fontSize: "2rem", margin: "0 0 1.4rem" }}>
                Project Overview
              </h2>
              {overview && (
                <p className="font-body" style={{ color: "var(--c-muted)", fontSize: "1.1rem", lineHeight: 1.75, margin: 0 }}>
                  {overview}
                </p>
              )}
              {tags && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginTop: "1.6rem" }}>
                  {tags.map((t) => (
                    <span key={t.name} className={`text-[14px] ${t.color}`} style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                      #{t.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <aside className="term-panel" style={{ padding: "1.6rem 1.5rem", alignSelf: "start" }}>
              {industry && (
                <SideBlock label="Industry">
                  <p className="font-body" style={{ color: "#e6eef7", margin: 0, fontSize: ".98rem" }}>{industry}</p>
                </SideBlock>
              )}
              {deliverables && deliverables.length > 0 && (
                <SideBlock label="Deliverables">
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: ".45rem" }}>
                    {deliverables.map((d) => (
                      <li key={d} className="font-body" style={{ color: "#e6eef7", fontSize: ".96rem", display: "flex", gap: ".5rem" }}>
                        <span style={{ color: "var(--c-emerald)" }}>▸</span> {d}
                      </li>
                    ))}
                  </ul>
                </SideBlock>
              )}
              {technologies && technologies.length > 0 && (
                <SideBlock label="Technologies">
                  <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                    {technologies.map((tech) => (
                      <span key={tech} className="cyber-chip font-mono" style={{ fontSize: ".72rem" }}>{tech}</span>
                    ))}
                  </div>
                </SideBlock>
              )}
            </aside>
          </section>
        )}

        {/* context / problem / solution */}
        {(context || problem || solution) && (
          <section style={{ marginTop: "3.5rem" }}>
            <DetailRow label="Project Context">{context}</DetailRow>
            <DetailRow label="The Problem">{problem}</DetailRow>
            <DetailRow label="Our Solution">{solution}</DetailRow>
          </section>
        )}

        {/* security concepts applied */}
        {security && security.length > 0 && (
          <section style={{ marginTop: "4.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.6rem" }}>
              <h2 className="font-display" style={{ color: "#fff", fontSize: "1.9rem", margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: ".6rem" }}>
                <span aria-hidden style={{ color: "var(--c-emerald)" }}>🛡</span> Security
              </h2>
              <span style={{ flex: 1, height: 1, background: "var(--c-line)" }} />
              <span className="font-mono" style={{ fontSize: ".68rem", color: "var(--c-emerald)", letterSpacing: ".1em", whiteSpace: "nowrap" }}>
                {security.length} measure{security.length === 1 ? "" : "s"}
              </span>
            </div>
            <p className="font-body" style={{ color: "var(--c-muted)", fontSize: ".98rem", lineHeight: 1.7, margin: "0 0 1.8rem", maxWidth: 680 }}>
              Security concepts and defensive practices applied while building this project.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
              {security.map((item, i) => {
                const title = typeof item === "string" ? item : item.title;
                const detail = typeof item === "string" ? "" : item.detail;
                const tag = typeof item === "string" ? "" : item.category;
                return (
                  <div
                    key={title + i}
                    className="term-panel relative overflow-hidden"
                    style={{ padding: "1.1rem 1.2rem" }}
                  >
                    {/* left secure rail */}
                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "var(--c-emerald)", boxShadow: "0 0 10px var(--c-emerald)" }} />
                    <div className="flex items-center gap-2" style={{ marginBottom: detail ? ".5rem" : 0 }}>
                      <span className="led" style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--c-emerald)", boxShadow: "0 0 9px var(--c-emerald)", flexShrink: 0 }} />
                      <h3 className="font-display" style={{ color: "#fff", fontSize: "1rem", margin: 0, lineHeight: 1.25 }}>{title}</h3>
                      {tag && (
                        <span className="font-mono" style={{ marginLeft: "auto", fontSize: ".58rem", color: "var(--c-cyan)", border: "1px solid rgba(34,211,238,.4)", borderRadius: 4, padding: ".1rem .4rem", letterSpacing: ".06em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                          {tag}
                        </span>
                      )}
                    </div>
                    {detail && (
                      <p className="font-body" style={{ color: "var(--c-muted)", fontSize: ".9rem", lineHeight: 1.6, margin: 0 }}>{detail}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* final output gallery */}
        {gallery && gallery.length > 0 && (
          <section style={{ marginTop: "4.5rem" }}>
            <h2 className="font-display" style={{ color: "#fff", fontSize: "1.9rem", margin: "0 0 1.8rem" }}>
              The Final Output
            </h2>
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {gallery.map((img, i) => (
                <div key={i} className="hud-corners" style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--c-line)" }}>
                  <img src={img} alt={`${name} screen ${i + 1}`} style={{ display: "block", width: "100%" }} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA footer */}
        <section style={{ marginTop: "4.5rem", paddingTop: "2.5rem", borderTop: "1px solid var(--c-line)", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
          <Prompt />
          <span className="font-mono" style={{ color: "var(--c-muted)", marginRight: "auto", fontSize: ".9rem" }}>explore the build</span>
          {source_code_link && (
            <a href={source_code_link} target="_blank" rel="noreferrer" className="cta-outline">
              <img src={github} alt="" style={{ width: 16, height: 16 }} /> source_code
            </a>
          )}
          {live_link && (
            <a href={live_link} target="_blank" rel="noreferrer" className="cta-primary">↗ live_demo</a>
          )}
          <button onClick={() => navigate("/#projects")} className="cta-outline" style={{ background: "none", cursor: "pointer" }}>
            ← all_projects
          </button>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetail;
