const express = require('express');

const router = express.Router();

// login GET method
router.get('/', (req, res) => {
    if (req.session.isLoggedIn === true) {
        req.session.destroy();
    }
});

module.exports = router;