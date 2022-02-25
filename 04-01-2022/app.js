const express = require('express');
const { send } = require('process');

const rutasUsuario = require('./routes/rutasUsuario');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(rutasUsuario);

app.listen('3000', () => console.log('Escucha escucha en el 3000'));