import axios from 'axios'


const url ="http://localhost:5000";
export const addUser = async(data) => {
    try {
        await axios.post(`${url}/add`, data)
    } catch (error) {
        console.log("this getapicall error" + error.message);
    }
}

export const getUsers = async()=>{
    try {
        const response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log("Error while calling get user api client side"+error.message);
    }
}

export const setConversation = async(data)=> {
    try {
        await axios.post(`${url}/conversation/add`,data)
    } catch (error) {
        console.log("Error while calling get user set conversation calling side"+error.message);
    }
}

// search messages for basis of senderId and receiverId
export const getConversation = async(data)=>{
    try {
      let response =  await axios.post(`${url}/conversation/get`,data);
      
      return response.data;
    } catch (error) {
        console.log("Error while calling getconversation calling side"+error.message);
    }
}

// For save message in Database
export const newMessage = async (data)=> {
  try {
    await axios.post(`${url}/message/add`,data)
  } catch (error) {
    console.log("newmwssage error on geeting ",error.message);
  }
}

// for get messages
export const getMessages = async (id)=>{
    try {
        
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log("getMessage error on api",error.message);
    }
}

// save file to data base
export const uploadFile = async(data)=>{
    try {
      return  await axios.post(`${url}/file/upload`,data)
    } catch (error) {
      return  console.log("error in frontend upload file fun", error);
    }
}