import { Fragment, useState } from "react";
import "./App.css";
import Card from "./Components/CardGroup/Card";
import Header from "./Components/Header/Header";

function App() {
  // Variable to input value from the search bar
  const [searchSkill, setSearchSkill] = useState("");

  return (
    <Fragment>
      <Header setSearchSkill={setSearchSkill} />
      <Card searchSkill={searchSkill} />
    </Fragment>
  );
}

export default App;
