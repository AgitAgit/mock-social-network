import FakeProfileImage from "/images/static-profile-image.svg";

const ProfileImageDisplay = ({ profileImgUrl }) => {
  return (
    <div>
      <img
        // src={FakeProfileImage}
        src={profileImgUrl ? profileImgUrl : FakeProfileImage}
        alt="Profile image"
        className="w-[25vw] rounded-full border-none p-[0.3em]"
      />
    </div>
  );
};

export default ProfileImageDisplay;
