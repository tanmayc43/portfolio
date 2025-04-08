import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FlickeringGrid from "./components/FlickeringGrid";
import About from "./components/About";

function App() {
  return (
    <>
      <FlickeringGrid />
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default App;
