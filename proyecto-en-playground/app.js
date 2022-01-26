const express = require ('express');
const path = require ('path');

const app = express();

const publicPath = path.resolve(__dirname,"./public");
app.use(express.static(publicPath))

app.get ('/', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/home.html'))
})

app.listen(4000, () => {
    console.log('El servidor funca en el puerto 4000');
})

//npm i -D nodemon para instalar nodemon
//npx nodemon app.js   para ejecutar

