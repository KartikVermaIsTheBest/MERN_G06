const express = require("express");
const fs = require("fs")

const app = express();

app.use(express.json());

app.get("/" , (req,res) => {
    res.send("Welcome to Home Page");
})

// GET and POST request on users route

app.get("/users" , (req,res) => {
    const data = fs.readFileSync("db.json" , "utf-8");
    const users = JSON.parse(data);
    res.send(users);
})

app.post("/users" , (req,res) => {
    const data = fs.readFileSync("db.json" , "utf-8");
    const users = JSON.parse(data);
    const newUser = req.body;
    console.log(newUser);
    res.send("Data Saved");
})

app.listen(8080 , () => {
    console.log("The server is running in http://localhost:8080");
})

