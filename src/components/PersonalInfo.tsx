import { motion } from "framer-motion";

const PersonalInfo: React.FC = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ali-hassan487/",
      icon: "🔗",
    },
    { name: "GitHub", href: "https://github.com/AliHassan487", icon: "🐙" },
    { name: "Portfolio", href: "https://yourportfolio.com", icon: "🌐" },
  ];

  return (
    <>
      <section className="py-16 mt-23 grid  items-center heroContainer">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-lightWhite p-6 rounded-lg shadow-lg mx-auto w-full max-w-lg heroBanner"
        >
          {/* Profile Picture */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-mainColor shadow-md"
            />
          </div>

          {/* Name and Title */}
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold text-gray-800">Ali Hassan</h1>
            <p className="text-lg text-gray-500">Software Developer</p>
          </div>

          {/* Contact Details */}
          <div className="mt-6">
            <p className="text-gray-600">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:john.doe@example.com"
                className="text-blue-500 hover:underline"
              >
                alihassanawan1811@gmail.com
              </a>
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-500 hover:underline"
              >
                +92 305 2997486
              </a>
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Location:</strong> Lahore, Pakistan
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-2xl"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </section>
    </>
  );
};

export default PersonalInfo;
