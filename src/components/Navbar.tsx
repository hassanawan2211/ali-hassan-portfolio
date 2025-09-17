import React, { useState } from "react";
import { motion } from "framer-motion";
import AllIcons from "./AllIcons";
import resume from "../assets/Ali_Hassan_Software_Eng.pdf";

const Navbar: React.FC = () => {
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [{ icon: "linkedin" }, { icon: "git" }];

    const [isActive, setIsActive] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 w-full bg-mainColor shadow-md z-50 px-6 py-4 md:px-12 lg:px-24"
        >
            <div className="flex items-center justify-between w-full">
                <div className="text-2xl font-bold text-lightWhite italic">
                    <a className="tracking-wider" href="#home">
                        Ali Hassan
                    </a>
                </div>
                <div
                    className="block md:hidden cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <AllIcons name="cross" color="#fff" size={30} />
                    ) : (
                        <AllIcons name="menu" color="#fff" size={30} />
                    )}
                </div>
                <nav
                    className={`fixed top-14 left-0 h-full w-3/4 bg-mainColor z-40 p-8 md:p-0 md:static md:flex md:items-center md:bg-transparent md:h-auto md:w-auto transition-all duration-1000 ease-in-out ${menuOpen ? "left-0 top-14" : "left-[-100%]"
                        }`}
                >
                    <ul className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-7">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    onClick={() => {
                                        setIsActive(index);
                                        setMenuOpen(false);
                                    }}
                                    className={`block tracking-wider text-md navListLinks ${isActive === index
                                        ? "text-primaryColor active"
                                        : "text-lightWhite hover:text-primaryColor"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li className="block md:hidden">
                            <div className="flex gap-3 items-center">
                                {socialLinks.map((icon, i) => (
                                    <ol key={i} className="">
                                        <li className="h-16 w-10 rounded-full customButton">
                                            <a href="" className="flex items-center justify-center h-[38px]">
                                                <AllIcons size={20} color="#219b9d" name={icon.icon} />
                                            </a>
                                        </li>
                                    </ol>
                                ))}
                            </div>

                            <div className="w-full customButton mt-4">
                                <a
                                    href={resume}
                                    target="_blank"
                                    className="w-full"
                                    type="button"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <a
                    href="#contact"
                    className="hidden md:block customButton w-32 tracking-wider m-0 bg-primaryColor hover:bg-transparent"
                >
                    Hire Me
                </a>
            </div>
        </motion.header>
    );
};

export default Navbar;