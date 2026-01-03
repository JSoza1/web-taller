

import useScrollReveal from './hooks/useScrollReveal';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Servicios from './components/Servicios/Servicios';
import SobreMi from './components/SobreMi/SobreMi';
import Clientes from './components/Clientes/Clientes';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import { serviciosData, clientesData } from './data/datosFalsos';
// import './App.css' // Eliminamos estilos específicos de App por ahora

function App() {
  // Inicializamos el efecto de scroll
  useScrollReveal();

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Servicios servicios={serviciosData} />
        <SobreMi />
        <Clientes clientes={clientesData} />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
