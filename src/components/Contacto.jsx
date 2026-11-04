import React, { useState } from 'react'
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import '../css/Contacto.css';

function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes integrar la lógica de envío (EmailJS, API, etc.)
    setEnviado(true)
    setTimeout(() => setEnviado(false), 5000)
    setForm({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <div className="contenedor-contacto">
      <div className="header-contacto">
        <h2>Contáctanos</h2>
        <p>¿Tienes dudas sobre InvenTrack o necesitas una demo personalizada? Escríbenos.</p>
      </div>

      <div className="contacto-grid">
        {/* Información de contacto */}
        <div className="info-contacto">
          <h3>Hablemos de tu negocio</h3>
          <p>Optimiza el control de tu inventario hoy mismo. Nuestro equipo está listo para ayudarte a escalar.</p>
          
          <ul className="detalles-contacto">
            <li>
              <FaPhoneAlt className="contacto-icon" />
              <span>+57 (300) 000-0000</span>
            </li>
            <li>
              <FaEnvelope className="contacto-icon" />
              <span>soporte@inventrack.com</span>
            </li>
            <li>
              <FaMapMarkerAlt className="contacto-icon" />
              <span>Antioquia, Colombia</span>
            </li>
          </ul>
        </div>

        {/* Formulario */}
        <form className="formulario-contacto" onSubmit={handleSubmit}>
          {enviado && (
            <div className="alerta-exito">
              <FaCheckCircle /> ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
            </div>
          )}

          <div className="grupo-input">
            <label htmlFor="nombre">Nombre completo</label>
            <div className="input-con-icono">
              <FaUser className="input-icon" />
              <input 
                type="text" 
                id="nombre" 
                placeholder="Tu nombre" 
                value={form.nombre}
                onChange={(e) => setForm({...form, nombre: e.target.value})}
                required 
              />
            </div>
          </div>

          <div className="grupo-input">
            <label htmlFor="email">Correo electrónico</label>
            <div className="input-con-icono">
              <FaEnvelope className="input-icon" />
              <input 
                type="email" 
                id="email" 
                placeholder="correo@empresa.com" 
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                required 
              />
            </div>
          </div>

          <div className="grupo-input">
            <label htmlFor="mensaje">Mensaje</label>
            <div className="input-con-icono textarea-wrapper">
              <FaCommentAlt className="input-icon textarea-icon" />
              <textarea 
                id="mensaje" 
                rows="4" 
                placeholder="Cuéntanos sobre tus necesidades de inventario..."
                value={form.mensaje}
                onChange={(e) => setForm({...form, mensaje: e.target.value})}
                required 
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn-enviar">
            <FaPaperPlane /> Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contacto