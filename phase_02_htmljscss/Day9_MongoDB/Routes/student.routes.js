const {createStudent,getStudents,deleteStudent} = require("../controllers/studentController");

const express = require("express");
const routes = express.Router();


// you can write routes in different file with help of express.Router
// we will link logic with routes here

routes.post("/students" , createStudent);
routes.get("/getStudents" , getStudents);
routes.delete("/deleteStudent/:id" , deleteStudent);
module.exports = {routes};
