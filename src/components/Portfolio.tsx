import React from "react";
import ProjectBox from "./ProjectBox";
import chess from "../assets/projects/chess.png";
import reminders from "../assets/projects/reminders.png";
import stuvise from "../assets/projects/stuvise.png";
import javascript from "../assets/logos/javascript.png";
import typescript from "../assets/logos/typescript.png";
import react from "../assets/logos/react.png";
import tailwind from "../assets/logos/tailwind.png";
import height from "../assets/projects/height.png";
import advice from "../assets/projects/advice.png";
import next from "../assets/logos/nextjs.png";
import flask from "../assets/logos/flask.png";
import css from "../assets/logos/css.png";
import mkdown from "../assets/projects/mkdown.png";
import classNames from "classnames";

const Portfolio = () => {
  return (
    <main
      className={classNames(
        "md:h-[100vh]",
        "pt-20",
        "md:pt-6",
        "pb-12",
        "flex",
        "md:block",
        "mx-auto",
        "flex-col",
        "lg:mb-12"
      )}
      id="portfolio"
    >
      <h1
        className={classNames(
          "text-white",
          "text-[35px]",
          "mb-6",
          "md:block",
          "flex",
          "justify-center",
          "font-daru"
        )}
      >
        Portfolio
      </h1>
      <div
        className={classNames(
          "flex",
          "flex-col",
          "md:flex-row",
          "space-y-10",
          "md:space-y-0",
          "md:space-x-10",
          "md:justify-center",
          "md:my-10"
        )}
      >
        <ProjectBox
          image={stuvise}
          title="Stuvise.com"
          description="The marketing website for Stuvise"
          firstTool={typescript}
          secondTool={tailwind}
          thirdTool={react}
          viewSrc="https://stuvise.com/"
          codeSrc="https://github.com/stuvise/stuvise-dot-com"
        />
        <ProjectBox
          image={reminders}
          title="Reminders App"
          description="A clone of the Apple reminders app"
          firstTool={typescript}
          secondTool={tailwind}
          thirdTool={react}
          viewSrc={undefined}
          codeSrc="https://github.com/sam-yng/reminders-clone"
        />
        <ProjectBox
          image={height}
          title="Height Calculator"
          description="A joke of a next.js project"
          firstTool={javascript}
          secondTool={tailwind}
          thirdTool={next}
          viewSrc={undefined}
          codeSrc="https://github.com/sam-yng/height-calculator"
        />
      </div>
      <div
        className={classNames(
          "flex",
          "md:flex-row",
          "flex-col",
          "space-y-10",
          "md:space-y-0",
          "md:space-x-10",
          "md:justify-center",
          "md:my-1",
          "mt-12"
        )}
      >
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
          secondTool={css}
          thirdTool={flask}
          viewSrc={undefined}
          codeSrc="https://github.com/sam-yng/cs50-final"
        />
        <ProjectBox
          image={mkdown}
          title="Markdown Editor"
          description="A markdown editor using codemirror"
          firstTool={typescript}
          secondTool={tailwind}
          thirdTool={next}
          viewSrc={undefined}
          codeSrc="https://github.com/sam-yng/markdown-editor"
        />
      </div>
    </main>
  );
};

export default Portfolio;
