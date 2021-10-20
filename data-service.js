var employees = [];
var departments = [];
var managers =[];

const fs = require("fs");

const {resolve} = require("path");

module.exports.initialize = function() {

    return new Promise((resolve, reject) =>{

        fs.readFile('./data/employees.json', 'utf8', (err, data) => 
        { if (err) {
            reject(err);
        } 
            employees = JSON.parse(data);
            // console.log(data);
            // console.log(parseData);
        });

        fs.readFile('./data/departments.json', 'utf8', (err, data) => 
        { if (err) {
            reject(err);
        }
            departments = JSON.parse(data)
            // console.log(data);
            // console.log(parseData);
            resolve();
        });


        

    })
}


module.exports.getAllEmployees = function() {

    return new Promise((resolve,reject) =>{

        if(employees.length == 0){

            reject("Data not found");
            return;
        }

        resolve(employees);

    });
};


module.exports.getDepartments = function() {

    return new Promise((resolve,reject) =>{

        if(departments.length == 0){

            reject("Data not found");
            return;
        }

        resolve(departments);

    });
};







module.exports.isManager = function() {

    return new Promise((resolve, reject) => {

        if (employees.length == 0){
            reject("No data to retrieve!");
            return;
        } employees.forEach((employee) => {

            if (employee.isManager == true){

                managers.push(employee);
            }
                

        });

        resolve(managers);
       })

        
    };

    //   employees.forEach(obj) => {

    //     if(obj.isManager === true){
    //         managers.push(obj);
    //     }
    //    }
 






