const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUrl =
`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongodb:27017/admin`;

mongoose.connect(mongoUrl)
.then(() => console.log("Mongo Connected"))
.catch(err => console.log(err));

app.get("/", (req,res)=>{
    res.send("Node + Mongo Running");
});

app.listen(5000,()=>{
    console.log("Server Started");
});