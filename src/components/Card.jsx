/* eslint-disable react/prop-types */
import "./card.css";
const Card = (props) => {
  return (
    <div>
      <div className="p-2 ">
        <span className="fs-4 text-white">
          {props.heading}
          <span>{props.heading2}</span>
        </span>
        <p className="">{props.deatail}</p>
      </div>
      <div className="m-card">
        <div className="content">
          <p>{props.data}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
