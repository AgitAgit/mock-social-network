//Import
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
const divIconStyle =
  "border-solid border-2 w-1/4 h-14 mx-2 flex content-center items-center hover:bg-slate-400";

// Import Components
import Input from "./Input.jsx";
import SubmitBtn from "./SubmitBtn.jsx";

const SignIn = () => {
  return (
    <div className=" h-screen flex-col content-center">
      <div>
        <div className="my-10 flex flex-col items-center w-full">
          <h1 className="text-2xl">Hello Again!</h1>
          <h3 className="w-1/2">Welcome back you've been missed!</h3>
        </div>
        <div className="flex flex-col gap-4">
          <Input type={"text"} placeholder={"User Name"} />
          <Input type={"password"} placeholder={"PassWord"} />
          <Link to={"/"}>
            <p className="cursor-pointer text-xs ">Recovery Password</p>
          </Link>

          <SubmitBtn btnPlaceholder={"Sign-In"} />
        </div>
        <div className="flex flex-row justify-center my-7">
          <div className={divIconStyle}>
            <FcGoogle className="text-3xl w-full " />
          </div>
          <div className={divIconStyle}>
            <FaFacebook className="text-3xl w-full text-blue-500" />
          </div>
          <div className={divIconStyle}>
            <FaApple className="text-3xl w-full " />
          </div>
        </div>
        <p className="cursor-pointer text-xs ">
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
