import express from "express";
import dotenv from "dotenv";
import notesRoute from "./routes/notesRoute.js";
import { connectdb } from "./config/db.js";
import cors from"cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());
app.use("/api/notes",notesRoute);
connectdb().then(() => {
  app.listen(PORT, () => {
    console.log("server started sucessfully");
  });
});
