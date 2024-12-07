import axios from "axios";
import { useEffect, useState } from "react";

const PostComment = ({ postUsername, postId }) => {
  if (!postUsername) {
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputComment = e.target.elements.comment.value;
    if (inputComment.length > 1) {
      postComment(inputComment);
    }
  };

  const postComment = async (inputComment) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/comments/${postId}`,
        {
          content: inputComment,
        },
        { withCredentials: true },
      );

      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.error(`Error occurred while trying to add comment: `, error);
    }
  };

  return (
    <div className="mt-[-0.6em] flex w-full items-start">
      <form onSubmit={handleSubmit}>
        <input
          name="comment"
          className="mb-[1em] ml-[3.4em] bg-transparent text-[0.8em] text-gray-700 focus:text-white focus:outline-none"
          placeholder={`Add comment for ${postUsername || ""}`}
        />
      </form>
    </div>
  );
};

export default PostComment;
