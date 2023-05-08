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
    <main className="h-[85vh]">
      <h1 className="text-white text-[35px] font-daru flex">About Me</h1>
      <div className="flex flex-row justify-between mt-6">
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
