import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { github } from "../assets";

const MonoLabel = ({ children }) => (
  <div className="font-mono pd-kicker">{children}</div>
);

const SectionHeading = ({ eyebrow, title, copy }) => (
  <div className="pd-section-heading">
    {eyebrow && <MonoLabel>{eyebrow}</MonoLabel>}
    <h2 className="font-display">{title}</h2>
    {copy && <p className="font-body">{copy}</p>}
  </div>
);

const Chip = ({ children }) => <span className="font-mono pd-chip">{children}</span>;

const BulletList = ({ items = [] }) => (
  <ul className="pd-bullet-list">
    {items.map((item, index) => (
      <li key={`${item}-${index}`} className="font-body">
        <span>▸</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const InfoPanel = ({ label, children }) => (
  <div className="pd-info-panel">
    <MonoLabel>{label}</MonoLabel>
    {children}
  </div>
);

const ArchitectureFlow = ({ items = [] }) => {
  if (!items.length) return null;
  return (
    <div className="pd-architecture-flow">
      {items.map((item, index) => {
        const title = typeof item === "string" ? item : item.title;
        const detail = typeof item === "string" ? "" : item.detail;
        return (
          <article className="pd-flow-node" key={`${title}-${index}`}>
            <div className="pd-flow-head">
              <span className="font-mono pd-flow-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-mono pd-flow-stage">stage_{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="font-display">{title}</h3>
            {detail && <p className="font-body">{detail}</p>}
            {index < items.length - 1 && <span className="pd-flow-connector" aria-hidden="true">→</span>}
          </article>
        );
      })}
    </div>
  );
};

const FeatureGrid = ({ items = [] }) => {
  if (!items.length) return null;
  return (
    <div className="pd-feature-grid">
      {items.map((item, index) => {
        const title = typeof item === "string" ? item : item.title;
        const detail = typeof item === "string" ? "" : item.detail;
        const meta = typeof item === "string" ? "" : item.meta;
        return (
          <article className="pd-feature" key={`${title}-${index}`}>
            <div className="pd-feature-top">
              <span className="font-mono">{String(index + 1).padStart(2, "0")}</span>
              {meta && <span className="font-mono pd-feature-meta">{meta}</span>}
            </div>
            <h3 className="font-display">{title}</h3>
            {detail && <p className="font-body">{detail}</p>}
          </article>
        );
      })}
    </div>
  );
};

const ConceptList = ({ items = [] }) => {
  if (!items.length) return null;
  return (
    <div className="pd-concepts">
      {items.map((item, index) => {
        const title = typeof item === "string" ? item : item.title;
        const detail = typeof item === "string" ? "" : item.detail;
        const category = typeof item === "string" ? "engineering" : item.category || "engineering";
        return (
          <div className="pd-concept" key={`${title}-${index}`}>
            <div className="pd-concept-head">
              <span className="pd-status-dot" />
              <h3 className="font-display">{title}</h3>
              <span className="font-mono pd-concept-tag">{category}</span>
            </div>
            {detail && <p className="font-body">{detail}</p>}
          </div>
        );
      })}
    </div>
  );
};

const normalizeGallery = (heroImg, gallery = []) => {
  const seen = new Set();
  if (heroImg) seen.add(typeof heroImg === "string" ? heroImg : heroImg.src);

  return gallery
    .map((item, index) =>
      typeof item === "string"
        ? { src: item, caption: `Project interface ${index + 1}` }
        : item
    )
    .filter((item) => {
      if (!item?.src || seen.has(item.src)) return false;
      seen.add(item.src);
      return true;
    })
    .slice(0, 3);
};

const NotFound = () => (
  <section className="cyber-glow-bg scanlines pd-not-found">
    <div className="term-panel hud-corners pd-not-found-card">
      <div className="font-mono pd-error">ERROR 404 · PROJECT_NOT_FOUND</div>
      <h1 className="font-display">No case file here.</h1>
      <p className="font-body">That project link does not match anything on record.</p>
      <Link to="/" className="pd-button pd-button-outline font-mono">← cd ~/</Link>
    </div>
  </section>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <NotFound />;

  const {
    name,
    tagline,
    overview,
    image,
    industry,
    deliverables = [],
    technologies = [],
    context,
    problem,
    solution,
    security = [],
    gallery = [],
    source_code_link,
    live_link,
    tags = [],
    role,
    projectType,
    status = "Completed",
    highlights = [],
    architecture = [],
    features = [],
    engineering = [],
    implementation = [],
    outcomes = [],
  } = project;

  const heroImg = image || (gallery[0] && (typeof gallery[0] === "string" ? gallery[0] : gallery[0].src));
  const visualGallery = normalizeGallery(heroImg, gallery);
  const concepts = [...security, ...engineering];

  return (
    <main className="cyber-glow-bg scanlines pd-page">
      <div className="cyber-grid drift pd-grid" />

      <style>{`
        .pd-page{position:relative;overflow:hidden;min-height:100vh;color:#fff}.pd-grid{position:absolute;inset:0;opacity:.3;pointer-events:none;z-index:0;-webkit-mask-image:radial-gradient(ellipse 110% 65% at 50% 0%,#000 35%,transparent 100%);mask-image:radial-gradient(ellipse 110% 65% at 50% 0%,#000 35%,transparent 100%)}.pd-shell{position:relative;z-index:1;max-width:1180px;margin:0 auto;padding:2rem 1.5rem 5.5rem}.pd-topbar{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding-top:1rem;margin-bottom:3rem}.pd-back{font-family:'JetBrains Mono',monospace;color:var(--c-muted);font-size:.82rem;background:none;border:0;cursor:pointer;transition:.2s}.pd-back:hover{color:var(--c-cyan)}.pd-case-state{font-size:.7rem;color:var(--c-muted);letter-spacing:.1em}.pd-case-state b{color:var(--c-emerald);font-weight:400}.pd-hero{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(280px,.75fr);gap:3.5rem;align-items:end}.pd-kicker{color:var(--c-cyan);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;margin-bottom:.7rem}.pd-title{font-size:clamp(2.5rem,6vw,4.8rem);line-height:1.02;margin:0 0 1.1rem;max-width:850px}.pd-tagline{font-size:1.15rem;line-height:1.7;color:#b9c8d8;max-width:760px;margin:0}.pd-actions{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:1.6rem}.pd-button{font-family:'JetBrains Mono',monospace;font-size:.78rem;font-weight:600;text-decoration:none;padding:.72rem 1.15rem;border-radius:8px;display:inline-flex;align-items:center;gap:.5rem;transition:.2s}.pd-button-primary{background:linear-gradient(100deg,#22d3ee,#22e39a);color:#05070d;box-shadow:0 0 22px rgba(34,211,238,.22)}.pd-button-primary:hover,.pd-button-outline:hover{transform:translateY(-2px)}.pd-button-outline{border:1px solid rgba(34,211,238,.35);color:#d7eff6;background:rgba(4,12,22,.5)}.pd-button-outline:hover{border-color:#22d3ee;background:rgba(34,211,238,.08)}.pd-meta{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--c-line);background:rgba(4,10,18,.68);border-radius:14px;overflow:hidden}.pd-meta-item{padding:1rem 1.05rem;min-height:82px;border-right:1px solid var(--c-line);border-bottom:1px solid var(--c-line)}.pd-meta-item:nth-child(2n){border-right:0}.pd-meta-item:nth-last-child(-n+2){border-bottom:0}.pd-meta-item span{display:block;font-size:.62rem;color:var(--c-cyan);letter-spacing:.11em;text-transform:uppercase;margin-bottom:.4rem}.pd-meta-item strong{display:block;font-family:'Inter',sans-serif;font-size:.92rem;color:#e8f2f8;line-height:1.45}.pd-image-frame{margin-top:3rem;border-radius:16px;overflow:hidden;border:1px solid var(--c-line);background:#050b12;box-shadow:0 0 45px rgba(34,211,238,.1)}.pd-image-frame img{display:block;width:100%;max-height:630px;object-fit:cover;object-position:top}.pd-summary{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(280px,.55fr);gap:3rem;margin-top:4.5rem}.pd-section-heading{max-width:760px;margin-bottom:1.8rem}.pd-section-heading h2{font-size:clamp(1.8rem,3vw,2.35rem);margin:0 0 .65rem}.pd-section-heading p{color:var(--c-muted);font-size:1rem;line-height:1.75;margin:0}.pd-overview-copy{font-size:1.07rem;line-height:1.85;color:#b9c8d8;margin:0}.pd-tag-row{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.5rem}.pd-chip{display:inline-flex;padding:.38rem .58rem;border:1px solid rgba(34,211,238,.24);border-radius:999px;color:#bdebf4;background:rgba(34,211,238,.055);font-size:.68rem}.pd-sidebar{display:grid;gap:1rem;align-self:start}.pd-info-panel{border-left:2px solid rgba(34,211,238,.55);padding:.25rem 0 .25rem 1.1rem}.pd-info-panel p{color:#dce8f0;margin:0;line-height:1.65}.pd-bullet-list{list-style:none;padding:0;margin:0;display:grid;gap:.52rem}.pd-bullet-list li{display:flex;gap:.6rem;color:#d7e3eb;font-size:.93rem;line-height:1.5}.pd-bullet-list li>span:first-child{color:var(--c-emerald)}.pd-narrative{margin-top:4.2rem;border-top:1px solid var(--c-line)}.pd-narrative-row{display:grid;grid-template-columns:minmax(170px,240px) 1fr;gap:2.4rem;padding:2.25rem 0;border-bottom:1px solid var(--c-line)}.pd-narrative-row h3{font-size:1.35rem;margin:0}.pd-narrative-row p{margin:0;color:#afbfce;line-height:1.8;font-size:1rem}.pd-section{margin-top:5rem}.pd-architecture-flow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;overflow:visible}.pd-flow-node{position:relative;min-width:0;padding:1.15rem 1.15rem 1.25rem;border:1px solid var(--c-line);border-top:2px solid var(--c-cyan);background:linear-gradient(180deg,rgba(34,211,238,.075),rgba(4,10,18,.42));border-radius:0 0 12px 12px;box-shadow:0 12px 30px rgba(0,0,0,.12)}.pd-flow-node:before{content:'';position:absolute;top:-2px;left:0;width:34%;height:2px;background:linear-gradient(90deg,var(--c-emerald),var(--c-cyan))}.pd-flow-head{display:flex;align-items:center;justify-content:space-between;gap:.75rem;margin-bottom:.8rem}.pd-flow-index{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border:1px solid rgba(34,227,154,.28);border-radius:7px;color:var(--c-emerald);background:rgba(34,227,154,.06);font-size:.62rem;flex:0 0 auto}.pd-flow-stage{font-size:.56rem;color:#668093;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap}.pd-flow-node h3{font-size:1.02rem;margin:0 0 .55rem;line-height:1.35}.pd-flow-node p{font-size:.84rem;line-height:1.62;color:var(--c-muted);margin:0;overflow-wrap:anywhere}.pd-flow-connector{position:absolute;right:-1.06rem;top:50%;transform:translateY(-50%);z-index:3;width:1.1rem;height:1.1rem;display:flex;align-items:center;justify-content:center;color:var(--c-cyan);font-family:'JetBrains Mono',monospace;font-size:.78rem;text-shadow:0 0 8px rgba(34,211,238,.55);pointer-events:none}.pd-flow-node:nth-child(3n) .pd-flow-connector{display:none}.pd-feature-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.pd-feature{position:relative;padding:1.3rem 1.35rem 1.4rem;border:1px solid var(--c-line);border-radius:12px;background:rgba(5,12,21,.66);overflow:hidden}.pd-feature:after{content:'';position:absolute;left:0;bottom:0;width:48%;height:1px;background:linear-gradient(90deg,var(--c-cyan),transparent)}.pd-feature-top{display:flex;justify-content:space-between;gap:.8rem;margin-bottom:.9rem;color:var(--c-emerald);font-size:.64rem}.pd-feature-meta{color:var(--c-cyan);border:1px solid rgba(34,211,238,.25);border-radius:999px;padding:.15rem .45rem}.pd-feature h3{font-size:1.05rem;margin:0 0 .55rem}.pd-feature p{color:var(--c-muted);font-size:.9rem;line-height:1.65;margin:0}.pd-tech-layout{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.pd-tech-panel{padding:1.35rem;border:1px solid var(--c-line);border-radius:12px;background:rgba(5,12,21,.6)}.pd-tech-panel h3{font-size:1rem;margin:0 0 .9rem}.pd-concepts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.85rem}.pd-concept{padding:1.15rem 1.2rem;border-left:3px solid var(--c-emerald);background:rgba(7,15,24,.65);border-radius:0 10px 10px 0}.pd-concept-head{display:flex;align-items:center;gap:.55rem}.pd-status-dot{width:7px;height:7px;border-radius:50%;background:var(--c-emerald);box-shadow:0 0 9px var(--c-emerald);flex:0 0 auto}.pd-concept h3{font-size:.98rem;margin:0;line-height:1.3}.pd-concept-tag{margin-left:auto;color:var(--c-cyan);font-size:.56rem;letter-spacing:.06em;text-transform:uppercase}.pd-concept p{font-size:.88rem;color:var(--c-muted);line-height:1.6;margin:.65rem 0 0}.pd-outcomes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}.pd-outcome{padding:1.25rem;border-top:2px solid var(--c-emerald);background:rgba(6,13,22,.65);border-radius:0 0 10px 10px}.pd-outcome strong{font-family:'Space Grotesk',sans-serif;font-size:1.6rem;color:#fff;display:block;margin-bottom:.45rem}.pd-outcome span{font-family:'Inter',sans-serif;color:var(--c-muted);font-size:.88rem;line-height:1.5}.pd-gallery{display:grid;grid-template-columns:repeat(12,1fr);gap:1rem}.pd-shot{border:1px solid var(--c-line);border-radius:12px;overflow:hidden;background:#050b12}.pd-shot:nth-child(1){grid-column:span 7}.pd-shot:nth-child(2){grid-column:span 5}.pd-shot:nth-child(3){grid-column:span 12}.pd-shot img{display:block;width:100%;height:100%;max-height:430px;object-fit:cover;object-position:top}.pd-shot figcaption{padding:.72rem .9rem;color:var(--c-muted);font-family:'JetBrains Mono',monospace;font-size:.64rem;border-top:1px solid var(--c-line)}.pd-footer{margin-top:5rem;padding-top:2.5rem;border-top:1px solid var(--c-line);display:flex;flex-wrap:wrap;gap:.8rem;align-items:center}.pd-footer-label{color:var(--c-muted);font-size:.82rem;margin-right:auto}.pd-error{color:var(--c-crit);font-size:.75rem;letter-spacing:.1em}.pd-not-found{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem}.pd-not-found-card{padding:2.5rem 2.8rem;text-align:center;max-width:480px}.pd-not-found-card h1{font-size:1.8rem;margin:.8rem 0 1rem}.pd-not-found-card p{color:var(--c-muted);margin-bottom:1.5rem}
        @media(max-width:900px){.pd-hero,.pd-summary{grid-template-columns:1fr}.pd-meta{max-width:650px}.pd-feature-grid,.pd-concepts{grid-template-columns:1fr}.pd-outcomes{grid-template-columns:1fr 1fr}.pd-architecture-flow{grid-template-columns:repeat(2,minmax(0,1fr))}.pd-flow-node:nth-child(3n) .pd-flow-connector{display:flex}.pd-flow-node:nth-child(2n) .pd-flow-connector{display:none}.pd-tech-layout{grid-template-columns:1fr}}
        @media(max-width:640px){.pd-architecture-flow{grid-template-columns:1fr}.pd-flow-node .pd-flow-connector{display:none!important}.pd-shell{padding:1.3rem 1rem 4rem}.pd-topbar{margin-bottom:2rem}.pd-title{font-size:2.35rem}.pd-meta{grid-template-columns:1fr}.pd-meta-item{border-right:0!important;border-bottom:1px solid var(--c-line)!important}.pd-meta-item:last-child{border-bottom:0!important}.pd-narrative-row{grid-template-columns:1fr;gap:.7rem;padding:1.7rem 0}.pd-feature-grid,.pd-concepts,.pd-outcomes{grid-template-columns:1fr}.pd-gallery{grid-template-columns:1fr}.pd-shot:nth-child(n){grid-column:span 1}.pd-summary,.pd-section{margin-top:3.6rem}.pd-actions{width:100%}.pd-button{justify-content:center}.pd-image-frame img{max-height:420px}}
      `}</style>

      <div className="pd-shell">
        <div className="pd-topbar">
          <button onClick={() => navigate("/#projects")} className="pd-back">← cd ../projects</button>
          <span className="font-mono pd-case-state"><b>●</b> project_case_study</span>
        </div>

        <motion.header className="pd-hero" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
          <div>
            <MonoLabel>// engineering case study</MonoLabel>
            <h1 className="font-display pd-title">{name}</h1>
            {tagline && <p className="font-body pd-tagline">{tagline}</p>}
            <div className="pd-actions">
              {source_code_link && (
                <a className="pd-button pd-button-outline" href={source_code_link} target="_blank" rel="noreferrer">
                  <img src={github} alt="" style={{ width: 16, height: 16 }} /> source_code
                </a>
              )}
              {live_link && <a className="pd-button pd-button-primary" href={live_link} target="_blank" rel="noreferrer">↗ live_demo</a>}
            </div>
          </div>

          <div className="pd-meta">
            <div className="pd-meta-item"><span className="font-mono">Domain</span><strong>{industry || "Software Engineering"}</strong></div>
            <div className="pd-meta-item"><span className="font-mono">Project Type</span><strong>{projectType || "Engineering Project"}</strong></div>
            <div className="pd-meta-item"><span className="font-mono">My Focus</span><strong>{role || "Architecture · Implementation · Testing"}</strong></div>
            <div className="pd-meta-item"><span className="font-mono">Status</span><strong>{status}</strong></div>
          </div>
        </motion.header>

        {heroImg && (
          <motion.div className="pd-image-frame hud-corners" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .08 }}>
            <img src={heroImg} alt={`${name} primary interface`} />
          </motion.div>
        )}

        <section className="pd-summary">
          <div>
            <SectionHeading eyebrow="01 / Overview" title="What this project does" />
            {overview && <p className="font-body pd-overview-copy">{overview}</p>}
            {!!tags.length && <div className="pd-tag-row">{tags.map(tag => <Chip key={tag.name}>{tag.name}</Chip>)}</div>}
          </div>
          <aside className="pd-sidebar">
            {!!highlights.length && <InfoPanel label="Key Highlights"><BulletList items={highlights} /></InfoPanel>}
            {!!deliverables.length && <InfoPanel label="Core Deliverables"><BulletList items={deliverables.slice(0, 7)} /></InfoPanel>}
          </aside>
        </section>

        {(context || problem || solution) && (
          <section className="pd-narrative">
            {context && <div className="pd-narrative-row"><h3 className="font-display">Project Context</h3><p className="font-body">{context}</p></div>}
            {problem && <div className="pd-narrative-row"><h3 className="font-display">The Problem</h3><p className="font-body">{problem}</p></div>}
            {solution && <div className="pd-narrative-row"><h3 className="font-display">Our Solution</h3><p className="font-body">{solution}</p></div>}
          </section>
        )}

        {!!architecture.length && (
          <section className="pd-section">
            <SectionHeading eyebrow="02 / Architecture" title="How the solution works" copy="A high-level view of the system flow, from input and processing through decision logic, storage, and user-facing output." />
            <ArchitectureFlow items={architecture} />
          </section>
        )}

        {!!features.length && (
          <section className="pd-section">
            <SectionHeading eyebrow="03 / Capabilities" title="Important features" copy="The features that make the project useful in practice, not just technically functional." />
            <FeatureGrid items={features} />
          </section>
        )}

        {!!technologies.length && (
          <section className="pd-section">
            <SectionHeading eyebrow="04 / Technology" title="Technology decisions" copy="Technologies are presented in the context of what they do in the solution rather than as an isolated tool list." />
            <div className="pd-tech-layout">
              <div className="pd-tech-panel">
                <h3 className="font-display">Technology Stack</h3>
                <div className="pd-tag-row">{technologies.map(tech => <Chip key={tech}>{tech}</Chip>)}</div>
              </div>
              <div className="pd-tech-panel">
                <h3 className="font-display">Engineering Approach</h3>
                <BulletList items={(implementation.length ? implementation : deliverables).slice(0, 7)} />
              </div>
            </div>
          </section>
        )}

        {!!concepts.length && (
          <section className="pd-section">
            <SectionHeading eyebrow="05 / Engineering Concepts" title="Security & engineering concepts applied" copy="The design principles, defensive controls, modeling approaches, and software engineering practices applied in the implementation." />
            <ConceptList items={concepts} />
          </section>
        )}

        {!!outcomes.length && (
          <section className="pd-section">
            <SectionHeading eyebrow="06 / Results" title="Outcome & evidence" copy="Measured results, achieved capabilities, or concrete evidence that demonstrates what the project delivered." />
            <div className="pd-outcomes">
              {outcomes.map((item, index) => (
                <div className="pd-outcome" key={`${item.label || item}-${index}`}>
                  <strong>{typeof item === "string" ? "✓" : item.value}</strong>
                  <span>{typeof item === "string" ? item : item.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {!!visualGallery.length && (
          <section className="pd-section">
            <SectionHeading eyebrow="07 / Visual Evidence" title="Project screens" copy="Up to three distinct screenshots are shown here. The primary hero image is automatically excluded so the same image is never displayed twice." />
            <div className="pd-gallery">
              {visualGallery.map((item, index) => (
                <figure className="pd-shot" key={`${item.src}-${index}`}>
                  <img src={item.src} alt={item.alt || `${name} screenshot ${index + 1}`} />
                  <figcaption>{item.caption || `project_screen_${String(index + 1).padStart(2, "0")}`}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <footer className="pd-footer">
          <span className="font-mono pd-footer-label"><span style={{ color: "var(--c-emerald)" }}>$</span> explore_the_build</span>
          {source_code_link && <a href={source_code_link} target="_blank" rel="noreferrer" className="pd-button pd-button-outline"><img src={github} alt="" style={{ width: 16, height: 16 }} /> source_code</a>}
          {live_link && <a href={live_link} target="_blank" rel="noreferrer" className="pd-button pd-button-primary">↗ live_demo</a>}
          <button onClick={() => navigate("/#projects")} className="pd-button pd-button-outline" style={{ cursor: "pointer" }}>← all_projects</button>
        </footer>
      </div>
    </main>
  );
};

export default ProjectDetail;
