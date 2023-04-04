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
          {/* <video className="rounded-xl" loop autoPlay muted controls>
            <source
              src="https://res.cloudinary.com/communichat/video/upload/v1680631353/WhatsApp_Video_2023-04-04_at_11.31.17_PM_iyde8q.mp4"
              type="video/mp4"
            />
          </video> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
