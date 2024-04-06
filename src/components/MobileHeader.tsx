import React from "react";
import profile from "../assets/profile-pic.png";
import notification from "../assets/notification.png";
import search from "../assets/search.png";
const MobileHeader: React.FC = () => {
  return (
    <div className="flex justify-between px-4 items-center ">
      <h1 className="text-2xl font-semibold">Task of the Day</h1>
      <div className="flex gap-5 items-center">
        <img src={search} className="h-8" />
        <img src={notification} className="h-8" />
        <img src={profile} className="h-10" />
      </div>
    </div>
  );
};

export default MobileHeader;
