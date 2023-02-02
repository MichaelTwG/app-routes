const { v4:uuidv4} = require('uuid');
const storage = require('../storages/mysql');

class User {
    constructor(username, password, email){
        this.userid = uuidv4();
        this.creationdate = new Date().toISOString().slice(0, 19);
        this.username = username;
        this._password = password;
        this.email = email;
        this.properties = [];
    }
    
    get password() {
        return this._password();
    }

    set password(value) {
        this._password = value;
    }

    save() {
        const values = `${this.userid}, ${this.creationdate}, ${this.username}, ${this.email} , ${this.password}`;
        const query = `INSERT INTO users (id, creationdate, username, email, password) VALUES (${values});`;

        storage.query(query, (err, res, fields) => {
            if (err) {
                console.log(err);
                return;
            }
        })

    }

    saveProperties() {
        const query = `UPDATE users SET properties = ${this.properties} WHERE id = ${this.userid};`;

        storage.query(query, (err, res, fields) => {
            if (err) {
                console.log(err);
                return;
            }
        })
    }

    getUser(campo, value) {
        const query = `SELECT users WHERE ${campo} = ${value}`;

        storage.query(query, (err, res, fields) => {
            if (err) {
                console.log(err);
                return;
            }
        })
    }
}

module.exports = User;