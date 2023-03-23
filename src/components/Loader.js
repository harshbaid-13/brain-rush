import Image from "next/image";
import React from "react";
function Loader(props) {
  return (
    <div className="fixed flex inset-0 z-50 w-full h-full justify-center items-center">
      <div className="">
        <Image src={props.gif} alt="loader" draggable={false} />
      </div>
    </div>
  );
}

export default Loader;
