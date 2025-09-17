import React from "react";
import { motion } from "framer-motion";
import AllIcons from "./AllIcons";
import Slider from "react-slick";

type Skill = {
    name: string;
    iconName: string;
    color: string;
};

type SkillCategory = {
    title: string;
    skills: Skill[];
};

const skillsData: SkillCategory[] = [
    {
        title: "Technical Skills",
        skills: [
            { name: "JavaScript", iconName: "js", color: "#F0DB4F" },
            { name: "TypeScript", iconName: "ts", color: "#3178C6" },
            { name: "Next.js", iconName: "next", color: "#61DAFB" },
            { name: "Express.js", iconName: "express", color: "#61DAFB" },
            { name: "React", iconName: "react", color: "#61DAFB" },
            { name: "Node.js", iconName: "node", color: "#68A063" },
            { name: "Tailwind CSS", iconName: "tailwind", color: "#38BDF8" },
        ],
    },
    {
        title: "Design Skills",
        skills: [
            { name: "Figma", iconName: "figma", color: "#F24E1E" },
            { name: "Adobe Photoshop", iconName: "adobePhotoShop", color: "#31A8FF" },
            { name: "Adobe XD", iconName: "adobeXD", color: "#FF61F6" },
            { name: "UI/UX Design", iconName: "design", color: "#2466d1" },
        ],
    },
    {
        title: "Soft Skills",
        skills: [
            { name: "Communication", iconName: "communication", color: "#e68c92" },
            { name: "Leadership", iconName: "leader", color: "#FFD700" },
            { name: "Problem Solving", iconName: "problem", color: "#4CAF50" },
            {
                name: "Team Collaboration",
                iconName: "team",
                color: "#00BFFF",
            },
        ],
    },
];

const flattenedSkills = skillsData.flatMap((category) => category.skills);

const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    speed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
};

const Skills: React.FC = () => {
    return (
        <motion.section
            id="skills"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pb-4 pt-10 md:py-12 px-6 md:px-12 lg:px-24"
        >
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-lightWhite mb-8 text-center">
                    Skills
                </h2>

                {/* Skills Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="animatedCards px-4 py-5"
                        >
                            <h3 className="text-xl text-center font-semibold text-lightWhite mb-4">
                                {category.title}
                            </h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center space-x-3 text-lightWhite py-2 px-5 rounded-full skillList"
                                    >
                                        <AllIcons
                                            name={skill.iconName}
                                            size={20}
                                            color={skill.color}
                                        />
                                        <span>{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* skills slider */}
            <motion.section className="pt-5">
                <Slider {...settings}>
                    {flattenedSkills.map((skill, i) => (
                        <div key={i} className="flex justify-center items-center p-4">
                            <ul className="flex justify-center space-x-6 items-center">
                                <li key={i} className="flex flex-col items-center gap-2">
                                    <span className="rounded-full h-16 w-16 grid items-center justify-center skillSlider">
                                        <AllIcons
                                            name={skill.iconName}
                                            color={skill.color}
                                            size={34}
                                        />
                                    </span>
                                    <span className="text-white text-sm tracking-wider">
                                        {skill.name}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    ))}
                </Slider>
            </motion.section>
        </motion.section>
    );
};

export default Skills;