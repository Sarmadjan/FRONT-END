import "./home.css";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import '../Charges.css';

import Wordpress_FAQ_s from '../Wordpress_FAQ_s';

import ButtonD from "../button/ButtonD";
import Button_Rm from "../button/Button-Rm";

import Charges from "../Charges";
import Service_card from "../Service_card";
const Wordpress = () => {

    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease",
            offset: 120,
        });
    }, []);
    return (
        <div className="container-fluid">
            <div className="row bg-white text-dark first-sec m-0 ">
                <div className="col-md-10 p-md-3 px-md-0 px-2  mx-auto main-heading  ">

                    <div className="row align-items-center pt-md-5 pt-2 mt-md-5 mt-2">
                        <div className="col-md-7 pt-md-5 pt-2 " >
                            {" "}
                            <h1 className="pt-md-0 pt-5  mt-5">
                                {" "}
                                WordPress and  <br /> Shopify<span> Development </span>
                            </h1>
                        </div>
                        <div className="col-md-6 my-5">
                            <p className="text-black"> At Woltrio, we specialize in creating seamless, professional, and high-performing websites on two of the most popular content management systems in the world: WordPress and Shopify. Whether you are looking to build a dynamic blog, an e-commerce store, or a custom-designed business site, we deliver tailored solutions to match your unique requirements. </p>
                        </div>
                    </div>


                    <div className=" row d-flex align-items-center">
                        <div className="col-my-5 my-3 mb-md-5">
                            <NavLink to="#sec-down">
                                <ButtonD color="grey" text="About service" fill="black" />
                            </NavLink>
                        </div>
                    </div>

                    <div className="row my-md-5 d-flex align-items-center" >
                        <div className="col-md-6 my-md-5 ">
                            <div className="col  my-md-5" data-aos="fade-up">
                                <h2>
                                    Wordpress
                                    <i className="ms-5">
                                        <svg width={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8 .9 0 1.8 .1 2.8 .2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7 .3 13.7 .3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"/></svg>
                                    </i>
                                </h2>
                            </div>
                            <div className="col-md-8 m-0 " data-aos="fade-up">
                                <p className="text-black-50 ">
                                    Python’s versatility and simplicity make it a top choice for building scalable, data-driven applications. From APIs to automation, it handles backend development with precision and reliability.  </p>
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
                        <div className="col-md-6  bg-body-secondary rounded-1  mt-3  p-3" data-aos="fade-up">
                            <Wordpress_FAQ_s />
                            
                        </div>
                    </div>












                </div>
            </div>

            <div className="row g-0 bg-black m-o main-heading  pt-5 ">
                <div className="col-md-10 mx-auto">
                    <div className="col-md-7 text-center mx-auto">
                        <h1 className="text-white mt-md-5 mt-2" data-aos="fade-up">
                            Reasonable <span>prices</span> <br />
                            for innovative <span>solutions</span>
                        </h1>
                    </div>
                    <div className="row g-0 bg-black">
                        <div className="col-md-5 text-center mx-auto mt-md-5 pb-5 mt-3" data-aos="fade-up">
                            <p>
                                At our agency, we have a unique approach to web design and
                                development. We believe in creating in terms of user experience,
                                functionality.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row g-0 bg-black " data-aos="fade-up">
                <div className="col-md-10 mx-auto" data-aos="fade-up">

                    <Charges path="/contact" />
                    <Charges path="/services" />
                </div>

                <NavLink to={"/contact"} onClick={() => { window.scrollTo(0.0) }} className="hovv2 col-md-3 my-5 col-sm-8 py-3 mt-5 mx-auto d-flex align-items-center justify-content-between px-5 " >
                    <div style={{ textTransform: "uppercase" }}> individual service</div>
                    <div className="rounded-circle" style={{ backgroundColor: "black" }}>
                        <svg
                            style={{ width: "35px", backgroundColor: 'dark', padding: "10px" }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="white" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>{" "}
                    </div>


                </NavLink>
            </div>
            <div className="row g-0">
                <div className="col-md-10 mx-auto">
                    <div className="d-flex justify-content-between align-items-center ">
                        <div className="col-md-4 mt-3 ">
                            <h2>
                                Other services
                            </h2>
                        </div>
                        <div className="col-md-4 ms-auto">

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
                    <div className="row g-0">
                        <div className="col-md-4 ">
                            <Service_card service="Web Development" detail="Our website development service combines cutting-edge technology with creative design to build responsive, user-friendly sites that drive engagement and enhance your online presence, tailored to meet your unique business needs." />

                        </div>
                        <div className="col-md-4">
                            <Service_card service="Digital Marketing" detail="Accelerate your growth with our digital marketing expertise. We create tailored strategies that include SEO, social media, and content marketing to boost visibility, attract customers, and convert leads into sales effectively." />
                        </div>
                        <div className="col-md-4">
                            <Service_card service="3D Animations" detail="Bring your ideas to life with our stunning 3D animations. We specialize in creating captivating visuals that communicate your message effectively, whether for advertisements, presentations, or product showcases." />
                        </div>


                    </div>



                </div>
            </div>

        </div>
    );
};

export default Wordpress;
