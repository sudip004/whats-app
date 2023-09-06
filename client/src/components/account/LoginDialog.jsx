import {useContext} from 'react'

import React from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";

import { GoogleLogin } from "@react-oauth/google";
import {AccountContext} from '../../../src/context/AccountProvider'

// import api data call
import {addUser} from '../../service/api'

import jwt_decode from 'jwt-decode'

const qrCodeImage =
  "https://www.pngmart.com/files/10/Qr-Code-Transparent-Images-PNG.png";
// for dialog stylinging
const dialogStyled = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  boxShadow: "none",
  overFlow: "hidden",
};

const Container = styled(Box)`
  display: flex;
`;
const QrImagestyle = styled(Box)`
  padding-left: 50px;
  margin-top: 60px;
`;
const Contain = styled(Box)`
  padding: 56px 0 56px 56px;
`;
const Title = styled(Typography)`
  font-size: 25px;
  color: #52525252;
  font-weight: 300;
  margin-bottom: 25px;
`;
const StyleList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
  }
`;

const LoginDialog = () => {

    const {setaccount} = useContext(AccountContext)

  const onLoginSuccess = async(res) => {
      const decode = jwt_decode(res.credential);
      setaccount(decode)
      await addUser(decode)
  };
  const onLoginError = (error) => {
      console.log('Login Failed',error);
  };
  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyled }} hideBackdrop={true}>
        <Container>
          <Contain>
            <Title>To use WhatsApp on your computer:</Title>
            <StyleList>
              <ListItem>1. Open Whatsapp on Your Phone</ListItem>
              <ListItem>
                2. Tap Menu : or Setting and select Linked devices
              </ListItem>
              <ListItem>
                3. Point your phone to this screen To capture the code
              </ListItem>
            </StyleList>
          </Contain>
          <Box style={{position:'relative'}}>
          <QrImagestyle>
            <img
              src={qrCodeImage}
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
            <Box style={{ position: "absolute", top: "50%" }}>
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
          </QrImagestyle>
          </Box>
        </Container>
      </Dialog>
    </>
  );
};

export default LoginDialog;
