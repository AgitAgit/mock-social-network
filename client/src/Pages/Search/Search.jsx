import axios from "axios";
import { useState, useEffect } from "react";
import ImageBlockDisplay from "../../Components/ImageBlockDisplay/ImageBlockDisplay.jsx";
import FooterMenu from "../../Components/FooterMenu/FooterMenu.jsx";
import SearchBarInput from "../../Components/SearchBarInput/SearchBarInput.jsx";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [posts, setPosts] = useState(null);
  const [chosenPost, setChosenPost] = useState(null);
  const navigate = useNavigate();

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
    const postId = e.target.closest("button").className;
    console.log(postId);

    navigate(`/view-post/${postId}`);
  };

  return (
    <div className="p-[0.2em] pt-[0em]">
      <SearchBarInput />

      <div
        onClick={handleClick}
        className="mb-12 mt-2 flex w-full flex-row flex-wrap justify-center"
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
