import Navbar from "../components/Navbar.jsx";
import {useEffect, useState } from 'react';


function Homepage() {
const [notes,setNotes]=useState([]);
const [loading,setLoading]=useState(true); 
useEffect(()=>{
  
},[]
);
  return (
    <div>
      <Navbar />
       <div className="bg-parchment min-h-screen">
      <div className="h-25"></div>
      <div></div>
     </div>
    </div>
  );
}
export default Homepage;
