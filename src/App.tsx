import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-16">
        <HeroBanner />
        <Introduction />
        <Experience />
        <Skills />
        <Services/>
        <Projects/>
      </main>
    </div>
  );
};

export default App;