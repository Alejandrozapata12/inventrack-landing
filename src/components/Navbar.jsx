import React from 'react';
import '../css/Navbar.css';
import VerDemo from './VerDemo';

function Navbar() {
  return (
    <nav className="nab">
      {/* Logotipo o Nombre de la marca a la izquierda */}
      <div className="nav-brand">
        <a href="#" className="brand-logo">Inventrack</a>
      </div>

      {/* Enlaces de navegación a la derecha */}
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Tecnologías</a></li>
        <li><a href="#">Comparación</a></li>
        <li><a href="#">Roles</a></li>
        <li><a href="#">Características</a></li>
        <li><a href="#">Contacto</a></li>
        <li className="nav-item-cta"><VerDemo /></li>
      </ul>
    </nav>
  );
}

export default Navbar;