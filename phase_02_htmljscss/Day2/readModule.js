// const { error } = require("console");
const fs = require("fs")

// // const data = fs.readFileSync("students.txt","utf-8")

// const d = fs.readFile("students.txt", "utf-8", (error, data) => {
//     if (error) {
//         console.log(error);
//         return;
//     }

//     console.log(data);
// });

// console.log(d);
// console.log("end");

// console.log(data);

// fs.mkdir("college",(error) => {
//     if(error){
//         console.log(error);
//     }
// })

fs.readdir("college",(error,files)=>{
    console.log(files);
})