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
    <main className="md:h-[100vh] lg:mx-0 md:block pt-20 md:pt-12" id="about">
      <h1
        className={classNames(
          "text-white",
          "lg:mr-0",
          "md:block",
          "flex",
          "justify-center",
          "md:text-right",
          "xl:mr-14",
          "text-[35px]",
          "font-daru"
        )}
      >
        About Me
      </h1>
      <div
        className={classNames(
          "md:flex",
          "md:justify-end",
          "text-center",
          "lg:mr-0",
          "xl:mr-14",
          "md:mt-4",
          "mt-6"
        )}
      >
        <p
          className={classNames(
            "md:text-right",
            "text-[20px]",
            "font-poppins",
            "text-white",
            "md:w-full",
            "lg:w-[70%]"
          )}
        >
          In 2022, I decided to drop out of university and pursue a career in
          software development. I have been honing my engineering skills and
          focusing, primarily, on front-end tools and practices with the goal to
          become a junior engineer. My proficiencies are as follows:
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-between mt-6">
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
