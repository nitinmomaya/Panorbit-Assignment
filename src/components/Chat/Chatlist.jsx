import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiMessageSquare } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { filterChatById } from "../../slices/profileSlice";
import { setChatState, setOpenState } from "../../slices/chatStateSlice";
const ChatList = () => {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();
  const handleState = () => {
    setActive(!active);
  };
  const chatData = useSelector((state) => state.profile.chatData);
  const chatState = useSelector((state) => state.chatState.chatState);
  const handleChat = (id) => {
    dispatch(filterChatById(id));
    dispatch(setChatState(true));
    dispatch(setOpenState(true));
    console.log("active hua", chatState, id);
  };

  return (
    <>
      <div className="flex flex-col w-60 h-auto rounded-xl  bg-white cursor-pointer">
        <div
          onClick={() => {
            handleState();
          }}
          className=" header h-auto bottom-0 flex  justify-between item-center p-4 rounded-t-xl bg-blue-600"
        >
          <div className="flex gap-2 items-center ">
            <FiMessageSquare className="-rotate-360 w-6 h-6 text-white" />
            <h1 className="text-white ">Chats</h1>
          </div>
          <div className="text-white flex ">
            {active ? (
              <FiChevronUp className="w-6 h-6" />
            ) : (
              <FiChevronDown className="w-6 h-6" />
            )}
          </div>
        </div>
        <div
          className={
            active
              ? `flex flex-col gap-2 h-80 overflow-y-scroll my-2`
              : `hidden`
          }
        >
          {chatData.map((user) => (
            <div
              className="flex gap-2 items-center p-2 mx-2 border-b   border-b-slate-100"
              key={user.id}
              onClick={() => handleChat(user?.id)}
            >
              <img
                className="w-8 h-8 rounded-full"
                src={user?.profilepicture}
              />
              <h1>{user?.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatList;
