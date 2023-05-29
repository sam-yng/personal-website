import React from "react";
import me from "../assets/images/me2.jpg";
import github from "../assets/logos/github.png";
import linked from "../assets/logos/bigLinkedIn.png";
import classNames from "classnames";

const Intro: React.FC = () => {
  return (
    <main
      className={classNames(
        "flex",
        "flex-col",
        "lg:flex-row",
        "md:flex-row",
        "text-white",
        "mt-10",
        "xl:mx-10",
        "lg:space-x-16",
        "md:space-x-10",
        "lg:h-[75vh]"
      )}
    >
      <img
        src={me}
        className={classNames(
          "rounded-xl",
          "border-white",
          "border-2",
          "hover:scale-110",
          "delay-100",
          "duration-300",
          "hidden",
          "lg:block",
          "md:block",
          "h-[28rem]",
          "my-auto"
        )}
      />
      <article
        className={classNames(
          "lg:text-left",
          "md:text-left",
          "text-center",
          "flex",
          "flex-col",
          "justify-center"
        )}
      >
        <h1 className="font-daru lg:text-[35px] text-[25px]">
          Hi! I&apos;m Sam 🤠
        </h1>
        <p className="text-[18px] mt-2 lg:mt-4 font-poppins">
          Self taught Web Developer and prospective Junior Software Engineer
          with a working knowledge of the latest front-end languages,
          frameworks, and libraries.
          <br></br>. . .
        </p>
        <div
          className={classNames(
            "flex",
            "flex-row",
            "justify-center",
            "space-x-6",
            "flex-shrink",
            "mt-6",
            "lg:justify-start",
            "md:justify-start"
          )}
        >
          <a
            href="https://github.com/sam-yng"
            target="blank"
            className={classNames(
              "rounded-md",
              "h-12",
              "bg-white",
              "px-2",
              "py-1"
            )}
          >
            <img className={classNames("h-10")} src={github} />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/sam-youngg/"
            className={classNames(
              "rounded-md",
              "h-12",
              "bg-white",
              "px-2",
              "py-1"
            )}
          >
            <img className={classNames("h-10")} src={linked} />
          </a>
        </div>
        <img
          src={me}
          className={classNames(
            "rounded-xl",
            "border-white",
            "border-2",
            "hover:scale-110",
            "delay-100",
            "duration-300",
            "mt-10",
            "lg:hidden",
            "md:hidden",
            "block"
          )}
        />
      </article>
    </main>
  );
};

export default Intro;
