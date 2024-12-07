import timeSince from "../../utils/timeSince.js";
import Comment from "../Comment/Comment.jsx";
import PostHeader from "./PostHeader/PostHeader.jsx";
import PostImage from "./PostImage/PostImage.jsx";
import PostActions from "./PostActions/PostActions.jsx";
import PostEngagements from "./PostEngagements/PostEngagements.jsx";
import UserPostContent from "./UserPostContent/UserPostContent.jsx";
import Loader from "../Loader/Loader.jsx";
import PostComment from "./PostComment/PostComment.jsx";
import likeUnlikePost from "../../Api/likeUnlikePost.js";
import copyToClipboard from "../../utils/copyToClipboard.js";
import memoryLikesFn from "../../utils/memoryLikesFn.js";
import { useState, useEffect } from "react";

const Post = ({ post }) => {
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

  const [isComments, setIsComments] = useState(false);
  const [commentDisplay, setCommentDisplay] = useState(true);
  const [commentTxtBtn, setCommentTxtBtn] = useState("View all comments");
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    const iconElement = e.target.closest("[data-value]");
    const iconClicked = iconElement
      ? iconElement.getAttribute("data-value")
      : null;
    const button = e.target.closest("button")?.innerText;

    if (iconClicked === "Comment") {
      setCommentDisplay((prev) => !prev);
    }

    if (iconClicked === "Like") {
      const newClickedState = !clicked;
      setClicked(newClickedState); // Update state
      memoryLikesFn(postId); // Persist to localStorage
      likeUnlikePost(postId); // API call if needed
    }

    if (button === "View all comments") {
      setCommentTxtBtn("Hide all comments");
      setIsComments((prev) => !prev);
    }

    if (button === "Hide all comments") {
      setCommentTxtBtn("View all comments");
      setIsComments((prev) => !prev);
    }

    if (iconClicked === "Share") {
      const currentUrl = `http://localhost:5173/view-post/${postId}`;
      copyToClipboard(currentUrl);
    }
  };

  // Load initial liked state from localStorage
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("postLikesByIds")) || [];
    if (savedLikes.includes(postId)) {
      setClicked(true);
    }
  }, [postId]);

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
