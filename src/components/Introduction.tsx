import React from "react";
import { motion } from "framer-motion";

const Introduction: React.FC = () => {
    return (
        <section className="introduction_section">
            <motion.section
                id="about"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="py-12 px-6 md:px-12 lg:px-24"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-lightWhite mb-6">
                        Hello, I'm Ali Hassan 👋
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        I'm a dedicated{" "}
                        <strong className="text-primaryColor">Software Developer</strong>{" "}
                        with 2 years of experience in building dynamic web applications. My
                        expertise includes{" "}
                        <span className="text-primaryColor font-medium">JavaScript</span>,{" "}
                        <span className="text-primaryColor font-medium">React</span>,{" "}
                        <span className="text-primaryColor font-medium">Next.js</span>,{" "}
                        <span className="text-primaryColor font-medium">Node.js</span>, and{" "}
                        <span className="text-primaryColor font-medium">Express</span>. I'm
                        passionate about creating seamless user experiences and delivering
                        high-quality solutions.
                    </p>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4">
                        I'm eager to contribute my skills to impactful projects and continue
                        growing as a developer. Let's build something amazing together!
                    </p>

                    <div className="mt-8">
                        <a
                            href="#projects"
                            className="block mx-auto w-52 customButton hover:bg-primaryColor"
                        >
                            Explore My Work
                        </a>
                    </div>
                </div>
            </motion.section>
        </section>
    );
};

export default Introduction;