// fetch --> It will pull response from an api

// fetch("url" , [get,post,put,patch,delete])

let container = document.getElementById("container")


let response = fetch("https://dummyjson.com/products").then(function(res){
    return res.json();
}).then(function(data){

    for(el of data.products){
        container.innerHTML += ` 
            <div id="${el.id}">
                <img src="${el.images[0]}" alt="">
                <h3>${el.title}</h3>
                <p>${el.brand}</p>
                <p>${el.price}</p>
                <button id ="cart">Add to Cart</button>
                <button class = "delete" id ="div-${el.id}">Delete</button>
            </div>
        `
    }

    let cartBtns = document.querySelectorAll("#cart")
    let cartS = document.getElementById("cartSize")
    let counter = 0

    for(let el of cartBtns){
        el.addEventListener("click",function(){
            counter++
            cartS.innerHTML = "Cart:" + counter
            alert("TOTAL CART ELEMENTS : " + counter) 
        })
    }

    let dltButton = document.querySelectorAll('#delete')

    for (let btn of dltButton){
        btn.addEventListener("click",function(){
            let d = document.getElementById()
            d.remove()
        })
    }

})




// fetch --> you will require two times then method
// res --> raw json format data , we need to convert them into objects