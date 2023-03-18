import React from "react";
import "./buttons.css";

const Buttons = ({ title }) => {
  return (
    <>
      <li>
        {title}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </li>
    </>
  );
};

export default Buttons;
