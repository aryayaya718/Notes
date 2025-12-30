import Navbar from "../components/Navbar.jsx";
import {useEffect, useState } from 'react';
import api from "../lib/Axios.js";
import NoteCard from "../components/NoteCard.jsx";

function Homepage() {
const [notes,setNotes]=useState([]);
const [loading,setLoading]=useState(true); 
useEffect(()=>{
  async function apiCall(){
      const res =await api.get("/");
      setNotes(res.data); 
  }
    apiCall();
}
,[]
);
  return (
    <div>
      <Navbar />
       <div className="bg-parchment min-h-screen">
      <div className="h-25"></div>
      <div className="grid grid-cols-3 gap-6 px-25 py-6">
		{notes.map((note)=>{
			return(<NoteCard title={note.title} content={note.content} date={note.updatedAt} key={note._id} id={note._id} setNotes={setNotes}/>)
		})}
       </div>
     </div>
    </div>
  );
}
export default Homepage;
