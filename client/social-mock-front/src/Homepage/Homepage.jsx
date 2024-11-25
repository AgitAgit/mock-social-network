import { Link } from "react-router-dom";
import HomeImage from "/public//Homepage-image.svg";

const Homepage = () => {
  return (
    <div className="max-w-sm rounded-[2.2em] h-[37em]">
      <img
        src={HomeImage}
        alt="Baba-gram logo image"
        className="rounded-[2em] p-2"
      />

      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="font-semibold mb-[1em] text-center">
          Discover your <br />
          Dream job Here
        </h1>
        <p className="font-thin text-center w-[17em] mb-[2em]">
          Explore all the most exciting job roles based on your interests And
          study major
        </p>
      </div>

      <div className="flex items-center justify-center gap-1 text-[0.7em]">
        <Link to="/register">
          <button className="w-[6em] p-2 rounded bg-slate-100 ">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="w-[6em] p-2 rounded bg-slate-100 ">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
