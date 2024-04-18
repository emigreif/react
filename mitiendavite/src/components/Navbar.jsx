import React from 'react';

import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div>Logo de tu tienda</div>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;