import React from "react";

const ChatBotButton = ({ handleShowChatBot }) => {
  return (
    <button
      className="fixed right-2  bottom-2 h-24 w-24 bg-slate-100 p-4 rounded-full"
      onClick={handleShowChatBot}
    >
      <img
        className="w-full h-full"
        src="./images/Chatbot.png"
        alt="Chat-Bot"
      />
    </button>
  );
};

export default ChatBotButton;
