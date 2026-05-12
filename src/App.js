import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Bagian Perkenalan */}
        <section id="hero">
          <h1>Hai, Saya Nyla 🚀</h1>
          <p>
            Seorang Junior Web Developer yang sedang belajar React JS. Saya
            senang membangun hal-hal yang bermanfaat di internet.
          </p>
        </section>

        {/* Bagian Proyek */}
        <section id="projects">
          <h2>Proyek Saya</h2>
          <div className="project-card">
            <h3>Website Portofolio Pertama</h3>
            <p>
              Dibuat menggunakan React JS dan di-hosting melalui GitHub Pages.
            </p>
            <small>Teknologi: React, CSS, Git</small>
          </div>
          {/* Kamu bisa tambah project-card lain di sini nanti */}
        </section>

        {/* Bagian Kontak */}
        <section id="contact">
          <h2>Mari Terkoneksi</h2>
          <p>Email: nyla@example.com</p>
          <p>Instagram: @username_kamu</p>
        </section>
      </div>
    </div>
  );
}

export default App;
