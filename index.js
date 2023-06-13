const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended:true}));


mongoose.connect('mongodb://0.0.0.0:27017/Bookdb');

const ChatSchema = new mongoose.Schema({
    name:{
        type: String
    },
    message:{
        type: String
    }
});
const chat=mongoose.model('chat_app',ChatSchema);
chat.createIndexes();


app.post("/add", async (request, response) => {
    const message = new chat({ name:"rakesh",message:"hello"});
    try {
        await message.save(message);
        response.send(message);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(3000,()=>{
    console.log("listening");
});

