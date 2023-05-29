import React from "react";
import Main from "../components/Main";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import classNames from "classnames";

const App: React.FC = () => {
  return (
    <main
      className={classNames(
        "bg-gradient-to-b",
        "from-[#121212]",
        "via-[#1E1E1E]",
        "to-[#121212]",
        "px-10",
        "space-y-14",
        "xl:px-48",
        "lg:px-32",
        "lg:space-y-24"
      )}
    >
      <Main />
      <About />
      <Portfolio />
    </main>
  );
};

export default App;
