import React from "react";
import euphoria from "../images/euphoria.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 bg-gray-900">
      <hr className="my-6 sm:mx-auto border-logoYellow lg:my-8" />
      <div className="flex items-center justify-between">
        <div className="flex space-x-4 justify-items-stretch">
          <span className="text-sm text-logoYellow sm:text-center">
            Sponsored By
          </span>
          <a href="https://euphoriagenx.com/" className="flex items-center">
            <Image
              src={euphoria}
              className="mr-3 -mt-2"
              alt="EuphoriaGenX Logo"
              height={100}
              width={100}
            />
          </a>
        </div>
        <div className="flex  space-x-6 sm:justify-center sm:mt-0">
        <span className="text-sm text-logoYellow sm:text-center">By CSE Department</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
