import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-slate-500 max-w-sm">
      <div>
        <img src="" alt="" />
      </div>
      <h1>Discover your Dream job Here</h1>
      <p>
        Explore all the most exciting job roles based on your interests and
        study major
      </p>

      <div className="flex gap-5">
        <Link to="/register">
          <button className="w-20 p-2 rounded bg-slate-100">Register</button>
        </Link>
        <Link to="/login">
          <button className="w-20 p-2 rounded bg-slate-100 ">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
