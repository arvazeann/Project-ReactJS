import { Routes, Route } from "react-router-dom";
import Arva from "./pages/arva.tsx";

function App() {
  return (
    <Routes>
      <Route path="/arva" element={<Arva />} />
    </Routes>
  );
}

export default App;