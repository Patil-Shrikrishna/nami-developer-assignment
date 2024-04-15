import React from "react";
import timerGreen from "../assets/timer-green.png";
import timerRed from "../assets/timer-red.png";

const Timer: React.FC<{ waitingTime: number }> = ({ waitingTime }) => {
  return (
    <div className="bg-[#D7FFE7] text-[12px] flex w-fit px-2 rounded-full gap-2 items-center ">
      <img src={waitingTime < 5 ? timerRed : timerGreen} className="w-4 h-4 " />
      <p
        className={`${
          waitingTime < 5 ? "text-[#CC2610]" : "text-[#00A441]"
        } whitespace-nowrap`}
      >
        {waitingTime} min
      </p>
    </div>
  );
};

export default Timer;
