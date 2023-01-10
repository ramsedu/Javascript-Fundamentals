/**
 * @description       : Loops
 * @author            : Ramasamy Palanivel
 * @group             : Loops
 * @last modified on  : 12-23-2022
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   12-23-2022   Ramasamy Palanivel   Initial Version
**/
//for Loop
    //==>1             ==>2     ==> 44
/* let index = 5;
for (; index < 10; ) {
    //==> 3
    console.log(index);
    ++index;
    //index++ ==> index = index + 1
}
 */
//10,9...1
/* let i = 5;
for (let index = 10; index >= 1 && i === 5 ; index--) {
    console.log(index);
} */
//While Loop

/* let i = 1;
while (i <= 0) {
    console.log(i);
    i++;
} */

/* let dobrethingProblem     = true;
let doIhaveSemallProblem  = true;
while (dobrethingProblem || doIhaveSemallProblem ) {
    console.log("Covid 19 Postive");
    dobrethingProblem = false;
    doIhaveSemallProblem = false;
} */

//Do-While Loop
/* let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10); */

//Break
/* let jobStatus= false;
let i = 1;
do {
    console.log(i);
    if (jobStatus || i === 15)
        break;
    i++;
    if (i === 2)
        jobStatus = false;
} while (true); */

//Continue
/* for (let i = 1; i <= 10; i++) {
    console.log("Hello ==> " + i);
    if (i === 3)
        continue;
    console.log(i);
    if (i === 5)
        break;
}  */

// Types of for loops
//for of loop

/* const emps = ["Arun","Anand","Kumar","Amit"];

for (const emp of emps) {
    console.log(emp);
} */

/* const accs = ["Arun","Anand","Kumar","Amit"];//getAccountsName;

for (const acc of accs) {
    console.log(acc);
} */

//for in loop
//const accs = ["Arun","Anand","Kumar","Amit"];
/* const compaddress = {street  : "11th street",
                    city    : "Chennai",
                    state   : "TN",
                    country : "India",
                    pincode : 600444};

                    //street : 11th street
for (const key in compaddress) {
    
    if(key === "street")
        continue;
    console.log(`${key} : ${compaddress[key]}`);
} */

//forEach Loop
const compaddress = [{street  : "11th street",
                    city    : "Chennai",
                    state   : "TN",
                    country : "India",
                    pincode : 600444},
                    {street  : "12th street",
                    city    : "Bangaluru",
                    state   : "KA",
                    country : "India",
                    pincode : 600444}
                ];
                    
compaddress.forEach(function(compaddr) {
    console.log(compaddr);
    console.log(compaddr.city);
});