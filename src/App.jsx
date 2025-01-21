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
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
