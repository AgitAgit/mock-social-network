import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

const iconConfiguration = {
  color: "white",
  "&.Mui-selected": {
    color: "white",
    background: "#FFA503",
    borderRadius: "100em",
  },
  "& .MuiBottomNavigationAction-label": {
    fontSize: "0.8em",
  },
};

const FooterBar = () => {
  const [value, setValue] = React.useState("Home");

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
        borderRadius: "100em",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="Home"
        sx={iconConfiguration}
        icon={<IoHomeOutline />}
      />
      <BottomNavigationAction
        label="Search"
        value="Search"
        sx={iconConfiguration}
        icon={<IoSearchSharp sx={{}} />}
      />

      <BottomNavigationAction
        label="Add Post"
        value="Add Post"
        sx={iconConfiguration}
        icon={<IoMdAddCircleOutline sx={{}} />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="Favorites"
        sx={iconConfiguration}
        icon={<GrFavorite sx={{}} />}
      />
      <BottomNavigationAction
        label="Profile"
        value="Profile"
        sx={iconConfiguration}
        icon={<FaRegUser sx={{}} />}
      />
    </BottomNavigation>
  );
};
export default FooterBar;
