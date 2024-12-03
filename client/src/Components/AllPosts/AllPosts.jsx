import axios from "axios";
import { useEffect, useState } from "react";
import FooterBar from "../Footbar/Footbar.jsx";
import MenuContainer from "../Menubar/Menubar.jsx";
import Post from "../Post/Post.jsx";

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
      {postsData && postsData.map((post) => <Post post={post} />)}
      <FooterBar />
    </div>
  );
};

export default AllPosts;
