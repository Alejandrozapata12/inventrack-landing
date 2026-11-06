import React from 'react';
import '../css/Tecnologias.css';
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiPrisma, 
  SiPostgresql, 
  SiVercel, 
  SiRender 
} from 'react-icons/si'

function Tecnologias() {
  const stack = [
    { nombre: 'React.js', icono: <SiReact className="icono react" />, color: '#61DAFB' },
    { nombre: 'TypeScript', icono: <SiTypescript className="icono typescript" />, color: '#3178C6' },
    { nombre: 'Node.js', icono: <SiNodedotjs className="icono node" />, color: '#339933' },
    { nombre: 'Express.js', icono: <SiExpress className="icono express" />, color: '#000000' },
    { nombre: 'Prisma', icono: <SiPrisma className="icono prisma" />, color: '#2D3748' },
    { nombre: 'PostgreSQL', icono: <SiPostgresql className="icono postgresql" />, color: '#4169E1' },
    { nombre: 'Vercel', icono: <SiVercel className="icono vercel" />, color: '#000000' },
    { nombre: 'Render', icono: <SiRender className="icono render" />, color: '#46E3B7' },
  ]

  return (
    <div className="contenedor-tecnologias" data-aos="fade-up" id="tecnologias">
      <h2>Tecnologías utilizadas en InvenTrack</h2>
      <div className="grid-tecnologias">
        {stack.map((tech, index) => (
          <div key={index} className="tarjeta-tecnologia">
            <span className="icono-wrapper" style={{ color: tech.color }}>
              {tech.icono}
            </span>
            <p className="nombre-tecnologia">{tech.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tecnologias;