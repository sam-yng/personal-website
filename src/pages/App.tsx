import React from "react";
import Main from "../components/Main";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import classNames from "classnames";

const App: React.FC = () => {
  return (
    <main
      className={classNames(
        "lg:px-[12rem]",
        "lg:py-10",
        "md:px-[10rem]",
        "md:py-8",
        "px-10",
        "md:py-8",
        "bg-gradient-to-b",
        "from-[#121212]",
        "via-[#1E1E1E]",
        "to-[#121212]"
      )}
    >
      <Main />
      <About />
      <Portfolio />
    </main>
  );
};

export default App;
