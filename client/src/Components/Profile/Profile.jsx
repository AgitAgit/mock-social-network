import FakeProfileImage from "../../../public/images/static-profile-image.svg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
// import Loader from "../loader/Loader";

const styleIcon = {
  background: "#2A3751",
  color: "white",
  borderRadius: "1em",
  width: "10vw",
  height: "100%",
  padding: "0.4em",
  "&:hover": {
    backgroundColor: "#050f20",
  },
};

const Profile = () => {
  return (
    <div className="p-[0.5em]">
      <div className="rounded-[2em] bg-profileSectionTheme font-CaustenFont">
        <div className="ProfileNavigation flex flex-row justify-between p-[1em] pt-[2em]">
          <Link to="/all-posts">
            <button>
              <KeyboardBackspaceIcon sx={styleIcon} />
            </button>
          </Link>
          <Link to="/account-options">
            <button>
              <MoreVertIcon sx={styleIcon} />
            </button>
          </Link>
        </div>
        <div className="ProfileTopNavbar flex w-full flex-row items-center justify-center">
          <div className="AccountName flex w-full flex-col items-center">
            <div>
              <div className="UserImgAndPersonalNameContainer flex w-full flex-row items-center justify-start gap-[1em]">
                <div className="ImageContainer rounded-full bg-profileCircleColor p-[0.1em]">
                  <div className="ImageBorderContainer rounded-full bg-profileSectionTheme">
                    <div className="">
                      <img
                        src={FakeProfileImage}
                        alt="Profile image"
                        className="w-[25vw] rounded-full border-none p-[0.3em]"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="UsernameNTagContainer flex flex-col">
                    <h2 className="text-[1.5em]">Alex Smith</h2>
                    <h4 className="cursor-pointer text-[0.8em] text-gray-500 hover:text-white">
                      @alexsmith
                    </h4>
                  </div>
                  <div className="ButtonsContainer flex w-full flex-row items-center justify-center gap-[1em]">
                    <button class="cursor-pointer rounded-[100em] border border-gray-700 bg-[#2c3448] pb-[0.3em] pl-[0.9em] pr-[0.9em] pt-[0.4em] text-[0.8em] text-white hover:bg-profileSectionTheme">
                      Following
                    </button>
                    <button class="cursor-pointer rounded-[100em] border border-gray-700 bg-[#2c3448] pb-[0.3em] pl-[0.9em] pr-[0.9em] pt-[0.4em] text-[0.8em] text-white hover:bg-profileSectionTheme">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="UserStats mb-[1em] mt-[1em] flex w-full flex-row flex-wrap items-center justify-around gap-[1.5em] text-center">
              <div className="PostsStat">
                <h2 className="text-[1.2em]">264</h2>
                <h4 className="text-[0.8em] text-gray-500">Posts</h4>
              </div>
              <div className="FollowersStat">
                <h2 className="text-[1.2em]">14.9k</h2>
                <h4 className="text-[0.8em] text-gray-500">Followers</h4>
              </div>
              <div className="Following">
                <h2 className="text-[1.2em]">378</h2>
                <h4 className="text-[0.8em] text-gray-500">Following</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="UserGallery mb-[2em] mt-[2em] flex w-full flex-row gap-[1em] p-[0.5em] text-center">
        <div className="">
          <h2 className="mb-[1em]">
            <strong>Photos</strong>
          </h2>
          <div className="PhotosImgsContainer flex w-full flex-col gap-[0.5em]">
            <img
              src="../../../public/images/static-profile-image-one.svg"
              alt=""
              className=""
            />
            <img
              src="../../../public/images/static-profile-image-two.svg"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <h2 className="mb-[1em]">
            <strong>Video</strong>
          </h2>
          <div className="VideosImgContainer flex w-full flex-col gap-[0.5em]">
            <img
              src="../../../public/images/static-profile-image-three.svg"
              alt=""
            />
            <img
              src="../../../public/images/static-profile-image-four.svg"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <h2 className="mb-[1em]">
            <strong>Tagged</strong>
          </h2>
          <div className="TaggedImgContainer flex w-full flex-col gap-[0.5em]">
            <img
              src="../../../public/images/static-profile-image-five.svg"
              alt=""
            />
            <img
              src="../../../public/images/static-profile-image-six.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
