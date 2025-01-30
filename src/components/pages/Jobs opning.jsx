import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import "./home.css";
import { NavLink } from 'react-router-dom';
import JobListings from '../Job Listing';

const Jobs = () => {
    return (
        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .1 }}>

            <div className="row bg-black  g-0">
                <div className="col-md-10  mx-auto">
                    <Navbar />
                    <div className=" col-md-6 mx-auto px-md-0 px-3 py-md-5 py-0 my-md-5 my-0 ">
                        <div className="  text-white  text-center">
                            {" "}
                            <h1 className=''>
                                <h1 className='my-5 '> Developers , Animators & Editors</h1>
                                <span className=''>Are You the Next to Join Us?</span>

                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0 bg-white text-black">
                <div className="col-md-10 px-md-0 px-3 mx-auto">
                    <div className="col-md-7 pt-5 mx-auto text-center">
                        <h3>Join Our Remarkable Team of Innovators Who Believe In Making a Difference.</h3>
                    </div>
                    <hr />
                    <JobListings />
                    <hr />

                    <div className="row d-flex align-items-center justify-content-center text-white g-0 bg-primary rounded">
                        <div className="col-md-9 px-md-5 px-3 my-5">
                            <div className="col"><h2>Create Your Own Job Profile</h2>
                                <span >
                                    We are always hiring innovative folks at Brainstorm Force. If you can’t find a role that fits you from our open positions, we welcome you to apply and create your own job profile. Our HR team will get in touch with you for further steps.

                                </span></div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center pb-md-0 pb-5 ">

                            <NavLink to={"/contact"}> <button style={{ height: "40px" }} type="button" className="  btn btn-light">GET STARTED </button></NavLink>

                        </div>

                    </div>
                    <div className="row d-flex align-items-center justify-content-center bg-white">

                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 px-md-0 px-3 my-5">
                                <div className="col">
                                    <h2>Why You Should Join Our Awesome Team</h2>
                                    <span>This isn’t just another job. It’s a career, a company you can grown and learn with. Opportunity aplenty and a focused, driven team.</span>
                                </div>
                            </div>
                            <div className="col-md-6   d-flex justify-content-center my-5">
                                <div className="row  justify-content-center  ">
                                    {[
                                        { image: '/images/Jobs/1.png', title: 'Friendly Environment' },
                                        { image: '/images/Jobs/2.png', title: 'Open Communication' },
                                        { image: '/images/Jobs/3.png', title: 'Onsite Working Environment' },
                                        { image: '/images/Jobs/1.png', title: 'Learning Opportunity' },
                                        { image: '/images/Jobs/2.png', title: 'Competitive Base Salary' },
                                        { image: '/images/Jobs/3.png', title: 'Upgrade Your Skills' },
                                    ].map((item, index) => (

                                        <div key={index} className="col-md-3 col-4 m-2  border p-2   d-flex  flex-column align-items-center">

                                            <img style={{ width: '60px' }} src={item.image} alt="" />
                                            <strong className='text-center mt-2'>{item.title}</strong>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row my-4">
                        <div className="col-md-7">
                            <div className="col">
                                <h2>Amazing People Striving to Build Delightful Products Together.</h2>
                                <p className='text-black pt-3'>We’re a team of 70+ innovative and passionate individuals, including developers, animators, video editors, and creatives from various fields. We specialize in bringing ideas to life through cutting-edge designs, captivating animations, and seamless development.Our expertise powers groundbreaking projects, with thousands of creators relying on our tools and solutions to build, inspire, and entertain. Every day, we help craft more than 1500 digital experiences across the globe.</p>
                            </div>

                        </div>
                        <div className="col-md-5 mt-3 px-md-0 p-3 position-relative">
                            <i className='abc '>
                                <svg style={{ width: "40px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><  path fill=' #ff9800' d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z" /></svg>

                            </i>

                            <div className='border rounded p-5 text-center'>
                                <p className='text-black'>“TheDotnetworks is now over 5 years old, and our mission is simple “to help businesses grow online” — every day, my colleagues inspire me with their passion and dedication to this mission. I couldn’t wish for better colleagues.”</p>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </motion.div >

    )
}

export default Jobs
