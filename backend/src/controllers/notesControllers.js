import Note from "../models/note.js";
export async function getAllNotes(req, res) {
  try {
    const data = await Note.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "server error" });
    console.error(error);
  }
}
export async function addNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: "server error" });
    console.error(error);
  }
}
export async function getOneNote(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).json({ Message: "not found" });
    } else {
      res.status(200).json(note);
    }
  } catch (error) {
    res.status(500).json({ message: "server error" });
    console.error(error);
  }
}
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote) {
      res.status(404).json({ message: "not found" });
    } else {
      res.status(200).json(updatedNote);
    }
  } catch (error) {
    res.status(500).json({ message: "server error" });
    console.error(error);
  }
}
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      res.status(404).json({ message: "not found" });
    } else {
      res.status(200).json(deletedNote);
    }
  } catch (error) {
    res.status(500).json({ message: "server error" });
    console.error(error);
  }
}
