import React from 'react'
import { FaBoxes, FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import '../css/Footer.css';
function Footer() {
  return (
    <footer className="footer-contenedor" id='footer' data-aos="zoom-in-up">
      <div className="footer-contenido">
        
        {/* Marca y descripción */}
        <div className="footer-info">
          <div className="footer-logo">
            <FaBoxes className="logo-icon" />
            <span>InvenTrack</span>
          </div>
          <p>
            Solución integral y moderna para la gestión eficiente de inventarios en pequeños y medianos negocios.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#tecnologias">Tecnologías</a></li>
            <li><a href="#caracteristicas">Características</a></li>
            <li><a href="#roles">Roles</a></li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="footer-social">
          <h4>Conéctate</h4>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} InvenTrack. Desarrollado por  <span style={{ fontWeight: "bold"}} >AlejoDev</span> para optimizar la logística.
        </p>
      </div>
    </footer>
  )
}

export default Footer