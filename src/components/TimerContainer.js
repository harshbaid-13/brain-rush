import React from "react";
import { NumberBox } from "./NumberBox";

export const TimerContainer = ({ days, hours, minutes, seconds }) => {
  if (days < 10) {
    days = "0" + days;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return (
    <div className="mt-2 rounded-xl">
      <div className="flex items-center space-x-1 justify-between mt-2 rounded-xl px-6 py-8 ">
        <NumberBox num={days} unit={"Days"} />
        <span className="hidden text-3xl -mt-8 md:inline-block md:text-5xl font-normal text-gray-50 ">
          :
        </span>
        <NumberBox num={hours} unit={"Hours"} />
        <span className="hidden text-3xl -mt-8 md:inline-block md:text-5xl font-normal text-gray-50 ">
          :
        </span>
        <NumberBox num={minutes} unit={"Minutes"} />
        <span className="hidden text-3xl -mt-8 md:inline-block md:text-5xl font-normal text-gray-50 ">
          :
        </span>
        <NumberBox num={seconds} unit={"Seconds"} />
      </div>
    </div>
  );
};
