import axios from "axios";
import { useEffect, useState } from "react";
import MenuContainer from "../../Components/Menubar/Menubar.jsx";
import Post from "../../Components/Post/Post.jsx";
import FooterMenu from "../../Components/FooterMenu/FooterMenu.jsx";
import Loader from "../../Components/Loader/Loader.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import memoryLikesFn from "../../utils/memoryLikesFn.js";
import likeUnlikePost from "../../Api/likeUnlikePost.js";

const PostsFeed = () => {
  const [postsData, setPostsData] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [isComments, setIsComments] = useState(false);
  const [commentDisplay, setCommentDisplay] = useState(true);
  const [commentTxtBtn, setCommentTxtBtn] = useState("View all comments");

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/posts?limit=${limit}`,
        { withCredentials: true },
      );
      if (response.data.length === 0) {
        setHasMore(false);
      }
      setPostsData((prevPosts) => [...prevPosts, ...response.data]);
    } catch (error) {
      console.error(`Error during fetching API:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [limit]);

  // Load initial liked state from localStorage
  useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("postLikesByIds")) || [];
    if (savedLikes.includes(postId)) {
      setClicked(true);
    }
  }, [postId]);

  const fetchMoreData = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  const handleClick = (e) => {
    const iconElement = e.target.closest("[data-value]");
    const iconClicked = iconElement
      ? iconElement.getAttribute("data-value")
      : null;
    const button = e.target.closest("button")?.innerText;

    if (iconClicked === "Comment") {
      setCommentDisplay((prev) => !prev);
    }

    if (iconClicked === "Like") {
      setClicked(!clicked); // Update state
      memoryLikesFn(postId); // Persist to localStorage
      likeUnlikePost(postId); // API call if needed
    }

    if (button === "View all comments") {
      setCommentTxtBtn("Hide all comments");
      setIsComments((prev) => !prev);
    }

    if (button === "Hide all comments") {
      setCommentTxtBtn("View all comments");
      setIsComments((prev) => !prev);
    }

    if (iconClicked === "Share") {
      const currentUrl = `http://localhost:5173/view-post/${postId}`;
      copyToClipboard(currentUrl);
    }
  };

  return (
    <div
      className="m-8 mt-[4em] flex flex-col items-center justify-center text-white"
      onClick={handleClick}
    >
      <MenuContainer />
      <InfiniteScroll
        dataLength={postsData.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <h1 style={{ textAlign: "center" }}>
            <b>No more posts to view at this moment.</b>
          </h1>
        }
      >
        {postsData.map((post, index) => (
          <Post
            key={index}
            className={post._id}
            post={post}
            clicked={clicked}
          />
        ))}
      </InfiniteScroll>
      <FooterMenu pageValue={"Home"} />
    </div>
  );
};

export default PostsFeed;
