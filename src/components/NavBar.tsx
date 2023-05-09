import React from "react";
import classNames from "classnames";
import { Link } from "react-scroll";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full flex flex-row md:items-center justify-center">
      <h1 className="text-white md:text-[40px] text-[30px] mt-4 font-daru">
        Sam Edgeworth
      </h1>
      <ul className="ml-auto text-white text-[18px] md:flex md:flex-row font-poppins space-x-8 hidden">
        <li
          className={classNames(
            "hover:cursor-pointer",
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
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li
          className={classNames(
            "hover:cursor-pointer",
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
          <Link to="portfolio" spy={true} smooth={true}>
            Portfolio
          </Link>
        </li>
        <li
          className={classNames(
            "hover:cursor-pointer",
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
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
