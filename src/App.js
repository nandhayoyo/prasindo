import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Toaster position="bottom-right" reverseOrder={false} />{" "}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
