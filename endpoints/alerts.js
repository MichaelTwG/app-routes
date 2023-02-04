const Alert = require("../models/alerts");
const Game = require("../models/games");
const express = require('express');
const alert = express.Router();


// lee las preferencias del usuario y muestra las que coincidan
alert.get('/', (req, res) => {
    const data = req.body.userproperties;

    /*
        Suponiendo que userproperties es :
        [
            {
                gamename: "lolsito",
                properties: {
                    rol: "jungler",
                    rank: "Madera"
                }
            },
            {
                game: "couter",
                properties: {
                    rol: "bot",
                    max-kills: "auto-kill"
                },
            },
        ]
    */

    for (const property of data) {
        Game.getGame("gamename", property.gamename, (DBGame) => {
            Alert.getAlertGameId(DBGame.id, property.properties, (DBAlerts) => {
                console.log(DBAlerts);
            })
        })
    }
});

// Te muestra una alerta en expecifico
alert.get('/:alertID', (req, res) => {

});


// Recive una lista de propiedades, y se agrega a la BD
// En un futuro abre un websocket con el front para publicar la alerta en tiempo real
alert.post('/', (req, res) => {

});



module.exports = alert;