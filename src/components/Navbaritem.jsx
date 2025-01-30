import { useState, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbaritem.css";

const NavbarItem = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget)) {
      setIsDropdownOpen(false);
    }
  };

  const handleMoreClick = (e) => {
    e.preventDefault();
    navigate("/services");
  };

  const isActive = location.pathname === "/services";

  return (
    <li
      className="nav-item dropdown position-static"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        className={`nav-link dropdown-toggle ${isActive ? "active" : ""}`}
        href="/services"
        id="navbarDropdown"
        role="button"
        onClick={handleMoreClick}
        aria-expanded="false"
      >
        Services <b> +</b>
      </a>

      <div
        className={`dropdown-menu w-100 mt-0 ${isDropdownOpen ? "show" : ""} dropdown-center`}
        aria-labelledby="navbarDropdown"
        ref={dropdownRef}
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >

        <div className="row px-0 ">
          <div className="col-md-6   mb-3 ">
            <div className="list-group list-group-flush">
              <NavLink to="/frontend" className="list-group-item list-group-item-action"> <b>&gt;  </b>Front-End</NavLink>
              <NavLink to="/backend" className="list-group-item list-group-item-action"> <b>&gt;  </b>Back-End</NavLink>
              <NavLink to="/wordpress" className="list-group-item list-group-item-action"> <b>&gt;  </b>WordPress and Shopify</NavLink>

            </div>
          </div>
          <div className="col-md-6  mb-3 ">
            <div className="list-group list-group-flush">
              <NavLink to="/video_editing" className="list-group-item list-group-item-action"> <b>&gt;  </b>Video Editing</NavLink>
              <NavLink to="/3d_animation" className="list-group-item list-group-item-action"> <b>&gt;  </b>3D Animation</NavLink>
              <NavLink to="/2d_animation" className="list-group-item list-group-item-action"> <b>&gt;  </b>2D Animation</NavLink>

            </div>

          </div>

        </div>
      </div>

    </li>
  );
};

export default NavbarItem;
