import React from "react";
import "./Navbar.css"; // Importar los estilos CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="/" className="navbar-link">
            HOME
          </a>
        </li>
        <li>
          <a href="/about" className="navbar-link">
            ABOUT
          </a>
        </li>
        <li>
          <a href="/contact" className="navbar-link">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
