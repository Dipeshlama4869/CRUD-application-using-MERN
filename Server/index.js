const express = require("express");
const mongoose = require("mongoose");
const app = express();


const GameModel = require('./model/Game');

app.use(express.json());

mongoose.connect("mongodb+srv://Dipesh:mikasaeren@crud.37pt9.mongodb.net/game?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/", async (req, res)=>{
    const game = new GameModel({gameName: "Valorant", playedHours: 65, playerLevel: "average"});

    try{
        await game.save();
        res.send("data inserted")
    }catch(err){
        console.log(err);
    }
});


app.listen(3001, ()=>{
    console.log("server running in port 3001...");
});