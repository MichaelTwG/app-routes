#!/usr/bin/node
const mysql = require("mysql2");

class Storage {
    constructor (connection) {
        this.connection = connection;
    }
};


const connection = mysql.createConnection ({
    host : 'localhost',
    database : 'BattleCall_v0',
    user : 'root',
    password : 'root'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("BASE DE DATOS - Conection Success!");
    };
});

const st = new Storage(connection);

module.exports = st;