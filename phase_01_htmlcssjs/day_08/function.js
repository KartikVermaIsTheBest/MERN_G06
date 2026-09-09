// let x = function rem(x , y) {
//     return x%y;
// }

// console.log(x(9,3)); // No Hoisting as let is in temporal Deadzone.


// let prod = (a) => {
//     let b = 14
//     return a*b
// }

// console.log(prod(4));


let checkNationality = (country = "Indian") => {
    return `Nationality of this person is ${country}.`
}

let res = checkNationality("American")
console.log(res);




