
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

            <div className="row g-0  bg-white text-dark first-sec m-0 ">
                <div className="col-md-10 p-md-3 px-md-0 px-2  mx-auto main-heading  ">
                    <Navbar />
                    <div className="row g-0 align-items-center justify-content-between pt-md-5 pt-2 mt-md-5 mt-2">
                        <div className="col-md-8 pt-md-5 pt-2 ">
                            {" "}
                            <h1 className="pt-md-0 pt-5  mt-5">
                                {" "}
                                Video <span>Editing </span>

                                <img className="img-fluid " width={"75px"} src="/images/Dot Network.png" alt="" />
                            </h1>


                            <h4 className="text-light-subtle">In partnership with Dot Networks</h4>
                        </div>

                        <div className="col-md-6 my-5">
                            <p className="text-black">
                                {" "}
                                At Woltrio, we specialize in delivering high-quality, professional video editing services in partnership with <b> Dot Networks.</b> Leveraging the latest technologies and expert techniques, we craft compelling visual stories that captivate audiences. Whether you need to refine a corporate video, enhance a social media clip, or produce a cinematic masterpiece, our team delivers tailored video editing solutions to match your unique vision and requirements.
                            </p>
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
                            <h6> <b>Transform Your Vision into Engaging Visual Masterpieces with Dot Networks.:</b></h6>
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





                </div>
            </div>




        </motion.div>
    );
};

export default Video_editing;
