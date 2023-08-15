import React, { useEffect, useState } from "react";
import SideBar from "../components/Sidebar/SideBar";
import UserDetails from "../components/UserDetails";
import TopBar from "../components/TopBar";
import Error from "../components/Error";
import { useParams } from "react-router-dom";
import ChatList from "../components/Chat/Chatlist";
import Chatbox from "../components/Chat/Chatbox";
import { useDispatch, useSelector } from "react-redux";
import {
  filterChatById,
  filterUserById,
  setChatData,
} from "../slices/profileSlice";

const Profile = () => {
  const filteredData = useSelector((state) => state.profile.filteredData);
  const sidebar = useSelector((state) => state.sidebar.sidebar);
  const val = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("val is", val);
  const params = useParams();
  const active = useSelector((state) => state.chatState.chatState);
  const { id } = params;
  let userId = +id;
  useEffect(() => {
    // Filter data by ID when the component mounts or the ID changes
    dispatch(filterUserById(userId));
    dispatch(filterChatById(userId));
    dispatch(setChatData(userId));
  }, [id]);

  return (
    <div className="flex bg-white w-screen h-screen pt-10 pl-10 gap-8 overflow-x-hidden">
      <SideBar />
      <div className="flex w-full  flex-col mx-10">
        <TopBar header={sidebar} />
        {sidebar === "Profile" ? (
          <UserDetails filteredData={filteredData} />
        ) : (
          <Error />
        )}
        <div className=" sticky bottom-0 flex justify-end gap-6 z-30 ">
          <div className=" align-bottom flex  gap-6 relative">
            {active && <Chatbox />}
            <ChatList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
