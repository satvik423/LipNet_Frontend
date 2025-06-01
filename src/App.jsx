// App.jsx
import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Layout from "./components/Layout";
import { About } from "./pages/About";
import Home from "./pages/Home";
import Predict from "./pages/Predict";

function App() {
  return (
    <Router>
      {/* The Layout component renders the Navigation bar and an <Outlet /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Index route will render <Home /> at "/" */}
          <Route index element={<Home />} />
          {/* "/about" → <About /> */}
          <Route path="about" element={<About />} />
          {/* "/predict" → <Predict /> */}
          <Route path="predict" element={<Predict />} />
          {/* Redirect any unknown URL back to "/" */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
