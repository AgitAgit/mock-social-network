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
      const { data } = await axios.get(
        `http://localhost:3000/api/posts/${postId}`,
        {
          withCredentials: true,
        },
      );

<<<<<<< HEAD
      if (data) {
        setPost(data);
=======
      if (res.data) {

        setPost(res.data.post);
>>>>>>> 0635d03c94e06395d5bb665cb2e089bda8ba3386
      }
    } catch (error) {
      console.error(`Error has been occurred durning API post: `, error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  console.log(post);

  return (
    <div className="text-white">
      <Post post={post} />
    </div>
  );
};

export default ViewPost;
