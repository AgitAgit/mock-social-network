import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const divIconStyle =
  "rounded-[100em] cursor-pointer border border-gray-700 bg-[#2c3448] p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-profileSectionTheme";

const divInputStyle =
  "rounded-[100em] border border-gray-700 bg-[#2c3448] p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-profileSectionTheme";

// Import Components
import SubmitBtn from "../../Components/SubmitBtn/SubmitBtn.jsx";

const SignIn = () => {
  const navigate = useNavigate();

  const loginUser = async (userInfo) => {
    try {
      const resLoginData = await axios.post(
        `http://localhost:3000/api/users/login`,
        userInfo,
        { withCredentials: true },
      );

      if (resLoginData) {
        console.log(resLoginData);
        navigate("/posts-feed"); // Navigate after successful login
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    const userInfo = {
      username: formValues.username,
      password: formValues.password,
    };

    console.log(userInfo);
    loginUser(userInfo);
  };

  return (
    <div className="mt-[0.5em] flex flex-col items-center justify-center rounded-[1em] bg-profileSectionTheme p-[2em]">
      <div>
        <div className="my-10 flex w-full flex-col items-center text-center">
          <h1 className="text-2xl">Hello Again!</h1>
          <h3 className="w-1/2">Welcome back you've been missed!</h3>
        </div>
        <div>
          <form
            onSubmit={handleLoginSubmit}
            className="flex flex-col justify-center gap-[0.5em] text-center"
          >
            <input
              type={"text"}
              placeholder={"Username"}
              id="username"
              name="username"
              className={divInputStyle}
            />
            <input
              type={"password"}
              placeholder={"Password"}
              id="password"
              name="password"
              className={divInputStyle}
            />
            <Link to="/">
              <p className="cursor-pointer text-start text-xs text-blue-500 hover:text-white">
                Recovery Password
              </p>
            </Link>
            <SubmitBtn btnPlaceholder="login" />
          </form>
        </div>

        <div className="mb-[1em] mt-[1em] flex flex-row items-center justify-center gap-[1em]">
          <div className={divIconStyle}>
            <FcGoogle className="w-full text-3xl" />
          </div>
          <div className={divIconStyle}>
            <FaFacebook className="w-full text-3xl text-blue-500" />
          </div>
          <div className={divIconStyle}>
            <FaApple className="w-full text-3xl" />
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-evenly">
          <p className="text-center text-xs">Not a member?</p>
          <Link to="/register">
            <span className="cursor-pointer text-xs text-blue-500 hover:text-white">
              Register now
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
