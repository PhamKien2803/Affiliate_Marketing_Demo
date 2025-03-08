import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';  
import About from './components/About.jsx';

function App() {
  return (
    <Router>
      <nav 
        style={{ 
          padding: '1rem', 
          backgroundColor: '#f0f0f0', 
          marginBottom: '1rem' 
        }}
      >
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
