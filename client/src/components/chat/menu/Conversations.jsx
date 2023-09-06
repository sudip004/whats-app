import React, { useEffect, useState,useContext } from 'react'
import { getUsers } from '../../../service/api'
import {  Box, styled,Divider } from "@mui/material";
import Conversation from './Conversation';

import { AccountContext } from '../../../context/AccountProvider';

// handle CSS for Scrolling
const Component = styled(Box)`
heiht:81vh;
overflow: overlay;
`
const Styledivider = styled(Divider)`
margin : 0 0 0 70px;
background-color: #e9edef;
opacity:.6;
`
const Conversations = ({text}) => {
  // import state fot store response
  const[users,setusers] = useState([])

    const {account,socket,setActiveUsers} = useContext(AccountContext)

    useEffect(()=>{
        const fetchData = async() => {
            //fetch data here
            let response = await getUsers()
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            setusers(filteredData)
        }
        fetchData()
    },[text])

    useEffect(()=>{
      socket.current.emit('addUsers',account);
      socket.current.on('getUsers',users => {
        setActiveUsers(users)
      })
    },[account])

  return (
    
    <Component>
        {
          users.map((user,i)=>(
            user.sub !== account.sub &&
            <>
            <Conversation user={user} key={i}/>
            <Styledivider/>
            </>
          ))
        }
    </Component>
  )
}

export default Conversations