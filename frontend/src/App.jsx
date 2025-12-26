import { useState } from "react";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage.jsx";
import Createpage from "./pages/Createpage.jsx";
import Detailpage from "./pages/Detailpage.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/:id" element={<Detailpage />} />
      </Routes>
    </>
  );
}

export default App;
