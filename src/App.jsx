import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Skills,
  SecOps,
  Certifications,
  StarsCanvas,
} from "./components";

import ProfileCard from "./components/Profilecard";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetail from "./pages/ProjectDetail";
import AllCertifications from "./pages/AllCertifications";
import AllProjects from "./pages/AllProjects";

// The full single-page portfolio (route "/").
const Home = () => (
  <div className="relative z-0 bg-primary">
    {/* 1. Profile — SOC console landing */}
    <ProfileCard />

    {/* 2. Hero + Navbar (3D section) */}
    <div className="cyber-glow-bg scanlines" style={{ position: "relative", overflow: "hidden" }}>
      {/* ambient grid — same treatment as the SOC console above, faded at the edges */}
      <div
        className="cyber-grid drift"
        style={{
          position: "absolute", inset: 0, opacity: 0.42, pointerEvents: "none", zIndex: 0,
          WebkitMaskImage: "radial-gradient(ellipse 95% 85% at 50% 35%, #000 45%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 95% 85% at 50% 35%, #000 45%, transparent 100%)",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
      </div>
    </div>

    {/* 3. About */}
    <About />

    {/* 4. Skills */}
    <Skills />

    {/* 5. Security / Blue Team (SOC focus) */}
    <SecOps />

    {/* 6. Certifications — verifiable credentials */}
    <Certifications />

    {/* 7. Journey / Experience */}
    <Experience />

    {/* 7. Tech stack */}
    <Tech />

    {/* 8. Projects */}
    <Works />

    {/* 9. Contact + starfield */}
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/certifications" element={<AllCertifications />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;