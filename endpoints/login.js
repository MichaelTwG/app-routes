const express = require('express');
const User = require('../models/users');

const login = express.Router();

// login POST method
login.post('/', (req, res) => {
    const data = req.body;

    let tabla;
    let campo;

    if (data.username) {
        tabla = "username"
        campo = data.username;
    } else if (data.email) {
        tabla = "email";
        campo = data.email;
    } else {
        res.send({status: false});
        return;
    }

    User.getUser(tabla, campo, (userDB) => {
        if (userDB && userDB.password === data.password) {
            req.session.isLoggedIn = true;
            req.session.userid = userDB.id;
            
            res.send({status: true});
            console.log(userDB);
        } else {
            res.send({status: false});
        }
    });
});

module.exports = login;