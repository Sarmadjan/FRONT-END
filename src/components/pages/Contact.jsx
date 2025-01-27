

import "./home.css";
import "../Charges.css";

// import GoogleMap from "../GoogleMap";
import { useState } from "react";

import emailjs from '@emailjs/browser'
import Navbar from "../Navbar";
import { motion } from 'framer-motion';

import ButtonSubmit from "../button/ButtonSubmit";

const Contact = () => {
  const [loading, setIsLoading] = useState(false)
  const [msg, setMsg] = useState("")
  const initialState = {
    name: "",
    number: "",
    email: "",
    type: "",
    message: "",
  }
  const [formData, setFormData] = useState(initialState)
  const handleSubmit = async (e) => {
    setIsLoading(true)

    try {
      e.preventDefault()
      const res = await emailjs.send('service_3be2sfq', 'template_53137um', { to_name: "Woltrio", message: formData.message, from_name: formData.name, type: formData.type, Number: formData.number }, {
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .1 }}
        className="container-fluid bg-white px-0 mx-0 overflow-hidden ">
       
        <div className="col-md-10 mx-auto  ">
        <Navbar />
          <div className="row main-heading ">
            <div className="pt-5 my-5  text-center mt-md-5 ">
              {" "}
              <h1> Get in touch!</h1>
            </div>
            <div>
              <a href="#sec-contact" className=" col-md-3 py-3 mt-md-4 mx-auto d-flex align-items-center justify-content-center px-5 " >
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
          <div id="sec-contact" className="pt-md-5 text-center mt-5 py-md-5">
            {" "}
            <h1 style={{ fontWeight: "bolder" }}>
              {" "}
              Lets <span style={{ fontWeight: "200" }}> Talk! </span>
            </h1>
          </div>
          <div className="row gx-5 py-5 mx-2 mb-5">
            <form action="" className=" form-style" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="w-100 p-3"
                    placeholder="Name"
                    aria-label=""
                    required
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
                      setFormData({ ...formData, number: e.target.value })

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
                  <select className="w-100 " required onChange={(e) => { setFormData({ ...formData, type: e.target.value }) }}>
                    <option value=""> <span>Select service type </span></option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="SEO Services">SEO Services</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="3D Animations">3D Animations</option>
                  </select>
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

              <ButtonSubmit text="Send Message" type="submit">
                <div>
                  {loading ? <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div> : <div>

                  </div>}
                </div>
              </ButtonSubmit>

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
      </motion.div>
    </div>
  );
};

export default Contact;
