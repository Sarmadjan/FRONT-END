import "./home.css";
import { Link, NavLink } from "react-router-dom";

import ButtonD from "../button/ButtonD";
import Button_Rm from "../button/Button-Rm";
import FAQ_s from "../FAQ_s";
import Charges from "../Charges";
const S_service = () => {
  return (
    <>
      <div className="row bg-white text-dark first-sec m-0 ">
        <div className="col-md-10 p-md-3 px-md-0 px-2  mx-auto main-heading  ">
          <div className="col-md-7 pt-md-5 pt-2 mt-md-5 mt-2">
            <div className="pt-md-5 pt-2 ">
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

          <div className="row my-md-5">
            <div className="col-md-6 my-md-5 ">
              <div className="col-md-6 my-md-5">
                <h3>
                  Your <span>Approach</span>
                  <br />
                  and <span>Work Specifics</span>
                </h3>
              </div>
              <div className="col-md-8 m-0 ">
                <p className="text-black-50 ">
                  At our agency, we have a unique approach to web design and
                  development. We believe in creating websites that not only
                  look great but also perform well in terms of user experience,
                  functionality, and search engine optimization.
                </p>
              </div>
              <div className="col-8 ">
                <Link
                  to="/portfolio"
                  onClick={() => {
                    window.scrollTo(1.1);
                  }}
                >
                  <Button_Rm color="grey" text="our work" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 bg-body-secondary rounded-1 pb-md-5 mt-md-5 p-3">
              <FAQ_s />
            </div>
          </div>
        </div>
      </div>

      <div className="row g-0 bg-black m-o main-heading  pt-5 ">
        <div className="col-md-10 mx-auto">
          <div className="col-md-7 text-center mx-auto">
            <h1 className="text-white mt-md-5 mt-2">
              Reasonable <span>prices</span> <br />
              for innovative <span>solutions</span>
            </h1>
          </div>
          <div className="row bg-black">
            <div className="col-md-5 text-center mx-auto mt-md-5 pb-5 mt-3">
              <p>
                At our agency, we have a unique approach to web design and
                development. We believe in creating in terms of user experience,
                functionality.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="row g-0 bg-black">
        <div className="col-md-10 mx-auto">
          <Charges path="/" />
          <Charges path="/services" />
        </div>
      </div>

    </>
  );
};

export default S_service;
