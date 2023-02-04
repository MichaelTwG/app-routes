const express = require('express');
const User = require('../models/users');

const singup = express.Router();

// singup POST method
singup.post('/', (req, res) => {
    const data = req.body;

    User.getUser("username", data.username, (UserDB) => {
        if (UserDB) {
            res.send({status: false});
            return;
        }
    })

    User.getUser("email", data.email, (UserDB) => {
        if (UserDB) {
            res.send({status: false});
            return;
        }
    })

    newUser = new User(data.username, data.password, data.email);
    newUser.save();

    req.session.isLoggedIn = true;
    req.session.userid = newUser.userid;

    res.send({status: true});

});

module.exports = singup;