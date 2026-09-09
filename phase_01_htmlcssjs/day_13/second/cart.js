let container2 = document.getElementById("container2")
let users = JSON.parse(localStorage.getItem("cart"))

function automatic(){
    for(let i = 0 ; i < users.length ; i++){
        container2.innerHTML += `<div id="inside">
            <h3 id="name">${users[i].name}</h3>
            <h3 id="email">${users[i].email}</h3>
            <button onClick = "remove()" id="button">Remove</button>
        </div>`
    }
}

automatic()