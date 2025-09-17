import React, { type JSX } from "react";
import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaBook,
  FaLightbulb,
  FaMusic,
} from "react-icons/fa";

type Hobby = {
  name: string;
  description: string;
  icon: JSX.Element;
};

const hobbiesData: Hobby[] = [
  {
    name: "Coding",
    description:
      "Building innovative web applications and learning new programming languages.",
    icon: <FaLaptopCode className="text-blue-500 text-4xl" />,
  },
  {
    name: "Open Source Contribution",
    description:
      "Contributing to open-source projects and collaborating with the developer community.",
    icon: <FaCode className="text-green-500 text-4xl" />,
  },
  {
    name: "Learning New Tech",
    description:
      "Exploring cutting-edge tools, frameworks, and technologies to stay updated.",
    icon: <FaLightbulb className="text-purple-500 text-4xl" />,
  },
  {
    name: "Teaching/Blogging",
    description:
      "Sharing knowledge through writing technical blogs and mentoring others.",
    icon: <FaChalkboardTeacher className="text-orange-500 text-4xl" />,
  },
  {
    name: "Reading",
    description:
      "Exploring tech blogs, self-improvement books, and science fiction.",
    icon: <FaBook className="text-yellow-500 text-4xl" />,
  },
  {
    name: "Music",
    description:
      "Relaxing and boosting creativity with instrumental and ambient music.",
    icon: <FaMusic className="text-red-500 text-4xl" />,
  },
];

const Hobbies: React.FC = () => {
  return (
    <motion.section
      id="hobbies"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-mainColor py-12 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-lightWhite mb-8 text-center">
          Hobbies & Interests
        </h2>

        {/* Hobbies Grid */}
        <div className="grid gap-4 md:gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {hobbiesData.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg flex items-start space-x-4 shadow"
            >
              {/* Hobby Icon */}
              <div>{hobby.icon}</div>

              {/* Hobby Details */}
              <div>
                <h3 className="text-md pb-2 font-semibold text-lightWhite">
                  {hobby.name}
                </h3>
                <p className="text-gray-300 leading-5 text-sm">
                  {hobby.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Hobbies;