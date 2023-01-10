/**
 * @description       : Class Constructor (ES6)
 * @author            : Ramasamy Palanivel
 * @group             : Class Constructor (ES6)
 * @last modified on  : 01-06-2023
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   12-31-2022   Ramasamy Palanivel   Initial Version
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
**/

//Car car1 = new Car('Bule');
//Car car2 = new Car('Red');

/* const name = 'Kumar';
console.log(name); */

/* const name = new String("Kumar");
console.log(name); */

class addEmployees {
    constructor(empName, empdob, empSalary) {
        this.ename   = empName;
        this.dob    = empdob;
        this.salary = empSalary; 
    }

    welcomeMessage() {
        console.log(`Welcome  : ${this.ename}`);
    }

     getAge () {
        //console.log(typeof this.dob);
        const dob  = new Date(this.dob);
        //console.log(dob);
        //console.log(typeof dob);
        const ages = Math.abs(new Date() - dob )/(1000*60*60*24*365);
        return Math.floor(ages);
    } 
}

/* addEmployees.prototype.getAge = function  (compYear) {
    //console.log(typeof this.dob);
    const dob  = new Date(this.dob);
    //console.log(dob);
    //console.log(typeof dob);
    const ages = Math.abs(new Date() - dob )/(1000*60*60*24*365);
    return Math.floor(ages - compYear);
}
 */

    //mm-dd-yyyy
    //console.log(addEmployees("Kumar","25-03-2000",5000));
    /* const emp1 = new addEmployees("Kumar","7-7-2000",5000);
    const emp2 = new addEmployees("Amit","12-01-2001",5000);
    const emp3 = new addEmployees("Andand","10-02-2002",4000);
    emp1.salary = 5500;
    emp2.salary = 5500;
    emp3.salary = 4400; */
    //Add multiple Student using loops 5 subject marks then 
    // Student Name, Reg No, Class, SM1,SM2,SM3,SM4,SM5, Totalmark, Rank
    let emps = [];
    for (let index = 0; index < 10; index++) {
        let month = index + 1;
        let year = 2000+index;
        let sal = 5000 * (index + 1)
        let emp = new addEmployees('Emp Name ' +index ,
                                      month + '-02-' + year,
                                      sal);
        //console.log(emp.getAge());
        emp = {...emp, age:emp.getAge()};
        emps = [...emps,emp];
    }
    console.log(emps);
    console.log(JSON.stringify(emps));
    /* console.log(emp1);
    emp1.welcomeMessage();
    //let empage = emp1.getAge();
    console.log(emp1.getAge(3));
    console.log(emp2);
    emp2.welcomeMessage();
    console.log(emp2.getAge(0));
    console.log(emp3);
    emp3.welcomeMessage();
    console.log(emp3.getAge(5)); */

