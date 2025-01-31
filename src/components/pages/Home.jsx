import Button from "../button/Button";

import AOS from "aos";
import "aos/dist/aos.css";
import img3 from "../images/p3.jpg";
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import TeamCard from "../TeamCard";
import "./home.css";

import Card from "../Card";
import { useEffect } from "react";
import { ParticleEffect } from "../../assets/particles";

import Button_Rm from "../button/Button-Rm";
import Navbar from "../Navbar";
import Tech from "../Tech";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      offset: 120,
    });
  }, []);
  useEffect(() => {
    // Load LinkedIn's profile badge script
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .1 }}
    >

      <div className="row g-0 bg-black text-light first-sec ">

        <ParticleEffect>
          <div className="col-md-10 pb-5  mx-auto main-heading mb-md-5 ">
            <Navbar />

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
              <motion.div className="col-md-3 mb-5 mb-md-0 m-0">
                <NavLink to="/services">
                  <Button text="WHAT WE DO" />
                </NavLink>
              </motion.div>

              <div className=" d-none d-md-block ms-md-4  col-md-2  ">
                <NavLink to="/portfolio">
                  <Button_Rm text="Read more" color="white" />
                </NavLink>
              </div>

              <a
                href="#section-2"
                className=" d-none d-md-block  ms-auto mb-md-0 mb-3  "
                style={{
                  position: "relative",
                  height: "70px",
                  width: "70px",
                  backgroundColor: "#ff9800",
                  borderRadius: "50%",
                }}
              >
                <div
                  className="inner-cir text-center "
                  style={{

                    right: "10px",
                    top: "25%",
                    left: "25%",
                    position: "absolute",
                    height: "35px",
                    width: "35px",
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
        </ParticleEffect>
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
                      style={{
                        objectFit: "cover"
                      }}
                      className=""
                      src="/images/LOGO.png"
                      alt=""
                      width={"50em"}

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
              <img className="img-fluid mt-md-5" src="/images/main.jpg" alt="img1" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row gx-o bg-light-subtle ">
          <div className="col mx-md-0 mx-5">
            <Tech />
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
          <div className="row gy-5 py-md-0 py-2 d-flex px-md-5 py-5 my-4 ">

            <div
              className=" col-md-3 border-effect border-effect2  border border-success border-opacity-25  border-md-bottom-0"
              data-aos="fade-up"
            >

              <Card heading="Website  " heading2=" Development" path="/frontend" data="Our expert team crafts innovative digital solutions through web development, and they develop blending sleek design with robust technology to deliver tailored, engaging, and responsive online experiences that amplify your brand."
              />

            </div>

            <div
              className=" col-md-3 border-effect border border-effect2  border-opacity-25 border-success  border-md-bottom-0"
              data-aos="fade-up"
            >
              <Card heading="2D " heading2="Animations" path="/2d_animation"
                data="Our 2D animation services deliver creative, eye-catching visuals that communicate your message with style. Whether for explainer videos, ads, or storytelling, we bring characters and concepts to life with smooth animation and vibrant artwork that resonate with viewers. "

              />

            </div>
            <div
              className=" col-md-3 border border-effect border-effect2 border-opacity-25 border-success  border-md-bottom-0"
              data-aos="fade-up"
            >
              <Card
                heading="3D "
                heading2="Animations"
                path="/3d_animation"
                data="Bring your ideas to life with our immersive 3D animation services. We create visually captivating animations that engage audiences, tell compelling stories, and elevate your brand with high quality models, textures, and dynamic motion  to make a lasting impact. "

              />

            </div>
            <div
              className=" col-md-3 border border-effect border-effect2 border-opacity-25 border-success   border-md-bottom-0"
              data-aos="fade-up"
            >
              <Card heading="Video" heading2="Editing" path="/video_editing" data="Transform raw footage into a captivating story with our expert video editing services. We combine cinematic techniques, motion graphics, and sound design to create high quality videos that engage, inform, and leave a lasting impression on your audience."
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

            <h3 className="mt-5" data-aos="fade-up">
              <span>We</span> delivering <br />
              <span>expectational</span> results
            </h3>
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <span>
              {" "}
              <p className="text-end">The Founders of our agency</p>
            </span>

            {/* BADGES FROM LINKEDIN */}

            <div className="row d-md-none justify-content-around d-sm-block gx-5 gy-5" data-aos="fade-up">

              <div className="col-md-6 col-12 pt-md-0 pt-2 ">
                <TeamCard
                  name="Ehtisham Ilyas"
                  imgsrc={'/images/Team/Ehtisham Ilyas.jfif'}
                  title={"DIRECTOR"}
                  linkedin="https://www.linkedin.com/in/ehtisham-ilyas/" />

              </div>

              <div className="col-md-6 pt-md-5 pt-2 col-12  ">
                <TeamCard
                  name="Yasir Khan"
                  imgsrc={'/images/Team/yasir khan.jfif'}
                  title={"DIRECTOR"}
                  linkedin="https://www.linkedin.com/in/yasir-khan-a58677137/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                />
              </div>

              <div className="col-md-6 col-12 pt-md-0 pt-2 ">
                <TeamCard
                  name="Shahid Naseem"

                  imgsrc={'/images/Team/Shahid.jfif'}
                  title={"Director"}
                  linkedin="https://www.linkedin.com/in/shahidnaseemofficial/" />

              </div>
              <div className="col-md-6 col-12 pt-md-5 pt-2 ">
                <TeamCard
                  name="Sher Khan"
                  imgsrc={'/images/Team/Sher Khan.jfif'}
                  title={"DIRECTOR"}
                  linkedin="https://www.linkedin.com/in/sharewithsher/"
                />
              </div>

            </div>

            <div className="row d-none d-md-flex justify-content-around  gy-5" data-aos="fade-up">

              <div className="col-md-5 rounded-lg pt-2   ">
                <div className="  badge-base LI-profile-badge" data-locale="en_US" data-size="small" data-theme="light" data-type="VERTICAL" data-vanity="ehtisham-ilyas" data-version="v1"><a className=" badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/ehtisham-ilyas?trk=profile-badge"></a></div> </div>

              <div className="col-md-5  pt-md-5  ">
                <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="small" data-theme="light" data-type="VERTICAL" data-vanity="yasir-khan-a58677137" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/yasir-khan-a58677137?trk=profile-badge"></a></div>

              </div>
              <div className="col-md-5   pt-2 ">
                <div className=" col-md-3 badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="shahidnaseemofficial" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/shahidnaseemofficial?trk=profile-badge"></a></div>
              </div>

              <div className="col-md-5   pt-md-5 ">
                <div className=" col-md-3 badge-base LI-profile-badge" data-locale="en_US" data-size="small" data-theme="light" data-type="VERTICAL" data-vanity="sharewithsher" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/sharewithsher?trk=profile-badge"></a></div>
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
      <div className="row bg-body-secondary g-0 ">
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
            className="row main-heading text-center px-5 "
            data-aos="fade-up"
          >
            <h1>
              {" "}
              Ready to bring your <span> ideas to</span> Life? <br />
              We are <span> Here to help</span>{" "}
            </h1>
          </div>

          <div className="row pb-5 " data-aos="fade-up">
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

export default Home;
