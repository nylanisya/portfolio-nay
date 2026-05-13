import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Certifications", href: "#work" }, // ← nama berubah, href tetap #work
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nama */}
        <a href="#" className="text-xl font-semibold text-gray-800">
          nayla.
        </a>

        {/* Desktop Menu (hidden di mobile) */}
        <ul className="hidden md:flex gap-8 text-gray-600">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-pink-500 transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger (muncul hanya di mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (drop-down) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100"
          >
            <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-4 text-lg hover:text-pink-500 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
