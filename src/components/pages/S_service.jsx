import "./home.css";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import '../Charges.css';

import ButtonD from "../button/ButtonD";
import Button_Rm from "../button/Button-Rm";
import FAQ_s from "../FAQ_s";
import Charges from "../Charges";
import Service_card from "../Service_card";
const S_service = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      offset: 120,
    });
  }, []);
  return (
    <>
      <div className="row bg-white text-dark first-sec m-0 ">
        <div className="col-md-10 p-md-3 px-md-0 px-2  mx-auto main-heading  ">
          <div className="col-md-7 pt-md-5 pt-2 mt-md-5 mt-2">
            <div className="pt-md-5 pt-2 " >
              {" "}
              <h1 className="pt-md-0 pt-5  mt-5">
                {" "}
                Branding <br /> and <span> identity design</span>
              </h1>
            </div>
          </div>

          <div className=" row d-flex align-items-center">
            <div className="col-my-5 my-3 mb-md-5">
              <NavLink to="#sec-down">
                <ButtonD color="grey" text="About service" fill="black" />
              </NavLink>
            </div>
          </div>

          <div className="row my-md-5" >
            <div className="col-md-6 my-md-5 ">
              <div className="col-md-6  my-md-5" data-aos="fade-up">
                <h3>
                  Your <span>Approach</span>
                  <br />
                  and <span>Work Specifics</span>
                </h3>
              </div>
              <div className="col-md-8 m-0 " data-aos="fade-up">
                <p className="text-black-50 ">
                  At our agency, we have a unique approach to web design and
                  development. We believe in creating websites that not only
                  look great but also perform well in terms of user experience,
                  functionality, and search engine optimization.
                </p>
              </div>
              <div className="col-8  " data-aos="fade-up">
                <Link
                  to="/portfolio"
                  onClick={() => {
                    window.scrollTo(1.1);
                  }}
                >
                  <Button_Rm color="grey" text="our work" data-aos="fade-up" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 bg-body-secondary rounded-1 pb-md-5 mt-md-5 p-3" data-aos="fade-up">
              <FAQ_s />
            </div>
          </div>
        </div>
      </div>

      <div className="row g-0 bg-black m-o main-heading  pt-5 ">
        <div className="col-md-10 mx-auto">
          <div className="col-md-7 text-center mx-auto">
            <h1 className="text-white mt-md-5 mt-2" data-aos="fade-up">
              Reasonable <span>prices</span> <br />
              for innovative <span>solutions</span>
            </h1>
          </div>
          <div className="row g-0 bg-black">
            <div className="col-md-5 text-center mx-auto mt-md-5 pb-5 mt-3" data-aos="fade-up">
              <p>
                At our agency, we have a unique approach to web design and
                development. We believe in creating in terms of user experience,
                functionality.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="row g-0 bg-black " data-aos="fade-up">
        <div className="col-md-10 mx-auto" data-aos="fade-up">

          <Charges path="/contact" />
          <Charges path="/services" />
        </div>

        <NavLink to={"/contact"} onClick={() => { window.scrollTo(0.0) }} className="hovv2 col-md-3 col-sm-8 py-3 mt-5 mx-auto d-flex align-items-center justify-content-between px-5 " >
          <div style={{ textTransform: "uppercase" }}> individual service</div>
          <div className="rounded-circle" style={{ backgroundColor: "black" }}>
            <svg
              style={{ width: "35px", backgroundColor: 'dark', padding: "10px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="white" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>{" "}
          </div>


        </NavLink>
      </div>
      <div className="row g-0">
        <div className="col-md-10 mx-auto">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="col-md-4 mt-3 ">
              <h2>
                Other services
              </h2>
            </div>
            <div className="col-md-4 ms-auto">

              <Link
                to="/portfolio"
                onClick={() => {
                  window.scrollTo(1.1);
                }}
              >
                <Button_Rm color="grey" text="our work" data-aos="fade-up" />
              </Link>

            </div>

          </div>
          <div className="row g-0">
            <div className="col-md-4">
              <Service_card />

            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>

          </div>



        </div>
      </div>

    </>
  );
};

export default S_service;
