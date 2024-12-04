import PlaceholderImage from "/images/post-placeholder.svg";

const AddPost = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full flex-row flex-wrap text-white">
        <h2>New post</h2>
        <div className="flex items-center">
          <img src={PlaceholderImage} alt="" className="w-[30vw]" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Write a caption or add a pull..."
            className="w-full"
          />
        </div>
        <div>
          <p>icon placeholder</p>
          <p>Tag people</p>
        </div>
        <div>
          <p>Add music</p>
        </div>
        <div>
          <p>Add location</p>
        </div>
        <div>
          <button className="w-full rounded-[0.3em] bg-blue-600 pl-[0.4em] pr-[0.4em]">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
