import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
const app = express();
const PORT = 5000;
// database connection
import { connection } from "./Database/db.js";
connection();
// import Router
import router from './routes/route.js'

app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended:true }))
app.use('/',router)


app.listen(PORT, () =>
  console.log(`This app listen on http://localhost:${PORT}`)
);
