// let arr = [10,20,30,40]
// let [a,c,b] = arr
// console.log(a,b);


// let arr1 = [10,20,30]
// let arr2 = arr1
// console.log(arr1);
// console.log(arr2);


// let arr1 = [10,20,30]
// let arr2 = [...arr1]
// // console.log(arr1);
// // console.log(arr2);


// let arr3 = [...arr1 , ...arr2]
// console.log(arr3);

// let user = {
//     name: "Aman",
//     age: 25
// }

// let newUser = {...user}
// console.log(newUser);

// let user = {
//     name: "Aman",
//     age: 25
// };

// let newUser = {...use , age:32}
// console.log(newUser);


function calculateSum(a,...nums){
    console.log(a,nums);
    
}

function natonality(country="India"){
    console.log(`This person belong to ${country}`);
}