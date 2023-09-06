import {useContext, useEffect, useState} from 'react'
import {Box} from '@mui/material'
import ChatHeader from './ChatHeader'
import Messages from './Messages'

import {AccountContext} from '../../../context/AccountProvider'
// import getconversation from api
import {getConversation} from '../../../service/api'
// This is main load page
const ChatBox = () => {

const {person, account} = useContext(AccountContext);
// create state for recive Id in mongodb
const [conversation , setConversation] = useState({})

useEffect(()=>{
  const getConversationDetails = async ()=> {
   let data = await getConversation({senderId:account.sub, receiverId:person.sub})
   setConversation(data)
  }
  getConversationDetails();
},[person.sub,account.sub])

  return (
    <Box>
        <ChatHeader person={person} />
        <Messages person={person} conversation={conversation} />
    </Box>
  )
}

export default ChatBox