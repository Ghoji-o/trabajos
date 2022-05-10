const express = require('express');

const app = express();

app.listen('3000', (req, res) => {
    console.log('el servidos escucha en el puerto 3000');
});

app.get('/', (req, res) => {
    res.send('estas en el /');
});

app.get('/home', homeMiddleWare, (req, res) => {
    res.send('estas en el /home');
});

app.get('/about', (req, res) => {
    res.send('estas en el /about');
});

//Esto es para el error 404, cuando no se encuentra ninguna página
app.use((req, res) => {
    res.send('404 - Page not found')
});