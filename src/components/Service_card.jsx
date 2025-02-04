/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Button_Rm from "./button/Button-Rm";
import "./TeamCard.css";

const Service_card = (props) => {
  return (
    <div className="servicehover h-100"> {/* Ensure card stretches */}
      <div className="card-container p-3 p-md-5 border m-0 d-flex flex-column h-100"> {/* Flexbox applied */}
        <h2>{props.service}</h2>

        <p className="text-black my-3 flex-grow-1"> {/* Allows content to expand */}
          {props.detail}
        </p>

        <div className="row">
          <ul className="lihover">
            {[props.one, props.two, props.three, props.four].map((item, index) => (
              item && (
                <li key={index} className="py-3 px-0 mx-0 w-100 border border-start-0 border-end-0 text-uppercase">
                  <b>{item}</b>
                </li>
              )
            ))}
          </ul>
        </div>

        <div className="row mt-auto"> {/* Push button to bottom */}
          <NavLink onClick={() => { window.scrollTo(0.0) }} to={props.path}>
            <Button_Rm text="Read more" fill="black" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Service_card;
