//import {increments} from "/signup.js"

//function that fills dropdown menu with times in 30 minute increments
function increments(select){
    for(let i = 1; i < 13; i++){
        //create two option elements
        let newOption = document.createElement("option");
        let newOption2 = document.createElement("option");
    
        //set new option elements to the time 
        newOption.innerText = i + ":00";
        newOption2.innerText = i + ":30";
    
        //append options to dropdown menus
        select.appendChild(newOption);
        select.appendChild(newOption2);
    }

}

//get dropdown menu for latest work time from settings page
let stopWorkTime = document.body.querySelector("#stopWorkTime")
increments(stopWorkTime);

//get dropdown menu for earliest work time from settings page
let startWorkTime = document.body.querySelector("#startWorkTime")
increments(startWorkTime);
