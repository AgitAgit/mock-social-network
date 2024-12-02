import { Link } from "react-router-dom";
import HomeImage from "/public/images/background-image.svg";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className="z-1 mt-[1em] max-w-sm rounded-[2.2em] p-[0.1em]">
      <img
        src={HomeImage}
        alt="Baba-gram logo image"
        className="rounded-[2em] p-2"
      />
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="mb-[1em] mt-[1.5em] text-center text-2xl font-black">
          Do you wear flip-flops daily?
        </h1>
        <p className="mb-[3em] w-[17em] text-center">
          Connect with others who share your love for flip-flops!
        </p>
      </div>
      <div className="mb-[2em] flex w-full items-center justify-center gap-2">
        <Link to="/register" className="">
          <button className="cursor-pointer rounded-[100em] border border-gray-700 bg-[#2c3448] p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-profileSectionTheme">
            Register
          </button>
        </Link>
        <Link to="/sign-in" className="">
          <button className="cursor-pointer rounded-[100em] border border-gray-700 bg-[#2c3448] p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-profileSectionTheme">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
