import React from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import classNames from "classnames";

const Main: React.FC = () => {
  return (
    <main className={classNames("pt-10")}>
      <NavBar />
      <Intro />
    </main>
  );
};

export default Main;
