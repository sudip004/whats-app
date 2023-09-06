import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

export const connection = () => {

    const url = process.env.DB_CON

  mongoose
    .connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("successfully"))
    .catch((error) => console.log(error.message));
};
