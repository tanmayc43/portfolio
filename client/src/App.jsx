import { useState, useEffect } from 'react';
import './App.css';
import { Loader } from './components/LoadingScreen';
import { FlickeringGrid } from './components/magicui/flickering-grid';
import { ThemeProvider, useTheme } from './components/theme-provider';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <FlickeringGrid 
        className="fixed inset-0 z-[-1] min-h-screen w-full"
        squareSize={4}
        gridGap={8}
        color={theme === "dark" ? "#ffffff" : "#000000"}
        maxOpacity={0.25}
        flickerChance={0.15}
        key={theme}
      />
      <Header />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
