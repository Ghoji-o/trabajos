const express = require('express');
const req = require('express/lib/request');
const app = express();
const path = require ('path');

app.listen (1000, () => console.log ('servidor funciona en el puerto 1000'));

app.use( express.static (path.resolve (__dirname, './public')));

app.get ('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/mercadoLiebre.html'));
});