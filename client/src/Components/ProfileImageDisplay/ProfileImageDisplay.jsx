import FakeProfileImage from "../../../public/images/static-profile-image.svg";

const ProfileImageDisplay = () => {
  return (
    <div>
      <img
        src={FakeProfileImage}
        alt="Profile image"
        className="w-[25vw] rounded-full border-none p-[0.3em]"
      />
    </div>
  );
};

export default ProfileImageDisplay;
