import React, { useState } from 'react';

const RegistroForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    edad: '',
    direccion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar los datos al backend
    const response = await fetch('http://localhost:3002/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Datos registrados con éxito');
    } else {
      alert('Hubo un error al registrar los datos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Correo:
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Edad:
        <input
          type="number"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Dirección:
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegistroForm;
