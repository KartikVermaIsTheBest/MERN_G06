const {Student} = require("../models/studentModel");

// Student Table with mongoose methods
// CRUD
// Creating Student in mongodb
// mongoose provide some methods to perform crud
// 1. create => this will store data in db

const createStudent = async (req,res) => {
    try {
        const newUser = req.body; // {name , email , age}
        const data = await Student.create(req.body);
        res.status(200).send({
            "message" : "Student registered successfully",
            data
        })
    }
    catch (error){
        res.send(error);
    }
}


const getStudents = async(req , res) => {
    try {
        const data = await Student.find();
        res.status(200).send({
            "message" : "Data fetched Successfully",
            data
        })
    }
    catch(error){
        console.log(error);
    }
}

const getSingleStudent = async(req , res) => {
    try{
        const data = await Student.findById(req.params.id);
        res.status(200).send({
            "message" : "Data fetched Successfully",
            data
        })
    }
    catch(error){
        console.log(error);
    }
}


const deleteStudent = async(req , res) => {
    try {
        const id = req.params.id;
        await Student.findOneAndDelete(id);
        res.status(200).send({
            "message" : "The student has been Deleted"
        })
    }
    catch(error){
        console.log(error);
    }
}

const updateStudent = async(req,res) => {
    try{
        const id = req.params.id;
        const data = await Student.findByIdAndUpdate(id , req.body);
        res.send({
            "message" : "User updated successfully"
        })
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {createStudent , getStudents , getSingleStudent , deleteStudent , updateStudent};