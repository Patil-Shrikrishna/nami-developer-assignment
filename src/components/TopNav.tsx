import React from "react";
import profile from "../assets/profile-pic.png";
import notificationDot from "../assets/notification-dot.png";

const TopNav: React.FC = () => {
  return (
    <div className="flex justify-between px-4 items-center py-4 border-b-2">
      <h1 className="text-4xl font-semibold">ABCHotel</h1>
      <div className="flex gap-5 items-center">
        <img src={notificationDot} className="h-8" />
        <img src={profile} className="h-10" />
      </div>
    </div>
  );
};

export default TopNav;
