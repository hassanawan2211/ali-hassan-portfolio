import React from "react";
import Header from "./components/Header";
// import PersonalInfo from "./components/PersonalInfo";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
// import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
// import Volunteer from "./components/Volunteer";
import Testimonials from "./components/Testimonials";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import HeroBanner from "./components/HeroBanner";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="mt-16">
        {/* <PersonalInfo /> */}
        <HeroBanner />
        <Introduction />
        <Experience />
        <Skills />
        <Services/>
        {/* <Education /> */}
        <Projects />
        <Certifications />
        {/* <Volunteer /> */}
        <Testimonials />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
