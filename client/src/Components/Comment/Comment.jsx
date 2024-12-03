import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const hoverColorIcon = {
  width: "5vw",
  padding: "0.05em",
  borderRadius: "0.1em",
  color: "white",

  "&:hover": {
    color: "var(--bgTheme)",
    background: "white",
  },
};

const Comment = ({ comment }) => {
  return (
    <div>
      <div className="mb-[0.8em] flex flex-row justify-start gap-[0.5em] text-[0.8em]">
        <div>
          <img src={comment.authorId.profilePic} alt="" className="w-[15vw]" />
        </div>
        <div>
          <p>{comment.authorId.username}</p>
        </div>
        <div className="w-full text-[0.7em]">
          <p>{comment.commentContent}</p>
        </div>
        <div className="cursor-pointer">
          <FavoriteBorderIcon sx={hoverColorIcon} />
        </div>
      </div>
    </div>
  );
};

export default Comment;
