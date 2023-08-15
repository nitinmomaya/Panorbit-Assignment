import React from "react";

const MessageList = ({ messages }) => {
  const recieverMessage = [
    "Hello, Thanks for checking my assignment",
    "I Hope you like my Assignment",
  ];
  return (
    <div className="bg-white  m-3 gap-2 flex flex-col h-40 overflow-y-scroll overflow-x-hidden justify-self-end">
      <div className="flex flex-col gap-3">
        {recieverMessage.map((message) => (
          <div className="p-2 bg-slate-100 text-sm rounded-md w-64">
            <h1>{message}</h1>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <h1 className="text-slate-400 text-sm text-center">9:41 pm</h1>
      </div>
      <div className="w-full  flex flex-col gap-2  ">
        <div className="flex flex-col gap-3 items-end m-2 ">
          {messages.map((message, index) => (
            <p
              className=" flex flex-col gap-3 p-2 bg-slate-100 text-sm rounded-md w-64 text-right"
              key={index}
            >
              {message}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageList;
