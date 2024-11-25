import { Link } from "react-router-dom";
import HomeImage from "/public//Homepage-image.svg";

const Homepage = () => {
  return (
    <div className="max-w-sm rounded-[2.2em] border border-white">
      <img
        src={HomeImage}
        alt="Baba-gram logo image"
        className="rounded-[2em] p-2"
      />
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="mb-[1em] mt-[1.5em] text-center text-2xl font-semibold">
          Discover your <br />
          Dream job Here
        </h1>
        <p className="mb-[3em] w-[17em] text-center">
          Explore all the most exciting job roles based on your interests And
          study major
        </p>
      </div>
      <div className="mb-[2em] flex w-full items-center justify-center gap-2">
        <Link to="/register" className="w-full">
          <button className="w-full translate-x-[15px] rounded-[0.7em] border border-white p-3 hover:bg-white active:bg-white">
            Register
          </button>
        </Link>
        <Link to="/login" className="w-full">
          <button className="w-full translate-x-[-15px] rounded-[0.5em] border border-white p-3 hover:bg-white active:bg-white">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
