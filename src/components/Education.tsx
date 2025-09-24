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

const Education: React.FC = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-secondaryColor py-12 px-6 md:px-12 lg:px-24"
    >
      <div className="main-box box5">
        {certificates.map((certificate, index) => (
          <div className="card" key={index}>
            <div className="icon">
              <AllIcons name="certificate" />
            </div>
            <div className="title">{certificate.title}</div>
            <div className="date">{certificate.graduationDate}</div>
            <div className="from">{certificate.institution}</div>
            <div className="icon">
              <AllIcons name="safetyCertificate" />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
