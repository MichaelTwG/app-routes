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
        const values = [this.userid, this.creationdate, this.username, this.email, this.password];

        const query = 'INSERT INTO users (id, creationdate, username, email, password) VALUES (?, ?, ?, ?, ?)';

        storage.connection.query(query, values, (err, res, fields) => {
            if (err) throw err;
        })

    }

    saveProperties() {
        const values = [JSON.stringify(this.properties), this.userid]
        const query = `UPDATE users SET properties = ? WHERE id = ?;`;

        storage.connection.query(query, values, (err, res, fields) => {
            if (err) throw err;
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

// const newUser = new User("User", "User", "UserEmail");
// newUser.save()

// const properties = [
//     {
//         game: "Game1",
//         properties: {
//             rol: "top",
//             rank: "hierro"
//         }
//     },
//     {
//         game: "Game2",
//         properties: {
//             rol: "sup",
//             rank: "bronce"
//         }
//     }
// ]

// newUser.properties = properties;
// newUser.saveProperties();