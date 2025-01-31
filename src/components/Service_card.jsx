/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import Button_Rm from "./button/Button-Rm";
import "./TeamCard.css";

const Service_card = (props) => {
  return (
    <div className="servicehover ">
      <div className=" p-3 p-md-5  border m-0   ">

        <h2 className="">
          {props.service}

        </h2>

        <p className="text-black my-3 ">
          {props.detail}
        </p>

        <div className="row">

          <ul className="lihover">
            <li className="py-3 px-0 mx-0 w-100 border border-start-0 border-end-0 text-uppercase">
              <b>{props.one}</b>

            </li>
            <li className="py-3 px-0 mx-0 w-100 border border-start-0 border-end-0 text-uppercase">
              <b> {props.two}</b>

            </li>
            <li className="py-3 px-0 mx-0 w-100 border border-start-0 border-end-0 text-uppercase">
              <b> {props.three}</b>

            </li>
            <li className="py-3 px-0 mx-0 w-100 border border-start-0 border-end-0 text-uppercase">
              <b> {props.four}</b>

            </li>
          </ul>

        </div>
        <div className="row">
          <NavLink onClick={() => { window.scrollTo(0.0) }} to={props.path}> <Button_Rm text="Read more" fill="black" /></NavLink>
        </div>

      </div>

    </div>
  )
}

export default Service_card;
