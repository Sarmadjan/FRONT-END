import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import Project_card from './Project_card'


import { motion } from 'framer-motion';


import ButtonD from "../button/ButtonD";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";

const Portfolio = () => {
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

    >

      <div className="col-md-10 mx-md-auto px-md-0 px-3 m-0 main-heading">
        <Navbar />

        <div className="row m-0">
          <div

            className="col-md-7 mt-5 py-5"
            style={{ paddingTop: "80px", paddingBottom: "80px" }}
          >
            <div className="pt-5">
              {" "}
              <h1
              >
                {" "}
                Designing a <br /> better
                <span> World Today</span>{" "}
              </h1>
            </div>
          </div>
          <ButtonD text="Our works" />
        </div>

        {/* <div className="row d-flex  justify-content-between   my-5 py-5 ">
          <div className="col-md-5 " data-aos="fade-up">
            <Imgg path={Img1} title="Interior design studio" />
          </div>
          <div className="col-md-5 pt-md-5 m-0">
            {" "}
            <Imgg path={Img2} title="Home Security Camera" />
          </div>

          <div className="col-md-5 pt-md-5">
            <Imgg path={Img3} title="Kemia Honest Skincare" />
          </div>
          <div className="col-md-5">
            <Imgg path={Img4} title="Cascade of Lava" />
          </div>
          <div className="col-md-5">
            <Imgg path={Img5} title="Air Pro by Molekule" />
          </div>
          <div className="col-md-5 pt-md-5">
            <Imgg path={Img6} title="Tony Chocolonely" />
          </div>
        </div> */}
      </div>








      {/* CLOSING OF COL-100000  */}
      <div className="row g-0">
        <div className="col-md-10 mx-auto d-flex   flex-wrap">
          <div className="col-md-6  mt-5 ">
            <Project_card imgpath="/images/Projects/IC360.png" title="IC360" detail="Firnas.tech leverages transformative technologies to accelerate our enterprise software development for unique business needs." />
          </div>
          <div className="col-md-6  mt-5">
            <Project_card imgpath="/images/Projects/blissiree.png" title="Blissiree" detail="Firnas.tech leverages transformative technologies to accelerate our enterprise software development for unique business needs." />
          </div>
          <div className="col-md-6  mt-5">
            <Project_card imgpath="/images/Projects/innovo.png" title="Innovo" detail="Firnas.tech leverages transformative technologies to accelerate our enterprise software development for unique business needs." />
          </div>
          <div className="col-md-6  mt-5">
            <Project_card imgpath="/images/Projects/swiftreels.png" title="Swiftreels" detail="Firnas.tech leverages transformative technologies to accelerate our enterprise software development for unique business needs." />
          </div>
        </div>
      </div>


      <div className="row g-0 ">
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
            className="row g-0 main-heading text-center px-5 "
            data-aos="fade-up"
          >
            <h1>
              {" "}
              Ready to bring your <span> ideas to</span> Life? <br />
              We are <span> Here to help</span>{" "}
            </h1>
          </div>

          <div className="row g-0 pb-5 " data-aos="fade-up">
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

export default Portfolio;
