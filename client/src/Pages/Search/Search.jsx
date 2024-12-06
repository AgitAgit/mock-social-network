import axios from "axios";
import { useState, useEffect } from "react";
import ImageBlockDisplay from "../../Components/ImageBlockDisplay/ImageBlockDisplay.jsx";
import FooterMenu from "../../Components/FooterMenu/FooterMenu.jsx";
import SearchBarInput from "../../Components/SearchBarInput/SearchBarInput.jsx";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader.jsx";

const Search = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chosenPost, setChosenPost] = useState(null);
  const navigate = useNavigate();

  async function fetchData() {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3000/api/posts", {
        withCredentials: true,
      });
      setPosts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (e) => {
    const postId = e.target.closest("button").className;
    navigate(`/view-post/${postId}`);
  };

  return (
    <div className="p-[0.2em] pt-[0em]">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="pl-[0.5em] pr-[0.5em]">
            <SearchBarInput />
          </div>

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
      )}
    </div>
  );
};

export default Search;
