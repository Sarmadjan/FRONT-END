import { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import ButtonD from "../button/ButtonD";
import Button from "../button/Button";  


import ButtonD from "../button/ButtonD";
import Button_Rm from "../button/Button-Rm";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
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
      <div className="container-fluid bg-black">
      <Navbar/>
        <div className="col-md-10 mx-auto pt-5 ">
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
                    <NavLink onClick={(()=>{window.scrollTo(0.0)})} to="/frontend">
                      <Button_Rm
                        text="Read more"
                        color="#ffa500"
                        fill="#ffa500"
                      />
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4>Digital Marketing</h4>
                  <p className="mt-4">
                    {" "}
                    Accelerate your growth with our digital marketing expertise. We create tailored strategies that include SEO, social media, and content marketing to boost visibility, attract customers, and convert leads into sales effectively.
                  </p>
                  <ul>
                    <li>SEO Audits & Optimization</li>
                    <li>Pay-Per-Click (PPC) Advertising</li>
                    <li>Social Media Marketing & Management</li>
                    <li>Email Marketing & Automation</li>
                    <li>Content Creation & Marketing Strategy</li>
                  </ul>
                  <div>
                    <Button_Rm
                      text="Read more"
                      color="#ffa500"
                      fill="#ffa500"
                    />
                  </div>
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


    </>
  );
};

export default Services;
