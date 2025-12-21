import Note from "../models/note.js";
export async function getAllNotes(req, res) {
  try{
    const data=await Note.find();
    res.status(200).json(data);
  }
  catch(error){
    res.status(500).json({message:"server error"});
    console.error(error);
  }
}
export async function addNote(req,res){
  try{
    const{title,content}=req.body;
    const newNote=new Note({title,content});
    const savedNote=await newNote.save();
    res.status(201).json(savedNote);

  }
  catch(error){
    res.status(500).json({message:"server error"});
    console.error(error);
  }
}
