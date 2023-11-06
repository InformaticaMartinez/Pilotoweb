import React from 'react';
import './Productos.css'; // Importa el archivo CSS de estilos
import './images/Logo.jpg'

function Productos() {
  return (
    <div className="productos-container"> {/* Contenedor para dar estilo */}
      <h2>Nuestros Productos</h2>
      <div className="producto">
        <img src="images/Logo.jpg" alt="Chocolate 1" width={200} />
        <h3>Chocolate Artesanal</h3>
        <p>Delicioso chocolate artesanal con un toque de cacao orgánico.</p>
      </div>
      <div className="producto">
        <img src="images/Logo.jpg" alt="Chocolate 2" width={200}/>
        <h3>Trufas de Chocolate</h3>
        <p>Trufas suaves y cremosas con rellenos variados.</p>
      </div>
      {/* Agrega más productos aquí */}
    </div>
  );
}

export default Productos;