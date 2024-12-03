import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

const ProfileHeaderNavigation = () => {
  return (
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
  );
};

export default ProfileHeaderNavigation;
