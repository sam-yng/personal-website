import React from "react";

type PortfolioBoxProps = {
  image: string;
  title: string;
  description: string;
  firstTool?: string;
  secondTool?: string;
  thirdTool?: string;
};

const PortfolioBox = ({
  image,
  title,
  description,
  firstTool,
  secondTool,
  thirdTool,
}: PortfolioBoxProps) => {
  return (
    <main
      className={`flex flex-col items-center rounded-lg h-[38vh] border-2 border-white hover:scale-110 delay-100 duration-300`}
    >
      <img className="w-[20rem]" src={image} />
      <div
        className={`text-center text-white rounded-lg bg-[#1E1E1E] w-full h-full pt-4`}
      >
        <div className="flex flex-row justify-center h-[26px] mt-2 mb-4 space-x-4">
          <img src={firstTool} />
          <img src={secondTool} />
          <img src={thirdTool} />
        </div>
        <h1 className="font-poppins text-[20px]">{title}</h1>
        <p>{description}</p>
      </div>
    </main>
  );
};

export default PortfolioBox;
