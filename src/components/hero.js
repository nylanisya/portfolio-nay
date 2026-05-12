import { motion } from "framer-motion";
import fotoProfil from "../picts/foto-profil.jpg"; // perhatikan ../ karena naik 1 folder

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="photo-frame"
      >
        <img src={fotoProfil} alt="Nyla Anisya" className="main-photo" />
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="hero-text"
      >
        <span className="badge">Creative Soul • Organized Mind</span>
        <h1>
          Nayla Anisya <span className="highlight">Tagore</span>
        </h1>
        <p>
          Halo! Saya seorang mahasiswa Sistem Informasi yang mencintai dunia
          desain dan keteraturan. Berpengalaman dalam administrasi dan sedang
          mendalami Frontend Development.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
