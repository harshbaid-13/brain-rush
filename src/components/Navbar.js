import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <nav className="p-3 border-gray-200 rounded-none bg-background">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <Image
            src={logo}
            className="mr-6"
            alt="BrainRush Logo"
            height={"120"}
            width={"120"}
          />
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-none md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 rounded-none md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent ">
            <li>
              <a
                href="#"
                className="block pl-3 pr-4 text-gray-700 rounded-none hover:bg-logoYellow md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block pl-3 pr-4 text-gray-700 rounded-none hover:bg-logoYellow md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block pl-3 pr-4 text-gray-700 rounded-none hover:bg-logoYellow md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block pl-3 pr-4 text-gray-700 rounded-none hover:bg-logoYellow md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Venue
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block pl-3 pr-4 text-gray-700 rounded-none hover:bg-logoYellow md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block pl-3 pr-4 text-gray-700 rounded-none hover:bg-logoYellow md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
