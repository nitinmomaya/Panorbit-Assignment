import React, { useState } from "react";
import ProfileMenuDropdown from "../components/ProfileDropdownModal/ProfileMenuDropdown";
import { useSelector } from "react-redux";

const TopBar = ({ header }) => {
  const [active, setActive] = useState(false);

  const filteredUserList = useSelector(
    (state) => state.profile.filteredUserList
  );

  const handleDropdownModal = () => {
    setActive(!active);
  };
  return (
    <div className="w-full flex justify-between items-center border-b border-gray-300 py-4  mb-4">
      <h1 className="font-semibold text-xl text-slate-500"> {header}</h1>
      <div
        onClick={() => handleDropdownModal()}
        className="flex items-center gap-2 cursor-pointer relative"
      >
        <img
          src={filteredUserList[0]?.profilepicture}
          className="w-10 h-10 rounded-full"
        />
        <h1 className=" text-slate-500">{filteredUserList[0]?.name}</h1>
        {active && <ProfileMenuDropdown />}
      </div>
    </div>
  );
};

export default TopBar;
