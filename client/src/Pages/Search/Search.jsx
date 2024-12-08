import axios from "axios";
import { useState, useEffect } from "react";
import ImageBlockDisplay from "../../Components/ImageBlockDisplay/ImageBlockDisplay.jsx";
import FooterMenu from "../../Components/FooterMenu/FooterMenu.jsx";
import SearchBarInput from "../../Components/SearchBarInput/SearchBarInput.jsx";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../Components/Loader/Loader.jsx";
import fetchPostsSearchPage from "../../Api/fetchPostsSearchPage.js";
import PostHeader from "../../Components/Post/PostHeader/PostHeader.jsx";

const styleFilterSearch =
  "z-10 flex flex-col flex-wrap items-start overflow-auto rounded-[0.5em] bg-transept p-[1em] text-white";

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(18);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  const [searchUserInput, setSearchUserInput] = useState("");
  const [usersResults, setUsersResults] = useState([]);

  const searchForUserFn = async () => {
    if (searchUserInput) {
      try {
        const { data } = await axios.get(`http://localhost:3000/api/users`, {
          withCredentials: true,
        });

        if (data.users) {
          const filteredUsers = data.users.filter((user) =>
            user.username.toLowerCase().includes(searchUserInput.toLowerCase()),
          );
          setUsersResults(filteredUsers);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
  };

  const handleChangeInput = (e) => {
    const searchUser = e.target.value;
    if (searchUser.length > 1) {
      setSearchUserInput(searchUser);
      searchForUserFn();
    }
  };

  useEffect(() => {
    fetchPostsSearchPage(setHasMore, setPosts, limit);
  }, [limit, searchUserInput]);

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
          <form className="pl-[0.5em] pr-[0.5em]">
            <SearchBarInput onChange={handleChangeInput} />
          </form>

          <div
            className={
              searchUserInput
                ? `${styleFilterSearch} h-[775px]`
                : `${styleFilterSearch} h-[0px]`
            }
          >
            {usersResults.map((user) => (
              <div>
                <button
                  key={user.username}
                  id={user.username}
                  className={`mb-[0.2em] w-[100%] opacity-[0.7] hover:bg-gray-800 hover:opacity-[1]`}
                >
                  <PostHeader
                    userProfileImg={user.profilePic}
                    postUsername={user.username}
                    withoutIcon={true}
                  />
                </button>
              </div>
            ))}
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
                posts.map((post, index) => (
                  <button key={index} className={post._id}>
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
