import { Plus } from 'lucide-react';
function Navbar() {
  return <>
  <div className="Navbar bg-espresso h-25 flex items-center justify-between px-20">
    <div className="text-taupe font-Valentino text-5xl">Scribblee</div>
    <div className="" ><button className="btn bg-taupe border-walnut rounded-full"><Plus />Create</button> </div>
  </div>
  </>;
}
export default Navbar;
