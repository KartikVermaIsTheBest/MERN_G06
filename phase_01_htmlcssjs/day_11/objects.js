// let person = {
//     name:"Aman",
//     age:20,
//     address:"Shimla",
//     marks:[30,40]
// }

// console.log(person);
// console.log(person.address); // dot method of accessing
// console.log(person['age']); // square brackets method of accessing

// let product = new Object() // Creating object with constructor
// product['product_name'] = "Iphone 14" // adding properties
// product['price'] = 64000
// product['color'] = 'Space Grey'


// product['price'] = 70000
// console.log(product);

// let obj = {model  : "Tesla",color : "Red"};
// delete obj.color;
// console.log(obj);
// console.log("color" in obj);
// console.log(obj.hasOwnProperty("model"));


// let obj = {model  : "Tesla",color : "Red"};
// for(let key in obj) {
//     console.log(key + ": " + obj[key]);
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));


// let obj = {model  : "Tesla",color : "Red"};

// console.log(Object.keys(obj).length);



// let student = {
//     name: "Rahul",
//     age: 21,
//     address: {
//         city: "Delhi",
//         state: "Delhi",
//         pincode: 110001
//     }
// }

// console.log(student.address.pincode);



// let obj = {model  : "Tesla",color : "Red"};

// // let {model , color} = obj

// // console.log(model);
// // console.log(color);

// let {model:carModel , color} = obj
// console.log(carModel);
// console.log(color);



// let obj = {
//     name : "Kartik",
//     study: {
//         college : "Chitkara",
//         sem : "5",
//         address: {
//             city : "Rajpura",
//             town : "Jansla"
//         }
//     }
// }

// // console.log(obj.study.college);

// let {name,study:{college,sem,address:{city,town}}} = obj

// console.log(city);


let student = { 
    name: "Rahul"
}

let {name , country = "India"} = student

console.log(country);
console.log(student);
