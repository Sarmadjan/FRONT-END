import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MouseFollower from "./components/MouseFollower";
import Navbar from "./components/Navbar";
import S_service from "./components/pages/S_service";
export default function App() {
  return (
    <Router>
      <Navbar />
      <MouseFollower />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/iservice" element={<S_service />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
