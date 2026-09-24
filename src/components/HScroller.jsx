import { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

/* ─────────────────────────────────────────────────────────────────────────────
   HScroller — single-row horizontal carousel.
   - one non-wrapping row, horizontal scroll (native swipe on mobile)
   - NO visible scrollbar; a soft edge-fade hints there's more in that direction
   - ‹ › edge arrows + a "view more" button appear only when content overflows
   ───────────────────────────────────────────────────────────────────────────── */
const HScroller = ({ children, ariaLabel = "carousel", viewMoreTo = "", viewMoreLabel = "view all →" }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setAtStart(scrollLeft <= 4);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 4);
    setOverflowing(scrollWidth > clientWidth + 4);
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const t = setTimeout(update, 400); // re-measure after images settle
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      clearTimeout(t);
    };
  }, [update]);

  const page = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.85, 320), behavior: "smooth" });
  };

  // fade only the edge that has more content beyond it
  const startStop = atStart ? "#000 0" : "transparent 0, #000 34px";
  const endStop = atEnd ? "#000 100%" : "#000 calc(100% - 34px), transparent 100%";
  const mask = overflowing ? `linear-gradient(90deg, ${startStop}, ${endStop})` : "none";

  return (
    <div className="hsc-shell" style={{ position: "relative" }}>
      <style>{`
        .hsc-row {
          display: flex; flex-wrap: nowrap; gap: 1.75rem;
          overflow-x: auto; overflow-y: hidden;
          scroll-snap-type: x mandatory; scroll-behavior: smooth;
          padding: 6px 4px 8px; margin: 0 -4px;
          scrollbar-width: none; -ms-overflow-style: none;
        }
        .hsc-row::-webkit-scrollbar { height: 0; width: 0; display: none; }
        .hsc-row > * { scroll-snap-align: start; flex: 0 0 auto; }
        .hsc-arrow {
          position: absolute; top: 42%; transform: translateY(-50%); z-index: 5;
          width: 42px; height: 42px; border-radius: 50%; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem; line-height: 1; padding-bottom: 3px;
          background: rgba(5,7,13,.9); color: #cfe9f2;
          border: 1px solid rgba(34,211,238,.45);
          box-shadow: 0 0 18px rgba(34,211,238,.25); transition: all .2s ease;
        }
        .hsc-arrow:hover { border-color: #22d3ee; background: rgba(34,211,238,.15); color: #fff; }
        .hsc-arrow.left { left: -8px; }
        .hsc-arrow.right { right: -8px; }
        .hsc-more {
          font-family: 'JetBrains Mono', monospace; font-size: .8rem; letter-spacing: .02em;
          cursor: pointer; padding: .55rem 1.3rem; border-radius: 8px;
          background: none; color: #cfe9f2; border: 1px solid rgba(34,211,238,.4);
          transition: all .2s ease;
        }
        .hsc-more:hover { border-color: #22d3ee; background: rgba(34,211,238,.1); transform: translateY(-2px); }
        @media (max-width: 640px) { .hsc-arrow { display: none; } .hsc-more { width: 100%; max-width: 320px; } }
      `}</style>

      {overflowing && !atStart && (
        <button className="hsc-arrow left" aria-label="Scroll left" onClick={() => page(-1)}>‹</button>
      )}

      <div
        ref={ref}
        className="hsc-row"
        aria-label={ariaLabel}
        style={{ WebkitMaskImage: mask, maskImage: mask }}
      >
        {children}
      </div>

      {overflowing && !atEnd && (
        <button className="hsc-arrow right" aria-label="Scroll right" onClick={() => page(1)}>›</button>
      )}

      {(viewMoreTo || overflowing) && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.4rem" }}>
          <button
            className="hsc-more"
            onClick={viewMoreTo ? () => navigate(viewMoreTo) : () => page(atEnd ? -1 : 1)}
          >
            {viewMoreTo ? viewMoreLabel : atEnd ? "back to start ↺" : "view more →"}
          </button>
        </div>
      )}
    </div>
  );
};

export default HScroller;