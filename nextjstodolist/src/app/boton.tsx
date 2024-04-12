import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"; // Importa los iconos

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="mt-4 py-2 px-4 bg-gray-800 text-white rounded"
    >
      {darkMode ? (
        <>
          <FontAwesomeIcon icon={faSun} className="mr-2" />
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faMoon} className="mr-2" />
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
