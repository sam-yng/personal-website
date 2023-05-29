import React from "react";
import SkillsBox from "./SkillsBox";
import SkillItem from "./SkillItem";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import javascript from "../assets/logos/javascript.png";
import typescript from "../assets/logos/typescript.png";
import react from "../assets/logos/react.png";
import tailwind from "../assets/logos/tailwind.png";
import node from "../assets/logos/node.png";
import next from "../assets/logos/nextjs.png";
import git from "../assets/logos/Git.png";
import figma from "../assets/logos/Figma.png";
import ga from "../assets/logos/GA.png";
import classNames from "classnames";

const About: React.FC = () => {
  return (
    <main className={classNames("lg:pt-10")} id="about">
      <h1
        className={classNames(
          "text-white",
          "lg:block",
          "flex",
          "justify-center",
          "lg:text-right",
          "text-[35px]",
          "font-daru",
          "mb-6"
        )}
      >
        About Me
      </h1>
      <div className={classNames("lg:flex", "lg:justify-end", "text-center")}>
        <p
          className={classNames(
            "lg:text-right",
            "text-[18px]",
            "font-poppins",
            "text-white",
            "lg:w-[55vw]"
          )}
        >
          In 2022, I decided to drop out of university and pursue a career in
          software development. I have been honing my engineering skills and
          focusing, primarily, on front-end tools and practices with the goal to
          become a junior engineer. My proficiencies are as follows:
        </p>
      </div>
      <div
        className={classNames(
          "flex",
          "lg:flex-row",
          "flex-col",
          "justify-between",
          "mt-10",
          "lg:mt-20"
        )}
      >
        <SkillsBox
          title="Langauges"
          firstSpace={<SkillItem name="HTML" image={html} />}
          secondSpace={<SkillItem name="CSS" image={css} />}
          thirdSpace={<SkillItem name="Javascript" image={javascript} />}
          fourthSpace={<SkillItem name="Typescript" image={typescript} />}
        />
        <SkillsBox
          title="Libraries & Frameworks"
          firstSpace={<SkillItem name="React" image={react} />}
          secondSpace={<SkillItem name="Tailwind" image={tailwind} />}
          thirdSpace={<SkillItem name="Node.js" image={node} />}
          fourthSpace={<SkillItem name="Next.js" image={next} />}
        />
        <SkillsBox
          title="Tools"
          firstSpace={<SkillItem name="Git" image={git} />}
          secondSpace={<SkillItem name="Figma" image={figma} />}
          thirdSpace={<SkillItem name="Google Analytics" image={ga} />}
        />
      </div>
    </main>
  );
};

export default About;
