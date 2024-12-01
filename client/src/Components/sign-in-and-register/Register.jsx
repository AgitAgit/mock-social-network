//Import
import axios from "axios"
import { useNavigate } from "react-router-dom";

// Import Components
import SubmitBtn from "./SubmitBtn.jsx";

const Register = () => {

const navigate = useNavigate();

const registerUser = async (userInfo) => {
  const resRegisterUser = await axios.post(`http://localhost:3000/api/users/signup`,userInfo)

  if (resRegisterUser) {
    console.log(resRegisterUser)
  }
}
const handleSubmit = (e) => {
  e.preventDefault(); 

  const formData = new FormData(e.target);
  const formValues = Object.fromEntries(formData.entries()); 

  const userInfo = {
    email: formValues.email,
    displayName: formValues.fname,
    username: formValues.username,
    password: formValues.password,
  };
  registerUser(userInfo); 
  navigate("/sign-in")
};

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
