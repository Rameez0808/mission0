import React from "react";
import CrossButton from "./CrossButton";

const ChatBotHeader = ({ handleShowChatBot }) => {
  return (
    <div className="bg-slate-100 p-4 flex">
      <h3 className="md:text-sm text-2xl font-bold">
        Turner Live Auction's FAQ's
      </h3>
      <CrossButton handleShowChatBot={handleShowChatBot} />
    </div>
  );
};

export default ChatBotHeader;
