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


    <nav className="navbar mx-auto  px-md-5 px-1 mt-4 z-3 navbar-expand-lg navbar-light bg-transperant   navvv  py-2 pt-md-3 m-0">

      {/* Logo */}
      <NavLink className="navbar-brand ms-3 " to="/" onClick={() => { scrollToTop(); closeNavbar(); }}>
        <img className="img-fluid w-75" src="/images/Logo Dark.svg" alt="Logo" />
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
        <ul className="navbar-nav ms-auto pe-2">
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


          <NavbarItem />




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



    </nav>


  );
}

export default Navbar;
