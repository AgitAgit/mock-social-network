import axios from "axios";

const likeUnlikePost = async (postId) => {
  try {
    const res = await axios.post(
      `https://mock-social-network.vercel.app/api/posts/${postId}/like`,
      {},
      { withCredentials: true },
    );

    if (res) {
      console.log(res);
    }
  } catch (error) {
    console.error("Error occurred during like/unlike of the post: ", error);
  }
};

export default likeUnlikePost;
