const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    "name" : {type:String,required:true},
    "email" : {type:String,required:true},
    "age" : {type:Number,required:true}
})

// now we will connect this schema with our table or connection

const Student = mongoose.model("students",studentSchema);

module.exports = {Student};