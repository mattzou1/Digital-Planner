//fills "start time" and "stop time" with times in 30 minute increments
//on the add assignment pop-up
//connects to copyToDo.html

import {increments} from "./increments.js"

//get dropdown menu for start time
let Stime = document.body.querySelector("#Stime")
increments(Stime);

//get dropdown menu for stop time
let Etime = document.body.querySelector("#Etime")
increments(Etime);

//get dropdown menu for completion time
let Ctime = document.body.querySelector("#Ctime")


let minutes = 0;

//fill dropdown menu with 30 min increments
for(let i = 1; i < 10; i++){
    //create new option element
    let newOption = document.createElement("option");

    //set new option elements to the time 
    newOption.innerText = minutes;
    
    //set value attribute of new option elements
    newOption.setAttribute("value", minutes);
    
    //increment minutes
    minutes = minutes + 30;

    //console.log("Value: " + newOption.getAttribute("value"));

    //append option to dropdown menu
    Ctime.appendChild(newOption);
}