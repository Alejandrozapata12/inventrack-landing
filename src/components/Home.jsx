import '../css/Home.css';
import VerDemo from './VerDemo';
import stock from '../assets/image.png';

function Home() {
  return (
    <div className='home-container'>
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
           <button type="button" className='btn-agendar'>Agendar demo</button>
         </div>
       </div>
    </div>
  )
}

export default Home;