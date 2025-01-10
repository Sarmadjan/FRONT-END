import Footer_li from "../Footer/Footer_li";
import Li2 from "../Footer/Li2";
import "./footer.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../images/Logo Dark.svg";
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
    <div className="Container-fluid bg-black Footer text-light pb-5 pt-5" >
      <div className="col-md-10   mx-auto">
        <div className="row  mx-2 mx-md-0 my-md-5" data-aos="fade-up">
          <div className="col-md-6" >
            <span

              style={{
                fontSize: "42px",
                fontWeight: "500",
                lineheight: "100%",
              }}
             >
              <img width={220} src={logo} alt="" />
            </span>
            <p className="mt-4 " >
              Subscribe our newsletter:
            </p>
            <div className="input-group input-group-lg w-50 mt-4">
              <div  className="custom-input-wrapper w-100">
                <input style={{paddingLeft:"40px",paddingRight:"50px"}}
                  type="text"
                  className="custom-input  py-md-4  "
                  placeholder="ENTER YOUR EMAIL"
                />
                <button style={{backgroundColor:"#ff9800"}} className="custom-arrow-btn">
                  <svg
                    style={{ width: "25px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="black"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>{" "}
                </button>
              </div>
              <div> </div>
            </div>
          </div>
          <div className="col-md-3  "  >
            <Footer_li name="Home" path="/" />
            <Footer_li name="Portfolio" path="/portfolio" />
            <Footer_li name="Services" path="/services" />
            <Footer_li name="Contact" path="/contact" />
          </div>
          <div className="col-md-3 " >
            <Li2 name="Privacy Policy" path="" />
            <Li2 name=" Terms and Conditions" path="" />
            <Li2 name="Cookie Policy" path="" />
            <Li2 name="Careers" path="" />
          </div>
        </div>
        <div className="row pt-md-5 my-5 mx-2 mx-md-0  " data-aos="fade-up"  >
          <div className="col-md-6 mb-md-4   ">
            <div className="col svg-width fw-bolder">

              <a href="https://www.linkedin.com/company/woltrio/" target="_blank">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                </i>
              </a>
              <a href="">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="#fcfcfc"
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    />
                  </svg>
                </i>
              </a>
              <a href="">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path
                      fill="#fcfcfc"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </i>
              </a>
            </div>
            <p >© {new Date().getFullYear()} Woltrio. All Rights Reserved. </p>
          </div>
          <div className="col-md-3 mb-md-4 ">
            <h5  className="text-white fw-bolder"> <span style={{color:'rgba(255, 255, 255, 0.4)', fontWeight:"500"}}>Islamic Republic of</span> Pakistan</h5>
            <p>1st Floor, Gondal Arcade, Satelite Town, Rawalpindi </p>
          </div>
          {/* <div className="col-md-3 mb-md-4">
            <h5 className="text-white fw-bolder"> Germany</h5>
            <p>Leehove 40, 2678 MC De Lier, Netherlands +31 174 705 811</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
