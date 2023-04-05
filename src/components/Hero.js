import React from "react";
import Image from "next/image";
import logo from "src/images/logo.png";
import Countdown from "./Countdown";
import VideoPlayer from "./VideoPlayer";
const Hero = () => {
  return (
    <section className="bg-gray-900 md:mt-16 mt-32 ml-3 ">
      <div className="grid max-w-screen-xl px-4 py-8 mt-32 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="-ml-4 mt-20 px-8 max-w-2xl mx-auto flex justify-center items-center  text-gray-50 text-5xl font-bold sm:text-7xl text-center mb-20">
            <Image
              draggable="false"
              src="https://see.fontimg.com/api/renderfont4/MV9ze/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/QnJhaW5SdXNoMksyMw/sunnyspells-regular.png"
              alt="heading"
              width={"480"}
              height={"72"}
            />
          </h1>
          <h1 className="-ml-4 px-8 max-w-2xl mx-auto -mt-16  flex justify-center items-center text-logoYellow text-4xl font-bold sm:text-6xl text-center mb-20">
            <Image
              draggable="false"
              src="https://see.fontimg.com/api/renderfont4/9Y5Xy/eyJyIjoiZnMiLCJoIjozNSwidyI6MTI1MCwiZnMiOjI4LCJmZ2MiOiIjRjZBMTNCIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/QnJhaW4gb24gRmlyZSwgSW5ub3ZhdGUgYW5kIEluc3BpcmU/loftygoals-regular.png"
              alt="heading"
              width={"480"}
              height={"72"}
            />
          </h1>
          {/* <Countdown /> */}
        </div>
        <div className="lg:mt-4 lg:col-span-5 lg:flex">
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
};

export default Hero;
