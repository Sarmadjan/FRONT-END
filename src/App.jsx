import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MouseFollower from "./components/MouseFollower";
import Frontend from "./components/pages/Frontend";
import Back_end from "./components/pages/Back_end";
import Team from "./components/pages/Team";
import Wordpress from "./components/pages/Wordpress";
import { useEffect, useState } from "react";
import Video_editing from "./components/pages/Video_editing";
import Animation_3D from "./components/pages/3D_animation";
import Animation_2D from "./components/pages/2D_animation";
import Jobs from "./components/pages/Jobs opning";
import Testing from "./components/pages/testing";
import JobApplicationForm from "./components/Job Form";
import Cinematic from "./components/pages/Cinematic";
import MobileApp from "./components/pages/Mobile App";

export default function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Load LinkedIn's profile badge script
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  return (
    <Router>

      {isDesktop && <MouseFollower />}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Back_end />} />
        <Route path="/team" element={<Team />} />
        <Route path="/wordpress" element={<Wordpress />} />
        <Route path="/video_editing" element={<Video_editing />} />
        <Route path="/3d_animation" element={<Animation_3D />} />
        <Route path="/2d_animation" element={<Animation_2D />} />
        <Route path="/cinematic" element={<Cinematic />} />
        <Route path="/mobile" element={<MobileApp />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="*" element={<Home />} />
        <Route path='/testing' element={<Testing />} />
        <Route path='/form' element={<JobApplicationForm />} />

      </Routes>
      <Footer />
    </Router>
  );
}
