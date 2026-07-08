// fetch --> It will pull response from an api

// fetch("url" , [get,post,put,patch,delete])

let container = document.getElementById("container")

let response = fetch("https://dummyjson.com/products").then(function(res){
    return res.json();
}).then(function(data){
    // console.log(data.products);

    for(el of data.products){
        container.innerHTML += `
            <div id="cards">
                <img src="${el.images[0]}" alt="">
                <h3>${el.title}</h3>
                // brand 
                // price
                // button Add to cart
            </div>
        `
    }
})


// fetch --> you will require two times then method
// res --> raw json format data , we need to convert them into objects