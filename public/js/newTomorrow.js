//import classes
import {weekdays, currentUser, getUser, getFormattedDate, getDayOfWeek} from './classes.js'

getUser(currentUser);
let user1 = currentUser;

//DOM is loaded
window.addEventListener("DOMContentLoaded", handler);

function handler(){ //event handler for after DOM is loaded
    //get the tomorrow button
    let tmrButton = document.querySelector("#tmrButton");

    //get the 'back' button
    let backButton = document.querySelector("#backButton");

    //get button for 'today'
    let todayButton = document.querySelector("#todayButton");

    //get day of week
    let date = document.querySelector("#dayOfWeek");

    //get header for calendar
    let calheader = document.body.querySelector("#currentDate");

    //create Date object with today's date
    let today = new Date();

    //if tomorrow button is clicked
    tmrButton.addEventListener("click", function() {
        //set today to one day later
        today.setDate(today.getDate() + 1);

        //adjust headers for day of week and the date above the calendar
        adjustHeaders(today);

        //remove assignments on today's date
        clearAssignments();
    });

    backButton.addEventListener("click", function() {
        //set today to one day earlier
        today.setDate(today.getDate() - 1);
        
        //adjust headers
        adjustHeaders(today);

        //remove assignments on today's date
        clearAssignments();
    });

    //if today clicked, update calendar headers to today's date
    todayButton.addEventListener("click", function() {
        //set day back to today
        today = new Date();
        
        //adjust headers
        adjustHeaders(today);

    });

    function adjustHeaders(today){
        //update day of week header to today
        date.innerHTML = today.toLocaleString('en-US', { weekday: "long"});
    
        let day = today.getDate();
        //console.log("day: " + day);
        let month = today.toLocaleString("default", { month: "long"});
        let year = today.getFullYear();
    
        //update calendar header to today
        calheader.innerHTML = `${month} ${day}, ${year}`;
    
    }
    
    //remove assignments when user goes past the current day
    function clearAssignments(){
        //store the assignments currently on calendar for today's date
        let assignment = document.querySelectorAll(`[id*="Copy"]`);

        //create copy of assignment
        let copy = document.querySelectorAll(`[id*="Copy"]`);

        //create array to store parent nodes of the assignments
        let storeParents = [];
        for(let i = 0; i < copy.length; i ++){
            let parent = copy[i].parentNode;
            storeParents.push(parent);
        }

        //if assignments exist, remove them
        if(assignment !== "null"){
            //cycle through each element, and remove it from the calendar
            assignment.forEach(ass => {
                //change the rowspan of cells to 1 if the assignments > 30 minutes
                if(ass.parentNode.rowSpan > 1){
                    ass.parentNode.setAttribute("rowSpan", 1);
                }
                //remove the assignments
                ass.remove();

                //resize any cells that are not sized properly
                let table = document.body.querySelector("table");
                for (let row of table.rows) {
                    //if any cells were removed when assignment was deleted
                    if(row.cells[1] == undefined){
                        //insert a cell at the end of the row
                        let newCell = row.insertCell(-1)

                        //add cell attributes to make it a holder for assignments
                        newCell.id = "calendarBox" + row.cells[0].innerHTML;
                        newCell.setAttribute("class", "holder");
                        newCell.setAttribute("ondrop", "drop(event)");
                        newCell.setAttribute("ondragover", "allowDrop(event)");
                    }
                }
            });
        }

        //if today button pushed, add assignments for current date back to calendar
        todayButton.addEventListener("click", function() {
            for(let i = 0; i < copy.length; i++){
                //get an assignment
                let firstAss = copy[i];
            
                //get parent of that assignment
                let firstParent = storeParents[i];

                //append assignment to parent to add it back to calendar
                firstParent.appendChild(firstAss);
                //console.log(copy.length);
            }
        });

    
    }
}
