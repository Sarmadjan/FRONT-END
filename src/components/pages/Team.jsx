import { NavLink } from "react-router-dom";
import TeamCard from "../TeamCard";
import ButtonD from "../button/ButtonD";
import Button from "../button/Button";
import Img4 from "../images/p4.jpg";
import "./home.css";
import Navbar from "../Navbar";
import { motion } from 'framer-motion';
const Team = () => {
    return (
        <div>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:.1}}
             
             className="row g-0">
                <div className="col-md-10 mx-auto">
                <Navbar/>
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

                    <div id="section2" className="row  my-5 g-5 mx-0 px-0 py-5">
                        <div className="col-md-3" data-aos="zoom-in">
                            <TeamCard
                                name="Ehtisham Ilyas"
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                                linkedin="https://www.linkedin.com/in/ehtisham-ilyas/" />
                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <TeamCard
                                name="Syed Ali Musa
 "
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                                linkedin="https://www.linkedin.com/in/syedalimusa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            />
                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <TeamCard
                                name="Awon Ali
"
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                                linkedin="https://www.linkedin.com/in/awon-ali-294877122/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            />
                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <TeamCard
                                name="Syed Ali Musa
 "
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                                linkedin="https://www.linkedin.com/in/syedalimusa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            />
                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <TeamCard
                                name="Yasir Khan"
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                                linkedin="https://www.linkedin.com/in/yasir-khan-a58677137/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            />
                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <TeamCard
                                name="Sher (Ali) Khan"
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                                linkedin="https://www.linkedin.com/in/sharewithsher/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            />
                        </div>
                        <div className="col-md-3  " data-aos="zoom-in">
                            <TeamCard
                                name="Waqas Hussain"
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                                linkedin="https://www.linkedin.com/in/waqas-hussain-a2637b15b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            />
                        </div>
                        <div className="col-md-3" data-aos="zoom-in">
                            <TeamCard
                                name="Ema Oldman"
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                            />
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
            </motion.div>

        </div>
    )
}

export default Team
