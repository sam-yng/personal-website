import React from "react";
import code from "../assets/images/code.png";
import eye from "../assets/images/eye.png";
import classNames from "classnames";

type PortfolioBoxProps = {
  image: string;
  title: string;
  description: string;
  firstTool?: string;
  secondTool?: string;
  thirdTool?: string;
  viewSrc: string | undefined;
  codeSrc?: string;
};

const PortfolioBox = ({
  image,
  title,
  description,
  firstTool,
  secondTool,
  thirdTool,
  viewSrc,
  codeSrc,
}: PortfolioBoxProps) => {
  return (
    <main
      className={classNames(
        "flex",
        "flex-col",
        "items-center",
        "rounded-lg",
        "border-2",
        "border-white",
        "hover:scale-110",
        "delay-100",
        "duration-300",
        "md:w-[50%]",
        "md:mx-auto",
        "sm:w-[50%]",
        "sm:mx-auto"
      )}
    >
      <img src={image} />
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
        <div className="flex flex-row justify-center space-x-4 my-4">
          <a
            href={viewSrc}
            target="blank"
            className={`rounded-md bg-white border-2 border-white px-3 ${
              viewSrc === undefined ? "opacity-50" : "opacity-100"
            }`}
          >
            <img className="h-6" src={eye} />
          </a>
          <a
            href={codeSrc}
            target="blank"
            className={`rounded-md bg-white border-2 border-white px-3 ${
              codeSrc === undefined ? "opacity-50" : "opacity-100"
            }`}
          >
            <img className="h-6" src={code} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default PortfolioBox;
