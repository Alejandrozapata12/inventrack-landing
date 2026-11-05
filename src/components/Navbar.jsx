import React, { useState } from 'react';
import '../css/Navbar.css';
import VerDemo from './VerDemo';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nab" data-aos="zoom-in">
      {/* Logotipo o Nombre de la marca a la izquierda */}
      <div className="nav-brand">
        <a href="#home" className="brand-logo" onClick={closeMenu}>InvenTrack</a>
      </div>

      {/* Botón Hamburguesa para Móvil */}
      <div className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
 
      {/* Enlaces de navegación */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#tecnologias" onClick={closeMenu}>Tecnologías</a></li>
        <li><a href="#comparacion" onClick={closeMenu}>Comparación</a></li>
        <li><a href="#roles" onClick={closeMenu}>Roles</a></li>
        <li><a href="#caracteristicas" onClick={closeMenu}>Características</a></li>
        <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
        <li className="nav-item-cta" onClick={closeMenu}><VerDemo /></li>
      </ul>
    </nav>
  );
}

export default Navbar;