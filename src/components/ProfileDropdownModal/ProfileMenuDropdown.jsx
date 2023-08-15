import React from "react";
import { Link } from "react-router-dom";
import ProfileList from "./ProfileList";
import { useSelector } from "react-redux";

const ProfileMenuDropdown = () => {
  const userList = useSelector((state) => state.profile.userList);
  const chatlist = useSelector((state) => state.profile.chatList);

  return (
    <div className=" absolute right-0 top-10 w-80  flex flex-col items-center bg-white border-[1px] border-slate-100 p-4 rounded-lg shadow-md z-50">
      <img
        src={userList[0]?.profilepicture}
        className="w-20 h-20 rounded-full"
      />
      <h1>{userList[0]?.name}</h1>
      <p className="text-slate-400">{userList[0]?.username}</p>
      <div className="border-t border-slate-300 my-1">
        <ProfileList userList={chatlist} />
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
