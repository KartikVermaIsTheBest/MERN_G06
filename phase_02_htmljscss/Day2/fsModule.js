// fs ==> this module handles files

const { log } = require("console");
const fs = require("fs")

let text = "Student Name: Aman"
console.log("start");


// Synchronous 
fs.writeFileSync("students.txt",text)

// Asynchronous
// fs.writeFile("students.txt",text,(error)=>{
//     if(error){
//         return console.log("Error is : ",error);
        
//     }
//     console.log("Text added");

// })


console.log("end");