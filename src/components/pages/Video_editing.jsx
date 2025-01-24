
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Charges.css";

import Shopify_FAQ_s from "../Shopify_FAQ_s";
import ButtonD from "../button/ButtonD";
import Button_Rm from "../button/Button-Rm";

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
                    <div className="row g-0 align-items-center pt-md-5 pt-2 mt-md-5 mt-2">
                        <div className="col-md-7 pt-md-5 pt-2 ">
                            {" "}
                            <h1 className="pt-md-0 pt-5  mt-5">
                                {" "}
                                WordPress <span>and </span> <br /> Shopify
                                <span> Development </span>
                            </h1>
                        </div>
                        <div className="col-md-6 my-5">
                            <p className="text-black">
                                {" "}
                                At Woltrio, we specialize in creating seamless, professional,
                                and high-performing websites on two of the most popular content
                                management systems in the world: WordPress and Shopify. Whether
                                you are looking to build a dynamic blog, an e-commerce store, or
                                a custom-designed business site, we deliver tailored solutions
                                to match your unique requirements.
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

                    

                    <div className="row my-md-5 d-flex align-items-center">
                        <div className="col-md-6 my-md-5 ">
                            <div className="col  my-md-5" data-aos="fade-up">
                                <h2>
                                    Shopify
                                    <i className="ms-5">
                                        <svg
                                            width={50}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M388.3 104.1a4.7 4.7 0 0 0 -4.4-4c-2 0-37.2-.8-37.2-.8s-21.6-20.8-29.6-28.8V503.2L442.8 472S388.7 106.5 388.3 104.1zM288.7 70.5a116.7 116.7 0 0 0 -7.2-17.6C271 32.9 255.4 22 237 22a15 15 0 0 0 -4 .4c-.4-.8-1.2-1.2-1.6-2C223.4 11.6 213 7.6 200.6 8c-24 .8-48 18-67.3 48.8-13.6 21.6-24 48.8-26.8 70.1-27.6 8.4-46.8 14.4-47.2 14.8-14 4.4-14.4 4.8-16 18-1.2 10-38 291.8-38 291.8L307.9 504V65.7a41.7 41.7 0 0 0 -4.4 .4S297.9 67.7 288.7 70.5zM233.4 87.7c-16 4.8-33.6 10.4-50.8 15.6 4.8-18.8 14.4-37.6 25.6-50 4.4-4.4 10.4-9.6 17.2-12.8C232.2 54.9 233.8 74.5 233.4 87.7zM200.6 24.4A27.5 27.5 0 0 1 215 28c-6.4 3.2-12.8 8.4-18.8 14.4-15.2 16.4-26.8 42-31.6 66.5-14.4 4.4-28.8 8.8-42 12.8C131.3 83.3 163.8 25.2 200.6 24.4zM154.2 244.6c1.6 25.6 69.3 31.2 73.3 91.7 2.8 47.6-25.2 80.1-65.7 82.5-48.8 3.2-75.7-25.6-75.7-25.6l10.4-44s26.8 20.4 48.4 18.8c14-.8 19.2-12.4 18.8-20.4-2-33.6-57.2-31.6-60.8-86.9-3.2-46.4 27.2-93.3 94.5-97.7 26-1.6 39.2 4.8 39.2 4.8L221.4 225.4s-17.2-8-37.6-6.4C154.2 221 153.8 239.8 154.2 244.6zM249.4 82.9c0-12-1.6-29.2-7.2-43.6 18.4 3.6 27.2 24 31.2 36.4Q262.6 78.7 249.4 82.9z" />
                                        </svg>
                                    </i>
                                </h2>
                            </div>
                            <div className="col-md-8 m-0 " data-aos="fade-up">
                                <p className="text-black-50 ">
                                    Shopify is a premier e-commerce platform for building and
                                    scaling online stores. Its intuitive interface and
                                    customizable templates enable businesses to create seamless
                                    shopping experiences. With robust inventory management and
                                    secure payment gateways, Shopify ensures efficient and
                                    reliable online retail operations{" "}
                                </p>
                            </div>
                            <div className="col-8  " data-aos="fade-up">
                                <Link
                                    to="/portfolio"
                                    onClick={() => {
                                        window.scrollTo(1.1);
                                    }}
                                >
                                    <Button_Rm color="grey" text="our work" data-aos="fade-up" />
                                </Link>
                            </div>
                        </div>
                        <div
                            className="col-md-6  bg-body-secondary rounded-1  mt-3  p-3"
                            data-aos="fade-up"
                        >
                            <Shopify_FAQ_s />
                        </div>
                    </div>
                </div>
            </div>

           


        </motion.div>
    );
};

export default Video_editing;
