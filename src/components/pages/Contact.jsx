/* eslint-disable react/no-unknown-property */

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
        setMsg('RESPONSE SENT')
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
                    placeholder="Name *"
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
                    className="w-100 p-3 "
                    placeholder="Phone Number *"
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
                    placeholder="Enter Your Email *"
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
                    <option value=""> <span>Select service type * </span></option>
                    <option value="Web Development">Front-end Development</option>
                    <option value="Mobile App Development">Back-end Development</option>
                    <option value="Digital Marketing">Mobile App Development</option>
                    <option value="SEO Services">Wordpress</option>
                    <option value="SEO Services">Shopify</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="3D Animations">3D Animations</option>
                    <option value="3D Animations">2D Animations</option>
                    <option value="3D Animations">Cinematic Promos</option>
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
                    placeholder="Message * "
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

              <div className="col-md-8 ">
                <div className="container p-5 bdbd bg-light-subtle border border-3 rounded py-5">
                  <h1>Secure Payment Options</h1>
                  <p>We ensure safe and hassle-free transactions for all our clients.</p>
                  <div className="row">
                    <div className="col-10"><h3 >Bank Wire Transfer (SWIFT)</h3>
                      <p className="text-black">Ideal for secure, large transactions.</p></div>
                    <div className="col-2"><i className="ww" > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 156.1c0-4.5-.1-9-.2-13.5a196.3 196.3 0 0 0 -2.6-29.4 99.6 99.6 0 0 0 -9.2-28A94.1 94.1 0 0 0 394.8 44a99.2 99.2 0 0 0 -28-9.2 195 195 0 0 0 -29.4-2.6c-4.5-.1-9-.2-13.5-.2H124.1c-4.5 0-9 .1-13.5 .2-2.5 .1-4.9 .2-7.4 .3a171.7 171.7 0 0 0 -22.1 2.3 103.1 103.1 0 0 0 -21.2 6.1q-3.5 1.5-6.8 3.1a94.7 94.7 0 0 0 -18.4 12.3c-1.9 1.6-3.7 3.3-5.4 5A93.9 93.9 0 0 0 12 85.2a99.5 99.5 0 0 0 -9.2 28 196.3 196.3 0 0 0 -2.5 29.4c-.1 4.5-.2 9-.2 13.5v199.8c0 4.5 .1 9 .2 13.5a196.1 196.1 0 0 0 2.6 29.4 99.3 99.3 0 0 0 9.2 28A94.3 94.3 0 0 0 53.2 468a99.5 99.5 0 0 0 28 9.2 195 195 0 0 0 29.4 2.6c4.5 .1 9 .2 13.5 .2H323.9c4.5 0 9-.1 13.5-.2a196.6 196.6 0 0 0 29.4-2.6 99.6 99.6 0 0 0 28-9.2A94.2 94.2 0 0 0 436 426.8a99.3 99.3 0 0 0 9.2-28 194.8 194.8 0 0 0 2.6-29.4c.1-4.5 .2-9 .2-13.5V172.1c0-5.4 0-10.7 0-16.1zm-69.9 241c-20-38.9-57.2-29.3-76.3-19.5-1.7 1-3.5 2-5.3 3l-.4 .3c-39.5 21-92.5 22.5-145.9-.4A234.6 234.6 0 0 1 45 290.1a230.6 230.6 0 0 0 39.2 23.4c56.4 26.4 113 24.5 153 0-57-43.9-104.6-101-141.1-147.2a197.1 197.1 0 0 1 -18.8-25.9c43.7 40 112.7 90.2 137.5 104.1-52.6-55.5-98.9-123.9-96.7-121.7 82.8 83.4 159.2 130.6 159.2 130.6 2.9 1.6 5 2.9 6.7 4a127.4 127.4 0 0 0 4.2-12.5c13.2-48.3-1.7-103.6-35.3-149.2C329.6 141.8 375 229.3 356.4 303.4c-.4 1.7-1 3.4-1.4 5.1 38.5 47.4 28 98.2 23.1 88.6z" /></svg></i>
                    </div>
                    <div className="col-10"> <h3>Payoneer</h3>
                      <p className="text-black">A reliable and cost-effective international payment solution.</p>
                    </div>
                    <div className="col-2">
                      <i className="ww"><svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>payoneer</title> <path d="M30.132 3.312c0.387 0.28 1.732 1.693 0 1.907-2.479 0.292-7.198 0.466-15.023 7.011-5.491 4.759-9.928 10.574-13.021 17.147l-0.134 0.316c-0.035 0.083-0.115 0.141-0.209 0.141-0.022 0-0.042-0.003-0.062-0.009l0.002 0c-0.319-0.092-0.892-0.44-0.6-1.772 2.806-7.801 7.459-14.36 13.448-19.378l0.070-0.057c3.105-2.693 10.517-9.037 15.528-5.305zM2.846 5.141c0.292 2.252 1.293 7.050 1.747 9.076 0.077 0.475 0.207 0.9 0.386 1.299l-0.013-0.033c0.626 1.081 1.133-0.359 1.133-0.359 0.421-1.076 0.665-2.323 0.665-3.626 0-2.717-1.061-5.186-2.79-7.016l0.005 0.005c-0.205-0.219-0.46-0.389-0.747-0.491l-0.013-0.004c-0.4-0.119-0.467 0.107-0.467 0.295 0.013 0.185 0.081 0.706 0.094 0.852z"></path> </g></svg></i>

                    </div>
                    <div className="col-10"> <h3>PayPal</h3>
                      <p className="text-black">Fast and convenient for global transactions.</p>
                    </div>
                    <div className="col-2">
                      <i className="ww"><svg viewBox="-1.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>paypal [#140]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" fill="none" > <g id="Dribbble-Light-Preview" transform="translate(-222.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M182.475463,7404.9 C181.260804,7410.117 177.555645,7411 172.578656,7411 L171.078137,7419 L173.825411,7419 C174.325918,7419 174.53555,7418.659 174.627828,7418.179 C175.312891,7413.848 175.216601,7414.557 175.278788,7413.879 C175.337966,7413.501 175.664951,7413 176.049108,7413 C179.698098,7413 182.118387,7411.945 182.857614,7408.158 C183.120405,7406.811 183.034145,7405.772 182.475463,7404.9 M171.134306,7410.86 L170.011926,7417 L166.535456,7417 C166.206465,7417 165.954707,7416.598 166.006864,7416.274 L168.602682,7399.751 C168.670887,7399.319 169.045014,7399 169.484337,7399 L175.718111,7399 C179.409228,7399 181.894714,7400.401 181.319983,7404.054 C180.313953,7410.56 174.737157,7410 172.199514,7410 C171.760191,7410 171.203515,7410.428 171.134306,7410.86" id="paypal-[#140]"> </path> </g> </g> </g> </g></svg></i>

                    </div>
                  </div>
                  <div className="alert alert-warning">
                    <h4 className="alert-heading">Security Notice <span><i ><svg width={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg></i></span></h4>
                    <p className="text-black">We never ask for your credit card details or request payments through any other platform. If you receive such a request claiming to be from us, please report it immediately.</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
