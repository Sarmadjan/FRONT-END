import { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import ButtonD from "../button/ButtonD";
import Button from "../button/button";


import ButtonD from "../button/ButtonD";
import Button_Rm from "../button/Button-Rm";
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      offset: 120,
    });
  }, []);
  return (
    <div>
      <div className="container-fluid bg-black">
        <div className="col-md-10 mx-auto pt-5 ">
          <div
            className="col-7 pt-5 mt-md-5 mt-0 main-heading text-white"
            style={{ paddingTop: "80px", paddingBottom: "80px" }}
          >
            <div className="pt-5 ">
              {" "}
              <h1>
                {" "}
                This is <span>What</span> <br />
                We do
                <span> best</span>{" "}
              </h1>
            </div>
          </div>
          <div className="me-auto">
            <a href="#sec-1">
              {" "}
              <ButtonD
                text="OUR SERVICES"
                color="#ffa500"
                fill="#ffa500"
              />{" "}
            </a>
          </div>
          <div id="sec-1" className="row d-flex txtt py-0 py-md-5 mt-md-5 mt-0">
            <div className="col-md-5"></div>
            <div className="col-md-7">
              <div className="row gx-5">
                <div className="col-md-6 mt-md-5 pt-md-5">
                  <h4>Branding and Identity Design</h4>
                  <p className="mt-4">
                    Our creative agency is a team of professionals focused on
                    helping your brand grow.
                  </p>
                  <ul>
                    <li>UX Audits</li>
                    <li>Design thinking</li>
                    <li>Methodologies</li>
                    <li>Wireframing</li>
                  </ul>
                  <div>
                    <Button_Rm
                      text="Read more"
                      color="#ffa500"
                      fill="#ffa500"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h4>Website Design and Development</h4>
                  <p className="mt-4">
                    {" "}
                    Our creative agency is a team of professionals focused on
                    helping your brand grow.
                  </p>
                  <ul>
                    <li>UX Audits</li>
                    <li>Design thinking</li>
                    <li>Methodologies</li>
                    <li>Wireframing</li>
                  </ul>
                  <div>
                    <Button_Rm
                      text="Read more"
                      color="#ffa500"
                      fill="#ffa500"
                    />
                  </div>
                </div>
                <div className="col-md-6 mt-md-5 pt-md-5">
                  <h4>Advertising and Marketing Campaigns</h4>
                  <p className="mt-4">
                    Our creative agency is a team of professionals focused on
                    helping your brand grow.
                  </p>
                  <ul>
                    <li>UX Audits</li>
                    <li>Design thinking</li>
                    <li>Methodologies</li>
                    <li>Wireframing</li>
                  </ul>
                  <div>
                    <Button_Rm
                      text="Read more"
                      color="#ffa500"
                      fill="#ffa500"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h4> Creative Consulting Concept Development</h4>
                  <p className="mt-4">
                    Our creative agency is a team of professionals focused on
                    helping your brand grow.
                  </p>
                  <ul>
                    <li>UX Audits</li>
                    <li>Design thinking</li>
                    <li>Methodologies</li>
                    <li>Wireframing</li>
                  </ul>
                  <div>
                    <Button_Rm
                      text="Read more"
                      color="#ffa500"
                      fill="#ffa500"
                    />
                  </div>
                </div>
              </div>
            </div>
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
            className="row main-heading text-center px-5 "
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
              <Button text="Sarmad" />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Services;
