
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
const Cinematic = () => {
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
                                Cinematic Promos
                            </h1>
                            <h4  >In partnership with <a href="https://thedotnetworks.com/" target="blank">Dot Networks </a></h4>

                            <div className="row ">
                                <p className="text-black">
                                    {" "}
                                    At Woltrio, we specialize in delivering high-quality, professional Cinematic Promos services in partnership with <b> Dot Networks.</b> Leveraging the latest technologies and expert techniques, we craft compelling visual stories that captivate audiences. Whether you need to refine a corporate promos enhance a social media clip, or produce a cinematic masterpiece, our team delivers tailored video cinematic promos to match your unique vision and requirements.
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
                                <h6> <b>Crafting Cinematic Excellence with Dot Networks</b></h6>
                                <p className=" my-4">
                                    {" "}
                                    At Dot Networks, we take pride in transforming your vision into breathtaking cinematic promos that captivate, inspire, and engage. With our seamless fusion of animations, videos, VFX, GFX, and SFX, we create promotional content that goes beyond the ordinary, delivering an immersive experience that truly stands out. <br />

                                    From high-impact visuals to compelling narratives, our cinematic promos are designed to leave your audience in awe. Whether you’re showcasing a product, promoting a service, or sharing your brand story, we combine creativity, precision, and cutting-edge technology to bring your ideas to life. </p>
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
                                <h4>Why Choose Woltrio for Cinematic Promos?</h4>

                                <h6> <b>Unparalleled Creativity:</b></h6>
                                <p>Our team of experts doesn’t just create videos—we craft experiences. With innovative storytelling and visually stunning effects, we ensure every promo is a masterpiece tailored to your goals.</p>

                                <h6> <b>Attention to Detail:</b></h6>
                                <p>At Dot Networks, perfection is in the details. From the first frame to the last, every element is meticulously designed to align with your brand’s message and captivate your audience.</p>

                                <h6> <b>End-to-End Solutions</b></h6>
                                <p>We handle everything from concept development to post-production. With a comprehensive suite of services, including animation, visual effects, sound design, and more, we ensure your cinematic promo is flawless and ready to impress.</p>

                            </div>

                        </div>
                        <hr />
                        <div className="row my-5 justify-content-center align-items-center">

                            <div className="col-md-6">
                                <h4>Our Cinematic Promo Video Production Services:</h4>

                                <h6> <b>Stunning Visual Effects (VFX):</b></h6>
                                <p>Take your promo to the next level with jaw-dropping visual effects that leave a lasting impression.</p>

                                <h6> <b>Engaging Motion Graphics (GFX):</b></h6>
                                <p>Bring your ideas to life with dynamic motion graphics that enhance your storytelling.</p>

                                <h5> <b>Immersive Sound Design (SFX)</b></h5>
                                <p>Elevate your promo with professionally designed sound effects and audio that resonate with your audience.</p>

                                <h5> <b>Customized Animations</b></h5>
                                <p>From 2D to 3D animations, we create visuals that are not only stunning but also strategically aligned with your brand’s goals.</p>

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
                            <div className="col-md-6 order-md-2 order-1 " data-aos="fade-left">
                                <h4>What Makes Cinematic Promos Essential for Your Brand?</h4>
                                <p>Cinematic promos are more than just videos—they’re a powerful tool to elevate your brand. Here’s why they’re essential::</p>
                                <ul className="ulul" >
                                    <li><b>Capture Attention: </b> In a fast-paced digital world, stunning visuals and captivating stories help you stand out.</li>
                                    <li><b> Build Emotional Connections:</b> Engaging content resonates with viewers, fostering trust and loyalty.</li>
                                    <li><b>Increase Conversions: </b> A well-crafted promo inspires action, driving sales and brand growth.</li>
                                </ul>
                                <p>From product launches and event promotions to brand storytelling, cinematic promos offer unmatched versatility and effectiveness.</p>
                            </div>

                        </div>
                        <hr />
                        <div className="row my-5 justify-content-center align-items-center">

                            <div className="col-md-6">
                                <h4>The Dot Networks Cinematic Production Process</h4>

                                <ul className="ulul" >
                                    <li><b>Creative Consultation:  </b>Understanding your goals and vision.</li>
                                    <li><b>Concept Development::</b> Crafting a unique storyline tailored to your needs.</li>
                                    <li><b>Scriptwriting:  </b>  Creating a compelling narrative that captivates your audience.</li>
                                    <li><b>Production  </b> Shooting, animating, and designing every element with precision.</li>
                                    <li><b>Post-Production:  </b>Adding the magic—VFX, GFX, SFX, and professional editing.</li>

                                </ul>
                                <p><b>Final Delivery: </b> A polished, ready-to-wow cinematic promo that exceeds expectations.</p>

                            </div>
                            <div className="col-md-6">

                                <Video src="https://youtu.be/gKcVglqjyds" />

                            </div>

                        </div>

                    </div>
                </div>
                <div className="row g-0 bg-body-secondary g-0 ">
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
                <div className="row my-md-5 my-2 g-3 ">
                    <div className="col-md-4  " data-aos="fade-right">
                        <Service_card service="2D Animation " path="/2d_animation" detail="Our 2D animation services deliver creative, eye-catching visuals that communicate your message with style. Whether for explainer videos, advertisements, or storytelling, we bring characters and concepts to life with smooth animation and vibrant artwork that resonate with viewers. " one="Custom Character Design & Storyboard " two="Fluid Motion & Engaging Visuals" three="Vibrant Illustrations & Artwork" four="Sound Design & Synchronization" />

                    </div>
                    <div className="col-md-4" data-aos="fade-up">
                        <Service_card service="3D Animation " path="/3d_animation" detail="Bring your ideas to life with our immersive 3D animation services. We create visually captivating animations that engage audiences, tell compelling stories, and elevate your brand with high-quality models, textures, and dynamic motion—all designed to make a lasting impact. " one="Creative Storytelling & Concept Design" two="High-Quality Modeling & Texturing" three="Smooth Motion & Realistic Animations" four="Rendering & Post-Production Excellence" />
                    </div>
                    <div className="col-md-4" data-aos="fade-up">
                        <Service_card service="Video Editing" path="/video_editing" detail="Transform raw footage into a captivating story with our expert video editing services. We combine cinematic techniques, motion graphics, and sound design to create high-quality videos that engage, inform, and leave a lasting impression on your audience. " one="Creative Storytelling & Concept Development" two="High-Quality Editing & Visual Effects" three="Color Grading & Sound Design" four="4.	Optimized Formats for Multi-Platform Distribution" />
                    </div>
                </div>

            </div>

        </motion.div>
    );
};

export default Cinematic;
