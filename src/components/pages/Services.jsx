import { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import ButtonD from "../button/ButtonD";
import Button from "../button/Button";
import { motion } from 'framer-motion';


import ButtonD from "../button/ButtonD";
import Button_Rm from "../button/Button-Rm";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import Tech from "../Tech";
import { ParticleEffect } from "../../assets/particles";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      offset: 120,
    });
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .1 }}

        style={{ overflow: "hidden" }}>

        <div className="row bg-black mt-0">

          <div className="col-md-10 mx-auto px-md-0 px-4 pt-2 ">
            <Navbar />
            <ParticleEffect>
              <div
                className="col-7 pt-5 mt-md-5 mt-0 main-heading text-white"
                style={{ paddingTop: "80px", paddingBottom: "80px" }}
              >
                <div className="pt-5 ">
                  {" "}
                  <h1>
                    {" "}
                    This is <span>What</span> <br />
                    We do
                    <span> best</span>{" "}
                  </h1>
                </div>
              </div>
              <div className="me-auto">
                <a href="#sec-1">
                  {" "}
                  <ButtonD
                    text="OUR SERVICES"
                    color="#ffa500"
                    fill="#ffa500"
                  />{" "}
                </a>
              </div>
              <div id="sec-1" className="row d-flex txtt py-0 py-md-5 mt-md-5 mt-0">
                <div className="col-md-5"></div>
                <div className="col-md-7">
                  <div className="row ">
                    <div className="col-md-6 mt-md-5 pt-md-5">
                      <h4>Website Development</h4>
                      <p className="mt-4">
                        Our website development service combines cutting-edge technology with creative design to build responsive, user-friendly sites that drive engagement and enhance your online presence, tailored to meet your unique business needs.
                      </p>
                      <ul>
                        <li>UX Audits</li>
                        <li>Design thinking</li>
                        <li>Methodologies</li>
                        <li>Wireframing</li>
                      </ul>
                      <div>
                        <NavLink onClick={(() => { window.scrollTo(0.0) })} to="/frontend">
                          <Button_Rm
                            text="Read more"
                            color="#ffa500"
                            fill="#ffa500"
                          />
                        </NavLink>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4>2D Animated Explainer</h4>
                      <p className="mt-4">
                        {" "}
                        At Woltrio, we believe that every brand deserves a voice, and our handcrafted 2D explainers are the perfect way to amplify yours. Whether you’re launching a product, sharing a vision, or promoting a service, our animations are designed to leave a lasting impression.       </p>
                      <ul>
                        <li>Script Development</li>
                        <li>Storyboard Creation</li>
                        <li>Character Design</li>
                        <li>Animation and Motion Graphics</li>
                      </ul>
                      <div>
                        <Button_Rm
                          text="Read more"
                          color="#ffa500"
                          fill="#ffa500"
                        />
                      </div>
                    </div>

                    <div className="d-flex">




                    </div>
                    <div className="col-md-6  mt-md-5 pt-md-5">
                      <h4>3D Animations</h4>
                      <p className="mt-4">
                        Bring your ideas to life with our stunning 3D animations. We specialize in creating captivating visuals that communicate your message effectively, whether for advertisements, presentations, or product showcases.
                      </p>
                      <ul>
                        <li>3D Character Modeling and Animation</li>
                        <li>Environmental Modeling and Texturing</li>
                        <li>Keyframe Animation and Physics Simulations</li>
                        <li>Visual Effects and Compositing</li>
                      </ul>

                      <div>
                        <Button_Rm
                          text="Read more"
                          color="#ffa500"
                          fill="#ffa500"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4> Video Editing</h4>
                      <p className="mt-4">
                        Our professional video editing services enhance your footage with creativity and precision. We transform raw clips into polished masterpieces that convey your story and engage your audience, perfect for marketing or personal projects.
                      </p>
                      <ul>
                        <li>Video Cutting and Editing</li>
                        <li>Visual Effects and Motion Graphics</li>
                        <li>Color Correction and Grading</li>
                        <li>Sound Design and Audio Mixing</li>
                      </ul>
                      <div>
                        <Button_Rm
                          text="Read more"
                          color="#ffa500"
                          fill="#ffa500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ParticleEffect>
          </div>
        </div>
        <div className="row g-0 ">
        <div className="col mx-md-0 mx-5">
          <Tech />
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
              <div className=" mx-auto ">
                {" "}
                <NavLink to="/contact"> <Button text="Contact Us" /> </NavLink>
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
                Our dedicated team ensures that your WordPress or Shopify website is not only visually appealing but also functional, secure, and optimized for conversions. From startups to established enterprises, we’ve got the expertise to elevate your online presence.
              </p>
            </div>
          </div>

        </div>
        {/* <div className="row bg-body-secondary m-0 ">    
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
              className="row  text-center px-5 "
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
        </div> */}
       


      </motion.div>
    </>
  );
};

export default Services;
