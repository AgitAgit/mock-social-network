import timeSince from "../../utils/timeSince.js";
import Comment from "../Comment/Comment.jsx";
import PostHeader from "./PostHeader/PostHeader.jsx";
import PostImage from "./PostImage/PostImage.jsx";
import PostActions from "./PostActions/PostActions.jsx";
import PostEngagements from "./PostEngagements/PostEngagements.jsx";
import UserPostContent from "./UserPostContent/UserPostContent.jsx";
import Loader from "../Loader/Loader.jsx";

const Post = ({ post }) => {
  if (!post) {
    return <Loader />;
  }

  const postUsername = post?.authorId?.username || "Unknown User";
  const userProfileImg = post?.authorId?.profilePic || "";
  const postUploadTime = timeSince(post?.createdAt) || "Just now";
  const postImage = post?.postImageUrl || "";
  const postContent = post?.content || "";
  const commentsArr = post?.commentIds || [];
  const likeCounts = post.likesCount;

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
        {likeCounts > 1 ? <PostEngagements likeCounts={likeCounts} /> : ""}
        <UserPostContent
          postContent={postContent}
          postUsername={postUsername}
        />
        <div className="CommentsContainer w-full">
          {commentsArr.length > 0 ? (
            commentsArr.map((comment) => (
              <Comment key={comment._id || comment.id} comment={comment} />
            ))
          ) : (
            <div>
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
