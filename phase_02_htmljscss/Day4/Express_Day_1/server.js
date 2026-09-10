const express = require("express") // imported express FrameWork
const fs = require("fs");
const { json } = require("stream/consumers");

const app = express() // created express app here

// get,post,put,delete,patch

app.use(express.json()); // this is reading json-data from client

app.get("/", (req,res) => {
    res.send("Welcome to Express Application");
})

app.get("/students" , (req,res) => {
    const data = fs.readFileSync("students.json" , "utf-8");
    const students = JSON.parse(data);
    res.send(students);
})

app.post("/students" , (req,res) => {
    const data = fs.readFileSync("students.json" , "utf-8");
    const students =  JSON.parse(data); // converts to Object or Array
    const newStudent = {"id":students.length + 1 , ...req.body}; 
    students.push(newStudent);

    fs.writeFileSync("students.json",JSON.stringify(students)); // converts the data to string as it cant take object
    
    // console.log(req.body);
    res.send("Student Submitted Successfully");
})

app.listen(8080,() => {
    console.log("Server is Running in http://localhost:8080");
})


