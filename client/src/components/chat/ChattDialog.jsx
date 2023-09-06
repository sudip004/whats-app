import {useContext} from 'react'

import { Dialog, styled, Box} from "@mui/material";
import Menu from './menu/Menu';
import EmptyChat from './Echat/EmptyChat';
import ChatBox from './Echat/ChatBox';

import {AccountContext} from '../../context/AccountProvider'

const dialogStyled = {
    height: "95%",
    width: "100%",
    margin:"10px",
    maxWidth: "100%",
    boxShadow: "none",
    overflow: "hidden",
  };
// for styling
const Component = styled(Box)`
  display:flex
`
const LeftComponent=styled(Box)`
 min-width:25%
`
const RightComponent=styled(Box)`
 width:73%;
 min-width:300px;
 height:100%;
 border-left: 1px solid rgba(0,0,0,0.14);
 background-color:#efefef
`
const ChattDialog = () => {

const {person} = useContext(AccountContext)



  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyled }} hideBackdrop={true} maxWidth="md">
        {/* I can devide Two part */}
        {/* Parrent Box */}
        <Component>
            {/* Left */}
            <LeftComponent>
                <Menu/>
            </LeftComponent>
            {/* Right */}
            <RightComponent>
               { Object.keys(person).length ? <ChatBox/> : <EmptyChat /> }
            </RightComponent>
        </Component>
    </Dialog>
  )
}

export default ChattDialog