// Importa las dependencias necesarias
const express = require('express');
const mongoose = require('mongoose');

// Crea una instancia de la aplicación Express
const app = express();
const port = process.env.PORT || 3000; // Puerto en el que la aplicación escuchará

// Conecta con la base de datos (en este caso, MongoDB)
mongoose.connect('mongodb://localhost/mi-basededatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define un esquema de ejemplo para MongoDB (puedes personalizarlo)
const tareaSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
});

const Tarea = mongoose.model('Tarea', tareaSchema);

// Configura rutas y controladores (endpoints)
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/tareas', async (req, res) => {
  // Consulta las tareas desde la base de datos y envía la respuesta
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las tareas');
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
