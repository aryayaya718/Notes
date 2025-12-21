import express from "express";
import {
  addNote,
  getAllNotes,
  getOneNote,
  updateNote,
  deleteNote,
} from "../controllers/notesControllers.js";
const router = express.Router();
router.get("/", getAllNotes);
router.get("/:id", getOneNote);
router.post("/", addNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
export default router;
