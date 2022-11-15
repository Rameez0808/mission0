import React, { useState, useEffect } from "react";
import NavList from "./NavList";

const NavBar = () => {
  const [showNavLink, setNavLink] = useState(false);
  const [navbarColor, setNavbarColor] = useState("transparent");

  const changeShowNavLink = () => {
    setNavLink(!showNavLink);
  };

  //logo scroll function
  const changeLogo = () => {
    if (window.scrollY >= 60) {
      setNavbarColor("bg-black");
    } else {
      setNavbarColor("transparent");
    }
  };

  useEffect(() => {
    changeLogo();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo);
  });

  return (
    <div
      className={`navbar flex px-8 py-4 ${navbarColor} fixed top-0 right-0 left-0 z-10`}
    >
      <div className="navbar-logo flex">
        <img
          className="h-10 w-10 rounded-full"
          src="./Images/karan-face.jpg"
          alt="company logo"
        />
        <h3 className="text-3xl font-bold ml-4">Karan</h3>
      </div>

      <NavList showNavLink={showNavLink} />
      <button
        onClick={changeShowNavLink}
        className="hamburger px-4 md:hidden ml-auto z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default NavBar;
