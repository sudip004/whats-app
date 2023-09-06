import express from "express"
const router = new express.Router();

import { addUser,getUsers } from "../controller/userController.js";
import { newConversation, getConversation } from '../controller/conversation-controller.js';
import {newMessage, getMessage} from '../controller/message-controller.js'
import {uploadFile,getImage} from "../controller/image-controller.js"

// For middleware call
import upload from '../utils/upload.js'

router.post('/add',addUser)
router.get('/users',getUsers)

router.post('/conversation/add',newConversation)
router.post('/conversation/get',getConversation)

// for save message
router.post('/message/add',newMessage)
// for get message
router.get('/message/get/:id',getMessage)

// for upload file
router.post("/file/upload",upload.single("file"),uploadFile)
// for get upload file
router.get("/file/:filename",getImage)

export default router;