import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

const PostActions = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="IconsContainer flex w-full flex-row items-center justify-start gap-[1em]">
      <div className="cursor-pointer">
        <FaHeart
          onClick={() => setClicked(!clicked)}
          style={{
            color: clicked ? "red" : "white",
          }}
        />
      </div>
      <div className="cursor-pointer">
        <FaRegComment />
      </div>
      <div className="cursor-pointer">
        <RiShareBoxLine />
      </div>
      <div className="w-full text-end">
        <TurnedInNotIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default PostActions;
