import { FiFolderPlus, FiHome } from "react-icons/fi";
import { RxCardStack } from "react-icons/rx";
import NavbarListItem from "../components/navbar-list-item";
import { useState } from "react";

const NavBar = () => {
  const listItemData = [
    {
      icon: <FiHome />,
      text: "Home",
      linkTo: "/",
    },
    {
      icon: <FiFolderPlus />,
      text: "Create Deck",
      linkTo: "/create-deck",
    },
    {
      icon: <RxCardStack />,
      text: "View Deck",
      linkTo: "/view-deck",
    },
  ];

  return (
    <ul className="navbar-ul">
      {listItemData.map((item) => {
        return (
          <NavbarListItem
            key={item.text}
            itemIcon={item.icon}
            itemName={item.text}
            linkTo={item.linkTo}
          />
        );
      })}
    </ul>
  );
};

export default NavBar;
