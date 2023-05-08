import React from "react";
import Main from "../components/Main";
import About from "../components/About";
import Portfolio from "../components/Portfolio";

const App: React.FC = () => {
  return (
    <main className="md:px-[12rem] md:py-10 bg-gradient-to-b from-[#121212] to-[#1E1E1E]">
      <Main />
      <About />
      <Portfolio />
    </main>
  );
};

export default App;
