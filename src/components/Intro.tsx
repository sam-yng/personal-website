import React from "react";
import me from '../assets/images/me2.jpg'

const Intro: React.FC = () => {
  return (
    <main className="md:h-[85vh] flex flex-col md:flex-row mt-20 text-white md:justify-center">
      <img src={me} className="md:h-[28rem] -ml-10 rounded-xl border-white border-2 hover:scale-110 delay-100 duration-300" />
      <article className="ml-16 mt-4 w-[45%]">
        <h1 className="font-daru text-[35px]">Hi! I&apos;m Sam 🤠</h1>
        <p className="text-[25px] mt-4">
          Self taught Web Developer and prospective Junior Software Engineer with a working
          knowledge of the latest front-end languages, frameworks, and libraries.
        </p>
      </article>
    </main>
  )
}

export default Intro;
