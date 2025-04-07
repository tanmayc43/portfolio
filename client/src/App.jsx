import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FlickeringGrid from "./components/FlickeringGrid";

function App(){
  return (
    <>
      <FlickeringGrid />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
