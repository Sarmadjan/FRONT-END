/* eslint-disable react/prop-types */
import "./Button.css";
const Button = (props) => {
  return (
    <div className="input-group input-group-lg w-50 mt-4 ">
      <div className="custom-input-wrapper ">
        <button onClick={()=>{
          window.scrollTo(0,0)
        }} className="custom-button px-5 jhjh" style={{ color: props.color }}>{props.text}</button>
        <button className="custom-arrow-btn ">
          <svg
            style={{ width: "30px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
            fill="white" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>{" "}
        </button>
      </div>
      <div> </div>
    </div>
  );
};

export default Button;
