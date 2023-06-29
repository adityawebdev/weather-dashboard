import React from "react";
import profile from "../../assets/profile.jpg";

const Header = () => {
  return (
    <div className="flex justify-between items-center -mt-4">
      <div className="left-text">
        <h1 className="text-xl font-bold">Welcome back Isabella</h1>
        <h2 className="text-xl">Check out today's weather information</h2>
      </div>
      <div className="profile flex items-center justify-between w-32">
        <span className="material-icons font-bold ">more_horiz</span>
        <img src={profile} height={70} width={70} className="rounded-xl" />
      </div>
    </div>
  );
};

export default Header;
