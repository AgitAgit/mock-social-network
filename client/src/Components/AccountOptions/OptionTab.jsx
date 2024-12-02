import { useEffect } from "react";
import { Link } from "react-router-dom";

const OptionTab = ({ icon, title, arrowIcon }) => {
  return (
    <div className="AccountCenterContainer mt-[0.5em] flex-col items-start justify-start gap-[0.5em] rounded-[0.2em] p-[0.5em] hover:bg-slate-700">
      <div className="flex w-full flex-row items-center gap-[0.5em]">
        <div className="flex flex-row items-center gap-[0.5em]">
          <div>{icon || " "}</div>
          <h3>{title}</h3>
        </div>
        <div className="ml-auto">
          <Link>
            <button>{arrowIcon}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OptionTab;
