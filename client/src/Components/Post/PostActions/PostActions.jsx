import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { FaHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

const PostActions = ({ clicked }) => {
  return (
    <div className="IconsContainer flex w-full flex-row items-center justify-start gap-[1em]">
      <div
        className="cursor-pointer text-gray-500 hover:text-white"
        data-value="Like"
      >
        <FaHeart style={{ color: clicked ? "red" : "white" }} />
      </div>
      <div
        className="cursor-pointer text-gray-500 hover:text-white"
        data-value="Comment"
      >
        <FaRegComment />
      </div>
      <div
        className="cursor-pointer text-gray-500 hover:text-white"
        data-value="Share"
      >
        <RiShareBoxLine />
      </div>
      <div className="w-full text-end text-gray-500 hover:text-white">
        <TurnedInNotIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default PostActions;
