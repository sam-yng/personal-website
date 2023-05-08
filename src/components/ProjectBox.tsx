import React from "react";

type PortfolioBoxProps = {
  image: string;
  title: string;
  description: string;
  tools?: string;
  color?: string;
};

const PortfolioBox = ({
  image,
  title,
  description,
  tools,
  color,
}: PortfolioBoxProps) => {
  return (
    <main
      className={`p-4 flex flex-col bg-${color} w-[20%] items-center h-[35vh] rounded-lg border-2 border-white`}
    >
      <img className="h-[50%] w-full" src={image} />
      <div className="mt-4 text-center">
        <h1 className="font-poppins text-[20px]">{title}</h1>
        <p>{description}</p>
        <p>{tools}</p>
      </div>
    </main>
  );
};

export default PortfolioBox;
