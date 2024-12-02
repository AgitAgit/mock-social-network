import React from "react";
// Icons Import
import { RiAppsLine } from "react-icons/ri";

// import Components
import MenuTabs from "./MenuTab.jsx";
import { Link } from "react-router-dom";

const MenuContainer = () => {
  return (
    <div className="justify- flex w-[92vw] items-center justify-between text-white">
      <div className="flex flex-row items-center">
        <Link>
          <RiAppsLine />
          <button className="ml-2">Menu</button>
        </Link>
      </div>
      <MenuTabs />
    </div>
  );
};
export default MenuContainer;
