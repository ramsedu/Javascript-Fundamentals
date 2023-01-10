/**
 * @description       : DOM
 * @author            : Ramasamy Palanivel
 * @group             : DOM
 * @last modified on  : 01-07-2023
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   01-06-2023   Ramasamy Palanivel   Initial Version
**/
//debugger;
//Set value based on element by Id 
document.getElementById("name").value = "Anitha";
document.getElementById("dob").value = "2023-01-06";//yyyy-mm-dd
document.getElementById("salary").value = 5000;

/// get the value based on element by Id 
/* console.log(document.getElementById("name").value);
console.log(document.getElementById("dob").value);
console.log(document.getElementById("salary").value); */

// get all input elements based on element by Tag Name
/*const allInputs = document.getElementsByTagName("input");
//console.log(allInputs);
/* allInputs[0].style.background="green";
allInputs[1].style.background="red";
allInputs[2].style.background="blue"; * /

for (let i = 0; i < allInputs.length; i++) {
   // allInputs[i].style.background="green";
    const element = allInputs[i];
    //console.log(element.value);
    //console.log(element.id);
    /* element.style.background = "green";
    //element.style.color = "white";//RGB
    element.style.color = "#ffffff"; */

    /*if (element.id === "name") {
        element.style.background = "red"
        element.value = "Kumar";
    } else if (element.id === "dob") {
        element.style.background = "green"
        element.value = "2023-01-07";
    } else {
        element.style.background = "blue";
        element.value = "6000";
    }*/

    /* switch (element.id) {
        case "dob":
            console.log(i);
            console.log(element.value);
            element.value = "2023-01-07";
            console.log(element.value);
            break;
        case "name":
            console.log(i);
            console.log(element.value);
            element.value = "Kumar";
            console.log(element.value);
            break;
        case "salary":
            console.log(i);
            console.log(element.value);
            element.value = "6000";
            console.log(element.value);
            break;
        default:
            break;
    }
} */

/// get the value based on element by class name
//console.log(document.getElementsByClassName("form-element")); 

// Get the element values based on Id, ClassName, TagName Using QuerySelector method
/* console.log(document.querySelector("#name"));
console.log(document.querySelector("#dob"));
console.log(document.querySelector("#salary")); */
// Get the value
/* console.log(document.querySelector("#name").value);
console.log(document.querySelector("#dob").value);
console.log(document.querySelector("#salary").value); */
// Set the value
/* document.querySelector("#name").value = "Kumar";
document.querySelector("#dob").value = "2023-01-07";
document.querySelector("#salary").value = 6000;
console.log(document.querySelector("#name").value);
console.log(document.querySelector("#dob").value);
console.log(document.querySelector("#salary").value); */

//console.log(document.querySelector(".form-element"));
//console.log(document.querySelector(".form-elementss"));
//console.log(document.querySelectorAll(".form-element"));

/* console.log(document.querySelector(".form-element"));
console.log(document.querySelector("input"));
console.log(document.querySelectorAll("input"));

const allInputs = document.querySelectorAll("input");
for (let i = 0; i < allInputs.length; i++) {
   // allInputs[i].style.background="green";
    const element = allInputs[i];
    switch (element.id) {
        case "dob":
            console.log(i);
            console.log(element.value);
            element.value = "2023-01-07";
            console.log(element.value);
            break;
        case "name":
            console.log(i);
            console.log(element.value);
            element.value = "Kumars";
            console.log(element.value);
            break;
        case "salary":
            console.log(i);
            console.log(element.value);
            element.value = "6000";
            console.log(element.value);
            break;
        default:
            break;
    } 
} */

// Remove the element
/* const btn = document.querySelector("button");
console.log(btn);
//btn.remove();
//Change the element property.
btn.style.background = "#ff0000"
btn.innerText="Add New Employee";

/* const lab = document.querySelector("#lsalary");
lab.innerText = "My Salary";
console.log(lab); * /
 const labs = document.querySelectorAll("label");
/*for (let i = 0; i < labs.length; i++) {
    const element = labs[i];
    element.innerText = "My " + element.innerText;
} * /

labs.forEach(e => { e.innerText = "My " + e.innerText}); */

//Add or Remove class
/* const container = document.querySelector(".container");
console.log(container);
container.classList.add("topdiv");
//container.classList.remove("container");
container.classList.remove("topdiv");
//container.classList.add("container");
const container2 = document.querySelector(".container");
console.log(container2); */

// Events
/* const addEmployee = (e) => {
    e.preventDefault();
     console.log("welcome to Event!");
    console.log(e); 
    console.log(e.target); 
    const btn = e.target;
    btn.innerText = "Clicked";
    btn.style.background = "green";
    const name = document.querySelector("#name").value;
    const dob = document.querySelector("#dob").value;
    const sal = document.querySelector("#salary").value;
    console.log(name, dob, sal);
}; */

/* function addEmployee(event) {
    event.preventDefault();
    console.log("welcome to Event!");
  } */

/*   function deleteEmployee(event) {
    event.preventDefault();
    console.log("welcome to Event!");
  } */
 /*  const btn = document.querySelector("button");
  btn.addEventListener("click",(e) => {
    e.preventDefault();
    const btn = e.target;
    btn.innerText = "Clicked";
    btn.style.background = "green";
    const name = document.querySelector("#name").value;
    const dob = document.querySelector("#dob").value;
    const sal = document.querySelector("#salary").value;
    console.log(name, dob, sal);
  }) */

  const btns = document.querySelectorAll("button");
  for (let i = 0; i < btns.length; i++) {
    const element = btns[i];
    element.addEventListener("click",(eevent) => {
    eevent.preventDefault();
    // const btn = eevent.target;
    // btn.innerText = "Clicked";
    // btn.style.background = "green";
    const name = document.querySelector("#name").value;
    const dob = document.querySelector("#dob").value;
    const sal = document.querySelector("#salary").value;
    console.log(name, dob, sal);
    const empList = document.querySelector(".employee-list");
    empList.innerHTML += `
         <div class="employee-list-item">
          <div class="employee-name">${name}</div>
          <div class="employee-detail">
            <div>DOB: ${dob}</div>
            <div>Salary: ${sal}</div>
          </div>
        </div>`;
    document.querySelectorAll("input").forEach(e => { 
        e.value = "";
        });
  });
}