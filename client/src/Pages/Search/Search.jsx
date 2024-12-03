import styles from './Search.module.css';
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import { useState, useEffect } from 'react';
import FooterBar from "../../Components/FooterMenu/FooterMenu.jsx";

const Search = () => {
  const [posts, setPosts] = useState(null);

  async function fetchData(){
    const data = await axios.get('http://localhost:3000/api/posts', { withCredentials:true });
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <>
      <div className="relative mt-[0.5em] h-[2em] w-full">
        <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 transform text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="h-full w-full rounded-[0.2em] bg-slate-700 pl-10 text-white placeholder-gray-500 focus:outline-black"
          />
      </div>
      <div>

      </div>
      <FooterBar />
    </>
  );
};

export default Search;
