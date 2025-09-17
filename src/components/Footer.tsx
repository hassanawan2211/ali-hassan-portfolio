import React from "react";
import AllIcons from "./AllIcons";

const Footer: React.FC = () => {
  const followUs = [
    {
      label: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/",
    },
    {
      label: "GitHub",
      icon: "git",
      link: "https://www.github.com",
    },
  ];

  return (
    <footer className="bg-mainColor text-white px-6 py-4 pt-8 md:px-12 lg:px-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="text-2xl font-bold text-lightWhite italic">
              <a className="tracking-wider" href="#home">
                MyPortfolio
              </a>
            </div>
            <p className="mt-4 text-gray-400 text-md">
              I am a passionate software developer dedicated to creating
              innovative and efficient solutions. Let's build something amazing
              together!
            </p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-col gap-2">
              {followUs.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 flex items-center gap-2 text-sm"
                >
                  <span>
                    <AllIcons name={social.icon} size={24} />{" "}
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-400 mt-6" />
        <div className="mt-8 text-center pb-6">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Ali Hassan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;