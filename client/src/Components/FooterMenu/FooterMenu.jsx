import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidVideos } from "react-icons/bi";

const iconConfiguration = {
  borderRadius: "0.5em",
  color: "white",
  fontSize: "1.5em",
  minWidth: "auto",
  padding: "0.3em",
  "&.Mui-selected": {
    color: "white",
    background: "#1D2A46",
  },
  "&:hover": {
    background: "#1D2A46",
    borderRadius: "0.5em",
  },
};

const FooterMenu = ({ pageValue }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(pageValue);
  const [open, setOpen] = useState(false);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    if (newValue === "Profile") {
      navigate("/profile");
    }
    if (newValue === "Search") {
      navigate("/search");
    }
    if (newValue === "Home") {
      navigate("/posts-feed");
    }

    if (newValue === "Add Post") {
      navigate("/new-post");
    }
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        background: "black",
        position: "fixed",
        bottom: "0",
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
        icon={<IoSearchSharp />}
      />
      <BottomNavigationAction
        value="Add Post"
        sx={iconConfiguration}
        icon={<IoMdAddCircleOutline />}
      />
      <BottomNavigationAction
        value="Reels"
        sx={iconConfiguration}
        icon={<BiSolidVideos />}
      />
      <BottomNavigationAction
        value="Profile"
        sx={iconConfiguration}
        icon={<FaRegUser />}
      />
    </BottomNavigation>
  );
};
export default FooterMenu;
