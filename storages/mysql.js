#!/usr/bin/node
const mysql = require("mysql");

class Storage {
    constructor (connection) {
        this.connection = connection;
    }
};


const connection = mysql.createConnection ({
    host : 'localhost',
    database : 'BattleCall_v0.1',
    user : 'root',
    password : 'root'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Conection Success! \n");
    };
});

st = new Storage(connection);

module.exports = st;