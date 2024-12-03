const PostImage = ({ postImage }) => {
  return (
    <div className="postImageContainer flex flex-col">
      <img src={postImage} alt="" className="rounded-[0em]" />
    </div>
  );
};

export default PostImage;
