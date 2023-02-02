const express = require('express');
const User = require('../models/users');

const router = express.Router();

// login POST method
router.post('/', (req, res) => {
    const data = req.body;
    User.getUser("username", data.username, (userDB) => {
        if (userDB && userDB.password === data.password) {
            //data.status is true if the login is successful
            req.session.isLoggedIn = true;
            req.session.userid = userDB.id;
            
            res.send({status: true});
        }
        res.send({status: false});
    });
});

module.exports = router;