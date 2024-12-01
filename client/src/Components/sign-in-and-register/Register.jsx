//Import
import { Link } from "react-router-dom";
import axios from "axios"

// Import Components
import SubmitBtn from "./SubmitBtn.jsx";

const Register = (userInfo) => {

const registerUser = async () => {
  const resRegisterUser = await axios.post(`http://localhost:3000/api/users/signup`,userInfo)

  if (registerUser) {
    console.log(registerUser)
  }
}

const handleSubmit = (e) => {
  e.preventDefault()
  
  const formData = new FormData(e.target);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  
}



  return (
    <div className=" h-screen flex-col content-center">
      <div>
        <div className="my-10 flex flex-col items-center w-full">
          <h1 className="text-2xl">Welcome to Babagram!</h1>
          <h3 className="w-1/2">Few more step and your in</h3>
        </div>
        <div className="flex flex-col gap-4">
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" id="fname" name="fname" />
        <input type="email" placeholder="Email" id="email" name="email" />
        <input type="text" placeholder="User Name" id="username" name="username" />
        <input type="password" placeholder="Password" id="password" name="password" />
        <input type="password" placeholder="Re-enter password" id="confirm-password" name="confirm-password" />
        <SubmitBtn btnPlaceholder="Register" />
      </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
