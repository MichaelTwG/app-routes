const express = require('express');
const checklogin = require('../functions/checkLogin');

const router = express.Router();

// login GET method
router.get('/', (req, res) => {

});


// login POST method
router.post('/', (req, res) => {
    // ckeck login is a function that returns a "dictionary"
    const data = checklogin(req.body);

    if (data.status) {
        //data.status is true if the login is successful
        req.session.isLoggedIn = true;
        req.session.username = req.body.username;
    }
    // data is sent, as it has information on whether or not 
    //the request has been successful and the reasons for it
    res.send(data);
});

module.exports = router;