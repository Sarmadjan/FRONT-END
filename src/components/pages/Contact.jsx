
import ButtonD from "../button/ButtonD";
import "./home.css";
import GoogleMap from "../GoogleMap";
const Contact = () => {
  return (
    <div>
      <div className="container-fluid bg-light ">
        <div className="col-md-10 mx-auto  py-5">
          <div className="row main-heading ">
            <div className="pt-5 text-center mt-5">
              {" "}
              <h1> Get in touch!</h1>
            </div>
            <div>
              <ButtonD text="Send message" />
            </div>
          </div>
        </div>
        <div className="row m-0">
          <GoogleMap />
        </div>
        <div className="col-md-10 mx-auto">
          <div className="pt-5 text-center my-5 py-5">
            {" "}
            <h1 style={{ fontWeight: "bolder" }}>
              {" "}
              Lets <span style={{ fontWeight: "200" }}> Talk! </span>
            </h1>
          </div>
          <div className="row gx-5 py-5 mx-2">
            <form action="" className=" form-style">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="w-100 p-3"
                    placeholder="WHAT'S YOUR NAME"
                    aria-label=""
                    aria-describedby=""
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="w-100 p-3"
                    placeholder="WHAT'S YOUR NAME"
                    aria-label=""
                    aria-describedby=""
                  />
                </div>
                <div className="col mt-md-3 ">
                  <textarea
                    className="w-100 p-3"
                    name=" "
                    id=""
                    placeholder="Tell us about our project"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
