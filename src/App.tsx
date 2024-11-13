import { Route, Routes } from "react-router-dom";
import "./App.css";
import SelectCV from "./pages/SelectCV/SelectCV.jsx";
import Builder from "./pages/Builder/Builder.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SelectCV />} />
      <Route path="/builder/:templateName" element={<Builder />} />
    </Routes>
  );
}

export default App;
