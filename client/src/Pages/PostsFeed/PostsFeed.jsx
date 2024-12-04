import axios from "axios";
import { useEffect, useState } from "react";
import FooterBar from "../../Components/FooterMenu/FooterMenu.jsx";
import MenuContainer from "../../Components/Menubar/Menubar.jsx";
import Post from "../../Components/Post/Post.jsx";

const PostsFeed = () => {
  const [postsData, setPostsData] = useState([]);

  const fetchPosts = async () => {
    const allPostsResponse = await axios.get(
      "http://localhost:3000/api/posts/",
      { withCredentials: true },
    );
    setPostsData(allPostsResponse.data);
  };

  const handleClick = (e) => {
    const button = e.target.closest("button");
    if (button) {
      console.log(button);
    }

    useEffect(() => {
      fetchPosts();
    }, []);

    return (
      <div
        className="m-8 mt-[4em] flex flex-col items-center justify-center text-white"
        onClick={handleClick}
      >
        <MenuContainer />
        {postsData &&
          postsData.map((post) => (
            <Post key={post._id} post={post} className={`postId-${post._id}`} />
          ))}
        <FooterBar />
      </div>
    );
  };
};
export default PostsFeed;
