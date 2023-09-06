import { useContext } from "react";
import React from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";

import LoginDialog from "./account/LoginDialog";
import { AccountContext } from "../context/AccountProvider";
import ChattDialog from "./chat/ChattDialog";



// for styled purpose on Box because
// Box is like Div on @mui so
const Component = styled(Box)`
  background: #dcdcdc;
`;
// For override css on appBar
const LoginHeader = styled(AppBar)`
  height: 200px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const Header = styled(AppBar)`
  height: 125px;
  background-color: #00A884;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
console.log(account);
  return (
    <Component>
      {account ? (
        <>
        <Header>
            <Toolbar></Toolbar>
          </Header>

          <ChattDialog/>
        </>
       
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>

          <LoginDialog />
        </>
      )}
    
    </Component>
  );
};

export default Messenger;
