const express = require("express");
const bcrypt = require("bcrypt");
const fs = require("fs");


const app = express();

app.use(express.json())

app.get("/" , (req , res) => {
    res.send("Welcome to homepage");
})


let user = {};

app.post("/register" , async(req,res) => {
    const {email,password} = req.body;

    user = {
        useremail : email,
        userpassword : await bcrypt.hash(password , 10)
    }

    // bcrypt.hash(originalpw , salt_rounds)
    // salt_rounds => 10 ==> very strong complex password
    // 1 ==> less complex password


    res.send(`${JSON.stringify(user)} registered successfully`)
})


app.post("/login" , async(req,res) => {
    const {email , password} = req.body;

    if(email !== user.useremail){
        res.send("Email does not exists");
    }

    const check_user = await bcrypt.compare(password , user.userpassword);

    // bcrypt.compare will return true or false 

    if(!check_user){
        res.send("Password Not Matches");
    }    
    else{
        res.send("User Logged in Successfully");
    }
})

app.listen(8080 , () => {
    console.log("Server is running on http://localhost:8080/");
})