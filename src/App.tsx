import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Task1A from './components/Task1A'
import CatFact from './components/CatFact'
import RandomCatImage from './components/RandomCatImage';
// Import av ikonbibliotek, du kan bruke f.eks. react-icons
import { FaCat, FaKeyboard, FaHome } from 'react-icons/fa';

const App = () => {
  return (  
    <Router>
      <div className="app-container">
        {/* Menyen forblir statisk på toppen */}
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/reverse">
                <FaKeyboard /> Reverse Input
              </Link>
            </li>
            <li>
              <Link to="/cat-image">
                <FaCat /> Random Cat Image
              </Link>
            </li>
            <li>
              <Link to="/cat-fact">
                <FaCat /> Random Cat Fact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Innholdet rendres under menyen */}
        <div className="content">
          <Routes>
            <Route path="/" element={<h1>Welcome to the Cat App! 🐱</h1>} />
            <Route path="/reverse" element={<Task1A />} />
            <Route path="/cat-image" element={<RandomCatImage />} />
            <Route path="/cat-fact" element={<CatFact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App
