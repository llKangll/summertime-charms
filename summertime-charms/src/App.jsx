import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Inicio</a>
          <a href="/blog">Blog</a>
          <a href="/admin">Admin</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
