const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoURL =
  `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongodb:27017/admin`;

mongoose.connect(mongoURL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req,res)=>{
    res.send("Node + MongoDB Running");
});

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});