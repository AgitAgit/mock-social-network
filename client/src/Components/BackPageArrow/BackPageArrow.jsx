import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackPageArrow = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button
      className={`absolute left-[25px] top-[35px] text-white`}
      onClick={handleBackClick}
    >
      <FaArrowLeft size={"20px"} />
    </button>
  );
};

export default BackPageArrow;
