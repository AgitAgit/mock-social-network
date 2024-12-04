import MoreVertIcon from "@mui/icons-material/MoreVert";

const styleIcon = {
  transform: "rotate(90deg)",
  cursor: "pointer",
  color: "white",
  borderRadius: "1em",
  padding: "0.1em",
  "&:hover": {
    background: "#2A3751",
  },
};

const PostHeader = ({ postUsername, userProfileImg, postUploadTime }) => {
  return (
    <div className="flex w-full flex-row items-center justify-between">
      <div className="creatorContainer flex w-full flex-row items-center justify-start gap-[0.5em]">
        <img src={userProfileImg} alt="" className="w-[5vw] rounded-[100em]" />
        <p>{postUsername}</p>
        <p className="text-gray-500">{postUploadTime} ago</p>
      </div>
      <div>
        <MoreVertIcon sx={styleIcon} />
      </div>
    </div>
  );
};

export default PostHeader;
