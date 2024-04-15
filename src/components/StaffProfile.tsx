import React from "react";
import cutleryIcon from "../assets/cutleryIcon.png";
import availabilityIcon from "../assets/availabilityIcon.png";
const StaffProfile: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="bg-[#F7F7F7] rounded-md text-[12px] whitespace-nowrap flex justify-center items-center w-fit gap-2 px-2">
      <img src={cutleryIcon} className="w-4" />
      <h3>{name}</h3>
      <img src={availabilityIcon} className="w-3" />
    </div>
  );
};

export default StaffProfile;
