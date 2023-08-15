import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div className="w-[500px] bg-white border-slate-50 border-[1px] shadow-md rounded-2xl   flex flex-col  justify-center items-center absolute">
      <h1 className="font-display text-xl w-full px-4 py-8 rounded-tl-2xl rounded-tr-2xl flex justify-center items-center bg-gray-50 font-semibold text-slate-900 ">
        Select an account
      </h1>
      <ul className=" w-full h-[400px] bg-white  overflow-y-auto">
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/profile/${user.id}`}
            className="flex gap-2 items-center p-4 border-b border-slate-100"
          >
            <img
              src={user.profilepicture}
              className="w-8 rounded-full h-8"
              alt={`${user.name}'s profile picture`}
            />
            {user.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
