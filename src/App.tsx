import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-16">
         <HeroBanner />
      </main>
    </div>
  );
};

export default App;