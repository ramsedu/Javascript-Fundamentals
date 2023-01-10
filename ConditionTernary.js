/**
 * @description       : Ternary 
 * @author            : Ramasamy Palanivel
 * @group             : Ternary
 * @last modified on  : 12-17-2022
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   12-16-2022   Ramasamy Palanivel   Initial Version
**/

/* let x = 15;
let y = 11;
/* if (x > y)
    console.log('X is greather than Y');
else
    console.log('X is Less than Y'); * /
x > y ? console.log("X is greather than Y") : 
        x < y ? console.log("X is Less than Y") :
                console.log("Both are equal"); */
//Swtich Case Statement
/*const dayOfWeek = 100;
 switch (dayOfWeek) {
    case 1:
        console.log("This is SUN");
        break;
    case 2:
        console.log("This is MON");
        break;
    case 3:
        console.log("This is TUS");
        break;
    case 4:
        console.log("This is WEN");
        break;
    case 5:
        console.log("This is THU");
        break;
    case 6:
        console.log("This is FRI");
        break;
    case 7:
        console.log("This is SAT");
        break;
    default:
        console.log("This is Invalid");
        break;
} */

/* const dayOfWeek = 5;
let x ;
x = 20;
let y = 40;
switch (dayOfWeek) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        if (dayOfWeek === 5 && x === 20) {
            y = 40;
            console.log("This is X value matched");
        } else {
            console.log("This is not  X value matched");
        }
        console.log("This is Workday");
        break;
    case 1:
    case 7:
        console.log("This is Weekend");
        break;
    default:
        console.log("This is Invalid");
        break;
}
console.log(y); */

let x = 100;
{
    let x = 20;//Option 4
    //x = 20;//Option 5
    {
        // x = 30; //Option 3
        let x = 30;
        console.log(x);
        x= 40 
        console.log(x);
    }
    console.log(x);
}
console.log(x);

//Option 1 ==> 20 40 40
//Option 2 ==> 30 40 20
//Option 3 ==> 30 40 40
//Option 4 ==> 30 40 20 100
//Option 5 ==> 30 40 20 20
//Option 5 ==> 30 40 40/20? 100