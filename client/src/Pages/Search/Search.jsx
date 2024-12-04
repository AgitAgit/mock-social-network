import styles from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useState, useEffect } from "react";
import FooterBar from "../../Components/FooterMenu/FooterMenu.jsx";
import AccountSettingsSearchBar from "../../Components/Searchbar/Searchbar.jsx";
import { data } from "react-router-dom";
import ImageBlockDisplay from "../../Components/ImageBlockDisplay/ImageBlockDisplay.jsx";

const Search = () => {
  const [posts, setPosts] = useState(null);

  async function fetchData() {
    try {
      const { data } = await axios.get("http://localhost:3000/api/posts", {
        withCredentials: true,
      });
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (e) => {
    const post = e.target.closest("button");
    console.log(post.className);
  };

  return (
    <div>
      <AccountSettingsSearchBar />
      <div
        onClick={handleClick}
        className="mt-2 flex w-full flex-row flex-wrap justify-center"
      >
        {posts &&
          posts.slice(0, 18).map((post) => (
            <button key={post.post.id} className={post.post.id}>
              <ImageBlockDisplay post={post} />
            </button>
          ))}
      </div>
    </div>
  );
};

export default Search;
