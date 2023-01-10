/**
 * @description       : 
 * @author            : Ramasamy Palanivel
 * @group             : 
 * @last modified on  : 12-11-2022
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   12-03-2022   Ramasamy Palanivel   Initial Version
**/

/* //alert('Hello LWC World!');
// Wirte a Log message using Console
console.log("Hello World!");
console.error("This is a error message!");
console.warn("This is a warning message!");
//Single Line Comment & Multi-line Comment
/* */


// Variables
//var, let, const ddd
//var - public scope
//let - local scope
//const - local scope with contant value
/* for(let i=0; i<10; i++) {
    console.log(i);
}
console.log(i); */

//const num =10;
//num = 20;

//const name ='Amit';
//name = 'kumar';

// let num2 =10;
// num2 = 20;

//Data Types
//String, Number, Boolean, null, undefined
//Weak vs Stong Data type
/* const name = "Amit";
const names = 50;
const dateofBirth = "12/12/2000";
const age = 50;
const isLeave = false;
const salary = null;
const futurework = undefined;
console.log(typeof name);
console.log(typeof names);
console.log(typeof dateofBirth);
console.log(typeof age);
console.log(typeof isLeave);
console.log(typeof salary);
console.log(typeof futurework);

for(let i=0; i<10; i++) {
    console.log(i);
}
console.log(i);
 */
/* const futurework01 = 00;
console.log(futurework01);
console.log(typeof futurework01); */

/* //String Functions
const names = "Amit Kumar welcome!";
console.log(names);
/* console.log(names.toUpperCase());
console.log(names.toLowerCase());
console.log(names.length);
console.log(names.substring(0,4));
const firtName = names.substring(0,4);
console.log(firtName.toLowerCase());
//firtName = firtName.toUpperCase();
console.log(firtName); 
//alert('testtest');
console.log(names.split(" "));
console.log(names.split(" ").length);
console.log(names.split(" ")[1].length);
console.log(names.split(" ")[0]);  

const greet = "Welcome Java Scripts! Welcome!";
const allgreetwords = greet.split(" ");
console.log(allgreetwords);  */ 

/* const words1 = "Welcome Java Scripts!";
const words2 =  " Trainig Session!";
console.log("String Concat: " + words1 + words2); 
//Template literals, Its available ES6
console.log(`String Concat:  ${words1} ${words2}`); */

/* //Array
//[0,1,2,3,4,5]
const num = [30, 10, 5, 3 ,2, 100, 200, 11,300,12,13];
console.log(num);
num.push(45);
console.log(num);
num.pop(45);
console.log(num);
console.log(num[2]);
console.log(num[3]);
num[3] = 60;
num[2] = 50;
console.log(num);

//num = [30,40,50]
console.log(num.slice(1,5));
console.log(num.sort());
console.log(num.sort((a,b) => a - b));

const array1 = [1, 2, 3];
console.log(array1);
console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3] */

//Object
/*const emp = {
    name: "Amit Kumar",
    age: 45,
    isLeave: true,
    Salary: 4500,
    dayOfLeave: [5,6,7]
};

const compaddress = {street  : "11th street",
                    city    : "Chennai",
                    state   : "TN",
                    country : "India",
                    pincode : 600444};

const emp1 = {
    name: "Hena",
        age: 30,
        isLeave: false,
        Salary: 5000,
        dayOfLeave: [5,6,7,9],
        Companyadrees: compaddress
};

const emp2 = {
    name: "Ram",
    Age: 33,
    salary: 4000,
    dayOfLeave: [],
    Companyadrees: compaddress
};

const emp3 = {
    name    : "Sngeetha",
    age     : 30,
    isLeave : false,
    Salary  : 5000,
    dayOfLeave: [5,6],
    address: {street  : "11th street",
                    city    : "Chennai",
                    state   : "TN",
                    country : "India",
                    pincode : 600444},
    Companyadrees: compaddress
};
const emps = [emp,emp1,emp2,emp3];

//console.log(`${emps[1]["name"]} was leave on ${emps[1].dayOfLeave}`);
//console.log(`${emps[2]["name"]} was leave on ${emps[2].dayOfLeave}`);

for(let i=0; i<emps.length; i++ ){
    console.log(`${emps[i]["name"]} was leave on ${emps[i].dayOfLeave}`);
}
console.log(JSON.stringify(emps));

/*console.log(emp);
//delete emp.Salary;
//delete emp["isLeave"];
console.log(emp);
console.log(`${emp["name"]} was leave on ${emp.dayOfLeave}`);
console.log(emps);
console.log(JSON.stringify(emps));
/* console.log(emp);
console.log(emp.name);
console.log(emp.age);
console.log(Object.entries(emp));
console.log(Object.entries(emp)[0]);
console.log(Object.entries(emp)[0][0]);
console.log(Object.entries(emp)[0][1]);
//Key/Propery Name
console.log(Object.keys(emp));
console.log(Object.keys(emp)[2]);

//Key/Propery Vaules
console.log(Object.values(emp));
console.log(Object.values(emp)[0]);
console.log(emp.Salary);
console.log(emp["age"]);
console.log(emp["Salary"]);
//My salary is 4500 per month.
//const mySalStr = 
console.log("my salary" +emp.Salary +"per month");
console.log(`My salary is ${emp.Salary} per month.`) 

const acc = {
    Name : "ABC Privated Limited",
    AccountNumber: 87877,
    Phone: 9900034454,
    BillingAddress: {

    },
    ShippingAddress: {

    }
};*/