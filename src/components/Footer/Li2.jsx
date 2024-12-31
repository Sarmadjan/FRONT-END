/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const Li2 = (props) => {
  return (
    <li >
      <NavLink className=" li2" to={props.path}>
        <span style={{color: 'rgba(220, 209, 209, 0.4)'}} className="">{props.name}</span>
      </NavLink>
    </li>
  );
};

export default Li2;
