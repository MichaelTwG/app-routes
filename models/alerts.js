const { ok } = require('assert');
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
        const values = `"${this.id}", "${this.creatorId}", "${this.gameId}", "${JSON.stringify(this.properties)}"`;
        const query = `INSERT INTO alerts (id, creatorId, gameId, properties) VALUES (${values})`;

        storage.connection.query(query, (err, res, fields) => {
            if (err) {
                console.log(err);
                return;
            }
        })
    }

}