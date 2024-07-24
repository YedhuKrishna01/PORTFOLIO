import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyWorks" element={<Works />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
