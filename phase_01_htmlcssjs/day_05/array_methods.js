arr = [1,2,3,4,5,6]

// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

// let sq = arr.map((item) => item**2)
// console.log(sq);


// for-each -> Not returns An Array

// map -> Returns an Array

// filter -> Creates a new Array


let num = [30,12,14,15,7,18,23,27]

let even = num.filter((el) => {
    return el%2 == 0
})


console.log(even);


// reduce -> It will perform certain mathematical operation on your array and returns single value


// accumulator -> starting value of any result


let numbers = [10,50,20]

let result = numbers.reduce((acc , el) => {
    return acc + el
} , 7)

console.log("Result : " , result);

// sort 

let ages = [10,2,30,40]

// console.log(ages.sort());

let sortedAges = ages.sort((a,b) => a - b)

console.log(sortedAges);

let descendingAges = ages.sort((a,b) => b - a)
console.log(sortedAges);
console.log(descendingAges);
