import React from "react";
import classNames from "classnames";
import { Link } from "react-scroll";

const NavBar: React.FC = () => {
  return (
    <nav className="w-full flex flex-row items-center justify-center">
      <h1
        className={classNames(
          "text-white",
          "text-[35px]",
          "font-daru",
          "border-2",
          "border-white",
          "p-2",
          "lg:border-0",
          "lg:p-0",
          "md:border-0",
          "md:p-0"
        )}
      >
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
          // "sm:text-blue-400",
          // "md:text-green-400",
          // "lg:text-red-400",
          // "xl:text-purple-400"
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
