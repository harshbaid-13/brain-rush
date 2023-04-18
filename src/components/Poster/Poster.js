import React, { useState } from "react";
import "./poster.css";
import POSTER from "../../images/poster.jpeg";
import Image from "next/image";

function Poster() {
  const [poster, setPoster] = useState("show");
  return (
    <>
      <div
        className={
          poster === "show"
            ? "poster-area z-40 backdrop-blur-lg"
            : "no_show z-40 backdrop-blur-lg"
        }
      >
        <div className="poster">
          <Image src={POSTER} alt="POSTER" draggable={false} className="img" />
          <button className="cross-button" onClick={() => setPoster("no")}>
            X
          </button>
        </div>
      </div>
    </>
  );
}

export default Poster;
