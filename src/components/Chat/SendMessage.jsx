import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const SendMessageForm = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="flex gap-2 w-full relative">
      <input
        className="bg-white p-2 border-slate-200 border-[1px] rounded-lg  w-full"
        type="text"
        value={message}
        onChange={handleMessageChange}
      />
      <button
        className=" text-blue-500  font-bold text-xl h-full px-2  absolute right-0"
        onClick={handleSendMessage}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default SendMessageForm;
