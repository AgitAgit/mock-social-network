// Import css
import styles from "./SignIn.module.css";

//Import
import { Link } from "react-router-dom";

// Import Components
import Input from "../Input/Input";
import SubmitBtn from "../SubmitBtn/SubmitBtn";

const SignIn = () => {
  return (
    <div className=" h-screen flex-col content-center">
      <div>
        <div className={styles.header}>
          <h2>Hello Again!</h2>
          <h3>Welcome back</h3>
        </div>
        <div className="flex flex-col gap-4">
          <Input type={"text"} placeholder={"User Name"} />
          <Input type={"password"} placeholder={"PassWord"} />
          <Link to={"/"}>
            <p className="cursor-pointer">Recovery Password</p>
          </Link>

          <SubmitBtn btnPlaceholder={"Sign-In"} />
        </div>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
};

export default SignIn;
