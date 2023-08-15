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
    <div className="bg-white flex flex-col absolute right-96 align-bottom w-72   bottom-0">
      <ChatHeader />
      {openState && <MessageList messages={messages} />}
      {openState && <SendMessageForm onSendMessage={handleSendMessage} />}
    </div>
  );
};

export default ChatBox;
