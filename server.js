const express = require("express");
const path = require("path");
//install path

const app = express();

app.use(express.static("public"));

app.get("/random-dog", function(req,res){
    res.sendFile("/random.html",{
        root: path.join(__dirname, "public")
    })
})

app.listen(8000, function(){
    console.log("server is started with the port number 8000")
});

//URL'S TO RUN THE HTML FILES
//http://localhost:8000/
//http://localhost:8000/about
//http://localhost:8000/contact