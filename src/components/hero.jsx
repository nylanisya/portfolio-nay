import React from "react";
import { motion } from "framer-motion";
import fotoNaila from "../assets/foto-nayla.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#fffaf8] pt-20"
    >
      <div className="text-center max-w-3xl px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <img
            src={fotoNaila}
            alt="Nayla Anisya Tagore"
            className="w-32 h-32 mx-auto rounded-full object-cover object-[center_30%] shadow-sm border-2 border-pink-200 transition duration-300 hover:scale-105 hover:shadow-md"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 mt-3"
        >
          Hi, I'm <span className="text-pink-500">Nayla Anisya Tagore</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-lg md:text-xl mt-6 max-w-xl mx-auto"
        >
          Information Systems Student | Administration & Tech Enthusiast
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-gray-400 text-base mt-2 max-w-xl mx-auto"
        >
          📍 Pekanbaru, Riau, Indonesia
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.38 }}
          className="text-gray-500 text-sm mt-1 max-w-xl mx-auto"
        >
          💼 Interests: Office Administration & IT Development
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex gap-4 justify-center"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-pink-500 transition"
          >
            View Certifications
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:border-pink-500 hover:text-pink-500 transition"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
