/**
 * @description       : JSON Function
 * @author            : Ramasamy Palanivel
 * @group             : JSON Function
 * @last modified on  : 12-30-2022
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   12-30-2022   Ramasamy Palanivel   Initial Version
**/

// Json Object

const emp = {name: "Kumar",
             age : 50,
             isLeave: true,
             contactno: 99876655,
             mobno: 97676454,
             address: {street:"11th street",
                    city:"Chennai",
                    state:"TN",
                    country:"India",
                    pincode:600444
                }
            }
console.log(emp);
console.log(typeof emp);
console.log(JSON.stringify(emp));
const emps = JSON.stringify(emp);
console.log(typeof emps);
console.log( emps);

const emp1 = '{"name":"Anand", "age":50}';
console.log(typeof emp1);
console.log( emp1);
const emp2 = JSON.parse(emp1);
console.log(typeof emp2);
console.log( emp2);