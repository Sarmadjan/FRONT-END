import  { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbaritem.css";

const NavbarItem = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleMoreClick = (e) => {
    e.preventDefault(); // Prevent dropdown behavior
    navigate("/services"); // Navigate to the "Services" page
  };

  const isActive = location.pathname === "/services"; // Check if current path is "/services"

  return (
    <li
      className="nav-item dropdown"
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
        Services
      </a>

      <ul
        className={`dropdown-menu dropdown-menu-lg-end ${isDropdownOpen ? "show" : ""}`}
        aria-labelledby="navbarDropdown"
      >
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "dropdown-item active" : "dropdown-item"
            }
            to="/frontend"
          >
            Front-End
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "dropdown-item active" : "dropdown-item"
            }
            to="/backend"
          >
            Back-End
          </NavLink>
        </li>
        <hr className="py-1 mb-0" />
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "dropdown-item active" : "dropdown-item"
            }
            to="/wordpress"
          >
            WordPress and Shopify
          </NavLink>
        </li>
        <hr className="py-1 mb-0" />
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "dropdown-item active" : "dropdown-item"
            }
            to="video_editing"
          >
            Video Editing
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "dropdown-item active" : "dropdown-item"
            }
            to="/3d_animation"
          >
            3D Animation
          </NavLink>
        </li>

      </ul>
    </li>
  );
};

export default NavbarItem;
