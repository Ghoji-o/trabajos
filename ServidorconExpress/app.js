const express = require('express');
const app = express();
const path = require ('path');

app.use (express.static('DH-Heroes/public'))//Indica de donde va a sacar nuestros archivos estáticos, va a poder usar los archis html y css

//Ruta principal - Home
app.get('/', (req, res) => {
    res.sendFile (path.resolve (__dirname, './DH-Heroes/views/index.html'));
});

app.get('/babbage', (req, res) => {
    res.sendFile (path.resolve (__dirname, './DH-Heroes/views/babbage.html'))
});

app.get('/berners-lee', (req, res) => {
    res.sendFile (path.resolve (__dirname, './DH-Heroes/views/berners-lee.html'));
});

app.get('/clarke', (req, res) => {
    res.sendFile (path.resolve(__dirname, './DH-Heroes/views/clarke.html'));
});

app.get('/hamilton', (req, res) => {
    res.sendFile (path.resolve(__dirname, './DH-Heroes/views/hamilton.html'));
});

app.get('/hopper', (req, res) => {
    res.sendFile (path.resolve(__dirname, './DH-Heroes/views/hopper.html'));
});

app.get('/lovelace', (req, res) => {
    res.sendFile (path.resolve(__dirname, './DH-Heroes/views/lovelace.html'));
});

app.get('/turing', (req, res) => {
    res.sendFile (path.resolve(__dirname, './DH-Heroes/views/turing.html'));
});

app.listen(3030, ()=> {
    console.log('El servidor funciona');
});

