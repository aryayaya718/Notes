import express from "express";
import { addNote, getAllNotes } from "../controllers/notesControllers.js";
const router = express.Router();
router.get("/", getAllNotes);
router.post("/",addNote);
export default router;
