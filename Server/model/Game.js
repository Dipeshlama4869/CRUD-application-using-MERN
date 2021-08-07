const mongoose = require("mongoose");


const GameSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: true,
    },
    playedHours: {
        type: Number,
        required: true,
    },
    playerLevel: {
        type: String,
    }
});

const Game = mongoose.model("Game", GameSchema);
module.exports = Game;