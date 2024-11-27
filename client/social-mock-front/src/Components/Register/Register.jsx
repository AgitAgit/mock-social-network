//Import
import { Link } from "react-router-dom";

// Import Components
import Input from "../SignIn/Input.jsx";
import SubmitBtn from "../SignIn/SubmitBtn.jsx";

const Register = () => {
  return (
    <div className=" h-screen flex-col content-center">
      <div>
        <div className="my-10 flex flex-col items-center w-full">
          <h1 className="text-2xl">Welcome to Babagram!</h1>
          <h3 className="w-1/2">Few more step and your in</h3>
        </div>
        <div className="flex flex-col gap-4">
          <Input type={"text"} placeholder={"Full Name"} />
          <Input type={"text"} placeholder={"Email"} />
          <Input type={"text"} placeholder={"User Name"} />
          <Input type={"password"} placeholder={"PassWord"} />

          <SubmitBtn btnPlaceholder={"Register"} />
        </div>
      </div>
    </div>
  );
};

export default Register;
