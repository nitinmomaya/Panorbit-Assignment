import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setChatState, setOpenState } from "../../slices/chatStateSlice";

const ChatHeader = () => {
  const filteredChatData = useSelector(
    (state) => state.profile.filteredChatData
  );
  const dispatch = useDispatch();
  const openState = useSelector((state) => state.chatState.openState);
  console.log("act", openState);
  console.log("chat clicked", filteredChatData, filteredChatData[0]?.id);
  const handleState = () => {
    dispatch(setOpenState(!openState));
  };

  return (
    <>
      <div className="header flex gap-2 justify-between w-full bg-blue-600  p-4 rounded-t-lg">
        <div className="flex gap-2">
          <img
            className="w-6 h-6 rounded-full"
            src={filteredChatData[0]?.profilepicture}
          />
          <h1 className="text-white">{filteredChatData[0]?.name}</h1>
        </div>
        <div
          onClick={() => {
            handleState();
          }}
          className="flex gap-3"
        >
          {openState ? (
            <FiChevronUp className="w-6 h-6 text-white" />
          ) : (
            <FiChevronDown className="w-6 h-6 text-white" />
          )}
          <FiX
            onClick={() => {
              dispatch(setChatState(false));
            }}
            className="w-6 h-6 text-white"
          />
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
