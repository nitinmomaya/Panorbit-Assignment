import React, { useState } from "react";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessage";
import ChatHeader from "./ChatHeader";
import { useSelector } from "react-redux";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const openState = useSelector((state) => state.chatState.openState);
  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="bg-white flex flex-col absolute right-96 align-bottom w-96   bottom-0">
      <ChatHeader />
      {openState && <MessageList messages={messages} />}
      {openState && <SendMessageForm onSendMessage={handleSendMessage} />}
    </div>
  );
};

export default ChatBox;

// import React from "react";

// const Chatbox = () => {
//   return (
//     <div>
//       <div className="header bg-blue-600 w-60 p-2 rounded-t-lg">
//         <img />
//         <h1>Full NAme</h1>
//       </div>
//       <div className="chatbox">

//       </div>
//     </div>
//   );
// };

// export default Chatbox;
