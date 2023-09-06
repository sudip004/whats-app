import React, { useState } from 'react'

import {  Box} from "@mui/material";
//components
import Header from './Header'
import Search from './Search';
import Conversations from './Conversations';

const Menu = () => {
// for handel search fun
const [text, setText]=useState('')

  return (
   <Box>
    <Header/>
    <Search setText={setText}/>
    <Conversations text ={text}/>
   </Box>
  )
}

export default Menu