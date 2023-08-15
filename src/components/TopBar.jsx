import React, { useState } from "react";
import ProfileMenuDropdown from "./ProfileMenuDropdown";
import { useSelector } from "react-redux";

const TopBar = ({ header }) => {
  const [active, setActive] = useState(false);

  const filteredData = useSelector((state) => state.profile.filteredData);

  const handleModal = () => {
    setActive(!active);
  };
  return (
    <div className="w-full flex justify-between items-center border-b border-gray-300 py-4  mb-4">
      <h1 className="font-semibold text-xl text-slate-500"> {header}</h1>
      <div
        onClick={() => handleModal()}
        className="flex items-center gap-2 cursor-pointer relative"
      >
        <img
          src={filteredData[0]?.profilepicture}
          className="w-10 h-10 rounded-full"
        />
        <h1 className=" text-slate-500">{filteredData[0]?.name}</h1>
        {active && <ProfileMenuDropdown />}
      </div>
    </div>
  );
};

export default TopBar;
