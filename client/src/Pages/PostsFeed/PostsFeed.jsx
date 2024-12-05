import axios from "axios";
import { useEffect, useState } from "react";
import MenuContainer from "../../Components/Menubar/Menubar.jsx";
import Post from "../../Components/Post/Post.jsx";
import FooterMenu from "../../Components/FooterMenu/FooterMenu.jsx";

const PostsFeed = () => {
  const [postsData, setPostsData] = useState([]);

  const fetchPosts = async () => {
    try {
      const allPostsResponse = await axios.get(
        "http://localhost:3000/api/posts",
        { withCredentials: true },
      );
    } catch (error) {
      console.error(`Error has occurred durning fetching API: `, error);
    }
    setPostsData(allPostsResponse);
  };

  const handleClick = (e) => {
    const button = e.target.closest("button");
    if (button) {
    }

    useEffect(() => {
      fetchPosts();
    }, []);
  };

  console.log(postsData);

  return (
    <div
      className="m-8 mt-[4em] flex flex-col items-center justify-center text-white"
      onClick={handleClick}
    >
      <MenuContainer />
      {postsData &&
        postsData.map((post) => (
          <Post key={post._id} className={post._id} post={post} />
        ))}
      <FooterMenu pageValue={"Home"} />
    </div>
  );
};
export default PostsFeed;
