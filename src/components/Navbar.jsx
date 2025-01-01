import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Nav Brand */}
          <NavLink className="navbar-brand" to="#">
            Navbar
          </NavLink>

          {/* Toggler Button */}

          {/* Navbar Dropdown */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                {/* Icon to Trigger Dropdown */}
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></NavLink>
                {/* Dropdown Menu */}
                <ul className="dropdown-menu ">
                  <li>
                    <NavLink className="dropdown-item" to="/">
                      Homepage
                    </NavLink>
                  </li>
                  <li>
                   
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/services">
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
