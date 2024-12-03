import timeSince from "../../utils/timeSince.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const hoverColorIcon = {
  "&:hover": {
    color: "var(--bgTheme)",
    background: "white",
  },
  padding: "0.05em",
  borderRadius: "0.1em",
  color: "white",
};

const styleIcon = {
  background: "#2A3751",
  color: "white",
  borderRadius: "1em",
  width: "10vw",
  height: "100%",
  padding: "0.4em",
  "&:hover": {
    backgroundColor: "#050f20",
  },
};

const Post = ({ post }) => {
  return (
    <div>
      <div key={post._id}>
        <div className="mb-[2em] flex flex-col items-center gap-[0.5em] rounded-[1em] p-[1.5em]">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="creatorContainer flex w-full flex-row items-center justify-start gap-[0.5em]">
              <img src={post.authorId.profilePic} alt="" className="w-[5vw]" />
              <p>{post.authorId.username}</p>
              <p className="text-gray-500">{timeSince(post.createdAt)}</p>
            </div>
            <div>
              <MoreVertIcon sx={styleIcon} />
            </div>
          </div>
          <div className="postImageContainer flex flex-col">
            <img src={post.postImageUrl} alt="" className="rounded-[0em]" />
          </div>
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
          <div className="flex w-full flex-row justify-start gap-[1em] text-start">
            <div>
              <h2 className="w-full text-[0.7em]">{post.authorId.username}:</h2>
            </div>
            <div>
              <p className="w-full text-[0.7em]"> {post.content}</p>
            </div>
          </div>
          <div className="CommentsContainer bg-slate-500 p-[0.5em]">
            {post.commentIds.map(
              (comment) => (
                console.log(comment),
                (
                  <div key={comment._id}>
                    <div className="flex flex-row items-center justify-start gap-[0.5em]">
                      <div>
                        <img
                          src={comment.authorId.profilePic}
                          alt=""
                          className="w-[15vw]"
                        />
                      </div>
                      <div className={comment.authorId.id}>
                        {comment.authorId.username}
                      </div>
                      <div className="w-full text-[0.7em]">
                        <p>{comment.commentContent}</p>
                      </div>
                      <div className="cursor-pointer">
                        <FavoriteBorderIcon sx={hoverColorIcon} />
                      </div>
                    </div>
                  </div>
                )
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
