import express from "express";
import dotenv from "dotenv";
import notesRoute from "./routes/notesRoute.js";
import { connectdb } from "./config/db.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log("server started sucessfully");
  });
});
