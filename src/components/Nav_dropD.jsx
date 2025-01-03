import { NavLink } from "react-router-dom";

const Nav_dropD = () => {
  return (
    <li className=" fs-4 ">
    <label type="button" className=" text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Right-aligned menu
    </label>
    <ul className="dropdown-menu dropdown-menu-end">
      <li><NavLink className="dropdown-item" to="#">Menu item</NavLink></li>
      <li><NavLink className="dropdown-item" to="#">Menu item</NavLink></li>
      <li><NavLink className="dropdown-item" to="#">Menu item</NavLink></li>
    </ul>
  </li>
  );
};

export default Nav_dropD;
