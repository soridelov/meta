const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configura Express para servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));

// Ruta principal que sirve el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
