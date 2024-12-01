//Import
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const divIconStyle =
  "border-solid border-2 w-1/4 h-14 mx-2 flex content-center items-center hover:bg-slate-400";

// Import Components
import SubmitBtn from "./SubmitBtn.jsx";

const SignIn = () => {
  const navigate = useNavigate();

  const loginUser = async (userInfo) => {
    const resLoginData = await axios.post(
      `http://localhost:3000/api/users/login`,
      userInfo,
      { withCredentials: true },
    );

    if (resLoginData) {
      console.log(resLoginData);
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

    loginUser(userInfo);
    navigate("/all-posts");
  };

  return (
    <div className="h-screen flex-col content-center">
      <div>
        <div className="my-10 flex w-full flex-col items-center">
          <h1 className="text-2xl">Hello Again!</h1>
          <h3 className="w-1/2">Welcome back you've been missed!</h3>
        </div>
        <div className="flex flex-col gap-4">
          <form onSubmit={handleLoginSubmit}>
            <input
              type={"text"}
              placeholder={"Username"}
              id="username"
              name="username"
            />
            <input
              type={"password"}
              placeholder={"Password"}
              id="password"
              name="password"
            />
            <Link to={"/"}>
              <p className="cursor-pointer text-xs">Recovery Password</p>
            </Link>
            <SubmitBtn btnPlaceholder={"Sign-In"} />
          </form>
        </div>

        <div className="my-7 flex flex-row justify-center">
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
        <p className="cursor-pointer text-xs">
          Not a member ?
          <Link to={"/register"}>
            <span className="text-blue-500"> Register now</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
