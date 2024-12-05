import timeSince from "../../utils/timeSince.js";
import Comment from "../Comment/Comment.jsx";
import PostHeader from "./PostHeader/PostHeader.jsx";
import PostImage from "./PostImage/PostImage.jsx";
import PostActions from "./PostActions/PostActions.jsx";
import PostEngagements from "./PostEngagements/PostEngagements.jsx";
import UserPostContent from "./UserPostContent/UserPostContent.jsx";

const Post = ({ post }) => {
  console.log(post.commentIds);

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
        <div className="CommentsContainer w-full">
          {post.commentIds.map((comment) => (
            <Comment
              key={comment._id}
              className={comment._id}
              comment={comment}
            />
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default Post;
