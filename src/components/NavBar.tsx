import React from "react";
import classNames from "classnames";
import { Link } from "react-scroll";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full flex flex-row items-center justify-center">
      <h1 className="text-white md:text-[40px] text-[30px] font-daru">
        Sam Edgeworth
      </h1>
      <ul
        className={classNames(
          "ml-auto",
          "text-white",
          "text-[18px]",
          "md:flex",
          "md:flex-row",
          "font-poppins",
          "space-x-8",
          "hidden"
        )}
      >
        <li
          className={classNames(
            "hover:cursor-pointer",
            "hover:bg-white",
            "hover:text-black",
            "transition-colors",
            "rounded-xl",
            "px-3",
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
            "delay-100",
            "duration-300"
          )}
        >
          <a href="https://www.linkedin.com/in/sam-youngg/" target="blank">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
