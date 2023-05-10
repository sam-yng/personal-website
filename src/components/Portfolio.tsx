import React from "react";
import ProjectBox from "./ProjectBox";
import chess from "../assets/projects/chess.png";
import reminders from "../assets/projects/reminders.png";
import stuvise from "../assets/projects/stuvise.png";
import javascript from "../assets/logos/javascript.png";
import typescript from "../assets/logos/typescript.png";
import react from "../assets/logos/react.png";
import tailwind from "../assets/logos/tailwind.png";
import flask from "../assets/logos/flask.png";
import advice from "../assets/projects/advice.png";

const Portfolio = () => {
  return (
    <main
      className="md:h-[100vh] md:ml-14 md:mr-14 pt-20 md:pt-6 md:w-auto w-[75%] pb-12 flex md:block mx-auto flex-col"
      id="portfolio"
    >
      <h1 className="text-white md:ml-8 text-[35px] mb-6 md:block flex justify-center font-daru">
        Portfolio
      </h1>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 md:justify-center md:my-10">
        <ProjectBox
          image={stuvise}
          title="Stuvise.com"
          description="The marketting website for Stuvise"
          firstTool={typescript}
          secondTool={tailwind}
          thirdTool={react}
          viewSrc="https://stuvise.com/"
          codeSrc="https://github.com/stuvise/stuvise-dot-com"
        />
        <ProjectBox
          image={reminders}
          title="Reminders App"
          description="A clone of the apple reminders app"
          firstTool={typescript}
          secondTool={tailwind}
          thirdTool={react}
          viewSrc={undefined}
          codeSrc="https://github.com/sam-yng/reminders-clone"
        />
      </div>
      <div className="flex md:flex-row flex-col space-y-10 md:space-y-0 md:space-x-10 md:justify-center md:my-1 mt-12">
        <ProjectBox
          image={advice}
          title="Advice Generator"
          description="A simple frontend mentor project"
          firstTool={typescript}
          secondTool={tailwind}
          thirdTool={react}
          viewSrc={undefined}
          codeSrc="https://github.com/sam-yng/advice-generator"
        />
        <ProjectBox
          image={chess}
          title="Chess Game"
          description="A basic chess program"
          firstTool={javascript}
          secondTool={tailwind}
          thirdTool={flask}
          viewSrc={undefined}
          codeSrc="https://github.com/sam-yng/cs50-final"
        />
      </div>
    </main>
  );
};

export default Portfolio;
