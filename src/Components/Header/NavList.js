import React from "react";
import NavItem from "./NavItem";

const NavList = ({ showNavLink }) => {
  return (
    <ul
      className={`${
        showNavLink && "mobile-nav-link"
      } nav-list list-none md:flex hidden gap-x-6 justify-center items-center ml-auto z-1`}
    >
      <NavItem item={"Home"} />
      <NavItem item={"Contact"} />
      <NavItem item={"About"} />

      <button className="nav-btn border-2 md:text-sm text-2xl font-bold rounded-lg px-4 py-2">
        Login
      </button>
    </ul>
  );
};

export default NavList;
