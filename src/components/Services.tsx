import bgLayer from "../assets/bg-layer.png";
import { motion } from "framer-motion";
import AllIcons from "./AllIcons";

function Services() {
  const card = [
    {
      icon: <AllIcons name="react" />,
      title: "UI/UX Design",
      descri:
        "Crafting intuitive and visually appealing interfaces that engage users and elevate their experience",
    },
    {
      icon: <AllIcons name="responsive" />,
      title: "Responsive Web Design",
      descri:
        "Ensuring your website functions seamlessly across all devices, providing an optimal viewing experience for every user",
    },
    {
      icon: <AllIcons name="cleanCode" />,
      title: "Clean Code",
      descri:
        "Writing efficient, maintainable code that adheres to best practices, making future updates and collaboration effortless",
    },
    {
      icon: <AllIcons name="support" />,
      title: "Fast Support",
      descri:
        "Offering prompt and effective support to quickly address any issues, ensuring your project runs smoothly and efficiently",
    },
  ];

  return (
    <>
      <section
        id="services"
        className="section services py-12 px-6 md:px-12 lg:px-24"
      >
        <div className="bg-layer">
          <img src={bgLayer} alt="Portfoilo Services" />
        </div>
        <motion.div className="label_wrapper">
          <h1 className="text-3xl md:text-4xl font-bold text-lightWhite mb-0 text-center">
            Services
          </h1>
          <h3 className="text-xl md:text-2xl font-bold text-lightWhite mb-8 text-center tracking-wider">
            Delivering the Services You Need
          </h3>
        </motion.div>

        <motion.div
          className="cards-container"
          initial="hidden"
          whileInView="visible"
        >
          {card.map((value, index) => {
            return (
              <motion.div key={index} className="card text-center">
                <div className="icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.descri}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}

export default Services;