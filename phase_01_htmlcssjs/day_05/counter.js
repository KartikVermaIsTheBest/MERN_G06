

//  SetInterval


// console.log("start");

// setTimeout(() =>{
//     console.log("Getting Executed after 3 seconds");
// },3000)

// console.log("end");


// Setinterval --> This will perform certain task repeatedly after specific time

setInterval(() => {
    console.log("Hello");
    console.log("world");
    
} , 2000)


let count = 0;
let ele = document.getElementById("count");

setInterval(() => {
    count++;
    ele.innerHTML = "Count : " + count;
}, 1000);


