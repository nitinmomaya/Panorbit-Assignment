import React, { useState } from "react";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessage";
import ChatHeader from "./ChatHeader";
import { useSelector } from "react-redux";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const open = useSelector((state) => state.chatState.open);
  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="bg-white flex flex-col absolute right-96 align-bottom w-72 rounded-t-lg   bottom-0">
      <ChatHeader />
      {open && <MessageList messages={messages} />}
      {open && <SendMessageForm onSendMessage={handleSendMessage} />}
    </div>
  );
};

export default ChatBox;
