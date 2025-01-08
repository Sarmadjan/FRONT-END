import { NavLink } from "react-router-dom";
import TeamCard from "../TeamCard";
import ButtonD from "../button/ButtonD";
import Button from "../button/button";
import Img4 from "../images/p4.jpg";
import "./home.css";
const Team = () => {
    return (
        <div>
            <div className="row g-0">
                <div className="col-md-10 mx-auto">
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
                            <ButtonD text="Our Team" />
                        </div>
                    </div>

                    <div className="row  my-5 g-5 mx-0 px-0 py-5">
                        <div className="col-md-3">
                            <TeamCard
                                name="Ema Oldman"
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                            />
                        </div>
                        <div className="col-md-3">
                            <TeamCard
                                name="Ema Oldman"
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                            />
                        </div>
                        <div className="col-md-3">
                            <TeamCard
                                name="Ema Oldman"
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                            />
                        </div>
                        <div className="col-md-3">
                            <TeamCard
                                name="Ema Oldman"
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                            />
                        </div>
                        <div className="col-md-3">
                            <TeamCard
                                name="Ema Oldman"
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                            />
                        </div>
                        <div className="col-md-3">
                            <TeamCard
                                name="Ema Oldman"
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                            />
                        </div>
                        <div className="col-md-3">
                            <TeamCard
                                name="Ema Oldman"
                                imgsrc={Img4}
                                title={"ART DIRECTOR"}
                            />
                        </div>
                        <div className="col-md-3">
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
            </div>

        </div>
    )
}

export default Team
