import { Fragment, useState } from "react";
import "./App.css";
import Card from "./Components/CardGroup/Card";
import ChatBot from "./Components/ChatBot/ChatBot";
import ChatBotButton from "./Components/ChatBot/ChatBotButton";
import Header from "./Components/Header/Header";

function App() {
  // Variable to input value from the search bar
  const [searchSkill, setSearchSkill] = useState("");

  const [showChatBot, setShowChatBot] = useState(false);

  const handleShowChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  return (
    <Fragment>
      <Header setSearchSkill={setSearchSkill} />
      <Card searchSkill={searchSkill} />

      <ChatBotButton handleShowChatBot={handleShowChatBot} />
      {showChatBot && <ChatBot handleShowChatBot={handleShowChatBot} />}
    </Fragment>
  );
}

export default App;
