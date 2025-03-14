/* eslint-disable react/no-unescaped-entities */

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
const Animation_2D = () => {
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

        <div className="col-md-10   px-2  mx-auto main-heading  ">
          <Navbar />

          <div className="row g-0 align-items-center justify-content-between pt-md-5 pt-2 mt-md-5 mt-2">
            <div className="col-md-8 col-10   ">
              {" "}
              <h1 className="pt-md-0 pt-5  mt-5">
                {" "}
                2D <span>Animation </span>   Explainer
              </h1>
              <h4  >In partnership with <a href="https://thedotnetworks.com/" target="blank">Dot Networks </a></h4>
              <div className="row ">
                <p className="text-black">

                  At<b> Woltrio, </b> we partner with <b>Dot Networks </b> to craft engaging <b>2D animated  explainer</b> videos that simplify complex ideas and leave a lasting impact. Our talented team delivers bespoke solutions that align with your brand's voice, focusing on 2D business and product explainers, character design, and custom animations. With our expertise, we ensure clear communication and a memorable experience, helping you effectively convey your message through the timeless appeal of 2D animation.</p>     </div>

              <div className=" row d-flex align-items-center">
                <div className=" my-3 mb-md-5">
                  <NavLink to="#">
                    <ButtonD color="grey" text="About service" fill="black" />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-2 d-flex justify-content-center mb-auto mt-md-5  mt-5 ">
              <a href="https://thedotnetworks.com/" target="blank"><img className="img-fluid rounded-circle mt-md-0 mt-5" src="/images/Dot Network.png " alt="" /> </a>
            </div>
          </div>

          <div className="row justify-content-center align-items-center" >
            <div className="col-md-6" data-aos="fade-right">
              <h5>
                <b>Unlock the Power of 2D Explainer Animations with Dot Networks</b>
              </h5>
              <p className="my-4">
                <b>Bring Your Vision to Life:</b> At Dot Networks, we craft captivating 2D animations that breathe life into your ideas. Our expertly designed explainer videos convey your message with clarity, engaging your audience and setting your brand apart.
              </p>
              <p>
                <b>Perfection in Every Frame:</b> Our skilled team of 2D animators meticulously crafts each frame to ensure your story is told with precision and impact. Every animation is a testament to our commitment to excellence, showcasing your brand's unique essence.
              </p>
              <p>
                <b>Experience the Art of Storytelling:</b> We don't just create animations – we weave immersive narratives that resonate with your audience. By leveraging cutting-edge techniques, our 2D explainer animations elevate your brand, transforming complex concepts into engaging visual experiences.
              </p>
            </div>
            <div className="col-md-6" data-aos="fade-left">

              <Video src="https://youtu.be/NKi9uYIxJhM" />

            </div>
          </div>
          <hr />

          <div className="row my-5 justify-content-center align-items-center" >
            <div className="col-md-6 order-md-1 order-2" data-aos="fade-right" >

              <Video src="https://youtu.be/98ciuLO2BIU" />

            </div>
            <div className="col-md-6 order-md-2 order-1 " data-aos="fade-left">
              <h4>Our 2D Explainer Animation Services</h4>
              <h6>
                <b>Elevate Your Story with Engaging 2D Animations</b>
              </h6>
              <p>
                Every brand has a unique narrative, and we help you bring it to life with captivating 2D animations that inspire, educate, and entertain. Our expertly crafted explainer videos forge emotional connections, leaving a lasting impression on your audience.
              </p>
              <h6>
                <b>Craft Compelling Brand Stories:</b>
              </h6>
              <p>
                Our 2D explainer animations empower you to communicate your brand's message with clarity, creativity, and impact. From promotional videos to corporate narratives, we help you elevate your brand's identity and resonate with your target audience.
              </p>
              <h6>
                <b>Simplify Complexity with Clarity:</b>
              </h6>
              <p>
                Transform intricate concepts into engaging, easy-to-understand narratives with our 2D explainer animations. Whether you need to demonstrate a product, explain a process, or convey a complex idea, our animations make your message clear, concise, and captivating.
              </p>
            </div>

          </div>
          <hr />
          <div className="row my-5 justify-content-center align-items-center" >

            <div className="col-md-6" data-aos="fade-right">
              <h4>What Are 2D Explainer Animations?</h4>
              <p>2D explainer animations blend engaging visuals with compelling storytelling to make your message more memorable and impactful. By utilizing advanced animation techniques, we create dynamic, hand-crafted animations that simplify complex ideas, highlight key benefits, and drive results.</p>
              <p><b>This approach is perfect for:</b></p>
              <h6><b>Product Explainers:</b></h6>
              <p>Clearly communicate your product's value and features in an engaging, easy-to-understand format.</p>
              <h6><b>Brand Stories:</b></h6>
              <p>Bring your brand's unique narrative to life with captivating animations that resonate with your audience.</p>
              <h6><b>Marketing Campaigns:</b></h6>
              <p>Elevate your marketing efforts with attention-grabbing animations that drive engagement, conversions, and brand awareness.</p>
            </div>
            <div className="col-md-6" data-aos="fade-left">

              <Video src="https://youtu.be/Q4q5TPvyKsE" />

            </div>

          </div>
          <hr />
          <div className="row my-5 justify-content-center align-items-center">
            <div className="col-md-6 order-md-1 order-2" data-aos="fade-right">

              <Video src="https://youtu.be/rpU_oU7SKHM" />

            </div>
            <div className="col-md-6 order-md-2 order-1 " data-aos="fade-left">
              <h4>Why Are Companies Using 2D Explainer Animations?</h4>
              <p>In today’s fast-paced digital landscape, 2D animations have emerged as a powerful tool for businesses seeking to captivate their audience. They offer unmatched flexibility, enabling companies to:</p>
              <ul className="ulul" >
                <li>Simplify complex concepts through engaging visuals.</li>
                <li>Create memorable brand stories that resonate with their audience.</li>
                <li>Differentiate themselves with unique, attention-grabbing content.</li>
              </ul>
              <p>Forward-thinking brands are increasingly incorporating 2D explainer animations into their marketing strategies, leveraging them for explainer videos, social media content, and even influencer partnerships. By choosing 2D animation, you ensure your brand remains innovative, engaging, and ahead of the competition.</p>
            </div>

          </div>

        </div>
        <div className="row bg-body-secondary m-0 " >
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
        <div className="row my-md-5 my-2 g-3 ">
          <div className="col-md-4  " data-aos="fade-right">
            <Service_card service="Video Editing" path="/video_editing" detail="Transform raw footage into a captivating story with our expert video editing services. We combine cinematic techniques, motion graphics, and sound design to create high-quality videos that engage, inform, and leave a lasting impression on your audience. " one="Creative Storytelling & Concept Development" two="High-Quality Editing & Visual Effects" three="Color Grading & Sound Design" four="4.	Optimized Formats for Multi-Platform Distribution" />
          </div>
          <div className="col-md-4" data-aos="fade-up">
            <Service_card service="3D Animation " path="/3d_animation" detail="Bring your ideas to life with our immersive 3D animation services. We create visually captivating animations that engage audiences, tell compelling stories, and elevate your brand with high-quality models, textures, and dynamic motion—all designed to make a lasting impact. " one="Creative Storytelling & Concept Design" two="High-Quality Modeling & Texturing" three="Smooth Motion & Realistic Animations" four="Rendering & Post-Production Excellence" />
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <Service_card service="Cinematic videos" path="/cinematic" detail="Elevate your brand with cinematic promo videos that captivate audiences from the first frame. Our expert filmmakers combine storytelling, stunning visuals, and high-quality production to create promotional content that drives engagement and leaves a long lasting impact." one="Story-Driven Cinematic Concepts" two="High-Quality Filming & Cinematography " three="Dynamic Editing & Motion Graphics " four="Sound Design & Music Composition" />
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Animation_2D;
