const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home1')
});

router.get('/h2', (req, res) => {
    res.render('home2');
});

module.exports = router;