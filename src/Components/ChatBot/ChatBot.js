import React, { useRef, useState } from "react";
import ButtonList from "./ButtonList";
import ChatBotChatting from "./ChatBotChatting";
import ChatBotForm from "./ChatBotForm";
import ChatBotHeader from "./ChatBotHeader";

import postAPI from "./PostAPI";

const ChatBot = ({ handleShowChatBot }) => {
  const [inputText, setInputText] = useState(); // variable to store input field text
  const [chat, setChat] = useState([]); // variable to store whole chat
  const [button, setButton] = useState([]); // variable to store the button from API
  const inputField = useRef(null); // Variable to get the input field

  // function to get input text and set it to the state
  const handleQueryText = (e) => {
    setInputText(e.target.value);
  };

  // update the chat from user text
  const updateInputChat = (text, messageType) => {
    setChat((oldArray) => [...oldArray, { message: text, type: messageType }]);
  };

  // Update the chat from robot text
  const updateChat = (text, messageType) => {
    for (const property in text) {
      setChat((oldArray) => [
        ...oldArray,
        { message: text[property], type: messageType },
      ]);
    }
  };

  // Update the button from the API
  const updateButton = (buttontext) => {
    for (const property in buttontext) {
      setButton((oldButton) => [
        ...oldButton,
        { name: property, value: buttontext[property] },
      ]);
    }
  };

  // Post API from button click
  const fetchButton = (e) => {
    setInputText(e.target.innerText);
    postAPI(
      e.target.getAttribute("requestintent"),
      updateChat,
      setInputText,
      setButton,
      updateButton,
      updateInputChat
    );
  };

  // Post API from form submission
  const submitQuery = (event) => {
    event.preventDefault();
    inputField.current.value = "";
    postAPI(
      inputText,
      updateChat,
      setInputText,
      setButton,
      updateButton,
      updateInputChat
    );
  };

  return (
    <div className=" lg:px-32 px-16 my-4 flex items-end w-full  flex-col">
      <div className="border-2 bg-stone-200  md:w-1/2 w-full  md:right-2 right-0 bottom-20 fixed">
        <ChatBotHeader handleShowChatBot={handleShowChatBot} />
        <div className=" h-tall  flex flex-col justify-end overflow-hidden mx-2">
          <ChatBotChatting chat={chat} />
          {button && <ButtonList fetchButton={fetchButton} button={button} />}
        </div>

        <ChatBotForm
          submitQuery={submitQuery}
          inputField={inputField}
          handleQueryText={handleQueryText}
        />
      </div>
    </div>
  );
};

export default ChatBot;
