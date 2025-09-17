import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const {
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      VITE_EMAILJS_PUBLIC_KEY,
    } = import.meta.env;

    emailjs
      .send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        formData,
        VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSuccess(true);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          toast.error("Failed to send message. Please try again.");
          setError("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-mainColor pt-5 pb-14 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-lightWhite mb-8 text-center">
          Get in Touch
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow">
              {isSuccess && (
                <p className="mb-4 text-green-500">
                  Thank you! Your message has been sent.
                </p>
              )}
              {error && <p className="mb-4 text-red-500">{error}</p>}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lightWhite font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border text-lightWhite border-primaryColor bg-transparent rounded-lg focus:outline-none focus:ring focus:ring-gray-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lightWhite font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border text-lightWhite border-primaryColor bg-transparent rounded-lg focus:outline-none focus:ring focus:ring-gray-600"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lightWhite font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border text-lightWhite border-primaryColor bg-transparent rounded-lg focus:outline-none focus:ring focus:ring-gray-600"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-lightWhite border border-primaryColor p-3 rounded-lg bg-primaryColor font-bold tracking-wide uppercase opacity-55 hover:opacity-100 transition-all duration-700 ease-in-out"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div>
            <p className="text-gray-300 mb-4 text-xl leading-7">
              Whether you have a question, a project, or just want to say hello,
              feel free to reach out! I'm always open to collaborations and
              opportunities.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaEnvelope size={20} className="text-blue-500 text-2xl" />
                <a
                  href="mailto:alihassanawan1811@gmail.com"
                  className="text-gray-200"
                >
                  alihassanawan1811@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone size={20} className="text-green-500 text-2xl" />
                <a href="tel:+923052997486" className="text-gray-200">
                  +92 305 2997486
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaLinkedin size={20} className="text-blue-700 text-2xl" />
                <a
                  href="https://www.linkedin.com/in/ali-hassan487/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:underline"
                >
                  linkedin.com/in/ali-hassan487
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaGithub size={20} className="text-white text-2xl" />
                <a
                  href="https://github.com/AliHassan487"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:underline"
                >
                  github.com/AliHassan487
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Toaster />
    </motion.section>
  );
};

export default Contact;