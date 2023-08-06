const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permite el acceso desde cualquier origen (esto puede cambiarse a una lista de dominios permitidos)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos HTTP permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeceras permitidas
  next();
});

// Rutas de la API
app.get('/api/data', (req, res) => {
  const data = {
    message: '¡Hola desde la API!',
  };
  res.json(data);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor de la API en funcionamiento en el puerto ${PORT}`);
});

