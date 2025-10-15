import React from "react";
import { motion } from "framer-motion";
import AllIcons from "./AllIcons";
import itng from "../assets/ltng-ventures.png";
import eden from "../assets/eden-pm.png";
import macromapper from "../assets/macromapper-co-get-started.png";
import ami from "../assets/africanmana.png";
import greenbox from "../assets/greenboxstorage.png";

type Project = {
  title: string;
  description: string;
  tools: string[];
  link: string;
  imageUrl: string;
};

const projectsData: Project[] = [
  {
    title: "Lightning Ventures - Bitcoin-Focused Venture Capital Platform",
    description:
      "A modern and responsive website built for Lightning Ventures, a Bitcoin-focused venture capital firm and its new equity crowdfunding platform, Thunder Funder.",
    tools: ["React.js", "Inertia.js", "Tailwind CSS", "TypeScript"],
    link: "https://ltng.ventures/",
    imageUrl: itng,
  },
  {
    title: "Eden.pm - Productivity and Focus Platform",
    description:
      "Eden.pm is a productivity web platform offering ambient video backgrounds, focus music, task planning, and note-taking tools.",
    tools: ["Next.js", "Tailwind CSS", "TypeScript", "AWS Lambda", "Vercel", "Stripe API"],
    link: "https://eden.pm/",
    imageUrl: eden,
  },
  {
    title: "MacroMapper - Restaurant Nutrition & Menu Platform",
    description:
      "MacroMapper is Australia’s leading nutrition-focused restaurant platform that helps diners discover meals based on calories, macros, and dietary preferences.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    link: "https://get.macromapper.co/get-started",
    imageUrl: macromapper,
  },
  {
    title: "African Management Institute (AMI) - Learning Module",
    description:
      "Contributed to the AMI platform by developing the Learning Module section, converting detailed Figma designs into responsive layouts using pure HTML, CSS, and JavaScript.",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://www.africanmanagers.com/learn",
    imageUrl: ami,
  },
  {
    title: "GreenBox Storage – USA University Pickup & Drop-off System",
    description:
      "A logistics platform for U.S. university students to book storage with scheduled pickups and drop-offs. Built with a dual-side system (Admin Dashboard & User Web App), featuring Stripe payments, warehouse tracking, call system integration, and a role-based CRM for admins and support teams.",
    tools: ["React", "Node.js", "WebSocket", 'Tailwind CSS'],
    link: "https://www.greenboxstorage.org/",
    imageUrl: greenbox,
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
        {projectsData.map((project, index) => (
          <div className="main-box col-span-12 md:col-span-6" key={index}>
            <div className="card7">
              <div
                className="profile-pic cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
              >
                <img src={project.imageUrl} alt={project.title} />
              </div>

              <div className="bottom">
                <div className="content">
                  <span className="name">{project.title}</span>
                  <span className="about-me">{project.description}</span>
                  <span className="about-me text-sm text-gray-300">
                    {project.tools.join(" • ")}
                  </span>
                </div>

                <div className="bottom-bottom">
                  <div
                    className="social-links-container cursor-pointer"
                    onClick={() =>
                      window.open("https://github.com/hassanawan2211", "_blank")
                    }
                  >
                    <AllIcons name="git" />
                  </div>

                  <button
                    className="button"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <span>
                      <AllIcons name="verticalArrow" />
                    </span>
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
