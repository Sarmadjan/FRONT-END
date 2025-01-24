
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


      <div className="row g-0  bg-white text-dark first-sec m-0 ">

        <div className="col-md-10 p-md-3 px-md-0 px-2  mx-auto main-heading  ">
          <Navbar />

          <div className="row g-0 align-items-center justify-content-between pt-md-5 pt-2 mt-md-5 mt-2">
            <div className="col-md-8 pt-md-5 pt-2 ">
              {" "}
              <h1 className="pt-md-0 pt-5  mt-5">
                {" "}
                3D <span>Animation </span> <img className="img-fluid rounded-circle " width={"75px"} src="/images/Dot Network.png" alt="" /> <br />  Explainer


              </h1>


              <p  >In partnership with Dot Networks</p>
            </div>

            <div className="col-md-6 my-5">
              <p className="text-black">

                At <b> Woltrio,</b> we partner with <b> Dot Networks</b> to create engaging <b> 3D animated explainer</b> videos that simplify complex ideas and drive impact. Our team delivers tailored solutions that align with your brand,s voice, including 3D business and product explainers, character design, and product modeling and animation, ensuring effective communication and a lasting impression.  </p>
            </div>
          </div>

          <div className=" row d-flex align-items-center">
            <div className="col-my-5 my-3 mb-md-5">
              <NavLink to="#sec-down">
                <ButtonD color="grey" text="About service" fill="black" />
              </NavLink>
            </div>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <h6> <b>Transform Your Vision into Engaging Visual Masterpieces with Dot Networks.</b></h6>
              <p className=" my-4">
                {" "}
                Need high-quality, fast, and professional video editing? Look no further! At Dot Networks, we specialize in taking raw footage and turning it into stunning videos that captivate, inspire, and deliver results. Whether it’s a short social media clip, a promotional video, or a full-scale production, we’ve got you covered.           </p>
            </div>
            <div className="col-md-6">

              <video className="w-100  rounded-3"
                src="/videos/1.mp4" controls type="video/mp4">
              </video>

            </div>
          </div>
          <hr />


          <div className="row my-5 justify-content-center align-items-center">
            <div className="col-md-6 order-md-1 order-2">

              <video className="w-100  rounded-3"
                src="/videos/1.mp4" controls type="video/mp4">
              </video>

            </div>
            <div className="col-md-6 order-md-2 order-1 ">
              <h4>Our Video Editing Services Include.</h4>


              <h6> <b>Social Media Video Editing:</b></h6>
              <p>Stand out on platforms like Instagram, TikTok, and YouTube with short, engaging, and optimized videos designed to grab attention and drive engagement.</p>


              <h6> <b>Corporate and Promotional Videos:</b></h6>
              <p>Communicate your brand’s message with professional edits that elevate your corporate identity and leave a lasting impression.</p>


              <h6> <b>Event Highlights:</b></h6>
              <p>Relive and share the best moments from your events with dynamic highlight reels and recap videos that keep the excitement alive.</p>


              <h6> <b>Creative Storytelling:</b></h6>
              <p>Transform your raw footage into a compelling narrative that connects with your audience and tells your story with impact.</p>

              <h6> <b>Advanced Post-Production:</b></h6>
              <p>Enhance your videos with professional-grade color correction, audio syncing, motion graphics, and more to achieve a cinematic look and feel.</p>


            </div>

          </div>
          <hr />
          <div className="row my-5 justify-content-center align-items-center">

            <div className="col-md-6">
              <h4>Why Professional Video Editing Matters?</h4>


              <h6> <>In today’s visual-first world, high-quality videos are essential to capturing attention and conveying your message effectively. Professional video editing ensures your footage is:</></h6>
              <p>Deadlines matter, and we ensure your project is delivered on time without compromising quality. With fast turnarounds and meticulous attention to detail, we bring your vision to life in record time.</p>


              <h6> <b>Engaging:</b></h6>
              <p>Grab attention with dynamic visuals and seamless storytelling.</p>

              <h6> <b>Polished:</b></h6>
              <p>Create a professional impression with flawless editing.</p>

              <h5> <b>Optimized:</b></h5>
              <p>Tailor your video for specific platforms and audiences to maximize reach and engagement.</p>



            </div>
            <div className="col-md-6">

              <video className="w-100  rounded-3"
                src="/videos/1.mp4" controls type="video/mp4">
              </video>

            </div>

          </div>
          <hr />
          <div className="row my-5 justify-content-center align-items-center">
            <div className="col-md-6 order-md-1 order-2">

              <video className="w-100  rounded-3"
                src="/videos/1.mp4" controls type="video/mp4">
              </video>

            </div>
            <div className="col-md-6 order-md-2 order-1 ">
              <h4>Why Choose Dot Networks for Video Editing?</h4>


              <h6> <b>Speed and Precision:</b></h6>
              <p>Deadlines matter, and we ensure your project is delivered on time without compromising quality. With fast turnarounds and meticulous attention to detail, we bring your vision to life in record time.</p>


              <h6> <b>Customized Solutions:</b></h6>
              <p>Every video has a purpose, and we tailor our editing to suit your goals. From visual storytelling to brand-focused edits, we ensure your video aligns perfectly with your message.</p>


              <h6> <b>Creativity and Expertise:</b></h6>
              <p>Our team of skilled editors combines technical expertise with artistic flair. Using the latest software and techniques, we create videos that are not just visually appealing but also emotionally impactful.</p>


              <h6> <b>Full-Service Editing:</b></h6>
              <p>From trimming and sequencing to color grading, sound design, and special effects, we handle every aspect of the editing process, ensuring your footage transforms into a polished masterpiece.</p>



            </div>

          </div>
          <hr />
          <div className="row my-5 justify-content-center align-items-center">

            <div className="col-md-6">
              <h4>Why Choose Dot Networks for Video Editing?</h4>


              <h6> <b>Speed and Precision:</b></h6>
              <p>Deadlines matter, and we ensure your project is delivered on time without compromising quality. With fast turnarounds and meticulous attention to detail, we bring your vision to life in record time.</p>


              <h6> <b>Customized Solutions:</b></h6>
              <p>Every video has a purpose, and we tailor our editing to suit your goals. From visual storytelling to brand-focused edits, we ensure your video aligns perfectly with your message.</p>


              <h6> <b>Creativity and Expertise:</b></h6>
              <p>Our team of skilled editors combines technical expertise with artistic flair. Using the latest software and techniques, we create videos that are not just visually appealing but also emotionally impactful.</p>


              <h6> <b>Full-Service Editing:</b></h6>
              <p>From trimming and sequencing to color grading, sound design, and special effects, we handle every aspect of the editing process, ensuring your footage transforms into a polished masterpiece.</p>



            </div>
            <div className="col-md-6">

              <video className="w-100  rounded-3"
                src="/videos/1.mp4" controls type="video/mp4">
              </video>

            </div>

          </div>

          <hr />
          <div className="row my-5 justify-content-center align-items-center">
            <div className="col-md-6 order-md-1 order-2">

              <video className="w-100  rounded-3"
                src="/videos/1.mp4" controls type="video/mp4">
              </video>

            </div>
            <div className="col-md-6 order-md-2 order-1 ">
              <h4>The Dot Networks Video Editing Process</h4>


              <h6> <b>Concept Development:</b></h6>
              <p>We begin by understanding your goals, audience, and vision to create a clear roadmap for the editing process.</p>

              <h6> <b>Footage Review:</b></h6>
              <p> We meticulously review and organize your raw footage to ensure the best shots are selected.</p>

              <h6> <b>Editing and Refinement:</b></h6>
              <p>From cutting and sequencing to adding transitions, effects, and music, we craft a seamless video experience.</p>

              <h6> <b>Feedback and Revisions:</b></h6>
              <p>Your input matters. We provide drafts for review and refine the edit until it meets your exact specifications.</p>

              <h6> <b>Final Delivery:</b></h6>
              <p>Your polished, professional video is delivered in your preferred format, ready to impress your audience.</p>

            </div>

          </div>





        </div>
      </div>




    </motion.div>
  );
};

export default Animation_3D;
