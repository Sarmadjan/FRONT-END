import "./home.css";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import '../Charges.css';
import Python_FAQ_s from '../Python_FAQ_s  ';
import Node_FAQ_s from '../Node_FAQ_s ';
import PHP_FAQ_s from "../PHP_FAQ_s ";
import Firebase_FAQ_s from "../Firebase_FAQ_s ";

import ButtonD from "../button/ButtonD";
import Button_Rm from "../button/Button-Rm";

import Charges from "../Charges";
import Service_card from "../Service_card";
import Navbar from "../Navbar";
const Back_end = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      offset: 120,
    });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row bg-white text-dark first-sec m-0 ">
      <Navbar/>
        <div className="col-md-10 p-md-3 px-md-0 px-2  mx-auto main-heading  ">

          <div className="col-md-7 pt-md-5 pt-2 mt-md-5 mt-2">
            <div className="pt-md-5 pt-2 " >
              {" "}
              <h1 className="pt-md-0 pt-5  mt-5">
                {" "}
                Back-end <br /><span> Development </span>
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

          <div className="row my-md-5 d-flex align-items-center" >
            <div className="col-md-6 my-md-5 ">
              <div className="col  my-md-5" data-aos="fade-up">
                <h2>
                  Python
                  <i className="ms-5">
                    <svg width={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" /></svg>
                  </i>
                </h2>
              </div>
              <div className="col-md-8 m-0 " data-aos="fade-up">
                <p className="text-black-50 ">
                  Python’s versatility and simplicity make it a top choice for building scalable, data-driven applications. From APIs to automation, it handles backend development with precision and reliability.  </p>
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
              <Python_FAQ_s />
            </div>
          </div>
          <div className="row my-md-5 d-flex align-items-center" >
            <div className="col-md-6 my-md-5 ">
              <div className="col  my-md-5" data-aos="fade-up">
                <h2>
                  Node
                  <i className="ms-5">
                    <svg width={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2 .7 376.3 .7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" /></svg>
                  </i>
                </h2>
              </div>
              <div className="col-md-8 m-0 " data-aos="fade-up">
                <p className="text-black-50 ">
                  Node.js excels in creating fast, scalable, and real-time backend systems. Its event-driven architecture makes it perfect for applications requiring high performance and low latency.  </p>
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
              <Node_FAQ_s />
            </div>
          </div>





          <div className="row  d-flex align-items-center" >
            <div className="col-md-6 my-md-5 ">
              <div className="col  my-md-5" data-aos="fade-up">
                <h2>
                  PHP

                  <i className="ms-4">
                    <svg width={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" /></svg>  </i>
                </h2>
              </div>
              <div className="col-md-8 m-0 " data-aos="fade-up">
                <p className="text-black-50 ">PHP is a proven backend language, powering millions of websites and applications. With its rich ecosystem, it’s perfect for building secure and dynamic platforms.   </p>
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
              <PHP_FAQ_s />
            </div>
          </div>





          <div className="row  d-flex align-items-center" >
            <div className="col-md-6 my-md-5 ">
              <div className="col  my-md-5" data-aos="fade-up">
                <h2>
                  Firebase
                  <i className="ms-4"><svg width={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="black" d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z" /></svg>
                  </i>
                </h2>
              </div>
              <div className="col-md-8 m-0 " data-aos="fade-up">
                <p className="text-black-50 ">
                  Firebase is a comprehensive Backend-as-a-Service (BaaS) platform that accelerates development by providing real-time database management, authentication, hosting, and more. Its powerful tools allow developers to focus on building features rather than infrastructure.  </p>
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
              <Firebase_FAQ_s />
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
    
        </div>

        <NavLink to={"/contact"} onClick={() => { window.scrollTo(0.0) }} className="hovv2 col-md-3 my-5 col-sm-8 py-3 mt-5 mx-auto d-flex align-items-center justify-content-between px-5 " >
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
      <div className="row ">
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
          <div className="row my-md-5 my-2 g-3" >
            <div className="col-md-4  " data-aos="fade-right">
              <Service_card service="Web Development" detail="Our website development service combines cutting-edge technology with creative design to build responsive, user-friendly sites that drive engagement and enhance your online presence, tailored to meet your unique business needs." />

            </div>
            <div className="col-md-4" data-aos="fade-up">
              <Service_card service="Digital Marketing" detail="Accelerate your growth with our digital marketing expertise. We create tailored strategies that include SEO, social media, and content marketing to boost visibility, attract customers, and convert leads into sales effectively." />
            </div>
            <div className="col-md-4" data-aos="fade-left">
              <Service_card service="3D Animations" detail="Bring your ideas to life with our stunning 3D animations. We specialize in creating captivating visuals that communicate your message effectively, whether for advertisements, presentations, or product showcases." />
            </div>


          </div>



        </div>
      </div>

    </div>
  );
};

export default Back_end;
