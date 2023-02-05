const { v4:uuidv4} = require('uuid');
const storage = require('../storages/mysql');

class Game {
    constructor(name, propertieslist){
        this.id = uuidv4();
        this.name = name;
        this.propertieslist = propertieslist;
    }

    save() {
        const values = [this.id, this.name, JSON.stringify(this.propertieslist)];
        const query = 'INSERT INTO games (id, gamename, propertieslist) VALUES (?, ?, ?)';

        storage.connection.query(query, values , (err, res, fields) => {
            if (err) throw err;
            console.log(res);
        });
    }

    static getGame(campo, value, callback) {
        const values = [campo, value];
        const query = 'SELECT * FROM games WHERE ?? = ?';

        storage.connection.query(query, values, (err, res, fields) => {
            if (err) throw err;
            callback(res);
        });
    }
}

module.exports = Game;