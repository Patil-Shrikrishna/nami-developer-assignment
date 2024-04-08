import React from "react";
import StaffProfile from "../components/StaffProfile";
import Timer from "../components/Timer";
import Button from "../components/Button";
import StatusCard from "./StatusCard";
import swapIcon from "../assets/swap.png";

interface TaskCardProps {
  taskStatus: string;
  staffName: string;
  waitingTime: number;
  serviceType: string;
  taskType: string;
  internalFrom: string;
  internalTo: string;
  requestDateTime: string;
  taskID: string;
  instructions?: string;
  items?: {
    shampoo?: number;
    conditioner?: number;
    towel?: number;
  };
}

const TaskCard: React.FC<TaskCardProps> = ({
  taskStatus,
  staffName,
  waitingTime,
  serviceType,
  taskType,
  internalFrom,
  internalTo,
  requestDateTime,
  taskID,
  instructions,
  items = { shampoo: 0, conditioner: 0, towel: 0 },
}) => {
  return (
    <div className="flex flex-col gap-2 border border-[#767676] rounded-lg p-2">
      <div className="flex gap-2 justify-between items-center">
        <StaffProfile name={staffName} />
        <StatusCard
          status={taskStatus}
          bgColor={`${taskStatus === "not accepted" && "bg-[#F7F7F7]"}
          ${taskStatus === "ongoing" && "bg-[#FFFFFF]"}
          ${taskStatus === "scheduled" && "bg-[#F7F7F7]"}
          ${taskStatus === "delayed" && "bg-[#CC2610]"}
          ${taskStatus === "on-time" && "bg-[#00A441]"}`}
          textColor={`${taskStatus === "not accepted" && "text-[#CC2610]"}
          ${taskStatus === "ongoing" && "text-[#FFFFFF]"}
          ${taskStatus === "scheduled" && "text-[#1A0A02]"}
          ${taskStatus === "delayed" && "text-[#FFFFFF]"}
          ${taskStatus === "on-time" && "text-[#FFFFFF]"}`}
        />

        <img src={swapIcon} className="w-6 h-6" />
        {waitingTime > 0 && <Timer waitingTime={waitingTime} />}
      </div>
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold">{serviceType}</h2>
        <StatusCard
          status={taskType}
          bgColor={`${taskType === "internal task" && "bg-[#F7F7F7]"}
          ${taskType === "guest task" && "bg-[#F7F7F7]"}
          `}
          textColor={`${taskType === "internal task" && "text-[#5F69C7]"}
          ${taskType === "guest task" && "text-[#DC5B19]"}`}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center items-center text-[#767676]">
          <p>{new Date(requestDateTime).toLocaleDateString()}</p>
          <p className="px-2">|</p>
          <p>{new Date(requestDateTime).toLocaleTimeString()}</p>
        </div>
        <p className="text-[#767676]">#{taskID}</p>
      </div>
      <div className="flex justify-between">
        <h2 className="font-semibold text-2xl text-[#767676]">
          From:{internalFrom}
        </h2>
        <h2 className="font-semibold text-2xl text-[#767676]">
          To:{internalTo}
        </h2>
      </div>
      {items && (
        <div className="bg-[#F7F7F7]">
          {Object.entries(items).map(([itemName, quantity], index) => (
            <div key={index}>
              <p className="font-semibold text-2xl text-[#767676]">
                {itemName}
              </p>
              <p className="font-semibold text-2xl text-[#767676]">
                {quantity}
              </p>
            </div>
          ))}
        </div>
      )}
      {instructions && (
        <p className="text-xl bg-[#F7F7F7] text-[#5F69C7]">
          Instructions: {instructions}
        </p>
      )}
      <div className="flex">
        <Button
          name={`${
            waitingTime > 0
              ? waitingTime <= 5
                ? "Notify Staff"
                : "Notify Staff"
              : "View Details"
          }`}
          type={`${
            waitingTime > 0
              ? waitingTime <= 5
                ? "secondary"
                : "primary"
              : "ternary"
          }`}
        />
      </div>
    </div>
  );
};

export default TaskCard;
