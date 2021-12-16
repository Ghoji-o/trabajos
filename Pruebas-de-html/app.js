const express = require ('Express');
const app = express();
const path = require ('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen (3040, () => {
    console.log('El servidor funciona correctamente');
});

app.get ('/', (req, res) => {
    res.sendFile (path.resolve (__dirname, './views/links.html'));
});