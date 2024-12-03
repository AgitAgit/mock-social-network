import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const styleIcon = {
  color: "white",
  borderRadius: "1em",
  width: "10vw",
  fontSize: "0.5em",
  height: "100%",
  padding: "0.4em",
  transform: "scaleX(-1)",
  "&:hover": {
    backgroundColor: "#050f20",
  },
};

const ProfileHeaderNavigation = () => {
  return (
    <div className="ProfileNavigation flex flex-row justify-between p-[1em]">
      <Link to="/all-posts">
        <button>
          <ArrowForwardIcon sx={styleIcon} />
        </button>
      </Link>
      <Link to="/account-options">
        <button>
          <MoreVertIcon sx={styleIcon} />
        </button>
      </Link>
    </div>
  );
};

export default ProfileHeaderNavigation;
