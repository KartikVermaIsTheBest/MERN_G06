const express = require("express");
const bcrypt = require("bcrypt");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "PASSKEY"


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
        return res.send("Password Not Matches");
    }    

    // jwt.sign("Payload","Secret Key","Expiry Time")
    // payload ==> inforamtion that you want to share with client (email,id)
    // secret key => it put stamp on token that it is coming from trusted server
    // Expiry time => time after token expires

    const token = jwt.sign({"email":user.useremail},SECRET_KEY,{"expiresIn":"1h"})
    res.send({"message":"User Logged In successfully",
        "token":token
    })
})

const authMiddleWare = (req,res,next) => {
    const headers = req.headers.authorization;
    const token = headers.split(" ")[1];
    const decode = jwt.verify(token , SECRET_KEY);
    if(decode){
        req.body = decode.email;
        next();
    }
}

app.get("/profile" ,authMiddleWare , (req,res) => {
    res.send({"message" : "Welcome to the Profile",
        "user":req.body
    });
})

app.get("/accounts" , authMiddleWare , (req,res) => {
    res.send("Welcome to account page");
})


app.listen(8080 , () => {
    console.log("Server is running on http://localhost:8080/");
})