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
    <div className="flex flex-col">
      <div className="flex gap-2 justify-between items-center">
        <StaffProfile name={staffName} />
        <StatusCard
          bgColor="bg-[#FFFFFF]"
          textColor="text-[#F1AE11]"
          status={taskStatus}
        />
        <img src={swapIcon} className="w-6 h-6" />
        {waitingTime > 0 && <Timer waitingTime={waitingTime} />}
      </div>
      <div className="flex gap-2"></div>
      <div className="flex gap-2"></div>
      <div className="flex gap-2"></div>
      <div className="flex gap-2">
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

// <p>{taskStatus}</p>
//       <StaffProfile name={staffName} />
//       <p>{serviceType}</p>
//       <p>{taskType}</p>
//       <p>{internalFrom}</p>
//       <p>{internalTo}</p>
//       <p>{requestDateTime}</p>
//       <p>{taskID}</p>
//       <p>{instructions}</p>
//       {items && (
//         <div>
//           <p>
//             <strong>Items:</strong>
//           </p>
//           {Object.entries(items).map(([itemName, quantity], itemIndex) => (
//             <p key={itemIndex}>
//               - {itemName}: {quantity}
//             </p>
//           ))}
//         </div>
//       )}

//       <Timer waitingTime={20} />
//       <Timer waitingTime={4} />
//       <Button name="Notify Staff" type="primary" />
//       <Button name="Notify Staff" type="secondary" />
//       <Button name="View Details" type="ternary" />
