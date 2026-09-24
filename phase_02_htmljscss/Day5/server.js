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
    const usersArr = JSON.parse(data);
    const user = req.body;
    const newUser = {"id":usersArr.users.length + 1, ...req.body};
    const check_email = usersArr.users.find((user) => (user.email == newUser.email));
    if(check_email == undefined){
        usersArr.users.push(newUser);
        fs.writeFileSync("db.json" , JSON.stringify(usersArr));
        return res.send("Data Has Been Uploaded");
    }
    else{
        res.status(404).send("The email is already present in the DataBase");
    }
    
})

// get single User

app.get("/users/:id" ,  (req,res) => {

    // params contains key value pair objects in which all keys
    // will be word written in front of : (colon)
    // req.params => {"id":1 , "subId" : "2"}

    const id = Number(req.params.id);
    const data = fs.readFileSync("db.json" , "utf-8");
    const users = JSON.parse(data);
    const findId = users.users.find((user) => (user.id == id));
    if(findId == undefined){
        return res.status(404).send("The Id is not present in the database");
    }
    else{
        return res.send(findId);
    }
})

app.delete("/users/:id" , (req,res) => {
    const id = Number(req.params.id);
    const data = fs.readFileSync("db.json" , "utf-8");
    const users = JSON.parse(data);
    const findId = users.users.find((user) => (user.id == id));
    if(findId == undefined){
        return res.status(404).send("The Id is not present in the database");
    }

    const filteredUser = users.users.filter((user) => (user.id != id));
    users.users = filteredUser;
    fs.writeFileSync("db.json" , JSON.stringify(users));
    res.send("The id has been deleted");
})


app.put("/users/:id" , (req , res) => {
    const id = Number(req.params.id);
    const data = fs.readFileSync("db.json" , "utf-8");
    const users = JSON.parse(data);
    const user = users.users.find((user) => (user.id == id));
    const userA = req.body;

    if(user){
        user.email = userA.email;
        user.name = userA.name;
        fs.writeFileSync("db.json" , JSON.stringify(users));
        res.send("The Data Has Been Updated")
    }
    else{
        res.status(404).send("The Id is not Present");
    }   
})


app.listen(8080 , () => {
    console.log("The server is running in http://localhost:8080");
})

