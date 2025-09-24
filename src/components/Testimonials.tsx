import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { motionEffect } from "../framerMotion";

interface Testimonial {
  para: string;
  img: string;
  name: string;
  destination: string;
}

function Testimonials() {
  const content: Testimonial[] = [
    {
      para: "Working with Ali Hassan has been a fantastic experience. His attention to detail and dedication to delivering high-quality work consistently impressed me. He has a deep understanding of frontend technologies, making collaboration seamless.",
      img: "https://cdn-icons-png.flaticon.com/512/9187/9187604.png",
      name: "Fahad Nadeem",
      destination: "Sr. Frontend Developer | Team Lead",
    },
    {
      para: "Ali Hassan has a remarkable ability to solve complex problems quickly. His expertise in the MERN stack helped our team accelerate the development process. I highly recommend him for any project requiring top-notch skills.",
      img: "https://cdn-icons-png.flaticon.com/512/9187/9187604.png",
      name: "Waleed Shahzad",
      destination: "Sr. MERN Developer | Team Lead",
    },
    {
      para: "Ali Hassan consistently delivers high-quality work and demonstrates great skill in his projects. His collaboration and communication make him a valuable team member, and I enjoy working alongside him.",
      img: "https://cdn-icons-png.flaticon.com/512/9187/9187604.png",
      name: "Awais Ali",
      destination: "Sr. React Developer | Team Lead",
    },
  ];

  const settings: import("react-slick").Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    dots: false,
  };

  return (
    <motion.section
      {...motionEffect("bottom")}
      className="section testimonials pt-10 md:pt-12 pb-2 px-6 md:px-12 lg:px-24"
    >
      <div className="label_wrapper">
        <motion.h1
          {...motionEffect("bottom")}
          className="text-3xl md:text-4xl font-bold text-lightWhite mb-8 md:mb-3 text-center"
        >
          <span className="block">Voices of Those</span>{" "}
          <span className="text-xl">Who’ve Worked With Me</span>
        </motion.h1>
      </div>

      <motion.div {...motionEffect("bottom")} className="testimonial_container">
        <div className="quote_icon top-0 start-0">
          <RiDoubleQuotesL className="icon iconL" />
        </div>
        <Slider {...settings}>
          {content.map((value, i) => (
            <div className="content text-lightWhite" key={i}>
              <p className="pb-3 leading-7">{value.para}</p>
              <h4 className="m-0 pt-4 text-xl" style={{ fontWeight: 600 }}>
                {value.name}
              </h4>
              <p className="m-0 p-0">{value.destination}</p>
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar fill="#219b9d" className="inline-flex" key={i} />
              ))}
            </div>
          ))}
        </Slider>
        <div className="quote_icon bottom-0 end-0">
          <RiDoubleQuotesR className="icon iconR" />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Testimonials;
