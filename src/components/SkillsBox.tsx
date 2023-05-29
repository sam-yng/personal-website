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
    <main className={classNames("text-center", "mb-12", "mx-4")}>
      <h1
        className={classNames(
          "text-white",
          "text-[20px]",
          "font-poppins",
          "mb-4"
        )}
      >
        {title}
      </h1>
      <div
        className={classNames(
          "border-2",
          "border-white",
          "rounded-md",
          "bg-[#1E1E1E]",
          "hover:scale-110",
          "delay-100",
          "duration-300",
          "flex",
          "flex-col",
          "justify-between",
          "p-4",
          "lg:w-[20vw]",
          "lg:h-[50vh]",
          "md:mx-52",
          "lg:mx-0",
          "sm:mx-32"
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
