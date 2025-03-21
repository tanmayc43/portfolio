import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FlickeringGrid } from './components/magicui/flickering-grid';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <FlickeringGrid 
        className="fixed inset-0 z-[-1] min-h-screen w-full"
        squareSize={4}
        gridGap={8}
        color="#6B7280"
        maxOpacity={0.4}
        flickerChance={0.15}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
