import React from "react";
import classNames from "classnames";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full flex flex-row md:items-center justify-center">
      <h1 className="text-white md:text-[40px] text-[25px] font-daru">
        Sam Edgeworth
      </h1>
      <div className="ml-auto text-white text-[18px] md:flex md:flex-row font-poppins space-x-8 hidden">
        <h1
          className={classNames(
            "hover:bg-white",
            "hover:text-black",
            "transition-colors",
            "rounded-xl",
            "px-3",
            "py-1",
            "delay-100",
            "duration-300"
          )}
        >
          About
        </h1>
        <h1
          className={classNames(
            "hover:bg-white",
            "hover:text-black",
            "transition-colors",
            "rounded-xl",
            "px-3",
            "py-1",
            "delay-100",
            "duration-300"
          )}
        >
          Portfolio
        </h1>
        <h1
          className={classNames(
            "hover:bg-white",
            "hover:text-black",
            "transition-colors",
            "rounded-xl",
            "px-3",
            "py-1",
            "delay-100",
            "duration-300"
          )}
        >
          Contact
        </h1>
      </div>
    </nav>
  );
};

export default NavBar;
