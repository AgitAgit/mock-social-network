import axios from "axios";
import { useEffect, useState } from "react";
import timeSince from "../../utils/timeSince.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import FooterBar from "../Footbar/Footbar.jsx";
import MenuContainer from "../Menubar/Menubar.jsx";

const hoverColorIcon = {
  "&:hover": {
    color: "var(--bgTheme)",
    background: "white",
  },
  padding: "0.05em",
  borderRadius: "0.1em",
  color: "white",
};

const AllPosts = () => {
  const [postsData, setPostsData] = useState([]);

  const fetchPosts = async () => {
    const allPostsResponse = await axios.get(
      "http://localhost:3000/api/posts/",
      { withCredentials: true },
    );
    setPostsData(allPostsResponse.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="m-8 mt-[0.5em] flex flex-col items-center justify-center text-white">
      <MenuContainer />
      {postsData &&
        postsData.map((post) => (
          <div key={post._id}>
            <div className="mb-[2em] flex flex-col items-center gap-[0.5em] rounded-[1em] p-[1.5em]">
              <div className="creatorContainer flex w-full flex-row items-center justify-start gap-[0.5em]">
                <img src={post.authorId.imageUrl} alt="" className="w-[5vw]" />
                <p>{post.authorId.username}</p>
                <p className="text-gray-500">{timeSince(post.createdAt)}</p>
              </div>
              <div className="postImageContainer flex flex-col">
                <img
                  src={post.postImageUrl}
                  alt=""
                  className="w-[10vw] rounded-[0em]"
                />
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
                  <TurnedInNotIcon
                    className="cursor-pointer"
                    sx={hoverColorIcon}
                  />
                </div>
              </div>
              <div className="flex w-full flex-col justify-start text-start">
                <div>{post.authorId.username}</div>
                <div>{post.content}</div>
              </div>
              <div className="CommentsContainer bg-slate-500 p-[0.5em]">
                {post.commentIds.map((comment) => (
                  <div key={comment._id}>
                    <div className="mb-[1em] flex flex-row items-center justify-start gap-[0.5em]">
                      <div>
                        <img
                          src={comment.authorId.imageUrl}
                          alt=""
                          className=""
                        />
                      </div>
                      <div className={comment.authorId.id}>
                        {comment.authorId.username}
                      </div>
                      <div>{comment.commentContent}</div>
                      <div className="text-gray-500">
                        {timeSince(comment.createdAt)}
                      </div>
                      <div className="cursor-pointer">
                        <FavoriteBorderIcon sx={hoverColorIcon} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      <FooterBar />
    </div>
  );
};

export default AllPosts;
