import React,{useContext} from 'react'
import {Box, styled, Typography} from "@mui/material"

import {Search,MoreVert} from '@mui/icons-material'
import { AccountContext } from '../../../context/AccountProvider'
// import { defaultProfilePicture } from '../../../constants/data'
// Handel CSS 
const Header = styled(Box)`
    height:44px;
    width:100%;
    padding:8px 16px;
    display:flex;
    background:#efefef;
    align-items:center;
`
const Image = styled("img")({
    height:40,
    width:40,
    objectFit:"cover",
    borderRadius:50
})

const Name = styled(Typography)`
margin-left: 12px !important;
`
const Status = styled(Typography)`
margin-left: 12px !important;
font-size: 12px;
color: #9e9e9e!important ;
`
const Rightcontainer =styled(Box)`
    margin-left:auto;
    & > svg {
        padding: 8px;
        font-size: 23px;
        color: #000;
        cursor: pointer;
    }
`

const ChatHeader = ({person}) => {

    const {activeUsers} = useContext(AccountContext)

  return (
    <Header>
        <Image src={person.picture} alt="dp" />
        <Box>
            <Name>{person.name}</Name>
            <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>
        </Box>
        <Rightcontainer>
            <Search/>
            <MoreVert/>
        </Rightcontainer>
    </Header>
  )
}

export default ChatHeader