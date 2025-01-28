
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
const Video_editing = () => {
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


                <div className="col-md-10  mx-auto main-heading  ">
                    <Navbar />
                    <div className="row g-0 align-items-center justify-content-between pt-md-5 pt-2 mt-md-5 mt-2">
                        <div className="col-md-8 col-10   ">
                            {" "}
                            <h1 className="pt-md-0 pt-5  mt-5">
                                {" "}
                                Video Editing
                            </h1>
                            <h4  >In partnership with <a  href="https://thedotnetworks.com/" target="blank">Dot Networks </a></h4>


                            <div className="row ">
                                <p className="text-black">
                                    {" "}
                                    At Woltrio, we specialize in delivering high-quality, professional video editing services in partnership with <b> Dot Networks.</b> Leveraging the latest technologies and expert techniques, we craft compelling visual stories that captivate audiences. Whether you need to refine a corporate video, enhance a social media clip, or produce a cinematic masterpiece, our team delivers tailored video editing solutions to match your unique vision and requirements.
                                </p>


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
                            <a href="https://thedotnetworks.com/" target="blank"><img className="img-fluid rounded-circle mt-md-0 mt-5" src="/images/Dot Network.png " alt="" /></a>
                        </div>


                        <div id="sec-2" className="row justify-content-center align-items-center">
                            <div className="col-md-6">
                                <h6> <b>Transform Your Vision into Engaging Visual Masterpieces with Dot Networks.</b></h6>
                                <p className=" my-4">
                                    {" "}
                                    Need high-quality, fast, and professional video editing? Look no further! At Dot Networks, we specialize in taking raw footage and turning it into stunning videos that captivate, inspire, and deliver results. Whether it’s a short social media clip, a promotional video, or a full-scale production, we’ve got you covered.           </p>
                            </div>
                            <div className="col-md-6">


                                <Video src="https://youtu.be/ufn7xyQbd8Y" />

                            </div>
                        </div>
                        <hr />


                        <div className="row my-5 justify-content-center align-items-center">
                            <div className="col-md-6 order-md-1 order-2">


                                <Video src="https://youtu.be/_x-n4aCu0Q4" />

                            </div>
                            <div className="col-md-6 order-md-2 order-1 ">
                                <h4>Our Video Editing Services Include:</h4>


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


                                <Video src="https://youtu.be/YL8rhwTHF_k" />

                            </div>

                        </div>
                        <hr />
                        <div className="row my-5 justify-content-center align-items-center">
                            <div className="col-md-6 order-md-1 order-2">


                                <Video src="https://youtu.be/F4psQbZoWyo" />

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


                                <Video src="https://youtu.be/gKcVglqjyds" />

                            </div>

                        </div>

                        <hr />
                        <div className="row my-5 justify-content-center align-items-center">
                            <div className="col-md-6 order-md-1 order-2">


                                <Video src="https://www.youtube.com/watch?v=cE_14sgqPHE" />

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
                    </div>
                </div>
            </div>




        </motion.div>
    );
};

export default Video_editing;
