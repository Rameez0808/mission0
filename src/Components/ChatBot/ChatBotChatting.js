import React from "react";

const ChatBotChatting = ({ chat }) => {
  return chat.map((chatText, index) => {
    if (chatText.type === "robot") {
      return (
        <p
          key={index}
          className={`p-1 md:text-sm text-xl leading-snug  text-white self-start bg-slate-600 w-3/4`}
        >
          {chatText.message}
        </p>
      );
    } else {
      return (
        <p
          key={index}
          className={` md:text-sm text-xl p-2 self-end rounded  my-2 bg-slate-300 w-3/4`}
        >
          {chatText.message}
        </p>
      );
    }
  });
};

export default ChatBotChatting;
