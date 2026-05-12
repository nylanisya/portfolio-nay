import React from "react";

const Navbar = () => {
  const menu = ["About", "Work", "Contact"];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-gray-900"
        >
          nay
        </a>
        <ul className="hidden md:flex gap-8 text-gray-500">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-wide"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
