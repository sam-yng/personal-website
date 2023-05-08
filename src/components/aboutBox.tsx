import React from "react";
import BoxItem from "./BoxItem";
import html from "../assets/logos/html.png";

type AboutBoxProps = {
  title: string;
};

const AboutBox = ({ title }: AboutBoxProps) => {
  return (
    <main className="flex flex-col w-full text-center mx-14 mt-12">
      <h1 className="text-white text-[20px] font-poppins">{title}</h1>
      <div className="bg-gray-700 mt-6">
        <BoxItem name="HTML" image={html} />
      </div>
    </main>
  );
};

export default AboutBox;
