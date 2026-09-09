
// Registration Form ==> Name, email , age
// Fill User Data => post request => db.json 
// Fetch Data => get request
// Delete Data ==> delete request
// Updating Data ==> update request


let handleSubmit = async(event) => {
    event.preventDefault()
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let age = document.getElementById("age")

    let userObject = {
        name : name.value,
        email : email.value,
        age: age.value
    }

    await fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{'Content-Type': 'application/json'}, // to send signal
        // that upcoming data is json data
        body: JSON.stringify(userObject)
    })
    alert("User registered Successfully")
}

let getData = async() => {
    let res = await fetch("http://localhost:3000/users")
    let data = await res.json()
    displayData(data)
}

getData()

let displayData = (users) => {
    let container = document.getElementById("container")


    users.forEach(element => {
        container.innerHTML  += `
            <div>
                <h3>${element.name}</h3>
                <p>${element.email}</p>
                <p>${element.age}</p>
                <button onClick = "handleDelete('${element.id}')">Delete</button>
                <button>Update</button>
            </div>
        `
    });
}

let handleDelete = async(id) => {

    console.log(`Id Clicked ${id}`);

    await fetch(`http://localhost:3000/users/${id}` , {
        method:"DELETE"
    })

    getData()
}
