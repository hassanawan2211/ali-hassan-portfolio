import React from "react";
import { motion } from "framer-motion";
import AllIcons from "./AllIcons";
import p1 from "../assets/project1.jpg";
import p2 from "../assets/project2.jpg";
import p3 from "../assets/project3.jpg";
// import p4 from "../assets/project4.jpg";
import p5 from "../assets/project5.jpg";
import p6 from "../assets/project6.jpg";

type Project = {
  title: string;
  description: string;
  tools: string[];
  link: string;
  imageUrl: string;
};

const projectsData: Project[] = [
  {
    title: "SpareParts - Automotive Parts E-commerce Platform",
    description:
      "A robust e-commerce platform designed for the online purchase of automotive parts. Built with React and Node.js, the platform offers a user-friendly product catalog, secure checkout process, and integrated payment gateway for a seamless shopping experience.",
    tools: ["React", "Node.js", "MongoDB", "Stripe API"],
    link: "https://github.com/username/e-commerce-web-app",
    imageUrl: p1,
  },
  {
    title: "Repairer - Home Services Platform",
    description:
      "Repairer offers top-quality home services, connecting users with skilled professionals for various repair needs. Built with React, TypeScript, and Tailwind CSS, the platform features a modern and responsive design for an optimal user experience.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "https://github.com/username/portfolio-website",
    imageUrl: p2,
  },
  {
    title: "SanitizeX - Residential & Commercial Sanitizing Services",
    description:
      "SanitizeX offers professional sanitizing services for both residential and commercial spaces. Built with React, Node.js, and WebSocket for real-time updates, the platform connects users with trusted sanitizing experts.",
    tools: ["React", "Node.js", "Firebase", "TypeScript"],
    link: "https://github.com/username/chat-application",
    imageUrl: p3,
  },
  // {
  //   title: "Chat Application",
  //   description:
  //     "A real-time chat application with features like private messages, group chats, and notifications. Built with React, Node.js, and WebSocket for real-time communication.",
  //   tools: ["React", "Node.js", "WebSocket"],
  //   link: "https://github.com/username/chat-application",
  //   imageUrl: p4,
  // },
  {
    title: "TechGear - Online Computing & Gaming Tech Store",
    description:
      "TechGear is an e-commerce platform for purchasing the latest computing and gaming tech products. Built with React, Node.js, and WebSocket, it offers a seamless online shopping experience with real-time updates and secure transactions.",
    tools: [
      "React",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Stripe API",
      "Tailwind CSS",
    ],
    link: "https://github.com/username/chat-application",
    imageUrl: p5,
  },

  {
    title: "Sydney Advisors - Expert Consulting Services",
    description:
      "Sydney Advisors provides expert consulting services across various industries, offering tailored solutions to businesses and individuals. The platform connects users with professional advisors for personalized guidance, leveraging modern web technologies for a smooth and intuitive experience.",
    tools: ["React", "Node.js", "WebSocket"],
    link: "https://github.com/username/chat-application",
    imageUrl: p6,
  },
];

const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-6 md:px-12 lg:px-24"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-lightWhite mb-0 text-center">
        Projects
      </h1>
      <h3 className="text-xl md:text-2xl font-bold text-lightWhite mb-8 text-center tracking-wider">
        Deliverables and Success Metrics
      </h3>
      <div className="grid grid-cols-12 gap-7">
        {projectsData.map((values, index) => (
          <div className="main-box col-span-12 md:col-span-6" key={index}>
            <div className="card7">
              <div className="profile-pic">
                <img src={values.imageUrl} alt="project image" />
              </div>
              <div className="bottom">
                <div className="content">
                  <span className="name">{values.title}</span>
                  <span className="about-me">{values.description}</span>
                  <span className="about-me">{values.tools}</span>
                </div>
                <div className="bottom-bottom">
                  <div className="social-links-container">
                    <AllIcons name="git" />
                  </div>
                  <button className="button">
                    <a href="https:google.com">
                      <span>
                        <AllIcons name="verticalArrow" />
                      </span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

// npm i react-tsparticles tsparticles tsparticles-slim