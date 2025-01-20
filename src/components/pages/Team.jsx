import { NavLink } from "react-router-dom";

import ButtonD from "../button/ButtonD";
import Button from "../button/Button";
import TeamCard from "../TeamCard";

import "./home.css";
import Navbar from "../Navbar";
import { motion } from 'framer-motion';
import { useEffect } from "react";

const Team = () => {
    useEffect(() => {
        // Load LinkedIn's profile badge script
        const script = document.createElement("script");
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, []);
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .1 }}

                className="row g-0">
                <div className="col-md-10 mx-auto">
                    <Navbar />
                    <div className="col-md-7 pt-5 mt-5">
                        <div className="pt-5 px-md-0 px-3 main-heading">
                            {" "}
                            <h1>
                                {" "}
                                Meet <span> Our </span> <br />
                                Creative <span> Team</span>{" "}
                            </h1>
                        </div>
                        <div className="row my-md-5 g-0">
                            <a href="#section2">
                                <ButtonD text="Our Team" />
                            </a>
                        </div>
                    </div>

                    <div id="section2" className="row d-none d-md-flex my-5 g-5 mx-0 px-0 py-5">
                        <div className="col-md-3" data-aos="zoom-in">

                            <div className="  badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="ehtisham-ilyas" data-version="v1"><a className=" badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/ehtisham-ilyas?trk=profile-badge"></a></div> </div>

                        <div className="col-md-3" data-aos="zoom-in">
                            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="yasir-khan-a58677137" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/yasir-khan-a58677137?trk=profile-badge"></a></div>


                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <div className=" col-md-3 badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="awon-ali-294877122" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/awon-ali-294877122?trk=profile-badge"></a></div>


                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <div className=" col-md-3 badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="sharewithsher" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/sharewithsher?trk=profile-badge"></a></div>


                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="zain-ul-emaan-a03365319" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/zain-ul-emaan-a03365319?trk=profile-badge"></a></div>

                        </div>
                        <div className="col-md-3  " data-aos="zoom-in">
                            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="muhammad-talha-7480492b0" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/muhammad-talha-7480492b0?trk=profile-badge"></a></div>


                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="sarmad06" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/sarmad06?trk=profile-badge"></a></div>


                        </div>

                        <div className="col-md-3" data-aos="zoom-in">
                            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="ehtisham-ilyas" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/ehtisham-ilyas?trk=profile-badge"></a></div>


                        </div>


                    </div>
                    <div id="section2" className="row d-md-none d-sm-block my-5 g-5 mx-0 px-0 py-5">

                        <div className="col-md-3" data-aos="zoom-in">
                            <TeamCard
                                name="Ehtisham Ilyas"
                                imgsrc={'/images/Team/Ehtisham Ilyas.jfif'}
                                title={"ART DIRECTOR"}
                                linkedin="https://www.linkedin.com/in/ehtisham-ilyas/" />
                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <TeamCard
                                name="Yasir Khan"
                                imgsrc={'/images/Team/yasir khan.jfif'}
                                title={"ART DIRECTOR"}
                                linkedin="https://www.linkedin.com/in/yasir-khan-a58677137/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            />
                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <TeamCard
                                name="Awon Ali
"
                                imgsrc={'/images/Team/aawn.jfif'}
                                title={"ART DIRECTOR"}
                                linkedin="https://www.linkedin.com/in/awon-ali-294877122/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            />
                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <TeamCard
                                name="Sher Khan
 "
                                imgsrc={'/images/Team/Sher Khan.jfif'}
                                title={"ART DIRECTOR"}
                                linkedin="https://www.linkedin.com/in/syedalimusa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            />
                        </div>


                        <div className="col-md-3  " data-aos="zoom-in">
                            <TeamCard
                                name="Waqas Hussain"
                                imgsrc={'/images/Team/Waqas Hussain.jfif'}
                                title={"ART DIRECTOR"}
                                linkedin="https://www.linkedin.com/in/waqas-hussain-a2637b15b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            />
                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <TeamCard
                                name="ZAIN UL EMAAN"
                                linkedin="https://www.linkedin.com/in/zain-ul-emaan-a03365319/overlay/photo/"
                                imgsrc={'/images/Team/Zain.jfif'}
                                title={"Backend Developer"}
                            />
                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <TeamCard
                                name="Muhammad Talha
 "
                                linkedin="https://www.linkedin.com/in/muhammad-talha-7480492b0/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                imgsrc={'/images/Team/Talha.jfif'}
                                title={"Full Stack developer"}
                            />
                        </div>
                        <TeamCard
                            name="SARMAD ALi"

                            linkedin="https://www.linkedin.com/in/sarmad06"
                            imgsrc={'/images/Team/Sarmad.jpg'}
                            title={"Front-end Intern"}
                        />
                    </div>
                    <div>
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
            </motion.div>

        </div>
    )
}

export default Team





