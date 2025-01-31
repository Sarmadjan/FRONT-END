
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Charges.css";
import "./Editing.css";

import ButtonD from "../button/ButtonD";

import "./home.css";
import { motion } from 'framer-motion';
import Navbar from "../Navbar";
import Button from "../button/Button";

import Video from "../Embed_video";
import Service_card from "../Service_card";
const Animation_3D = () => {
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
      style={{ overflow: "hidden" }} className="row  g-0">

      <div className="row g-0 edit bg-white text-dark first-sec m-0 ">

        <div className="col-md-10     mx-auto main-heading  ">
          <Navbar />
          <div className="row g-0 align-items-center justify-content-between pt-md-5 pt-2 mt-md-5 mt-2">
            <div className="col-md-8 col-10   ">
              {" "}
              <h1 className="pt-md-0 pt-5  mt-5">
                {" "}
                3D <span>Animation </span> Explainer
              </h1>
              <h4  >In partnership with <a href="https://thedotnetworks.com/" target="blank">Dot Networks </a></h4>

              <div className="row ">
                <p className="text-black">

                  At <b> Woltrio,</b> we partner with <b> Dot Networks</b> to create engaging <b> 3D animated explainer</b> videos that simplify complex ideas and drive impact. Our team delivers tailored solutions that align with your brand,s voice, including 3D business and product explainers, character design, and product modeling and animation, ensuring effective communication and a lasting impression.  </p>

                <div className=" row d-flex align-items-center">
                  <div className=" my-3 mb-md-5">
                    <NavLink to="#sec-down">
                      <ButtonD color="grey" text="About service" fill="black" />
                    </NavLink>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-4 col-2 d-flex justify-content-center mb-auto mt-md-5  mt-5 ">
              <a href="https://thedotnetworks.com/" target="_blank" > <img className="img-fluid rounded-circle mt-md-0 mt-5" src="/images/Dot Network.png " alt="" /></a>
            </div>

            <div className="row justify-content-center align-items-center" >
              <div className="col-md-6" data-aos="fade-right">
                <h5> <b>Why Choose Dot Networks for Your 3D Explainer Animations?
                </b></h5>
                <p className=" my-4">
                  {" "}
                  <b>Elevate Your Brand’s Voice: </b>   At Dot Networks, every creation starts with a single dot, evolving into vibrant and immersive animations. Our expertly crafted 3D explainer animations not only captivate but also effectively communicate your message, bridging the gap between your vision and your audience.          </p>
                <p>
                  <b>Precision and Perfection:</b>Our skilled team of 3D animators meticulously designs every frame to ensure your story is told with clarity and impact. Each animation is a testament to our commitment to perfection, ensuring your brand’s essence shines through every detail.

                </p>
                <p>
                  <b>Innovation at Every Step:</b>We don’t just create animations; we create experiences. Leveraging the latest technologies, our 3D explainer animations set your brand apart, turning complex concepts into visually stunning narratives that resonate with your audience.
                </p>
              </div>
              <div className="col-md-6" data-aos="fade-left">

                <Video src="https://youtu.be/8x0NwXR9Jvo" />

              </div>
            </div>
            <hr />

            <div className="row my-5 justify-content-center align-items-center" >
              <div className="col-md-6 order-md-1 order-2" data-aos="fade-right" >

                <Video src="https://youtu.be/2otDQDy_1gU" />

              </div>
              <div className="col-md-6 order-md-2 order-1 " data-aos="fade-left">
                <h4>Our 3D Explainer Animation Services</h4>

                <h6> <b>Visual Storytelling That Sticks</b></h6>
                <p>Every brand has a story, and we help you tell it with animations that move, inspire, and engage. Our 3D explainer animations bring your ideas to life, creating emotional connections that leave a lasting impression.</p>

                <h6> <b>Corporate and Promotional Videos:</b></h6>
                <p>Communicate your brand’s message with professional edits that elevate your corporate identity and leave a lasting impression.</p>

                <h6> <b>Simplify Complex Concepts:</b></h6>
                <p>Whether it’s a product demonstration or a detailed process, our 3D explainer animations transform intricate ideas into accessible, visually stunning narratives. Let us make your message clear, concise, and captivating.</p>

              </div>

            </div>
            <hr />
            <div className="row my-5 justify-content-center align-items-center" >

              <div className="col-md-6" data-aos="fade-right">
                <h4>What Are 3D Explainer Animations?</h4>

                <p>3D explainer animations combine the realism of three-dimensional visuals with the art of storytelling. They are designed to make your message more engaging, accessible, and unforgettable. Using advanced animation techniques, we create lifelike objects and characters that move and interact in a virtual 3D space, turning static ideas into dynamic visuals.</p>
                <p><b>This approach is perfect for:</b></p>

                <h6> <b>Product Demonstrations:</b></h6>
                <p>Showcase your product in action without physical limitations.</p>

                <h6> <b>Training Materials:</b></h6>
                <p> Simplify learning with interactive and immersive animations.</p>

                <h6> <b>Marketing Videos:</b></h6>
                <p>Enhance your campaigns with captivating visuals that drive results.</p>
                <p>
                  3D explainer animations are widely used across industries, from healthcare and technology to retail and education, helping brands communicate more effectively.
                </p>

              </div>
              <div className="col-md-6" data-aos="fade-left">

                <Video src="https://youtu.be/cE_14sgqPHE" />

              </div>

            </div>
            <hr />
            <div className="row my-5 justify-content-center align-items-center">
              <div className="col-md-6 order-md-1 order-2" data-aos="fade-right">

                <Video src="https://youtu.be/vl8iFfbKElI" />

              </div>
              <div className="col-md-6 order-md-2 order-1 " data-aos="fade-left">
                <h4>Why Are Companies Using 3D Explainer Animations?</h4>

                <p>In today’s competitive market, 3D animations have become a game-changer for businesses looking to connect with their audience. They offer unparalleled versatility, allowing companies to:</p>

                <ul className="ulul" >
                  <li>Present ideas in a visually appealing way.</li>
                  <li>Add realism and depth to their marketing materials.</li>
                  <li>Stand out with unique and memorable content.</li>
                </ul>

                <p>
                  Major brands are increasingly incorporating 3D explainer animations into their strategies, using them for explainer videos, product showcases, and even immersive ad campaigns. By choosing 3D animation, you ensure your brand remains innovative, engaging, and ahead of the curve.
                </p>
              </div>

            </div>

          </div>
        </div>
        <div className="row g-0 bg-body-secondary m-0 " >
          <div className="col-md-10 mx-auto  ">
            <div
              className="col-md-5 ms-auto text-end text-dark py-5"
              data-aos="fade-left"
            >
              <span className="text-light-emphasis">
                {" "}
                Looking to make your mark? We will help you turn <br />
                your project into a success story.{" "}
              </span>
            </div>

            <div
              className="row main-heading  text-center px-5 "
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
        <div className="row my-md-5 my-2 g-3 ">
          <div className="col-md-4  " data-aos="fade-right">
            <Service_card service="2D Animation " path="2d_animation" detail="Our 2D animation services deliver creative, eye-catching visuals that communicate your message with style. Whether for explainer videos, advertisements, or storytelling, we bring characters and concepts to life with smooth animation and vibrant artwork that resonate with viewers. " one="Custom Character Design & Storyboard " two="Fluid Motion & Engaging Visuals" three="3.	Vibrant Illustrations & Artwork" four="Sound Design & Synchronization" />

          </div>
          <div className="col-md-4" data-aos="fade-up">
            <Service_card service="Video Editing" path="/video_editing" detail="Transform raw footage into a captivating story with our expert video editing services. We combine cinematic techniques, motion graphics, and sound design to create high-quality videos that engage, inform, and leave a lasting impression on your audience. " one="Creative Storytelling & Concept Development" two="High-Quality Editing & Visual Effects" three="Color Grading & Sound Design" four="4.	Optimized Formats for Multi-Platform Distribution" />
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <Service_card service="Cinematic videos" path="/cinematic" detail="
Elevate your brand with cinematic promo videos that captivate audiences from the first frame. Our expert filmmakers combine storytelling, stunning visuals, and high-quality production to create promotional content that drives engagement and leaves a long lasting impact." one="Story-Driven Cinematic Concepts" two="High-Quality Filming & Cinematography " three="Dynamic Editing & Motion Graphics " four="Sound Design & Music Composition" />
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Animation_3D;
