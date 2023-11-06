import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import QuienesSomos from './pages/QuienesSomos';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/" element={<Inicio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;