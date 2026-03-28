import { HiOutlinePhone } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
    return (
        <section id="contact">
            <div className=" bg-black h-[900px]">
                <h2 className="text-5xl font-semibold text-white pt-28 pb-3 text-center">Let’s work together! </h2>
                <h4 className="text-3xl font-medium text-white mb-10 text-center">Contact Me</h4>
                <div className="flex">
                    <div className="bg-gradient-to-r from-purple-600 lg:ml-[250px]   rounded-xl   to-white w-[600px] h-[600px]">
                        <div className="flex ml-20 pt-20">
                            <div className="">
                                <div className="mr-4 mb-5">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="input input-bordered input-info w-full max-w-xs" />
                                </div>
                                <div className="mr-4 ">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="input input-bordered input-info w-full max-w-xs" />
                                </div>
                            </div>
                            <div>
                                <div className="mr-4 mb-5">
                                    <input
                                        type="text"
                                        placeholder="Email Address"
                                        className="input input-bordered input-info w-full max-w-xs" />
                                </div>
                                <div className="mr-4">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="input input-bordered input-info w-full max-w-xs" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 ml-14">
                            <input
                                type="text"
                                placeholder="Message Here"
                                className="input input-bordered input-info w-[500px] h-[250px]" />

                        </div>
                        <div>
                            <button className="btn btn-ghost text-white ml-56 bg-violet-900 text-xl mt-7 rounded-3xl  mr-3">Send Message  </button>
                        </div>

                    </div>
                    <div className="ml-[150px] mt-[150px]">
                        <div className="mb-10">
                            <div className="flex">
                                <h1><HiOutlinePhone className="text-3xl text-blue-700  mr-5" /></h1>
                                <h1 className="text-xl text-white"> Phone</h1>
                            </div>

                            <h2>+880 01759626470</h2>
                        </div>
                        <div className="mb-10">
                            <div className="flex">
                                <h1><TfiEmail className="text-3xl text-blue-700  mr-5" /></h1>
                                <h1 className="text-xl text-white"> Email</h1>
                            </div>

                            <h2>chandroshakhor7@gmail.com</h2>
                        </div>
                        <div>
                            <div className="flex">
                                <h1><SlLocationPin className="text-3xl text-blue-700  mr-5" /></h1>
                                <h1 className="text-xl text-white"> Address</h1>
                            </div>

                            <h2>Khulna,Bangladesh</h2>
                        </div>
                    </div>


                </div>
                <div className="pt-[100px] bg-black">
                    <p className="text-rose-500 text-center mb-5 pb-[20px]">
                        Copyright © {new Date().getFullYear()} - All right reserved by Chandra Shekhor Mondal
                    </p>
                </div>
            </div>

        </section>
    );
};

export default Contact;