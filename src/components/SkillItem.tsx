import classNames from "classnames";
import React from "react";

type SkillItemProps = {
  name: string;
  image: string;
};

const SkillItem = ({ name, image }: SkillItemProps) => {
  return (
    <main
      className={classNames(
        "flex",
        "flex-row",
        "justify-between",
        "px-6",
        "my-4"
      )}
    >
      <img className={classNames("w-14")} src={image} />
      <div className={classNames("flex", "flex-col", "justify-center")}>
        <h1
          className={classNames(
            "text-white",
            "inline-block",
            "text-[18px]",
            "text-right"
          )}
        >
          {name}
        </h1>
      </div>
    </main>
  );
};

export default SkillItem;
