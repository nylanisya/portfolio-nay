import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Gallery from "./components/gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
