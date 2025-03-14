import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <TopBar />
        {/* Add margin-top in NavBar.css or here via a wrapper */}
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Other routes... */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
