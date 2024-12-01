import axios from "axios"
import { useEffect } from "react";
const AllPosts = () => {
  const fetchPosts = async () => {
    const allPostsResponse = await axios.get('http://localhost:3000/api/posts/')

    if (allPostsResponse) {
      console.log(allPostsResponse);
    }
  }

    useEffect(() => {
    fetchPosts(); 
  }, []); 

  return (
    <div><h1>AllPosts</h1></div>
  )
}

export default AllPosts