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
import valuers from "../assets/projects/valuers.png";
import classNames from "classnames";

const Portfolio = () => {
  return (
    <main
      className={classNames(
        "flex",
        "lg:block",
        "flex-col",
        "pb-14",
        "lg:pt-10"
      )}
      id="portfolio"
    >
      <h1
        className={classNames(
          "text-white",
          "text-[35px]",
          "lg:block",
          "flex",
          "justify-center",
          "font-daru",
          "mb-6"
        )}
      >
        Portfolio
      </h1>
      <div
        className={classNames(
          "flex",
          "flex-col",
          "lg:flex-row",
          "space-y-10",
          "lg:space-y-0",
          "lg:space-x-10",
          "lg:justify-center",
          "lg:my-10",
          "lg:w-[66%]",
          "lg:mx-auto"
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
          image={valuers}
          title="Sydney Property Valuers"
          description="The website for a local property valuer"
          firstTool={typescript}
          secondTool={tailwind}
          thirdTool={next}
          viewSrc="https://www.sydneypropertyvaluers.com/"
          codeSrc={undefined}
        />
      </div>
      <div
        className={classNames(
          "flex",
          "lg:flex-row",
          "flex-col",
          "space-y-10",
          "lg:space-y-0",
          "lg:space-x-10",
          "lg:justify-center",
          "lg:my-1",
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
          "flex-col",
          "lg:flex-row",
          "space-y-10",
          "lg:space-y-0",
          "lg:space-x-10",
          "lg:justify-center",
          "lg:my-10",
          "mt-12",
          "lg:w-[66%]",
          "lg:mx-auto"
        )}
      >
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
