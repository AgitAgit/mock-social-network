import { GiFlipFlops } from "react-icons/gi";
import MenuTabs from "./MenuTab.jsx";

const MenuContainer = () => {
  return (
    <div className="justify- fixed top-[0] z-10 flex w-[100%] items-center justify-between bg-black pb-[0.3em] pt-[0.3em] text-white">
      <div className="flex flex-row items-center">
        <GiFlipFlops />
        <button className="ml-2">Babagram</button>
      </div>
      <MenuTabs />
    </div>
  );
};
export default MenuContainer;
