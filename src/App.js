import { Fragment, useState } from "react";
import "./App.css";
import Card from "./Components/CardGroup/Card";
import Header from "./Components/Header/Header";

function App() {
  const [searchSkill, setSearchSkill] = useState("");
  console.log(searchSkill);
  return (
    <Fragment>
      <Header searchSkill={searchSkill} setSearchSkill={setSearchSkill} />
      <Card searchSkill={searchSkill} />
    </Fragment>
  );
}

export default App;
