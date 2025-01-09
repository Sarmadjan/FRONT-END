/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './Charges.css';

const Charges = (props) => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      offset: 120,
    });
  }, []);
  return (
    <NavLink onClick={() => { window.scrollTo(0.0) }} to={props.path}>
      <div >
        <div className=" hovv col-md-12 d-flex flex-wrap pt-3 pb-3 px-2 align-items-center text-center border border-start-0 border-end-0">

          <div className="col-md-2 col-4 ">
            <p className="fs-4 text-warning">{props.plan} </p>
          </div>
          <div className="ps-md-5 ps-4 me-auto col-md-2 col-4 position-relative" data-aos="fade-right">
            <span
              style={{ top: "45px", left: "42%" }}
              className="position-absolute  pe-5"
            >
              
            </span>{" "}
            <p className="text-nowrap"
              style={{ fontSize: "40px", color: "orange", marginLeft: "10px" }}
            >
             ${props.price}
            </p>
          </div>

          <div className="col-md-2 col-4 ps-4 fs-4 px-2 me-auto text-center" data-aos="fade-up">
            <span className="fs-5" >{props.Pages}  </span>
          </div>

          <div className="col-md-2 col-4 ps-4" data-aos="fade-up">
            <span >
              {props.services}
            </span>
          </div>

          <div className="col-md-2 col-4 ps-4" data-aos="fade-up">
            <span >

              {props.revisions}
            </span>
          </div>
          <div className="col-md-2 col-4 my-3 ps-4" data-aos="fade-left">
            <div
              style={{
                margin: "0 auto",
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                backgroundColor: "orange",
              }}
            >
              <i>
                <svg
                  style={{ marginLeft: "2px", marginTop: "9px", width: "18px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </i>
            </div>
          </div>
        </div>
      </div>

    </NavLink>
  );
};

export default Charges;
