import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UserCommentProfileImg from "./UserCommentProfileImg/UserCommentProfileImg";
import UsernameOfComment from "./UsernameOfComment/UsernameOfComment";
import UsernameCommentContent from "./UsernameCommentContent/UsernameCommentContent";

const hoverColorIcon = {
  width: "5vw",
  padding: "0.05em",
  borderRadius: "0.1em",
  color: "white",

  "&:hover": {
    color: "var(--bgTheme)",
    background: "white",
  },
};

const Comment = ({ comment }) => {
  // console.log(comment);
  const userCommentProfileImg = comment.authorId?.profilePic || "fill-image";
  const commentUsername = comment.authorId?.username || "anonymous";
  const userContent = comment.commentContent;

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-row justify-start gap-[0.5em] text-[0.8em]">
        <UserCommentProfileImg userCommentProfileImg={userCommentProfileImg} />
        <UsernameOfComment commentUsername={commentUsername} />
        <UsernameCommentContent userContent={userContent} />
        <div className="cursor-pointer">
          <FavoriteBorderIcon sx={hoverColorIcon} />
        </div>
      </div>
      <div className="mt-[-0.6em] flex items-start">
        <button className="mb-[1em] ml-[2.6em] text-[0.8em] text-gray-700 hover:text-white">
          Reply
        </button>
        <input
          type="text"
          placeholder={`Reply to ${commentUsername}...`}
          className="w-[50%] rounded-[10em] bg-gray-500 pl-[0.5em]"
        />
      </div>
    </div>
  );
};

export default Comment;
