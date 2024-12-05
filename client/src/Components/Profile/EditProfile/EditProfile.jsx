import { IoPersonAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const button = e.target.closest("button").className;

    if (button === "Edit profile") {
      navigate("/edit-profile");
    } else {
      shareProfile();
    }
  };

  const shareProfile = () => {
    console.log("Share profile fn");
  };

  return (
    <div
      className="flex w-full flex-row items-center justify-center gap-[0.5em] p-[0.8em]"
      onClick={handleClick}
    >
      <div className="flex flex-row items-center justify-around gap-[0.5em]">
        <div>
          <button className="w-[38vw] cursor-pointer rounded-[0.3em] border border-gray-700 bg-[#2c3448] pb-[0.3em] pl-[0.9em] pr-[0.9em] pt-[0.4em] text-[0.8em] text-white hover:bg-profileSectionTheme">
            Edit profile
          </button>
        </div>
        <div>
          <button className="w-[38vw] cursor-pointer rounded-[0.3em] border border-gray-700 bg-[#2c3448] pb-[0.3em] pl-[0.9em] pr-[0.9em] pt-[0.4em] text-[0.8em] text-white hover:bg-profileSectionTheme">
            Share profile
          </button>
        </div>
      </div>
      <div>
        <button className="cursor-pointer rounded-[0.3em] bg-[#2c3448] p-[0.3em] hover:bg-profileSectionTheme">
          <IoPersonAddOutline />
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
