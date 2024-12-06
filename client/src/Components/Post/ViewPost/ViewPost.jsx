import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post";
import BackPageArrow from "../../BackPageArrow/BackPageArrow";
import Loader from "../../Loader/Loader";

const ViewPost = () => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const postId = params.postId.replace(/:/g, "");

  const fetchPost = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/posts/${postId}`,
        {
          withCredentials: true,
        },
      );

      if (data) {
        setPost(data);
      }
    } catch (error) {
      console.error(`Error has been occurred durning API post: `, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  return (
    <div className="mt-[2.5em] text-white">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <BackPageArrow />
          <Post post={post} />
        </div>
      )}
    </div>
  );
};

export default ViewPost;
