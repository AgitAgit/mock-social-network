import timeSince from "../../utils/timeSince.js";
import Comment from "../Comment/Comment.jsx";
import PostHeader from "./PostHeader/PostHeader.jsx";
import PostImage from "./PostImage/PostImage.jsx";
import PostActions from "./PostActions/PostActions.jsx";
import PostEngagements from "./PostEngagements/PostEngagements.jsx";
import UserPostContent from "./UserPostContent/UserPostContent.jsx";
import Loader from "../Loader/Loader.jsx";
import PostComment from "./PostComment/PostComment.jsx";

const Post = ({ post, clicked, isComments, commentDisplay }) => {
  if (!post) {
    return <Loader />;
  }

  const postId = post._id;
  const postUsername = post?.authorId?.username || "Unknown User";
  const userProfileImg = post?.authorId?.profilePic || "";
  const postUploadTime = timeSince(post?.createdAt) || "Just now";
  const postImage = post?.postImageUrl || "";
  const postContent = post?.content || "";
  const commentsArr = post?.commentIds || [];
  const likeCounts = post.likesCount;

  return (
    <div onClick={handleClick}>
      <div className="mb-[2em] flex flex-col items-center gap-[0.5em] rounded-[1em] p-[1.5em]">
        <PostHeader
          postUsername={postUsername}
          userProfileImg={userProfileImg}
          postUploadTime={postUploadTime}
        />
        <PostImage postImage={postImage} />
        <PostActions clicked={clicked} />
        {likeCounts > 1 ? <PostEngagements likeCounts={likeCounts} /> : ""}
        <UserPostContent
          postContent={postContent}
          postUsername={postUsername}
        />
        <div className="mt-[-0.5em] w-full">
          <button className="text-[0.7em] text-gray-500 hover:text-white">
            {commentTxtBtn}
          </button>
        </div>
        <div className={isComments ? `w-full` : "hidden"}>
          {commentsArr &&
            commentsArr.map((comment) => (
              <Comment key={comment._id} comment={comment} />
            ))}
          <div className={commentDisplay ? "w-full" : "hidden"}>
            <PostComment postUsername={postUsername} postId={postId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
