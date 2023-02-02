const express = require('express');

const router = express.Router();

// singup POST method
// Chequea si usuario o el email estar registrados, si no envia status: false, de lo contrario crea el usuario en la BD y envia status:true
router.post('/', (req, res) => {

});

module.exports = router;