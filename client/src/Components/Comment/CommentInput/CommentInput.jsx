const CommentInput = ({ commentUsername }) => {
  if (!commentUsername) {
    return;
  }

  return (
    <div className="mt-[-0.6em] flex items-start">
      <input
        className="mb-[1em] ml-[3.4em] bg-transparent text-[0.8em] text-gray-700 focus:outline-none"
        placeholder={`Reply to ${commentUsername || ""}...`}
      />
    </div>
  );
};

export default CommentInput;
