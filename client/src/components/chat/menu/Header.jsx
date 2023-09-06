import { useContext, useState } from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";

// Icons import
import ChatIcon from "@mui/icons-material/Chat";
import AddCircleIcon from "@mui/icons-material/AddCircle";

// component
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";
// For css styling
const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  aling-items: center;
`;
const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
  }
  & :second-child {
    font-size: 22px;
    margin-right: 8px;
  }
`;
// for Image
const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: 50,
});
const Header = () => {
  const [openDrawer, setopenDrawer] = useState(false);

  const { account } = useContext(AccountContext);

  const toggleDrawer = () => {
    setopenDrawer(true);
  };
  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
        {/* Chat Icon */}
        <Wrapper>
          <AddCircleIcon />
          <ChatIcon />
          <HeaderMenu setopenDrawer={setopenDrawer}/>
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setopen={setopenDrawer} />
    </>
  );
};

export default Header;
