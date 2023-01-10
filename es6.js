/**
 * @description       : ES6 Spread Synatx
 * @author            : Ramasamy Palanivel
 * @group             : ES6 Spread Synatx
 * @last modified on  : 12-30-2022
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   12-30-2022   Ramasamy Palanivel   Initial Version
**/

//combining 2 array

/* const odds = [1,3,5,7,9];
const evens = [0,2,4,6,8];
const nums = [...odds, ...evens,40,...[5,6,7,9]];

console.log(odds);
console.log(evens);
console.log(nums);

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

const emp4 = {
    name    : "Gowtham",
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

const emps1 = [emp1,emp2];
const emps2 = [emp3,emp4];
const emps = [...emps1, ...emps2, {age:50}, true];

console.log(emps1);
console.log(emps);

//Destructing
const numbers = [1, 2, 3, 4,10];
let sums = 0;
for(let i=0; i<numbers.length; i++)
{
    sums += numbers[i];
}
function sum(x, y, z, a, u) {
    /* console.log(u);
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(a); * /
    return x + y + z + a + u;
  }

console.log(sums);
console.log(sum(...numbers));

const [E1,E2,E3,E4,E5] = emps;

console.log(E1);
console.log(E2);
console.log(E3);
console.log(E4);
console.log(E5); */

//Combining 2 or more Objects
const compaddress = {street  : "11th street",
                    city    : "Chennai",
                    state   : "TN",
                    country : "India",
                    pincode : 600444};
const emp1 = {
    name: "Hena",
        age: 30,
        isLeave: false,
        salary: 5000,
        dayOfLeave: [5,6,7,9],
        Companyadrees: compaddress
};

const emp2 = {
    age: 33,
    salary: 4000,
    dayOfLeave: [],
    Companyadrees: compaddress
};

const empfin = {
    name    : "Gowtham",
    salary  : 5000,
};

const emphr = {
    name    : "Gowtham",
    age    : 35,
    isLeave : true,
    dayOfLeave: [5,6],
    address: {street  : "11th street",
                    city    : "Chennai",
                    state   : "TN",
                    country : "India",
                    pincode : 600444}
};

const emp = {...emp1,...emp2, salary: 10000};
console.log(emp);
const emps = {...emphr,...empfin,companyadrees: compaddress};
console.log(emps);
console.log(JSON.stringify(emps));

//Destructing Objects

const {name, age, address} = emps;
const addressfields = "street";
console.log(name);
console.log(age);
console.log(address);
console.log(address.street);
console.log(address[addressfields]);