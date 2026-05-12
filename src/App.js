import Navbar from "./components/navbar";
import Hero from "./components/hero";
import "./App.css";

function App() {
  return (
    <div className="creative-app">
      {/* Background Decor */}
      <div className="floating-shapes">
        <div className="shape circle"></div>
        <div className="shape heart">❤</div>
      </div>

      <Navbar />

      <main className="content-wrapper">
        <Hero />

        {/* Kamu bisa tambah Projects.js di sini nanti kalau sudah siap */}

        <footer className="footer-girly">
          <h3>Let's work together! 🌸</h3>
          <p>naylaanisya12@gmail.com</p>
          <div className="footer-links">
            <a href="https://github.com/nylanisya">GitHub</a>
            <span>•</span>
            <a href="https://instagram.com/nyla_anisya">Instagram</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
