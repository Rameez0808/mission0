import React from "react";

const NavList = ({ showNavLink }) => {
  return (
    <ul
      className={`${
        showNavLink && "mobile-nav-link"
      } nav-list list-none md:flex hidden gap-x-6 justify-center items-center ml-auto z-1`}
    >
      <li className="nav-item font-bold">Home</li>
      <li className="nav-item font-bold ">Contact</li>
      <li className="nav-item font-bold">About</li>
      <button className="nav-btn border-2 rounded-lg px-4 py-2">Login</button>
    </ul>
  );
};

export default NavList;
