import React from "react";

type BoxItemProps = {
  name: string;
  image: string;
};

const BoxItem = ({ name, image }: BoxItemProps) => {
  return (
    <main className="flex flex-row justify-between text-left mx-6 my-4">
      <img src={image} />
      <div className="flex flex-col justify-center w-16">
        <h1 className="text-white inline-block">{name}</h1>
      </div>
    </main>
  );
};

export default BoxItem;
