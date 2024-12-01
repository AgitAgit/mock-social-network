import React from 'react'

// Icons Import
import { CgMenuGridO } from "react-icons/cg";

// import Components
import MenuTabs from "./MenuTabs"

const MenuContainer = () => {
  return (
    <div className='flex items-center'>
      <CgMenuGridO/> 
      <h1 className='ml-1'>Menu</h1>
      {/* <MenuTabs/> */}
    </div>
  )
}

export default MenuContainer