import React from 'react';
import '../css/Roles.css';
import { 
  FaUserShield, 
  FaUserTie, 
  FaCheck, 
  FaCogs, 
  FaUsers, 
  FaBoxes, 
  FaBell, 
  FaChartBar, 
  FaClipboardList, 
  FaSearch, 
  FaSlidersH 
} from 'react-icons/fa'

function Roles() {
  return (
    <div className="contenedor-roles" id='roles' data-aos="fade-up">
      <h2>Roles y Permisos del Sistema</h2>
      <p className="subtitulo-roles">Control de acceso seguro adaptado a cada miembro de tu equipo</p>
      
      <div className="grid-roles">
        
        {/* Rol: Administrador */}
        <div className="tarjeta-rol admin">
          <div className="card-header-rol">
            <FaUserShield className="rol-icono admin-icon" />
            <div>
              <h3>Administrador</h3>
              <span className="badge-rol">Control total del sistema</span>
            </div>
          </div>
          <ul className="lista-permisos">
            <li>
              <FaCheck className="check-icon" />
              <span>Gestión completa de usuarios y credenciales</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>Configuración general del sistema y parámetros</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>Acceso ilimitado a todos los módulos y sucursales</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>Generación de reportes avanzados y analítica</span>
            </li>
          </ul>
        </div>

        {/* Rol: Empleado */}
        <div className="tarjeta-rol empleado">
          <div className="card-header-rol">
            <FaUserTie className="rol-icono empleado-icon" />
            <div>
              <h3>Empleado</h3>
              <span className="badge-rol">Gestión operativa diaria</span>
            </div>
          </div>
          <ul className="lista-permisos">
            <li>
              <FaCheck className="check-icon" />
              <span>Registrar entradas y salidas de mercancía</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>Consultar stock e inventario en tiempo real</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>Visualizar alertas básicas de stock mínimo</span>
            </li>
            <li>
              <FaCheck className="check-icon" />
              <span>Reportes operativos limitados al día a día</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Roles