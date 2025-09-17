import React, { useState } from "react";
import { motion } from "framer-motion";

type Experience = {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
};

const experienceData: Experience[] = [
  {
    title: "Associate Softwate Developer",
    company: "Tanbits",
    location: "Lahore",
    duration: "Dec 2023 - Present",
    responsibilities: [
      "Developed and maintained web applications using React, Node.js, and TypeScript.",
      "Collaborated with cross-functional teams to design scalable software solutions.",
      "Optimized application performance, reducing load time by 30%.",
      "Led a team of 5 developers on a project that increased user retention by 20%.",
    ],
  },
  {
    title: "Software Developer (Intern)",
    company: "Programmers Force",
    location: "Lahore",
    duration: "Sept 2023 - Dec 2023",
    responsibilities: [
      "Designed and implemented responsive UI components using HTML, CSS, and JavaScript.",
      "Integrated third-party APIs to enhance application functionality.",
      "Participated in Agile sprints to deliver features on time.",
      "Created a reusable component library, improving development efficiency.",
    ],
  },
  {
    title: "Trainee MERN Stack Developer (Bootcamp)",
    company: "Knowledge Streams",
    location: "Lahore",
    duration: "June 2023 - Sept 2023",
    responsibilities: [
      "Developed responsive UI components with HTML, CSS, and JavaScript for web applications.",
      "Integrated third-party APIs to extend app functionality and improve performance.",
      "Worked collaboratively in Agile sprints to deliver quality features on schedule.",
      "Built reusable components, enhancing development speed and consistency.",
    ],
  },
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-mainColor pb-4 pt-10 md:py-12 px-6 md:px-12 lg:px-24"
    >
      <div className="">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-lightWhite mb-8 text-center">
          Where I’ve Worked
        </h2>

        <div className="flex flex-col md:flex-row gap-0 md:gap-6 w-full">
          {/* Tabs Navigation */}
          <div className="flex md:flex-col w-auto md:w-1/3 border-s gap-1 overflow-x-auto">
            {experienceData.map((experience, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-nowrap md:text-wrap text-left px-4 pt-[4px] pb-2 text-md md:text-lg font-semibold text-lightWhite rounded-e-full transition-all duration-700 ease-in-out ${
                  activeTab === index
                    ? "border-s-2 bg-primaryColor border-lightWhite"
                    : ""
                }`}
              >
                {experience.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg shadow-md shadow-slate-800 w-full"
          >
            <h3 className="text-xl font-semibold text-lightWhite">
              {experienceData[activeTab].title}
            </h3>
            <p className="text-gray-300 text-sm">
              {experienceData[activeTab].company} •{" "}
              {experienceData[activeTab].location}
            </p>
            <p className="text-gray-300 text-sm">
              {experienceData[activeTab].duration}
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
              {experienceData[activeTab].responsibilities.map(
                (responsibility, i) => (
                  <li key={i} className="text-gray-200">{responsibility}</li>
                )
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;