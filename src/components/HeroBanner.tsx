import resume from "../assets/Ali_Hassan_Software_Eng.pdf";

function HeroBanner() {
  return (
    <section
      id="home"
      className="heroContainer relative w-full flex items-center py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="grid grid-cols-12">
        <div className="hero-content col-span-12 md:col-span-6 text-white z-10">
          <h2 className="hero-title">
            <span className="block text-2xl md:text-3xl">Hello I'm</span>
            <strong className="block text-primaryColor text-5xl md:text-7xl uppercase tracking-wider py-3">
              Ali Hassan
            </strong>
            <span className="block text-2xl md:text-3xl pt-1">
              Software Developer
            </span>
          </h2>

          <p className="py-4 text-lg leading-6 text-gray-300">
            A dedicated software developer specializing in creating innovative
            solutions and enhancing user experiences. Passionate about
            leveraging technology to solve complex problems and deliver
            high-quality results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-3 md:pt-5">
            <a
              href="#contact"
              className="border customButton block w-36 bg-transparent hover:bg-primaryColor"
            >
              Get In Touch
            </a>

            <a
              href={resume}
              target="_blank"
              className="border customButton block w-52 bg-primaryColor hover:bg-transparent"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;