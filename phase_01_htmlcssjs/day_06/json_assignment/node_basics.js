// let arr = [20,1,3,40,50]

// let sortedArray = arr.sort((a,b) => a - b)
// let reversedArray = arr.sort((a,b) => b - a)


// console.log(sortedArray);
// console.log(reversedArray);




// node --->
// Js is built to run inside browser
// It is an runtime environment where javascript get executed outside of browser

// node --> v8 engine --> chrome

// npm --> node package Manager
// npm is javascript library where you will get millions of packages that you can use in projects

// bootstrap , chakra
// react , angular
// express, nodemon
// json-server


let response = "http://localhost:3000/students";

fetch(response)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let studData = document.getElementById("student-data")
        data.forEach((student) => {
            const row = `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                    <td>${student.age}</td>
                </tr>
            `

            studData.innerHTML += row;
        });
    })
    .catch((error) => {
        console.log(error);
    });
