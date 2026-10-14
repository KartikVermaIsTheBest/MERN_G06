const express = require("express");
const {connection} = require("./config/db");
// connection will make linking to mongoDB
const app = express();




app.listen(5000 , async () => {
    try{
        await connection
        console.log("DB connected successfully");
    }
    catch(e){
        console.log(e);
    }
    // console.log("The server is running at http://localhost:5000");
})