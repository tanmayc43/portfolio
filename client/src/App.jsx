import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FlickeringGrid } from './components/magicui/flickering-grid';
import { ThemeProvider, useTheme } from "@/components/theme-provider"
import Home from './pages/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return(
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <FlickeringGrid 
        className="fixed inset-0 z-[-1] min-h-screen w-full"
        squareSize={4}
        gridGap={8}
        color={theme === "dark" ? "#ffffff" : "#000000"}
        maxOpacity={0.25}
        flickerChance={0.15}
      />
      <Header />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return(
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AppContent />
    </ThemeProvider>
  );
}

export default App
