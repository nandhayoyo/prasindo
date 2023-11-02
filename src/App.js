import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Hero from "./component/Hero";
// import Navbar from "./component/Navbar";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
