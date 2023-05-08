import React from "react";
import PortfolioBox from "./ProjectBox";
import chess from "../assets/projects/chess.png";
import reminders from "../assets/projects/reminders.png";
import stuvise from "../assets/projects/stuvise.png";

const Portfolio = () => {
  return (
    <main className="h-[85vh] ml-14 mr-14" id="portfolio">
      <h1 className="text-white text-[35px] font-daru">Portfolio</h1>
      <div className="flex flex-row space-x-10 justify-center my-10">
        <PortfolioBox
          image={stuvise}
          title="Chess Game"
          description="A basic chess program"
          color="primaryblue"
        />
        <PortfolioBox
          image={stuvise}
          title="Reminders App"
          description="A clone of the apple reminders app"
          color="primarygreen"
        />
      </div>
      <div className="flex justify-center">
        <PortfolioBox
          image={stuvise}
          title="Stuvise Website"
          description="The marketting website for Stuvise"
          color="primarypurple"
        />
      </div>
    </main>
  );
};

export default Portfolio;
