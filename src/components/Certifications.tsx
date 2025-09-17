import React from "react";
import { motion } from "framer-motion";

import AllIcons from "./AllIcons";

type certifitcateInterface = {
  title: string;
  logo: string;
  institution: string;
  graduationDate: string;
};

const certificates: certifitcateInterface[] = [
  {
    title: "Frontend Developer (Intern)",
    logo: "PF",
    institution: "Programmres Force",
    graduationDate: "Sept 2023 - Nov 2023",
  },
  {
    title: "Understanding Basic of React",
    logo: "10P",
    institution: "10Pearls University",
    graduationDate: "Oct 2023",
  },
  {
    title: "Fundamentals of C#",
    logo: "10P",
    institution: "10Pearls University",
    graduationDate: "Oct 2023",
  },

  {
    title: "MERN Stack Bootcamp",
    logo: "KS",
    institution: "Knowledge Streams",
    graduationDate: "June 2023 - Sept 2023",
  },
];

const Certifications: React.FC = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-mainColor py-12 px-6 md:px-12 lg:px-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-lightWhite mb-8 text-center">
        Certifications & Awards
      </h2>
      <div className="main-box grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((certificate, index) => (
          <div className="p-6 rounded-lg shadow text-lightWhite" key={index}>
            <div className="border border-primaryColor p-4 relative h-40 flex flex-col items-center justify-center ">
              <div className="absolute bottom-0 right-0 text-primaryColor">
                <AllIcons name="certificate" size={70} />
              </div>
              <div className="text-2xl">{certificate.title}</div>
              <div className="text-sm text-gray-400 pt-2">{certificate.graduationDate}</div>
              <div className="absolute -bottom-3 px-1 left-1/2 -translate-x-1/2 text-lg text-gray-400 italic bg-mainColor">
                {certificate.institution}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;