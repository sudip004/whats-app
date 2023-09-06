
import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage'
import dotenv from 'dotenv'
dotenv.config();

const storage = new GridFsStorage({
    url:process.env.DB_CON,
    options:{useUnifiedTopology: true, useNewUrlParser: true },

    file: (req,file) => {
        const match = ["image/png", "image/jpg","image/jpeg"]
        // console.log(match.indexOf(file.mimetype)=== 0);
        if(match.indexOf(file.mimetype)=== 0){
            
            return `${Date.now()}-file-${file.originalname}`
        } 

        return `${Date.now()}-file-${file.originalname}`
    
    }
})


export default multer({storage})