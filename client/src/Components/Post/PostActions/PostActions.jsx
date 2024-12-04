import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";

const hoverColorIcon = {
  "&:hover": {
    color: "var(--bgTheme)",
    background: "white",
  },
  padding: "0.05em",
  borderRadius: "0.1em",
  color: "white",
};

const PostActions = () => {
  return (
    <div className="IconsContainer flex w-full flex-row items-center justify-start gap-[1em]">
      <div className="cursor-pointer">
        <FavoriteBorderIcon sx={hoverColorIcon} />
      </div>
      <div className="cursor-pointer">
        <ChatBubbleOutlineIcon sx={hoverColorIcon} />
      </div>
      <div className="cursor-pointer">
        <ShareIcon sx={hoverColorIcon} />
      </div>
      <div className="w-full text-end">
        <TurnedInNotIcon className="cursor-pointer" sx={hoverColorIcon} />
      </div>
    </div>
  );
};

export default PostActions;
