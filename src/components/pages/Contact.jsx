

import "./home.css";
import "../Charges.css";

// import GoogleMap from "../GoogleMap";
import { useState } from "react";

import emailjs from '@emailjs/browser'
import Navbar from "../Navbar";

const Contact = () => {
  const [loading, setIsLoading] = useState(false)
  const [msg, setMsg] = useState("")
  const initialState = {
    name: "",
    Number: "",
    email: "",
    type: "",
    message: "",
  }
  const [formData, setFormData] = useState(initialState)
  const handleSubmit = async (e) => {
    setIsLoading(true)

    try {
      e.preventDefault()
      const res = await emailjs.send('service_3be2sfq', 'template_53137um', { to_name: "Woltrio", message: formData.message, from_name: formData.name, type: formData.type, Number: formData.Number }, {
        publicKey: "K74BWp8TF2bWZLOvB"
      })
      if (res.status == 200) {
        setMsg('RESPONCE SENT')
        setFormData(initialState)
      } else {
        setMsg('falied to send mail')
      }
      console.log(formData)

    } catch (error) {
      console.log(error)
    }
    finally {
      setIsLoading(false)
    }
  }
  return (
    <div>
      <div className="container-fluid bg-white ">
        <Navbar />
        <div className="col-md-10 mx-auto  py-5">
          <div className="row main-heading ">
            <div className="pt-5 my-md-5 my-2 text-center mt-5">
              {" "}
              <h1> Get in touch!</h1>
            </div>
            <div>
              <a href="#sec-contact" className=" col-md-3 py-3 mt-4 mx-auto d-flex align-items-center justify-content-center px-5 " >
                <div style={{ textTransform: "uppercase", fontWeight: "bold" }}> <span className="text-black">Send Message </span></div>
                <div className=" ms-3" style={{ backgroundColor: "black", borderRadius: "50%" }}>
                  <svg style={{ width: "35px", height: "35px", backgroundColor: 'dark', padding: "12px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      fill="white"
                      d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    />
                  </svg>
                </div>


              </a>
            </div>
          </div>
        </div>
        <div className="row py-md-5 my-md-5">
          {/* <GoogleMap />             Google Map                     */}
        </div>
        <div className="col-md-10 mx-auto">
          <div id="sec-contact" className="pt-5 text-center my-5 py-5">
            {" "}
            <h1 style={{ fontWeight: "bolder" }}>
              {" "}
              Lets <span style={{ fontWeight: "200" }}> Talk! </span>
            </h1>
          </div>
          <div className="row gx-5 py-5 mx-2">
            <form action="" className=" form-style" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="w-100 p-3"
                    placeholder="NAME"
                    aria-label=""
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value })

                    }}
                    aria-describedby=""
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    className="w-100 p-3"
                    placeholder="Phone Number"
                    aria-label=""
                    required
                    onChange={(e) => {
                      setFormData({ ...formData, Number: e.target.value })

                    }}
                    aria-describedby=""
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="w-100 p-3"
                    placeholder="Enter Your Email"
                    aria-label=""
                    required
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                    }}
                    aria-describedby=""
                  />
                </div>


                <div className="col-md-6">
                  <input
                    type="text"
                    className="w-100 p-3"
                    placeholder="Select service type"
                    aria-label=""
                    required
                    onChange={(e) => {
                      setFormData({ ...formData, type: e.target.value })

                    }}
                    aria-describedby=""

                  />

                </div>
                <div className="col mt-md-3 ">
                  <textarea
                    className="w-100 p-3"
                    name=" "
                    id=""
                    required
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                    }}
                    placeholder="Message "
                  ></textarea>
                </div>

              </div>
              <button type="submit" className="hovv3 col-md-3  py-2 mt-4 ms-auto d-flex align-items-center justify-content-between px-4 " >
                <div style={{ textTransform: "uppercase", margin: "0 20px" }}>
                  {loading ? <div>
                    Loading...
                  </div> : <div>
                    Send Message
                  </div>}
                </div>
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


              </button>
            </form>
            <div  >
              {msg && <div className="text-success ">{msg}</div>}
            </div>
            <div className="row d-flex justify-content-center mt-5 align-items-center">
              <div className="col-md-6 text-center">
                <span className="text-warning ">* </span> We promise not to disclose your personal information to third parties.
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
