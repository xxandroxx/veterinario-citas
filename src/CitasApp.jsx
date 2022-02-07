import React from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';

const CitasApp = () => {
  return (
    <div>
      <Header />

      <div className='contenedor-main'>
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default CitasApp;
