import React from "react";
import okIcon from "../assets/okIcon.png";

const Button: React.FC<{ name: string; type: string }> = ({ name, type }) => {
  return (
    <div
      className={`${type === "primary" && "bg-[#5F69C7] text-[#FFECE2]"} ${
        type === "secondary" && "bg-[#CC2610] text-[#FFECE2]"
      } ${
        type === "ternary" && "border border-[#5F69C7] text-[#5F69C7]"
      } flex rounded-full w-full items-center justify-center py-2  gap-2`}
    >
      {(type === "primary" || type === "secondary") && (
        <img src={okIcon} className="w-4" />
      )}
      <p>{name}</p>
    </div>
  );
};

export default Button;
