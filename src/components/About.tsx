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
    <main
      className="md:h-[100vh] lg:mx-0 md:block pt-20 md:pt-12 mx-6"
      id="about"
    >
      <h1 className="text-white lg:mr-0 md:block flex justify-center md:text-right xl:mr-14 text-[35px] font-daru">
        About Me
      </h1>
      <div className="md:flex md:justify-end text-center lg:mr-0 xl:mr-14 md:mt-4 mt-6">
        <p className="lg:w-[75%] md:w-full md:text-right text-[20px] font-poppins text-white">
          In 2022, I decided to drop out of university and pursue a career in
          software development. I have been honing my engineering skills and
          focusing, primarily, on front-end tools and practices with the goal to
          become a junior engineer. My proficiencies are as follows:
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:ml-8 justify-between mt-6">
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
