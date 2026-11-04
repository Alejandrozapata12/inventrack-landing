import React from 'react';
import '../css/Caracteristicas.css';
import { 
  FaChartLine, 
  FaBell, 
  FaFileAlt, 
  FaBarcode, 
  FaHistory, 
  FaMobileAlt, 
  FaShieldAlt, 
  FaNetworkWired 
} from 'react-icons/fa'

function Caracteristicas() {
  const listaCaracteristicas = [
    {
      titulo: "Dashboard en Tiempo Real",
      descripcion: "Visualiza el estado de tu inventario al instante con gráficos interactivos y métricas clave.",
      icono: <FaChartLine />,
      colorClass: "card-dashboard"
    },
    {
      titulo: "Alertas Automáticas",
      descripcion: "Recibe notificaciones inmediatas cuando el stock llegue a niveles críticos para evitar quiebres.",
      icono: <FaBell />,
      colorClass: "card-alertas"
    },
    {
      titulo: "Reportes Personalizados",
      descripcion: "Genera reportes detallados y listos para exportar según las necesidades de tu negocio.",
      icono: <FaFileAlt />,
      colorClass: "card-reportes"
    },
    {
      titulo: "Código de Barras",
      descripcion: "Escanea productos para un registro rápido, ágil y totalmente libre de errores humanos.",
      icono: <FaBarcode />,
      colorClass: "card-barras"
    },
    {
      titulo: "Historial Completo",
      descripcion: "Auditoría transparente de todos los movimientos de entradas y salidas con fecha y usuario.",
      icono: <FaHistory />,
      colorClass: "card-historial"
    },
    {
      titulo: "Multi-Dispositivo",
      descripcion: "Accede desde cualquier lugar y dispositivo: tu ordenador, tablet o teléfono móvil.",
      icono: <FaMobileAlt />,
      colorClass: "card-dispositivo"
    },
    {
      titulo: "Seguridad Avanzada",
      descripcion: "Protección de datos con protocolos robustos y respaldos automáticos periódicos.",
      icono: <FaShieldAlt />,
      colorClass: "card-seguridad"
    },
    {
      titulo: "Integraciones",
      descripcion: "Conecta fácilmente InvenTrack con herramientas y plataformas externas de venta.",
      icono: <FaNetworkWired />,
      colorClass: "card-integraciones"
    }
  ]

  return (
    <div className="contenedor-caracteristicas">
      <div className="header-seccion">
        <h2>Características Principales</h2>
        <p>Todo lo que necesitas para optimizar la logística y control de tu inventario en un solo lugar.</p>
      </div>

      <div className="grid-caracteristicas">
        {listaCaracteristicas.map((item, index) => (
          <div key={index} className={`tarjeta-caracteristica ${item.colorClass}`}>
            <div className="icono-feature">
              {item.icono}
            </div>
            <div className="contenido-feature">
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Caracteristicas;