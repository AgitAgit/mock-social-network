import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const iconConfiguration = {
  width: "100%",
  color: "white",
  fontSize: "1.4em",
  "&.Mui-selected": {
    color: "white",
    background: "#FFA503",
    borderRadius: "100em",
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
        background: "#ffffff05",
        position: "absolute",
        bottom: "0",
        borderRadius: "100em",
        padding: "0.3em",
      }}
      showLabel={true}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        value="Home"
        showLabel={true}
        sx={iconConfiguration}
        icon={<IoHomeOutline />}
      />
      <BottomNavigationAction
        value="Search"
        sx={iconConfiguration}
        icon={<IoSearchSharp sx={{}} />}
      />
      <BottomNavigationAction
        value="Add Post"
        sx={iconConfiguration}
        icon={<IoMdAddCircleOutline sx={{}} />}
      />
      <BottomNavigationAction
        value="Favorites"
        sx={iconConfiguration}
        icon={<GrFavorite sx={{}} />}
      />
      <BottomNavigationAction
        value="Profile"
        sx={iconConfiguration}
        icon={<FaRegUser sx={{}} />}
      />
    </BottomNavigation>
  );
};
export default FooterBar;
