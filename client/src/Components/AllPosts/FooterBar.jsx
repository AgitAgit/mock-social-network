import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { IoHomeOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";


const FooterBar=() =>{
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="Home"
        icon={<IoHomeOutline />}
      />
      <BottomNavigationAction
        label="Search"
        value="Search"
        icon={<IoSearchSharp />}
      />
      <BottomNavigationAction
        label="Add Post"
        value="Add Post"
        icon={<IoMdAddCircleOutline />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="Favorites"
        icon={<GrFavorite />}
      />
      <BottomNavigationAction label="Profile" value="Profile" icon={<FaRegUser />} />
    </BottomNavigation>
  );
}
export default FooterBar