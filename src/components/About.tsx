import React from "react";
import AboutBox from "./AboutBox";

const About: React.FC = () => {
  return (
    <main className="h-[85vh]">
      <h1 className="text-white text-[35px] font-daru flex">About Me</h1>
      <div className="flex flex-row justify-between">
        <AboutBox title="Langauges" />
        <AboutBox title="Libraries and Frameworks" />
        <AboutBox title="Tools" />
      </div>
    </main>
  );
};

export default About;
