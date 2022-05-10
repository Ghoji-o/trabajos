const express = require ('express');
const path = require ('path');
const app = express();


app.set('view Engine', 'ejs');

const publicPath = path.resolve(__dirname,"./public");
app.use(express.static(publicPath))

app.get ('/', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/home.html'))
})

app.get ('/registro', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/registro.html'))
});

app.get ('/login', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/login.html'));
});

app.listen(process.env.PORT|| 3000, () => {
    console.log('servidor corriendo en el puerto 3000');
});

//npm i -D nodemon para instalar nodemon
//npx nodemon app.js   para ejecutar

/*Para el heroku */
const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = process.env.PREFIX;

client.on('ready', () => {
    client.user.setActivity('bot en heroku', {type: 'WATCHING'});
    console.log('Listo!');

});

client.on('message', message => {
    if (message.content.startsWith(prefix+"ping")) {
        let ping = Math.floor(message.client.ws.ping);
        message.channel.send(':ping_pong: `'+ping+' ms.` desde heroku.'); 

    }

});

client.login(process.env.TOKEN); 