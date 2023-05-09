import React from "react";
import PortfolioBox from "./ProjectBox";
import chess from "../assets/projects/chess.png";
import reminders from "../assets/projects/reminders.png";
import stuvise from "../assets/projects/stuvise.png";
import javascript from "../assets/logos/javascript.png";
import typescript from "../assets/logos/typescript.png";
import react from "../assets/logos/react.png";
import tailwind from "../assets/logos/tailwind.png";
import flask from "../assets/logos/flask.png";

const Portfolio = () => {
  return (
    <main
      className="md:h-[100vh] md:ml-14 md:mr-14 pt-10 md:pt-0 md:w-auto w-[75%] pb-6 flex md:block mx-auto flex-col"
      id="portfolio"
    >
      <h1 className="text-white text-[35px] mb-6 md:block flex justify-center pt-20 font-daru">
        Portfolio
      </h1>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 md:justify-center md:my-10">
        <PortfolioBox
          image={chess}
          title="Chess Game"
          description="A basic chess program"
          firstTool={javascript}
          secondTool={tailwind}
          thirdTool={flask}
        />
        <PortfolioBox
          image={reminders}
          title="Reminders App"
          description="A clone of the apple reminders app"
          firstTool={typescript}
          secondTool={tailwind}
          thirdTool={react}
        />
        <div className="md:hidden">
          <PortfolioBox
            image={stuvise}
            title="Stuvise.com"
            description="The marketting website for Stuvise"
            firstTool={typescript}
            secondTool={tailwind}
            thirdTool={react}
          />
        </div>
      </div>
      <div className="md:flex md:justify-center hidden">
        <PortfolioBox
          image={stuvise}
          title="Stuvise.com"
          description="The marketting website for Stuvise"
          firstTool={typescript}
          secondTool={tailwind}
          thirdTool={react}
        />
      </div>
    </main>
  );
};

export default Portfolio;
