import React from "react";
import me from "../assets/images/me2.jpg";
import github from "../assets/logos/github.png";
import linked from "../assets/logos/bigLinkedIn.png";

const Intro: React.FC = () => {
  return (
    <main className="flex md:h-[85vh] flex-col md:flex-row md:-mb-26 md:pt-28 text-white md:justify-center">
      <img
        src={me}
        className="md:h-[28rem] md:block hidden md:w-auto w-[16rem] md:-ml-10 rounded-xl border-white border-2 hover:scale-110 delay-100 duration-300"
      />
      <article className="md:ml-16 md:w-[45%] mx-4 md:text-left text-center md:mt-0 mt-12 flex flex-col md:h-[28rem] justify-center">
        <h1 className="font-daru md:text-[35px] text-[25px]">
          Hi! I&apos;m Sam 🤠
        </h1>
        <p className="md:text-[25px] text-[18px] mt-2 md:mt-4 font-poppins">
          Self taught Web Developer and prospective Junior Software Engineer
          with a working knowledge of the latest front-end languages,
          frameworks, and libraries.
          <br></br>. . .
        </p>
        <div className="mt-6 flex flex-row md:justify-start justify-center space-x-6">
          <a
            href="https://github.com/sam-yng"
            className="rounded-md bg-white md:h-12 h-10 border-2 border-white md:px-4 px-2"
          >
            <img className="md:h-10 h-8" src={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/sam-youngg/"
            className="rounded-md bg-white md:h-12 h-10 border-2 border-white md:px-4 px-2"
          >
            <img className="md:h-10 h-8" src={linked} />
          </a>
        </div>
      </article>
      <img
        src={me}
        className="md:hidden w-[75%] mx-auto mt-8 rounded-xl border-white border-2 hover:scale-110 delay-100 duration-300"
      />
    </main>
  );
};

export default Intro;
