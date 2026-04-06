import { GiGraduateCap } from "react-icons/gi";
import { motion } from "framer-motion";
const Skills = () => {

    const skills = [
        { name: "HTML", src: "https://i.ibb.co/GHDn9wY/HTML.png" },
        { name: "CSS", src: "https://i.ibb.co/4YFH8rz/css.png" },
        { name: "JavaScript", src: "https://i.ibb.co/kxVpg7V/Java-Script.png" },
        { name: "React", src: "https://i.ibb.co/bKp9mFP/react.png" },
        { name: "Tailwind", src: "https://i.ibb.co/h8xTh68/tailwind.png" },
        { name: "Firebase", src: "https://i.ibb.co/s5Hh81r/firebase.png" },
        { name: "Node.js", src: "https://i.ibb.co/ZWz3SHr/node.png" },
        { name: "Express", src: "https://i.ibb.co/tYfnKcB/express.png" },
        { name: "MongoDB", src: "https://i.ibb.co/xSGpYQZ/mongo.png" },
    ];
    return (
        <section id="skills" >
            <div className="bg-white mb-10  ">
                <div className="text-center  ">
                    <h1 className="text-6xl text-purple-600 font-poppins font-black mb-[20px] mt-[100px]">My Expert Areas </h1>
                    <p className="text-gray-500 text-xl mt-3 mb-[10px]">
                        {/* I specialize in building modern, responsive web applications using React, 
                        Node.js, and MongoDB. I focus on clean UI design, performance, and scalable 
                        backend development. */}

                        Skilled in full-stack web development with expertise in JavaScript, React, Node.js, Express, and MongoDB. <br />
                        Passionate about creating responsive, user-friendly and high-performance applications.

                        {/* Turning ideas into interactive web experiences using modern technologies like React, Tailwind CSS, and Node.js. 
                        Focused on clean design and efficient performance. */}
                    </p>
                    {/* Skills Section */}
                    <div className=" text-center mt-[30px] mb-[50px]">
                        {/* 🔹 Bulletin Scroll Container */}
                        <div className="w-[1000px] h-[200px] mx-auto overflow-hidden pt-[20px] ">
                            <motion.div
                                className="flex gap-6 w-max"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                            >
                                {/* Duplicate skills for endless scroll */}
                                {skills.concat(skills).map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col pt-[20px] items-center bg-white shadow-md border border-gray-100 hover:border-[2px] hover:border-pink-300 rounded-xl p-3 w-[100px] hover:scale-110 transition duration-300"
                                    >
                                        <img src={skill.src} alt={skill.name} className="w-16 h-16 mb-2" />
                                        <span className="text-sm font-semibold text-gray-700 text-center">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                </div>
                <div className="flex ml-[480px]">
                    <h2><GiGraduateCap className="text-5xl text-indigo-500 mr-5" /></h2>
                    <h2 className="text-5xl text-center font-poppins font-extrabold text-indigo-500">My Education</h2>
                </div>
                <div className="card  ml-[430px] mt-5  bg-black/50 backdrop-blur-lg  w-[600px] shadow-xl">
                    <div className="card-body text-xl text-white">
                        <h2 className="card-title text-blue-700">2023-Present</h2>
                        <h2 className="text-lg">Bachelor of Science in Computer Science and Engineering</h2>
                        <h3 className="text-lg">Northern University of Business and Technology,Khulna</h3>

                    </div>
                </div>
                <br />
                <br />
            </div>
        </section>
    );
};

export default Skills;