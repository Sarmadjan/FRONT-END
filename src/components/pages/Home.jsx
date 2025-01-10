import Button from "../button/Button";
import img2 from "../images/p2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import img3 from "../images/p3.jpg";
import { NavLink } from "react-router-dom";

import "./home.css";
import Img1 from "../images/p1.jpg";
import Card from "../Card";
import Img4 from "../images/p4.jpg";
import { useEffect } from "react";
// import m1 from "../images/m1.jpg";
// import m2 from "../images/m2.jpg";
import Button_Rm from "../button/Button-Rm";
import TeamCard from "../TeamCard";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      offset: 120,
    });
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row bg-black text-light first-sec ">


          <div className="col-md-10 p-md-3  mx-auto main-heading my-md-5 ">
            <div className="col-md-7 pt-3 mt-5">
              <div className="">
                {" "}
                <h1>
                  {" "}
                  Innovative  <span> Solutions For </span>
                  Digital <span> Excellance</span>{" "}
                </h1>
              </div>
            </div>
            <div className=" col-md-6 my-3 my-md-5 ">
              <p>
                Woltrio is a dynamic agency that specializes in website development, digital marketing, 3D animations, and video editing, committed to helping brands thrive in the digital world.
              </p>
            </div>

            <div className=" row d-flex align-items-center">
              <div className="col-md-3 m-0">
                <NavLink to="/services">
                  <Button text="WHAT WE DO" />
                </NavLink>
              </div>

              <div className="ms-md-4 col-md-2  ">
                <NavLink to="/portfolio">
                  <Button_Rm text="Read more" color="white" />
                </NavLink>
              </div>

              <a
                href="#section-2"
                className=" ms-auto mb-md-0 mb-3  "
                style={{
                  position: "relative",
                  height: "70px",
                  width: "70px",
                  backgroundColor: "#ff9800",
                  borderRadius: "50%",
                }}
                >
                <div
                  className="inner-cir text-center pt-1"
                  style={{
                    right:"10px",
                    top: "27%",
                    left: "25%",
                    position: "absolute",
                    height: "3px",
                    width: "3px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                  }}
                 >
                  <svg
                    style={{ width: "15px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="white"
                      d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="section-2" className="container-fluid">
        <div className="col-10 mx-auto">
          <div className="row  d-flex justify-content-between">
            <div
              className="col-md-5 main-heading pt-md-5 mt-md-5 "
              data-aos="fade-up"
            >
              <h1 className="pt-5">
                Discover <br /> our <span> studio</span>
              </h1>
              <p className="mt-md-5 pp " data-aos="fade-up">
                At our design studio, we are a collective of talented
                individuals ignited by our unwavering passion for transforming
                ideas into reality. With a harmonious blend of diverse
                backgrounds and a vast array of skill sets, we join forces to
                create compelling solutions for our esteemed clients. <br />
                <br />
                Collaboration is at the heart of what we do. Our team thrives on
                the synergy that arises when unique perspectives converge,
                fostering an environment of boundless creativity. By harnessing
                our collective expertise, we produce extraordinary results that
                consistently surpass expectations.
              </p>
              <div className="row">
                <div className="col-12 mt-md-5 my-5 d-flex align-items-center ">
                  <div className="" data-aos="fade-right">
                    <img
                      className="rounded-circle"
                      src={img2}
                      alt=""
                      width={"90px"}
                      height={"90px"}
                    />
                  </div>

                  <div className="ms-3" data-aos="fade-up">
                    {" "}
                    <span>
                      Passionately Creating Design Wonders: <br />
                      Unleashing Boundless Creativity
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5 pt-md-5 pb-5 " data-aos="fade-up">
              <img className="img-fluid mt-md-5" src={Img1} alt="img1" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-black mt-md-5 sec-3">
        <div className="col-10 mx-auto pt-md-5">
          <div className="col-md-4 ms-auto pt-5 ">
            <p className="text-md-end text-center  " data-aos="fade-up">
              Professionals focused on helping your brand <br />
              grow and move forward.
            </p>
          </div>
          <div className="row d-flex justify-content-center py-5 text-light main-heading line-center  ">
            <div
              className="col-md-3 d-flex justify-content-md-end justify-content-center "
              data-aos="fade-up">
              <img src={img3} alt="" className="img3 px-auto   " />
            </div>
            <div
              className="col-md-5  text-center mt-4 text-light"
              data-aos="fade-up"
            >
              <h1>
                Uniques <span> Ideas</span> <br />
              </h1>
            </div>
            <div className="row text-center" data-aos="fade-up">
              <h1>
                For Your <span> Buisness.</span>
              </h1>
            </div>
          </div>
          <div className="row gy-5 py-md-0 py-4 d-flex my-5 ">
            <div
              className=" col-md-3 border border-dark-subtle border-bottom-0  "
              data-aos="fade-up"
            >
              <Card heading="Website  " heading2=" Development" data="Bring your ideas to life with our stunning 3D animations. We specialize in creating captivating visuals that communicate your message effectively, whether for advertisements, presentations, or product showcases."
              />

            </div>
            <div
              className=" col-md-3 border border-dark-subtle border-bottom-0"
              data-aos="fade-up"
            >
              <Card heading="Digital  " heading2="Marketing"
                data="Bring your ideas to life with our stunning 3D animations. We specialize in creating captivating visuals that communicate your message effectively, whether for advertisements, presentations, or product showcases."

              />

            </div>
            <div
              className=" col-md-3 border border-dark-subtle border-bottom-0"
              data-aos="fade-up"
            >
              <Card
                heading="3D   "
                heading2="Animations"
                data="Bring your ideas to life with our stunning 3D animations. We specialize in creating captivating visuals that communicate your message effectively, whether for advertisements, presentations, or product showcases."

              />

            </div>
            <div
              className=" col-md-3 border border-dark-subtle border-bottom-0"
              data-aos="fade-up"
            >
              <Card heading="Video  " heading2="Editing" data="Bring your ideas to life with our stunning 3D animations. We specialize in creating captivating visuals that communicate your message effectively, whether for advertisements, presentations, or product showcases."
              />

            </div>
          </div>
        </div>
      </div>




      <div className="col-10 mx-auto my-5 ">
        <div className="row d-flex justify-content-between">
          <div
            className="col-md-5  main-heading team-sec mt-md-5"
            data-aos="fade-right">
            <h1>
              Meet <br />
              Our Team
            </h1>

            <p className="my-5 text-dark" data-aos="fade-up">
              We are talented individuals who are passionate about bringing
              ideas to life. With a diverse range of backgrounds and skill sets,
              we collaborate to produce effective solutions for our clients.{" "}
              <br /> <br /> <br />
              Together, our creative team is committed to delivering impactful
              work that exceeds expectations.
            </p>
            <NavLink to="/team">
              <Button text="Our Team" />
            </NavLink>

            <h3 className="my-5" data-aos="fade-up">
              <span>We</span> delivering <br />
              <span>expectational</span> results
            </h3>
          </div>
          <div className="col-md-5" data-aos="fade-up">
            <span>
              {" "}
              <p className="text-end">The Founders of our agency</p>
            </span>
            <div className="row gx-5 gy-5" data-aos="fade-up">

              <div className="col-md-6 col-12 pt-md-0 pt-5 ">
                <TeamCard
                  name="Ehtisham Ilyas"
                  imgsrc={Img4}
                  title={"ART DIRECTOR"}
                  linkedin="https://www.linkedin.com/in/ehtisham-ilyas/" />

              </div>


              <div className="col-md-6 col-12  ">
                <TeamCard
                  name="Yasir Khan"
                  imgsrc={Img4}
                  title={"ART DIRECTOR"}
                  linkedin="https://www.linkedin.com/in/yasir-khan-a58677137/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                />
              </div>

              <div className="col-md-6 col-12 pt-md-0 pt-5 ">
                <TeamCard
                  name="Sher (Ali) Khan"
                  imgsrc={Img4}
                  title={"ART DIRECTOR"}
                  linkedin="https://www.linkedin.com/in/sharewithsher/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                />
              </div>
              <div className="col-md-6 col-12 pt-md-0 pt-5 ">
                <TeamCard
                  name="Waqas Hussain"
                  imgsrc={Img4}
                  title={"ART DIRECTOR"}
                  linkedin="https://www.linkedin.com/in/waqas-hussain-a2637b15b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  <div
        className="container-fluid"
        style={{ backgroundColor: "rgb(227, 221, 221)" }}
      >
        <div className="col-10 mx-auto mt-5 ">
          <div className="row">
            <div
              className="col-6 d-flex ms-auto text-end my-5"
              data-aos="fade-up"
            >
              <p
                className="me-3 "
                data-aos="fade-up"
                style={{ fontSize: "16px", color: "rgba(0, 0, 0, .5)" }}
              >
                Customer reviews are a valuable source <br />
                of information for both businesses and consumers.
              </p>
            </div>
            <div
              className="col-8 mx-auto main-heading text-center"
              data-aos="fade-up"
            >
              <h1>
                Customer <span>Voices:</span> <br />
                Hear what <span> They Say</span>
              </h1>
            </div>
          </div>
          <div className="col text-center" data-aos="fade-up">
            <svg
              style={{ width: "3%", fill: " #ff9800" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z" />
            </svg>
          </div>
        </div>
      </div> */}


      {/* <div className="container">
        <div className="row">
          <div
            className="col-md-12 d-flex justify-content-between align-items-center my-5"
            data-aos="fade-up"
          >
            <h2>
              <b> Popular Publications:</b>
            </h2>
            <span>
              <Button_Rm text="View All" />
            </span>
          </div>
          <div className="col-md-6 pe-3" data-aos="fade-up">
            <div className="row">
              <div className="col-12">
                <div className="dii" data-aos="fade-up">
                  {" "}
                  <img src={m1} className="img-fluid imggg" alt="..." />
                </div>
                <p className="mt-3 " style={{ color: " #ffa500" }}>
                  DESIGN{" "}
                  <span
                    className="ms-5"
                    data-aos="fade-up"
                    style={{ color: "black" }}
                  >
                    {" "}
                    DECEMBER 2,2023
                  </span>
                </p>
                <h3>how to become a graphic designer in 10 simple steps</h3>
                <p>
                  Are you passionate about design and interested in pursuing a
                  career as a graphic designer? Graphic design is a dynamic..
                </p>
                <div>
                  <Button_Rm text="Read more" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pe-3">
            <div className="row pb-5">
              <div className="col-12 mb-5" data-aos="fade-up">
                <div className="dii">
                  <img src={m2} className="img-fluid" alt="..." />
                </div>
                <p className="mt-3 " style={{ color: " #ffa500" }}>
                  DESIGN{" "}
                  <span
                    className="ms-5"
                    data-aos="fade-up"
                    style={{ color: "black" }}
                  >
                    {" "}
                    DECEMBER 2,2023
                  </span>
                </p>
                <h3>how to become a graphic designer in 10 simple steps</h3>
                <p>
                  Are you passionate about design and interested in pursuing a
                  career as a graphic designer? Graphic design is a dynamic..
                </p>
                <div>
                  <Button_Rm text="Read more" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
