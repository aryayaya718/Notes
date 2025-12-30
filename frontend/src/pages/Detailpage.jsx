import Navbar from "../components/Navbar.jsx";
import { ArrowLeft } from "lucide-react";
import api from "../lib/Axios.js";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
function Detailpage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  async function handleSubmit(event) {
    event.preventDefault();
    if (!title || !content) {
      return;
    }
    try {
      await api.post("/", { title, content });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    async function apiCall() {
      try {
        const res = await api.get(`/${params.id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  return (
    <>
      {" "}
      <Navbar />
      <div className="h-25"></div>
      <div className="min-h-screen px-120 py-10 bg-parchment">
        <div>
          {" "}
          <button className="btn btn-ghost">
            <ArrowLeft />
            Back to Notes{" "}
          </button>
        </div>
        <div className="bg-taupe/30 p-5 rounded-3xl">
          <h3 className="text-2xl font-bold text-espresso">Create A Note</h3>
          <form>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Title</legend>
              <input
                type="text"
                className="input w-full rounded-2xl "
                placeholder="Note Title"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                value={title}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Content</legend>
              <textarea
                className="textarea w-full rounded-2xl"
                placeholder="Write Your Note here..."
                onChange={(event) => {
                  setContent(event.target.value);
                }}
                value={content}
              ></textarea>
            </fieldset>
            <div className="flex justify-end w-full">
              <button
                className="btn mt-3 bg-espresso border-espresso rounded-full text-parchment"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Detailpage;
