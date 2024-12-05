import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post/Post";

const ViewPost = () => {
  const [post, setPost] = useState();

  const params = useParams();

  const postId = params.postId.replace(/:/g, "");

  const fetchPost = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/posts/${postId}`, {
        withCredentials: true,
      });

      if (res.data) {
        setPost(res.data);
      }
    } catch (error) {
      console.error(`Error has been occurred durning API post: `, error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  console.log(post);

  return <div className="text-white">{/* <Post post={post} /> */}</div>;
};

export default ViewPost;
