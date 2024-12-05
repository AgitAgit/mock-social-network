import axios from "axios";
import { useState, useEffect } from "react";
import FooterBar from "../../Components/FooterMenu/FooterMenu.jsx";
import AccountSettingsSearchBar from "../../Components/Searchbar/Searchbar.jsx";
import ImageBlockDisplay from "../../Components/ImageBlockDisplay/ImageBlockDisplay.jsx";
import FooterMenu from "../../Components/FooterMenu/FooterMenu.jsx";

const Search = () => {
  const [posts, setPosts] = useState(null);
  const [chosenPost, setChosenPost] = useState(null);

  async function fetchData() {
    try {
      const { data } = await axios.get("http://localhost:3000/api/posts", {
        withCredentials: true,
      });
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (e) => {
    const post = e.target.closest("button").className;
    setChosenPost(post);
    console.log(chosenPost);
  };

  return (
    <div className="p-[0.2em] pt-[0em]">
      <AccountSettingsSearchBar />
      <div
        onClick={handleClick}
        className="mt-2 flex w-full flex-row flex-wrap justify-center"
      >
        {posts &&
          posts.slice(0, 18).map((post) => (
            <button key={post._id} className={post._id}>
              <ImageBlockDisplay post={post} />
            </button>
          ))}
      </div>
      <FooterMenu pageValue={"Search"} />
    </div>
  );
};

export default Search;
