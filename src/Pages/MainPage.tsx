import React from "react";
import Data from "../utils/data";
import TaskCard from "../components/TaskCard";

const MainPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Data.map((task, index) => (
        <TaskCard
          key={index}
          taskStatus={task.taskStatus}
          waitingTime={task.waitingTime}
          staffName={task.staffName}
          serviceType={task.serviceType}
          taskType={task.taskType}
          internalFrom={task.internalFrom}
          internalTo={task.internalTo}
          requestDateTime={task.requestDateTime}
          taskID={task.taskID}
          instructions={task.instructions}
          items={task.items}
        />
      ))}
    </div>
  );
};

export default MainPage;
