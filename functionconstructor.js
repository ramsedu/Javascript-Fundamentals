/**
 * @description       : Fumction Constructor
 * @author            : Ramasamy Palanivel
 * @group             : Fumction Constructor
 * @last modified on  : 12-31-2022
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   12-31-2022   Ramasamy Palanivel   Initial Version
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function
**/

//Car car1 = new Car('Bule');
//Car car2 = new Car('Red');

/* const name = 'Kumar';
console.log(name); */

/* const name = new String("Kumar");
console.log(name); */

function addEmployees(empName, empdob, empSalary) {
    this.ename   = empName;
    this.dob    = empdob;
    this.salary = empSalary; 
    /* this.welcomeMessage = function () {
        console.log(`Welcome  : ${this.ename}`);
    }
    this.getAge = () => {
        //console.log(typeof this.dob);
        const dob  = new Date(this.dob);
        //console.log(dob);
        //console.log(typeof dob);
        const ages = Math.abs(new Date() - dob )/(1000*60*60*24*365);
        return Math.floor(ages);
    } */
    //1000/1000ms => 1 Sec ==> 60/60s = 1m ==> 60/60m ==> 1h==> 24/24h 
    //==> 1day ==> 365/365day = 1 year
    /* console.log(ename);
    console.log(age);
    console.log(salary); */
}

addEmployees.prototype.welcomeMessage = function () {
    console.log(`Welcome  : ${this.ename}`);
}
addEmployees.prototype.getAge = function (compYear) {
    //console.log(typeof this.dob);
    const dob  = new Date(this.dob);
    //console.log(dob);
    //console.log(typeof dob);
    const ages = Math.abs(new Date() - dob )/(1000*60*60*24*365);
    return Math.floor(ages - compYear);
};

//mm-dd-yyyy
//console.log(addEmployees("Kumar","25-03-2000",5000));
const emp1 = new addEmployees("Kumar","7-7-2000",5000);
const emp2 = new addEmployees("Amit","12-01-2001",5000);
const emp3 = new addEmployees("Andand","10-02-2002",4000);
emp1.salary = 5500;
emp2.salary = 5500;
emp3.salary = 4400;

console.log(emp1);
emp1.welcomeMessage();
//let empage = emp1.getAge();
console.log(emp1.getAge(3));
console.log(emp2);
emp2.welcomeMessage();
console.log(emp2.getAge(0));
console.log(emp3);
emp3.welcomeMessage();
console.log(emp3.getAge(5));