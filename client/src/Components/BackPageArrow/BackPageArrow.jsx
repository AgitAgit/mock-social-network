import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackPageArrow = ({ top, left }) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button
      className={`absolute top-[${top || 0}px] left-[${left || 0}px] text-white`}
      onClick={handleBackClick}
    >
      <FaArrowLeft size={"20px"} />
    </button>
  );
};

export default BackPageArrow;
