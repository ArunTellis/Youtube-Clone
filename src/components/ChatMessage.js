import React from "react";

const ChatMessage = ({ name, Message }) => {
  //This will be shown below the video in the watch page
  return (
    <div className="flex items-center shadow-lg p-2 bg-cyan-100 border border-black">
      <img
        className="h-9"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="User"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{Message}</span>
    </div>
  );
};

export default ChatMessage;
