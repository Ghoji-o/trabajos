const express = require('express');

const router = express.Router();
const {body,validationResult} = require('express-validator');

const validator = [
    body('name')
        .notEmpty()
        .withMessage('El nombre esta vacío')
        .isLength(8, 16)
        .withMessage('El nombre debe tener de 8 a 16 caracteres'),
    body('email')
        .notEmpty()
        .isEmail()
        .normalizeEmail()
        .withMessage('El email no es válido'),
    body('age')
        .notEmpty()
        .isInt()
        .withMessage('La edad no es válido'),
    body('color')
        .notEmpty()
        .withMessage('El color no es válido')
];

router.post('/', validator,(req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()){
        console.log(errores);
        const mensajes = errores.errors.map(error => error.msg);
        res.render('form', {errores: mensajes, datos: {}});
    }

    let background = 'white'
    if (req.cookies.color != 'white'){
        background = req.cookies.color
    }

    console.log(req.body);
    if (req.body.remember == 'on'){
         res.cookie('color',req.body.color, {maxAge: 60*60*1000*3});
    }

    res.render('form', {errores: [], datos: req.body, background});
});

router.get('/', (req, res) => {
    let background = 'white'
    if (req.cookies.color != 'white'){
        background = req.cookies.color
    }
    res.render('form', {errores: [], datos: req.body, background})
});

module.exports = router;