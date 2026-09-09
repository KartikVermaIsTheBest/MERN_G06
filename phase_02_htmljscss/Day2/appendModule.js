const fs = require("fs")

let text = " My name is Kartik"

// fs.appendFileSync("students.txt" , text)

fs.appendFile("students.txt" , text , (error) => {
    if(error){
        console.log("There is an Error : " + error);
    }
    console.log("File Appended");
})



fs.unlink("students.txt" , (error) => {
    if(error){
        console.log(error);
    }

    console.log("File Deleted");
})