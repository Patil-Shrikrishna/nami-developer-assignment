import React from "react";
import okIcon from "../assets/okIcon.png";

const Button: React.FC<{
  name: string;
  type: string;
  onClick?: (name: string) => void;
}> = ({ name, type, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(name);
    }
  };
  return (
    <div
      className={`${type === "primary" && "bg-[#5F69C7] text-[#FFECE2]"} ${
        type === "secondary" && "bg-[#CC2610] text-[#FFECE2]"
      } ${type === "ternary" && "border border-[#5F69C7] text-[#5F69C7]"}
      ${
        type === "chip" && "border border-[#BBBBBB] text-[#767676]"
      } flex rounded-full w-full items-center justify-center px-4 whitespace-nowrap md:py-2 md:gap-2`}
      onClick={handleClick}
    >
      {(type === "primary" || type === "secondary") && (
        <img src={okIcon} className="w-4" />
      )}
      <p>{name}</p>
    </div>
  );
};

export default Button;
