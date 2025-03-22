import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import MangThai from './pages/MangThai';
import SauSinh from "./pages/SauSinh";
import DinhDuong from "./pages/DinhDuong";
import ChamCon from "./pages/ChamCon";
import MevaBe from "./pages/MevaBe";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <TopBar /> */}
        {/* Add margin-top in NavBar.css or here via a wrapper */}
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/mang-thai" element={<MangThai />} />
          <Route path="/sau-sinh" element={<SauSinh />} />
          <Route path="/dinh-duong" element={<DinhDuong />} />
          <Route path="/cham-con" element={<ChamCon />} />
          <Route path="/me-va-be" element={<MevaBe />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
