import React, { useState } from 'react';

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [correo, setCorreo] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = e =>{
    e.preventDefault();
  }

  return (
    <div className='contenedor-formulario'>
      <h1>Seguimiento Pacientes</h1>

      <p>Añade pacientes y <span>Adminístralos</span></p>


      <form onSubmit={handleSubmit} className='contenedor-form'>

        <div className='contenido-form'>
          <label htmlFor='nombre-mascota' >Nombre de mascota</label>
          <input type="text" id='nombre-mascota' placeholder='Nombre de la mascota' onChange={e => setNombre(e.target.value)} />
        </div>

        <div className='contenido-form'>
          <label htmlFor='nombre-propietario' >Nombre del propietario</label>
          <input type="text" id='nombre-propietario' placeholder='Nombre del propietario' onChange={e => setPropietario(e.target.value)}  />
        </div>

        <div className='contenido-form'>
          <label htmlFor='email' >Email</label>
          <input type="email" id='email' placeholder='Email' autoComplete='off' onChange={e => setCorreo(e.target.value)}  />
        </div>

        <div className='contenido-form'>
          <label htmlFor='alta' >Alta</label>
          <input type="date" id='alta' onChange={e => setAlta(e.target.value)}  />
        </div>


        <div className='contenido-form'>
          <label htmlFor='text-area' >Descripción</label>
          <textarea id="text-area" cols="30" rows="5" placeholder='Indique los síntomas' onChange={e => setSintomas(e.target.value)} ></textarea>
        </div>

        <input className='btn-enviar' type="submit" value="Agregar Paciente" />

      </form>

    </div>
  );
}

export default Formulario;
