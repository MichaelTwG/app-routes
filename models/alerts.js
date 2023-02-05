const { v4:uuidv4} = require('uuid');
const storage = require('../storages/mysql');

class Alert {
    constructor(creatorId, gameId, properties) {
        this.id = uuidv4();
        this.creatorId = creatorId;
        this.gameId = gameId;
        this.properties = properties;
    }

    save() {
        const values = [this.id, this.creatorId, this.gameId, JSON.stringify(this.properties)];
        const query = 'INSERT INTO alerts (id, creatorId, gameId, properties) VALUES (?, ?, ?, ?)';

        storage.connection.query(query, values, (err, res, fields) => {
            if (err) throw err;
        })
    }

    static getAll(callback) {
        const query = 'SELECT * FROM alerts';

        storage.connection.query(query, (err, res, fields) => {
            if (err) throw err;
            callback(res);
        })
    }

    static getAlertId(id, callback) {
        const values = [id];
        const query = `SELECT * FROM alerts WHERE id = ?`;

        storage.connection.query(query, values, (err, res, fields) => {
            if (err) throw err;
            callback(res[0]);
        })
    }

    static getAlertGameId(gameid, properties, callback) {
        const values = [gameid, properties]
        const query = 'SELECT * FROM alerts WHERE gameID = ? AND properties = ?';

        storage.connection.query(query, values, (err, res, fields) => {
            if (err) throw err;
            callback(res);
        })
    }

}

module.exports = Alert;