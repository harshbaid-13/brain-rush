"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "src/images/logo.png";
import Countdown from "./Countdown";
const Hero = () => {
  // const [timerDays, setTimerDays] = useState("00");
  // const [timerHours, setTimerHours] = useState("00");
  // const [timerMinutes, setTimerMinutes] = useState("00");
  // const [timerSeconds, setTimerSeconds] = useState("00");

  // let interval = useRef();

  // const setTimer = () => {
  //   const countDownDate = new Date("April 06, 2023 09:00:00").getTime();
  //   interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countDownDate - now;

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     if (distance < 0) {
  //       clearInterval(interval.current);
  //     } else {
  //       setTimerDays(days);
  //       setTimerHours(hours);
  //       setTimerMinutes(minutes);
  //       setTimerSeconds(seconds);
  //     }
  //   }, 1000);
  // };
  // useEffect(() => {
  //   setTimer();
  //   let x = interval.current;
  //   return () => clearInterval(x);
  // });
  return (
    <section className="bg-gray-900 md:mt-16 mt-32 ">
      <div className="grid max-w-screen-xl px-8 py-8 mt-32 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mx-auto flex justify-center items-center  text-gray-50 text-5xl font-bold sm:text-7xl text-center mb-20">
            <Image
              draggable="false"
              src="https://see.fontimg.com/api/renderfont4/MV9ze/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/QnJhaW5SdXNoMksyMw/sunnyspells-regular.png"
              alt="heading"
              width={"480"}
              height={"72"}
            />
          </h1>
          <h1 className="max-w-2xl mx-auto -mt-16  flex justify-center items-center text-logoYellow text-4xl font-bold sm:text-6xl text-center mb-20">
            <Image
              draggable="false"
              src="https://see.fontimg.com/api/renderfont4/9Y5Xy/eyJyIjoiZnMiLCJoIjozNSwidyI6MTI1MCwiZnMiOjI4LCJmZ2MiOiIjRjZBMTNCIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/QnJhaW4gb24gRmlyZSwgSW5ub3ZhdGUgYW5kIEluc3BpcmU/loftygoals-regular.png"
              alt="heading"
              width={"480"}
              height={"72"}
            />
          </h1>
          {/* <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            An event organisesd by CSE Department
          </h1> */}
          <Countdown />
          {/* <div className="grid grid-flow-col  text-gray-400 gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span>{timerDays}</span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span>{timerHours}</span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span>{timerMinutes}</span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span>{timerSeconds}</span>
              </span>
              sec
            </div>
          </div> */}
          {/* <a
            href="#"
            className="inline-flex items-center justify-center mt-5 px-5 py-3 text-base font-medium text-center "
          >
            <Buttons title={"REGISTER"} />
            <svg
              className="w-5 h-5 ml-2 -mr-1 text-logoYellow"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a> */}
        </div>
        <div className="hidden lg:-mt-24 lg:col-span-5 lg:flex">
          <Image priority src={logo} alt="logo" width="500" height="450" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
