/* eslint-disable react/prop-types */
import "./card.css";
const Card = (props) => {
  return (
    <div>
      <div className="p-2 pt-4 ">
        <div>
        <span className="fs-4 text-white ">
          {props.heading}
          <span>{props.heading2}</span>
        </span>
        </div>
        <div>
        <p className="mt-4">{props.detail}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
