/* eslint-disable react/prop-types */
import "../components/pages/home.css";

const Imgg = (props) => {
  return (
    <div className="col-12 mb-5" data-aos="fade-up">
      <div className="dii">
        <img src={props.path} className="img-fluid" alt="..." />
      </div>
      <p className="mt-3 fs-5 " style={{ color: " #ffa500" }}>
        TECHNOLOGY{" "}
        <span className="ms-5 " data-aos="fade-up" style={{ color: "black" }}>
          {" "}
          Nov,14,2023
        </span>
      </p>
      <h4>{props.title}</h4>
    </div>
  );
};

export default Imgg;
