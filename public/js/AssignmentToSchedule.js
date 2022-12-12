import {getUser,getStopTime, currentUser, inTimeRange} from "./classes.js";

getUser(currentUser);
let user = currentUser;

window.addEventListener("DOMContentLoaded", assToSchedule);


function assToSchedule(){
    let table = document.querySelector("table");
    table.addEventListener('mouseover', (event) => {
        let targetElement = event.target
        if(targetElement.className == "assignment"){
            let cell = targetElement.parentNode
            let row = cell.parentNode;
            let startTime = row.cells[0].innerHTML
            let length = cell.rowSpan * 30
            let assignmentid = targetElement.id; 
            let index = assignmentid.substring(10,11);
            //add assignment to calander
            user.addElement(startTime, getStopTime(startTime, length), user.assignments[index]);
        }
    });
}

