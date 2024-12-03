import timeSince from "../../utils/timeSince.js";
import Comment from "../Comment/Comment.jsx";
import PostHeader from "./PostHeader/PostHeader.jsx";
import PostImage from "./PostImage/PostImage.jsx";
import PostActions from "./PostActions/PostActions.jsx";
import PostEngagements from "./PostEngagements/PostEngagements.jsx";
import UserPostContent from "./UserPostContent/UserPostContent.jsx";

const hoverColorIcon = {
  "&:hover": {
    color: "var(--bgTheme)",
    background: "white",
  },
  padding: "0.05em",
  borderRadius: "0.1em",
  color: "white",
};

const styleIcon = {
  transform: "rotate(90deg)",
  cursor: "pointer",
  color: "white",
  borderRadius: "1em",
  padding: "0.1em",
  "&:hover": {
    background: "#2A3751",
  },
};

const Post = ({ post }) => {
  const postUsername = post.authorId.username;
  const userProfileImg = post.authorId.profilePic;
  const postUploadTime = timeSince(post.createdAt);
  const postImage = post.postImageUrl;
  const postContent = post.content;

  return (
    <div>
      <div className="mb-[2em] flex flex-col items-center gap-[0.5em] rounded-[1em] p-[1.5em]">
        <PostHeader
          postUsername={postUsername}
          userProfileImg={userProfileImg}
          postUploadTime={postUploadTime}
        />
        <PostImage postImage={postImage} />
        <PostActions />
        <PostEngagements />
        <UserPostContent
          postContent={postContent}
          postUsername={postUsername}
        />
        <div className="CommentsContainer bg-slate-500 p-[0.5em]">
          {post.commentIds.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
