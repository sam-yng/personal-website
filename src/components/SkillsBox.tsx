import classNames from "classnames";
import React, { ReactElement } from "react";

type SkillsBoxProps = {
  title: string;
  firstSpace: ReactElement;
  secondSpace: ReactElement;
  thirdSpace: ReactElement;
  fourthSpace?: ReactElement;
};

export const SkillsBox = ({
  title,
  firstSpace,
  secondSpace,
  thirdSpace,
  fourthSpace,
}: SkillsBoxProps) => {
  return (
    <main
      className={classNames(
        "flex",
        "flex-col",
        "md:w-full",
        "sm:w-full",
        "md:mx-4",
        "text-center",
        "xl:mx-14",
        "mt-12"
      )}
    >
      <h1 className="text-white text-[20px] font-poppins">{title}</h1>
      <div
        className={classNames(
          "flex",
          "flex-col",
          "mt-6",
          "border-2",
          "border-white",
          "rounded-md",
          "bg-[#1E1E1E]",
          "justify-between",
          "md:h-full",
          "p-4",
          "hover:scale-110",
          "delay-100",
          "duration-300"
        )}
      >
        {firstSpace}
        {secondSpace}
        {thirdSpace}
        {fourthSpace}
      </div>
    </main>
  );
};

export default SkillsBox;
