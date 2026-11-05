import React, { useEffect } from 'react'; 

import Navbar from './components/Navbar';
import Home from './components/Home';
import Tecnologias from './components/Tecnologias';
import Comparacion from './components/Comparacion';

import './App.css';
import Roles from './components/Roles';
import Caracteristicas from './components/Caracteristicas';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

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
