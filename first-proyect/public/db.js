const mongoose = require("mongoose");

// URL de conexión (asegúrate de cambiar los valores según tu configuración)
const uri = "mongodb://127.0.0.1:27017/inicio_sesión"; 


// Opciones adicionales (opcional pero recomendado)
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Conexión a la base de datos
mongoose
  .connect(uri, options)
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

module.exports = mongoose;
