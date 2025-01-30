/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const Li2 = (props) => {
  return (
    <li className="my-md-1 " >
      <NavLink onClick={() => {
        window.scrollTo(0.0)
      }} className=" li2" to={props.path}>
        <span >{props.name}</span>
      </NavLink>
    </li>
  );
};

export default Li2;
