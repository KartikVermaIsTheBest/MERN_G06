const express = require("express");
const {connection} = require("./config/db");
// connection will make linking to mongoDB
const app = express();
app.use(express.json());

const {routes} = require("./Routes/student.routes");

app.use("/",routes)

app.listen(8080 , async () => {
    try{
        await connection
        console.log("DB connected successfully");
    }
    catch(e){
        console.log(e);
    }
    // console.log("The server is running at http://localhost:5000");
})