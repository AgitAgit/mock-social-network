import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import axios from "axios";

const PostActions = ({ postId }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
    likeUnlikePost(postId);
  };

  const likeUnlikePost = async (postId) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/posts/${postId}/like`,
        {},
        { withCredentials: true },
      );

      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.error(
        `Error has been occurred durning like/unlike of the post: `,
        error,
      );
    }
  };

  return (
    <div className="IconsContainer flex w-full flex-row items-center justify-start gap-[1em]">
      <div className="cursor-pointer">
        <FaHeart
          onClick={handleClick}
          style={{ color: clicked ? "red" : "white" }}
          aria-label="Like or Unlike Post"
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
