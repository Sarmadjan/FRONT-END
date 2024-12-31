/* eslint-disable react/prop-types */
import '../pages/footer.css'

import { NavLink } from "react-router-dom";
const Footer_li = (props) => {
  return (
    <>
      <li className=''  style={{listStyle:"none" }}>
        <NavLink className="text-decoration-none liii" to={props.path}>
          <span className="fs-2 text-white " >{props.name}</span>
        </NavLink>
      </li>
    </>
  );
};

export default Footer_li;
