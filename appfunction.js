/**
 * @description       : Function
 * @author            : Ramasamy Palanivel
 * @group             : Function
 * @last modified on  : 12-16-2022
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   12-10-2022   Ramasamy Palanivel   Initial Version
**/
//Functions 3 type of way,
//1
/* public static void main() {

}
 * /
// first way
function print(empName, empAge, empIsLeave, empSalary,empDayOfLeave,empAddress) {
    console.log("welcome to Java script traiig session!");
}  * /
// second way
const print = function (empName, empAge, empIsLeave, empSalary,empDayOfLeave,empAddress) {
    console.log("welcome to Java script Second!");
} * /

// Third way, This is available ES6
const print =  () => {
    console.log("welcome to Java script Third!");
} */

/* print() {
    console.log("welcome to Java script Third!");
}

print(); */

const emps = [];

 const addEmployee = (empName, empAge, empIsLeave, empSalary,empDayOfLeave,empAddress) => {
    const emp = {
        name    : empName,
        age     : empAge,
        isLeave : empIsLeave,
        Salary  : empSalary,
        dayOfLeave: empDayOfLeave,
        address: empAddress
    };
    emps.push(emp);
    /* if (empName == 'Kumar')
        emp.name = empName + " Amit"
    console.log(emp); */
};

 console.log(emps);
//Total no of employees: 3
console.log(emps.length);
console.log('Total no of employees: '+emps.length);
console.log(JSON.stringify(emps));
addEmployee("Kumar",25,false,null,[5,6],{City:"Chennai",State:"TN",Pincode:78786});
console.log(JSON.stringify(emps));
addEmployee("Amit",35,false,6000,[6,7],{City:"Chennai",State:"TN",Pincode:78786});
console.log(JSON.stringify(emps));
addEmployee("Anand",45,false,7000,[6,8],{City:"Chennai",State:"TN",Pincode:78786});
console.log(emps);
//Total no of employees: 3
console.log('Total no of employees: '+emps.length);
console.log(`Total no of employees: ${emps.length}`);
console.log(JSON.stringify(emps));
/* let num = 10;
num = 20;
const num1 = 10;
num1 = 20; */

const sum = (a, b) => { return a + b; }
const mul = (a, b) => { return a * b; }
const sub = (a, b) => { return a - b; }

console.log(sum(10,20));
console.log(mul(10,20));
console.log(sub(10,20));

const Add = (a, b) => {
    const sums= a + b;
    return sums;
}

console.log(Add(10,20));

function Add2 (a, b) {
    const sums= a + b;
    return sums;
}
console.log(Add2(10,20)); 