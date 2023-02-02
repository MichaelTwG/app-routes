const express = require('express');

const router = express.Router();

// Te muestra una alerta en expecifico
router.get('/:alertID', (req, res) => {

});

// Recive una lista de propiedades, y se agrega a la BD
// En un futuro abre un websocket con el front para publicar la alerta en tiempo real
router.post('/', (req, res) => {

})

module.exports = router;