import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      HomePage
      <button>
        <Link to="/sign-in">SignIn</Link>
      </button>
      ;
    </div>
  );
};

export default HomePage;
