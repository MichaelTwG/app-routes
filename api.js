const { v4: uuidv4 } = require("uuid");
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();

const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

// Enpoints imports
const login = require('./endpoints/login');
const singup = require('./endpoints/singup');
const logout = require('./endpoints/logout');
const alerts = require('./endpoints/alerts');
const join = require('./endpoints/join');
const reacent = require('./endpoints/reacent');
const search = require('./endpoints/search');
const users = require('./endpoints/users');



app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: "*"}));

// Session settings
app.use(session(
    {
        secret: uuidv4(),
        cookie: { maxAge: 60000 },
        resave: true,
        saveUninitialized: false
    }));


//Chek if the user is loged or not
// app.use((req, res, next) => {

//     if (!req.session.isLoggedIn) {
//       return res.redirect("/login");
//     }
//     next();
// });


// Endpoints
app.use('/login', login);
app.use('/singup', singup);
app.use('/logout', logout);
app.use('/reacent', reacent);
app.use('/join', join);
app.use('/search', search);
app.use('/alerts', alerts);
app.use('/users', users);

//io.socket

io.on("connection", (socket) => {
    console.log("New Client Connected");
});

// API start
httpServer.listen(3000, () => {
    console.log("Api started in port 3000");
})