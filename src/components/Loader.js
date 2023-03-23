import Image from "next/image";
import React from "react";
function Loader(props) {
  return (
    <div className="fixed flex justify-center items-center inset-0 z-50 w-full h-full bg-background">
      <div>
        <Image src={props.gif} alt="loader" draggable={false} />
      </div>
    </div>
  );
}

export default Loader;
