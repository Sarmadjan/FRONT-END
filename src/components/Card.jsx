const Card = (props) => {
  return (
    <div>
      <div className="p-2">
        <span className="fs-4 text-white">
          {props.heading}
          <span>{props.heading2}</span>
        </span>
        <p className="">{props.deatail}</p>
      </div>
    </div>
  );
};

export default Card;
