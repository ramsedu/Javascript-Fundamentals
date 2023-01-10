/**
 * @description       : Map & Filter
 * @author            : Ramasamy Palanivel
 * @group             : Map & Filter
 * @last modified on  : 12-24-2022
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   12-24-2022   Ramasamy Palanivel   Initial Version
**/
const compaddress = {street  : "11th street",
                    city    : "Chennai",
                    state   : "TN",
                    country : "India",
                    pincode : 600444};

const emp1 = {
    name: "Hena",
    age: 30,
    isLeave: false,
    Salary: 6000,
    dayOfLeave: [5,6,7,9],
    Companyadrees: compaddress,
    address: {street  : "12th street",
                    city    : "Bangaluru",
                    state   : "KA",
                    country : "India",
                    pincode : 500444},
};

const emp2 = {
    name: "Ram",
    age: 33,
    salary: 4000,
    isLeave : false,
    dayOfLeave: [],
    Companyadrees: compaddress,
    address: {street  : "13th street",
                    city    : "Hyderbad",
                    state   : "TL",
                    country : "India",
                    pincode : 400444},
};

const emp3 = {
    name    : "Sngeetha",
    age     : 30,
    isLeave : false,
    Salary  : 5000,
    dayOfLeave: [5,6],
    //address : {},
     address: {street  : "11th street",
                    city    : "Chennai",
                    state   : "TN",
                    country : "India",
                    pincode : 600444}, 
    Companyadrees: compaddress
};
const emps = [emp1,emp2,emp3];
// Map function
/* const empNames = emps.map(function(emp){
    return emp.age;
});
 */

/* const empNames = emps.map((emp) => emp.name );
const empages = emps.map((emp) => emp.age );
const empCompAddrs = emps.map((emp) => emp.Companyadrees.city );
const empAddrs = emps.map((emp) => emp.address.state );

console.log(empNames);
console.log(empages);
console.log(JSON.stringify(empCompAddrs));
console.log(JSON.stringify(empAddrs)); */

//SOQL
/* SELECT id, Name 
FROM account
WHERE name = "Ram"; */

//filter function

//const empNames = emps.filter((emp) => (emp.isLeave === false)).map((emp1) => emp1.name );
//const empName = empNames.map((emp) => emp.name );
//console.log(JSON.stringify(empNames.name));
const empNames = emps.filter((emp) => (emp.isLeave === false))
console.log(empNames);
console.log(JSON.stringify(empNames));
//console.log(empNames[0].name);
for( let i = 0; i < empNames.length; i++ ){
    console.log(empNames[i]);
    if(i === 9) //n-1
    break;
}
