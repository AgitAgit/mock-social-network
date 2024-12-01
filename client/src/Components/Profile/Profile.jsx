import styles from "./Profile.module.css";
import FakeProfileImage from "../../../public/images/static-profile-image.svg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const styleIcon = { background: "gray", color: "white", borderRadius: "1em" };

const Profile = () => {
  return (
    <div className="p-[1em]">
      <div className="bg-profileSectionTheme font-CaustenFont m-[0.5em] rounded-[2.5em]">
        <div className="ProfileNavigation flex flex-row justify-between p-[1em]">
          <button>
            <KeyboardBackspaceIcon sx={styleIcon} />
          </button>
          <button>
            <MoreVertIcon sx={styleIcon} />
          </button>
        </div>
        <div className="ProfileTopNavbar flex w-full flex-row items-center justify-center">
          <div className="AccountName flex w-full flex-col items-center justify-center">
            <div className="UserImgAndPersonalNameContainer flex w-full flex-row items-center justify-evenly">
              <div className="ImageContainer">
                <img
                  src={FakeProfileImage}
                  alt="Profile image"
                  className="border-profileCircleColor w-[25vw] rounded-full border-[0.2em]"
                />
              </div>
              <div className="UsernameNTagContainer flex flex-col text-start">
                <h2>Alex Smith</h2>
                <h4>@Alex Smith</h4>
              </div>
            </div>
            <div className="ButtonsContainer mt-[1em] flex w-full flex-row items-center justify-evenly">
              <button>Following</button>
              <button>Message</button>
            </div>
            <div className="UserStats justify-round mb-[1em] mt-[1em] flex flex-row items-center gap-[1.5em]">
              <div className="PostsStat">
                <h6>284</h6>
                <h4>Posts</h4>
              </div>
              <div className="FollowersStat">
                <h6>14.6K</h6>
                <h4>Followers</h4>
              </div>
              <div className="Following">
                <h6>389</h6>
                <h4>Following</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="UserGallery flex w-full flex-row gap-[0.5em] text-center">
        <div className="">
          <h2 className="mb-[1em]">
            <strong>Photos</strong>
          </h2>
          <div className="PhotosImgsContainer flex w-full flex-col gap-[0.5em]">
            <img
              src="../../../public/images/static-profile-image-one.svg"
              alt=""
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
