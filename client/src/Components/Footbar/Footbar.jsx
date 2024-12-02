import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

const whiteIconColor = "text-white";

const whiteIconText = {
  "&.Mui-selected": {
    color: "white",
  },
  "& .MuiBottomNavigationAction-label": {
    fontSize: "0.8em",
  },
};

const FooterBar = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        background: "#ffffff0d",
        position: "absolute",
        bottom: "0",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="Home"
        sx={whiteIconText}
        icon={<IoHomeOutline className={whiteIconColor} />}
      />
      <BottomNavigationAction
        label="Search"
        value="Search"
        sx={whiteIconText}
        icon={<IoSearchSharp className={whiteIconColor} />}
      />

      <BottomNavigationAction
        label="Add Post"
        value="Add Post"
        sx={whiteIconText}
        icon={<IoMdAddCircleOutline className={whiteIconColor} />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="Favorites"
        sx={whiteIconText}
        icon={<GrFavorite className={whiteIconColor} />}
      />
      <BottomNavigationAction
        label="Profile"
        value="Profile"
        sx={whiteIconText}
        icon={<FaRegUser className={whiteIconColor} />}
      />
    </BottomNavigation>
  );
};
export default FooterBar;
