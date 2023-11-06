import React from 'react';
import './Contacto.css'

const Contacto = () => {
  return (
    <div className="contacto-container" >
      <h1>Ponete en contacto con nosotros. No te pierdas la oportunidad de conocer y saborear nuestros exquisitos productos. 
        Escríbenos a través de nuestro correo, formulario o llámenos a nuestros números telefónicos.
      </h1>
      <h2>Contacto</h2>
      <form className="contacto-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="4" />
        </div>
        <button type="submit" className="btn-enviar">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;