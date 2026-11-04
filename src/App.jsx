import Navbar from './components/Navbar';
import Home from './components/Home';
import Tecnologias from './components/Tecnologias';
import Comparacion from './components/Comparacion';

import './App.css';
import Roles from './components/Roles';
import Caracteristicas from './components/Caracteristicas';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  

  return (
    <div className="container">
      <Navbar />
      <Home />
      <Tecnologias />
      <Comparacion />
      <Roles />
      <Caracteristicas />  
      <Contacto />
      <Footer />  
    </div>
  )
}

export default App
