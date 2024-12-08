import axios from "axios";

const savePost = async (postId) => {
  try {
    const res = await axios.post(
      `https://mock-social-network.vercel.app/api/posts/${postId}/save`,
      {},
      {
        withCredentials: true,
      },
    );

    if (res) {
      console.log(res);
    }
  } catch (error) {
    console.error(`Error occurred durning saving post to user data: `, error);
  }
};

export default savePost;
