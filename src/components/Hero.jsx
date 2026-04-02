import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    const [heroWidth, setHeroWidth] = useState(window.innerWidth);
    const [heroHeight, setHeroHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setHeroWidth(window.innerWidth);
            setHeroHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const colors = [
        "bg-purple-700/30",
        "bg-pink-600/30",
        "bg-indigo-600/30",
        "bg-blue-600/30",
        "bg-green-500/30",
        "bg-yellow-500/30",
        "bg-pink-400/30",
        "bg-indigo-400/30",
        "bg-purple-500/30",
        "bg-blue-400/30",
    ];

    // create multiple blobs
    const blobs = Array.from({ length: 35 }, () => {
        const size = Math.floor(Math.random() * 25) + 5; // 5px - 30px
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = Math.random() * 10 + 6; // 6s - 16s
        return { size, color, duration };
    });

    const randomPosition = (size) => ({
        x: Math.random() * (heroWidth - size) - (heroWidth - size) / 2,
        y: Math.random() * (heroHeight - size) - (heroHeight - size) / 2,
    });

    return (
        <section
            id="home"

            className="relative w-full h-screen flex flex-col justify-between mt-[100px]  overflow-hidden bg-[#0e0b1e] text-white text-center "
        >
            {/* Animated Gradient Background */}
            <motion.div
                className="absolute inset-0"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                style={{
                    background:
                        "linear-gradient(135deg, #0f0c21, #3b0764, #5f0b87, #0f0c21)",
                    backgroundSize: "400% 400%",
                    filter: "blur(80px)",
                }}
            />

            {/* Floating & Pulsing Blobs */}
            {blobs.map((b, i) => {
                const start = randomPosition(b.size);
                const end = randomPosition(b.size);
                return (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full ${b.color}`}
                        style={{
                            width: b.size,
                            height: b.size,
                            top: "50%",
                            left: "50%",
                            marginTop: start.y,
                            marginLeft: start.x,
                        }}
                        animate={{
                            x: [0, end.x, 0],
                            y: [0, end.y, 0],
                            scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                            duration: b.duration,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                        }}
                    />
                );
            })}

            {/* Hero Content */}
            <div className="relative ml-[100px] z-10 flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-screen-xl">
                {/* Left Text Content */}
                <div className=" pt-[110px] lg:mt-0 text-left max-w-xl">
                    <h1 className="mb-[10px]  lg:text-5xl sm:text-2xl text-white font-black font-poppins">
                        Hello, I'm
                    </h1>

                    {/* Typing Effect */}
                    <h1 className="mb-[30px] font-poppins text-pink-300 lg:text-4xl sm:text-3xl font-black">
                        <Typewriter
                            words={[
                                "Chandra Shekhor Mondal",
                                "Web Developer",
                                "Full Stack Web Developer",
                            ]}
                            loop={0} // infinite loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={90}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h1>

                    <p className="bg-black/30 backdrop-blur-lg  lg:text-xl sm:text-base text-white w-[650px] h-[150px] mb-5 rounded-lg p-6">
                        Passionate web developer crafting beautiful and functional <br />digital experiences. Specializing in modern web <br /> technologies and responsive design.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center flex-wrap gap-3 mt-[30px]">
                        <a
                            href="https://github.com/chandro4D"
                            className="text-white hover:text-pink-400"
                        >
                            <div className=" w-[50px] h-[50px] bg-black/30 backdrop-blur-lg rounded-full flex items-center justify-center">
                                <FaGithub className="w-[30px] h-[30px]" />
                            </div>

                        </a>
                        <a
                            href="https://www.facebook.com/chandro.shakhor.1"
                            className="text-blue-600 hover:text-blue-400"
                        >
                            <div className=" w-[50px] h-[50px] bg-black/30 backdrop-blur-lg rounded-full flex items-center justify-center">
                                <ImFacebook2 className="w-[30px] h-[30px] rounded-full text-while " />
                            </div>

                        </a>
                        <a
                            href="https://www.linkedin.com/in/chandra-shekhor-mondal111/"
                            className="hover:text-violet-900"
                        >
                            <div className=" w-[50px] h-[50px] bg-black/30 backdrop-blur-lg rounded-full flex items-center justify-center">
                                <ImLinkedin className="w-[30px] h-[30px] rounded-full text-violet-500" />
                            </div>
                        </a>
                        <div>
                            <a href="https://drive.google.com/uc?export=download&id=1q48cJ_nCwcsn36vsUn2Tkjs1fIxI8BgG" download>
                                <button className="border border-pink-300  hover:bg-black/30 hover:backdrop-blur-lg flex items-center text-pink-300 justify-center h-[50px] text-center w-[200px] font-medium text-xl rounded-3xl mr-3">
                                    <FiDownload className="size-6 mr-2" /> Download CV
                                </button>
                            </a>

                        </div>
                    </div>

                </div>

                {/* Right Image */}
                <div className="relative ml-[200px] mr-[100px] pt-[120px]  flex items-center justify-center group">

                    {/* Outer Glow */}
                    <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-3xl opacity-40"></div>

                    {/* Perspective Wrapper */}
                    <div className="relative w-[400px] h-[400px] [perspective:1000px]">

                        {/* Gradient Border */}
                        <div className="w-full h-full rounded-full p-[4px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-[0_0_40px_rgba(236,72,153,0.5)]">

                            {/* Flip Layer */}
                            <motion.div
                                className="relative w-full h-full rounded-full overflow-hidden bg-[#0e0b1e]"
                                initial={{ rotateY: 0 }}
                                whileHover={{ rotateY: 25, rotateX: 6, scale: 1.05 }} // 🔥 stronger flip
                                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                                style={{ transformStyle: "preserve-3d" }}
                            >

                                {/* Image */}
                                <img
                                    src="https://i.ibb.co/MfS5rxY/1720062798988-removebg-preview.png"
                                    alt="Chandra Shekhor Mondal"
                                    className="w-full h-full object-cover scale-110"
                                />

                                {/* Shine / Cover-Uncover Effect */}
                                <motion.div
                                    className="absolute inset-0"
                                    animate={{
                                        x: ["-120%", "120%"], // move across
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    style={{
                                        background:
                                            "linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent)",
                                    }}
                                />

                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;