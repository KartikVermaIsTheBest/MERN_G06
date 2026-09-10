const http = require("http")

const server = http.createServer((req,res) => {
    if(req.url == "/" && req.method == "Get"){
        res.write("Hello World\n")
        res.end("Welcome to HomePage");

        // end -- Single Line -- Can't Write After This
        //write -- Multiple Lines
    }
    else if(req.url == "/about"){
        res.end("This is About Page");
    }
    else if(req.url == "/cart"){
        res.end("This is Cart Page")
    }
    else{
        res.end("This Page doesn't exists");
    }
})

server.listen(8080,() => {
    console.log("Server is started in http://localhost:8080/");
})


// npm == Node Package Manager 