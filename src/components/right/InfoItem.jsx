import React from "react";
import { Line } from "rc-progress";

const InfoItem = ({ name, value, text, icon, range, status }) => {
  const percent = (value * 100) / range;
  return (
    <div className="bg-white flex flex-col p-6 rounded-[40px] w-3/12 mt-4">
      <div className="header flex justify-between">
        <h2 className="font-bold text-lg">{name}</h2>
        <span className="material-icons text-light-blue">{icon}</span>
      </div>
      <div className="details flex justify-center items-center mt-2">
        <h1 className="text-2xl font-bold">
          {text} <span className="text-sm font-medium">{status}</span>
        </h1>
      </div>
      <div className="progress">
        <Line percent={percent} strokeWidth={4} strokeColor="#5C9CE5" />
      </div>
    </div>
  );
};

export default InfoItem;
