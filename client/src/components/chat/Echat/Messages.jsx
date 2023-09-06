import React, { useContext, useState, useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";
// import client service api
import { newMessage, getMessages } from "../../../service/api";
// import context file
import { AccountContext } from "../../../context/AccountProvider";
// import component
import Footer from "./Footer";
import Message from "./Message";

// handel CSS
const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;
const Component = styled(Box)`
  height: 74vh;
  overflow-y: scroll;
`;
const Container = styled(Box)`
  padding: 1px 88px;
`;

const Messages = ({ person, conversation }) => {
  // define state for input field
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState();
  const [image, setImage] = useState('')
  const [incomingMessage, setIncomingMessage] = useState(null)
  // context
  const { account,socket,setMessageFlag,newMessageFlag } = useContext(AccountContext);

  const scrollRef = useRef()

  // For getMessage
useEffect(()=>{
    socket.current.on('getMessage',data =>{
      setIncomingMessage({
        ...data,
        createdAt: Date.now()
      })
    })
    console.log("hellllllllllllll");
},[])

  useEffect(() => {
    const getMessageDeatails = async () => {
      let data = await getMessages(conversation._id);
      console.log(data);
      setMessages(data);
     
    };
    conversation._id && getMessageDeatails();
  }, [conversation._id, newMessageFlag,person._id]);
// For Scrollbar awalwas low
useEffect(()=>{
  scrollRef.current?.scrollIntoView({transition: 'smooth'})
},[messages])

useEffect(()=>{
  incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
  setMessages(prev => [...prev, incomingMessage])
},[incomingMessage,conversation])
  // create function for call any enter key to
  //send message
  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message={};
      if(!file){
         message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      }else{
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }
      
      socket.current.emit('sendMessage', message)

      // call api to save Massage in Database
      await newMessage(message);

      // Clear input Field
      setValue('');
      setFile('')
      setImage('')
      setMessageFlag((prev) => !prev);
    }
  };
  return (
    <>
      <Wrapper>
        <Component>
          {messages &&
            messages.map((message) => (
              <Container ref={scrollRef}>
                <Message message={message} />
              </Container>
            ))}
        </Component>
        <Footer 
        sendText={sendText} 
        setValue={setValue}
         value={value} 
         file={file}
         setFile={setFile}
         setImage={setImage}
         />
      </Wrapper>
    </>
  );
};

export default Messages;
