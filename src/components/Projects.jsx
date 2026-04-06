import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            title: "HealthHeaven",
            desc: "Health Heaven is a medicine-selling e-commerce platform featuring role-based dashboards along with product search and a secure payment system to enhance the overall buying experience.",
            img: "https://i.ibb.co.com/PZvTvdqN/Screenshot-2026-04-05-205137.png",
            tech: ["React", "Firebase", "Tailwind CSS","Js"],
            live: "https://medicine-selling-21aeb.web.app",
            github: "https://github.com/chandro4D/Medicine-Selling-Web-Client"
        },
        {
            title: "AlterNative",
            desc: "This is a product search platform where users can compare items, find alternatives, and receive recommendations, helping them make better and more informed purchasing decisions easily.",
            img: "https://i.ibb.co.com/v4q7Qtp1/Screenshot-2026-04-05-205854.png",
            tech: ["React", "Firebase", "Tailwind CSS", "DaisyUI"],
            live: "https://product-query-client.web.app",
            github: "https://github.com/chandro4D/Product-Query-Clien"
        },
        {
            title: "Dream Place",
            desc: "This is a tourism-based website where users can explore famous tourist spots and also add new destinations, making it an interactive platform for discovering and sharing travel experiences.",
            img: "https://i.ibb.co.com/TMNP6qjj/Screenshot-2026-04-05-210944.png",
            tech: ["React", "Firebase", "Tailwind CSS", "MongoDB"],
            live: "https://assignment-ten-client-f79aa.web.app/",
            github: "https://github.com/chandro4D/Dream-Place-Client"
        }
    ];

    return (
        <section id="projects" className="pt-24 bg-gradient-to-r from-black via-gray-900 to-black text-white">

            {/* Heading */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-pink-300 mb-[20px]">
                    {/* Featured Projects */}My Latest Projects
                </h1>
                <p className="text-gray-400  mx-auto text-center ">
                    Explore some of my recent projects that showcase my expertise in web <br />
                    development and problem-solving abilities.
                </p>
            </div>

            {/* Cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-6 lg:px-20">

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#1a1a2e] rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:border-[2px] hover:border-pink-300 transition duration-300"
                    >

                        {/* Image */}
                        <img
                            src={project.img}
                            alt={project.title}
                            className="h-52 w-full object-cover"
                        />

                        {/* Content */}
                        <div className="p-6">

                            <h2 className="text-xl font-bold mb-2">
                                {project.title}
                            </h2>

                            <p className="text-gray-400 text-sm mb-4">
                                {project.desc}
                            </p>

                            {/* Tech badges */}
                            <div className="flex flex-wrap gap-2 mb-5 mt-[20px]">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-between items-center">

                                {/* <a href={project.live}>
                                    <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg text-sm">
                                        View Details
                                    </button>
                                </a> */}

                                <div className="flex gap-4 text-gray-300 text-lg">
                                    <a href={project.github}>
                                        <FaGithub className="hover:text-white cursor-pointer" />
                                    </a>
                                    <a href={project.live}>
                                        <FaExternalLinkAlt className="hover:text-white cursor-pointer" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Projects;