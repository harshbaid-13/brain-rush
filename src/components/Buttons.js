import React from "react";
import "./buttons.css";

const Buttons = ({ title }) => {
  return (
    <>
      <li className="custom-button-li text-sm md:text-base bg-transparent mr-auto rounded py-1 px-2 md:py-2 md:px-4  ">
        {title}
        <span className="custom-button-span"></span>
        <span className="custom-button-span"></span>
        <span className="custom-button-span"></span>
        <span className="custom-button-span"></span>
      </li>
    </>
  );
};

export default Buttons;
