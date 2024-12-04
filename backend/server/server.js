const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Configuración del servidor y conexión a MongoDB
const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URI = 'mongodb://127.0.0.1:27017/inicio_sesión/usuarios';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json());

// Esquema de Usuario
const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  edad: Number,
  direccion: String,
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

// Ruta para recibir datos del formulario
app.post('/api/usuarios', async (req, res) => {
  try {
    const { nombre, correo, edad, direccion } = req.body;
    
    const nuevoUsuario = new Usuario({
      nombre,
      correo,
      edad,
      direccion,
    });

    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(400).json({ error: 'Hubo un error al registrar al usuario' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
