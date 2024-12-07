import UserCommentProfileImg from "./UserCommentProfileImg/UserCommentProfileImg";
import UsernameOfComment from "./UsernameOfComment/UsernameOfComment";
import UsernameCommentContent from "./UsernameCommentContent/UsernameCommentContent";
import CommentInput from "./CommentInput/CommentInput";
import { FaHeart } from "react-icons/fa6";
import timeSince from "../../utils/timeSince";

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
  const commentReplyAt = timeSince(comment.createdAt);
  const userCommentProfileImg = comment.authorId?.profilePic || "fill-image";
  const commentUsername = comment.authorId?.username || "anonymous";
  const userContent = comment.commentContent;

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-row items-center justify-start gap-[0.5em] text-[0.8em]">
        <UserCommentProfileImg userCommentProfileImg={userCommentProfileImg} />
        <UsernameOfComment commentUsername={commentUsername} />
        <div className="flex justify-center">
          <p className="text-gray-500">{commentReplyAt}</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <UsernameCommentContent userContent={userContent} />
        </div>
        <div className="group cursor-pointer" data-value="Like Comment">
          <FaHeart className="text-gray-500 hover:text-white" />
        </div>
      </div>
      <div className="none mt-[0.5em] flex w-full flex-col">
        <CommentInput commentUsername={commentUsername} />
      </div>
    </div>
  );
};

export default Comment;
