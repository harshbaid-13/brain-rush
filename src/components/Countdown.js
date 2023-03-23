"use client";
import React, { useEffect, useRef, useState } from "react";
import { TimerContainer } from "./TimerContainer";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("0");
  const [timerHours, setTimerHours] = useState("0");
  const [timerMinutes, setTimerMinutes] = useState("0");
  const [timerSeconds, setTimerSeconds] = useState("0");

  let interval = useRef();

  const setTimer = () => {
    const countDownDate = new Date("April 06, 2023 09:30:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    setTimer();
    let x = interval.current;
    return () => clearInterval(x);
  });
  return (
    <TimerContainer
      days={timerDays}
      hours={timerHours}
      minutes={timerMinutes}
      seconds={timerSeconds}
    />
  );
};

export default Countdown;
