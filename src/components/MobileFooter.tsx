import React from "react";
import homeSelected from "../assets/home-selected.png";
import console from "../assets/console.png";
import add from "../assets/add.png";
const MobileFooter: React.FC = () => {
  return (
    <div className="flex bg-white rounded-t-lg py-4 fixed bottom-0 justify-between w-full shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]">
      <button className="flex flex-col justify-center items-center w-1/2">
        <img src={homeSelected} className="h-8" />
        <p>Home</p>
      </button>
      <div className="relative">
        <button className="bg-[#5F69C7] w-20 h-20 rounded-full  shadow-lg absolute -top-14 left-1/2 transform -translate-x-1/2 flex justify-center items-center text-center">
          <img src={add} className="w-6" />
        </button>
      </div>
      <button className="flex flex-col justify-center items-center w-1/2">
        <img src={console} className="w-10" />
        <p>Console</p>
      </button>
    </div>
  );
};

export default MobileFooter;
