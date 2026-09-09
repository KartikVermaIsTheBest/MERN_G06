let user = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
    },
];

let inside = document.getElementById("inside")
let container = document.getElementById("container")
let name = document.getElementById("name")
let email = document.getElementById("email")
let button = document.getElementById("button")
let cart = []
localStorage.setItem("cart", JSON.stringify(cart));

function loadData() {
    for (let i = 0; i < user.length; i++) {
        container.innerHTML += `<div id="inside">
            <h3 id="name">${user[i].name}</h3>
            <h3 id="email">${user[i].email}</h3>
            <button onClick = "add(${i})" id="button">Add To Cart</button>
        </div>`
    }
}


function add(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(user[index]);

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added To Cart")
}

function loadCart(){
    window.location.href = "cart.html";
}

loadData()