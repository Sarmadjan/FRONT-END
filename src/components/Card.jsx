/* eslint-disable react/prop-types */
import "./card.css";
const Card = (props) => {
  return (
    <div>
      <div className="p-2 pt-4 ">
        <span className="fs-4 text-white ">
          {props.heading}
          <span>{props.heading2}</span>
        </span>
        <p className="">{props.deatail}</p>
      </div>
      <div className="m-card">
        <div className="content my-5 px- ">
          <p>{props.data}</p>
          <div
            className="inner-cir text-center me-auto mb-4"
            style={{

              height: "35px",
              width: "35px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          >
            <svg
              style={{ width: "15px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
               <path
                fill="white"
                d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              />
            </svg>
          </div>
        </div>


        <div>

        </div>

      </div>
    </div>
  );
};

export default Card;
