import { useNavigate } from "react-router-dom";

//Import icons
import { IoArrowBackOutline } from "react-icons/io5";

const AccountOptions = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-1 flex w-[100vw] flex-row">
      <button onClick={() => navigate(-1)}>
        <IoArrowBackOutline
          style={{
            position: "absolute",
            top: "5px",
            left: "5px",
            color: "white",
            fontSize: "24px",
          }}
        />
      </button>
      <h1 className="w-full text-center text-white">Setting and activity</h1>
    </div>
  );
};

export default AccountOptions;
