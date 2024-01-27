import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Event from "./pages/Event";
import SAC from "./pages/SAC";
import Clubs from "./pages/Clubs";
import Other from "./pages/Other";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div class="m-0 p-0">
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/SAC" element={<SAC />} />
        <Route path="/Clubs" element={<Clubs />} />
        <Route path="/Other" element={<Other />} />
        
      </Routes>
    </div>
  );
}

export default App;
