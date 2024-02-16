import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Event from "./pages/Event";
import SAC from "./pages/SAC";
import Clubs from "./pages/Clubs";
import FAQ from "./pages/FAQ";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div class="m-0 p-0">
      <Navbar />
      <Routes>
        
        <Route path="/MMHS-SAC/" element={<Home />} />
        <Route path="/MMHS-SAC/Event" element={<Event />} />
        <Route path="/MMHS-SAC/SAC" element={<SAC />} />
        <Route path="/MMHS-SAC/Clubs" element={<Clubs />} />
        <Route path="/MMHS-SAC/FAQ" element={<FAQ />} />
        
      </Routes>
    </div>
  );
}

export default App;
