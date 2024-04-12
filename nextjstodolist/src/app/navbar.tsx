"use client";
import React, { useState } from "react";
import DarkModeToggle from "./boton"; // Importa el componente

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`bg-${darkMode ? "black" : "white"} bg-opacity-75 p-4 rounded`}
    >
      <ul className="flex justify-between items-center text-lg">
        <li>
          <a
            href="/"
            className={`text-${
              darkMode ? "white" : "gray-800"
            } hover:text-gray-600`}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={`text-${
              darkMode ? "white" : "gray-800"
            } hover:text-gray-600`}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className={`text-${
              darkMode ? "white" : "gray-800"
            } hover:text-gray-600`}
          >
            CONTACT
          </a>
        </li>
        <li>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />{" "}
          {/* Coloca el componente DarkModeToggle aquí */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
