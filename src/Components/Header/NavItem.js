import React from "react";

const NavItem = ({ item }) => {
  return (
    <li className="nav-item hover:text-red-700 font-bold cursor-pointer md:text-xl text-2xl">
      {item}
    </li>
  );
};

export default NavItem;
