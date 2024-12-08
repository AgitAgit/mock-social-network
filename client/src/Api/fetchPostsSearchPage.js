import axios from "axios";

async function fetchPostsSearchPage(setHasMore, setPosts, limit) {
  try {
    const response = await axios.get(
      `https://mock-social-network.vercel.app/api/posts?limit=${limit}`,
      { withCredentials: true },
    );
    if (response) {
      setHasMore(false);
    }
    setPosts((prevPosts) => [...prevPosts, ...response.data]);
  } catch (error) {
    console.error(`Error during fetching API:`, error);
  }
}

export default fetchPostsSearchPage;
