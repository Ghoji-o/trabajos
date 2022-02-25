const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const menu = [
        {
            titulo: 'Café',
            detalles: 'Un rico café'
        },
        {
            titulo: 'Chocolate',
            detalles: 'Un rico Chocolate'
        }
    ]

    res.render('index', {menu: menu}); //El res.render tiene dos parámetros el segundo es un objeto que lo podemos usar en htmlt
});

router.get('/detalles', (req, res) => {
    res.render('detalleMenu');
});

router.get('/help', (req, res) => {
    res.render('Bienvenido al sitio de ayuda!');
});

module.exports = router;