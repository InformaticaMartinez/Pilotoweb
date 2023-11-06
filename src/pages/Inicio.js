import React from 'react';
import './Inicio.css'
import './images/Logo.jpg'

const Inicio = () => {
  return (
    <div className="inicio-container">
      <img
        src="/images/Logo.jpg"
        alt="Chocolatería"
        className="inicio-image"
       
      />
      <h1 className="inicio-title">¡Bienvenido!</h1>
      <p className="inicio-text">
        Descubre los mejores chocolates artesanales y deliciosos productos
        de repostería. Somos una empresa familiar con más de 10 años de
        experiencia en el mercado.
      </p>
    </div>
  );
};

export default Inicio;