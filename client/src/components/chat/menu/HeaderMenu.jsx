import React, { useState } from "react";

import {styled} from '@mui/material'
// Import menu from mui.com ans menuItems
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// More menu
import MoreVertIcon from "@mui/icons-material/MoreVert";

//  for styling for menuitems text
const MenuItems = styled(MenuItem)`
  font-size:14px;
  padding:10px 60px 5px 24px;
  color:#4A4A4A;
`
const HeaderMenu = ({setopenDrawer}) => {
    const [open, setopen] = useState(null);

    const handleClose = ()=> {
        setopen(null);
    }
    const handleClick = (e)=> {
        setopen(e.currentTarget);
    }
  return (
    <>
      <MoreVertIcon onClick={handleClick}/>
      <Menu
        anchorEl={open}
        // foe just below open use
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchoeE1={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal:'center'
        }}
        //  which side will be open
        transformOrigin={{
            vertical: 'top',
            horizontal:'right'
        }}
      >
        <MenuItems onClick={()=>{handleClose(); setopenDrawer(true)}}>Profile</MenuItems>
      </Menu>
    </>
  );
};

export default HeaderMenu;
