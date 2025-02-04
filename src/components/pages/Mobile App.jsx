import "./home.css";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import '../Charges.css';
import { motion } from 'framer-motion';
import ButtonD from "../button/ButtonD";
import Button_Rm from "../button/Button-Rm";

import Charges from "../Charges";
import Service_card from "../Service_card";

import Navbar from "../Navbar";
import Button from "../button/Button";
import FAQFlutter from "../Flutter_FAQ-s";
import FAQNative from "../Native_FAQ-s";

const MobileApp = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      offset: 120,
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .1 }}
      style={{ overflow: "hidden" }}
      className="container-fluid mx-0 px-0">
      <div className="row bg-white text-dark first-sec m-0 ">

        <div className="col-md-10   mx-auto main-heading  ">
          <Navbar />
          <div className="col-md-7 pt-md-5 pt-2 mt-md-5 mt-2">
            <div className="pt-md-5 pt-2 " >
              {" "}
              <h1 className="pt-md-0 pt-5 p-2  mt-5">
                {" "}
                Mobile App <br /><span> Development </span>
              </h1>
            </div>
          </div>

          <div className=" row d-flex align-items-center">
            <div className="col-my-5 my-3 mb-md-5">
              <NavLink href="#sec-1" >
                <ButtonD color="grey" text="About service" fill="black" />
              </NavLink>
            </div>
          </div>
          <div className="p-2">

            <div id="sec-1" className="row my-md-5 d-flex align-items-center" >
              <div className="col-md-6 my-md-5 ">
                <div className="col  my-5" data-aos="fade-up">
                  <h2 >
                    React Native
                    <i className="ms-5">
                      <svg width={70} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" /></svg>
                    </i>
                  </h2>
                </div>
                <div className="col-md-8 m-0 " data-aos="fade-up">
                  <p className="text-black-50 ">
                    React Native is a powerful framework for building mobile applications using JavaScript.
                    It enables developers to create fast and interactive user interfaces with a component-based architecture,
                    ensuring performance and scalability. Ideal for modern, cross-platform mobile apps.  </p>
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
              <div className="col-md-6  bg-body-secondary rounded-1  mt-3  p-3" data-aos="fade-up">
                <FAQNative />
              </div>
            </div>

            <div className="row  d-flex align-items-center" >
              <div className="col-md-6 my-md-5 ">
                <div className="col-md-6  my-5" data-aos="fade-up">
                  <h2>
                    Flutter

                    <i className="ms-4">
                      <svg width={70} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M429.5 236.3L291.7 374.1 429.5 512H272l-59.1-59.1-78.8-78.8L272 236.3H429.5zM272 0L16 256l78.8 78.8L429.5 0H272z" /></svg></i>
                  </h2>
                </div>
                <div className="col-md-8  " data-aos="fade-up">
                  <p className="text-black-50 ">
                    Flutter offers simplicity and versatility, making it an excellent choice for building sleek and efficient frontends. Its fast development cycle and extensive widget library make it ideal for both small-scale projects and large applications.</p>  </div>
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
              <div className="col-md-6  bg-body-secondary rounded-1  mt-3  p-3" data-aos="fade-up">
                <FAQFlutter />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="row  bg-black  main-heading  pt-5 ">
        <div className="col-md-10 mx-auto">
          <div className="col-md-7 text-center mx-auto">
            <h1 className="text-white mt-md-5 mt-2" data-aos="fade-up">
              Reasonable <span>prices</span> <br />
              for innovative <span>solutions</span>
            </h1>
          </div>
          <div className="row  bg-black">
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

      <div className="row  bg-black " data-aos="fade-up">
        <div className="col-md-10 mx-auto" data-aos="fade-up">
          <div>
            <Charges path="/contact" />

          </div>
        </div>

        <div className="my-4">

          <NavLink to={"/contact"}>
            <Button text="INDIVIDUAL SERVICE" />
          </NavLink>
        </div>
      </div>
      <div className="row  ">
        <div className="col-md-10  mx-auto">
          <div className="d-flex justify-content-between  align-items-center ">
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

          <div className="row my-md-5 my-2 g-3 ">
            <div className="col-md-4  " data-aos="fade-right">
              <Service_card service="Front-end Development" path="/frontend" detail="We craft visually stunning, user-friendly interfaces that provide seamless experiences on all devices. With the latest tech stack and responsive design, we ensure your website not only looks great but performs flawlessly, helping you stand out in a crowded digital landscape." one="Modern Tech Stack & Frameworks " two="User-Centric & Responsive Design " three="Optimized Performance & SEO " four="Scalability & Maintainability" />

            </div>
            <div className="col-md-4  " data-aos="fade-right">
              <Service_card service="Back-end Development" path="/backend" detail="Our backend solutions are designed to be robust, scalable, and secure. We build powerful infrastructures that ensure smooth data flow, high performance, and future scalability empowering your business with the reliable systems needed to thrive in today’s fast-paced world. " one="1.	Robust & Scalable Architecture" two="Secure & Efficient Data Management" three="High-Performance APIs & Integrations" four="Cloud & DevOps-Ready Solutions" />

            </div>
            <div className="col-md-4" data-aos="fade-up">
              <Service_card service="WordPress & Shopify " path="/wordpress" detail="From custom WordPress websites to high-performance Shopify stores, we build flexible, easy-to-manage platforms that scale with your business. Our solutions combine style with functionality to deliver a seamless user experience and maximize your online presence." one="Custom & Scalable Solutions " two="Performance & SEO Optimization " three="Secure & Seamless Integrations " four=" Ongoing Support & Maintenance" />
            </div>

          </div>
        </div>
      </div>
      <div className="row mx-auto  ">
        <div className="col-md-10 p-0 main-heading mx-auto text-center">
          <div className="col mt-md-5 mb-5">
            <h1 className="shadowtxt">
              Why Woltrio?
            </h1>

            <p className="my-md-3  mb-5 my-2 col-md-7 mx-auto text-black">
              Our dedicated team ensures that your website is not only visually appealing but also functional, secure, and optimized for conversions. From startups to established enterprises, we’ve got the expertise to elevate your online presence.
            </p>
          </div>
        </div>
      </div>
      <div className="row bg-body-secondary m-0 ">
        <div className="col-md-10 mx-auto  " data-aos="fade-up">
          <div
            className="col-md-5 ms-auto text-end text-dark py-5"
            data-aos="fade-up"
          >
            <span className="text-light-emphasis">
              {" "}
              Looking to make your mark? We will help you turn <br />
              your project into a success story.{" "}
            </span>
          </div>

          <div
            className="row g-o main-heading text-center px-5 "
            data-aos="fade-up"
          >
            <h1>
              {" "}
              Ready to bring your <span> ideas to</span> Life? <br />
              We are <span> Here to help</span>{" "}
            </h1>
          </div>

          <div className="row g-o pb-5 " data-aos="fade-up">
            <div className=" ">
              {" "}
              <NavLink to="/contact">
                <Button text="Contact Us" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default MobileApp;
