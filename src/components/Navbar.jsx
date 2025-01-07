import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../components/images/logo.png";

function Navbar() {
  return (
    <div className="container mx-auto">


      <nav className="  navbar z-3 navbar-expand-lg navbar-light bg-light position-fixed container  navvv mt-0     ">
        <div className="container ">
          {/* Logo */}
          <Link className="navbar-brand ps-5" to="/">
            <img src={logo} alt="" />
          </Link>

          {/* Toggle Button for Small Screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto pe-md-5  ">
              {/* Dropdown Menu */}
              <li className="nav-item">
                <Link onClick={() => { window.scrollTo(0.0) }} className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link onClick={() => { window.scrollTo(0.0) }} className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={() => { window.scrollTo(0.0) }} className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={() => { window.scrollTo(0.0) }} className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item dropdown" >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-lg-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/services" onClick={() => { window.scrollTo(1.1) }}>
                      services
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item " to="/iservice" onClick={() => { window.scrollTo(1.1) }}>
                      individual service
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;
