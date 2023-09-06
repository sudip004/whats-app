import mongoose, { Schema } from 'mongoose'


const UserSchema = new Schema({
    iss:{
        type: String,
    },
    nbf:{
        type: Number,
    },
    aud:{
        type: String,
    },
    sub:{
        type: String,
        require:true,
    },
    email:{
        type: String,
    },
    email_verified:{
        type:Boolean
    },
    azp:{
        type: String,
    },
    name:{
        type: String,
        require:true
    },
    picture:{
        type: String,
    },
    given_name:{
        type: String,
    },
    family_name:{
        type: String,
    },
    iat:{
        type: Number,
    },
    exp:{
        type: Number,
    },
    jti:{
        type: String,
    }

})


export const user = new mongoose.model("Users",UserSchema);

