import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import NavList from "./NavList";

const NavBar = () => {
  const [showNavLink, setNavLink] = useState(false); //variable to hide/show the nav-Link
  const [navbarColor, setNavbarColor] = useState("transparent"); // Variable to change color on scroll

  // Show/Hide NavLinks on button click
  const changeShowNavLink = () => {
    setNavLink(!showNavLink);
  };

  //logo scroll function
  const changeLogo = () => {
    if (window.scrollY >= 30) {
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
      className={`navbar flex px-8 md:py-4 py-8 ${navbarColor} fixed top-0 right-0 left-0 z-10`}
    >
      <Logo />
      <NavList showNavLink={showNavLink} />
      <Hamburger changeShowNavLink={changeShowNavLink} />
    </div>
  );
};

export default NavBar;
