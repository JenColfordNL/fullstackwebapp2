/********************************************************************************* * Full Stack Javascript – QAP2 * I declare that this assignment is my own work in accordance with Keyin Academic Policy. No part * of this assignment has been copied manually or electronically from any other source * (including 3rd party web sites) or distributed to other students. * * Name: JenniferColford Student ID: Semester 3 Date: 21 Oct 2021

// * * Online (Heroku) Link: https://git.heroku.com/pacific-sierra-03464.git * *******************************************************************************/
var express = require("express");
const { Server } = require("http");
var path = require("path");
var app = express();
const data = require("./data-service.js");

var HTTP_PORT = process.env.PORT || 8080


function onHTTPStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}
app.use(express.static('public'));

app.get("/", function(req,res){
    
    res.sendFile(path.join(__dirname, "views/home.html"));

});

app.get("/about", function(req,res){
    
    res.sendFile(path.join(__dirname, "views/about.html"));

});
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