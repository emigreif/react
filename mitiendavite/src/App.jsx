import React from 'react'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer message="¡Bienvenido a nuestra tienda!" />
    </div>
  );
};

export default App;