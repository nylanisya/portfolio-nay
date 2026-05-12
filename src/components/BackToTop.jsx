import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 bg-gray-900 text-white w-10 h-10 rounded-full shadow-md hover:bg-pink-500 transition text-sm"
    >
      ↑
    </button>
  );
};

export default BackToTop;
