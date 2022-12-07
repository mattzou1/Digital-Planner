import {getUser,getStopTime, currentUser} from "./classes.js";

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
            user.addElement(startTime, getStopTime(startTime, length), user.assignments[index]);
            //console.log(user.assignments);
            //console.log(user.schedule);
        }
    });
}

