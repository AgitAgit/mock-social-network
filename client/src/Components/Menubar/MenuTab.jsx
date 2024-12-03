import { FaRegBell } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";

const iconConfiguration = {
  color: "white",
  padding: "0.5em",
  minWidth: "auto",
  maxWidth: "auto",
  "&.Mui-selected": {
    color: "white",
    background: "#1D2A46",
    borderRadius: "100em",
  },
  "& .MuiBottomNavigationAction-label": {
    fontSize: "0.7em",
  },
};

const MenuTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    if (value === newValue) {
      setValue(0);
    } else {
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
        label="Notifications"
        value="Notifications"
        sx={iconConfiguration}
        icon={<FaRegBell />}
      />
      <BottomNavigationAction
        label="Messages"
        value="Messages"
        sx={iconConfiguration}
        icon={<IoMailUnreadOutline sx={{}} />}
      />
    </BottomNavigation>
  );
};
export default MenuTabs;
