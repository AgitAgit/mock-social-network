import React from "react";

const UserCommentProfileImg = ({ userCommentProfileImg }) => {
  return (
    <div>
      <img
        src={userCommentProfileImg}
        alt=""
        className="w-[10vw] rounded-[100em]"
      />
    </div>
  );
};

export default UserCommentProfileImg;
