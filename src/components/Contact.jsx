import { HiOutlinePhone } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact">
            {/* className="   */}
            <div className=" bg-gradient-to-r from-black via-gray-900 to-black  h-[950px]  ">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl font-bold font-poppins text-white pt-30 pb-3 text-center ">
                        Let’s work together!
                    </h2>
                    <h4 className="text-4xl font-semibold text-white font-poppins mb-[65px] text-center">
                        Contact Me
                    </h4>
                </motion.div>
                <div className="lg:flex justify-center">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-r from-purple-600 to-violet-500 rounded-xl lg:ml-0 ml-[8px] lg:w-[570px] w-[340px] lg:h-[550px] h-[530px] shadow-2xl pt-[35px] "
                    >
                        <div className="flex gap-5 ml-[35px]">
                            <div className="flex flex-col gap-5">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="input input-bordered input-info hover:border-[2px] hover:border-pink-300 w-[240px]  max-w-xs hover:scale-105 transition-transform duration-300"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="input input-bordered input-info hover:border-[2px] hover:border-pink-300 w-[240px] max-w-xs hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex flex-col gap-5">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    className="input input-bordered input-info hover:border-[2px] hover:border-pink-300 w-[240px] max-w-xs hover:scale-105 transition-transform duration-300"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="input input-bordered input-info hover:border-[2px] hover:border-pink-300 w-[240px] max-w-xs hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>

                        <div className="mt-10 ml-[35px]">
                            <textarea
                                placeholder="Message Here"
                                className="input input-bordered input-info hover:border-[2px] hover:border-pink-300 w-[500px] lg:h-[250px] h-[200px] hover:scale-105 transition-transform duration-300 p-3 resize-none"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: "#7e22ce" }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-ghost text-white lg:ml-[180px] ml-[55px] bg-violet-900 text-xl mt-7 rounded-3xl p-2 shadow-lg transition-colors duration-300"
                        >
                            Send Message
                        </motion.button>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="lg:ml-[150px] ml-[50px] mt-[150px] text-white space-y-10">
                        <motion.div
                            className="flex items-center gap-5"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        >
                            <HiOutlinePhone className="text-3xl text-blue-500 animate-bounce" />
                            <div>
                                <h1 className="text-xl">Phone</h1>
                                <h2>+880 01759626470</h2>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-center gap-5"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
                        >
                            <TfiEmail className="text-3xl text-blue-500 animate-bounce" />
                            <div>
                                <h1 className="text-xl">Email</h1>
                                <h2>chandroshakhor7@gmail.com</h2>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-center gap-5"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, type: "spring", stiffness: 100 }}
                        >
                            <SlLocationPin className="text-3xl text-blue-500 animate-bounce" />
                            <div>
                                <h1 className="text-xl">Address</h1>
                                <h2>Khulna, Bangladesh</h2>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
            <div className="pt-[50px] bg-gradient-to-r from-black via-gray-900 to-black">
                <p className="text-rose-500 text-center mb-[30px] pb-[30px]">
                    Copyright © {new Date().getFullYear()} - All right reserved by Chandra Shekhor Mondal
                </p>
            </div>

        </section>
    );
};

export default Contact;