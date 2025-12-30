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
      console.log(res.data[0])
      setNotes(res.data); 
  }
    apiCall();
    console.log(notes[0]);
}
,[]
);
  return (
    <div>
      <Navbar />
       <div className="bg-parchment min-h-screen">
      <div className="h-25"></div>
      <div className="grid grid-cols-3 gap-6"><NoteCard/></div>
     </div>
    </div>
  );
}
export default Homepage;
