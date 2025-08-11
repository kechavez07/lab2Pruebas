const express = require('express');
const app = express();
const port = process.env.PORT;

//endpoint
app.get('/', (req, res) => {
    res.send('Integracion continua funcionando');
});

//desplegar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});



