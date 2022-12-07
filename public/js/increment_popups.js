//connects to copyToDo.html
//import {increments} from "./increments.js"
import {getUser,currentUser} from "./classes.js"

getUser(currentUser);
let user1 = currentUser;

document.body.querySelector("#evnt").addEventListener("click", function(){
    //fills "start time" and "stop time" with times in 30 minute increments on the add assignment pop-up

    //get dropdown menu for start time
    let Stime = document.body.querySelector("#Stime")
    //increments(Stime);

    //get dropdown menu for stop time
    let Etime = document.body.querySelector("#Etime")
    //increments(Etime);

    //get user schedule start time
    let schedStart = user1.getStartTime();
    let startHour = parseInt(schedStart.substring(0,schedStart.indexOf(":")));
    let startMin = parseInt(schedStart.substring(schedStart.indexOf(":") + 1));

    //get user schedule end time
    let schedEnd = user1.getEndTime();
    let endHour = parseInt(schedEnd.substring(0,schedEnd.indexOf(":")));
    let endMin = parseInt(schedEnd.substring(schedEnd.indexOf(":") + 1));

    //for start time dropdown menu:
    for(let i = startHour; i < endHour; i++){
        //create two option elements
        let newOption = document.createElement("option");
        let newOption2 = document.createElement("option");

        //set new option elements to the time 
        let number = i + ":00";
        newOption.innerText = number;
        let number2 = i + ":30";
        newOption2.innerText = number2;
        
        //set value attribute of new option elements
        newOption.setAttribute("value", number);
        newOption2.setAttribute("value", number2);

        //console.log("Value: " + newOption.getAttribute("value"));
        //console.log("Value: " + newOption2.getAttribute("value"));

        //append options to dropdown menu
        Stime.appendChild(newOption);
        Stime.appendChild(newOption2);
    }

    //for end time dropdown menu:
    for(let i = startHour; i < endHour; i++){
        //create two option elements
        let newOption = document.createElement("option");
        let newOption2 = document.createElement("option");

        //set new option elements to the time 
        let number = i + ":00";
        newOption.innerText = number;
        let number2 = i + ":30";
        newOption2.innerText = number2;
        
        //set value attribute of new option elements
        newOption.setAttribute("value", number);
        newOption2.setAttribute("value", number2);

        //append options to dropdown menu
        Etime.appendChild(newOption);
        Etime.appendChild(newOption2);
    }

    //adjust times in dropdown menu depending on if start time and end times end in ":00" or ":30"
    if(startMin == 30){
        //get first option element and
        //remove it from start and end time dropdown menus
        Stime.options[0].remove();
        Etime.options[0].remove();
    }
    if(endMin == 30){
        //add last element to start time dropdown menu
        let lastOption = document.createElement("option");
        lastOption.innerHTML = endHour + ":00";
        Stime.appendChild(lastOption);
    }
    if(endMin == 30){
        //add last element to start time dropdown menu
        let lastOption = document.createElement("option");
        lastOption.innerHTML = endHour + ":00";
        Etime.appendChild(lastOption);
    }
})







document.body.querySelector("#asmt").addEventListener("click", function(){
    //code for event pop-up
    //creates 30 min increments for event-pop ups
    let minutes = 30;

    //get dropdown menu for completion time
    let Ctime = document.body.querySelector("#Ctime")

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
})

