// // This was the previus way to start the server

// // Import express as a variable
// const express = require('express');

// // Get a function to start express and assign to app
// const app = express();

// // Definir puerto
// const port = process.env.port || 4000;


// // This app contains a funcion to run express with .listen
// app.listen(port, () => {
//     console.log(`El servidor esta funcionando en el puerto ${port}`)
// });

///////////////////////////////////////////////////////////////////////////////////////////

// The new way to do it

// Import express as a variable
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


// // // Get a function to start express and assign to app
const app = express();


// contectar a la base de datos 
db.authenticate()
    .then(() => console.log('base de datos contectada')) 
    .catch( error => console.log(error));

// // Definir puerto
const port = process.env.port || 4000;

//Habilitar PUG
app.set('view engine', 'pug');


// //Get the current year
app.use((req, res, next) => {
    const year = new Date();

    res.locals.currentYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    return next();
});

//Agregar body parser para leer datos de un formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica
app.use(express.static('public'));

//Add router to app
app.use('/', router);

// // This app contains a funcion to run express with .listen
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});

