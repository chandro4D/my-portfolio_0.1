import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { id: "home", icon: <FaHome />, label: "Home" },
        { id: "about", icon: <FaUser />, label: "About" },
        { id: "skills", icon: <FaCode />, label: "Skills" },
        { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
        { id: "contact", icon: null, label: "Contact" }, // Contact included
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setActive(id);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 h-[100px] left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-black/30 backdrop-blur-lg border-b border-white/10"
                : "bg-black"
                }`}
        >

            <div className="w-full flex justify-between items-center px-6 pt-[30px] max-w-screen-xl mx-auto">
                {/* Logo */}
                <div className="flex pl-[100px]">
                    <img className="w-[45px] h-[40px]" src="/csm.svg" alt="" />
                    <h1
                        className="text-2xl  font-extrabold font-poppins  cursor-pointer"
                        onClick={() => scrollToSection("home")}
                    >
                         <span className="text-pink-300 ">C</span>handra  <span className="text-pink-300 ml-2">S</span>hekhor <span className="text-pink-300 ml-2">M</span>ondal
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex pr-[100px] items-center gap-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <li key={item.id} className="relative">
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`flex items-center gap-2 hover:text-pink-400 transition ${active === item.id ? "text-pink-400" : "text-white"
                                    }`}
                            >
                                {item.icon}
                                {item.label}
                                {active === item.id && (
                                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-pink-400"></span>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Icon */}
                <div
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden w-full bg-black/95 backdrop-blur-xl text-white flex flex-col items-center gap-6 py-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex items-center gap-2 text-lg ${active === item.id ? "text-pink-400" : "text-white"
                                }`}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;