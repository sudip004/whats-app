import mongoose from "mongoose"
import grid from "gridfs-stream"

let gfs,gridFsBucket;
const conn = mongoose.connection;
conn.once('open',()=>{
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    })
    gfs = grid(conn.db,mongoose.mongo);
    
    gfs.collection('fs')
    
})

const url = "http://localhost:5000"
// for upload file in data base 
export const uploadFile = async(req,res) => {
        try {
            if(!req.file){
                return res.status(404).json('File not Found')
            }
            // console.log(req.file);
            const imageUrl = `${url}/file/${req.file.filename}`
            console.log(imageUrl);
            return res.status(200).send(imageUrl)
        } catch (error) {
           return res.status(500).json(error.message)
        }
}

// for get uplod file
export const getImage = async(req,res)=>{
    try {
        const file = await gfs.files.findOne({filename: req.params.filename})

        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(res)
    } catch (error) {
        res.status(500).json(error.message) 
    }
}