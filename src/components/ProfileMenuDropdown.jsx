import React from "react";
import { Link } from "react-router-dom";
import ProfileList from "./ProfileList";
import { useSelector } from "react-redux";

const ProfileMenuDropdown = () => {
  const filteredData = useSelector((state) => state.profile.filteredData);
  const userList = useSelector((state) => state.profile.chatData);

  console.log("profile", filteredData);

  console.log("userlist from menu", userList, typeof userList);
  return (
    <div className=" absolute right-0 top-10 w-72 flex flex-col items-center bg-white border-[1px] border-slate-100 p-4 rounded-lg shadow-md z-50">
      <img
        src={filteredData[0]?.profilepicture}
        className="w-20 h-20 rounded-full"
      />
      <h1>{filteredData[0]?.name}</h1>
      <p>{filteredData[0]?.username}</p>
      <div>
        <ProfileList userList={userList} />
      </div>
      <Link to="/">
        <button className="px-8 py-2 rounded-full bg-red-500 font-semibold text-slate-50 my-2">
          Logout
        </button>
      </Link>
    </div>
  );
};

export default ProfileMenuDropdown;
