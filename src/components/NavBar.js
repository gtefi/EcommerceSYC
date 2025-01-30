import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">SYC</div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/faq">Preguntas Frecuentes</Link>
        <Link to="/contact">Contacto</Link>
      </div>
      <div className="cart-icon">
        🛒 <span>(0)</span>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
};

export default NavBar;
