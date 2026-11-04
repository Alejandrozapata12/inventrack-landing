import React from 'react';
import '../css/Comparacion.css';
import { 
  FaTimesCircle, 
  FaCheckCircle, 
  FaFileExcel, 
  FaRobot, 
  FaBoxes, 
  FaChartLine, 
  FaBell, 
  FaBolt, 
  FaExclamationTriangle, 
  FaShieldAlt 
} from 'react-icons/fa'

function Comparacion() {
  return (
    <div className="contenedor-comparacion">
      <h2>Transformación Operativa</h2>
      <p className="subtitulo-comparacion">El impacto de evolucionar la gestión de inventario con InvenTrack</p>
      
      <div className="grid-comparacion">
        
        {/* Card: Antes */}
        <div className="tarjeta-comparacion antes">
          <div className="card-header">
            <FaExclamationTriangle className="header-icon antes-icon" />
            <h3>Antes de InvenTrack</h3>
          </div>
          <ul className="lista-puntos">
            <li>
              <FaTimesCircle className="punto-icono negativo" />
              <span>Control manual en hojas de cálculo (riesgo de pérdida de datos)</span>
            </li>
            <li>
              <FaTimesCircle className="punto-icono negativo" />
              <span>Pérdidas económicas recurrentes por falta de stock</span>
            </li>
            <li>
              <FaTimesCircle className="punto-icono negativo" />
              <span>Sin alertas automáticas de reabastecimiento</span>
            </li>
            <li>
              <FaTimesCircle className="punto-icono negativo" />
              <span>Reportes tardíos, desgastantes y elaborados a mano</span>
            </li>
            <li>
              <FaTimesCircle className="punto-icono negativo" />
              <span>Errores humanos frecuentes en entradas y salidas</span>
            </li>
          </ul>
        </div>

        {/* Card: Después */}
        <div className="tarjeta-comparacion despues">
          <div className="card-header">
            <FaBolt className="header-icon despues-icon" />
            <h3>Después de InvenTrack</h3>
          </div>
          <ul className="lista-puntos">
            <li>
              <FaCheckCircle className="punto-icono positivo" />
              <span>Automatización completa y centralizada en la nube</span>
            </li>
            <li>
              <FaCheckCircle className="punto-icono positivo" />
              <span>Stock óptimo en todo momento con análisis predictivo</span>
            </li>
            <li>
              <FaCheckCircle className="punto-icono positivo" />
              <span>Alertas inteligentes en tiempo real vía dashboard</span>
            </li>
            <li>
              <FaCheckCircle className="punto-icono positivo" />
              <span>Reportes instantáneos y métricas visuales con Recharts</span>
            </li>
            <li>
              <FaCheckCircle className="punto-icono positivo" />
              <span>Precisión del 99.9% impulsada por validaciones robustas</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Comparacion