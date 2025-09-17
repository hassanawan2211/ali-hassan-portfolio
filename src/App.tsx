import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Introduction from "./components/Introduction";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-16">
        <HeroBanner />
        <Introduction />
      </main>
    </div>
  );
};

export default App;