import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SubmitBtn from "../../Components/SubmitBtn/SubmitBtn.jsx";

const inputStyle =
  "rounded-[100em] border border-gray-700 bg-[#2c3448] p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-profileSectionTheme";

const Register = () => {
  const navigate = useNavigate();

  const registerUser = async (userInfo) => {
    const resRegisterUser = await axios.post(
      `http://localhost:3000/api/users/signup`,
      userInfo,
    );

    if (resRegisterUser) {
      console.log(resRegisterUser);
    }
  };
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
    navigate("/sign-in");
  };

  return (
    <div className="mt-[0.5em] flex flex-col items-center justify-center rounded-[1em] bg-profileSectionTheme p-[2em]">
      <div className="text-center">
        <div className="">
          <h1 className="text-2xl">Welcome to Babagram!</h1>
          <h3 className="">Few more step and your in</h3>
        </div>
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="mt-[0.5em] flex w-full flex-col gap-[0.5em]"
          >
            <input
              type="text"
              placeholder="Full name"
              id="fname"
              name="fname"
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              className={inputStyle}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              className={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className={inputStyle}
            />
            <input
              type="password"
              placeholder="Re-enter password"
              id="confirm-password"
              name="confirm-password"
              className={inputStyle}
            />
            <SubmitBtn btnPlaceholder="Register" />
            <Link to="/" className="">
              <button className="w-full cursor-pointer rounded-[100em] border border-gray-700 bg-[#2c3448] p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-[#eb903b]">
                Back
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
