import axios from "axios";
import { useState, useEffect } from "react";
import ImageBlockDisplay from "../../Components/ImageBlockDisplay/ImageBlockDisplay.jsx";
import FooterMenu from "../../Components/FooterMenu/FooterMenu.jsx";
import SearchBarInput from "../../Components/SearchBarInput/SearchBarInput.jsx";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../Components/Loader/Loader.jsx";

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(18);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/posts?limit=${limit}`,
        { withCredentials: true },
      );
      if (response.data.length === 0) {
        setHasMore(false);
      }
      setPosts((prevPosts) => [...prevPosts, ...response.data]);
    } catch (error) {
      console.error(`Error during fetching API:`, error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [limit]);

  const handleClick = (e) => {
    const postId = e.target.closest("button").className;
    navigate(`/view-post/${postId}`);
  };

  const fetchMoreData = () => {
    setLimit((prevLimit) => prevLimit + 18);
  };

  return (
    <div>
      <div className="p-[0.2em] pt-[0em]">
        <div>
          <div className="pl-[0.5em] pr-[0.5em]">
            <SearchBarInput />
          </div>

          <div
            onClick={handleClick}
            className="mt-2 flex w-full flex-row flex-wrap justify-center"
          >
            <InfiniteScroll
              dataLength={posts.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<Loader />}
              endMessage={
                <h1 style={{ textAlign: "center" }}>
                  <b>No more posts to view at this moment.</b>
                </h1>
              }
            >
              {posts &&
                posts.map((post) => (
                  <button key={post._id} className={post._id}>
                    <ImageBlockDisplay post={post} />
                  </button>
                ))}
            </InfiniteScroll>
          </div>
          <FooterMenu pageValue={"Search"} />
        </div>
      </div>
    </div>
  );
};

export default Search;
