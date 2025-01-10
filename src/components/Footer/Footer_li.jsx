/* eslint-disable react/prop-types */
import "../pages/footer.css";

import { NavLink } from "react-router-dom";
const Footer_li = (props) => {
  return (
    <>
      <li >
        <NavLink className="text-decoration-none liii " onClick={() => {
          window.scrollTo(0, 0)
        }} to={props.path}>
          <span className="fs-3 ">{props.name}</span>
        </NavLink>
      </li>
    </>
  );
};

export default Footer_li;
