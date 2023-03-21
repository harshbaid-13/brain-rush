import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <nav className=" px-2 sm:px-4 py-2.5 bg-background fixed w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a
          href="https://brainrush2k23.vercel.app/"
          className="flex items-center"
        >
          <Image
            src={logo}
            className="mr-3 -mt-2"
            alt="BrainRush Logo"
            height={100}
            width={100}
          />
        </a>
        <div className="mr-2 flex md:order-2">
          {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button> */}
          <Buttons title={"Register"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
