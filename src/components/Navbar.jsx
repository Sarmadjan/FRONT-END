import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../components/images/LOGO.png";





function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarResponsive");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    

      <nav className="navbar mx-auto mt-4 z-3 navbar-expand-lg navbar-light bg-transperant   navvv  py-2 pt-md-3 m-0">

        {/* Logo */}
        <NavLink className="navbar-brand ps-5" to="/" onClick={() => { scrollToTop(); closeNavbar(); }}>
          <img className="img-fluid" src={logo} alt="Logo" />
        </NavLink>

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
          <ul className="navbar-nav ms-auto px-2">
            <li className="nav-item">

              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/"
                onClick={() => { scrollToTop(); closeNavbar(); }}
              >
                
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/portfolio"
                onClick={() => { scrollToTop(); closeNavbar(); }}
              >
                
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/services"
                onClick={() => { scrollToTop(); closeNavbar(); }}
              >

                Services


              </NavLink>

            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/contact"
                onClick={() => { scrollToTop(); closeNavbar(); }}
              >
                
                Contact
              </NavLink>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item dropdown">

              <a

                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>

              <ul
                className="dropdown-menu dropdown-menu-lg-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")}
                    to="/frontend"
                    onClick={() => { scrollToTop(); closeNavbar(); }}
                  >
                    Front-End
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")}
                    to="/backend"
                    onClick={() => { scrollToTop(); closeNavbar(); }}
                  >
                    Back-End
                  </NavLink>
                </li>
                <hr className="py-1 mb-0" />

                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")}
                    to="/wordpress"
                    onClick={() => { scrollToTop(); closeNavbar(); }}
                  >
                    Wordpress and Shopify
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>

      </nav>
   

  );
}

export default Navbar;
