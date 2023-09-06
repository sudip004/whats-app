import React from "react";
// import Drawer
import { Drawer,Box,styled,Typography } from "@mui/material";
// Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import component
import Profile from "./Profile";
//  For handle Drawer CSS 
const drawerStyle ={
        left:10,
        top:33,
        height:'90%',
        width:'25%',
        boxShadow:'none',
        borderRadius:1
}

// Info Drawer CSS Style section
const Header = styled(Box)`
    background:#008069;
    height:107px;
    color:#FFFFFF;
    display:flex;
    & > svg, & > p {
        margin-top:auto;
        padding:15px;
        font-weight:700;
    }
`
const Component = styled(Box)`
    background:#ededed;
    height:85%;
`


const InfoDrawer = ({ open, setopen }) => {
  const handleClose = () => {
    setopen(false);
  };
  return (
  <Drawer
   open={open} 
   onClose={handleClose}
   PaperProps={{sx: drawerStyle}}
   style={{zIndex:1500}}
   >
    {/* Top back section */}
    <Header>
        <ArrowBackIcon onClick={()=> setopen(false)}/>
        <Typography>profile</Typography>
    </Header>
    {/* Profile Details section */}
    <Component>
        <Profile/>
    </Component>

  </Drawer>
  )
};

export default InfoDrawer;

