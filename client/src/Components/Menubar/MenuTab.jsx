import Tab from '@mui/material/Tab';
// Icons Import
import { FaRegBell } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import React from "react"
import { Tabs } from '@mui/material';

const MenuTabs=() => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
};
return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<FaRegBell />} />
      <Tab icon={<IoMailUnreadOutline />}  />
    </Tabs>
  );
}
export default MenuTabs