const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Permite solicitudes desde cualquier origen
app.use(bodyParser.json()); // Analiza JSON en el cuerpo de la solicitud

// Ruta principal para manejar mensajes
app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  if (message) {
    // Procesar el mensaje recibido (lógica de negocio)
    const reply = `Tu mensaje fue: "${message}". Estoy aquí para ayudarte.`;

    // Responder al cliente
    res.json({ reply });
  } else {
    // Manejo de errores cuando no se envía un mensaje válido
    res.status(400).json({ reply: "Por favor, envía un mensaje válido." });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${3000}`);
});

