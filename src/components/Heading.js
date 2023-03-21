import React from "react";

function Heading(props) {
  return (
    <h1 className="text-gray-50 text-4xl font-bold sm:text-9xl text-center mb-20">
      {props.title}
      <span className="text-logoYellow">{props.subtitle}</span>
    </h1>
  );
}

export default Heading;
