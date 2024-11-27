// Import css
import styles from "./SignIn.module.css";

//Import
import { Link } from "react-router-dom";

// Import Components
import Input from "../Input/Input";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import IconButton from "../iconButton";

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
        <div className="flex flex-row justify-center my-10">
          <IconButton />
          <IconButton />
          <IconButton />
        </div>
        <p className="cursor-pointer text-xs ">
          Not a member ?
          <Link to={"/register"}>
            <span className="underline decoration-blue-500">Register now</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
