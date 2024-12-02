import React from "react";
// Icons Import
import { CgMenuGridO } from "react-icons/cg";
// import Components
import MenuTabs from "./MenuTab.jsx";

const MenuContainer = () => {
  return (
    <div className="justify- flex w-[92vw] items-center justify-between text-white">
      <div className="flex flex-row items-center">
        <CgMenuGridO />
        <h1 className="ml-2">Menu</h1>
      </div>
      <MenuTabs />
    </div>
  );
};
export default MenuContainer;
