// 1. Importar Express
const express = require('express');

// 2. Importar la función sumar desde sum.js
const sumar = require('./sum');

// 3. Crear instancia de la app
const app = express();

// 4. Endpoint de bienvenida
app.get('/', (req, res) => {
  res.send('prueba de que funciona');
});

// 5. Endpoint para sumar dos números
app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Por favor, envía dos números válidos usando ?a=NUM1&b=NUM2');
  }

  const resultado = sumar(a, b);
  res.send(`La suma de ${a} + ${b} es: ${resultado}`);
});

// 6. Levantar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
