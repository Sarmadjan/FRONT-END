/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavLi = (props) => {
  return (
    <li className="nav-item ">
      <Link className="nav-link" to={props.path} onClick={() => { window.scrollTo(1, 1) }}>
        {props.name}
      </Link>
    </li>
  )
}

export default NavLi
