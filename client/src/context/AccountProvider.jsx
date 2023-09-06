import {createContext, useState, useRef, useEffect} from 'react';
// For socket Connection
import {io} from "socket.io-client"
export const AccountContext = createContext(null);

const AccountProvider = ({children})=>{

const [account,setaccount] = useState();
const [person, setperson] = useState({});
const  [activeUsers, setActiveUsers] = useState([])
const [newMessageFlag, setMessageFlag] = useState(false);
    const socket = useRef()

    useEffect(()=>{
        socket.current = io('ws://localhost:9000')
    },[])

    return(
        <>
        <AccountContext.Provider value={{
            account,
            setaccount,
            person,
            setperson,
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setMessageFlag
        }}>
            {/*  forword children */}
            {children}
        </AccountContext.Provider>
        </>
    )
}

export default AccountProvider;


