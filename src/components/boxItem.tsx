import React from "react";

type BoxItemProps = {
  name: string;
  image: string;
};

const BoxItem = ({ name, image }: BoxItemProps) => {
  return (
    <div className="flex flex-row">
      <img src={image} />
      <h1>{name}</h1>
    </div>
  );
};

export default BoxItem;
