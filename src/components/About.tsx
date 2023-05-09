import React from "react";
import AboutBox from "./AboutBox";
import BoxItem from "./BoxItem";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import javascript from "../assets/logos/javascript.png";
import typescript from "../assets/logos/typescript.png";
import react from "../assets/logos/react.png";
import tailwind from "../assets/logos/tailwind.png";
import node from "../assets/logos/node.png";
import flask from "../assets/logos/flask.png";
import git from "../assets/logos/Git.png";
import figma from "../assets/logos/Figma.png";
import ga from "../assets/logos/GA.png";

const About: React.FC = () => {
  return (
    <main className="md:h-[100vh] md:block pt-20 md:pt-12 mx-6" id="about">
      <h1 className="text-white md:block flex justify-center md:text-right md:mr-14 text-[35px] font-daru">
        About Me
      </h1>
      <div className="md:flex md:justify-end text-center md:mr-14 md:mt-4 mt-6">
        <p className="md:w-[75%] md:text-right text-[20px] font-poppins text-white">
          After dropping out of University in 2022, I began chasing a career in
          software, perfecting my engineering skills, keeping my focus on
          front-end tools and practices in hopes of becoming a junior engineer.
          The languages, tools, and frameworks that I have become proficient
          with are as follows:
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-between mt-6">
        <AboutBox
          title="Langauges"
          firstSpace={<BoxItem name="HTML" image={html} />}
          secondSpace={<BoxItem name="CSS" image={css} />}
          thirdSpace={<BoxItem name="Javascript" image={javascript} />}
          fourthSpace={<BoxItem name="Typescript" image={typescript} />}
        />
        <AboutBox
          title="Libraries & Frameworks"
          firstSpace={<BoxItem name="React" image={react} />}
          secondSpace={<BoxItem name="Tailwind" image={tailwind} />}
          thirdSpace={<BoxItem name="Node.js" image={node} />}
          fourthSpace={<BoxItem name="Flask" image={flask} />}
        />
        <AboutBox
          title="Tools"
          firstSpace={<BoxItem name="Git" image={git} />}
          secondSpace={<BoxItem name="Figma" image={figma} />}
          thirdSpace={<BoxItem name="Google Analytics" image={ga} />}
        />
      </div>
    </main>
  );
};

export default About;
