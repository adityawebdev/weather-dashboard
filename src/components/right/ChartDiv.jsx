import React from "react";
import ChartElem from "./ChartElem";

const ChartDiv = () => {
  return (
    <div className="bg-white rounded-[60px] p-6 mt-4">
      <div className="flex justify-between items-center">
        <div className="l">
          <h2 className="font-bold text-xl">Upcoming hours</h2>
        </div>
        <div className="r flex justify-between items-center space-x-2">
          <div className="bg-grey rounded-lg opacity-80 pl-2">
            Rain Precipitation
            <span className="material-icons">keyboard_arrow_down</span>
          </div>
          <div className="bg-grey rounded-lg pl-2">
            Next Days
            <span className="material-icons">keyboard_arrow_right</span>
          </div>
        </div>
      </div>
      <ChartElem />
    </div>
  );
};

export default ChartDiv;
