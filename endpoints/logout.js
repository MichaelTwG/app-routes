const express = require('express');

const router = express.Router();

// login GET method
router.get('/', (req, res) => {
    req.session.isLoggedIn = false;
    res.send({status: true});
});

module.exports = router;