import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

const Header = ({ setSearchSkill }) => {
  return (
    <div className="header bg-header-banner bg-cover bg-no-repeat bg-center md:h-96 h-tall text-white">
      <Navbar />
      <Banner setSearchSkill={setSearchSkill} />
    </div>
  );
};

export default Header;
