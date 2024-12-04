const ImageBlockDisplay = (post) => {
  console.log(post);

  return (
    <div className="m-1 flex w-[30vw] text-white">
      <img
        className="w-full"
        src={post.post.postImageUrl}
        alt="imgBlockDisplay"
      />
    </div>
  );
};

export default ImageBlockDisplay;
