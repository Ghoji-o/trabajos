const express = require('express');
const mainControllers = require('../controllers/mainControllers')
const detallesControllers = require('../controllers/detallesControllers')

const router = express.Router();

router.get('/', mainControllers.devolverIndex );

router.get('/detalles/:id', detallesControllers.detallesPorId );

router.get('/detalles/max/:tope', detallesControllers.detallesMaxPrecio );

module.exports = router;