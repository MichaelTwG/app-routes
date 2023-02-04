const { ok } = require('assert');
const { v4:uuidv4} = require('uuid');
const storage = require('../storages/mysql');

class Game {
    constructor(name, propertiesList){
        this.id = uuidv4();
        this.name = name;
        this.propertiesList = propertiesList;
    }

    save() {
        const values = `"${this.id}", "${this.name}", "${JSON.stringify(this.propertiesList)}"`;

        const query = `INSERT INTO users (id, gamename, propertieslist) VALUES (${values});`;

        storage.connection.query(query, (err, res, fields) => {
            if (err) {
                console.log(err);
                return;
            }
        })

    }

    static getGame(campo, value, callback) {
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

module.exports = Game;