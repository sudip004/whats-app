import React from "react";

import { Box, styled } from "@mui/material";
// Input Base
import {InputBase} from '@mui/material'
// search Icon
import SearchIcon from "@mui/icons-material/Search";

//  CSS styling
const Component = styled(Box)`
    backgroung: #fff;
    height: 45px;
    border-bottom:1px solid #F2F2F2;
    display: flex;
    align-items:center;
`
const Wrapper = styled(Box)`
background-color: #f0f2f5;
position : relative;
margin: 0 13;
width:100%;
border-radius:20px;
`
const Icon = styled(Box)`
position: absolute;
height: 100%;
padding:6px 8px;
color: #919191;
padding-left:20px;
`
const InputField = styled(InputBase)`
width:100%;
padding:16px;
padding-left:65px;
height:15px;
font-size:14px;
`
const Search = ({setText}) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon fontSize="small"/>
        </Icon>
          <InputField placeholder="Search or start new chat"
          onChange={(e)=>setText(e.target.value)}
          />
      </Wrapper>
    </Component>
  );
};

export default Search;