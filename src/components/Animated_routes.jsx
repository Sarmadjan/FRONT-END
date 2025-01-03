import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import S_service from "./components/pages/S_service";
import { BrowserRouter as Routes, Route, useLocation } from "react-router-dom";


const Animated_routes = () => {
    const location = useLocation();
    return (
        <div>

            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/iservice" element={<S_service />} />
                <Route path="*" element={<Home />} />
            </Routes>

        </div>
    )
}

export default Animated_routes
