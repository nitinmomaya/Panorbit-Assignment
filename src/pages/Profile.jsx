import React, { useEffect } from "react";
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
  const filteredUserList = useSelector(
    (state) => state.profile.filteredUserList
  );
  // to renderdata according to sidebar state
  const sidebar = useSelector((state) => state.sidebar.sidebarState);
  const dispatch = useDispatch();

  //getting the id from react-router
  const params = useParams();
  //destructuring id
  const { id } = params;
  //converting id to number to help in filtering the data
  let userId = +id;

  //to check if anyone chat is open, by default no chat will be shown
  const active = useSelector((state) => state.chatState.chatState);

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
          <UserDetails filteredUserList={filteredUserList} />
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
