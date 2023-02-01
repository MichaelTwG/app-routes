const session = require("express-session");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

// Enpoints imports
const login = require('./endpoints/login');
const singup = require('./endpoints/singup');
const dashboard = require('./endpoints/dashboard');
const recruitment = require('./endpoints/recruitment');
const seekTeam = require('./endpoints/seekTeam');
const preferences = require('./endpoints/preferences');

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
app.use('/dashboard', dashboard);
app.use('/recuitment', recruitment);
app.use('/seek_team', seekTeam);
app.use('/preferences', preferences);


// API start
app.listen(3000, () => {
    console.log("Api started in port 3000");
})