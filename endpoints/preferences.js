const express = require('express');

const router = express.Router();

// preferences GET method
router.get('/', (req, res) => {

});


// preferences POST method
router.post('/', (req, res) => {
    const preferences = req.body;
    const user = getUser(req.session.username);  //postponed - this would be data obtained from the data base.
    if (user) {
        setPreferences(req.session.username, preferences); //postponed - this would be to set the data in the data base.
    }
});

module.exports = router;