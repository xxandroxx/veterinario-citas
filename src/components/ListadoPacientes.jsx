import React from 'react';
import Paciente from './Paciente';

const ListadoPacientes = () => {
  return (
    <div className='contenedor-listado'>
      <h2>Listado Pacientes</h2>

      <p>Administra tus <span>Pacientes y Citas</span></p>

    <div className='contenedor-pacientes'>
      <Paciente />
      
    </div>

    </div>
  );
}

export default ListadoPacientes;
