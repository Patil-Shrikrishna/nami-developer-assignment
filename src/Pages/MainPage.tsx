import React from "react";
import Data from "../utils/data";
import TaskCard from "../components/TaskCard";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import MobileHeader from "../components/MobileHeader";
import MobileFooter from "../components/MobileFooter";
import Button from "../components/Button";

const MainPage: React.FC = () => {
  const [filter, setFilter] = React.useState<string>("");

  const filterOptions: string[] = [
    "Not Accepted",
    "Ongoing",
    "Scheduled",
    "Completed",
    "Delayed",
    "Ontime",
  ];
  const handleClick = (name: string) => {
    setFilter(name.toLowerCase());
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="md:block hidden">
        <TopNav />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>
      <div className="flex gap-4 justify-center">
        <div className="md:block hidden w-1/6">
          <SideNav />
        </div>
        <div className="w-5/6 grid grid-cols-1 gap-4">
          <h1 className="text-sm md:text-3xl md:block hidden">
            Task of the day
          </h1>

          {/*  filter chips */}
          <div className="flex gap-4 overflow-scroll md:overflow-hidden">
            {filterOptions.map((filter) => (
              <Button
                key={filter}
                name={filter}
                type="chip"
                onClick={handleClick}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-4 ">
            {Data.map(
              (task, index) =>
                (filter === "" ? true : task.taskStatus === filter) && (
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
                )
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <MobileFooter />
      </div>
    </div>
  );
};

export default MainPage;
