import Navbar from "../components/Navbar.jsx";
import { useState } from 'react';
function Homepage() {
  const [Name,setName]=useState("Arya");
  setName("Deepanshu");
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


const arr=["j","h"];
const[a,b]=arr;