// Icons Import
import { FaRegBell } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const iconConfiguration = {
  color: "white",

  "&.Mui-selected": {
    color: "white",
    background: "#FFA503",
    borderRadius: "100em",
  },
  "& .MuiBottomNavigationAction-label": {
    fontSize: "0.7em",
  },
};

const MenuTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    if (value === newValue) {
      console.log(newValue);
      setValue(0);
    } else {
      console.log(newValue);
      setValue(newValue);
    }
  };

  return (
    <BottomNavigation
      sx={{
        height: "3em",
        background: "#ffffff0d",
        borderRadius: "100em",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="Home"
        sx={iconConfiguration}
        icon={<FaRegBell />}
      />
      <BottomNavigationAction
        label="Search"
        value="Search"
        sx={iconConfiguration}
        icon={<IoMailUnreadOutline sx={{}} />}
      />
    </BottomNavigation>
  );
};
export default MenuTabs;
