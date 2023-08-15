import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import UserDetails from "../components/UserDetails";
import TopBar from "../components/TopBar";
import Error from "./Error";
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
  // const { state } = useUserContext();
  // const { filteredData } = state;
  const filteredData = useSelector((state) => state.profile.filteredData);
  const sidebar = useSelector((state) => state.sidebar.sidebar);
  const val = useSelector((state) => state);
  const dispatch = useDispatch();
  // const { sidebar } = state;
  console.log("val is", val);
  const [localdata, setLocalData] = useState([]);
  const params = useParams();
  const active = useSelector((state) => state.chatState.chatState);
  const { id } = params;
  let userId = +id;
  useEffect(() => {
    // Filter data by ID when the component mounts or the ID changes
    // dispatch({ type: "FILTER_USER_BY_ID", payload: userId });
    dispatch(filterUserById(userId));
    dispatch(filterChatById(userId));
    dispatch(setChatData(userId));
    // dispatch({ type: "SET_CHAT", payload: userId });
    const storedData = localStorage.getItem("myData");
    const localdata = JSON.parse(storedData);
    setLocalData(localdata);
    console.log("localData is", localdata);
  }, [id]);

  // console.log(state.state);
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
