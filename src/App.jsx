import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Predict from "./components/Predict.jsx";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> |<Link to="/about">About</Link> |
          <Link to="/predict">Predict</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/predict" element={<Predict />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
