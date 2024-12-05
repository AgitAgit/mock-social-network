import axios from "axios";
import { useEffect, useState } from "react";
import MenuContainer from "../../Components/Menubar/Menubar.jsx";
import Post from "../../Components/Post/Post.jsx";
import FooterMenu from "../../Components/FooterMenu/FooterMenu.jsx";
import { useSelector } from "react-redux";

const PostsFeed = () => {
  const [postsData, setPostsData] = useState([]);
  const [limit, setLimit] = useState(1);
  const usernameFromStore = useSelector((state) => state.user.name);
  console.log(usernameFromStore);

  const usernameFromStore = useSelector((state) => state.user.name);
  const fetchPosts = async () => {
    try {
      const allPostsResponse = await axios.get(
        `http://localhost:3000/api/posts?limit=${limit}`, //offset from which post id we start and limit amount of posts
        { withCredentials: true },
      );
      setPostsData(allPostsResponse.data);
    } catch (error) {
      console.error(`Error has occurred durning fetching API: `, error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleClick = (e) => {
    const button = e.target.closest("button");
    if (button) {
    }
  };

  return (
    <div
      className="m-8 mt-[4em] flex flex-col items-center justify-center text-white"
      onClick={handleClick}
    >
      <MenuContainer />
      <p className="text-white">{usernameFromStore}</p>
      {postsData &&
        postsData.map((post) => (
          <Post key={post._id} className={post._id} post={post} />
        ))}
      <FooterMenu pageValue={"Home"} />
    </div>
  );
};
export default PostsFeed;
