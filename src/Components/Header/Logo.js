import React from "react";

const Logo = () => {
  return (
    <div className="navbar-logo flex items-center">
      <img
        className="h-14 w-14 rounded-full"
        src="./Images/karan-face.jpg"
        alt="company logo"
      />
      <h3 className="md:text-3xl text-4xl font-bold ml-4 ">KARAN</h3>
    </div>
  );
};

export default Logo;
