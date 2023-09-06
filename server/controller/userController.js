
import { user } from "../model/User.js";


export const addUser = async(req,res) => {
       try {
       const exist = await user.findOne({sub: req.body.sub})

       if(exist){
        res.status(200).json({msg: 'user already exist'})
        console.log("user exits");
        return;
       }

       const newUser = new user(req.body);
          await newUser.save();
        res.status(200).json(newUser)

       } catch (error) {
        return res.status(500).json(error.message)
       }
}


export const getUsers = async(req,res) => {
    try {
      let msg=  await user.find({})
        return res.status(200).json(msg)
    } catch (error) {
        return res.ststus(500).json(error.message)
    }
}