/* eslint-disable react/prop-types */

import "./card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <div className="m-card mx-0 my-md-0  ">
        <div className="p-2 pt-4 main-card2">
          <span className="fs-4 text-white">
            {props.heading}
            <span>{props.heading2}</span>
          </span>
          <p className="">{props.deatail}</p>
        </div>

        <div className="content2 px-2 ">
          <p className="text-light mb-5">{props.data}</p>
          <div className="row">
            <Link

              onClick={() => {
                window.scrollTo(1.1);
              }}
              to={props.path}
            >
              <div
                className="inner-cir text-center ms-3 mb-5 me-auto"
                style={{
                  position: "absolute",
                  top: "80%",
                }}
              >
                <i>
                  <svg
                    style={{ width: "15px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="white"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </i>
              </div>

            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;