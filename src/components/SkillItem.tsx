import React from "react";

type SkillItemProps = {
  name: string;
  image: string;
};

const SkillItem = ({ name, image }: SkillItemProps) => {
  return (
    <main className="flex flex-row justify-between text-left mx-6 my-4">
      <img src={image} />
      <div className="flex flex-col justify-center w-16">
        <h1 className="text-white inline-block">{name}</h1>
      </div>
    </main>
  );
};

export default SkillItem;
