import Message from "../model/Message.js"
import { conversation } from "../model/Conversation.js";
// for save message in database
export const newMessage = async (req,res)=> {
    try {
        const newMessage = new Message(req.body)
        await newMessage.save();
        await conversation.findByIdAndUpdate( req.body.conversationId, { message: req.body.text })

        return res.status(200).json("message saves successfully")
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// for get messages
export const getMessage = async(req,res)=>{
  try {
    
    const Messages = await Message.find({ conversationId: req.params.id })
    // console.log(Messages);
    return res.status(200).json(Messages)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}