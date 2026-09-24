import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { ProjectCard } from "../components/Works";

/* Full project archive. Route: /projects */
const AllProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="cyber-glow-bg scanlines"
      style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}
    >
      <div
        className="cyber-grid drift"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          pointerEvents: "none",
          zIndex: 0,
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 65% at 50% 0%, #000 42%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 100% 65% at 50% 0%, #000 42%, transparent 100%)",
        }}
      />

      <style>{`
        .projects-back-link {
          font-family: 'JetBrains Mono', monospace;
          color: var(--c-muted);
          font-size: .85rem;
          background: none;
          border: none;
          cursor: pointer;
          letter-spacing: .03em;
          transition: color .2s ease;
        }
        .projects-back-link:hover { color: var(--c-cyan); }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 350px);
          justify-content: center;
          align-items: start;
          gap: 2rem 1.75rem;
        }

        .projects-count {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          margin-top: 1rem;
          color: var(--c-emerald);
          font-family: 'JetBrains Mono', monospace;
          font-size: .78rem;
        }

        @media (max-width: 1160px) {
          .projects-grid { grid-template-columns: repeat(2, 350px); }
        }

        @media (max-width: 760px) {
          .projects-grid { grid-template-columns: 350px; }
        }

        @media (max-width: 390px) {
          .projects-grid {
            grid-template-columns: minmax(0, 1fr);
            justify-items: center;
          }
        }
      `}</style>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1180,
          margin: "0 auto",
          padding: "2rem 1.5rem 5rem",
        }}
      >
        {/* top navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            paddingTop: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <button
            onClick={() => navigate("/#projects")}
            className="projects-back-link"
          >
            ← cd ../home
          </button>

          <span
            className="font-mono"
            style={{
              color: "var(--c-muted)",
              fontSize: ".75rem",
              letterSpacing: ".1em",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "var(--c-emerald)" }}>●</span> project_archive
          </span>
        </div>

        {/* archive header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="font-mono"
            style={{
              color: "var(--c-cyan)",
              fontSize: ".8rem",
              letterSpacing: ".12em",
              marginBottom: "1rem",
            }}
          >
            // engineering case studies
          </div>

          <h1
            className="font-display"
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              lineHeight: 1.05,
              margin: "0 0 1rem",
            }}
          >
            All Projects<span style={{ color: "var(--c-cyan)" }}>.</span>
          </h1>

          <p
            className="font-body"
            style={{
              color: "var(--c-muted)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: 760,
              margin: 0,
            }}
          >
            A complete archive of my Security Engineering, Purple Team and Full-Stack
            builds. Open any project to explore the problem, architecture, implementation,
            technologies, security concepts and results as a full engineering case study.
          </p>

          <div className="projects-count">
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--c-emerald)",
                boxShadow: "0 0 8px var(--c-emerald)",
              }}
            />
            {projects.length} project{projects.length === 1 ? "" : "s"} documented
          </div>
        </motion.div>

        {/* complete project grid */}
        <motion.div
          className="projects-grid"
          style={{ marginTop: "3.25rem" }}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug || `project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </motion.div>

        {/* archive footer */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--c-line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <button
            onClick={() => navigate("/#projects")}
            className="projects-back-link"
          >
            ← back to portfolio
          </button>

          <span
            className="font-mono"
            style={{ color: "var(--c-muted)", fontSize: ".72rem" }}
          >
            security engineering × full-stack development × purple team
          </span>
        </div>
      </div>
    </main>
  );
};

export default AllProjects;
