import { useContext } from "react";

import { Box, styled, Typography } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";

//  Handle CSS
const ImageContainer = styled(Box)`
    display:flex;
    justify-content: center;
`
const Image = styled('img')({
    width:150,
    height:150,
    borderRadius:'50%',
    padding:'25px 0',
    objectFit: 'contain'
})
const BoxWrapper = styled(Box)`
background: #FFFFFF;
padding:12px 30px 2px;
box-shadow:0 1px 3px rgba(0, 0,0, 0.08);
& :first-child {
    font-size:13px;
    color:#009688;
    font-weight:200;
}
&: last-child {
    margin:14px 0;
    color:#4A4A4A;
}
`
const DiscriptionContainer=styled(Box)`
 padding:15px 20px 5px 30px;
 & > p {
    font-size:12px;
    color:#8696a0;
 }
`

const Profile = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name.slice(0,5)}</Typography>
      </BoxWrapper>
      <DiscriptionContainer>
        <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
      </DiscriptionContainer>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>if you are bad i am your Dad</Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;
