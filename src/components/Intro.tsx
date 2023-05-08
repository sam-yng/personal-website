import React from "react";
import me from "../assets/images/me2.jpg";
import github from "../assets/logos/github.png";
import linked from "../assets/logos/bigLinkedIn.png";

const Intro: React.FC = () => {
  return (
    <main className="flex h-[85vh] flex-col md:flex-row -mb-26 pt-28 text-white md:justify-center">
      <img
        src={me}
        className="md:h-[28rem] -ml-10 rounded-xl border-white border-2 hover:scale-110 delay-100 duration-300"
      />
      <article className="ml-16 w-[40%] flex flex-col h-[28rem]">
        <h1 className="font-daru text-[35px]">Hi! I&apos;m Sam 🤠</h1>
        <p className="text-[25px] mt-4 font-poppins">
          Self taught Web Developer and prospective Junior Software Engineer
          with a working knowledge of the latest front-end languages,
          frameworks, and libraries.
          <br></br>. . .
        </p>
        <div className="mt-auto flex flex-row space-x-6">
          <a
            href="https://github.com/sam-yng"
            className="rounded-md bg-white h-12 border-2 border-white px-4"
          >
            <img className="h-10" src={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/sam-youngg/"
            className="rounded-md bg-white h-12 border-2 border-white px-4"
          >
            <img className="h-10" src={linked} />
          </a>
        </div>
      </article>
    </main>
  );
};

export default Intro;
