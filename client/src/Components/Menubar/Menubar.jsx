import { GiFlipFlops } from "react-icons/gi";
import MenuTabs from "./MenuTab.jsx";

const MenuContainer = () => {
  return (
    <div className="justify- flex w-[92vw] items-center justify-between text-white">
      <div className="flex flex-row items-center">
        <GiFlipFlops />
        <button className="ml-2">Babagram</button>
      </div>
      <MenuTabs />
    </div>
  );
};
export default MenuContainer;
