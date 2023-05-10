import React, { ReactElement } from "react";

type AboutBoxProps = {
  title: string;
  firstSpace: ReactElement;
  secondSpace: ReactElement;
  thirdSpace: ReactElement;
  fourthSpace?: ReactElement;
};

const AboutBox = ({
  title,
  firstSpace,
  secondSpace,
  thirdSpace,
  fourthSpace,
}: AboutBoxProps) => {
  return (
    <main className="flex flex-col md:w-full sm:w-[70%] md:mx-auto mx-12 text-center xl:mx-14 mt-12">
      <h1 className="text-white text-[20px] font-poppins">{title}</h1>
      <div className="flex flex-col mt-6 border-2 border-white rounded-md bg-[#1E1E1E] justify-between h-[50vh] p-4 hover:scale-110 delay-100 duration-300">
        {firstSpace}
        {secondSpace}
        {thirdSpace}
        {fourthSpace}
      </div>
    </main>
  );
};

export default AboutBox;
