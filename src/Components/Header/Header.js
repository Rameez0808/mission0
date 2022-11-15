import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

const Header = ({ searchSkill, setSearchSkill }) => {
  return (
    <div className="header bg-header-banner bg-cover bg-no-repeat bg-center h-96 text-white">
      <Navbar />
      <Banner searchSkill={searchSkill} setSearchSkill={setSearchSkill} />
    </div>
  );
};

export default Header;
