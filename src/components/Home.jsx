import { useState } from 'react';
import '../css/Home.css';
import VerDemo from './VerDemo';
import stock from '../assets/image.png';

function Home() {
   const [active, setActive] = useState(false);

   const handleDemo = () => {
     setActive(true);
     setTimeout(() => {
       setActive(false);
     }, 3000);
   };

   return (
     <div className='home-container' id='home' data-aos="zoom-in-up">
       {/* Columna Izquierda: Imagen */}
       <div className="home-image-container">
         <img src={stock} alt="Inventario-image" className="home-image" />
       </div>

       {/* Columna Derecha: Título, Párrafo y Botones */}
       <div className="home-content">
         <h1 className="title-home">Inventrack</h1>
         <p className="par-home">
           Sistema de Gestión de Inventario Inteligente diseñado para equipos pequeños y medianos. Controla entradas, salidas, alertas y reportes en tiempo real.
         </p>
         
         <div className="home-actions">
           <VerDemo />
           
           <div className="btn-toast-wrapper">
             <button type="button" className='btn-agendar' onClick={handleDemo}>Agendar demo</button>

             {active && (
                 <div className="toast-container is-visible" id="toastContainer" role="status" aria-live="polite">
                   <div className="toast-content">
                     <span className="toast-icon" aria-hidden="true">ℹ️</span>
                     <div className="toast-message">
                       <p className="toast-title">Aviso</p>
                       <p className="toast-text">Aún no se ha proporcionado una ruta para este demo.</p>
                     </div>
                     <button 
                       className="toast-close" 
                       type="button" 
                       aria-label="Cerrar notificación"
                       onClick={() => setActive(false)}
                     >
                       &times;
                     </button>
                   </div>
                 </div>
             )}
           </div>
         </div>
       </div>
     </div>
   );
}

export default Home;