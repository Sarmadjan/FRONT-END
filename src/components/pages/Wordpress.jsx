
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Charges.css";
import Wordpress_FAQ_s from "../Wordpress_FAQ_s";
import Shopify_FAQ_s from "../Shopify_FAQ_s";
import ButtonD from "../button/ButtonD";
import Button_Rm from "../button/Button-Rm";
import Charges from "../Charges";
import Service_card from "../Service_card";
import "./home.css";
const Wordpress = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease",
            offset: 120,
        });
    }, []);
    return (
        <div  style={{overflow:"hidden"}}  className="row  g-0">
            <div className="row g-0  bg-white text-dark first-sec m-0 ">
                <div className="col-md-10 p-md-3 px-md-0 px-2  mx-auto main-heading  ">
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
                                    Wordpress
                                    <i className="ms-5">
                                        <svg
                                            width={50}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8 .9 0 1.8 .1 2.8 .2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7 .3 13.7 .3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z" />
                                        </svg>
                                    </i>
                                </h2>
                            </div>
                            <div className="col-md-8 m-0 " data-aos="fade-up">
                                <p className="text-black-50 ">
                                    WordPress is a leading platform for building dynamic,
                                    content-driven websites. Its flexibility and customizability
                                    enable tailored solutions for businesses. With a robust CMS
                                    and extensive community support, WordPress ensures scalable,
                                    secure, and high-performance online presence.{" "}
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
                            <Wordpress_FAQ_s />
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

            <div   className="row g-0 bg-black m-o main-heading  pt-5 ">
                <div className="col-md-10 mx-auto">
                    <div className="col-md-7 text-center mx-auto">
                        <h1 className="text-white mt-md-5 mt-2" data-aos="fade-up">
                            Reasonable <span>prices</span> <br />
                            for innovative <span>solutions</span>
                        </h1>
                    </div>
                    <div className="row g-0 bg-black">
                        <div
                            className="col-md-5 text-center mx-auto mt-md-5 pb-5 mt-3"
                            data-aos="fade-up"
                        >
                            <p>
                                At our agency, we have a unique approach to web design and
                                development. We believe in creating in terms of user experience,
                                functionality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="row g-0 bg-black " >
                <div className="col-md-10 mx-auto" data-aos="fade-up">

                    <div className="col-12 Store rounded-4 w-50 mx-auto text-uppercase  my-5 text-center  py-4 border-bottom">
                        <h2 className="font-weight-bold py-0 mb-0"> Wordpress plans</h2>
                    </div>

                    <Charges
                        path="/contact"
                        plan="Starter plan"
                        price="499"
                        Pages="1-5 Pages"
                        services="Custom Theme Setup
                                  Basic SEO Setup"
                        revisions="2 Rounds of Revisions"
                    />
                    <Charges
                        path="/contact"
                        plan="Professional Plan"
                        price="999"
                        Pages="Up to 10 Pages"
                        services="Custom Theme & Plugins
                                  Advanced SEO & Analytics Setup"
                        revisions="4 Rounds of Revisions"

                    />
                    <Charges
                        path="/contact"
                        plan="Enterprise Plan"
                        price="1,999+"
                        Pages="Unlimited Pages"
                        services="Full Custom Development
                                  E-commerce Integration
                                  Priority Support"
                        revisions=" 10 Rounds of Revisions"

                    />
                    <div className="col-12 Store rounded-4 w-50 mx-auto text-uppercase  my-5 text-center  py-4 border-bottom">
                        <h2 className="font-weight-bold mb-0">Shopify Plans</h2>
                    </div>

                    <Charges
                        path="/contact"
                        plan="Starter Plan"
                        price="699"
                        Pages="Theme Setup"
                        services="Basic Product Upload (up to 10 products)
                           Payment Gateway Integration"
                        revisions="2 Rounds of Revisions"

                    />

                    <Charges
                        path="/contact"
                        plan="Professional Plan"
                        price="1,299"
                        Pages="Custom Storefront Design"
                        services="Advanced Product Upload (up to 50 products)
                          SEO Optimization
                         App Integration"
                        revisions="4 Rounds of Revisions"

                    />

                    <Charges
                        path="/contact"
                        plan="Enterprise Plan"
                        price="2,499+"
                        Pages="Fully Custom Store Design"
                        services="Unlimited Product Uploads 
                                  Custom App Development
                                  Priority Support"
                        revisions="4 Rounds of Revisions"

                    />

                </div>
                <NavLink
                    to="/contact"
                    onClick={() => {
                        window.scrollTo(0.0);
                    }}
                    className="hovv2 col-md-3 my-5 col-sm-8 py-3 mt-5 mx-auto d-flex align-items-center justify-content-between px-5 "
                >
                    <div style={{ textTransform: "uppercase" }}> individual service</div>
                    <div className="rounded-circle" style={{ backgroundColor: "black" }}>
                        <svg
                            style={{
                                width: "35px",
                                backgroundColor: "dark",
                                padding: "10px",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="white"
                                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                            />
                        </svg>{" "}
                    </div>
                </NavLink>
            </div>
            <div     className="row g-0">
                <div className="col-md-10 mx-auto">
                    <div className="d-flex justify-content-between align-items-center ">
                        <div className="col-md-4 mt-3 ">
                            <h2>Other services</h2>
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
                    <div className="row my-5 gx-4 g-0" >
                        <div className="col-md-4 " data-aos="fade-right">
                            <Service_card
                                service="Web Development"
                                detail="Our website development service combines cutting-edge technology with creative design to build responsive, user-friendly sites that drive engagement and enhance your online presence, tailored to meet your unique business needs."
                            />
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                            <Service_card
                                service="Digital Marketing"
                                detail="Accelerate your growth with our digital marketing expertise. We create tailored strategies that include SEO, social media, and content marketing to boost visibility, attract customers, and convert leads into sales effectively."
                            />
                        </div>
                        <div className="col-md-4" data-aos="fade-left">
                            <Service_card
                                service="3D Animations"
                                detail="Bring your ideas to life with our stunning 3D animations. We specialize in creating captivating visuals that communicate your message effectively, whether for advertisements, presentations, or product showcases."
                            />
                        </div>
                    </div>
                </div>
                <div className="row mx-auto  ">
                    <div className="col-md-10 p-0 main-heading mx-auto text-center">
                        <div className="col mt-md-5 mb-5">
                            <h1 className="shadowtxt">
                                Why Woltrio?
                            </h1>

                            <p className="my-md-3 text-uppercase mb-5 my-2 col-md-7 mx-auto text-black">
                                Our dedicated team ensures that your WordPress or Shopify website is not only visually appealing but also functional, secure, and optimized for conversions. From startups to established enterprises, we’ve got the expertise to elevate your online presence.
                            </p>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default Wordpress;
