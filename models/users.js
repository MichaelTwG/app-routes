const { ok } = require('assert');
const { v4:uuidv4} = require('uuid');
const storage = require('../storages/mysql');

class User {
    constructor(username, password, email){
        this.userid = uuidv4();
        this.creationdate = new Date().toISOString().slice(0, 19);
        this.username = username;
        this.password = password;
        this.email = email;
        this.properties = [];
    }

    save() {
        const values = `"${this.userid}", "${this.creationdate}", "${this.username}", "${this.email}" , "${this.password}"`;

        const query = `INSERT INTO users (id, creationdate, username, email, password) VALUES (${values});`;

        storage.connection.query(query, (err, res, fields) => {
            if (err) {
                console.log(err);
                return;
            }
        })

    }

    saveProperties() {
        const query = `UPDATE users SET properties = ${JSON.stringify(this.properties)} WHERE id = ${this.userid};`;

        storage.connection.query(query, (err, res, fields) => {
            if (err) {
                console.log(err);
                return;
            }
        })
    }

    static getUser(campo, value, callback) {
        const query = `SELECT * FROM users WHERE ${campo} = "${value}"`;

        storage.connection.query(query, (err, res, fields) => {
            if (err) {
                console.log(err);
                return;
            }
            callback(res[0]);
        })
    }
}

module.exports = User;