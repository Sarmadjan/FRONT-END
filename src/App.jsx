import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Icon_nav from "./components/pages/Icon_nav";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MouseFollower from "./components/MouseFollower";




export default function App() {
 

  return (
    <Router>
      <MouseFollower />
      <Icon_nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  );
}
