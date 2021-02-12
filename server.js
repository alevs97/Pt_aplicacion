const express = require('express');
const app = express();
require('dotenv').config();
const hbs = require('hbs');


const port = process.env.PORT;

require(__dirname + '/hbs/helpers');

//midelware
app.use(express.static(__dirname + '/public'));

//Usar como parciales 
hbs.registerPartials(__dirname + '/views/parciales');

//Uso de hbs para renderizar
app.set('view engine', 'hbs');

//Podemos escoger pormedio del primer parametro express
app.get('/', (req, res) => {
    //Denderizar los .hbs
    res.render('home', {
        nombre: 'Alejandro',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    //Denderizar los .hbs
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Esta escuchando en el puesto ${port}`);
})