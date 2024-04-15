import React from "react";

const StatusCard: React.FC<{
  status?: string;
  icon?: string;
  bgColor?: string;
  textColor?: string;
}> = ({ status, icon, bgColor, textColor }) => {
  return (
    <div
      className={`${bgColor} ${textColor} ${
        status && icon ? "gap-2" : ""
      } p-2 text-[12px] flex justify-center whitespace-nowrap items-center text-center w-fit rounded-full`}
    >
      <p>{status}</p>
      {icon && <img src={icon} className="w-4" />}
    </div>
  );
};

export default StatusCard;
