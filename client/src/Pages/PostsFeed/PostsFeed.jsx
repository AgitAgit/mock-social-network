import axios from "axios";
import { useEffect, useState } from "react";
import MenuContainer from "../../Components/Menubar/Menubar.jsx";
import Post from "../../Components/Post/Post.jsx";
import FooterMenu from "../../Components/FooterMenu/FooterMenu.jsx";
import Loader from "../../Components/Loader/Loader.jsx";

const PostsFeed = () => {
  const [postsData, setPostsData] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const allPostsResponse = await axios.get(
        `http://localhost:3000/api/posts?limit=${limit}`,
        { withCredentials: true },
      );
      setPostsData(allPostsResponse.data);
    } catch (error) {
      console.error(`Error has occurred during fetching API:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleClick = (e) => {
    const button = e.target.closest("button");
    if (button) {
      // Your button handling logic
    }
  };

  return (
    <div
      className="m-8 mt-[4em] flex flex-col items-center justify-center text-white"
      onClick={handleClick}
    >
      <MenuContainer />
      {loading ? (
        <Loader />
      ) : (
        postsData.map((post) => (
          <Post key={post._id} className={post._id} post={post} />
        ))
      )}
      <FooterMenu pageValue={"Home"} />
    </div>
  );
};

export default PostsFeed;
