import { Plus } from 'lucide-react';
import { Link } from "react-router";
function Navbar() {
  return <>
  <div className="Navbar bg-espresso h-25 flex items-center justify-between px-20 fixed w-full">
    <div className="text-taupe font-Valentino text-5xl"><Link to="/">Scribblee</Link></div>
    <div className="" ><Link to="/create"><button className="btn bg-taupe border-walnut rounded-full"><Plus />Create</button></Link> </div>
  </div>
  </>;
}
export default Navbar;
