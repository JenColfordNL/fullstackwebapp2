
var express = require("express");
const { Server } = require("http");
var path = require("path");
var app = express();
const data = require("./data-service.js");

var HTTP_PORT = process.env.PORT || 8080;

// data
//     .initialize()
//     .then(() =>{
//         app.listen(HTTP_Port, function () {

//             console.log("Server Running");
//         });

//     })
//     .catch((err) =>{
//             console.log("Unable to start server because  " + err)
//         })



function onHTTPStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}
app.use(express.static('public'));

app.get("/", function(req,res){
    //res.send("Hello Node js <br/><a href ='/about'>Go to about page</a>");
    res.sendFile(path.join(__dirname, "views/home.html"));

});

app.get("/about", function(req,res){
    //res.send("Hello Node js <br/><a href ='/about'>Go to about page</a>");
    res.sendFile(path.join(__dirname, "views/about.html"));

});

// app.get("/employees", function(req,res,){
//     res.send("To do: get all managers === true");
//     //res.sendFile(path.join(__dirname, "views/employees.html"));

app.get("/employees", (req, res) => {

    data
    
    .getAllEmployees()
    
    .then((data) => res.json(data))
    
    .catch((err) => {
    
    res.send(err);
    
    });
    
    });

    app.get("/departments", (req, res) => {

        data
        
        .getDepartments()
        
        .then((data) => res.json(data))
        
        .catch((err) => {
        
        res.send(err);
        
        });
        
        });
    

    app.get("/managers", (req, res) => {

        data
        
        .isManager()
        
        .then((data) => res.json(data))
        
        .catch((err) => {
        
        res.send(err);
        
        });
        
    });
    

// function logger(req, res, next){
//     console.log("Logger!!")
//     next()
// }

// app.get("/managers", function(req,res){
//     res.send("isManager()");
//     //res.sendFile(path.join(__dirname, "views/managers.html"));
    
// });

// app.get("/departments", function(req,res){
//     res.send("formatted JSON string");
//     //res.sendFile(path.join(__dirname, "views/departments.html"));

// });

app.get("*", function(req,res){
    res.send("Page Not Found error 404");
  

});






data

.initialize()

.then(() => {

app.listen(HTTP_PORT, onHTTPStart);

})

.catch((err) => {

console.log("Unable to start server");

});