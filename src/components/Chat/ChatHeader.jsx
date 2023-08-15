import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setChatState, setOpenState } from "../../slices/chatStateSlice";

const ChatHeader = () => {
  const chatUser = useSelector((state) => state.profile.filterChatList);
  const dispatch = useDispatch();
  const open = useSelector((state) => state.chatState.open);
  const handleState = () => {
    dispatch(setOpenState(!open));
  };

  return (
    <>
      <div className="header flex gap-2 justify-between w-full bg-blue-600  p-4 rounded-t-lg">
        <div className="flex gap-2 items-center">
          <img
            className="w-8 h-8 rounded-full"
            src={chatUser[0]?.profilepicture}
          />
          <h1 className="text-white">{chatUser[0]?.name}</h1>
        </div>
        <div
          onClick={() => {
            handleState();
          }}
          className="flex gap-3"
        >
          {open ? (
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
