const express = require('express');
const User = require('../models/users');

const router = express.Router();

// login POST method
router.post('/', (req, res) => {
    const data = req.body;
    const userDB = User.getUser(data.username, data.password);


    if (userDB) {
        //data.status is true if the login is successful
        req.session.isLoggedIn = true;
        req.session.username = req.body.username;
        
        res.send({status: true});
    }
    res.send({status: false});
});

module.exports = router;