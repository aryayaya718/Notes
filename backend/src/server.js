import express from "express";
import dotenv from "dotenv";
import notesRoute from "./routes/notesRoute.js";
import { connectdb } from "./config/db.js";
import path from "path"
import cors from"cors";
const __dirname = path.resolve();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
if(process.env.NODE_ENV!=="production" ){
  app.use(cors());
}

app.use(express.json());
app.use("/api/notes",notesRoute);
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,"../frontend/dist")));

  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
  })
}
connectdb().then(() => {
  app.listen(PORT, () => {
    console.log("server started sucessfully");
  });
});
