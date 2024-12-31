import { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import ButtonD from "../button/ButtonD";

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
            className="col-7 pt-5 main-heading text-white"
            style={{ paddingTop: "80px", paddingBottom: "80px" }}
          >
            <div className="pt-5">
              {" "}
              <h1>
                {" "}
                This is <span>What</span> <br />
                We do
                <span> best</span>{" "}
              </h1>
            </div>
          </div>
          <div>
            <ButtonD text="OUR SERVICES" color="#db7821" fill="#db7821" />
          </div>
          <div className="row d-flex txtt">
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
                      color="#db7821"
                      fill="#db7821"
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
                      color="#db7821"
                      fill="#db7821"
                    />
                  </div>
                </div>
                <div className="col-md-6 mt-md-5 pt-md-5">
                  <h4 >Advertising and Marketing Campaigns</h4>
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
                      color="#db7821"
                      fill="#db7821"
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
                      color="#db7821"
                      fill="#db7821"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
