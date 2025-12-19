import express from "express";
import { getAllNotes } from "../controllers/notesControllers.js";
const router = express.Router();
router.get("/api/notes", getAllNotes);
export default router;
