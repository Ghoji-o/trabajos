const express = require ("express");
const app = express;

app.listen(3000, () => console.log('El servidor esta en el puerto 3k'));

app.get ('/', (req, res) => {
    res.send('Hice kkck')
})