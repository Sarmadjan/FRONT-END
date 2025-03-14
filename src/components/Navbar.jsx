import { NavLink } from "react-router-dom";
import "./navbar.css";

import NavbarItem from "./Navbaritem";

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

    <nav className="navbar mx-auto d-flex justify-content-between  px-md-4 px-1 mt-4 z-3 navbar-expand-lg navbar-light bg-transperant   navvv   py-md-3 m-0">

      {/* Logo */}
      <div>
        <NavLink className="navbar-brand ms-md-3 col-3   m-0 " to="/" onClick={() => { scrollToTop(); closeNavbar(); }}>
          <img className="  logoo " src="/images/Logo Dark.svg" alt="Logo" />
        </NavLink>
      </div>

      {/* Toggle Button for Small Screens */}
      <button
        className="navbar-toggler ms-auto me-2 w-1 "
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
        <ul className="navbar-nav mx-auto ">

          <li className="nav-item ">

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

          <NavbarItem />

          <li className="nav-item">
            <NavLink
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              to="/team"
              onClick={() => { scrollToTop(); closeNavbar(); }}
            >

              Team
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

        </ul>

      </div>

      <div className="getbtn">
        <NavLink to={"/contact"}> <button style={{ height: "40px", fontWeight: "200" }} type="button" className="d-md-block  d-none btn fw-semibold  btn-sm py-0 "> <span>GET IN TOUCH</span></button></NavLink>
      </div>

    </nav>

  );
}

export default Navbar;
