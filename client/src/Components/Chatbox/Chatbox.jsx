import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CallIcon from "@mui/icons-material/Call";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Chatbox = () => {
  return (
    <div className="mt-[1em]">
      <div className="flex flex-col items-center text-white">
        <div className="flex flex-row items-center">
          <KeyboardArrowLeftIcon />
          <h1>Group name / private chat</h1>
          <CallIcon />
          <VideoCameraFrontIcon />
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <p>Sent 1h aago</p>
          <CameraAltIcon />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
