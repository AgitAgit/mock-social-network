import UserCommentProfileImg from "./UserCommentProfileImg/UserCommentProfileImg";
import UsernameOfComment from "./UsernameOfComment/UsernameOfComment";
import UsernameCommentContent from "./UsernameCommentContent/UsernameCommentContent";
import CommentInput from "./CommentInput/CommentInput";
import { FaHeart } from "react-icons/fa6";

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
          <FaHeart sx={hoverColorIcon} />
        </div>
      </div>
      <CommentInput commentUsername={commentUsername} />
    </div>
  );
};

export default Comment;
