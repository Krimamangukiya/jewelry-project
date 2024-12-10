import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componet/Navbar';
import Home from './Componet/Home';
import About from './Componet/About';
import Contact from './Componet/Contact';
import Shop from './Componet/Shop';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;