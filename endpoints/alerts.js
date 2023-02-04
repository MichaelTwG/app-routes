const express = require('express');

const alert = express.Router();

// Te muestra una alerta en expecifico
alert.get('/:alertID', (req, res) => {

});

// lee las preferencias del usuario y muestra las que coincidan
alert.get('/', (req, res) => {

});

// Recive una lista de propiedades, y se agrega a la BD
// En un futuro abre un websocket con el front para publicar la alerta en tiempo real
alert.post('/', (req, res) => {

});



module.exports = alert;