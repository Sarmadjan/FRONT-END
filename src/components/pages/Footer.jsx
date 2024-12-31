import Footer_li from "../Footer/Footer_li";
import Li2 from "../Footer/Li2";
import "./footer.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      offset: 120,
    });
  }, []);
  return (
    <div className="Container-fluid bg-black Footer text-light py-5">
      <div className="col-md-10 mx-auto">
        <div className="row  mx-2 mx-md-0">
          <div className="col-md-6">
            <span
              data-aos="fade-right"
              style={{
                fontSize: "42px",
                fontWeight: "500",
                lineheight: "100%",
              }}
            >
              Ashley.
            </span>
            <p className="mt-4 " data-aos="fade-up">
              Subscribe our newsletter:
            </p>
            <div className="input-group input-group-lg w-50 mt-4">
              <div className="custom-input-wrapper">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="ENTER YOUR EMAIL"
                />
                <button className="custom-arrow-btn">
                  <svg
                    style={{ width: "25px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                    fill="white" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>{" "}
                </button>
              </div>
              <div> </div>
            </div>
          </div>
          <div className="col-md-3 mt-2" data-aos="fade-up">
            <Footer_li name="Home" path="/" />
            <Footer_li name="Portfolio" path="/portfolio" />
            <Footer_li name="Services" path="/services" />
            <Footer_li name="Contact" path="/contact" />
          </div>
          <div className="col-md-3 mt-3" data-aos="fade-up">
            <Li2 name="Privacy Policy" path="" />
            <Li2 name=" Terms and Conditions" path="" />
            <Li2 name="Cookie Policy" path="" />
            <Li2 name="Careers" path="" />
          </div>
        </div>
        <div className="row mt-5 mx-2 mx-md-0 " data-aos="fade-up">
          <div className="col-md-6   " data-aos="fade-up">
            <div className="col svg-width">
              <a href="">
                <i data-aos="fade-up">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      fill="#fcfcfc"
                      d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"
                    />
                  </svg>
                </i>
              </a>
              <a href="">
                <i data-aos="fade-up">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="#fcfcfc"
                      d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z"
                    />
                  </svg>
                </i>
              </a>
              <a href="">
                <i data-aos="fade-up">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="#fcfcfc"
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    />
                  </svg>
                </i>
              </a>
              <a href="">
                <i data-aos="fade-up">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path
                      fill="#fcfcfc"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </i>
              </a>
            </div>
            <p>© 2024 Ashley. All Rights Reserved. </p>
          </div>
          <div className="col-md-3 " data-aos="fade-up">
            <h4 className="text-white"> Canada</h4>
            <p>71 South Los Carneros Road, California +51 174 705 812 </p>
          </div>
          <div className="col-md-3" data-aos="fade-up">
            <h4 className="text-white"> Germany</h4>
            <p>Leehove 40, 2678 MC De Lier, Netherlands +31 174 705 811</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
