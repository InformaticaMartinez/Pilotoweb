import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/productos">Productos</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto">Contacto</Link>
        </li>
        <li className="nav-item">
          <Link to="/carrito">Carrito</Link>
        </li>
        <li className="nav-item">
          <Link to="/quienes-somos">Quienes Somos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;