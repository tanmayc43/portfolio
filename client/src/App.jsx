import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FlickeringGrid } from './components/magicui/flickering-grid';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <FlickeringGrid className="absolute inset-0 z-[-1] size-full"
        squareSize={4}
        gridGap={8}
        color="#6B7280"
        maxOpacity={0.4}
        flickerChance={0.15}
        h-full
        w-full />
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </div>
    
  );
}

export default App
