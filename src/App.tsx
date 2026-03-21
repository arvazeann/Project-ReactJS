import { BrowserRouter, Routes, Route } from "react-router-dom";
import Arva from "./pages/Arva";
import Rohan from './pages/Rohan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/arva" element={<Arva />} />
        <Route path="/rohan" element={<Rohan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;