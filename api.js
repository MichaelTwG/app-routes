const session = require("express-session");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require('cors');

// Enpoints imports
const login = require('./endpoints/login');
const singup = require('./endpoints/singup');
const logout = require('./endpoints/logout');
const alerts = require('./endpoints/alerts');
const join = require('./endpoints/join');
const reacent = require('./endpoints/reacent');
const search = require('./endpoints/search');
const users = require('./endpoints/users');


const app = express();

// Session settings
app.use(session(
    {
        secret: uuidv4(),
        cookie: { maxAge: 60000 },
        resave: true,
        saveUninitialized: false
    }));


//Chek if the user is loged or not
app.use((req, res, next) => {

    if (!req.session.isLoggedIn) {
      return res.redirect("/login");
    }
    res.redirect("/dashboard");
});


// Endpoints
app.use('/login', login);
app.use('/singup', singup);
app.use('/logout', logout);
app.use('/reacent', reacent);
app.use('/join', join);
app.use('/search', search);
app.use('/alerts', alerts);
app.use('/users', users);

//allow cros
app.use(cors({origin: "*"}));

// API start
app.listen(3000, () => {
    console.log("Api started in port 3000");
})