import axios from "axios"
import { useEffect } from "react";

// import Components
import MenuContainer from "./MenuContainer";
import FooterBar from "./FooterBar";
import Post from "./Post";

const AllPosts = () => {
  const fetchPosts = async () => {
    const allPostsResponse = await axios.get('http://localhost:3000/api/posts/')

    if (allPostsResponse) {
      console.log(allPostsResponse);
    
    }
  }

  //   useEffect(() => {
  //   fetchPosts(); 
  // }, []); 

  return (
    <div><h1>AllPosts</h1>
     <div className="header">
      <MenuContainer/>

     </div>
     <div className="posts-container">
      <Post/>
     </div>
     <div className="footer-bar"></div>
   <FooterBar/>
    </div>
  )
}

export default AllPosts