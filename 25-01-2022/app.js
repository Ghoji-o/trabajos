const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes')
const cookies = require('cookie-parser');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine', 'ejs');

app.use(cookies());

app.use(mainRoutes);

app.listen(3040, () => {
    console.log('Servidor funcionando en 3040');
});