import { Trash2 } from "lucide-react";
import { Link } from "react-router";
import api from "../lib/Axios.js";
function NoteCard(props) {
  async function handleDelete(event) {
    event.preventDefault();
    if(!window.confirm("Are you sure")){return}
    try {
      await api.delete(`/${props.id}`);
      props.setNotes((notes) => notes.filter((n) => n._id !== props.id));
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Link to={`/${props.id}`}>
      <div className="card bg-taupe/30 backdrop-blur-md  border-walnut/70 rounded-3xl hover:shadow-xl border-t-5 transition-all     duration-200 ">
        <div className="card-body">
          <div className="card-title">{props.title}</div>
          <p className="text-black/50 line-clamp-2">{props.content}</p>
          <div className="card-actions justify-between">
            <div className="mt-3 text-black/50"> {props.date}</div>
            <button
              className="btn btn-ghost text-red-900 "
              onClick={handleDelete}
            >
              <Trash2 className="w-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default NoteCard;
