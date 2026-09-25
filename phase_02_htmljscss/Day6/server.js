const { log } = require("console");
const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/" , (req , res) => {
    res.send("The server is Running");
})


app.get("/todos" , (req , res) => {
    const data = fs.readFileSync("db.json" , "utf-8");
    const todos = JSON.parse(data);
    res.send(todos);
})


app.post("/todos" , (req,res) => {
    const data = fs.readFileSync("db.json" , "utf-8");
    const todos = JSON.parse(data);
    todos.todos.push({"id" : todos.todos.length + 1 , ... req.body});
    fs.writeFileSync("db.json" , JSON.stringify(todos));
    res.send("The Data has been added");
})


app.put("/todos" , (req,res) => {
    const data = fs.readFileSync("db.json" , "utf-8");
    const todos = JSON.parse(data);
    
    for(let i = 0 ; i < todos.todos.length ; i++){
        if(todos.todos[i].id%2 == 0){
            todos.todos[i].status = true;
        }
    }

    fs.writeFileSync("db.json" , JSON.stringify(todos));
    res.send("The data has been changed");
})

app.delete("/todos" , (req,res) => {
    const data = fs.readFileSync("db.json" , "utf-8");
    const todos = JSON.parse(data);
    
    const newData = todos.todos.filter((todo) => (todo.status == false));
    todos.todos = newData;
    fs.writeFileSync("db.json" , JSON.stringify(todos));
    res.send("The data has been changed");
})



app.listen(8080 , () => {
    console.log("The server is started at http://localhost:8080");
})