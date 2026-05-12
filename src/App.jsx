import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Gallery from "./components/gallery"; // tetap pakai gallery (ganti nanti dengan karyamu)
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
