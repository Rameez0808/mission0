import React from "react";
import SubmitButton from "./SubmitButton";

const ChatBotForm = ({ submitQuery, inputField, handleQueryText }) => {
  return (
    <form
      onSubmit={submitQuery}
      className=" w-full text-right h-12 mt-2 flex bg-white"
    >
      <input
        required="required"
        type="text"
        ref={inputField}
        onChange={handleQueryText}
        className="w-3/4 pl-4 h-full bg-white"
      />

      <SubmitButton />
    </form>
  );
};

export default ChatBotForm;
